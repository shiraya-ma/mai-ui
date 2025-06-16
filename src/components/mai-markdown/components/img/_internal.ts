'use client';
import { useState, type ImgHTMLAttributes } from "react";

import { useFallbackImage } from "@/features/fallback-image";
import { trimNodeFromProps } from "../../internal";

/** @internal */
export function useImg (props: ImageProps) {
  const {
    ...imgProps
  } = trimNodeFromProps<ImageProps>(props);
  const [ fallbackSize, setFallbackSize ] = useState<Partial<{width: number, height: number}> | undefined>();
  const fallbackImage = useFallbackImage();
  const fallbackSrc = fallbackImage?.src;

  const isError = !fallbackSize? undefined: true;

  const handleError = () => {
    if (fallbackSize || !fallbackImage) return;

    const {
      width,
      height,
    } = fallbackImage;

    const size = {
      width : width,
      height: height,
    };
    
    setFallbackSize(size);
  };

  return {
    fallbackSrc,
    fallbackSize,
    isError,
    handleError,
    ...imgProps,
  };
};

/** @internal */
export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {};