// MaiPixivLink
'use strict';
import { forwardRef } from 'react';
// import { type ButtonProps } from '@nextui-org/react';

// import { MaiSNSLinkPresenter } from './mai-sns-link-presenter';

// const Pixiv = () => (
//     <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     width='1rem'
//     height='1rem'
//     fill='currentColor'
//     >
//         <path
//         d='M14,2.5c-1.2-1.1-3-1.8-5.1-1.8C3.7.8,0,4.9,0,4.9l1,1.6s.5,0,
//             .2-.9c.2-.5.8-1.2,1.8-1.9v10.8c-.5.1-1,.4-.6.8h3c.4-.4-.2-.6-.6-.8v-2.6s2,
//             .8,4.2.8,3.6-.6,4.9-1.6c1.3-1,2.1-2.6,2.1-4.3s-.8-3.2-2-4.3h0ZM12.4,
//             10.3c-.9.9-2.2,1.4-3.7,1.4s-3.1-.4-4-.8V2.8c1-.7,2.7-1.1,
//             4-1.1s2.9.6,3.8,1.6c.9.9,1.4,2.2,1.4,3.6s-.5,2.5-1.4,3.5h0Z'
//         />
//     </svg>
// );

/**
 * pixivリンクのコンポーネント
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiPixivLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <p>
 *              <MaiPixivLink pixivID="example"/>
 *          </p>
 *      );
 * };
 */
const MaiPixivLink = forwardRef<HTMLButtonElement, MaiPixivLink.Props>((props, ref) => {
    const {} = props;
    const {} = ref!;
    // const {
    //     children, 
    //     href,
    //     pixivID,
    //     ...btnProps
    // } = props;

    // const _href = href ?? `https://www.pixiv.net/${ pixivID? `users/${ pixivID }`: '' }`;
    
    // return (
    //     <MaiSNSLinkPresenter
    //     href={ _href }
    //     ref={ ref }
    //     sns='pixiv'
    //     withChildren={ typeof children !== 'undefined' }
    //     { ...btnProps }>
    //         <Pixiv />

    //         { children && (
    //             <span>{ children }</span>
    //         )}
    //     </MaiSNSLinkPresenter>
    // );

    return <></>
});

namespace MaiPixivLink {
    export type Props = {};
    // export type Props = ButtonProps & {
    //     /**
    //      * pixivのID
    //      */
    //     pixivID?: string;
    // };
};

export {
    MaiPixivLink
};
