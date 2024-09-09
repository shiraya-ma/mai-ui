// useContentSecurityPolicyContext
'use client';
import { useEffect, useState } from "react";

import { log } from '../../libs';

import {
    CSP,
    getCSP,
    type ContentSecurityPolicyProps
} from "./";

export function useContentSecurityPolicyContext () {
    const [ csp, setCSP ] = useState<ContentSecurityPolicyProps>(new CSP());

    useEffect(() => {
        (async () => {
            const str = await getCSP();

            if (str === undefined || str === '') {
                return;
            }

            const csp = new CSP(str).toJSON();

            setCSP(csp);
        })();
    }, [ setCSP ]);

    useEffect(() => {
        log.debug('Updated content security policy.');

        // log.debug(JSON.stringify(csp, null, 2));
    }, [ csp ]);

    return {
        csp
    };
};
