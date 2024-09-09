// MaiInstagramLink
'use strict';
import { forwardRef } from 'react';
import { type ButtonProps } from '@nextui-org/react';
import { Instagram } from 'react-bootstrap-icons';

import { MaiSNSLinkPresenter } from './mai-sns-link-presenter';

/**
 * Instagramリンクのコンポーネント
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiInstagramLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <p>
 *              <MaiInstagramLink instagramID="example"/>
 *          </p>
 *      );
 * };
 */
const MaiInstagramLink = forwardRef<HTMLButtonElement, MaiInstagramLink.Props>((props, ref) => {
    const {
        children, 
        href,
        instagramID,
        ...btnProps
    } = props;

    const _href = href ?? `https://www.instagram.com/${ instagramID ?? '' }`;
    
    return (
        <MaiSNSLinkPresenter
        href={ _href }
        ref={ ref }
        sns='Instagram'
        withChildren={ typeof children !== 'undefined' }
        { ...btnProps }>
            <Instagram />

            { children && (
                <span>{ children }</span>
            )}
        </MaiSNSLinkPresenter>
    );
});

namespace MaiInstagramLink {
    export type Props = ButtonProps & {
        /**
         * InstagramのID
         */
        instagramID?: string;
    };
};

export {
    MaiInstagramLink
};
