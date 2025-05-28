'use strict';
import React from 'react';
import { type ButtonProps } from '@heroui/button';

import { Pixiv } from '@/icons';
import { MaiLink } from '../mai-link';
import { MaiSNSLinkButton } from './mai-sns-link-button';

/**
 * pixiv link component
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiPixivLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <p>
 *        <MaiPixivLink pixivID="example"/>
 *      </p>
 *    );
 * };
 */
const MaiPixivLink: React.FC<MaiPixivLink.Props> = (props) => {
  const {
    children,
    className,
    classNames, 
    href,
    pixivID,
    ...linkProps
  } = props;

  return (
    <MaiSNSLinkButton
      href={href || `https://www.pixiv.net/${pixivID? `users/${pixivID}`: '' }`}
      className={classNames?.base || className}
      {...linkProps}
    >
      <Pixiv classNames={classNames?.icon}/>

      {children && <span>{children}</span>}
    </MaiSNSLinkButton>
  );
};

namespace MaiPixivLink {
  export type Props = MaiLink.Props & ButtonProps & { 
    /**
     * pixiv user ID
     */
    pixivID?: string;

    classNames?: Partial<{
      base: string;
      icon: Partial<{
        base:  string;
        pixiv: string;
      }>;
    }>;
  };
};

export {
  MaiPixivLink
};
