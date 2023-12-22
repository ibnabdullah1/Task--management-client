import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: uuidv4(),
    name: "",
    status: "todo",
    details: "",
    deadlines: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

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

    setTask({
      id: uuidv4(),
      name: "",
      status: "todo",
      details: "",
      deadlines: "",
    });

    toast.success("Task created successfully");
  };

  return (
    <div className="mt-9">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={task.name}
          placeholder="Task name.."
          required
          className="px-3 py-2 border rounded-md mr-3 border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
        />
        <input
          onChange={handleChange}
          type="text"
          name="details"
          value={task.details}
          placeholder="Description.."
          required
          className="px-3 py-2 border rounded-md mr-3 border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
        />
        <input
          onChange={handleChange}
          type="date"
          name="deadlines"
          value={task.deadlines}
          required
          className="px-3 py-2 border rounded-md mr-3 border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
        />
        <button
          type="submit"
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
