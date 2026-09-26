# 06. Catálogo Completo de Referencias en BibLaTeX (Normas APA 7ª Edición)

Este documento contiene la colección completa de tipologías de referencia contempladas en las páginas 30 a 53 del instructivo, traducidas al formato estándar de BibLaTeX (`biblatex-apa`).

---

## 1. Principios Generales de la Lista de Referencias

- **Sección:** Inicia en página nueva bajo el título estricto de **Referencias Bibliográficas** (no "Bibliografía").
- **Sangría francesa:** 1.27 cm (½ pulgada).
- **Orden:** Alfabético por el apellido del primer autor.
- **Sin viñetas:** Prohibido etiquetar referencias con números, letras o viñetas.
- **Números de volumen y edición:** Siempre en números arábigos (ej. `Vol. 4`, no `Vol. IV`).
- **Novedades APA 7:**
  - Se suprime la ubicación geográfica (ciudad/país) de la editorial en libros.
  - Se eliminan las palabras "Recuperado de:" antes de las URLs (salvo que no haya fecha y se requiera fecha de consulta).
  - Los DOIs se presentan como URLs completas: `https://doi.org/...` (sin el prefijo `DOI:`).
  - Regla de autores: hasta 20 autores se colocan todos en la referencia. Si son 21 o más, se listan los primeros 19, puntos suspensivos (`...`) y el último.

---

## 2. Libros y Obras Monográficas

### A. Libro Impreso con Autor
```bibtex
@book{crichton1969,
  author    = {Crichton, Michael},
  year      = {1969},
  title     = {La amenaza de Andrómeda},
  publisher = {Editorial Artemiza y Centesis Corporation}
}
```

### B. Libro con 21 o más Autores
```bibtex
@book{castellanos2018,
  author    = {Castellanos, M. and Sánchez, E. and Ríos, J. and Méndez, G. and Suárez, M. and Salinas, D. and Erazo, L. and Marroquín, E. and Duran, A. and Abadía, M. and Colorado, C. and Yunda, L. and Poe, E. and Dewey, M. and Salazar, D. and Moore, A. and Torres, M. and Zuluaga, N. and Mason, C. and Ruiz, C.},
  year      = {2018},
  title     = {Referencias Normas APA},
  publisher = {McGraw Hill}
}
```

### C. Libro con Autoría Combinada (Individual e Institucional)
```bibtex
@book{castillejo2019,
  author    = {Castillejo, D. C. and Márquez, G. A. and {los miembros del Departamento Nacional de Planeación}},
  year      = {2019},
  title     = {Las cadenas productivas de café en el centro-oriente de Colombia},
  publisher = {Planeta}
}
```

### D. Libro con Editor (en vez de autor)
```bibtex
@book{wilber1997,
  editor    = {Wilber, Ken},
  year      = {1997},
  title     = {El paradigma holográfico},
  publisher = {Editorial Kairós}
}
```

### E. Capítulo de Libro Editado
```bibtex
@incollection{rees2005,
  author    = {Rees, Laurence},
  year      = {2005},
  title     = {Unos comienzos sorprendentes},
  booktitle = {Auschwitz: Los nazis y la solución final},
  editor    = {León, D. and Noriega, L. and Brosmac, J.},
  pages     = {33--104},
  publisher = {Crítica}
}
```

### F. Libro Electrónico (Online o con DOI)
```bibtex
@book{garcia2015,
  author    = {García, Gabriel},
  year      = {2015},
  title     = {Cien años de soledad},
  doi       = {10.11144/Javeriana.uph32-65.ggmc}
}
```

### G. Audiolibro
```bibtex
@misc{quiroga2005,
  author    = {Quiroga, Horacio},
  year      = {2005},
  title     = {Cuentos de amor, de locura y de muerte},
  note      = {J. Ramírez, narr. [audiolibro]. El libro total (Original publicado en 1917)},
  url       = {https://www.ellibrototal.com/...}
}
```

### H. Diccionario o Enciclopedia
```bibtex
@reference{espasa2018,
  author    = {{Editorial Espasa}},
  year      = {2018},
  title     = {Enciclopedia Espasa},
  edition   = {Edición conmemorativa},
  url       = {http://espasa.planetasaber.com/...}
}
```

---

## 3. Publicaciones Periódicas (Artículos Científicos, Revistas y Prensa)

### A. Artículo en Revista Científica (Journal) con DOI
```bibtex
@article{ocana2020,
  author    = {Ocaña-Fernández, Y. and Valenzuela-Fernández, A. and Gálvez-Suárez, E. and Aguinaga-Villegas, D. and Nieto-Gamboa, J. and López-Echevarría, T. I.},
  year      = {2020},
  title     = {Gestión del conocimiento y tecnologías de la información y la comunicación (TICs) en estudiantes de ingeniería mecánica},
  journaltitle = {Apuntes Universitarios: Revista de Investigación},
  volume    = {84},
  number    = {1},
  pages     = {77--88},
  doi       = {10.17162/revapuntes.v10i1.195}
}
```

### B. Artículo Científico en Línea (sin DOI)
```bibtex
@article{ariana2020,
  author    = {Ariana-Rodríguez, M.},
  year      = {2020},
  title     = {Cultura organizacional y su influencia en la gestión del conocimiento en los docentes de una institución universitaria, período 2017},
  journaltitle = {Valor Agregado},
  volume    = {6},
  number    = {1},
  pages     = {67--91},
  url       = {https://biblioteca...}
}
```

### C. Artículo de Revista de Divulgación (Magazine)
```bibtex
@article{coronell2019,
  author    = {Coronell, Daniel},
  date      = {2019-10-10},
  title     = {La dictadura disimulada},
  journaltitle = {Semana},
  number    = {13},
  pages     = {20}
}
```

### D. Periódico Impreso y Online
```bibtex
% Con autor:
@article{morales2010,
  author    = {Morales Guillen, F.},
  date      = {2010-08-10},
  title     = {Del campo a la ciudad: la dura travesía del campesino},
  journaltitle = {El Espectador},
  pages     = {7--8}
}

% Sin autor (el título pasa a la posición de autor):
@article{tiempo2010,
  title     = {Con pasos de gigante},
  date      = {2010-03-25},
  journaltitle = {El Tiempo},
  pages     = {12}
}
```

---

## 4. Literatura Gris, Informes y Tesis

### A. Informe Gubernamental u Organizacional
```bibtex
@report{suarez2018,
  author      = {Suárez, C. and Rubio, J. C. and Soto, F.},
  year        = {2018},
  title       = {Tributación en Colombia: reformas, evasión y equidad},
  type        = {Notas de estudio},
  number      = {Serie Estudios y Perspectivas 32},
  institution = {Oficina de la Comisión Económica para América Latina y el Caribe en Bogotá},
  url         = {http://bit.ly/32oLur0}
}
```

### B. Comunicado de Prensa
```bibtex
@misc{acnur2020,
  author    = {{Oficina del Alto Comisionado de las Naciones Unidas para los Refugiados}},
  date      = {2020-02-01},
  title     = {Comunicado oficial de la Oficina Regional para el Sur de América Latina [comunicado de prensa]},
  url       = {http://bit.ly/337ulBZ}
}
```

### C. Ponencia en Conferencia o Evento
```bibtex
@inproceedings{sanchez2010,
  author    = {Sánchez, P.},
  date      = {2010-03-05},
  title     = {El ser político y la sociedad},
  note      = {[ponencia]. Cátedra Políticas Contemporáneas, Bogotá, Colombia},
  url       = {https://bit.ly/28aAWu1}
}
```

### D. Tesis en Repositorio Institucional
```bibtex
@thesis{castano2019,
  author      = {Castaño, M. V. and Sánchez, E. J.},
  year        = {2019},
  title       = {Factores determinantes que influyen en la mejora de la eficiencia en proyectos de innovación y mejoramiento de la Planta de Azúcar y Energía Manuelita S.A. en Palmira},
  type        = {Tesis de especialización},
  institution = {Repositorio Institucional},
  url         = {https://repository...}
}
```

### E. Manuscrito No Publicado
```bibtex
@unpublished{zapata2019,
  author    = {Zapata, E.},
  year      = {2019},
  title     = {Horizontes lejanos},
  note      = {[manuscrito presentado para publicación]. Departamento de Humanidades, Universidad Central}
}
```

---

## 5. Software, Aplicaciones Móviles y Dispositivos

```bibtex
% Software de computador:
@software{stevenson2012,
  author    = {Stevenson, A. and Holmes, L. and Browne, D. and Rothstein, H.},
  year      = {2012},
  title     = {Comprehensive Meta-Engineering},
  version   = {4.3.070},
  note      = {[software]. Biostat},
  url       = {http://bit.ly/225mCnL}
}

% Aplicación Móvil:
@software{iclassics2017,
  author    = {{iClassics Collection}},
  year      = {2017},
  title     = {SGCPV - iLovecraft Lectura Inmersiva},
  version   = {1.0.2},
  note      = {[aplicación móvil]. Google Play Store},
  url       = {https://play.google.com/...}
}
```

---

## 6. Medios Audiovisuales y Redes Sociales

```bibtex
% Película:
@misc{minkoff1994,
  author    = {Minkoff, R. and Allers, R.},
  year      = {1994},
  title     = {The Lion King},
  note      = {[película]. Walt Disney Animation Studios}
}

% Episodio de serie de TV:
@misc{colmenar2017,
  author    = {Colmenar, J.},
  date      = {2017-05-02},
  title     = {Efectuar lo acordado (Temporada 1, Episodio 1)},
  note      = {[episodio de serie de televisión]. En S. Martínez et al. (productores ejecutivos), La Casa de Papel. Netflix}
}

% Video de YouTube:
@misc{biblioteca2020,
  author    = {{Equipo de Biblioteca}},
  date      = {2020-04-22},
  title     = {Mensaje en conmemoración del día del idioma},
  note      = {[video]. YouTube},
  url       = {https://youtu.be/4_T8D61KD0k}
}

% Publicación en Redes Sociales (Twitter/X):
@misc{torres2020,
  author    = {Torres, E. and {@RAEinforma}},
  date      = {2020-05-22},
  title     = {¿Tienen cinco minutos? No necesitan más para escuchar «RAE informa», el programa de la Real Academia Española...},
  note      = {[tuit]. Twitter},
  url       = {https://twitter.com/...}
}

% Wikipedia (siempre con fecha de consulta):
@online{wikiColon2020,
  title     = {Teatro Colón},
  date      = {2020-08-20},
  note      = {En Wikipedia. Recuperado el 20 de agosto de 2020},
  url       = {https://es.wikipedia.org/wiki/Teatro_Col%C3%B3n}
}
```

---

## 7. Fuentes Legales (Adaptación para el Ámbito Hispanohablante)

```bibtex
% Ley:
@misc{ley17_2011,
  title     = {Ley 17/2011, de 5 de julio, de seguridad alimentaria y nutrición},
  date      = {2011-07-06},
  journaltitle = {Boletín Oficial del Estado},
  number    = {160},
  pages     = {71283--71319},
  url       = {https://www.boe.es/...}
}

% Resolución Administrativa:
@misc{resolucion666,
  author    = {{Ministerio de Salud y Protección Social}},
  year      = {2020},
  title     = {Resolución 666 de 2020 por medio de la cual se adopta el protocolo general de bioseguridad},
  publisher = {Ministerio de Salud y Protección Social},
  url       = {https://...}
}

% Sentencia Judicial (especificando Magistrado Ponente):
@misc{sentenciaC593,
  author    = {{Corte Suprema de Justicia}},
  date      = {2020-05-20},
  title     = {Sentencia C-593/14},
  note      = {Jorge Ignacio Pretelt Chaljub, M. P.},
  url       = {https://...}
}
```

---

## 8. Tabla de Tratamiento para Información Faltante (Tabla 4 del Instructivo)

| Elemento Faltante | Entrada en Lista de Referencias | Cita Intratextual |
| :--- | :--- | :--- |
| **Falta Autor** | `Título. (fecha). Fuente.` *(El título asume la posición de autor)* | `(Título, año)` o `Título (año)` |
| **Falta Fecha** | `Autor. (s.f.). Título. Fuente.` *(s.f. = sin fecha)* | `(Autor, s.f.)` o `Autor (s.f.)` |
| **Falta Título** | `Autor. (fecha). [Descripción breve de la obra]. Fuente.` | `(Autor, año)` |
| **Falta Autor y Fecha** | `Título. (s.f.). Fuente.` | `(Título, s.f.)` |
| **Falta Autor y Título** | `[Descripción de la obra]. (fecha). Fuente.` | `([Descripción de la obra], año)` |
| **Falta Fecha y Título** | `Autor. (s.f.). [Descripción de la obra]. Fuente.` | `(Autor, s.f.)` |
| **Falta Autor, Fecha y Título** | `[Descripción de la obra]. (s.f.). Fuente.` | `([Descripción de la obra], s.f.)` |
| **Falta Fuente (Comunicación Personal)** | **NO SE INCLUYE EN LA LISTA DE REFERENCIAS.** Solo se cita en el texto. | `(C. Comunicador, comunicación personal, 15 de marzo de 2024)` |
