import { DefaultTheme } from "styled-components";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
    ...base,
    isDark: true,
    colors: lightColors,
};

export default lightTheme;