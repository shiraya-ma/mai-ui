// MaiSNSLinkOuter
'use client';
import React, { PropsWithChildren } from 'react';

import { MaiSNSLinkPresenter } from './mai-sns-link-presenter';
import { margeClassNames } from '../../libs';
import { useColor } from './hooks';

const MaiSNSLinkOuter: React.FC<MaiSNSLinkOuter.Props> = (props) => {
    const {
        children,
        className,
        color,
        href,
        sns,
        withText
    } = props;

    const { refLink } = useColor(color);
    
    return (
        <MaiSNSLinkPresenter
        className={ margeClassNames(
            'flex gap-2 justify-center size-16 border border-[var(--sns-link-color)] rounded-full',
            '[&>svg]:w-auto [&>svg]:h-3/5 [&>svg]:aspect-square [&>*]:text-[var(--sns-link-color)] [&>span]:text-3xl',
            'data-[with-text=true]:w-auto',
            className
        ) }
        href={ href }
        sns={ sns }
        title={`${ sns }のユーザーページを開く`}
        refLink={ refLink }
        withText={ withText }
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
        withText?: boolean;
    };
};

export {
    MaiSNSLinkOuter
};
