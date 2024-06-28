'use strict';

export function parseHref (href: string | undefined): { fixedHref: string, isCardHref: boolean } {
    const regHttp = /^http/;

    if (href === undefined || !regHttp.test(href)) {
        return {
            fixedHref: href || '/',
            isCardHref: false
        };
    }

    const regCard = /\?card$/;

    const isCardHref = regCard.test(href);

    const fixedHref = new URL(href.replace(regCard, '')).href;

    return {
        fixedHref,
        isCardHref
    };
};
