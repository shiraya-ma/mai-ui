// MaiSNSLinkPresenter
'use strict';
import React, { ReactNode } from 'react';

import { margeClassNames } from '@mai-ui/libs';

import { MaiLink } from '../mai-link';

import S from './style.module.scss';

const MaiSNSLinkPresenter: React.FC<MaiSNSLinkPresenter.Props> = (props) => {
    const {
        children,
        className,
        href,
        sns
    } = props;
    
    return (
        <MaiLink
        className={ margeClassNames([ S.snsLink, className ]) }
        href={ href }
        data-sns={ sns }
        >
            { children }
        </MaiLink>
    );
};

namespace MaiSNSLinkPresenter {
    export type Props = {
        children?: ReactNode;
        className?: string;
        href: string;
        sns: 'Instagram' | 'pixiv' | 'Twitter';
    };
};

export {
    MaiSNSLinkPresenter
};
