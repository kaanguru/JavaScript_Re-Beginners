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
        children: ["/01_meet_again/01_what-is.md", "/01_meet_again/02_history.md", "/01_meet_again/03_manuals.md", "/01_meet_again/04_hello.md", "/01_meet_again/05_tooling.md", "/01_meet_again/06_use_strict.md"],
      },
      {
        text: "Grammar",
        children: [
          {
            text: "Sentence Structure",
            children: ["/02_grammar/01_structure/01_text.md", "/02_grammar/01_structure/02_unicode.md", "/02_grammar/01_structure/03_semicolons.md"],
          },
          {
            text: "Words",
            children: ["/02_grammar/02_words/01_types_symbols.md", "/02_grammar/02_words/02_mutable_immutable.md", "/02_grammar/02_words/03_type_conversions_variables.md"],
          },
          {
            text: "Parts of Language",
            children: ["/02_grammar/03_expressions_operators/01_expressions.md", "/02_grammar/03_expressions_operators/02_access_expression.md", "/02_grammar/03_expressions_operators/03_operators.md"],
          },
          {
            text: "Statements",
            children: ["/02_grammar/04_statements/01_expression_statements.md", "/02_grammar/04_statements/02_conditionals.md", "/02_grammar/04_statements/03_loops.md", "/02_grammar/04_statements/04_jumps.md"],
          },
          {
            text: "Objects",
            children: ["/02_grammar/05_objects/01_create_query_set_objects.md", "/02_grammar/05_objects/02_delete_test_enumerate_objects.md", "/02_grammar/05_objects/03_extend_serialize_objects.md", "/02_grammar/05_objects/04_object_methods.md", "/02_grammar/05_objects/05_extended_object_literal_syntax.md"],
          },
          {
            text: "Nouns , Pronouns and Adjectives",
            children: ["/02_grammar/06_collections/01_crud_arrays.md", "/02_grammar/06_collections/02_iterating_arrays", "/02_grammar/06_collections/03_array_methods", "/02_grammar/06_collections/04_objects_like_array", "/02_grammar/06_collections/05_maps"],
          },
          {
            text: "Verbs",
            children: ["/02_grammar/07_functions/01_functions", "/02_grammar/07_functions/02_arguments_parameters", "/02_grammar/07_functions/03_closures"],
          },
          {
            text: "Clauses",
            children: ["/02_grammar/08_classes/01_classes", "/02_grammar/08_classes/02_extend", "/02_grammar/08_classes/03_mixins"],
          },
          {
            text: "Tenses",
            children: ["/02_grammar/09_asynchronous/01_asynchronous", "/02_grammar/09_asynchronous/02_promises", "/02_grammar/09_asynchronous/03_async_await"],
          },
        ],
      },
      {
        text: "Literature",
        children: [
          {
            text: "Organization by Chapters",
            children: [
              // "Modules"
            ],
          },
          {
            text: "Meta Programming",
            children: [
              // "Proxies", "Reflect API"
            ],
          },
          {
            text: "Object Oriented Programming",
            children: [],
          },
          {
            text: "Functional Programming",
            children: [],
          },
          {
            text: "Browser",
            children: [
              // "Document", "Events", "Interfaces", "Memory", "Network", "Animation", "Regex"
            ],
          },
          {
            text: "Node",
            children: [],
          },
          {
            text: "TypeScript ",
            children: [],
          },
          {
            text: "Deno",
            children: [],
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
