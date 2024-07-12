// MaiSNSLinkPresenter
'use strict';
import React, { ReactNode, RefObject } from 'react';

import { MaiLink } from '../mai-link';

const MaiSNSLinkPresenter: React.FC<MaiSNSLinkPresenter.Props> = (props) => {
    const {
        children,
        className,
        href,
        sns,
        title,
        refLink,
        withText
    } = props;
    
    return (
        <MaiLink
        className={ className }
        href={ href }
        title={ title }
        ref={ refLink }
        data-sns={ sns }
        data-with-text={ withText }
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
        sns: SNS;
        title: string;
        refLink: RefObject<HTMLAnchorElement>;
        withText?: boolean;
    };

    export type SNS = 'Instagram' | 'pixiv' | 'Twitter';
};

export {
    MaiSNSLinkPresenter
};
