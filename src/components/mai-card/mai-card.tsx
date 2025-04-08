'use client';   
import React from 'react';
import { extendVariants } from '@heroui/system';
import { Card, type CardProps } from '@heroui/card';

const ExtendedCard = extendVariants(Card, {
  variants: {
    isGlassy: {
      true: {
        base: 'border border-white bg-white/25 backdrop-blur-sm'
      },
    },
  },
});

/**
 * カードのコンポーネント
 * 
 * グラスモーフィズム用のスタイルを追加している。
 * 
 * @example
 * 'use strict'
 * import {
 *    MaiCard,
 *    MaiCardBody,
 *    MaiCardFooter,
 *    MaiCardHeader,
 * } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiCard isGlassy>
 *        <MaiCardHeader>TITLE</MaiCardHeader>
 * 
 *        <MaiCardBody>
 *          <p>MaiCard is glassy</p>
 *        </MaiCardBody>
 * 
 *        <MaiCardFooter>
 *          ...btns
 *        </MaiCardFooter>
 *      </MaiCard>
 *    );
 * };
 */
const MaiCard: React.FC<MaiCard.Props> = (props) => {
  const { ...cardProps } = props;
  
  return (
    <ExtendedCard
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...cardProps as any}
    />
  );
};

MaiCard.displayName = 'MaiCard';

namespace MaiCard {
  export type Props = CardProps & {
    isGlassy?: boolean;
  };
};

export {
  MaiCard
};
