// MaiLink
'use client';
import React from 'react';

import { MaiLinkPresenter, MaiLinkPresenterProps } from './mai-link-presenter';
import { useExternalLink, useNextLink } from './hooks';

export const MaiLink: React.FC<MaiLinkProps> = (props) => {
    const { onClick } = props;

    const { isExternalLink, modal, onClickLink } = useExternalLink(props.href, onClick);
    const { NextLink } = useNextLink();
    
    return (
        <MaiLinkPresenter
        { ...props }
        isExternalLink={ isExternalLink }
        modal={ modal }
        NextLink={ NextLink }
        onClick={ onClickLink }
        />
    );
};

export type MaiLinkProps = MaiLinkPresenterProps& {};
