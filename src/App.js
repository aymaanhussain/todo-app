import React from 'react'; // Import React library for building components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router for routing between pages
import { Container, Box } from '@mui/material'; // Import MUI components for layout and styling
import { TaskProvider } from './TaskContext'; // Import TaskProvider for managing task-related state
import Home from './components/Home'; // Import Home component (landing page)
import Login from './components/Login'; // Import Login component for user login
import Signup from './components/Signup'; // Import Signup component for user registration
import Todolist from './components/Todolist'; // Import Todolist component for managing to-do tasks

function App() {
  return (
    <TaskProvider>  {/* Wrap the entire app in TaskProvider to provide task-related state to components */}
      <Router>  {/* Use Router to handle navigation between pages */}
        <Box
          sx={{
            minHeight: '100vh', // Ensure the Box takes the full height of the viewport
            backgroundColor: '#2b2b2b', // Set a dark background color for the page
            display: 'flex', // Use flexbox to lay out child elements
            flexDirection: 'column', // Stack child elements vertically
          }}
        >
          <Container
            maxWidth="sm"  // Set maximum width for the container to be 'sm' (small)
            sx={{
              flexGrow: 1, // Allow the container to grow and take the available space
              padding: 0, // Remove default padding from the container
            }}
          >
            <Routes>  {/* Define routing paths and their corresponding components */}
              <Route path="/" element={<Home />} />  {/* Home route */}
              <Route path="/login" element={<Login />} />  {/* Login route */}
              <Route path="/signup" element={<Signup />} />  {/* Signup route */}
              <Route path="/todolist" element={<Todolist />} />  {/* To-do list route */}
            </Routes>
          </Container>
        </Box>
      </Router>
    </TaskProvider>
  );
}

export default App;  // Export App component as the default export
