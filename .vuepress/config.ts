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
      // nested group - max depth is 2
      /*  {
        text: "Group",
        children: [
          {
            text: "SubGroup",
            children: ["/group/sub/foo.md", "/group/sub/bar.md"],
          },
        ],
      },
      // control when should the item be active
      {
        text: "Group 2",
        children: [
          {
            text: "Always active",
            link: "/",
            // this item will always be active
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            // this item will be active when current route path starts with /foo/
            // regular expression is supported
            activeMatch: "^/foo/",
          },
        ],
      }, */
    ],
  }),
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!README.md"],
  plugins: [
    searchPlugin(),
    componentsPlugin({
      addThis: "ra-62b31f8f8d71ab4e",
      backToTop: true,
      components: ["Badge", "CodePen", "FontIcon", "PDF", "StackBlitz", "YouTube"],
      iconAssets: "iconfont",
    }),
    gitPlugin({
      // options
      contributors: false,
    }),
  ],
};
