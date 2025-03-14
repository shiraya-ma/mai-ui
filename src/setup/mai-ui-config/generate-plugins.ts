/* eslint-disable */
'use strict';
import type { Config } from 'tailwindcss';
import type { PluginCreator } from 'tailwindcss/types/config';
import type { NextUIPluginConfig } from '@nextui-org/react';

import { maiui } from '../mai-ui-plugin';

export function generatePlugins (userPlugin: PluginConfig | undefined, nextUIPluginConfig?: NextUIPluginConfig): PluginConfig {
    if (userPlugin === undefined) {
        return [
            maiui(nextUIPluginConfig)
        ];
    }

    return [
        maiui(nextUIPluginConfig),
        ...userPlugin
    ];
};

type PluginConfig = (PluginCreator | {
    handler: PluginCreator;
    config?: Partial<Config>;
} | {
    (options: any): {
        handler: PluginCreator;
        config?: Partial<Config>;
    };
    __isOptionsFunction: true;
} | undefined)[];
