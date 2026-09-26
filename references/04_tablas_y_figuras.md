# 04. Tablas y Figuras en LaTeX según Normas APA 7ª Edición

Este documento detalla la construcción y formateo de tablas y figuras en LaTeX de conformidad con las especificaciones del instructivo.

---

## 1. Reglas Generales de Ubicación y Estilo

1. **Ubicación:** Las tablas y figuras deben ubicarse en la misma página donde son mencionadas por primera vez en el texto. Si ocupan más de media página, deben ubicarse en una página propia separada.
2. **Estructura visual obligatoria de 3 partes:**
   - **Línea 1:** Número de tabla o figura en **negrita** (**Tabla 1** o **Figura 1**).
   - **Línea 2:** Título breve y descriptivo en *cursiva* (*Rendimiento académico según grupo de estudio*).
   - **Pie:** Nota aclaratoria (*Nota.* ...) y procedencia (*Fuente.* ...).
3. **Tablas o figuras en Apéndices:** Se rotulan con la letra del apéndice y número correlativo (ej. `Tabla A1`, `Figura A1`, `Tabla B1`).

---

## 2. Tablas APA 7 en LaTeX

### Reglas estrictas:
- **PROHIBIDO EL USO DE BORDES VERTICALES:** Jamás usar `|c|c|`.
- **Bordes horizontales:** Únicamente superior (`\toprule`), separador de encabezados (`\midrule`) e inferior (`\bottomrule`). Si la tabla es muy densa o extensa, se permiten líneas horizontales intermedias, pero nunca verticales.
- **Tipografía y tamaño:** Se mantiene la misma fuente del texto (Times New Roman); si la información es extensa, se puede reducir el tamaño de letra (`\small` o `\footnotesize`) y el interlineado.
- **Sin sangría:** Los datos dentro de la tabla no llevan sangría de primera línea.
- **Alineación:** Ajustada a los márgenes del documento.

### Paquetes Requeridos:
```latex
\usepackage{booktabs}        % Para \toprule, \midrule, \bottomrule
\usepackage{threeparttable}  % Para notas perfectamente alineadas al ancho de la tabla
\usepackage{tabularx}        % Para ajuste automático al ancho del margen (\textwidth)
```

### Código LaTeX Modelo para Tabla APA 7:
```latex
\begin{table}[htbp]
    \RaggedRight
    \begin{threeparttable}
        \caption{\label{tab:edades}Distribución de Participantes por Intervalo de Edades y Género}
        \begin{tabularx}{\textwidth}{l c c c}
            \toprule
            Intervalo de Edades & \multicolumn{2}{c}{Género} & Frecuencia \\
            \cmidrule(lr){2-3}
            & Femenino & Masculino & Total \\
            \midrule
            1 a 2 años & 23 & 19 & 42 \\
            3 a 4 años & 31 & 27 & 58 \\
            5 a 6 años & 38 & 33 & 71 \\
            7 a 8 años & 51 & 48 & 99 \\
            \bottomrule
        \end{tabularx}
        \vspace{4pt}
        \begin{tablenotes}[flushleft]\footnotesize
            \item \textit{Nota.} Esta tabla muestra el intervalo de edades y géneros observados en la muestra de estudio.
            \item \textit{Fuente.} Autoría propia (2024).
        \end{tablenotes}
    \end{threeparttable}
\end{table}
```

---

## 3. Figuras APA 7 en LaTeX

### Reglas:
- **Alineación:** La imagen debe ir alineada al margen izquierdo, sin sangría de primera línea.
- **Configuración del rótulo:** Número en negrita (**Figura 1**), título descriptivo en cursiva en la segunda línea.
- **Nota al pie:** Debajo de la figura se coloca `\textit{Nota.} Explicación breve de la figura. \textit{Fuente.} Procedencia o autoría.`

### Tipos de Atribución para Imágenes (Páginas 45 y 46 del instructivo):
1. **Imagen sin atribución requerida (Dominio público / Pixabay / Unsplash):**
   No requiere entrada en la lista de referencias ni cita formal con derechos de autor.
   ```latex
   \begin{figure}[htbp]
       \RaggedRight
       \caption{\label{fig:diagrama}Esquema de Flujo del Procedimiento Metodológico}
       \includegraphics[width=0.85\textwidth]{figuras/flujo_metodologico.png}
       \vspace{4pt}
       \par\footnotesize\textit{Nota.} Representación esquemática de las cuatro fases del estudio. \textit{Fuente.} Autoría propia.
   \end{figure}
   ```
2. **Imagen que requiere atribución (Creative Commons o Copyright):**
   Lleva atribución de derechos en la nota y entrada obligatoria en la lista de referencias.
   ```latex
   \begin{figure}[htbp]
       \RaggedRight
       \caption{\label{fig:fotografia}Espécimen Botánico Observado en Campo}
       \includegraphics[width=0.8\textwidth]{figuras/especimen.jpg}
       \vspace{4pt}
       \par\footnotesize\textit{Nota.} De \textit{Flora Silvestre Andina} [Fotografía], por C. Gómez, 2021, Flickr (https://www.flickr.com/...). CC BY 4.0.
   \end{figure}
   ```

---

## 4. Configuración del Paquete `caption` para APA 7

Para que LaTeX formatee automáticamente todas las leyendas de tablas y figuras con el número en negrita y el título en cursiva en línea separada:

```latex
\usepackage{caption}
\captionsetup{
    justification=RaggedRight,
    singlelinecheck=false,
    labelsep=newline,      % Salto de línea entre número y título
    labelfont=bf,          % "Tabla 1" o "Figura 1" en negrita
    textfont=it            % Título descriptivo en cursiva
}
```
