import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

// you usually export this from a tamagui.config.ts file
export const tamaguiConfig = createTamagui(config);

export default tamaguiConfig;
