// MaiH2
'use strict';
import React from 'react';

import { MaiHedingProps } from './props-types';
import { MaiHeadings } from './mai-headings';

/**
 * 見出しのコンポーネント
 * 
 * h2に相当する見出しを追加する
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH2 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiH2>
 *              hello world
 *          </MaiH2>
 *      );
 * };
 */
const MaiH2: React.FC<MaiH2.Props> = (props) => (
    <MaiHeadings
    level={ 2 }
    { ...props }/>
);

namespace MaiH2 {
    export type Props = MaiHedingProps;
};

export {
    MaiH2
};
