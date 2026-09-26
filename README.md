# APA 7ª Edición para LaTeX (`apa7-latex-skill`)

[![LaTeX](https://img.shields.io/badge/LaTeX-Typesetting-blue.svg?logo=latex)](https://www.latex-project.org/)
[![Normas APA](https://img.shields.io/badge/APA-7ª%20Edición-green.svg)](https://apastyle.apa.org/)
[![Agent Skill](https://img.shields.io/badge/AI%20Agent-Skill-purple.svg)](https://agentskills.io/)
[![Linter](https://img.shields.io/badge/Linter-Node.js%20%7C%20Python-orange.svg)](#herramienta-de-auditoría-linter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Skill completa y suite de ingeniería tipográfica para que asistentes de Inteligencia Artificial (como **Google Antigravity**, **OpenAI Codex**, **Claude Code**, etc.) y autores académicos puedan redactar, formatear, auditar y corregir documentos en **LaTeX** bajo las **Normas APA 7ª edición**, aplicando los más altos estándares de calidad editorial.

---

## 🌟 Características Principales

- 📖 **Manual de Referencia Modular:** 8 guías técnicas detalladas que cubren desde el preámbulo estricto hasta la tipografía científica y citas en BibLaTeX.
- 📐 **Plantilla Maestra Compilable:** Código `.tex` completo y modular listo para compilar con `pdflatex` / `xelatex` + `biber`.
- 🔍 **Auditor Automatizado (Linter):** Script en Node.js y Python que evalúa 14 reglas críticas (prohibición de viñetas en objetivos/conclusiones, líneas verticales en tablas, numeración de títulos, preámbulo, etc.).
- ✍️ **Edición Directa con Asistentes IA:** La skill instruye a tu agente de IA para que no solo detecte errores, sino que **edite y corrija directamente el archivo `.tex`** en tu disco.
- 📚 **Catálogo de 20+ Tipos de Referencias:** Modelos `.bib` para libros, artículos con DOI, prensa, tesis, software, medios audiovisuales (YouTube, cine, podcasts), redes sociales y legislación.
- ⚙️ **Ingeniería Tipográfica Avanzada:** Incorpora las mejores prácticas de composición en LaTeX (basadas en `latex-advice` de Context7), tales como control de comillas `\enquote`, espacios duros `~`, gestión de flotantes y paquetes modernos (`siunitx`, `booktabs`, `csquotes`).

---

## 🚀 Instalación Rápida

La skill sigue el estándar abierto [Agent Skills](https://agentskills.io/) (`SKILL.md` con `name` y `description`), por lo que funciona en **Google Antigravity**, **OpenAI Codex** y **Claude** (Claude Code, app de escritorio y claude.ai). Solo cambia la carpeta donde se instala. Clona siempre en una carpeta llamada `apa7-latex`.

### Google Antigravity

**Global** (todas tus sesiones y proyectos):

```bash
git clone https://github.com/cguerrero1205/apa7-latex-skill.git ~/.gemini/config/skills/apa7-latex
```

**Por proyecto** (en la raíz de tu proyecto):

```bash
mkdir -p .agents/skills
git clone https://github.com/cguerrero1205/apa7-latex-skill.git .agents/skills/apa7-latex
```

### OpenAI Codex

**Personal** (todas tus sesiones y proyectos):

```bash
git clone https://github.com/cguerrero1205/apa7-latex-skill.git ~/.codex/skills/apa7-latex
```

**Por proyecto** (en la raíz de tu proyecto):

```bash
mkdir -p .codex/skills
git clone https://github.com/cguerrero1205/apa7-latex-skill.git .codex/skills/apa7-latex
```

Codex la puede activar automáticamente por su `description`, o puedes invocarla directamente con `$apa7-latex`.

### Claude Code (CLI, IDE y pestaña Code de la app de escritorio)

**Personal** (todas tus sesiones y proyectos):

```bash
git clone https://github.com/cguerrero1205/apa7-latex-skill.git ~/.claude/skills/apa7-latex
```

**Por proyecto** (en la raíz de tu proyecto; se comparte con quien clone el repo):

```bash
mkdir -p .claude/skills
git clone https://github.com/cguerrero1205/apa7-latex-skill.git .claude/skills/apa7-latex
```

Claude la activa automáticamente cuando trabajas con LaTeX/APA 7, o puedes invocarla directamente con `/apa7-latex`.

### Claude (claude.ai y app de escritorio, modo chat)

1. Descarga el repositorio como ZIP (**Code → Download ZIP**) y descomprímelo.
2. Renombra la carpeta a `apa7-latex` y vuelve a comprimirla, de modo que el ZIP contenga `apa7-latex/SKILL.md`.
3. En Claude ve a **Settings → Capabilities → Skills**, pulsa **Upload skill** y selecciona el ZIP.

> Requiere tener activada la ejecución de código. En este modo Claude no edita archivos de tu disco: te devuelve el `.tex` corregido para descargar.

---

## 📋 Reglas Doradas de Formato APA 7 en LaTeX

| Parámetro | Regla APA 7ª Edición | Implementación en LaTeX |
| :--- | :--- | :--- |
| **Papel y Márgenes** | Tamaño carta, exactamente **2.54 cm** en los 4 lados | `\usepackage[letterpaper, margin=2.54cm]{geometry}` |
| **Tipografía** | Times New Roman 12 pt | `\usepackage{newtxtext,newtxmath}` o `fontspec` |
| **Interlineado** | Doble espacio (**2.0**) estricto, 0 pt entre párrafos | `\usepackage{setspace}\doublespacing\setlength{\parskip}{0pt}` |
| **Alineación** | A la izquierda sin justificar | `\usepackage{ragged2e}\RaggedRight` |
| **Sangría** | **1.27 cm** (½ pulgada) en **todos** los párrafos | `\usepackage{indentfirst}\setlength{\parindent}{1.27cm}` |
| **Sin Numeración** | Sin números ni letras en títulos (no "1.1", no capítulos) | `\setcounter{secnumdepth}{0}` |
| **Nombres de Sección**| Español normalizado (no "Índice general") | `Tabla de Contenido`, `Lista de Tablas`, `Lista de Figuras`, `Referencias Bibliográficas` |
| **Objetivos** | **Prohibido listas o viñetas** (`itemize`/`enumerate`) | Párrafos continuos con sangría de 1.27 cm |
| **Conclusiones** | **Prohibido listas o viñetas** (`itemize`/`enumerate`) | Párrafos continuos con sangría de 1.27 cm |
| **Recomendaciones** | **Prohibido listas o viñetas** (`itemize`/`enumerate`) | Párrafos continuos con sangría de 1.27 cm |
| **Tablas** | **Cero líneas verticales (`\|`)**, solo horizontales | `\usepackage{booktabs}` (`\toprule`, `\midrule`, `\bottomrule`) |
| **Citas en Bloque** | 40 o más palabras en bloque con sangría de 1.27 cm | Entorno `\begin{apaquote} ... \end{apaquote}` |
| **Referencias** | Sangría francesa de 1.27 cm, orden alfabético | `\usepackage[style=apa, backend=biber]{biblatex}` |

---

## 🗂️ Estructura del Repositorio

```text
apa7-latex-skill/
├── SKILL.md                               # Manifiesto y guía maestra de la skill
├── README.md                              # Documentación general y guía de instalación
├── LICENSE                                # Licencia abierta MIT
├── references/                            # Módulos de referencia técnica detallada
│   ├── 01_preambulo_y_configuracion.md    # Márgenes, fuentes, interlineado, sangrías y nombres
│   ├── 02_jerarquia_titulos.md            # Configuración titlesec para Niveles 1 al 5
│   ├── 03_estructura_y_secciones.md       # Portada, Resumen, Objetivos en prosa, Conclusiones y Apéndices
│   ├── 04_tablas_y_figuras.md             # Booktabs sin líneas verticales, dos líneas y notas/fuentes
│   ├── 05_citas_en_texto.md               # Citas cortas/largas (apaquote), et al., narrativas/parentéticas
│   ├── 06_catalogo_referencias_biblatex.md# Catálogo de 20+ tipologías y tratamiento de datos faltantes
│   ├── 07_buenas_practicas_latex.md       # Tipografía científica, comillas \enquote, espacios duros ~ y flotantes
│   └── 08_depuracion_y_compilacion.md     # Ciclo Biber, motores (pdflatex/xelatex) y resolución de errores
├── resources/
│   ├── plantilla_apa7.tex                 # Plantilla LaTeX completa lista para compilar
│   └── referencias_ejemplo.bib            # Base bibliográfica .bib de prueba
└── scripts/
    ├── apa7_latex_linter.js               # Auditor automatizado en Node.js
    └── apa7_latex_linter.py               # Auditor automatizado en Python
```

---

## 🛠️ Herramienta de Auditoría (Linter)

Puedes auditar cualquier archivo `.tex` para verificar automáticamente si cumple con los estándares APA 7 y las buenas prácticas de LaTeX.

### Con Node.js:
```bash
node scripts/apa7_latex_linter.js ruta/a/tu_documento.tex
```

### Con Python:
```bash
python scripts/apa7_latex_linter.py ruta/a/tu_documento.tex
```

#### Salida de ejemplo:
```text
================================================================================
REPORTE DE AUDITORÍA APA 7ª EDICIÓN Y BUENAS PRÁCTICAS LATEX: plantilla_apa7.tex
================================================================================

[+] REGLAS CUMPLIDAS:
  ✓ Geometría: Márgenes de 2.54 cm configurados correctamente.
  ✓ Interlineado: Interlineado 2.0 (doble espacio) configurado con setspace.
  ✓ Sangría: Paquete 'indentfirst' presente (sangría de primera línea en todos los párrafos).
  ✓ Alineación: Paquete 'ragged2e' presente para texto no justificado a la izquierda.
  ✓ Tablas: Paquete 'booktabs' presente para líneas horizontales profesionales.
  ✓ Tablas APA 7: Cero bordes verticales detectados en las tablas.
  ✓ Sección 'Objetivos': Redactada en prosa continua sin viñetas ni numeraciones.
  ✓ Sección 'Conclusiones': Redactada en prosa continua sin viñetas ni numeraciones.
  ✓ Sección 'Recomendaciones': Redactada en prosa continua sin viñetas ni numeraciones.
  ✓ Títulos APA 7: No se detectó rotulación numérica manual en encabezados.
  ✓ Nomenclatura: 'Tabla de Contenido' configurada correctamente.
  ✓ Buenas prácticas LaTeX: Paquete 'csquotes' presente para comillas tipográficas.
  ✓ Buenas prácticas LaTeX: Comillas tipográficas gestionadas adecuadamente.
  ✓ Buenas prácticas LaTeX: Posicionamiento correcto de \label con respecto a \caption.

[✓] ¡CERO INFRACCIONES CRÍTICAS ENCONTRADAS!
================================================================================
Total: 14 Aprobados | 0 Advertencias | 0 Errores
================================================================================
```

---

## 💬 Ejemplos de Uso con Asistentes de IA

Una vez instalada la skill, puedes darle instrucciones directas a tu asistente de IA en lenguaje natural:

1. **Auditar y corregir un documento existente:**
   > *"Revisa mi archivo `tesis.tex` con la skill apa7-latex y corrígelo en mi disco para que cumpla con todas las normas."*
2. **Generar un trabajo desde cero:**
   > *"Crea una estructura completa en LaTeX usando la plantilla APA 7 para una investigación sobre aprendizaje automático en medicina."*
3. **Formatear tablas o figuras complejas:**
   > *"Convierte esta tabla con datos experimentales a formato APA 7 con `booktabs`, nota explicativa y autoría propia."*
4. **Construir entradas bibliográficas y citas:**
   > *"Genera la entrada en BibLaTeX y la cita narrativa y parentética para este artículo con DOI: 10.1016/j.ejemplo.2023..."*
5. **Eliminar listas en secciones restringidas:**
   > *"Tengo estos objetivos con viñetas en LaTeX, redáctalos como la prosa continua que exige APA 7."*

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT** - consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas proponer nuevas tipologías bibliográficas, mejoras en los scripts o refinamientos en las macros de LaTeX, siéntete libre de abrir un *Issue* o enviar un *Pull Request*.
