// Twitter
'use strict';
import React from 'react';
import { Twitter as TwitterIcon, TwitterX as TwitterXIcon } from 'react-bootstrap-icons';

import { MaiSNSLinkOuter } from './mai-sns-link-outer';

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
 *              <MaiTwitterLink id="elonmusk"/>
 *              <br/>
 *              <MaiTwitterLink id="elonmusk" isX/>
 *          </p>
 *      );
 * };
 */
const Twitter: React.FC<Twitter.Props> = (props) => {
    const {
        color,
        id,
        isX
    } = props;

    return (
        <MaiSNSLinkOuter
        color={ color }
        href={`https://x.com/${ id? id.replace(/@/g, ''): '' }`}
        sns='Twitter'        
        >
            { isX? <TwitterXIcon />: <TwitterIcon /> }
        </MaiSNSLinkOuter>
    );
};

namespace Twitter {
    export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        /**
         * TwitterのID
         * 
         * \@マークはあってもなくてもいい
         * 
         * @default 'elonmusk'
         */
        id?: string;

        /**
         * Xのアイコンを使用するか
         */
        isX?: boolean;
    };
};

export {
    Twitter
};
