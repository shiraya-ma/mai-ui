// MaiLink
'use client';
import React from 'react';

import { MaiLinkPresenter, MaiLinkPresenterProps } from './mai-link-presenter';
import { useExternalLink } from './hooks';

export const MaiLink: React.FC<MaiLinkProps> = (props) => {
    const { onClick } = props;

    const { isExternalLink, modal, onClickLink } = useExternalLink(props.href, onClick);
    
    return (
        <MaiLinkPresenter
        { ...props }
        isExternalLink={ isExternalLink }
        modal={ modal }
        onClick={ onClickLink }
        />
    );
};

export type MaiLinkProps = MaiLinkPresenterProps& {};
