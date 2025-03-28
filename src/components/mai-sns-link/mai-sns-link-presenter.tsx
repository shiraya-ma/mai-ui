// MaiSNSLinkPresenter
'use strict';
import { forwardRef } from 'react';
// import { Button, type ButtonProps } from '@nextui-org/react';

// import { MaiLink } from '../mai-link';
// import { useMaiSNSLink } from './hooks/use-mai-sns-link/use-mai-sns-link';

const MaiSNSLinkPresenter = forwardRef<HTMLButtonElement, MaiSNSLinkPresenter.Props>((props, ref) => {
    const {} = props;
    const {} = ref!;
    // const { color, sns, withChildren, ...btnProps } = useMaiSNSLink(props);
    
    // return (
    //     <Button
    //     as={ MaiLink }
    //     color={ color ?? 'default' }
    //     radius='full'
    //     variant='bordered'
    //     ref={ ref }
    //     { ...btnProps }
    //     data-sns={ sns }
    //     data-with-text={ withChildren }/>
    // );

    return <></>
});

namespace MaiSNSLinkPresenter {
    export type Props = {};
    // export type Props = ButtonProps & {
    //     sns: SNS;
    //     withChildren?: boolean;
    // };

    export type SNS = 'Instagram' | 'pixiv' | 'Twitter';
};

export {
    MaiSNSLinkPresenter
};
