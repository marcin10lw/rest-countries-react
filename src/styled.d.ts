import "styled-components";
import { customTheme } from "./theme";

type CustomTheme = typeof customTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
