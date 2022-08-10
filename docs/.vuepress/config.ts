import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SUES-Book",
  description: "A manual for sueser",

  base: "/",

  theme,
});
