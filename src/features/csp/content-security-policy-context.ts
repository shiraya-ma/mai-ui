'use strict';
import { createContext } from "react";

import { CSP } from "./content-security-policy";
import { type ContentSecurityPolicyProps } from "./content-security-policy-types";

export const ContentSecurityPolicyContext = createContext<ContentSecurityPolicyProps>(new CSP().toJSON());
