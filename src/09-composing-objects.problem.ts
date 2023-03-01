import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */
const Base = z.object({
  id: z.string().uuid(),
});
const User = Base.extend({
  name: z.string(),
});

const Post = Base.extend({
  title: z.string(),
  body: z.string(),
});

type Post = z.infer<typeof Post>;

const Comment = Base.merge(
  z.object({
    text: z.string(),
  })
);

type Comment = z.infer<typeof Comment>;

type cases = [
  Expect<Equal<z.infer<typeof Comment>, { id: string; text: string }>>,
  Expect<
    Equal<z.infer<typeof Post>, { id: string; title: string; body: string }>
  >,
  Expect<Equal<z.infer<typeof User>, { id: string; name: string }>>
];
