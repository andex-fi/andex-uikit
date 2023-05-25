import { DefaultTheme } from "styled-components";
import { dark as darkAlert } from "../components/Alert/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
    ...base,
    isDark: true,
    alert: darkAlert,
    colors: darkColors,
};

export default darkTheme;