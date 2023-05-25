import { DefaultTheme } from "styled-components";
import { dark as darkAlert } from "../components/Alert/theme";
import { dark as darkCard } from "../components/Card/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
    ...base,
    isDark: true,
    alert: darkAlert,
    card: darkCard,
    colors: darkColors,
};

export default darkTheme;