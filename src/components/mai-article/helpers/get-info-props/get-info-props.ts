'use strict';

export function getInfoProps (options: { publishedAt?: string, updatedAt?: string }) {
    const { publishedAt, updatedAt } = options;

    const data = 
    [ publishedAt, updatedAt ]
    .filter(s => s)
    .filter((s, i, arr) => arr.indexOf(s) === i)
    .map((s, i) => {
        const label = i === 0? '公開日:': '更新日:';

        const _d = s? new Date(s): new Date();

        const y = _d.getFullYear();
        const m = _d.getMonth() + 1;
        const d = _d.getDate();

        const date = `${ y }年${ m }月${ d }日`;

        return { label, date };
    });

    return {
        data
    };
};
