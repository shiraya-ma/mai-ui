'use strict';
import {
    type SourceListKeywarod,
    type ContentSecurityPolicyProps,
    type SourceList
} from "./content-security-policy-types";

export class CSP implements ContentSecurityPolicyProps {

    public static readonly SELF: SourceListKeywarod = "'self'";
    public static readonly NONE: SourceListKeywarod = "'none'";
    public static readonly UNSAFE_INLINE: SourceListKeywarod = "'unsafe-inline'";
    public static readonly UNSAFE_EVAL: SourceListKeywarod = "'unsafe-eval'";
    public static readonly UNSAFE_HASHED: SourceListKeywarod = "'unsafe-hashed'";
    public static readonly UNSAFE_ALLOW_REDIRECTS: SourceListKeywarod = "'unsafe-allow-redirects'";
    public static readonly STRICT_DYNAMIC: SourceListKeywarod = "'strict-dynamic'";
    public static readonly REPORT_SAMPLE: SourceListKeywarod = "'report-sample'";

    // fetch
    private readonly _defaultSrc: SourceList | undefined;
    private readonly _childSrc: SourceList | undefined;
    private readonly _connectSrc: SourceList | undefined;
    private readonly _scriptSrc: SourceList | undefined;
    private readonly _scriptSrcElem: SourceList | undefined;
    private readonly _scriptSrcAttr: SourceList | undefined;
    private readonly _workerSrc: SourceList | undefined;
    private readonly _fontSrc: SourceList | undefined;
    private readonly _frameSrc: SourceList | undefined;
    private readonly _imgSrc: SourceList | undefined;
    private readonly _manifestSrc: SourceList | undefined;
    private readonly _mediaSrc: SourceList | undefined;
    private readonly _objectSrc: SourceList | undefined;
    private readonly _styleSrc: SourceList | undefined;
    private readonly _styleSrcElem: SourceList | undefined;
    private readonly _styleSrcAttr: SourceList | undefined;
    private readonly _prefetchSrc: SourceList | undefined;

    // document
    private readonly _baseURI: string[] | undefined;
    private readonly _pluginTypes: string[] | undefined;
    private readonly _sandbox: string[] | undefined;

    // navigation
    private readonly _formAction: SourceList | undefined;
    private readonly _frameAncestors: SourceList | undefined;
    private readonly _navigateTo: string[] | undefined;

    // reporting
    private readonly _reportTo: string[] | undefined;
    
    // other
    private readonly _upgradeInsecureRequests: boolean | undefined;
    private readonly _requireSriFor: string[] | undefined;
    private readonly _requireTrustedTypesFor: string[] | undefined;
    private readonly _trustedTypes: string[] | undefined;


    constructor (str?: string) {
        const directives: string[] = str
        ?.split(";")
        .map(d => d.trim())
        .filter(v => v !== '')
        || [];

        for (let str of directives) {
            const [ directive, ..._values ] = str.split(/\s+/);

            const values = _values.map(v => v.trim());

            switch (directive) {
                // fetch
                case 'default-src': {
                    this._defaultSrc = values;
                    continue;
                }
                case 'child-src': {
                    this._childSrc = values;
                    continue;
                }
                case 'connect-src': {
                    this._connectSrc = values;
                    continue;
                }
                case 'script-src': {
                    this._scriptSrc = values;
                    continue;
                }
                case 'script-src-elem': {
                    this._scriptSrcElem = values;
                    continue;
                }
                case 'script-src-attr': {
                    this._scriptSrcAttr = values;
                    continue;
                }
                case 'worker-src': {
                    this._workerSrc = values;
                    continue;
                }
                case 'font-src': {
                    this._fontSrc = values;
                    continue;
                }
                case 'frame-src': {
                    this._frameSrc = values;
                    continue;
                }
                case 'img-src': {
                    this._imgSrc = values;
                    continue;
                }
                case 'manifest-src': {
                    this._manifestSrc = values;
                    continue;
                }
                case 'media-src': {
                    this._mediaSrc = values;
                    continue;
                }
                case 'object-src': {
                    this._objectSrc = values;
                    continue;
                }
                case 'style-src': {
                    this._styleSrc = values;
                    continue;
                }
                case 'style-src-elem': {
                    this._styleSrcElem = values;
                    continue;
                }
                case 'style-src-attr': {
                    this._styleSrcAttr = values;
                    continue;
                }
                case 'prefetch-src': {
                    this._prefetchSrc = values;
                    continue;
                }
                // document
                case 'base-uri': {
                    this._baseURI = values;
                    continue;
                }
                case 'plugin-types': {
                    this._pluginTypes = values;
                    continue;
                }
                case 'sandbox': {
                    this._sandbox = values;
                    continue;
                }
                // navigation
                case 'form-action': {
                    this._formAction = values;
                    continue;
                }
                case 'frame-ancestors': {
                    this._frameAncestors = values;
                    continue;
                }
                case 'navigate-to': {
                    this._navigateTo = values;
                    continue;
                }
                // reporting
                case 'report-to': {
                    this._reportTo = values;
                    continue;
                }
                // other
                case 'upgrade-insecure-requests': {
                    this._upgradeInsecureRequests = true;
                    continue;
                }
                case 'require-sri-for': {
                    this._requireSriFor = values;
                    continue;
                }
                case 'require-trusted-types-for': {
                    this._requireTrustedTypesFor = values;
                    continue;
                }
                case 'trusted-types': {
                    this._trustedTypes = values;
                    continue;
                }
            } 
        }
    }

    public toJSON (): ContentSecurityPolicyProps {
        const csp: ContentSecurityPolicyProps = {
            baseURI: this.baseURI,
            childSrc: this.childSrc,
            connectSrc: this.connectSrc,
            defaultSrc: this.defaultSrc,
            fontSrc: this.fontSrc,
            formAction: this.formAction,
            frameAncestors: this.frameAncestors,
            frameSrc: this.frameSrc,
            imgSrc: this.imgSrc,
            manifestSrc: this.manifestSrc,
            mediaSrc: this.mediaSrc,
            navigateTo: this.navigateTo,
            objectSrc: this.objectSrc,
            pluginTypes: this.pluginTypes,
            prefetchSrc: this.prefetchSrc,
            reportTo: this.reportTo,
            requireSriFor: this.requireSriFor,
            requireTrustedTypesFor: this.requireTrustedTypesFor,
            sandbox: this.sandbox,
            scriptSrc: this.scriptSrc,
            scriptSrcAttr: this.scriptSrcAttr,
            scriptSrcElem: this.scriptSrcElem,
            styleSrc: this.styleSrc,
            styleSrcAttr: this.scriptSrcAttr,
            styleSrcElem: this.styleSrcElem,
            trustedTypes: this.trustedTypes,
            upgradeInsecureRequests: this.upgradeInsecureRequests,
            workerSrc: this.workerSrc
        };

        return csp;
    };

    // fetch
    get defaultSrc () {
        return this._defaultSrc || [ CSP.SELF ];
    };
    get childSrc () {
        return this._childSrc || this.defaultSrc;
    };
    get connectSrc () {
        return this._connectSrc || this.defaultSrc;
    };
    get scriptSrc () {
        return this._scriptSrc || this.defaultSrc;
    };
    get scriptSrcElem () {
        return this._scriptSrcElem || this.scriptSrc;
    };
    get scriptSrcAttr () {
        return this._scriptSrcAttr || this.scriptSrc;
    };
    get workerSrc () {
        return this._workerSrc || this.childSrc;
    };
    get fontSrc () {
        return this._fontSrc || this.defaultSrc;
    };
    get frameSrc () {
        return this._frameSrc || this.childSrc;
    };
    get imgSrc () {
        return this._imgSrc || this.defaultSrc;
    };
    get manifestSrc () {
        return this._manifestSrc || this.defaultSrc;
    };
    get mediaSrc () {
        return this._mediaSrc || this.defaultSrc;
    };
    get objectSrc () {
        return this._objectSrc || this.defaultSrc;
    };
    get styleSrc () {
        return this._styleSrc || this.defaultSrc;
    };
    get styleSrcElem () {
        return this._styleSrcElem || this.styleSrc;
    };
    get styleSrcAttr () {
        return this._styleSrcAttr || this.styleSrc;
    };
    get prefetchSrc () {
        return this._prefetchSrc || this.defaultSrc;
    };

    // document
    get baseURI () {
        return this._baseURI;
    };
    get pluginTypes () {
        return this._pluginTypes;
    };
    get sandbox () {
        return this._sandbox;
    };

    // navigation
    get formAction() {
        return this._formAction || [ CSP.SELF ];
    }
    
    get frameAncestors() {
        return this._frameAncestors || [ CSP.SELF ];
    }
    
    get navigateTo() {
        return this._navigateTo || [ CSP.SELF ];
    }

    // reporting
    get reportTo() {
        return this._reportTo;
    }
    
    // other
    get upgradeInsecureRequests() {
        return this._upgradeInsecureRequests || false;
    }
    
    get requireSriFor() {
        return this._requireSriFor;
    }
    
    get requireTrustedTypesFor() {
        return this._requireTrustedTypesFor;
    }
    
    get trustedTypes() {
        return this._trustedTypes;
    }
};
