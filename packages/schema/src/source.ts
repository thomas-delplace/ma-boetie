import { z } from 'zod'

const currentYear = new Date().getFullYear()

export const SourceSchema = z.object({
    id: z.uuidv7(),
    text: z.string().min(1),
    author: z.string().min(1),
    year: z.number().int().gte(-2500).lte(currentYear).nullable(),
    link: z.url().nullable()
  })

export const SourcesSchema = z.array(SourceSchema)

export type Source = z.infer<typeof SourceSchema>

export type Sources = z.infer<typeof SourcesSchema>

/**
 * Next steps:
 * - Decide whether source `text` means a source title, citation label, quote, or
 *   free-form reference; rename it if a clearer domain word appears.
 * - Keep `SourcesSchema` as an array of source objects, with no nullable items;
 *   use an empty array when a note has no sources.
 */
