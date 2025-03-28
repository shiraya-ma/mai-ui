// A
'use strict';
import React, { type AnchorHTMLAttributes } from 'react';

// import { MaiLink } from '../../../mai-link';

// import { useAnchor } from './hooks';

const AFC: React.FC<A.Props> = (props) => {
    const {} = props;
    // const { children, ogp, ...linkProps } = useAnchor(props);

    // return !ogp? (
    //     <>
    //         <MaiLink
    //         { ...linkProps }>
    //             { children }
    //         </MaiLink>
    //     </>
    // ): (
    //     <MaiLink
    //     { ...linkProps }
    //     className='flex w-full h-[128px] border border-gray-500/50 rounded-lg items-center justify-between overflow-hidden break-all'>
    //         <i className='flex flex-col w-[calc(100%-128px)] h-full p-4'>
    //             <b
    //             className='block overflow-hidden line-clamp-2 text-[hsl(var(--nextui-foreground))]'
    //             style={{ boxOrient: 'vertical' }}
    //             >
    //                 { ogp.title  }
    //             </b>

    //             <small className='block h-fit'>
    //                 { linkProps.href }
    //             </small>
    //         </i>
    //         <i className='flex flex-grow w-32 h-full border-l-gray-500'>
    //             <img
    //             src={ ogp.image }
    //             />
    //         </i>
    //     </MaiLink>
    // );

    return <></>
};

const A = (props: A.Props) => (<AFC { ...props } />);

namespace A {
    export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {};
};

export {
    A
};
