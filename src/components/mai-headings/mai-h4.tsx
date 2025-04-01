// MaiH4
'use strict';
import React from 'react';

import { type MaiHedingProps } from './props-types';
import { MaiHeadings } from './mai-headings';

/**
 * 見出しのコンポーネント
 * 
 * h4に相当する見出しを追加する
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH4 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiH4>
 *              hello world
 *          </MaiH4>
 *      );
 * };
 */
const MaiH4: React.FC<MaiH4.Props> = (props) => (
    <MaiHeadings
    level={ 4 }
    { ...props }/>
);

namespace MaiH4 {
    export type Props = MaiHedingProps;
};

export {
    MaiH4
};
