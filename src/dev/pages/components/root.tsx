// Root
'use strict';
import React from 'react';

import {
    MaiLink,
} from '@mai-ui/components';

import { Page } from '@mai-ui/dev/components';

const Root: React.FC<{}> = () => {
    const components: { name: string, label: string }[] = [
        { name: 'mai-article ', label: 'MaiArticle' },
        { name: 'mai-breadcrumbs ', label: 'MaiBreadcrumbs' },
        { name: 'mai-button ', label: 'MaiButton' },
        { name: 'mai-card ', label: 'MaiCard' },
        { name: 'mai-code-block ', label: 'MaiCodeBlock' },
        { name: 'mai-headings ', label: 'MaiHeadings' },
        { name: 'mai-link ', label: 'MaiLink' },
        { name: 'mai-markdown ', label: 'MaiMarkdown' },
        { name: 'mai-pagination ', label: 'MaiPagination' },
        { name: 'mai-skeleton ', label: 'MaiSkeleton' },
        { name: 'mai-sns-link ', label: 'MaiSNSLink' }
    ];

    return (
        <Page
        title='Components'
        breadcrumbItems={[
            { children: 'Components' }
        ]}
        skipUsage>
            <nav>
                <ul className='flex flex-col gap-2'>
                    { components.map((c, i) => (
                        <li key={ i }>
                            <MaiLink
                            className='text-2xl'
                            href={`/components/${ c.name }`}
                            showAnchorIcon>
                                { c.label }
                            </MaiLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </Page>
    );
};

namespace Root {
    export type Props = {};
};

export {
    Root
};
