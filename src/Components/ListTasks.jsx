import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const ListTasks = ({ tasks, setTasks }) => {
  const [todoS, setTodoS] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    const ftTodoS = tasks?.filter((task) => task.status === "todo");
    const ftOngoing = tasks?.filter((task) => task.status === "ongoing");
    const ftComplete = tasks?.filter((task) => task.status === "complete");

    setTodoS(ftTodoS);
    setOngoing(ftOngoing);
    setComplete(ftComplete);
  }, [tasks]);

  const statuses = ["todo", "ongoing", "complete"];

  return (
    <div className="flex gap-6">
      {statuses.map((status, i) => (
        <Section
          key={i}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todoS={todoS}
          ongoing={ongoing}
          complete={complete}
        />
      ))}
    </div>
  );
};

export default ListTasks;

const Section = ({ status, tasks, todoS, ongoing, complete, setTasks }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item?.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "task",
  //   drop: (item) => addItemToSection(item?.id),
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //   }),
  // }));

  let text = "Todo";
  let bg = "bg-gray-900";
  let tasksToMap = todoS;

  if (status === "ongoing") {
    text = "Ongoing";
    tasksToMap = ongoing;
  }

  if (status === "complete") {
    text = "Complete";
    tasksToMap = complete;
  }

  const addItemToSection = (id) => {
    setTasks((prev) => {
      const nTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(nTasks));
      toast.success("Status changed");
      return nTasks;
    });
  };

  return (
    <div
      ref={drop}
      className={`lg:w-64 overflow-x-auto  min-h-[250px] mt-10  p-3 rounded ${
        isOver ? "bg-gray-800" : "bg-[#2f2f2f]"
      }`}
    >
      <Header test={text} bg={bg} count={tasksToMap?.length} />
      <div className="max-h-[300px] overflow-y-auto py-3 px-3">
        {tasksToMap?.length > 0 &&
          tasksToMap.map((task, i) => (
            <TaskCard key={i} task={task} tasks={tasks} setTasks={setTasks} />
          ))}
      </div>
    </div>
  );
};

const Header = ({ test, bg, count }) => {
  return (
    <div
      className={`${bg} text-white flex items-center  pl-4 h-9 rounded uppercase`}
    >
      {test}
    </div>
  );
};

const TaskCard = ({ task, tasks, setTasks }) => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "task",
  //   items: { id: task?.id },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task?.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const handleRemove = (id) => {
    console.log(id);
    const ftTasks = tasks?.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(ftTasks));
    setTasks(ftTasks);
    toast.success("Task deleted");
  };

  return (
    <div
      ref={drag}
      className={`bg-gray-700 p-2 mt-2 rounded flex justify-between items-baseline ${
        isDragging ? "opacity-30" : "opacity-100"
      } `}
    >
      <div>
        <h1 className=" text-white"> {task?.name}</h1>
        <h1 className=" text-gray-300  text-xs"> {task?.details}</h1>
        <h1 className=" text-gray-300 text-xs"> {task?.deadlines}</h1>
      </div>
      <button
        onClick={() => handleRemove(task.id)}
        className="bg-gray-900 rounded-full text-white text-l p-1"
      >
        <RxCross2 />
      </button>
    </div>
  );
};
