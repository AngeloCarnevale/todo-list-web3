"use client"

import { useEthers } from "@usedapp/core";
import {utils} from "ethers"
import React from "react";

export default function ConnectButton() {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  // 'account' being undefined means that we are not connected.
  if (account) return <button onClick={() => deactivate()}>Disconnect</button>;
  else return <button onClick={() => activateBrowserWallet({type: "metamask"})}>Connect</button>;
}
