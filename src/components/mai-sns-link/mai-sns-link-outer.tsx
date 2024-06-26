// MaiSNSLinkOuter
'use strict';
import React, { PropsWithChildren } from 'react';

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
        className={ margeClassNames([
            'flex size-16 border border-[var(--sns-link-color)] rounded-full',
            '[&>svg]:m-auto [&>svg]:w-3/5 [&>svg]:h-3/5 [&>svg]:text-[var(--sns-link-color)]',
            className
        ]) }
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
