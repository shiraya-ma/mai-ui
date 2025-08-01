'use strict';
import React from 'react';
import { type HTMLHeroUIProps } from '@heroui/system';
import {
  CardBody,
  CardFooter,
  type CardFooterProps,
  CardHeader,
} from '@heroui/card';

const MaiCardBody: React.FC<MaiCardBody.Props> = CardBody;
MaiCardBody.displayName = 'MaiCardBody';
namespace MaiCardBody {
  export type Props = HTMLHeroUIProps<'div'>;
};

const MaiCardFooter: React.FC<MaiCardFooter.Props> = CardFooter;
MaiCardFooter.displayName = 'MaiCardFooter';
namespace MaiCardFooter {
  export type Props = CardFooterProps;
};

const MaiCardHeader: React.FC<MaiCardHeader.Props> = CardHeader;
MaiCardHeader.displayName = 'MaiCardHeader';
namespace MaiCardHeader {
  export type Props = HTMLHeroUIProps<'div'>;
};

export {
  MaiCardBody,
  MaiCardFooter,
  MaiCardHeader,
};
