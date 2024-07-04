// MaiLink
'use client';
import { forwardRef } from 'react';

import { MaiLinkPresenter } from './mai-link-presenter';
import { useExternalLink } from './hooks';

/**
 * リンクのコンポーネント
 * 
 * 別オリジンのhrefでクリックした場合は確認のモーダルを出す。
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <p>
 *              <MaiLink href="/">home</MaiLink>
 *              <br/>
 *              <MaiLink href="https://www.google.com">Google</MaiLink>
 *          </p>
 *      );
 * };
 */
const MaiLink = forwardRef<HTMLAnchorElement, MaiLink.Props>((props, ref) => {
    const {} = props;

    const { isExternalLink, modal, onClickLink } = useExternalLink(props.href);
    
    return (
        <MaiLinkPresenter
        { ...props }
        isExternalLink={ isExternalLink }
        modal={ modal }
        onClick={ onClickLink }
        ref={ ref }
        />
    );
});

namespace MaiLink {
    export type Props = MaiLinkPresenter.Props & {};
};

export {
    MaiLink
};
