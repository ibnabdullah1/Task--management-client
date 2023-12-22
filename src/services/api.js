// Assuming you have endpoints for tasks in your backend API

const API_BASE_URL = "https://localhost:5000";

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  const tasks = await response.json();
  return tasks;
};

export const deleteTask = async (taskId) => {
  await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if needed, e.g., authentication token
    },
  });
};

export const updateTask = async (editedTask) => {
  await fetch(`${API_BASE_URL}/tasks/${editedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if needed, e.g., authentication token
    },
    body: JSON.stringify(editedTask),
  });
};
