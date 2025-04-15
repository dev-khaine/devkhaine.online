export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
      { name: "title", title: "Site Title", type: "string" },
      { name: "description", title: "Meta Description", type: "text" },
      { name: "favicon", title: "Favicon", type: "image" },
      { name: "logo", title: "Site Logo", type: "image" },
    ],
  };
// Compare this snippet from nextjs-devkhaine.com/src/app/(site)/layout.tsx:
// import { siteConfig } from "@/config/site";
// import { cn } from "@/lib/utils";  