import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "./index.js",
  output: {
    file: "./dist/bundle.cjs",
    format: "commonjs",
  },
  plugins: [nodeResolve(), json(), commonjs({ include: ["node_modules/**"] })],
});
