'use strict';
import React from 'react';
import { type ButtonProps } from '@heroui/button';

import { Instagram } from '@/icons';
import { MaiLink } from '../mai-link';
import { MaiSNSLinkButton } from './mai-sns-link-button';

/**
 * Instagram link component
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiInstagramLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <p>
 *        <MaiInstagramLink instagramID="example"/>
 *      </p>
 *    );
 * };
 */
const MaiInstagramLink: React.FC<MaiInstagramLink.Props> = (props) => {
  const {
    children,
    className,
    classNames,
    href,
    instagramID,
    ...linkProps
  } = props;

  return (
    <MaiSNSLinkButton
      href={href ?? `https://www.instagram.com/${ instagramID || '' }`}
      className={classNames?.base || className}
      {...linkProps}
    >
      <Instagram classNames={classNames?.icon}/>

      {children && <span>{children}</span>}
    </MaiSNSLinkButton>
  );
};

namespace MaiInstagramLink {
  export type Props = MaiLink.Props & ButtonProps &{
    /**
     * Instagram　ID
     */
    instagramID?: string;

    classNames?: Partial<{
      base: string;
      icon: Partial<{
        base     : string;
        instagram: string;
      }>;
    }>;
  };
};

export {
  MaiInstagramLink
};
