// CCodeBlock
'use strict';
import React from 'react';
import darcula from 'react-syntax-highlighter/dist/esm/styles/hljs/darcula';

import { MaiCodeBlock } from '@mai-ui/components';

import { Case, CPage } from '@mai-ui/dev/components';

import { codeBlockText1, codeBlockText2 } from './texts';

import * as codes from './codes/code-block';

const CCodeBlock: React.FC<CCodeBlock.Props> = (props) => {
    const {} = props;
    
    return (
        <CPage
            title="MaiCodeBlock"
            description="ReactSyntaxHighligher wrapped component.

Modifications have been made to simplify the application of styles."
            seeMore='https://react-syntax-highlighter.github.io/react-syntax-highlighter/'>
                <Case
                preview={(
                    <>
                        <MaiCodeBlock language='html'>
                            { codeBlockText1 }
                        </MaiCodeBlock>
                    </>
                )}
                code={ codes.usage }/>
                
                <Case
                title='With filename'
                preview={(
                    <>
                        <MaiCodeBlock filename='index.html' language='html'>
                            { codeBlockText1 }
                        </MaiCodeBlock>
                    </>
                )}
                code={ codes.withFilename }/>                
                
                <Case
                title='Change Style'
                preview={(
                    <>
                        <MaiCodeBlock filename='app.tsx' language='tsx' style={ darcula }>
                            { codeBlockText2 }
                        </MaiCodeBlock>
                    </>
                )}
                code={ codes.changeStyle }/>
        </CPage>
    );
};

namespace CCodeBlock {
    export type Props = {};
};

export {
    CCodeBlock
};
