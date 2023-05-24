import "styled-components"
import { AndexTheme } from "./theme"

declare module "styled-components" {
    export interface DefaultTheme extends AndexTheme {}
}