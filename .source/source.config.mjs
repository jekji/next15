// docs.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
var docs = defineDocs({
  dir: "docs"
});
var docs_config_default = defineConfig({
  lastModifiedTime: "git"
});
export {
  docs_config_default as default,
  docs
};
