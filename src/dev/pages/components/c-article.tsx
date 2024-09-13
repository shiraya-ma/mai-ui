// CArticle
'use strict';
import React from 'react';

import {
    MaiArticle,
    MaiH1
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import * as codes from './codes/article';

const CArticle: React.FC<CArticle.Props> = (props) => {
    const {} = props;

    const { publishedAt, updatedAt } = (today => {
        const tommorow = new Date();
        tommorow.setDate(today.getDate() + 1);

        const publishedAt = today.toISOString();
        const updatedAt = tommorow.toISOString();

        return {
            publishedAt,
            updatedAt
        };
    })(new Date());
    
    return (
        <CPage
            title="MaiArticle"
            description="A set of components for article pages.">
                <Case
                preview={(
                    <>
                        <MaiArticle.Container>
                            <MaiH1>Title</MaiH1>

                            <MaiArticle.Thumbnail src='https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg' />

                            <MaiArticle.Info publishedAt={ publishedAt } updatedAt={ updatedAt } />

                            <MaiArticle.Divider />

                            main contents...
                        </MaiArticle.Container>
                    </>
                )}
                previewDirection='row'
                code={ codes.usage }/>
            </CPage>
    );
};

namespace CArticle {
    export type Props = {};
};

export {
    CArticle
};
