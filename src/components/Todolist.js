import React, { useState } from 'react'; // Import React and useState hook for managing state
import { Container, TextField, Button, Typography, Paper, List, ListItem, ListItemText, IconButton, Box } from '@mui/material'; // Import Material UI components for layout and styling
import { CheckCircle, Edit, Delete } from '@mui/icons-material'; // Import Material UI icons for actions

export default function TodoList() {
  // State to store the list of tasks (each task has a 'text' and 'completed' status)
  const [tasks, setTasks] = useState([]);

  // State to store the input for adding a new task
  const [taskInput, setTaskInput] = useState('');

  // Function to add a new task to the list
  const addTask = () => {
    if (taskInput.trim() !== '') { // Check if the task input is not empty
      setTasks([...tasks, { text: taskInput, completed: false }]); // Add new task with text and set completed as false
      setTaskInput(''); // Reset the input field after adding the task
    }
  };

  // Function to delete a task by its index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Filter out the task by its index
  };

  // Function to edit a task's text by its index
  const editTask = (index) => {
    const newTask = prompt('Edit your task:', tasks[index].text); // Prompt the user to edit the task
    if (newTask) { // If the user enters a new task, update it
      const updatedTasks = [...tasks]; // Create a copy of the current tasks
      updatedTasks[index].text = newTask; // Update the task text
      setTasks(updatedTasks); // Update the state with the modified tasks
    }
  };

  // Function to toggle the completion status of a task
  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks]; // Create a copy of the current tasks
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle the completed status of the task
    setTasks(updatedTasks); // Update the state with the modified tasks
  };

  return (
    <Box sx={{
      position: 'absolute', // Set the position of the Box to absolute
      top: 0, // Position at the top of the page
      left: 0, // Position at the left of the page
      width: '100%', // Make the Box take the full width of the viewport
      minHeight: '100vh', // Ensure the Box takes the full height of the viewport
      backgroundColor: '#2b2b2b', // Set the background color to a dark shade
      display: 'flex', // Use flexbox for centering content
      alignItems: 'center', // Vertically center the content
      justifyContent: 'center', // Horizontally center the content
    }}>
      <Container maxWidth="sm"> {/* Container to set a max width for the form */}
        <Paper elevation={5} sx={{
          padding: 4, // Add padding inside the Paper
          backgroundColor: '#1e1e1e', // Set background color to dark shade for Paper
          borderRadius: 3, // Add rounded corners to the Paper
        }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#90caf9', textAlign: 'center' }}>
            Todo List
          </Typography>

          {/* Input field for adding a new task */}
          <TextField
            label="New Task" // Label for the input field
            variant="outlined" // Use outlined style for the TextField
            fullWidth // Make the TextField take the full width of the parent container
            margin="normal" // Add margin for spacing
            value={taskInput} // Bind the taskInput state to the TextField value
            onChange={(e) => setTaskInput(e.target.value)} // Update the taskInput state when the user types
            sx={{
              input: { color: '#fff' }, // Set the input text color to white
              '& .MuiInputLabel-root': { color: '#90caf9' }, // Set the label color to light blue
            }}
          />

          {/* Button to add the task */}
          <Button
            variant="contained" // Use contained style for the button
            fullWidth // Make the button take the full width of the parent container
            sx={{
              marginTop: 2, // Add margin above the button for spacing
              padding: '12px', // Add padding inside the button for better clickable area
              backgroundColor: '#1e88e5', // Set the button color to blue
            }}
            onClick={addTask} // Call the addTask function when the button is clicked
          >
            Add Task
          </Button>

          {/* List of tasks */}
          <List>
            {/* Filter and map through tasks that are not completed */}
            {tasks
              .filter((task) => !task.completed)
              .map((task, index) => (
                <ListItem key={index} sx={{ color: '#fff' }}>
                  <ListItemText primary={task.text} />
                  {/* Button to toggle the completion of the task */}
                  <IconButton onClick={() => toggleCompletion(index)} sx={{ color: '#4caf50' }}>
                    <CheckCircle />
                  </IconButton>
                  {/* Button to edit the task */}
                  <IconButton onClick={() => editTask(index)} sx={{ color: '#90caf9' }}>
                    <Edit />
                  </IconButton>
                  {/* Button to delete the task */}
                  <IconButton onClick={() => deleteTask(index)} sx={{ color: '#f44336' }}>
                    <Delete />
                  </IconButton>
                </ListItem>
              ))}

            {/* Display title for completed tasks */}
            <Typography variant="h6" sx={{ color: '#90caf9', marginTop: 3 }}>
              Completed Tasks
            </Typography>

            {/* Filter and map through tasks that are completed */}
            {tasks
              .filter((task) => task.completed)
              .map((task, index) => (
                <ListItem key={index} sx={{ color: '#757575' }}>
                  <CheckCircle sx={{ marginRight: 1, color: '#4caf50' }} />
                  {/* Display completed tasks with a strikethrough style */}
                  <ListItemText primary={<span style={{ textDecoration: 'line-through' }}>{task.text}</span>} />
                  {/* Button to delete the completed task */}
                  <IconButton onClick={() => deleteTask(index)} sx={{ color: '#f44336' }}>
                    <Delete />
                  </IconButton>
                </ListItem>
              ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
}
