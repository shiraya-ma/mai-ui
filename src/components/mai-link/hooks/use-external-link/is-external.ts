'use strict';

export function isExternal (href?: string) {
    if (typeof window === 'undefined') {
        return false;
    }

    if (!href) {
        return false;
    }

    // httpとかのスキームがなければ内部リンク
    const hasScheme = /^.+:\/\//.test(href);    
    if (!hasScheme) {
        return false;
    }

    const url = new URL(href);
    const currentURL = new URL(window.location.href);

    const sameHost = url.host === currentURL.host;

    if (!sameHost) {
        return true;
    }

    return false;
};
