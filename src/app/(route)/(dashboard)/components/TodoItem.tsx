'use client';

import { useState } from 'react';
import { Edit, NotepadText } from 'lucide-react';
import { useSnapshot } from 'valtio';

import { Button, Heading, Text } from '@/components/atom';
import { EmptyStates } from '@/components/moleculs';
import { Drawer } from '@/components/organism';
import { ITodo, todoStore } from '@/states/todos';

import emptyIllustration from '@/assets/images/empty-state-task.svg';

export function TodoItem() {
  const { todos } = useSnapshot(todoStore);
  const [openDrawer, setOpenDrawer] = useState(false);

  const onOpenDrawerTodo = (item: ITodo) => {
    console.log(item);
    setOpenDrawer(true);
  };

  const onCloseDrawerTodo = () => {
    setOpenDrawer(false);
  };

  return (
    <>
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
            className="group w-full shrink-0 grow border-b p-2 transition-all duration-300 hover:bg-grey-75"
          >
            <div className="flex items-center gap-x-4">
              <NotepadText size={14} />
              <Text
                component="span"
                className="shrink-0 text-office-brown-600 group-hover:text-office-brown-900"
              >
                {todo.name}
              </Text>
              <Button
                className="invisible h-7 px-2 text-xs group-hover:visible"
                variant="subtle"
                color="primary"
                onClick={() => onOpenDrawerTodo(todo)}
              >
                <Edit size={14} />
                Edit
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Drawer isOpen={openDrawer} onClose={onCloseDrawerTodo}>
        <Heading component="h3" variant="title-4">
          Title Task Name
        </Heading>
      </Drawer>
    </>
  );
}
