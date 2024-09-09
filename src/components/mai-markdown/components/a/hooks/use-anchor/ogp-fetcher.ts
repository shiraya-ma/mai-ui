'use strict';

import { log } from "../../../../../../libs";

const TAG = '[OGP-FETCHER]';

const ENDPOINT = 'http://localhost:8080/api/ogp';

export const ogpFetcher = async (url: string | undefined) => {
    if (!url) {
        return undefined;
    }

    try {
        log.debug(TAG, 'Try fetch to', url);

        const fetchURL = `${ ENDPOINT }?url=${ url }`;

        const res = await fetch (fetchURL);

        if (!res.ok) {
            throw new Error(`Failed fetch to [${ fetchURL }]`);
        }

        const obj = await res.json() as any;

        if (obj.message) {
            throw new Error(obj.message);
        }

        const data = obj.data;

        const ogp: { image?: string, title?: string } = {
            image: data.twitter?.image || data.og?.image,
            title: data.twitter?.title || data.og?.title || data.title
        };

        return ogp
    } catch (e) {
        const err = e as Error;

        log.error(TAG, err.message);

        return undefined;
    }
};
