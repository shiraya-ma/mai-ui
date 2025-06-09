'use client';
import { createContext, PropsWithChildren, useContext } from "react";

/** @internal */
export const OGPFetcherContext = createContext<OGPFetcherFunction | undefined>(undefined);

/** @internal */
export function useOGPFetcherProvider (props: OGPFetcherProviderProps) {
  const {
    fetcher: userFetcher,
    ...contextProps
  } = props;

  const contextFetcher = useContext(OGPFetcherContext);

  const fetcher = userFetcher ?? contextFetcher;

  return {
    fetcher,
    ...contextProps
  };
};

export type OGPCommonProps = Partial<{
  description : string;
  image       : string;
  siteName    : string;
  title       : string;
  type        : string;
  url         : string
}>;

export type OGPFacebookProps = OGPCommonProps & Partial<{
  appId: string;
}>;

export type OGPProps = {
  url       : string;
  message?  : string;
  data?: Partial<{
    title       : string;
    description : string;

    fb: OGPFacebookProps;
    og: OGPCommonProps;
    twitter: OGPTwitterProps;
  }>;
};

export type OGPFetcherFunction = (href?: string) => Promise<OGPProps | undefined>;

export type OGPFetcherProviderProps = PropsWithChildren<{
  fetcher?: OGPFetcherFunction;
}>;

export type OGPTwitterProps = OGPCommonProps & Partial<{
  card?: string;
  site?: string;
}>;
