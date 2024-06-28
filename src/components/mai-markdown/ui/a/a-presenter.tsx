// APresenter
'use strict';
import React, { ReactNode } from 'react';

import { MaiLink } from '@mai-ui/components/mai-link';

import { OuterOGPData } from './outer-ogp-data';

const APresenter: React.FC<APresenter.Props> = (props) => {
    const { children, color, href, ogp } = props;
    
    return (
        <MaiLink
        href={ href }
        className="
            data-[is-card=true]:flex
            data-[is-card=true]:w-full
            data-[is-card=true]:h-[128px]
            data-[is-card=true]:border
            data-[is-card=true]:rounded-lg
            data-[is-card=true]:items-center
            data-[is-card=true]:justify-between
            data-[is-card=true]:overflow-hidden
            data-[is-card=true]:break-all
        "
        data-is-card={ ogp !== null }
        color={ color }
        >
            { ogp
                ?(<>
                    <i className='flex flex-col w-[calc(100%-128px)] h-full p-4'>
                        <b
                        className='block overflow-hidden line-clamp-2 text-[hsl(var(--nextui-foreground))]'
                        style={{ boxOrient: 'vertical' }}
                        >
                            { ogp.title  }
                        </b>

                        <small className='block h-fit'>
                            { ogp.url }
                        </small>
                    </i>
                    <i className='flex flex-grow w-32 h-full border-l-gray-500'>
                        <img
                        src={ ogp.image }
                        />
                    </i>
                </>)
                : (<>{ children }</>)
            }
        </MaiLink>
    );
};

namespace APresenter {
    export type Props = {
        children?: ReactNode;
        color: 'foreground' | 'primary';
        href: string;
        ogp: OuterOGPData | null;
    };
};

export {
    APresenter
};
