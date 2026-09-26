# 02. Jerarquía de Títulos (Niveles 1 al 5) en LaTeX para APA 7

El instructivo establece con total precisión las reglas tipográficas para los cinco niveles de encabezados en APA 7ª edición.

---

## 1. Tabla Resumen de los 5 Niveles de Títulos

| Nivel | Formato Tipográfico | Alineación y Sangría | Inicio del Texto | Comando LaTeX |
| :---: | :--- | :--- | :--- | :---: |
| **1** | **Negrita**, Mayúscula en cada palabra principal | **Centrado**, sin sangría. Inicia en **nueva página** | Nuevo párrafo con sangría de 1.27 cm | `\section{...}` |
| **2** | **Negrita**, Mayúscula en cada palabra principal | **Alineado a la izquierda**, sin sangría | Nuevo párrafo con sangría de 1.27 cm | `\subsection{...}` |
| **3** | **Negrita y Cursiva**, Mayúscula en cada palabra | **Alineado a la izquierda**, sin sangría | Nuevo párrafo con sangría de 1.27 cm | `\subsubsection{...}` |
| **4** | **Negrita**, Mayúscula en cada palabra, **con punto final** | **Alineado a la izquierda, con sangría de 1.27 cm** | **Inicia en la misma línea** (*run-in*) | `\paragraph{...}` |
| **5** | **Negrita y Cursiva**, Mayúscula en cada palabra, **con punto final** | **Alineado a la izquierda, con sangría de 1.27 cm** | **Inicia en la misma línea** (*run-in*) | `\subparagraph{...}` |

---

## 2. Reglas Cruciales de Títulos

1. **Sin numeración ni viñetas:** Jamás etiquetar títulos con números o letras (está prohibido escribir `1. Introducción`, `2.1 Marco Teórico`, `A. Objetivos`).
2. **Sin capítulos:** El trabajo no se divide por capítulos; se organiza por títulos de sección.
3. **Sin subrayados:** Los títulos nunca se subrayan.
4. **Mayúsculas estilo título:** Cada palabra sustantiva, adjetivo, verbo o adverbio inicia en mayúscula; conectores cortos, preposiciones y artículos van en minúscula (ej. *en*, *el*, *de*, *y*).
5. **Salto de página en Nivel 1:** Cada título de primer nivel da comienzo a una nueva página (`\clearpage`).

---

## 3. Configuración en LaTeX con `titlesec`

Colocar este bloque en el preámbulo:

```latex
\usepackage{titlesec}

% Eliminar cualquier numeración automática de secciones
\setcounter{secnumdepth}{0}

% --- Nivel 1: Centrado, Negrita, Título en bloque ---
% Nota: Cada sección Nivel 1 inicia en página nueva mediante \clearpage antes de \section
\titleformat{\section}[block]
  {\normalfont\normalsize\bfseries\filcenter} % Formato: negrita y centrado
  {}                                          % Sin etiqueta numérica
  {0pt}                                       % Separación
  {}                                          % Código anterior

\titlespacing*{\section}
  {0pt}    % Margen izquierdo
  {12pt}   % Espacio antes
  {12pt}   % Espacio después

% --- Nivel 2: Alineado a la izquierda, Negrita ---
\titleformat{\subsection}[block]
  {\normalfont\normalsize\bfseries\RaggedRight}
  {}
  {0pt}
  {}

\titlespacing*{\subsection}
  {0pt}{12pt}{12pt}

% --- Nivel 3: Alineado a la izquierda, Negrita y Cursiva ---
\titleformat{\subsubsection}[block]
  {\normalfont\normalsize\bfseries\itshape\RaggedRight}
  {}
  {0pt}
  {}

\titlespacing*{\subsubsection}
  {0pt}{12pt}{12pt}

% --- Nivel 4: Con sangría de 1.27 cm, Negrita, Punto final, Texto en la misma línea ---
\titleformat{\paragraph}[runin]
  {\normalfont\normalsize\bfseries}
  {\hspace*{1.27cm}}
  {0pt}
  {}
  [.] % Agrega automáticamente el punto final reglamentario

\titlespacing*{\paragraph}
  {0pt}{12pt}{0.5em}

% --- Nivel 5: Con sangría de 1.27 cm, Negrita y Cursiva, Punto final, Texto en la misma línea ---
\titleformat{\subparagraph}[runin]
  {\normalfont\normalsize\bfseries\itshape}
  {\hspace*{1.27cm}}
  {0pt}
  {}
  [.] % Agrega automáticamente el punto final reglamentario

\titlespacing*{\subparagraph}
  {0pt}{12pt}{0.5em}
```

---

## 4. Ejemplo Práctico de Uso en el Cuerpo del Documento

```latex
\clearpage
\section{Contenido del Trabajo}
En este espacio encontrará información que compone la temática principal. Es fundamental tener en cuenta que se debe utilizar sangría de primera línea en cada párrafo.

\subsection{Título Nivel 2}
Este título va alineado a la izquierda y mantiene negrita. El texto continúa en un nuevo párrafo con su respectiva sangría de primera línea de 1.27 cm.

\subsubsection{Título Nivel 3}
En este ejemplo se puede visualizar que este título es similar al anterior, pero se le agrega cursiva. El texto también inicia en un nuevo párrafo.

\paragraph{Título Nivel 4} En este ejemplo se puede evidenciar que el título 4 conserva la negrita, pero se le agrega la sangría de primera línea de 1.27 cm y el punto final reglamentario, iniciando el texto en la misma línea.

\subparagraph{Título Nivel 5} En este ejemplo se puede visualizar que el nivel 5 mantiene las características del título anterior pero agregando la cursiva, con sangría y punto final, continuando el texto en la misma línea.
```
