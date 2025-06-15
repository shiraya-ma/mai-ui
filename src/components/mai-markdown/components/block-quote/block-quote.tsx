'use strict';
/* eslint-disable react-refresh/only-export-components */
import React, { type QuoteHTMLAttributes } from 'react';
import { cn } from '@heroui/theme';
import { Alert, AlertProps } from '@heroui/alert';

/** @internal */
const BlockQuote: React.FC<QuoteHTMLAttributes<HTMLQuoteElement>> = (props) => {
  const {
    className: userClassName,
    'data-alert-level': alertLevel,
    node: _,    // eslint-disable-line @typescript-eslint/no-unused-vars
    ...quoteProps
  } = props as QuoteHTMLAttributes<HTMLQuoteElement> & Partial<{
    node: undefined;
    'data-alert-level': 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  }>;

  return alertLevel? (
    <Alert
      classNames={{
        base: userClassName,
      }}
      color={alertLevel}
      variant='solid'
      {...quoteProps as AlertProps}
    />
  ):(
    <blockquote
      className={cn(
        'block pl-4 border-l-4 border-gray-500 text-foreground/80',
        userClassName,
      )}
      {...quoteProps}
    />
  );
};

export {
  BlockQuote as blockquote,
};
