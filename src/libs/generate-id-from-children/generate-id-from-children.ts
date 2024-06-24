'use strict';

/**
 * childrenからIDを生成する関数
 * 
 * H1のID作成やTOCのhrefを作成するために使用
 * 
 * @param children 
 * @returns 
 */
export function generateIDFromChildren (children: string): string {
    const id = children.replace(/\s\s/g, ' ').replace(/\s/g, '-');

    return id;
};
