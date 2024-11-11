import { integer, pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core';

export const rolesEnum = pgEnum('roles', ['leader', 'team']);

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar('first_name', { length: 256 }),
  lastName: varchar('last_name', { length: 256 }),
  roles: rolesEnum().default('leader'),
  username: varchar({ length: 255 }).notNull().unique(),
});
