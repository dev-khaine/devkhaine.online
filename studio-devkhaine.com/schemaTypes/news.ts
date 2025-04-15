export default {
    name: "news",
    title: "Tech News",
    type: "document",
    fields: [
      { name: "title", title: "Title", type: "string" },
      { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
      { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
      { name: "sourceUrl", title: "Source URL", type: "url" },
      { name: "image", title: "Cover Image", type: "image" },
      { name: "date", title: "Published Date", type: "datetime" },
    ],
  };
  