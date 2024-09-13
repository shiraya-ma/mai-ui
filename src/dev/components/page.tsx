// Page
'use strict';
import React, { ReactNode } from 'react';
import { type BreadcrumbItemProps } from '@nextui-org/react';

import {
    MaiArticle,
    MaiBreadcrumbItem,
    MaiBreadcrumbs,
    MaiH1,
    MaiH2,
    MaiLink,
    MaiMarkdown
} from '../../components';

const Page: React.FC<Page.Props> = (props) => {
    const { title, description, seeMore, children, breadcrumbItems, skipUsage, publishedAt, updatedAt } = props;
    
    return (
        <>
            { breadcrumbItems && (
                <MaiBreadcrumbs>
                    { breadcrumbItems.map((props, index) => (
                        <MaiBreadcrumbItem { ...props } key={`breadcrumbs-${ index }`}/>
                    ))}
                </MaiBreadcrumbs>
            )}

            <MaiArticle.Container>
                <MaiH1>{ title }</MaiH1>

                <MaiArticle.Info publishedAt={ publishedAt } updatedAt={ updatedAt }/>
                
                <MaiArticle.Divider />

                <section className='flex flex-col gap-4 px-2 py-4'>
                    { description && (<MaiMarkdown>{ description }</MaiMarkdown>)}

                    { seeMore !== undefined && <MaiLink href={ seeMore } showAnchorIcon>see more...</MaiLink>}

                    { !skipUsage && (<MaiH2>Usage</MaiH2>) }

                    { children }
                </section>
            </MaiArticle.Container>
        </>
    );
};

namespace Page {
    export type Props = {
        title: string;
        description?: string;
        seeMore?: string;
        children?: ReactNode;
        breadcrumbItems?: BreadcrumbItemProps[];
        skipUsage?: boolean;
        publishedAt?: string;
        updatedAt?: string;
    };
};

export {
    Page
};
