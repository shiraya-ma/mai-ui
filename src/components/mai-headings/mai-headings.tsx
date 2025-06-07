'use strict';
import React from 'react';

import { MaiHeadingsLevel, MaiHeadingsProps } from './_internal';
import { MaiH1 } from './mai-h1';
import { MaiH2 } from './mai-h2';
import { MaiH3 } from './mai-h3';
import { MaiH4 } from './mai-h4';
import { MaiH5 } from './mai-h5';
import { MaiH6 } from './mai-h6';

/**
 * Heading component
 * 
 * Dynamically configurable by specifying the level.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiHeadings } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiHeadings level={ 1 }>
 *        hello world
 *      </MaiHeadings>
 *    );
 * };
 */
const MaiHeadings: React.FC<MaiHeadings.Props> = (props) => {
  const { level, ...headingsProps } = props;
  const levels: MaiHeadingsLevel[] = [1, 2, 3, 4, 5, 6];
  if (!levels.includes(level)) {
    throw new Error(`Invalid level: ${level}. Must be one of ${levels.join(', ')}.`);
  }

  switch (level) {
    case 1: {
      return <MaiH1 { ...headingsProps }/>;
    }
    case 2: {
      return <MaiH2 { ...headingsProps }/>;
    }
    case 3: {
      return <MaiH3 { ...headingsProps }/>;
    }
    case 4: {
      return <MaiH4 { ...headingsProps }/>;
    }
    case 5: {
      return <MaiH5 { ...headingsProps }/>;
    }
    default: {
      return <MaiH6 { ...headingsProps }/>;
    }
  }
};
MaiHeadings.displayName = 'MaiHeadings';

namespace MaiHeadings {
  export type Props = MaiHeadingsProps & { level: MaiHeadingsLevel };
};

export {
  MaiHeadings
};
