import project from "./project";
import tutorial from "./tutorial";
import news from "./news";
import author from "./author";
import siteSettings from "./siteSettings";

export const schemaTypes = [project, tutorial, news, author, siteSettings];
export type SchemaTypes = typeof schemaTypes[number];