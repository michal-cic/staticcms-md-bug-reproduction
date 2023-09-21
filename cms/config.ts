import type { Config } from "@staticcms/core";
import { projectsCollection } from "./collections/projects";

const config: Config = {
  backend: {
    name: "git-gateway",
    repo: "michal-cic/staticcms-md-bug-reproduction",
    branch: "main",
  },
  media_folder: "/public/files",
  public_folder: "/files",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "-",
  },
  editor: {
    preview: true,
    frame: false,
  },
  media_library: {
    folder_support: true,
  },
  collections: [projectsCollection],
};

export { config };
