import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

// you usually export this from a tamagui.config.ts file
export const tamaguiConfig = createTamagui({
  ...config,
  themes: {
    light: {
      ...config.themes.light,
      background: "rgb(243 244 246)",
    },
  },
});

type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
