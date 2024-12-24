import { ITask } from "@/types/tasks";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  console.log(todos)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
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
