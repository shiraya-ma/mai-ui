'use client';
import { log } from "../../../../../libs/log";
import { OuterOGPData } from "../outer-ogp-data";

export function ogpFetcher (isCardHref: boolean) {
    return async (url: string): Promise<OuterOGPData | null> => {
        if (!isCardHref) {
            return null;
        }

        if (typeof window === 'undefined') {
            return null;
        }

        const res = await new Promise<{ok: boolean, text?: string}>(async (resolve) => {
            const workerUrl = URL.createObjectURL(new Blob([`
                self.onmessage = async function (e) {
                    const res = await fetch("${ url }", {
                        headers: {
                            "user-agent": "Twitterbot/1.0"
                        }
                    });

                    if (!res.ok) {
                        self.postMessage({ ok: false });
                        return;
                    }

                    const text = await res.text();

                    self.postMessage({ ok: true, text });
                };
            `],{
                type: "text/javascript"
            }));

            const worker = new Worker(workerUrl);
            
            worker.onmessage = (e) => {
                worker.terminate();
                URL.revokeObjectURL(workerUrl);

                resolve(e.data)
            };
            
            worker.postMessage({});
        });

        if (!res.ok || !res.text) {
            return null;
        }

        const dom = new DOMParser().parseFromString(res.text, 'text/html');

        const metas = Array.from(dom.querySelectorAll('meta'));

        const find = (metas: HTMLMetaElement[], property: string) => {
            const reg = new RegExp(`^(twitter|og):${ property }$`);
            const meta = metas.find(meta => reg.test(meta.getAttribute('property') || ''));
    
            return meta?.getAttribute('content') || undefined;
        };
    
        const imageMeta = find(metas, 'image');
        const titleMeta = find(metas, 'title');

        if (imageMeta && titleMeta) {
            log.debug('Successed fetch ogp', url);
    
            const ogpData: OuterOGPData = {
                image: imageMeta,
                title: titleMeta,
                url
            };
    
            return ogpData;
        }

        return null;
    };
};
