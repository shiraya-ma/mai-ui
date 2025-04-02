'use strict';
import type {} from 'react';

declare global {
  interface Window {
    maiUI?: {      
      togglePreferThemeDark?: (isDark?: boolean) => void;
    }
  }
}