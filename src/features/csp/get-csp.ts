'use strict';

const KEY = 'mai-ui-csp';

export async function getCSP(): Promise<string | undefined> {
    if (typeof window === 'undefined') {
        return undefined;
    }

    const stored = window.sessionStorage.getItem(KEY);
    if (stored !== null) {
        return stored;
    }

    const fromHeader = await (async () => {
        try {
            const res = await fetch(window.location.href);

            if (!res.ok) {
                return undefined;
            }

            const fromHeader = res.headers.get('Content-Security-Policy');

            return fromHeader || undefined;
        } catch (e) {
            return undefined;
        }
    })();

    if (fromHeader !== undefined) {
        window.sessionStorage.setItem(KEY, fromHeader);

        return fromHeader;
    }

    const fromMeta = (d => {
        const h = d.head;

        const metas = Array.from(h.querySelectorAll('meta'));

        const cspMetas = metas.filter(m => m.getAttribute('http-equiv') === 'content-security-policy' && m.getAttribute('content') !== null);

        const target = cspMetas.pop();

        if (target === undefined) {
            return undefined;
        }

        return target.getAttribute('content')!;
    })(document);

    if (fromMeta !== undefined) {
        window.sessionStorage.setItem(KEY, fromMeta);
    }

    return fromMeta;
};
