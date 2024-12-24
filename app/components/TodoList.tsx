'use client';

import { ITask } from "@/types/tasks";
import React from "react";
import TodoItem from "./TodoItem";
import { useThemeContext } from "@/context/useThemeContext";

interface TodoListProps {
  todos: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const {isDarkMode} = useThemeContext()
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className={`${isDarkMode ? 'text-slate-50' : ''} `}>
            <tr>
              <th className="w-[10%]">Mark Completed</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos && todos.map((task) => <TodoItem task={task} key={task.id}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
