import { z } from 'zod'
import { TipTapDocSchema } from './tiptap'
import { SourcesSchema } from './source'

export const ILBNoteSchema = z.object({
  id: z.uuidv7(),
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string(),
  content: TipTapDocSchema,
  sources: SourcesSchema,
  date: z.object({
    officialRelease: z.iso.datetime(),
    created: z.iso.datetime(),
    updated: z.iso.datetime(),
    published: z.iso.datetime().nullable(), // if null, it's a draft
    archived: z.iso.datetime().nullable()
  })
})

export type ILBNote = z.infer<typeof ILBNoteSchema>

/**
 * Next steps:
 * - Decide whether `excerpt` is required enough to use `.min(1)` and whether title,
 *   slug, and excerpt need max-length guards for admin form safety.
 * - Add Create/Update/Public variants once the API boundaries are clearer, because
 *   admin creation should not necessarily provide `id`, `created`, or `updated`.
 * - Keep quiz-related fields out of this base note schema until the quiz model has
 *   been designed as its own domain concept.
 */
