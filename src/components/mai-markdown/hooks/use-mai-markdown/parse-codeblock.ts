/* eslint-disable */
'use strict';

export function parseCodeblock (text: string) {
    const tags = text.match(/```.+/g);

    if (!tags) {
        return text;
    }

    const headers = tags.map(tag => {
        const trimedTag = tag.replace(/```/, '');

        const splited = trimedTag.split(/\./);

        const { filename, language } = ((): { filename?: string, language?: string } => {
            if (splited.length <= 0) {
                return {};
            }

            if (splited.length === 1) {
                return { language: trimedTag };
            }

            const filename = trimedTag;

            const language = splited.pop()!;

            return {
                filename,
                language
            };
        })();

        const target = filename
        // ファイル名がある場合
        ? `\`\`\`\n// @language ${ language }\n// @filename ${ filename }`
        // ファイル名がない場合
        : `\`\`\`\n// @language ${ language }`;

        const reg = new RegExp(tag);

        return {
            reg,
            target
        };
    });

    let body = text;

    for (let header of headers) {
        const { reg, target } = header;

        body = body.replace(reg, target);
    }

    return body;
};
