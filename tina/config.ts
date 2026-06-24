import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    skipHydration: true,
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "settings",
        label: "Business Details",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "hours",
            label: "Business Hours",
          },
        ],
      },
      {
        name: "hero",
        label: "Homepage Hero",
        path: "content/hero",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heading1",
            label: "Heading Line 1",
          },
          {
            type: "string",
            name: "heading2",
            label: "Heading Line 2",
          },
          {
            type: "string",
            name: "heading3",
            label: "Heading Line 3 (red text)",
          },
          {
            type: "string",
            name: "subtext",
            label: "Paragraph text",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
    ],
  },
});