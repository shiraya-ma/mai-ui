// MaiLink
'use client';
import { forwardRef } from 'react';

import { MaiLinkPresenter } from './mai-link-presenter';
import { useExternalLink } from './hooks';

const MaiLink = forwardRef<HTMLAnchorElement, MaiLink.Props>((props, ref) => {
    const {} = props;

    const { isExternalLink, modal, onClickLink } = useExternalLink(props.href);
    
    return (
        <MaiLinkPresenter
        { ...props }
        isExternalLink={ isExternalLink }
        modal={ modal }
        onClick={ onClickLink }
        ref={ ref }
        />
    );
});

namespace MaiLink {
    export type Props = MaiLinkPresenter.Props& {};
};

export {
    MaiLink
};
