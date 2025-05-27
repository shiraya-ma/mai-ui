'use strict';
import React from 'react';

import { Twitter, TwitterX } from '@/icons';
import { MaiLink } from '../mai-link';
import { MaiSNSLinkButton } from './mai-sns-link-button';
import { ButtonProps } from '@heroui/button';

/**
 * Twitter link component
 * 
 * If props.isX is true, the icon will be changed to X.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiTwitterLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <p>
 *        <MaiTwitterLink twitterID="elonmusk"/>
 *        <br/>
 *        <MaiTwitterLink twitterID="elonmusk" isX/>
 *      </p>
 *    );
 * };
 */
const MaiTwitterLink: React.FC<MaiTwitterLink.Props> = (props) => {
  const {
    children,
    className,
    classNames,
    href,
    isX,
    twitterID,
    ...linkProps
  } = props;

  return (
    <MaiSNSLinkButton
      href={href || `https://twitter.com/${twitterID || 'elonmusk'}`}
      className={classNames?.base || className}
      {...linkProps}
    >
      { isX? (<TwitterX classNames={classNames?.icon}/>): (<Twitter classNames={classNames?.icon}/>)}

      {children && <span>{children}</span>}
    </MaiSNSLinkButton>
  );
};
MaiTwitterLink.displayName = 'MaiTwitterLink';

namespace MaiTwitterLink {
  export type Props = MaiLink.Props & ButtonProps & {
    /**
     * Whether to use the X icon
     */
    isX?: boolean;

    /**
     * Twitter ID
     * 
     * The @ mark can be included or omitted
     * 
     * @default 'elonmusk'
     */
    twitterID?: string;

    classNames?: Partial<{
      base: string;
      icon: Partial<{
        base   : string;
        twitter: string;
      }>;
    }>;
  };
};

export {
  MaiTwitterLink
};
