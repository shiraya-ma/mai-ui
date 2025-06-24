'use client';
import React from 'react';
import { extendVariants } from '@heroui/system';
import { cn } from '@heroui/theme';
import { Button, type ButtonProps } from '@heroui/button';

const ExtendedButton = extendVariants(Button, {
  variants: {
    variant: {
      glassy: 'border-1 bg-opacity-25 backdrop-blur-sm',
    },
  },
}) as React.FC<MaiButton.Props>;

/**
 * Button component
 * 
 * Button component with extended variants
 * 
 * @example
 * 'use strict'
 * import { MaiButton } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *   return (
 *     <MaiButton variant="glassy" color="primary">
 *       hello world
 *     </MaiButton>
 *   );
 * };
 */
const MaiButton: React.FC<MaiButton.Props> = (props) => {
  const { color, variant, ...btnBrops } = props;

  return (
    <ExtendedButton
      color={color}
      data-color={color}
      variant={variant}
      data-variant={variant}
      className={cn(
        variant === 'glassy'?
          color === 'primary'? 'bg-primary-400 border-primary-400 text-white': 
          color === 'secondary'? 'bg-secondary-400 border-secondary-400 text-white':
          color === 'success'? 'bg-success-400 border-success-400 text-white':
          color === 'danger'? 'bg-danger-400 border-danger-400 text-white':
          color === 'warning'? 'bg-warning-500 border-warning-400 text-white':
          'bg-white border-white text-white' // default or undefined
        : undefined,
      )}
      {...btnBrops as ButtonProps}
    />
  );
}

MaiButton.displayName = 'MaiButton';

namespace MaiButton {
  export type Props = Omit<ButtonProps, 'variant'> & {
    variant?: 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'glassy';
  };
};

export {
  MaiButton
};
