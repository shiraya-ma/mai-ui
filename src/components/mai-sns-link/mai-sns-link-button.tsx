'use strict';
import React from 'react';
import { extendVariants } from '@heroui/system';
import { Button, type ButtonProps } from '@heroui/button';

import { MaiLink } from '../mai-link';

const ExtendedButton = extendVariants(Button, {
  variants: {
    color: {
      default: 'border-foreground'
    },
    size: {
      sm: '!h-8 !min-w-8 !px-1',
      md: '!h-12 !min-w-12 !px-2 !text-2xl [&>svg]:!size-6',
      lg: '!h-16 !min-w-16 !px-3 !text-4xl [&>svg]:size-16',
    },
  },
}) as React.FC<MaiSNSLinkButton.Props>;

/** @internal */
const MaiSNSLinkButton: React.FC<MaiSNSLinkButton.Props> = (props) => {
  const {
    color,
    isExternal,
    size,
    ...linkProps
  } = props;

  return (
    <ExtendedButton
      as={MaiLink}
      color={color || 'default'}
      radius={'full'}
      size={size || 'md'}
      variant={'bordered'}
      isExternal={isExternal}
      {...linkProps}
    />
  );
};
MaiSNSLinkButton.displayName = 'MaiSNSLinkButton';

namespace MaiSNSLinkButton {
  export type Props = Omit<MaiLink.Props, 'color'> & ButtonProps & {};
};

export {
  MaiSNSLinkButton
};
