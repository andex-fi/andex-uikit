import { DefaultTheme } from "styled-components";
import { light as lightAlert } from "../components/Alert/theme"
import { light as lightCard } from "../components/Card/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
    ...base,
    isDark: true,
    alert: lightAlert,
    card: lightCard,
    colors: lightColors,
};

export default lightTheme;