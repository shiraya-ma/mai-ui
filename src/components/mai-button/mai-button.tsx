'use client';
import React from 'react';
import { Button, type ButtonProps } from '@heroui/button';

import { useMaiButton } from './use-mai-button';

/**
 * Button component
 * 
 * Essentially the same as Button (for reducing import statements)
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiButton } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *   return (
 *     <MaiButton color="primary" variant="shadow">
 *       hello world
 *     </MaiButton>
 *   );
 * };
 */
const MaiButton: React.FC<MaiButton.Props> = (props) => {
  const { ...btnProps } = useMaiButton(props);

  return (
    <Button
      {...btnProps}
    />
  );
};

MaiButton.displayName = 'MaiButton';

namespace MaiButton {
  export type Props = ButtonProps;
};

export {
  MaiButton
};
