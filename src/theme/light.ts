import { DefaultTheme } from "styled-components";
import { light as lightAlert } from "../components/Alert/theme"
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
    ...base,
    isDark: true,
    alert: lightAlert,
    colors: lightColors,
};

export default lightTheme;