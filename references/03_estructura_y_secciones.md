# 03. Estructura del Documento y Redacción de Secciones en LaTeX

Este documento describe con estricto detalle el orden secuencial, formato tipográfico y reglas de redacción de cada sección según el instructivo APA 7ª edición.

---

## 1. Orden General de Páginas y Secciones

1. **Portada** (Página 1, paginada arábigo arriba a la derecha)
2. **Dedicatoria** *(Opcional, en página nueva)*
3. **Agradecimientos** *(Opcional, en página nueva)*
4. **Resumen** (Con palabras clave, en página nueva)
5. **Abstract** (Con keywords, en página nueva)
6. **Tabla de Contenido** (En página nueva)
7. **Lista de Tablas** *(Opcional/Condicional, en página nueva)*
8. **Lista de Figuras** *(Opcional/Condicional, en página nueva)*
9. **Lista de Apéndices** *(Opcional/Condicional, en página nueva)*
10. **Introducción** (Cuerpo principal, en página nueva)
11. **Justificación** (En página nueva)
12. **Objetivos** (General y Específicos sin viñetas, en página nueva)
13. **Contenido del Trabajo** (Desarrollo con Niveles 1 al 5)
14. **Conclusiones** (En prosa continua sin viñetas, en página nueva)
15. **Recomendaciones** *(Opcional/Si aplica, en prosa continua sin viñetas, en página nueva)*
16. **Referencias Bibliográficas** (En página nueva, sangría francesa)
17. **Apéndices** *(Opcional/Si aplica, cada uno en página nueva)*

---

## 2. La Portada Académica

### Reglas:
- Paginación: número `1` en la esquina superior derecha.
- Encabezado: opcional, mayúscula sostenida (máx. 50 caracteres).
- Título: centrado, en negrita, tipo título (mayúscula solo al inicio de palabras principales).
- Autor(es): nombre y apellidos completos.
- Asesor: la palabra `Asesor` centrada y debajo el nombre del docente.
- Datos de afiliación: Universidad/Institución, Facultad/Escuela, Programa académico y Año.
- **Prohibiciones:** Sin logos, sin marcos/bordes, sin marcas de agua, sin texto en color.

### Código LaTeX:
```latex
\begin{titlepage}
    \pagestyle{fancy}
    \fancyhf{}
    \rhead{\thepage}
    \vspace*{2cm}
    \begin{center}
        {\bfseries\large Título del Trabajo en Negrita y Mayúscula Inicial\par}
        \vspace{2.5cm}
        {Nombre y Apellidos del Estudiante\par}
        % Si son varios autores, agregar uno debajo del otro:
        % {Nombre y Apellidos Segundo Estudiante\par}
        \vspace{2.5cm}
        {Asesor\par}
        {Nombre y Apellidos del Docente\par}
        \vfill
        {Institución Educativa Superior\par}
        {Facultad de Ciencias y Humanidades\par}
        {Programa Académico de Posgrado\par}
        {2024\par}
    \end{center}
\end{titlepage}
```

---

## 3. Secciones Preliminares Opcionales

### A. Dedicatoria
- **Regla del instructivo:** *"Esta página es opcional, el texto debe ir centrado, sin sangría de primera línea."*
- Inicia en página nueva.
```latex
\clearpage
\vspace*{\fill}
\begin{center}
    \textit{A mis padres y mentores, por su constante apoyo y dedicación durante este proceso de formación.}
\end{center}
\vspace*{\fill}
```

### B. Agradecimientos
- **Regla del instructivo:** *"Esta página es opcional, el texto debe ir centrado, sin sangría de primera línea."*
- Inicia en página nueva.
```latex
\clearpage
\vspace*{\fill}
\begin{center}
    \textit{Expreso mi sincera gratitud al equipo docente y a las instituciones colaboradoras por facilitar los recursos necesarios para el desarrollo de esta investigación.}
\end{center}
\vspace*{\fill}
```

---

## 4. Resumen y Abstract

### Reglas:
- Título: Título Nivel 1 centrado en negrita (`Resumen` o `Abstract`).
- Extensión: **máximo 350 palabras**.
- Estructura: **un solo párrafo**, alineado a la izquierda, **sin sangría de primera línea** (`\noindent`).
- Palabras clave / Keywords: con sangría de 1.27 cm, el rótulo en **negrita y cursiva** (`\textbf{\textit{Palabras clave:}}`), seguido de los términos separados por comas.

### Código LaTeX:
```latex
\clearpage
\begin{center}
    \textbf{\large Resumen}
\end{center}
\vspace{12pt}
\noindent El resumen es un texto sintético de máximo 350 palabras que se escribe en un solo párrafo sin sangría de primera línea, alineado a la izquierda. Describe con precisión el problema, los objetivos, el método empleado, los hallazgos principales y las conclusiones alcanzadas. La información debe ser transparente y directa para que el lector identifique con facilidad el núcleo de la investigación.

\vspace{12pt}
\noindent\hspace*{1.27cm}\textbf{\textit{Palabras clave:}} Educación, metodología, aprendizaje, competencias.

\clearpage
\begin{center}
    \textbf{\large Abstract}
\end{center}
\vspace{12pt}
\noindent The abstract is a concise single-paragraph text of maximum 350 words, left-aligned, and without first-line indentation. It outlines the problem investigated, primary research objectives, methodology applied, core findings, and overall conclusions. The content must be clear and precise to allow quick identification of the central theme.

\vspace{12pt}
\noindent\hspace*{1.27cm}\textbf{\textit{Keywords:}} Education, methodology, learning, skills.
```

---

## 5. Tabla de Contenido y Listas Preliminares

### Reglas:
- **Nombres estrictos:**
  - `Tabla de Contenido` (NUNCA "Índice general").
  - `Lista de Tablas` (NUNCA "Índice de tablas" ni "Índice de cuadros").
  - `Lista de Figuras` (NUNCA "Índice de figuras").
  - `Lista de Apéndices` (si aplica).
- Cada lista inicia obligatoriamente en **página nueva**.

### Código LaTeX:
```latex
\clearpage
\tableofcontents

\clearpage
\listoftables

\clearpage
\listoffigures
```

---

## 6. Introducción y Justificación

### Reglas:
- Inician en página nueva con título Nivel 1 (centrado, negrita, mayúscula capitalizada, sin número).
- **Todos los párrafos** llevan sangría de primera línea de 1.27 cm (`indentfirst`).
- Interlineado 2.0, sin espacios libres entre párrafos.

```latex
\clearpage
\section{Introducción}

En este apartado se contextualiza la problemática objeto de estudio, los antecedentes teóricos y el alcance del trabajo. Cada párrafo utiliza la sangría reglamentaria de 1.27 cm.

El desarrollo argumentativo debe mantener un tono académico objetivo y riguroso, evitando opiniones no sustentadas y garantizando la citación precisa de las fuentes.

\clearpage
\section{Justificación}

La justificación expone la relevancia académica, social, metodológica o práctica de la investigación, argumentando por qué es pertinente su realización.

Se describe el valor añadido que aportan los resultados y el impacto proyectado en la disciplina correspondiente.
```

---

## 7. Objetivos: Prohibición Estricta de Listas y Viñetas

> [!CAUTION]
> **REGLA DE ORO DEL INSTRUCTIVO (Página 20):**
> *"Dependiendo del trabajo, se relacionan 3 o 4 objetivos, todos con sangría de primera línea de 1,27 cm, **no se deben relacionar con viñetas o números**."*
> **ESTÁ PROHIBIDO** usar `\begin{itemize}` o `\begin{enumerate}` en la formulación de objetivos.

### Código LaTeX Correcto:
```latex
\clearpage
\section{Objetivos}

\subsection{Objetivo General}
Determinar el impacto de la implementación de entornos virtuales de aprendizaje en el desarrollo de la autonomía académica de los estudiantes de educación superior durante el período lectivo analizado.

\subsection{Objetivos Específicos}
Identificar los factores metodológicos y pedagógicos que inciden directamente en el compromiso de los participantes frente a las actividades formativas virtuales.

Analizar la percepción de docentes y estudiantes respecto a la efectividad de las herramientas tecnopedagógicas utilizadas en la interacción sincrónica y asincrónica.

Diseñar una propuesta pedagógica basada en microaprendizaje orientada a optimizar el rendimiento y la permanencia estudiantil en el programa.
```

---

## 8. Conclusiones y Recomendaciones: Prohibición de Listas

> [!CAUTION]
> **REGLAS DEL INSTRUCTIVO (Páginas 24 y 25):**
> - **Conclusiones:** *"Todos los trabajos académicos deben contener una o más conclusiones. **En este apartado no se ubican viñetas, ni tampoco numeraciones**."*
> - **Recomendaciones:** *"Todos los trabajos académicos deben contener una o más recomendaciones. **En este apartado no se ubican viñetas, ni tampoco numeraciones**."*
> Ambos apartados se estructuran en párrafos continuos con sangría de primera línea de 1.27 cm.

### Código LaTeX Correcto:
```latex
\clearpage
\section{Conclusiones}

El análisis de los datos evidenció que las mediaciones pedagógicas interactivas fortalecen de manera estadísticamente significativa la autorregulación del aprendizaje en los estudiantes.

Se comprobó que el acompañamiento docente oportuno reduce en un 35\% la tasa de deserción en cursos con alta exigencia conceptual.

La articulación entre recursos multimedia accesibles y actividades de evaluación formativa consolida la apropiación de competencias profesionales en el estudiantado.

\clearpage
\section{Recomendaciones}

Se sugiere a las instituciones de educación superior implementar programas continuos de capacitación docente en diseño instruccional y mediación virtual.

Es conveniente profundizar en futuras investigaciones sobre el impacto de la inteligencia artificial generativa como soporte al aprendizaje autónomo en modalidades a distancia.
```

---

## 9. Apéndices

### Reglas:
- Cada apéndice inicia en **página nueva** (`\clearpage`).
- Rótulo superior: **Apéndice A** (centrado, en negrita y **sin punto final**).
- Nombre del apéndice: en la segunda línea, en **cursiva y sin negrita**.
- Si contiene tablas o figuras, se nombran: `Tabla A1`, `Figura A1`, etc.

### Código LaTeX:
```latex
\clearpage
\begin{center}
    {\bfseries Apéndice A\par}
    \vspace{6pt}
    {\itshape Instrumento de Recolección de Datos: Cuestionario de Percepción\par}
\end{center}
\vspace{18pt}

A continuación se presenta el instrumento aplicado para evaluar la percepción de los participantes respecto a la mediación pedagógica virtual...
```
