'use strict';
import { createContext } from "react";

import { type MakrdownCodeContextProps } from "./markdonw-code-context-props";

export const MarkdownCodeContext = createContext<MakrdownCodeContextProps>({});
