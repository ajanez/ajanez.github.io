import { defineCollection, z } from 'astro:content';
// Define un esquema común para ambas colecciones
const commonSchema = z.object({
	title: z.string(),
	summary: z.string(),
  authors: z.array(
    z.object({
      name: z.string(),
      href: z.string(), // Permite URL válida, opcional o string vacío
    })
  ).default([]),
	publishedAt: z.coerce.date(),
	urls: z.record(z.any()).default({}),
  });
  
  // Define la colección `publications` utilizando el esquema común
  const publications = defineCollection({
	type: 'content',
	schema: commonSchema,
  });
  
  // Define la colección `workingPapers` reutilizando el mismo esquema
  const workingPapers = defineCollection({
	type: 'content',
	schema: commonSchema,
  });
  

  // Exporta todas las colecciones
  export const collections = { publications, workingPapers };