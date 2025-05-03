import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Theme } from "@emotion/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
