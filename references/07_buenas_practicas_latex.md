# 07. Buenas Prácticas de Composición y Código en LaTeX para Trabajos Académicos
*(Actualizado con directrices de ingeniería documental de Context7 / `latex-advice`)*

Este documento recopila las mejores prácticas de ingeniería de documentos, tipografía fina y estructuración limpia en LaTeX, orientadas a complementar la rigurosidad de las Normas APA 7ª edición.

---

## 1. Tipografía Fina y Puntuación Académica

LaTeX ofrece un control tipográfico superior, pero requiere respetar ciertas convenciones esenciales:

### A. Comillas Tipográficas
- **Mala práctica:** Usar comillas rectas de teclado (`"texto"`). En LaTeX esto produce comillas de cierre al inicio (`”texto”`).
- **Buena práctica:** Usar el paquete `csquotes` con el comando `\enquote{texto}`. Esto garantiza que las comillas se abran y cierren según el idioma (`babel` en español: comillas latinas `« »` o inglesas `“ ”` según configuración).
```latex
\enquote{Este es un fragmento citado en el texto}.
```

### B. Los Tres Tipos de Guiones
LaTeX distingue tres caracteres con significados tipográficos completamente diferentes:
1. **Guion simple (`-`):** Para palabras compuestas (ej. *teórico-práctico*, *físico-químico*).
2. **Semirraya o En-dash (`--`):** Para rangos numéricos o temporales (ej. páginas `pp.~45--60`, años `1939--1945`).
3. **Raya o Em-dash (`---`):** Para incisos o aclaraciones parentéticas en la oración (ej. *El resultado experimental---según lo previsto---confirmó la hipótesis*). En español no lleva espacios antes ni después.

### C. Espacios Duros o No Separables (`~`)
El carácter `~` inserta un espacio que impide que dos palabras o símbolos queden separados al final de una línea (evitando que un número o una referencia quede huérfano en la línea siguiente).
- **Siempre usar `~` antes de citas:** `como señala \textcite{ibarra2017}~...` o `...~\parencite{ibarra2017}`.
- **Siempre usar `~` antes de números de página:** `p.~12`, `pp.~45--48`.
- **Siempre usar `~` entre números y unidades de medida:** `2.54~cm`, `15~kg`, `100~ms`.
- **Siempre usar `~` antes de referencias cruzadas:** `Tabla~\ref{tab:datos}`, `Figura~\ref{fig:esquema}`.

### D. Formato de Unidades y Cifras con `siunitx`
Para garantizar un espaciado homogéneo entre valores numéricos y unidades científicas, es recomendable utilizar el paquete `siunitx`:
```latex
\SI{2.54}{\centi\metre}   % Genera: 2.54 cm sin riesgo de separación
\SI{90}{\percent}         % Genera: 90%
\num{123456}              % Formato numérico estandarizado
```

### E. Ubicación de Notas al Pie
Las notas al pie deben colocarse **inmediatamente después del signo de puntuación**, sin espacio:
```latex
% Correcto:
... conforme a lo estipulado en la metodología.\footnote{Para un análisis detallado, véase...}

% Incorrecto:
... conforme a lo estipulado en la metodología \footnote{...}.
```

### F. Puntos Suspensivos y Abreviaturas
- **Puntos suspensivos:** Usar siempre `\dots` o `\ldots`, evitando teclear tres puntos seguidos (`...`).
- **Acrónimos y Siglas:** Para siglas de más de 3 letras dentro del texto fluido, es una buena práctica tipográfica usar versalitas (`\textsc{unesco}`, `\textsc{spss}`).

### G. Notación Matemática y Variables
Toda variable o símbolo estadístico debe ir en **modo matemático**, nunca en cursiva de texto regular:
- **Correcto:** `$p < .05$`, `$N = 120$`, `$r = .42$`, `$F(1, 40) = 4.25$`.
- **Incorrecto:** `\textit{p} < 0.05`, `N = 120`.

---

## 2. Gestión de Referencias Bibliográficas y Archivos `.bib`

Recomendaciones clave para mantener bases de datos bibliográficas de máxima calidad:

1. **Citas múltiples combinadas:** Agrupar varias referencias en un solo comando en lugar de comandos repetidos:
   ```latex
   % Correcto:
   \parencite{crichton1969, ocana2020, suarez2018}
   
   % Incorrecto:
   \parencite{crichton1969}\parencite{ocana2020}\parencite{suarez2018}
   ```
2. **Protección de mayúsculas en títulos `.bib`:** Proteger con llaves `{}` los términos que siempre deben mantener mayúscula (nombres propios, siglas, nombres de lenguajes o teorías):
   ```bibtex
   title = {The {C} Programming Language},
   title = {Impacto socioeconómico de la pandemia por {COVID-19} en {C}olombia},
   ```
3. **Almacenamiento limpio del DOI:** Guardar el DOI en el campo `doi` **sin el prefijo `https://doi.org/`**:
   ```bibtex
   % Correcto:
   doi = {10.17162/revapuntes.v10i1.195},
   
   % Incorrecto (duplica el prefijo en BibLaTeX):
   doi = {https://doi.org/10.17162/revapuntes.v10i1.195},
   ```
4. **No duplicar URL cuando existe DOI:** El DOI es un identificador persistente e inmutable; si la entrada cuenta con `doi`, omite el campo `url`.
5. **Convención estándar para claves de citación:** Emplear claves mnemotécnicas consistentes:
   - Apellido del autor + año de publicación: `crichton1969`, `ocana2020`.
   - En caso de coincidencia: añadir sufijo alfabético `garcia2020a`, `garcia2020b`.

---

## 3. Estructura Modular de un Proyecto LaTeX

Para documentos extensos (tesis, monografías o artículos de gran envergadura), organizar el proyecto en módulos facilita el control de versiones y el mantenimiento:

```text
mi_proyecto_apa7/
├── main.tex                 # Preámbulo, paquetes, títulos maestros
├── referencias.bib          # Base de datos BibLaTeX
├── secciones/               # Archivos .tex modulares
│   ├── 00_portada.tex
│   ├── 01_resumen.tex
│   ├── 02_introduccion.tex
│   ├── 03_justificacion.tex
│   ├── 04_objetivos.tex
│   ├── 05_marco_teorico.tex
│   ├── 06_metodologia.tex
│   ├── 07_resultados.tex
│   ├── 08_conclusiones.tex
│   └── 09_apendices.tex
├── figuras/                 # Imágenes vectoriales (PDF) o mapa de bits (PNG, JPG)
└── tablas/                  # Tablas extensas o complejas
```

### `\input{...}` vs `\include{...}`
- **`\input{secciones/01_resumen}`:** Inserta el contenido directamente sin forzar saltos de página.
- **`\include{secciones/02_introduccion}`:** Fuerza un `\clearpage` y permite compilar selectivamente partes del documento usando `\includeonly{...}` en el preámbulo para acelerar el desarrollo.

---

## 4. Gestión Profesional de Flotantes (Tablas y Figuras)

1. **Uso de `\centering` vs entorno `center`:**
   - **Buena práctica:** Usar la instrucción `\centering` dentro del entorno `figure` o `table`.
   - **Mala práctica:** Usar `\begin{center} ... \end{center}`, ya que añade un espacio vertical parásito innecesario antes y después del objeto.
   ```latex
   \begin{figure}[htbp]
       \centering
       \includegraphics[width=0.8\textwidth]{figuras/grafico.png}
       \caption{Evolución Temporal del Fenómeno}
       \label{fig:evolucion}
   \end{figure}
   ```
2. **Posicionadores de flotantes:** Preferir siempre `[htbp]`. Evitar el uso rígido de `[H]` (de `float`), el cual rompe el flujo tipográfico y genera huecos en blanco al pie de las páginas precedentes.
3. **Prefijos semánticos en `\label`:**
   - Tablas: `\label{tab:nombre}`
   - Figuras: `\label{fig:nombre}`
   - Secciones: `\label{sec:nombre}`
   - Ecuaciones: `\label{eq:nombre}`
4. **Regla de oro de referencias cruzadas:** El comando `\label` **siempre** debe situarse dentro o inmediatamente después de `\caption`. Si se sitúa antes, `\ref` apuntará al número de la sección y no al flotante.
