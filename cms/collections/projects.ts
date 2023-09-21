import { Collection } from "@staticcms/core";
import { languageSelectField } from "../fields/languageSelect";

const projectsCollection: Collection = {
  name: "projects",
  label: "Projects",
  label_singular: "Project",
  delete: true,
  create: true,
  editor: {
    preview: false,
    frame: false,
  },
  folder: "content/projects",
  fields: [
    languageSelectField,
    // Image
    {
      name: "cover_image",
      label: "Cover image",
      widget: "image",
      required: true,
    },
    // Title
    {
      name: "title",
      label: "Title",
      required: true,
      widget: "string",
    },
    // Publish date
    {
      name: "publish_date",
      label: "Date",
      time_format: false,
      widget: "datetime",
      required: true,
    },
    // Location
    {
      name: "location",
      label: "Location",
      widget: "string",
    },
    // Description
    {
      name: "description",
      label: "Description",
      widget: "markdown",
      toolbar_buttons: {
        main: ["bold", "italic", "strikethrough", "file-link"],
        selection: ["bold", "italic", "strikethrough", "file-link"],
      },
    },
    // Content
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      required: true,
    },
  ],
};

export { projectsCollection };
