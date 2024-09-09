// MaiH3
'use strict';
import React from 'react';

import { MaiHedingProps } from './props-types';
import { MaiHeadings } from './mai-headings';

/**
 * 見出しのコンポーネント
 * 
 * h3に相当する見出しを追加する
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH3 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiH3>
 *              hello world
 *          </MaiH3>
 *      );
 * };
 */
const MaiH3: React.FC<MaiH3.Props> = (props) => (
    <MaiHeadings
    level={ 3 }
    { ...props }/>
);

namespace MaiH3 {
    export type Props = MaiHedingProps;
};

export {
    MaiH3
};
