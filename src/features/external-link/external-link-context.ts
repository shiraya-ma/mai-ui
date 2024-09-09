'use strict';
import { createContext } from "react";

import type { ExternalLinkHref, ExternalLinkOpener } from "./external-link-types";

export const ExternalLinkContext = createContext<ExternalLinkHref>(null);

export const ExternalLinkOpenerContext = createContext<ExternalLinkOpener>((href) => {})
