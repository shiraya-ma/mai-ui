// A
'use strict';
import React, { HTMLAttributes } from 'react';
import { AFC } from './a-fc';

const A = (props: A.Props) => {
    const { children, href } = props;

    return (
        <AFC
        href={ href! }
        children={ children }
        />
    );
};

namespace A {
    export type Props = HTMLAttributes<HTMLAnchorElement> & {
        href?: string;
    };
};

export {
    A
};
