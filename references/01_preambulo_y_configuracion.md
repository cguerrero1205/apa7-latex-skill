# 01. Preámbulo y Configuración General de LaTeX para APA 7ª Edición

Este documento detalla la configuración del preámbulo de LaTeX necesaria para cumplir rigurosamente con los lineamientos de formato general de las **Normas APA 7ª edición**.

---

## 1. Parámetros Generales de Formato

| Elemento | Especificación APA 7 | Implementación en LaTeX |
| :--- | :--- | :--- |
| **Tamaño de Papel** | Carta (`letterpaper`: 21.59 cm x 27.94 cm) | `\documentclass[12pt,letterpaper]{article}` |
| **Márgenes** | 2.54 cm (1 pulgada) en los 4 costados | `\usepackage[letterpaper,margin=2.54cm]{geometry}` |
| **Tipografía Principal** | Times New Roman 12 pt | `\usepackage{newtxtext,newtxmath}` (o `mathptmx`) |
| **Interlineado** | Doble espacio (2.0) estricto | `\usepackage{setspace}\doublespacing` |
| **Espacio entre párrafos**| 0 pt (sin separación adicional entre párrafos) | `\setlength{\parskip}{0pt}` |
| **Alineación del texto** | Alineado a la izquierda, sin justificar | `\usepackage{ragged2e}\RaggedRight` |
| **Sangría de primera línea**| 1.27 cm (½ pulgada) en **todos** los párrafos | `\usepackage{indentfirst}\setlength{\parindent}{1.27cm}` |
| **Paginación** | Esquina superior derecha, arábigos desde portada | `\usepackage{fancyhdr}\rhead{\thepage}` |
| **Encabezado (Running head)**| Título corto en mayúsculas (máx. 50 caracteres) | `\lhead{TÍTULO CORTO DEL TRABAJO}` *(Opcional)* |
| **Numeración de títulos** | **Sin números ni letras** (no 1.1, no 1.2) | `\setcounter{secnumdepth}{0}` |
| **División del texto** | **No se divide por capítulos** | Usar clase `article` (no `book` ni `report`) |

---

## 2. Redefinición Obligatoria de Nombres de Sección y Rótulos

En español, paquetes como `babel` o `polyglossia` traducen por defecto los encabezados a términos no conformes con este instructivo (como "Índice General", "Índice de tablas" o "Cuadro"). En APA 7 se deben redefinir explícitamente:

```latex
% ========================================================
% REDEFINICIÓN ESTRICTA DE NOMBRES SEGÚN APA 7
% ========================================================
\renewcommand{\contentsname}{Tabla de Contenido}    % NUNCA "Índice general"
\renewcommand{\listtablename}{Lista de Tablas}      % NUNCA "Índice de tablas" ni "Índice de cuadros"
\renewcommand{\listfigurename}{Lista de Figuras}    % NUNCA "Índice de figuras"
\renewcommand{\tablename}{Tabla}                    % NUNCA "Cuadro"
\renewcommand{\figurename}{Figura}

% Para la bibliografía con biblatex:
\defbibheading{apa7bib}[\textbf{Referencias Bibliográficas}]{%
  \section*{#1}%
  \addcontentsline{toc}{section}{#1}%
}
```

---

## 3. Preámbulo Maestro Completo

```latex
\documentclass[12pt,letterpaper]{article}

% --- Idioma y codificación ---
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[spanish,es-tabla]{babel}

% --- Geometría y márgenes (2.54 cm en los cuatro lados) ---
\usepackage[letterpaper,margin=2.54cm]{geometry}

% --- Tipografía Times New Roman 12 pt ---
\usepackage{newtxtext,newtxmath}

% --- Interlineado 2.0 y control de párrafos ---
\usepackage{setspace}
\doublespacing
\setlength{\parskip}{0pt}  % Prohibido dejar espacio extra entre párrafos

% --- Sangría de 1.27 cm (0.5 pulgada) en TODOS los párrafos ---
\usepackage{indentfirst}   % Garantiza sangría incluso en el primer párrafo tras una sección
\setlength{\parindent}{1.27cm}

% --- Alineación a la izquierda (sin justificar) ---
\usepackage{ragged2e}
\RaggedRight

% --- Encabezados y paginación ---
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\rhead{\thepage}           % Número arábigo arriba a la derecha desde la portada
% \lhead{TÍTULO CORTO}     % Encabezado opcional (mayúsculas, máx. 50 caracteres)
\renewcommand{\headrulewidth}{0pt} % Prohibido líneas bajo el encabezado

% --- Supresión de numeración de secciones ---
\setcounter{secnumdepth}{0} % Prohibido rotular títulos con números (1., 1.1, etc.)

% --- Formato de títulos jerárquicos (titlesec) ---
\usepackage{titlesec}

% --- Tablas profesionales APA 7 (sin bordes verticales) ---
\usepackage{booktabs}
\usepackage{threeparttable}
\usepackage{array}

% --- Figuras y gráficos ---
\usepackage{graphicx}
\usepackage{caption}
\captionsetup{
  justification=RaggedRight,
  singlelinecheck=false,
  labelsep=newline,       % Etiqueta en una línea, título en la siguiente
  labelfont=bf,           % "Tabla 1" o "Figura 1" en negrita
  textfont=it             % Título descriptivo en cursiva
}

% --- Citas y Referencias con BibLaTeX en estilo APA 7 ---
\usepackage{csquotes}
\usepackage[
  style=apa,
  backend=biber,
  language=spanish
]{biblatex}

% --- Entorno para citas largas (>= 40 palabras) ---
\newenvironment{apaquote}
  {\begin{quote}\small\setstretch{1.5}\setlength{\leftmargin}{1.27cm}}
  {\end{quote}}
```

---

## 4. Prohibiciones Explícitas de Formato

1. **Cero Logotipos:** No se deben colocar logos institucionales ni de empresas en la portada ni en el cuerpo.
2. **Cero Bordes o Marcos:** No se deben usar marcos alrededor de la página.
3. **Cero Marcas de Agua:** Prohibidas marcas de agua de borrador, fondo o logotipos.
4. **Cero Resaltados de Color:** Los títulos y textos no se resaltan con color.
5. **Cero Subrayados:** Los títulos jamás se subrayan.
6. **Cero Páginas en Blanco:** El documento no debe contener páginas vacías.
