// MaiH1
'use strict';
import React from 'react';

import { type MaiHedingProps } from './props-types';
import { MaiHeadings } from './mai-headings';

/**
 * 見出しのコンポーネント
 * 
 * h1に相当する見出しを追加する
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH1 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiH1>
 *              hello world
 *          </MaiH1>
 *      );
 * };
 */
const MaiH1: React.FC<MaiH1.Props> = (props) => (
    <MaiHeadings
    level={ 1 }
    { ...props }/>
);

namespace MaiH1 {
    export type Props = MaiHedingProps;
};

export {
    MaiH1
};
