import React, { useState, useEffect } from "react";
import UseTask from "../../Hooks/UseTask";
import Loading from "../Loading/Loading";
import axios from "axios";
import Swal from "sweetalert2";

const Lists = () => {
  const { isLoading, data, refetch } = UseTask();
  console.log(data);

  const [lists, setLists] = useState({
    "to-do": [],
    ongoing: [],
    completed: [],
  });

  useEffect(() => {
    if (!isLoading) {
      const initialData = data;

      setLists({
        "to-do": initialData.filter((task) => task.status === "to-do"),
        ongoing: initialData.filter((task) => task.status === "ongoing"),
        completed: initialData.filter((task) => task.status === "completed"),
      });
    }
  }, [isLoading, data]);

  const handleDragStart = (e, listId, itemId) => {
    e.dataTransfer.setData("listId", listId);
    e.dataTransfer.setData("itemId", itemId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, newListId) => {
    e.preventDefault();

    const sourceListId = e.dataTransfer.getData("listId");
    const sourceItemId = e.dataTransfer.getData("itemId");

    // Check if the item is dropped in a different list
    if (newListId !== sourceListId) {
      setLists((prevLists) => {
        const movedItem = prevLists[sourceListId].find(
          (item) => item._id === sourceItemId
        );

        updateServer(newListId, sourceItemId);

        const newLists = {
          ...prevLists,
          [sourceListId]: prevLists[sourceListId].filter(
            (item) => item._id !== sourceItemId
          ),
          [newListId]: [...prevLists[newListId], movedItem],
        };

        return newLists;
      });
    }
  };

  const updateServer = async (newListId, movedItemId) => {
    console.log(newListId, movedItemId);
    try {
      const response = await axios.put(
        `http://localhost:5001/tasks/${movedItemId}`,
        { status: newListId }
      );

      if (response.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      console.error("Error in updating", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while updating the task.",
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(lists).map(([listId, listItems]) => (
        <div
          key={listId}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, listId)}
          className="border border-gray-300 p-4 m-4 min-w-200 rounded"
        >
          <h3 className="text-lg font-semibold flex justify-center">
            {listId}
          </h3>
          {listItems.map((item) => (
            <div
              key={item._id}
              draggable
              onDragStart={(e) => handleDragStart(e, listId, item._id)}
              className="cursor-pointer border-2 rounded-lg shadow-md p-4 my-2 min-h-50 bg-blue-600 hover:bg-purple-600"
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Lists;
