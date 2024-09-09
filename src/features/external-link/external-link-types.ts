'use strict';

export type ExternalLinkHref = string | null;

export type ExternalLinkOpener = (href: string | null) => void;
