// MaiButton
'use client';
import { Button, extendVariants } from '@nextui-org/react';

/**
 * ボタンのコンポーネント
 * 
 * 中身はButtonそのもの（import文削減用)
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiButton } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiButton color="primary" variant="shadow">
 *              hello world
 *          </MaiButton>
 *      );
 * };
 */
const MaiButton = extendVariants(Button, {
    defaultVariants: {
        color: 'primary',
        variant: 'shadow'
    }
});

export {
    MaiButton
};
