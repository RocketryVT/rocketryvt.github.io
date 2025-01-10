import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { parse as parseToml } from "toml";

const galleryCollection = defineCollection({
    loader: file("src/content/gallery.toml", {
      parser: (text) => parseToml(text).media 
    }),
    schema: ({image}) => z.object({
      id: z.string(),
      url: image(),
      alt: z.string(),
    }),
});

const teamCollection = defineCollection({
  loader: file("src/content/team.toml", {
    parser: (text) => parseToml(text).Team
  }),
  schema: ({image}) => z.object({
    id: z.string(),
    url: image(),
    title: z.string(),
    people: z.array(z.string()),
  }),
});

export const collections = {
  gallery: galleryCollection,
  team: teamCollection,
};