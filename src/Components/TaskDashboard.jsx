import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RxDotsHorizontal } from "react-icons/rx";
import useAuth from "../Hooks/useAuth";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";
import UpdateModal from "./UpdateModal";
import { useState } from "react";

const TaskDashboard = () => {
  const { user, loading } = useAuth();
  const userEmail = user.email;
  if (loading) {
    return "loading...";
  }
  const {
    refetch,
    data: tasks = [],
    isLoading: isTaskLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/tasks`);
      return res.data;
    },
  });
  if (isTaskLoading) {
    return "Loading...";
  }
  console.log(tasks);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    e.target.reset();
    refetch();
    const userTask = {
      task,
      userEmail,
      status: "todo",
    };
    axios.post("http://localhost:5000/tasks", userTask).then((data) => {
      if (data.data.acknowledged) {
        refetch();
        toast.success("Task successfully");
      }
    });
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="bg-gray-900 px-2 py-2 rounded-md ">
        <div className="flex justify-between items-center gap-10 text-white p-1">
          <h2>TODO</h2>
          <button className="hover:bg-gray-800 w-6 h-6 rounded-md flex justify-center items-center">
            <RxDotsHorizontal />
          </button>
        </div>
        <div className="max-h-[300px]  overflow-y-auto py-3 px-3">
          {tasks?.map((task, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-md text-white p-2 mb-2 flex justify-between items-center"
            >
              <h1>{task.task}</h1>
              <button
                onClick={() => openModal(true)}
                className="hover:bg-gray-900 text-white w-6 h-6 rounded-md flex justify-center items-center"
              >
                <CiEdit />
              </button>
              <UpdateModal isOpen={isOpen} closeModal={closeModal} />
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="add task"
            className=" bg-gray-800 px-3 py-2 border focus:ring-none rounded-md border-gray-900 focus:outline-[#1c4456]  text-white"
            data-temp-mail-org="0"
            required
          />
          <br />

          <button
            className="py-1 px-3 rounded mt-2 text-sm bg-teal-500 text-white "
            type="submit"
          >
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDashboard;
