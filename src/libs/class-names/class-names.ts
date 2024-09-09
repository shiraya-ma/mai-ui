'use strict';

/**
 * クラス名を連結する関数
 * 
 * @param tokens 
 * @returns 
 */
export function classNames (...tokens: (string | undefined)[]) {
    return tokens.filter(t => t).join(' ');
};
