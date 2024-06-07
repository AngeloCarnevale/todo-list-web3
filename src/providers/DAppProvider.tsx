"use client";

import {
  Localhost,
  Config,
  MetamaskConnector,
  DAppProvider as Provider,
} from "@usedapp/core";

const config: Config = {
  readOnlyChainId:Localhost.chainId,
  connectors: {
    metamask: new MetamaskConnector(),
  },
  readOnlyUrls: {
    [Localhost.chainId]: "http://127.0.0.1:7545",
  },
};

export default function DAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider config={config}>{children}</Provider>;
}
