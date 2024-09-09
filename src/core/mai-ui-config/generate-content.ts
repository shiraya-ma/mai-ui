'use strict';
import type { ContentConfig } from 'tailwindcss/types/config';

export function generateContent (userContent: ContentConfig): ContentConfig {
    return [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css,scss,sass}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@shiraya-ma/mai-ui/**/*.{js,ts,jsx,tsx}",
        ...(userContent as string[])
    ];
};
