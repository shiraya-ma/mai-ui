// MaiButton
'use client';
import React from 'react';

import { MaiButtonPresenter } from './mai-button-presenter';

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
const MaiButton: React.FC<MaiButton.Props> = (props) => {
    const { ...btnProps } = props;
    
    return (
        <MaiButtonPresenter
        { ...btnProps }
        />
    );
};

namespace MaiButton {
    export type Props = MaiButtonPresenter.Props & {};
};

export {
    MaiButton
};
