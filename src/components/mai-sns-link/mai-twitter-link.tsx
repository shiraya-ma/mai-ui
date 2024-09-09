// MaiTwitterLink
'use strict';
import { forwardRef } from 'react';
import { type ButtonProps } from '@nextui-org/react';
import { Twitter, TwitterX } from 'react-bootstrap-icons';

import { MaiSNSLinkPresenter } from './mai-sns-link-presenter';

/**
 * Twitterリンクのコンポーネント
 * 
 * props.isXをtrueにするとXのアイコンに変更可能
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiTwitterLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <p>
 *              <MaiTwitterLink twitterID="elonmusk"/>
 *              <br/>
 *              <MaiTwitterLink twitterID="elonmusk" isX/>
 *          </p>
 *      );
 * };
 */
const MaiTwitterLink = forwardRef<HTMLButtonElement, MaiTwitterLink.Props>((props, ref) => {
    const {
        children, 
        href,
        isX, 
        twitterID, 
        ...btnProps
    } = props;

    const _href = href ?? `https://twitter.com/${ twitterID?.replace(/@/g, '') ?? 'elonmusk' }`;
    
    return (
        <MaiSNSLinkPresenter
        href={ _href }
        ref={ ref }
        sns='Twitter'
        withChildren={ typeof children !== 'undefined' }
        { ...btnProps }>
            { isX? (<TwitterX />): (<Twitter />) }

            { children && (
                <span>{ children }</span>
            )}
        </MaiSNSLinkPresenter>
    );
});

namespace MaiTwitterLink {
    export type Props = ButtonProps & {
        /**
         * TwitterのID
         * 
         * \@マークはあってもなくてもいい
         * 
         * @default 'elonmusk'
         */
        twitterID?: string;

        /**
         * Xのアイコンを使用するか
         */
        isX?: boolean;
    };
};

export {
    MaiTwitterLink
};
