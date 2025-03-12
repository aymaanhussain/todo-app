// Import React and necessary hooks from React
import React, { createContext, useState, useContext } from 'react';

// Create a Context for tasks to manage and share state across components
const TaskContext = createContext();

// Custom hook to provide a simple way to access TaskContext
export const useTasks = () => {
  return useContext(TaskContext); // Use the useContext hook to access TaskContext
};

// TaskProvider component which provides task-related data and functions to its children
export const TaskProvider = ({ children }) => {
  // useState hook to maintain the state for tasks (an array of tasks)
  const [tasks, setTasks] = useState([]); // Initial state is an empty array of tasks

  // Function to add a new task to the list
  const addTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the tasks array
  };

  // Function to delete a task by its index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Filter out the task at the given index
  };

  // Function to edit an existing task by its index and update it
  const editTask = (index, updatedTask) => {
    const newTasks = [...tasks]; // Create a copy of the tasks array
    newTasks[index] = updatedTask; // Update the task at the specified index
    setTasks(newTasks); // Set the new tasks array as the state
  };

  // TaskContext.Provider provides the task-related data and functions to child components
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children} {/* Render the child components that have access to the context */}
    </TaskContext.Provider>
  );
};
