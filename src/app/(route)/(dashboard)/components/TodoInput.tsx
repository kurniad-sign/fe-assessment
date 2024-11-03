'use client';

import { useState } from 'react';
import { Notebook, Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/atom';
import { addTodo, FormStateTodo } from '@/states/todos';

export function TodoInput() {
  const [inputTodos, setInputTodo] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormStateTodo>();

  const showInputTodos = (value: boolean) => setInputTodo(value);

  const handleSubmitTodo = handleSubmit((data) => {
    addTodo(data.name);
    showInputTodos(false);
    reset();
  });

  return (
    <>
      {!inputTodos ? (
        <div className="mt-2">
          <Button
            block
            color="primary"
            prependIcon={<Plus strokeWidth={2.5} className="h-4 w-4" />}
            onClick={() => showInputTodos(true)}
          >
            Add Task
          </Button>
        </div>
      ) : null}

      {inputTodos ? (
        <form
          onSubmit={handleSubmitTodo}
          className="relative mt-4 rounded-lg border shadow-sm"
        >
          <div className="flex items-center gap-2 p-3">
            <Notebook className="h-5 w-5 text-current" />
            <input
              {...register('name')}
              placeholder="Enter your task"
              className="w-full bg-background placeholder:text-grey-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button
              type="button"
              variant="subtle"
              onClick={() => showInputTodos(false)}
            >
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </div>
        </form>
      ) : null}
    </>
  );
}
