import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

module.exports = [
  {
    input: "src/components/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
      },
    ],
    // plug-in unit
    plugins: [
      vue({
        // Insert the style in the single file component into the style tag in html
        css: true,
        // Convert component to render function
        compileTemplate: true,
      }),
      postcss(),
      terser(),
    ],
  },
];
