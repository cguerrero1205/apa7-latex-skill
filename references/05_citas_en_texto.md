# 05. Citas en el Texto en LaTeX según Normas APA 7ª Edición

Este documento detalla los estándares de citación en el texto, el tratamiento según número y tipo de autores, el entorno para citas largas y la integración con `biblatex` y `csquotes`.

---

## 1. Principio Ético Fundamental (Página 27 del Instructivo)

> [!IMPORTANT]
> **Proporción de Originalidad (Regla 80/20):**
> Un trabajo académico no debería superar el **20% de contenido citado**, garantizando que el **80% restante sea de autoría y argumentación propia**. Todo texto ajeno debe ir rigurosamente citado para respetar los derechos morales de autor y evitar el plagio o autoplagio.

---

## 2. Tipos de Citas Textuales o Directas

### A. Citas Cortas (Menos de 40 palabras)
- Se incorporan **dentro del flujo del párrafo**, encerradas entre comillas dobles tipográficas.
- El punto final se coloca **después del paréntesis** de cierre de la cita.
- **Formato Narrativo (Énfasis en el autor):**
  El apellido del autor forma parte de la redacción, el año va entre paréntesis y la página al final de la cita:
  > Ibarra (2017) señala que “la Edad Media es el tiempo que va desde la Caída del Imperio Romano de Occidente hasta la Caída del Imperio Bizantino en el siglo XV” (p. 12).
  ```latex
  \textcite{ibarra2017} señala que \enquote{la Edad Media es el tiempo que va desde la Caída del Imperio Romano de Occidente hasta la Caída del Imperio Bizantino en el siglo XV} \parencite[p.~12]{ibarra2017}.
  ```
- **Formato Parentético (Énfasis en el texto):**
  Toda la información de la fuente (autor, año y página) se ubica entre paréntesis al final:
  > “La Edad Media es el tiempo que va desde la Caída del Imperio Romano de Occidente hasta la Caída del Imperio Bizantino en el siglo XV” (Ibarra, 2017, p. 12).
  ```latex
  \enquote{La Edad Media es el tiempo que va desde la Caída del Imperio Romano de Occidente hasta la Caída del Imperio Bizantino en el siglo XV} \parencite[p.~12]{ibarra2017}.
  ```

---

### B. Citas Largas en Bloque (40 o más palabras)
- Se escriben en un **bloque independiente**, sin comillas.
- Todo el bloque lleva sangría izquierda de **1.27 cm** (½ pulgada).
- Se admite interlineado de 1.5 o 2.0.
- El punto final se coloca **antes** del paréntesis de la cita o página.

#### Entorno LaTeX `apaquote`:
Definido en el preámbulo:
```latex
\newenvironment{apaquote}
  {\list{}{\leftmargin=1.27cm\rightmargin=0pt\parsep=0pt\setstretch{1.5}}\item\relax}
  {\endlist}
```

#### Uso en el Documento:
```latex
En relación con la duración de la Edad Media, \textcite{ibarra2017} señala que esta época va enmarcada entre dos grandes acontecimientos históricos:
\begin{apaquote}
La Edad Media es el tiempo que va desde la Caída del Imperio Romano de Occidente hasta la Caída del Imperio Bizantino en el siglo XV. Es una era que abarca casi mil años de la historia de occidente y se caracteriza por el carácter preponderante de la Iglesia Católica, que controlaba todos los aspectos de la vida social, cultural y religiosa. (p.~12)
\end{apaquote}
```

---

## 3. Citas Parafraseadas (No Textuales)

- Se explican las ideas del autor con palabras propias.
- **No llevan comillas ni sangría en bloque.**
- Se citan indicando autor y año:
  - **Narrativa:** `\textcite{ibarra2017} indica que la Edad Media comprendió cerca de un milenio...`
  - **Parentética:** `... comprendió cerca de un milenio entre ambas caídas imperiales \parencite{ibarra2017}.`

---

## 4. Citas según el Número y Tipo de Autores (Tabla 2 del Instructivo)

| Tipo de Autor | Cita Parentética | Cita Narrativa | Comando LaTeX |
| :--- | :--- | :--- | :--- |
| **Un autor** | (Cordua, 2012, p. 7) | Husserl (2008, p. 58) | `\parencite[p.~7]{cordua2012}` / `\textcite[p.~58]{husserl2008}` |
| **Dos autores** | (Pinedo y Soria, 2008, p. 17) *(o con &)* | Pinedo y Soria (2015, p. 17) | `\parencite[p.~17]{pinedo2008}` / `\textcite[p.~17]{pinedo2015}` |
| **Tres o más autores** | (Acuario et al., 2019, p. 3) | Acuario et al. (2019, p. 3) | `\parencite[p.~3]{acuario2019}` *(Automático en biblatex)* |
| **Autor corporativo con sigla (1ª cita)** | (National Institute of Mental Health [NIMH], 2012) | National Institute of Mental Health (NIMH, 2012) | Ver configuración de entrada corporativa |
| **Autor corporativo con sigla (siguientes)** | (NIMH, 2012) | NIMH (2012) | Utilizar la sigla en la clave |
| **Autor corporativo sin sigla** | (University of Pittsburgh, 2011) | University of Pittsburgh (2011) | `\parencite{univpitt2011}` |

> [!NOTE]
> En APA 7ª edición, para obras de **tres o más autores**, se utiliza **et al.** desde la primera citación (a diferencia de la 6ª edición que listaba todos en la primera mención). Con `\usepackage[style=apa,backend=biber]{biblatex}`, este comportamiento se gestiona de forma nativa y automática.
