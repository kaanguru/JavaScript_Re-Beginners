import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { componentsPlugin } from "vuepress-plugin-components";
import { gitPlugin } from "@vuepress/plugin-git";

export default defineUserConfig({
  lang: "en-US",
  title: "Javascript for Re-Beginners",
  description: " Let’s Learn ALL JavaScript, starting from scratch",
});
module.exports = {
  theme: defaultTheme({
    logo: "/img/CK-JS-Re-Beginners.png",
    navbar: [
      {
        text: "Introduction",
        children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/03-manuals.md", "/02_javascript_introduction/04-hello.md", "/02_javascript_introduction/05-tooling.md"],
      },
      {
        text: "Grammar",
        children: [
          {
            text: "Code structure",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/02-history.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Syntax Fundamentals",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Code Quality",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Objects",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Data types",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
        ],
      },
      {
        text: "Literature",
        children: [
          {
            text: "Code structure",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Syntax Fundamentals",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Code Quality",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Objects",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
          {
            text: "Data types",
            children: ["/02_javascript_introduction/01-what-is.md", "/02_javascript_introduction/02-history.md"],
          },
        ],
      },
    ],
  }),
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!README.md"],
  plugins: [
    searchPlugin(),
    componentsPlugin({
      addThis: "ra-62b31f8f8d71ab4e",
      backToTop: true,
      components: ["Badge", "CodePen", "FontIcon", "YouTube"],
      iconAssets: "fontawesome",
    }),
    gitPlugin({
      // options
      contributors: false,
    }),
  ],
};
