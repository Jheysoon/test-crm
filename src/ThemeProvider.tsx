import { ReactNode, FC } from "react";
import { TamaguiProvider } from "tamagui";

import { tamaguiConfig } from "@/tamagui.config";

type Props = {
  children?: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};

export default ThemeProvider;
