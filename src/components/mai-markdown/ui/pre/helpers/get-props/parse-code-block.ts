'use strict';

export function parseCodeBlock (innerHTML: string) {
    const rows = innerHTML.split(/\n/);

    const rowLanguage = rows.find(row => /^\/\/ @language .+/.test(row));
    const rowFilename = rows.find(row => /^\/\/ @filename .+/.test(row));

    const language = rowLanguage?.replace(/^\/\/ @language /, '');
    const filename = rowFilename?.replace(/^\/\/ @filename /, '');

    const fixedChildren = rows.filter(row => row !== rowFilename && row !== rowLanguage)
                                .join('\n');

    return {
        filename,
        fixedChildren,
        language
    };
};
