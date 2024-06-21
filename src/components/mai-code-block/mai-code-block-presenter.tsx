// MaiCodeBlockPresenter
'use strict';
import React from 'react';
import Highlight from 'react-highlight';

import { margeClassNames } from '../../libs';

import S from './style.module.scss';

export const MaiCodeBlockPresenter: React.FC<MaiCodeBlockPresenterProps> = (props) => {
    const { children, filename, language } = props;

    return (
        <div className={ S.maiCodeBlockContainer } data-with-filename={ filename !== undefined }>
            { filename && (
                <div
                className={ S.maiCodeBlockFileName }
                >
                    { filename }
                </div>
            )}

            <Highlight className={ margeClassNames([language, S.maiCodeBlockCode]) }>
                { children }
            </Highlight>
        </div>
    );
};

export type MaiCodeBlockPresenterProps = {
    children?: string;
    filename?: string;
    language?: string;
};
