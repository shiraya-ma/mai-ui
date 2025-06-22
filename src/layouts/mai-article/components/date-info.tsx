'use strict';
import React, { type HTMLAttributes } from 'react';
import { cn } from '@heroui/theme';

import { getDateInfoProps, type DateInfoOptions } from './_internal';

const MaiArticleDateInfo: React.FC<MaiArticleDateInfo.Props> = (props) => {
  const {
    children, // eslint-disable-line @typescript-eslint/no-unused-vars
    className: userClassName,
    classNames,
    dateInfo,
    ...divProps
  } = props;

  const {
    dates,
  } = getDateInfoProps(dateInfo);
  
  return (
    <div
      className={cn(
        'flex flex-col',
        classNames?.dateInfo,
        userClassName,
      )}
      {...divProps}
      data-slot='date-info'
    >
      { dates.map((date) => (
        <p className='flex gap-2 font-code' key={`data-info-${date.label}`}>
          <span className='text-secondary-700/70 dark:text-white/70'>{date.label}</span>
          <span className='text-secondary-700 dark:text-white'>{date.date}</span>
        </p>
      ))}
    </div>
  );
};

namespace MaiArticleDateInfo {
  export type Props = HTMLAttributes<HTMLDivElement> & {
    classNames?: ClassNames;
    dateInfo: DateInfoOptions;
  };

  export type ClassNames = Partial<{
    dateInfo: string;
    label: string;
    date : string;
  }>;
};

export {
  MaiArticleDateInfo,
};
