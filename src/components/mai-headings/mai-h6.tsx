// MaiH6
'use strict';
import React from 'react';

import { type MaiHedingProps } from './props-types';
import { MaiHeadings } from './mai-headings';

/**
 * 見出しのコンポーネント
 * 
 * h6に相当する見出しを追加する
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH6 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiH6>
 *              hello world
 *          </MaiH6>
 *      );
 * };
 */
const MaiH6: React.FC<MaiH6.Props> = (props) => (
    <MaiHeadings
    level={ 6 }
    { ...props }/>
);

namespace MaiH6 {
    export type Props = MaiHedingProps;
};

export {
    MaiH6
};
