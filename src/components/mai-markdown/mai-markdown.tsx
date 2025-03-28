// MaiMarkdown
'use strict';
import React, { forwardRef } from 'react';
// import Markdown from 'react-markdown';
// import rehypeRaw from "rehype-raw";
// import remarkGfm from 'remark-gfm';

// import * as C from './components';
// import { rehypeMai } from './plugins';
// import { useMaiMarkdown } from './hooks';

const MaiMarkdown = forwardRef<HTMLDivElement, MaiMarkdown.Props>((props, ref) => {
    const {} = props;
    const {} = ref!;
    // const { children } = useMaiMarkdown(props);
    
    // return (
    //     <C.TableIndexContextProvider>
    //         <div
    //         className='flex flex-col gap-4'
    //         ref={ ref }>
    //             <Markdown
    //             components={{
    //                 a: C.A,
    //                 blockquote: C.BlockQuote,
    //                 code: C.Code,
    //                 h1: C.H(1),
    //                 h2: C.H(2),
    //                 h3: C.H(3),
    //                 h4: C.H(4),
    //                 h5: C.H(5),
    //                 h6: C.H(6),
    //                 img: C.Img,
    //                 input: C.Input,
    //                 ol: C.Ol,
    //                 p: C.P,
    //                 pre: C.Pre,
    //                 table: C.Table,
    //                 ul: C.Ul
    //             }}
    //             rehypePlugins={[
    //                 rehypeRaw,
    //                 rehypeMai
    //             ]}
    //             remarkPlugins={[
    //                 remarkGfm
    //             ]}>
    //                 { children ?? '' }
    //             </Markdown>            
    //         </div>
    //     </C.TableIndexContextProvider>
    // );

    return <></>
});

namespace MaiMarkdown {
    export type Props = {
        children?: string;
    };
};

export {
    MaiMarkdown
};
