import { ReactNode, FC } from "react";
import { TamaguiProvider } from "tamagui";

import { tamaguiConfig } from "@/tamagui.config";

type Conf = typeof tamaguiConfig;

declare module "@tamagui/core" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}

type Props = {
  children?: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};

export default ThemeProvider;
