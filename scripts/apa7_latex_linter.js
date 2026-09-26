#!/usr/bin/env node
/**
 * apa7_latex_linter.js - Auditor automático de documentos LaTeX bajo Normas APA 7a Edición
 * y Buenas Prácticas de Ingeniería Tipográfica en LaTeX.
 * Ejecutable directamente con Node.js en Windows.
 */

const fs = require('fs');
const path = require('path');

function lintLatex(filepath) {
    if (!fs.existsSync(filepath)) {
        console.error(`Error: El archivo '${filepath}' no existe.`);
        process.exit(1);
    }

    const content = fs.readFileSync(filepath, 'utf8');
    const passes = [];
    const warnings = [];
    const errors = [];

    // 1. Preámbulo y geometría
    if (/\\usepackage(\[.*?\])?\{geometry\}/.test(content)) {
        if (/margin\s*=\s*2\.54cm|margin\s*=\s*1in/.test(content)) {
            passes.push("Geometría: Márgenes de 2.54 cm (1 pulgada) configurados correctamente con geometry.");
        } else {
            warnings.push("Geometría: Paquete geometry detectado, pero no se especificó 'margin=2.54cm' o 'margin=1in'.");
        }
    } else {
        errors.push("Preámbulo: Falta el paquete 'geometry' con márgenes de 2.54 cm.");
    }

    // 2. Interlineado
    if (/\\usepackage(\[.*?\])?\{setspace\}/.test(content) && content.includes('\\doublespacing')) {
        passes.push("Interlineado: Interlineado 2.0 (doble espacio) configurado con setspace y \\doublespacing.");
    } else {
        errors.push("Interlineado: Falta '\\usepackage{setspace}' y '\\doublespacing' (APA 7 exige interlineado 2.0).");
    }

    // 3. Sangría obligatoria en todos los párrafos
    if (content.includes('\\usepackage{indentfirst}')) {
        passes.push("Sangría: Paquete 'indentfirst' presente (sangría de primera línea en todos los párrafos).");
    } else {
        warnings.push("Sangría: Se recomienda '\\usepackage{indentfirst}' para asegurar sangría de 1.27 cm tras cada título.");
    }

    // 4. Alineación a la izquierda
    if (/\\usepackage(\[.*?\])?\{ragged2e\}/.test(content)) {
        passes.push("Alineación: Paquete 'ragged2e' presente para texto alineado a la izquierda sin justificar.");
    } else {
        warnings.push("Alineación: APA 7 exige texto sin justificar. Se recomienda '\\usepackage{ragged2e}\\RaggedRight'.");
    }

    // 5. Tablas sin bordes verticales
    if (content.includes('\\usepackage{booktabs}')) {
        passes.push("Tablas: Paquete 'booktabs' presente para líneas horizontales profesionales.");
    } else {
        warnings.push("Tablas: Falta el paquete 'booktabs' para formatear tablas sin líneas verticales.");
    }

    const tabularMatches = [...content.matchAll(/\\begin\{(?:tabular|tabularx)\*?\}\s*\{([^}]+)\}/g)];
    let hasVerticalLines = false;
    for (const match of tabularMatches) {
        if (match[1].includes('|')) {
            hasVerticalLines = true;
            break;
        }
    }
    if (hasVerticalLines) {
        errors.push("Tablas APA 7: Se detectaron líneas verticales ('|') en la tabla. En APA 7 los bordes verticales están estrictamente prohibidos; use solo \\toprule, \\midrule y \\bottomrule.");
    } else {
        passes.push("Tablas APA 7: Cero bordes verticales detectados en las tablas.");
    }

    // 6. Prohibición estricta de listas en Objetivos, Conclusiones y Recomendaciones
    // Cualquier nivel de título cuyo texto empiece por la palabra clave
    // (p. ej. "Objetivos Específicos", "Objetivo General", "Conclusiones y Recomendaciones").
    // El cuerpo termina en el siguiente título de cualquier nivel o en \end{document}.
    const sections = [
        { name: "Objetivos", keyword: "Objetivos?" },
        { name: "Conclusiones", keyword: "Conclusi(?:ó|o)n(?:es)?" },
        { name: "Recomendaciones", keyword: "Recomendaci(?:ó|o)n(?:es)?" }
    ];

    for (const sec of sections) {
        const regex = new RegExp(
            String.raw`\\(?:sub)*section\*?\{\s*` + sec.keyword +
            String.raw`(?!\p{L})[^}]*\}([\s\S]*?)(?=\\(?:sub)*section\*?\{|\\end\{document\}|$(?![\s\S]))`,
            "giu"
        );
        const bodies = [...content.matchAll(regex)].map(m => m[1]);
        if (bodies.length === 0) continue;
        if (bodies.some(b => b.includes('\\begin{itemize}') || b.includes('\\begin{enumerate}'))) {
            errors.push(`Regla estricta violada en '${sec.name}': Se detectó uso de viñetas o numeraciones (\\begin{itemize}/\\begin{enumerate}). En APA 7, esta sección debe redactarse estrictamente en párrafos continuos con sangría de 1.27 cm.`);
        } else {
            passes.push(`Sección '${sec.name}': Redactada en párrafos continuos sin viñetas ni numeraciones.`);
        }
    }

    // 7. Títulos numerados manualmente
    const numberedHeadingMatches = content.match(/\\(?:section|subsection|subsubsection|paragraph)\*?\{\s*\d+[\.\)]\s*[^}]+\}/g);
    if (numberedHeadingMatches) {
        errors.push(`Títulos numerados: Se detectó rotulación numérica en títulos: ${numberedHeadingMatches.slice(0, 3).join(', ')}... En APA 7 los títulos no llevan números ni letras.`);
    } else {
        passes.push("Títulos APA 7: No se detectó rotulación numérica manual en encabezados.");
    }

    // 8. Nomenclatura de secciones
    const badNames = [
        ["Índice general", "Tabla de Contenido"],
        ["Índice General", "Tabla de Contenido"],
        ["Índice de tablas", "Lista de Tablas"],
        ["Índice de figuras", "Lista de Figuras"],
        ["Índice de cuadros", "Lista de Tablas"]
    ];
    for (const [bad, good] of badNames) {
        if (content.includes(bad)) {
            warnings.push(`Nomenclatura: Se encontró '${bad}'. En APA 7 debe titularse estrictamente como '${good}'.`);
        }
    }
    if (content.includes("Tabla de Contenido") || content.includes("\\renewcommand{\\contentsname}{Tabla de Contenido}")) {
        passes.push("Nomenclatura: 'Tabla de Contenido' configurada correctamente.");
    }

    // 9. Buenas prácticas tipográficas en LaTeX
    // A. csquotes y comillas rectas
    if (content.includes('\\usepackage{csquotes}')) {
        passes.push("Buenas prácticas LaTeX: Paquete 'csquotes' presente para gestión tipográfica de comillas.");
    } else {
        warnings.push("Buenas prácticas LaTeX: Se recomienda usar '\\usepackage{csquotes}' y '\\enquote{...}' en lugar de comillas manuales.");
    }

    // Extraer texto del documento (después de \begin{document}) sin comentarios
    const docMatch = content.match(/\\begin\{document\}([\s\S]*)\\end\{document\}/);
    if (docMatch) {
        const bodyText = docMatch[1].replace(/%.*$/gm, '');
        // Buscar comillas rectas inglesas "..." en texto
        const straightQuoteMatches = bodyText.match(/"[^"]+"/g);
        if (straightQuoteMatches && straightQuoteMatches.length > 2) {
            warnings.push(`Buenas prácticas LaTeX: Se detectaron comillas rectas de teclado ("..."). En LaTeX es preferible usar '\\enquote{...}' de csquotes para comillas tipográficas correctas.`);
        } else {
            passes.push("Buenas prácticas LaTeX: Comillas tipográficas gestionadas adecuadamente.");
        }

        // B. Ubicación de \label antes de \caption
        if (/\\label\{[^}]+\}\s*\\caption/g.test(bodyText)) {
            warnings.push("Buenas prácticas LaTeX: Se detectó '\\label{...}' antes de '\\caption{...}'. Para que las referencias cruzadas apunten correctamente, '\\label' siempre debe ir dentro o después de '\\caption'.");
        } else {
            passes.push("Buenas prácticas LaTeX: Posicionamiento correcto de \\label con respecto a \\caption.");
        }
    }

    // Imprimir reporte
    console.log("=".repeat(80));
    console.log(`REPORTE DE AUDITORÍA APA 7ª EDICIÓN Y BUENAS PRÁCTICAS LATEX: ${path.basename(filepath)}`);
    console.log("=".repeat(80));

    console.log("\n[+] REGLAS CUMPLIDAS:");
    passes.forEach(p => console.log(`  ✓ ${p}`));

    if (warnings.length > 0) {
        console.log("\n[!] ADVERTENCIAS / RECOMENDACIONES:");
        warnings.forEach(w => console.log(`  ⚠ ${w}`));
    }

    if (errors.length > 0) {
        console.log("\n[-] INFRACCIONES / ERRORES CRÍTICOS APA 7:");
        errors.forEach(e => console.log(`  ✗ ${e}`));
    } else {
        console.log("\n[✓] ¡CERO INFRACCIONES CRÍTICAS ENCONTRADAS!");
    }

    console.log("\n" + "=".repeat(80));
    console.log(`Total: ${passes.length} Aprobados | ${warnings.length} Advertencias | ${errors.length} Errores`);
    console.log("=".repeat(80));

    process.exit(errors.length === 0 ? 0 : 1);
}

if (process.argv.length < 3) {
    console.log("Uso: node apa7_latex_linter.js <archivo.tex>");
    process.exit(1);
}

lintLatex(process.argv[2]);
