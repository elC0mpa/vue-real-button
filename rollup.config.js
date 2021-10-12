import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";

module.exports = [
  {
    input: "packages/realButton/index.js",
    output: [
      {
        file: "packages/realButton/lib/index.js",
        format: "esm",
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
      scss({
        output: "packages/realButton/lib/styles.css",
        outputStyle: "compressed",
      }),
      // Code compression
      terser(),
    ],
  },
];
