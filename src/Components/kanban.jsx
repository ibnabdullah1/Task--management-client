import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const KanBan = () => {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" max-w-5xl  mx-auto">
        <ListTasks tasks={tasks} setTasks={setTasks} />
        <CreateTask tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
};

export default KanBan;
