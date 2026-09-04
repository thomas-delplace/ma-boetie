import { z } from 'zod'

export const TipTapDocSchema = z.object({
  type: z.literal('doc'),
  content: z.array(z.unknown())
})