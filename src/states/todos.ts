import { proxy } from 'valtio';

import { fakeDataTodo } from '@/lib/databases/fakedata';

enum TodoStatus {
  NOT_STARTED = 'Not Started',
  ON_PROGRESS = 'On Progress',
  DONE = 'Done',
  REJECT = 'Reject',
}

type User = {
  id: number;
  username: string;
  name: string;
};

export type ITodo = {
  id: number;
  name: string;
  description?: string;
  assignee?: User;
  status?: TodoStatus;
};

export type FormStateTodo = Omit<ITodo, 'id'>;

export const todoStore = proxy<{ todos: ITodo[]; todo?: ITodo }>({
  todos: fakeDataTodo,
  todo: undefined,
});

export const addTodo = (name: string) => {
  todoStore.todos.push({
    id: new Date().valueOf(),
    name,
  });
};
