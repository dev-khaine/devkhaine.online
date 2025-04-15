export default {
    name: "tutorial",
    title: "Tutorials",
    type: "document",
    fields: [
      { name: "title", title: "Title", type: "string" },
      { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
      { name: "intro", title: "Intro", type: "text" },
      { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
      { name: "category", title: "Category", type: "string" },
      { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
      { name: "date", title: "Published Date", type: "datetime" },
    ],
  };
// This schema defines a document type called "tutorial" with fields for title, slug, intro, content, category, tags, and published date.
// The title and slug fields are strings, the intro field is a text field, the content field is an array of blocks (for rich text), the category field is a string, the tags field is an array of strings, and the date field is a datetime type.
// The slug field is generated from the title field.
// This schema is used to create and manage tutorial documents in a content management system (CMS) like Sanity.io.  