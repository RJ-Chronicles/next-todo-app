import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TaskList from "./components/TodoList";
import Theme from "./components/Theme";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <Theme>
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Todo List App</h1>
        <AddTask/>
      </div>
      {tasks &&<TaskList todos = {tasks}/>}
    </div>
    </Theme>
  );
}
