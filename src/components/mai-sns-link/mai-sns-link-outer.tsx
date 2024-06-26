// MaiSNSLinkOuter
'use strict';
import React, { PropsWithChildren } from 'react';

import S from './style.module.scss';
import { MaiSNSLinkPresenter } from './mai-sns-link-presenter';
import { margeClassNames } from '@mai-ui/libs';
import { useColor } from './hooks';

const MaiSNSLinkOuter: React.FC<MaiSNSLinkOuter.Props> = (props) => {
    const {
        children,
        className,
        color,
        href,
        sns
    } = props;

    const { refLink } = useColor(color);
    
    return (
        <MaiSNSLinkPresenter
        className={ margeClassNames([ S.snsLink, className ]) }
        href={ href }
        sns={ sns }
        title={`${ sns }のユーザーページを開く`}
        refLink={ refLink }
        >
            { children }
        </MaiSNSLinkPresenter>
    );
};

namespace MaiSNSLinkOuter {
    export type Props = PropsWithChildren & {
        className?: string;
        color?: string;
        href: string;
        sns: MaiSNSLinkPresenter.SNS;
    };
};

export {
    MaiSNSLinkOuter
};
