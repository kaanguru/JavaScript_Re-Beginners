import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

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
      {
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
      },
    ],
  }),
};
