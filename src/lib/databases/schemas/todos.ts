import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

import { usersTable } from './users';

export const todosTable = pgTable('todos', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  status: varchar({ length: 255 }),
  assignedTo: integer('assigned_to').references(() => usersTable.id),
});
