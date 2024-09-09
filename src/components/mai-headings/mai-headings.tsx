// MaiHeadings
'use client';
import React from 'react';

import { useMaiHeadings } from './hooks';
import { type MaiHeadingsProps } from './props-types';

/**
 * 見出しのコンポーネント
 * 
 * levelを指定することで動的に設定可能
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiHeadings } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiHeadings level={ 1 }>
 *              hello world
 *          </MaiHeadings>
 *      );
 * };
 */
const MaiHeadings: React.FC<MaiHeadings.Props> = (props) => {
    const { level, ...headingsProps } = useMaiHeadings(props);

    switch (level) {
        case 1: {
            return (
                <h1 { ...headingsProps }/>
            );
        }
        case 2: {
            return (
                <h2 { ...headingsProps }/>
            );
        }
        case 3: {
            return (
                <h3 { ...headingsProps }/>
            );
        }
        case 4: {
            return (
                <h4 { ...headingsProps }/>
            );
        }
        case 5: {
            return (
                <h5 { ...headingsProps }/>
            );
        }
        default: {
            return (
                <h6 { ...headingsProps }/>
            );
        }
    }
};

namespace MaiHeadings {
    export type Props = MaiHeadingsProps;
};

export {
    MaiHeadings
};
