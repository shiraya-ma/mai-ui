// MaiH5
'use strict';
import React from 'react';

import { type MaiHedingProps } from './props-types';
import { MaiHeadings } from './mai-headings';

/**
 * 見出しのコンポーネント
 * 
 * h5に相当する見出しを追加する
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH5 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiH5>
 *              hello world
 *          </MaiH5>
 *      );
 * };
 */
const MaiH5: React.FC<MaiH5.Props> = (props) => (
    <MaiHeadings
    level={ 5 }
    { ...props }/>
);

namespace MaiH5 {
    export type Props = MaiHedingProps;
};

export {
    MaiH5
};
