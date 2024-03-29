import React, { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  Blocto = "blocto",
  WalletLink = "walletlink",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<React.PropsWithChildren<SvgProps>>;
  connectorId: ConnectorNames;
  priority: number;
}
