import { buildConfig } from "payload/config";

export default buildConfig({
 serverURL: process.envNEXT_PUBLIC_SERVER_URL || "",
 collections: [],
 routes: {
  admin: "/sell",
 },
 admin: {},
 editor: lexicalEditor(),
});
