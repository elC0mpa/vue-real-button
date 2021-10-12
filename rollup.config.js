import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

module.exports = [
  {
    input: "index.js",
    output: [
      {
        file: "./packages/realButton/lib/index.js",
        format: "es",
      },
    ],
    // plug-in unit
    plugins: [
      vue({
        // Insert the style in the single file component into the style tag in html
        css: false,
        // Convert component to render function
        compileTemplate: true,
      }),
      // Code compression
      terser(),
      postcss(),
    ],
  },
];
