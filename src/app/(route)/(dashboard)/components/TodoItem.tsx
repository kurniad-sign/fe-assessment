'use client';

import { Edit, NotepadText } from 'lucide-react';
import { useSnapshot } from 'valtio';

import { Button, Text } from '@/components/atom';
import { EmptyStates } from '@/components/moleculs';
import { todoStore } from '@/states/todos';

import emptyIllustration from '@/assets/images/empty-state-task.svg';

export function TodoItem() {
  const { todos } = useSnapshot(todoStore);
  return (
    <ul role="list" className="flex flex-col">
      {!todos.length && (
        <div className="mx-auto flex max-w-[360px] grow flex-col items-center justify-center space-y-2 text-center">
          <EmptyStates
            imageSrc={emptyIllustration}
            imageStyle={{
              width: 150,
              height: 150,
            }}
            title="No task to show"
            description="You don’t have any pending tasks for now. Add new tasks to track your
    productivity"
          />
        </div>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="transition-color w-full shrink-0 grow border-b p-2 hover:bg-grey-100"
        >
          <div className="flex items-center gap-x-2">
            <NotepadText size={14} />
            <Text component="span" className="shrink-0 grow">
              {todo.name}
            </Text>
            <Button className="h-8" variant="subtle">
              <Edit size={14} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
