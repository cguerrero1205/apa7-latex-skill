# 08. Flujo de Compilación, Depuración de Errores y Motores LaTeX

Este documento detalla el flujo de compilación profesional con `biber`, la selección de motores tipográficos (`pdflatex` vs `xelatex`/`lualatex`) y la resolución rápida de los errores más frecuentes en LaTeX.

---

## 1. Motores de Compilación

Dependiendo del entorno y la forma en que se deseen gestionar las fuentes tipográficas, se cuenta con dos rutas recomendadas:

### Opción A: Motor Tradicional (`pdflatex`) — Máxima Portabilidad
- Utiliza paquetes de fuentes de TeX Live / MiKTeX (`newtxtext,newtxmath` o `mathptmx`).
- No requiere instalar fuentes del sistema operativo.
- Compilación rápida y universalmente soportada en Overleaf y servidores CI/CD.

### Opción B: Motores Modernos (`xelatex` o `lualatex`) — Fuentes Nativas del Sistema
- Permite invocar la tipografía **Times New Roman** original de Windows directamente mediante `fontspec`:
```latex
% Requiere compilar con XeLaTeX o LuaLaTeX:
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

---

## 2. Ciclo Completo de Compilación con `biblatex` y `biber`

A diferencia del antiguo `bibtex`, el estilo APA 7ª edición moderno se basa en **Biber**. El ciclo completo para resolver todas las referencias cruzadas y la bibliografía requiere 4 pasos:

```bash
# 1. Primera pasada: genera los archivos auxiliares (.aux, .bcf)
pdflatex main.tex

# 2. Procesamiento bibliográfico con Biber: genera el archivo .bbl
biber main

# 3. Segunda pasada: incorpora las referencias procesadas
pdflatex main.tex

# 4. Tercera pasada: ajusta la paginación, hipervínculos y Tabla de Contenido
pdflatex main.tex
```

> [!TIP]
> Si utilizas editores modernos como TeXstudio, VS Code con LaTeX Workshop, o la herramienta `latexmk`, este ciclo se ejecuta automáticamente con:
> `latexmk -pdf main.tex`

---

## 3. Diagnóstico y Solución de Errores Frecuentes

### A. Caracteres Reservados No Escapados
En LaTeX, diez caracteres tienen funciones especiales en el lenguaje. Si se escriben en el texto sin anteponer una barra invertida `\`, el documento arrojará un error de compilación:

| Carácter | Función en LaTeX | Forma Correcta en Texto |
| :---: | :--- | :---: |
| `%` | Comentarios | `\%` (ej. `20\% de citas`) |
| `&` | Separador de columnas en tablas | `\&` (ej. `Ibarra \& Castro`) |
| `_` | Subíndice matemático | `\_` (ej. `variable\_control`) |
| `$` | Entrada a modo matemático | `\$` (ej. `\$100 dólares`) |
| `#` | Parámetros de macros | `\#` |
| `{` `}` | Delimitadores de comandos | `\{` y `\}` |
| `~` | Espacio no separable | `\textasciitilde{}` |
| `^` | Superíndice matemático | `\textasciicircum{}` |
| `\` | Inicio de comando | `\textbackslash{}` |

---

### B. *Overfull \hbox* (Texto Desbordado del Margen)
- **Causa:** LaTeX no encuentra un punto adecuado de partición silábica para una palabra larga o una URL, haciendo que sobrepase el margen derecho de 2.54 cm.
- **Solución 1:** Añadir el paquete `microtype` en el preámbulo (`\usepackage{microtype}`). Ajusta ligeramente el ancho de los caracteres y el espaciado entre palabras.
- **Solución 2:** Forzar la alineación a la izquierda no justificada con `\usepackage{ragged2e}\RaggedRight`, tal como lo prescribe APA 7.
- **Solución 3:** Insertar un guion discrecional `\-` dentro de la palabra conflictiva para indicarle a LaTeX dónde puede cortarla (ej. `de\-contex\-tua\-li\-za\-ción`).
- **Solución 4 (para URLs largas):** Usar el paquete `xurl` (`\usepackage{xurl}`), que permite romper enlaces en cualquier letra o signo.

---

### C. *Citation '...' on page ... undefined* o Citas con Signos de Interrogación `[?]`
- **Causa 1:** No se ha ejecutado `biber` tras modificar el archivo `.bib`.
- **Causa 2:** La clave citada en el texto (`\parencite{clave}`) tiene una errata y no coincide exactamente con la etiqueta en el archivo `.bib`.
- **Solución:** Ejecutar `biber main` en la terminal y revisar que no existan errores de sintaxis en el archivo `.bib` (como comas faltantes entre campos o llaves `{}` sin cerrar).

---

### D. *Package titlesec Error: Entered in horizontal mode*
- **Causa:** Conflicto entre las definiciones de `titlesec` y ciertas versiones recientes de LaTeX o comandos de formato dentro del título.
- **Solución:** Verificar que la definición de los 5 niveles use la sintaxis estándar provista en `references/02_jerarquia_titulos.md`.

---

## 4. Limpieza de Archivos Temporales

Durante la compilación, LaTeX genera diversos archivos auxiliares. Si el documento experimenta errores persistentes o comportamientos anómalos en la Tabla de Contenido o la bibliografía, es recomendable eliminar estos archivos para forzar una compilación limpia desde cero:

Archivos a eliminar:
- `*.aux`, `*.bcf`, `*.bbl`, `*.blg`, `*.log`, `*.out`, `*.run.xml`, `*.toc`, `*.lof`, `*.lot`, `*.synctex.gz`.

Comando en PowerShell (Windows):
```powershell
Remove-Item *.aux, *.bcf, *.bbl, *.blg, *.log, *.out, *.run.xml, *.toc, *.lof, *.lot -ErrorAction SilentlyContinue
```
