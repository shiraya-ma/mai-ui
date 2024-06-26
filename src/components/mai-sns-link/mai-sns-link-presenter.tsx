// MaiSNSLinkPresenter
'use strict';
import React, { ReactNode, RefObject } from 'react';

import { margeClassNames } from '@mai-ui/libs';

import { MaiLink } from '../mai-link';

import S from './style.module.scss';

const MaiSNSLinkPresenter: React.FC<MaiSNSLinkPresenter.Props> = (props) => {
    const {
        children,
        className,
        href,
        sns,
        title,
        refLink
    } = props;
    
    return (
        <MaiLink
        className={ margeClassNames([ S.snsLink, className ]) }
        href={ href }
        title={ title }
        ref={ refLink }
        data-sns={ sns }
        >
            { children }
            <div/>
        </MaiLink>
    );
};

namespace MaiSNSLinkPresenter {
    export type Props = {
        children?: ReactNode;
        className?: string;
        href: string;
        sns: SNS;
        title: string;
        refLink: RefObject<HTMLAnchorElement>;
    };

    export type SNS = 'Instagram' | 'pixiv' | 'Twitter';
};

export {
    MaiSNSLinkPresenter
};
