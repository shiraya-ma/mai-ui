'use strict';
import React, { type HTMLAttributes } from 'react';
import { cn } from '@heroui/theme';

import { MaiHeadingsStyleProvider, type MaiHeadingsStyleContextProps } from '@/components';

const MaiArticleContainer: React.FC<MaiArticleContainer.Props> = (props) => {
  const {
    className: userClassName,
    headingStyle,
    isGlassy,
    ...articleProps
  } = props;
  
  return (
    <MaiHeadingsStyleProvider
      context={headingStyle || {
        1: {
          base: 'text-center',
        },
        2: {
          base: 'border-primary-300 border-l-[1.5rem] border-b-4 bg-primary-200 pl-2',
          text: 'text-secondary-500',
          link: 'text-secondary-500',
        },
        3: {
          base: 'border-primary-300 border-b-2'
        },
      }}
    >
      <article
        className={cn(
          'flex flex-col gap-4 px-4 py-12 lg:rounded-md',
          isGlassy? 'bg-white/30 backdrop-blur-md lg:border lg:border-white': 
            'lg:bg-white lg:dark:bg-gray-800 lg:shadow-medium',
          userClassName
        )}
        { ...articleProps }
        data-slot='container'
      />
    </MaiHeadingsStyleProvider>
  );
};

namespace MaiArticleContainer {
  export type Props = HTMLAttributes<HTMLElement>  & Partial<{
    headingStyle: MaiHeadingsStyleContextProps;
    isGlassy: boolean;
  }>;
};

export {
  MaiArticleContainer,
};
