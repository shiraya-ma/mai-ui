'use strict';
import React from 'react';
import { cn } from '@heroui/theme';
import { Link, type LinkProps } from '@heroui/link';

import { useMaiLink } from './use-mai-link';

/**
 * Link component
 * 
 * If isExternal is not specified, it will be automatically determined based on the href value.
 * 
 * @example
 * 'use strict'
 * import { MaiLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *   return (
 *     <p>
 *       <MaiLink href="/">home</MaiLink>
 *       <br/>
 *       <MaiLink href="https://www.google.com">Google</MaiLink>
 *     </p>
 *   );
 * };
 */
const MaiLink: React.FC<MaiLink.Props> = (props) => {
  const {
    className,
    ...linkProps
  } = useMaiLink(props);
  
  return (
    <Link
      className={cn(
        'cursor-pointer',
        className,
      )}
      {...linkProps}
      data-is-external={props.isExternal}
    />
  );
};

namespace MaiLink {
  export type Props = LinkProps & {};
};

export {
  MaiLink
};
