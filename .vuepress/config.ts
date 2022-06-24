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
        text: "Meet Again",
        children: ["/01_meet_again/01_what-is.md", "/01_meet_again/02_history.md", "/01_meet_again/03_manuals.md", "/01_meet_again/04_hello.md", "/01_meet_again/05_tooling.md"],
      },
      {
        text: "Grammar",
        children: [
          {
            text: "Structure",
            children: ["/02_grammar/01_structure/01_text.md", "/02_grammar/01_structure/02_unicode.md", "/02_grammar/01_structure/03_semicolons.md", "/02_grammar/01_structure/04_use_strict.md"],
          },
          {
            text: "Types, Values, and Variables",
            children: ["/02_grammar/02_types_values_variables/01_types.md", "/02_grammar/02_types_values_variables/02_symbols.md", "/02_grammar/02_types_values_variables/03_mutable_immutable.md", "/02_grammar/02_types_values_variables/04_type_conversions.md", "/02_grammar/02_types_values_variables/05_variables.md"],
          },
          {
            text: "Expressions and Operators",
            children: ["/01_meet_again/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Types, Values, and Variables",
            children: ["/01_meet_again/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Statements",
            children: ["/01_meet_again/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Objects",
            children: ["/01_meet_again/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Functions",
            children: ["/01_meet_again/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Classes",
            children: ["/01_meet_again/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Modules",
            children: ["/01_meet_again/01-what-is.md", "/01_meet_again/02-history.md"],
          },
        ],
      },
      {
        text: "Literature",
        children: [
          {
            text: "Organization",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Async Flow Control",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Collections",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Meta Programming",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Browser",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/01_meet_again/02-history.md"],
          },
          {
            text: "Node",
            children: ["/03_javascript_fundamentals/01-what-is.md", "/01_meet_again/02-history.md"],
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
