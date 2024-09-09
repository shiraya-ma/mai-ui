// useCSP
'use client';
import { useContext } from "react";

import { ContentSecurityPolicyContext } from "./content-security-policy-context";

export function useCSP () {
    const csp = useContext(ContentSecurityPolicyContext);

    return {
        csp
    };
};
