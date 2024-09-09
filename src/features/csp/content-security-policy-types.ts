'use strict';

export type ContentSecurityPolicyProps = {
    // fetch
    defaultSrc: SourceList;
    childSrc: SourceList;
    connectSrc: SourceList;
    scriptSrc: SourceList;
    scriptSrcElem: SourceList;
    scriptSrcAttr: SourceList;
    workerSrc: SourceList;
    fontSrc: SourceList;
    frameSrc: SourceList;
    imgSrc: SourceList;
    manifestSrc: SourceList;
    mediaSrc: SourceList;
    objectSrc: SourceList;
    styleSrc: SourceList;
    styleSrcElem: SourceList;
    styleSrcAttr: SourceList;
    prefetchSrc: SourceList;

    // document
    baseURI: string[] | undefined;
    pluginTypes: string[] | undefined;
    sandbox: string[] | undefined;

    // navigation
    formAction: SourceList;
    frameAncestors: SourceList;
    navigateTo: SourceList;

    // reporting
    reportTo: string[] | undefined;
    
    // other
    upgradeInsecureRequests: boolean;
    requireSriFor: string[] | undefined;
    requireTrustedTypesFor: string[] | undefined;
    trustedTypes: string[] | undefined;
};

export type SourceList = (SourceListKeywarod | string)[];

export type SourceListKeywarod = "'self'"  | "'none'" | "'unsafe-inline'" | "'unsafe-eval'" | "'unsafe-hashed'" | "'unsafe-allow-redirects'" | "'strict-dynamic'" | "'report-sample'";
