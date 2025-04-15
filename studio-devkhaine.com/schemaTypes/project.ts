export default {
  // The name of the schema type, used internally in the CMS
  name: "project",
  // The human-readable title of the schema type, displayed in the CMS
  title: "Projects",
  // The type of schema, in this case, a document
  type: "document",
  // The fields define the structure and data types for this schema
  fields: [
    // A string field for the project title
    { name: "title", title: "Title", type: "string" },
    // A slug field, auto-generated from the title, used for URLs
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    // A text field for a detailed project description
    { name: "description", title: "Description", type: "text" },
    // An image field to upload a project-related image
    { name: "image", title: "Image", type: "image" },
    // An array field to store multiple tags as strings
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    // A URL field for the project's GitHub repository
    { name: "github", title: "GitHub URL", type: "url" },
    // A URL field for the project's live demo
    { name: "live", title: "Live Demo URL", type: "url" },
    // A datetime field to store the project's published date
    { name: "date", title: "Published Date", type: "datetime" },
  ],
  };