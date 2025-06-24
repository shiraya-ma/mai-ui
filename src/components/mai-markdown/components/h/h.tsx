'use strict';
import React, { type HTMLAttributes } from 'react';

import { MaiHeadings } from '../../../mai-headings';

/** @internal */
export const h1: React.FC<HeadingsProps> = (props) => <MaiHeadings level={1} children={props.children}/>;

/** @internal */
export const h2: React.FC<HeadingsProps> = (props) => <MaiHeadings level={2} children={props.children}/>;

/** @internal */
export const h3: React.FC<HeadingsProps> = (props) => <MaiHeadings level={3} children={props.children}/>;

/** @internal */
export const h4: React.FC<HeadingsProps> = (props) => <MaiHeadings level={4} children={props.children}/>;

/** @internal */
export const h5: React.FC<HeadingsProps> = (props) => <MaiHeadings level={5} children={props.children}/>;

/** @internal */
export const h6: React.FC<HeadingsProps> = (props) => <MaiHeadings level={6} children={props.children}/>;

/** @internal */
export type HeadingsProps = HTMLAttributes<HTMLHeadElement> & {};
