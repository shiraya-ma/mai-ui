// MaiBreadcrumbs
'use strict';
import React from 'react';
import { HouseFill } from 'react-bootstrap-icons';
import {  Breadcrumbs, BreadcrumbsProps } from '@nextui-org/react';

import { MaiBreadcrumbItem } from './mai-breadcrumb-item';

const MaiBreadcrumbs: React.FC<MaiBreadcrumbs.Props> = (props) => {
    const { children, homeHref, ...breadcrumbsProps } = props;
    
    return (
        <Breadcrumbs
        { ...breadcrumbsProps }
        >   
            <MaiBreadcrumbItem
            href={ homeHref ?? '/'}
            color='primary'
            >
                <HouseFill />&nbsp;home
            </MaiBreadcrumbItem>

            { children }
        </Breadcrumbs>
    );
};

namespace MaiBreadcrumbs {
    export type Props = BreadcrumbsProps & {
        /**
         * @default '/'
         */
        homeHref?: string;
    };
};

export {
    MaiBreadcrumbs
};
