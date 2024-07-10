'use strict';

export function margeClassNames (...tokens: (string | undefined)[]): string {
    const className = tokens.filter(token => token !== undefined).join(' ');

    return className;
};
