'use strict';
import { NextUIPluginConfig, nextui } from "@nextui-org/react";

/**
 * NextUIのテーマを拡張するプラグイン
 * 
 * @param config 
 * @returns 
 */
export function maiui (config?: NextUIPluginConfig | undefined) {
    const _config: NextUIPluginConfig = Object.assign(config ?? {}, {

    });

    return nextui(_config)
};

export default maiui;
