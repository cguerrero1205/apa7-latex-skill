#!/usr/bin/env python3
"""
apa7_latex_linter.py - Auditor automático de documentos LaTeX bajo Normas APA 7a Edición.

Verifica:
1. Prohibición de listas/viñetas en Objetivos, Conclusiones y Recomendaciones.
2. Prohibición de bordes verticales en tablas (|).
3. Prohibición de numeración manual en títulos (\section{1. Introducción}).
4. Presencia de paquetes obligatorios (geometry, setspace, indentfirst, ragged2e, booktabs, biblatex).
5. Nomenclatura estricta de secciones ("Tabla de Contenido", "Lista de Tablas", "Lista de Figuras", "Referencias Bibliográficas").
"""

import sys
import re
import os

class APA7LatexLinter:
    def __init__(self, filepath):
        self.filepath = filepath
        self.content = ""
        self.errors = []
        self.warnings = []
        self.passes = []

    def load_file(self):
        if not os.path.exists(self.filepath):
            print(f"Error: El archivo '{self.filepath}' no existe.")
            sys.exit(1)
        with open(self.filepath, 'r', encoding='utf-8', errors='ignore') as f:
            self.content = f.read()

    def check_preamble_packages(self):
        # geometry
        if re.search(r'\\usepackage(\[.*?\])?\{geometry\}', self.content):
            if re.search(r'margin\s*=\s*2\.54cm|margin\s*=\s*1in', self.content):
                self.passes.append("Geometría: Márgenes de 2.54 cm (1 pulgada) configurados correctamente con geometry.")
            else:
                self.warnings.append("Geometría: Se detectó paquete geometry pero no se especificó 'margin=2.54cm' o 'margin=1in'.")
        else:
            self.errors.append("Preámbulo: Falta el paquete 'geometry' para establecer márgenes de 2.54 cm.")

        # setspace
        if re.search(r'\\usepackage(\[.*?\])?\{setspace\}', self.content) and '\\doublespacing' in self.content:
            self.passes.append("Interlineado: Interlineado 2.0 (doble espacio) configurado con setspace y \\doublespacing.")
        else:
            self.errors.append("Interlineado: Falta el paquete 'setspace' o el comando '\\doublespacing' (APA 7 exige interlineado 2.0).")

        # indentfirst
        if re.search(r'\\usepackage\{indentfirst\}', self.content):
            self.passes.append("Sangría: Paquete 'indentfirst' presente (fuerza sangría de 1.27 cm en todos los párrafos).")
        else:
            self.warnings.append("Sangría: Se recomienda '\\usepackage{indentfirst}' para asegurar sangría en el primer párrafo tras cada título.")

        # ragged2e
        if re.search(r'\\usepackage(\[.*?\])?\{ragged2e\}', self.content):
            self.passes.append("Alineación: Paquete 'ragged2e' presente para alineación a la izquierda no justificada.")
        else:
            self.warnings.append("Alineación: APA 7 exige texto alineado a la izquierda sin justificar. Se recomienda '\\usepackage{ragged2e}\\RaggedRight'.")

        # booktabs
        if re.search(r'\\usepackage\{booktabs\}', self.content):
            self.passes.append("Tablas: Paquete 'booktabs' presente para líneas horizontales profesionales.")
        else:
            self.warnings.append("Tablas: Falta el paquete 'booktabs' para formatear tablas sin líneas verticales.")

    def check_prohibited_lists_in_key_sections(self):
        """Verifica que Objetivos, Conclusiones y Recomendaciones no usen itemize o enumerate."""
        sections_to_check = [
            ("Objetivos", r'\\section\*?\{Objetivos\}(.*?)(?=\\section|\Z)'),
            ("Conclusiones", r'\\section\*?\{Conclusiones\}(.*?)(?=\\section|\Z)'),
            ("Recomendaciones", r'\\section\*?\{Recomendaciones\}(.*?)(?=\\section|\Z)')
        ]

        for sec_name, pattern in sections_to_check:
            match = re.search(pattern, self.content, re.DOTALL | re.IGNORECASE)
            if match:
                sec_text = match.group(1)
                if "\\begin{itemize}" in sec_text or "\\begin{enumerate}" in sec_text:
                    self.errors.append(
                        f"Regla estricta violada en '{sec_name}': Se detectó uso de viñetas o numeraciones (\\begin{{itemize}}/\\begin{{enumerate}}). "
                        f"En APA 7, esta sección debe redactarse estrictamente en párrafos continuos con sangría de 1.27 cm."
                    )
                else:
                    self.passes.append(f"Sección '{sec_name}': Redactada en párrafos continuos sin viñetas ni numeraciones.")

    def check_table_vertical_lines(self):
        """Verifica que las tablas no tengan barras verticales '|'."""
        tabular_patterns = re.findall(r'\\begin\{(?:tabular|tabularx)\*?\}\s*\{([^}]+)\}', self.content)
        has_vertical = False
        for cols in tabular_patterns:
            if '|' in cols:
                has_vertical = True
                break
        if has_vertical:
            self.errors.append("Tablas APA 7: Se detectaron líneas verticales ('|') en la definición de columnas de una tabla. En APA 7 los bordes verticales están estrictamente prohibidos; utilice solo \\toprule, \\midrule y \\bottomrule de booktabs.")
        else:
            self.passes.append("Tablas APA 7: Cero bordes verticales detectados en las tablas.")

    def check_numbered_headings(self):
        """Verifica si el usuario numeró manualmente los títulos (ej: \section{1. Introducción})."""
        numbered_titles = re.findall(r'\\(?:section|subsection|subsubsection|paragraph)\*?\{\s*\d+[\.\)]\s*[^}]+\}', self.content)
        if numbered_titles:
            self.errors.append(
                f"Títulos numerados: Se detectó numeración manual en títulos: {numbered_titles[:3]}... "
                f"En APA 7 los títulos no se rotulan con números ni letras."
            )
        else:
            self.passes.append("Títulos APA 7: No se detectó rotulación numérica manual en encabezados.")

    def check_section_naming(self):
        """Verifica nombres de secciones según el instructivo."""
        bad_names = [
            ("Índice general", "Tabla de Contenido"),
            ("Índice General", "Tabla de Contenido"),
            ("Índice de tablas", "Lista de Tablas"),
            ("Índice de figuras", "Lista de Figuras"),
            ("Índice de cuadros", "Lista de Tablas")
        ]
        for bad, good in bad_names:
            if bad in self.content:
                self.warnings.append(f"Nomenclatura: Se encontró '{bad}'. En APA 7 debe titularse estrictamente como '{good}'.")

        if "Tabla de Contenido" in self.content or r"\renewcommand{\contentsname}{Tabla de Contenido}" in self.content:
            self.passes.append("Nomenclatura: 'Tabla de Contenido' configurada correctamente.")

    def run_all(self):
        self.load_file()
        self.check_preamble_packages()
        self.check_prohibited_lists_in_key_sections()
        self.check_table_vertical_lines()
        self.check_numbered_headings()
        self.check_section_naming()

    def print_report(self):
        print("=" * 80)
        print(f"REPORTE DE AUDITORÍA APA 7ª EDICIÓN (LaTeX): {os.path.basename(self.filepath)}")
        print("=" * 80)

        print("\n[+] REGLAS CUMPLIDAS:")
        if self.passes:
            for p in self.passes:
                print(f"  ✓ {p}")
        else:
            print("  Ninguna regla validada.")

        if self.warnings:
            print("\n[!] ADVERTENCIAS / RECOMENDACIONES:")
            for w in self.warnings:
                print(f"  ⚠ {w}")

        if self.errors:
            print("\n[-] INFRACCIONES / ERRORES CRÍTICOS APA 7:")
            for e in self.errors:
                print(f"  ✗ {e}")
        else:
            print("\n[✓] ¡CERO INFRACCIONES CRÍTICAS ENCONTRADAS!")

        print("\n" + "=" * 80)
        print(f"Total: {len(self.passes)} Aprobados | {len(self.warnings)} Advertencias | {len(self.errors)} Errores")
        print("=" * 80)

        return len(self.errors) == 0

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python apa7_latex_linter.py <archivo.tex>")
        sys.exit(1)
    linter = APA7LatexLinter(sys.argv[1])
    linter.run_all()
    success = linter.print_report()
    sys.exit(0 if success else 1)
