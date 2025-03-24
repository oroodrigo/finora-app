import Store from 'electron-store';
import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const schema = z.object({
  windowBounds: z.object({
    width: z.number().min(1000),
    minWidth: z.number().min(1000),
    minHeight: z.number().min(600),
    height: z.number().min(700),
    x: z.number().default(0),
    y: z.number().default(0),
  }),
  tokens: z.object({
    jwt: z.string().nullable(),
  })
});

export type StoreConfigSchema = z.infer<typeof schema>;

const config = new Store<StoreConfigSchema>({
  defaults: {
    windowBounds: {
      width: 1100,
      minWidth: 1000,
      minHeight: 600,
      height: 700,
      x: 0,
      y: 0,
    },
    tokens: {
      jwt: null,
    }
  },
  watch: true,
});

export { config };