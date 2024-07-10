// MaiCard
'use strict';
import { forwardRef } from 'react';
import { Card, CardProps } from '@nextui-org/react';

import { margeClassNames } from '../../libs';

/**
 * カードのコンポーネント
 * 
 * デフォルトで背景にブラーをかけている。
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiCard } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiCard>
 *              hello world
 *          </MaiCard>
 *      );
 * };
 */
const MaiCard = forwardRef<HTMLDivElement, MaiCard.Props>((props, ref) => {
    const { className, isBlurred, ...cardProps } = props;
    
    return (
        <Card
        className={margeClassNames(
            'dark:!bg-gray-800/70',
            className
        )}
        isBlurred={ isBlurred ?? true }
        ref={ ref }
        { ...cardProps }
        />
    );
});

namespace MaiCard {
    export type Props = CardProps & {};
};

export {
    MaiCard
};
