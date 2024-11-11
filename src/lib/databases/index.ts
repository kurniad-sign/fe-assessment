import 'dotenv/config';

import { drizzle } from 'drizzle-orm/node-postgres';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const database = drizzle(process.env.DATABASE_URL!);

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull().unique(),
});

export const todosTable = pgTable('todos', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  status: varchar({ length: 255 }),
});
