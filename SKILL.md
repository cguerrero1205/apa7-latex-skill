---
name: apa7-latex
description: Use when writing, formatting, converting, or auditing academic documents in LaTeX to comply strictly with APA 7th edition standards (margins, typography, heading hierarchy levels 1-5, section names, table/figure formatting without vertical lines, block quotes, continuous prose objectives/conclusions without bullets, biblatex-apa citations, and appendices).
---

# Skill: APA 7ª Edición para LaTeX (`apa7-latex`)

Esta skill proporciona las directrices completas, configuraciones de paquetes, macros, plantillas, ingeniería de código y herramientas de auditoría para producir documentos académicos en **LaTeX** que cumplan rigurosamente con las **Normas APA 7ª edición** y las mejores prácticas de la tipografía científica.

---

## 1. Reglas Doradas de Formato APA 7 en LaTeX

1. **Papel y Márgenes:** Tamaño carta (`letterpaper`), exactamente **2.54 cm** (1 pulgada) en los 4 lados (`\usepackage[letterpaper, margin=2.54cm]{geometry}`).
2. **Tipografía:** Times New Roman 12 pt (`\usepackage{newtxtext,newtxmath}` o `mathptmx`).
3. **Interlineado:** Doble espacio (**2.0**) estricto en todo el documento (`\usepackage{setspace}\doublespacing`). Cero espacio vertical adicional entre párrafos (`\setlength{\parskip}{0pt}`).
4. **Alineación:** Izquierda sin justificar (`\usepackage{ragged2e}\RaggedRight`).
5. **Sangría:** Sangría de primera línea de **1.27 cm** (½ pulgada) en **todos los párrafos** (`\usepackage{indentfirst}` + `\setlength{\parindent}{1.27cm}`). Nunca usar espacios manuales.
6. **Sin numeración en títulos:** Los títulos no llevan números ni letras (no "1.1", no "Capítulo 1"). Se usa `\setcounter{secnumdepth}{0}`.
7. **Nombres de secciones estandarizados en español:**
   - `\contentsname`: **Tabla de Contenido** (nunca "Índice general").
   - `\listtablename`: **Lista de Tablas** (nunca "Índice de tablas" ni "Índice de cuadros").
   - `\listfigurename`: **Lista de Figuras** (nunca "Índice de figuras").
   - `\tablename`: **Tabla** (nunca "Cuadro").
   - `\figurename`: **Figura**.
   - Encabezado bibliográfico: **Referencias Bibliográficas** (nunca "Bibliografía").
8. **Prohibición de viñetas o listas en secciones clave:**
   - **Objetivos Específicos:** Prohibido usar `itemize` o `enumerate`. Se redactan 3 o 4 párrafos continuos con sangría de 1.27 cm.
   - **Conclusiones y Recomendaciones:** Prohibido usar `itemize` o `enumerate`. Cada conclusión/recomendación es un párrafo continuo con sangría de 1.27 cm.
9. **Tablas APA 7:** CERO bordes verticales (`|`). Solo bordes horizontales con `booktabs` (`\toprule`, `\midrule`, `\bottomrule`). Número en negrita arriba (**Tabla 1**), título en cursiva en segunda línea (*Título breve*), y nota al pie (*Nota.* ... *Fuente.* ...).
10. **Citas y Ética:**
    - Citas cortas (<40 palabras): entre comillas en el párrafo con `\enquote{...}`.
    - Citas largas (≥40 palabras): bloque separado con sangría de 1.27 cm (`apaquote`), interlineado 1.5 o 2.0, sin comillas.
    - Ratio de citas: el texto citado no debe superar el 20% del trabajo (80% autoría propia).
11. **Referencias:** Sangría francesa de 1.27 cm, orden alfabético, gestionado con `biblatex` (`style=apa, backend=biber`).

---

## 2. Buenas Prácticas de Ingeniería y Tipografía en LaTeX

Al redactar, editar o auditar código LaTeX, la skill aplica estos principios:
- **Comillas tipográficas:** Usar siempre `\enquote{...}` de `csquotes`, nunca las comillas rectas del teclado (`"..."`).
- **Guiones adecuados:** Guion corto `-` para palabras compuestas; semirraya `--` para rangos de números o páginas (`pp.~12--18`); raya `---` para incisos explicativos.
- **Espacios no separables (`~`):** Usar siempre `~` antes de comandos de citación (`~\parencite`), números de página (`p.~12`), unidades (`2.54~cm`) y referencias cruzadas (`Tabla~\ref{...}`).
- **Posicionamiento de flotantes y referencias:** Ubicar `\label{...}` siempre dentro o después de `\caption{...}`, y utilizar `[htbp]` (evitando `[H]` a menos que sea imprescindible).
- **Escape de caracteres reservados:** Asegurar que caracteres como `%`, `&`, `_`, `$` y `#` estén correctamente escapados (`\%`, `\&`, `\_`, etc.).
- **Estructura modular:** En proyectos extensos, separar las secciones en la carpeta `secciones/` e invocarlas mediante `\input{...}` o `\include{...}` desde `main.tex`.
- **Ciclo Biber:** Compilar en el orden `pdflatex` $\rightarrow$ `biber` $\rightarrow$ `pdflatex` $\rightarrow$ `pdflatex`.

---

## 3. Modos de Operación de la Skill

### Modo 1: Auditoría y Corrección de Documentos LaTeX Existentes
Cuando el usuario proporciona código `.tex` para revisar o corregir:
1. Inspeccionar el preámbulo verificando los paquetes obligatorios (`geometry`, `setspace`, `indentfirst`, `ragged2e`, `titlesec`, `booktabs`, `caption`, `biblatex`).
2. Auditar la nomenclatura de secciones (`Tabla de Contenido`, `Lista de Tablas`, etc.).
3. Verificar si existen `\begin{itemize}` o `\begin{enumerate}` dentro de `Objetivos`, `Conclusiones` o `Recomendaciones` y convertirlos a prosa continua con sangría.
4. Detectar tablas con líneas verticales (`|c|c|`) y transformarlas a la sintaxis `booktabs`.
5. Comprobar buenas prácticas de tipografía (comillas, guiones, espacios duros `~`).
6. Ejecutar o recomendar el script de auditoría. Las rutas `scripts/`, `references/` y `resources/` son **relativas a la carpeta de esta skill** (la que contiene este `SKILL.md`), no al proyecto del usuario; usa la ruta absoluta de la skill al invocarlos:
   `node <carpeta-de-la-skill>/scripts/apa7_latex_linter.js ruta/al/documento.tex` (o con Python: `python <carpeta-de-la-skill>/scripts/apa7_latex_linter.py ruta/al/documento.tex`)
7. **Aplicar directamente las correcciones en el archivo** utilizando las herramientas de edición de archivos y reportar los cambios al usuario.

### Modo 2: Generación de Plantilla y Scaffolding
Cuando el usuario solicita comenzar un trabajo nuevo:
1. Leer `resources/plantilla_apa7.tex` (dentro de la carpeta de la skill) y copiarla al proyecto del usuario como base; no editar la plantilla original de la skill.
2. Incluir portada formal, resumen con palabras clave, abstract con keywords, tabla de contenido, listas preliminares (si aplican), introducción, justificación, objetivos en prosa, desarrollo por niveles 1 a 5, conclusiones en prosa, referencias y apéndices.

### Modo 3: Referenciación y Citación BibLaTeX
Cuando el usuario solicita referenciar o citar una fuente:
1. Consultar `references/06_catalogo_referencias_biblatex.md`.
2. Generar la entrada `.bib` exacta según la tipología (libro con autor/editor, journal con DOI, tesis de repositorio, ley, sentencia con magistrado ponente, video de YouTube, etc.).
3. Indicar los comandos de citación correspondientes:
   - Narrativa: `\textcite[p.~12]{clave}` $\rightarrow$ Autor (2020) señala que... (p. 12).
   - Parentética: `\parencite[p.~12]{clave}` $\rightarrow$ ... (Autor, 2020, p. 12).
4. Si faltan datos (autor, fecha o título), aplicar las reglas de la tabla de datos faltantes (`references/06_catalogo_referencias_biblatex.md`).

---

## 4. Documentación Modular de Referencia

Para consultar los lineamientos específicos de cada sección, recurre a los archivos en `references/`:
- [01_preambulo_y_configuracion.md](./references/01_preambulo_y_configuracion.md): Paquetes, márgenes, interlineado, sangrías y redefinición estricta de títulos.
- [02_jerarquia_titulos.md](./references/02_jerarquia_titulos.md): Definición detallada de los Niveles 1 al 5 con `titlesec`.
- [03_estructura_y_secciones.md](./references/03_estructura_y_secciones.md): Portada, Resumen, Objetivos (sin listas), Conclusiones, Secciones opcionales y Apéndices.
- [04_tablas_y_figuras.md](./references/04_tablas_y_figuras.md): Tablas con `booktabs`, figuras alineadas a la izquierda, notas y fuentes.
- [05_citas_en_texto.md](./references/05_citas_en_texto.md): Citas directas cortas/largas, parafraseo, reglas de autores, et al., ratio 20%.
- [06_catalogo_referencias_biblatex.md](./references/06_catalogo_referencias_biblatex.md): Catálogo de 20+ tipos de entradas `.bib` y tabla de datos faltantes.
- [07_buenas_practicas_latex.md](./references/07_buenas_practicas_latex.md): Tipografía fina (comillas, guiones, espacios duros `~`), modularidad del proyecto, gestión de flotantes e higiene del preámbulo.
- [08_depuracion_y_compilacion.md](./references/08_depuracion_y_compilacion.md): Motores (`pdflatex`, `xelatex`, `lualatex`), ciclo Biber de 4 pasos, resolución de errores (*overfull \hbox*, caracteres especiales) y limpieza.

---

## 5. Recursos y Herramientas

- Plantilla Maestra: [plantilla_apa7.tex](./resources/plantilla_apa7.tex)
- Base Bibliográfica Modelo: [referencias_ejemplo.bib](./resources/referencias_ejemplo.bib)
- Script Linter / Validador en Node.js: [apa7_latex_linter.js](./scripts/apa7_latex_linter.js)
- Script Linter / Validador en Python: [apa7_latex_linter.py](./scripts/apa7_latex_linter.py)
