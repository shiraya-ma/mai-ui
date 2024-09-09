// MaiLink
'use strict';
import { forwardRef } from 'react';
import { Link, type LinkProps} from '@nextui-org/react';

import { classNames } from '../../libs';

import { useMaiLink } from './hooks';

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
    const { className, ...linkProps } = useMaiLink(props);
    
    return (
        <Link
        className={classNames(
            'cursor-pointer',
            className
        )}
        { ...linkProps }
        ref={ ref }/>
    );
});

namespace MaiLink {
    export type Props = LinkProps & {};
};

export {
    MaiLink
};
