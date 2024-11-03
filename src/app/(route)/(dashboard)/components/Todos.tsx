'use client';

import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

export function Todos() {
  return (
    <div className="mb-6 flex w-full grow flex-col">
      <TodoInput />
      <div className="relative mt-4">
        <TodoItem />
      </div>
    </div>
  );
}
