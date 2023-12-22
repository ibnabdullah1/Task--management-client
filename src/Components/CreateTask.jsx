import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3) {
      toast.error("A task must have more than 3 characters");
      return;
    }

    setTasks((prevTasks) => {
      const list = Array.isArray(prevTasks) ? [...prevTasks, task] : [task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    toast.success("Task created successfully");
  };

  return (
    <div className="mt-9 ">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), name: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          value={task.name}
          placeholder="Task name.."
          className="px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
          data-temp-mail-org="0"
        />
        <button
          type=""
          className="
      py-2.5 px-6 ml-3
      
      bg-teal-500
      hover:bg-teal-600
      rounded-md
      text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
