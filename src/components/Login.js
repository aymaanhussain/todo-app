import React, { useState } from 'react'; // Import React and useState hook for managing state
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material'; // Import Material UI components for layout and styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigating to different routes

export default function Login() {
  // State to store email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // useNavigate hook to programmatically navigate to other routes
  const navigate = useNavigate();

  // Handle login logic (simulating successful login and redirecting to the To-Do list page)
  const handleLogin = () => {
    // Simulate successful login by navigating to the /todolist route
    navigate('/todolist');
  };

  return (
    <Box sx={{
      display: 'flex', // Use flexbox layout to center the content
      alignItems: 'center', // Vertically center the content
      justifyContent: 'center', // Horizontally center the content
      minHeight: '100vh', // Ensure Box takes full height of the viewport
      backgroundColor: '#2b2b2b', // Set background color to a dark shade
      width: '100%', // Ensure Box takes full width of the screen
      padding: 2, // Add padding inside the Box
      margin: 0, // Remove any default margin
    }}>
      {/* Container to restrict the width of the content */}
      <Container maxWidth="sm">
        {/* Paper component to give a card-like background with elevation */}
        <Paper elevation={5} sx={{
          padding: 4, // Add padding inside the Paper
          backgroundColor: '#1e1e1e', // Dark background for the Paper
          borderRadius: 3, // Rounded corners for the Paper
        }}>
          {/* Typography to display the Login title */}
          <Typography variant="h4" gutterBottom sx={{ color: '#90caf9', textAlign: 'center' }}>
            Login
          </Typography>

          {/* Email input field */}
          <TextField
            label="Email" // Label for the input
            variant="outlined" // Outlined style for the text field
            fullWidth // Make the text field full width
            margin="normal" // Add space around the text field
            value={email} // Bind email state value to the input
            onChange={(e) => setEmail(e.target.value)} // Update email state when input changes
            sx={{
              input: { color: '#fff' }, // Set text color to white
              '& .MuiInputLabel-root': { color: '#90caf9' }, // Set label color to light blue
            }}
          />
          {/* Password input field */}
          <TextField
            label="Password" // Label for the input
            type="password" // Make input type password (masked characters)
            variant="outlined" // Outlined style for the text field
            fullWidth // Make the text field full width
            margin="normal" // Add space around the text field
            value={password} // Bind password state value to the input
            onChange={(e) => setPassword(e.target.value)} // Update password state when input changes
            sx={{
              input: { color: '#fff' }, // Set text color to white
              '& .MuiInputLabel-root': { color: '#90caf9' }, // Set label color to light blue
            }}
          />
          {/* Submit button */}
          <Button
            variant="contained" // Contained style for the button
            fullWidth // Make the button full width
            sx={{
              marginTop: 2, // Add margin above the button
              padding: '12px', // Add padding inside the button
              backgroundColor: '#1e88e5', // Set button color to blue
              '&:hover': {
                backgroundColor: '#1565c0', // Darker blue when hovered
              },
            }}
            onClick={handleLogin} // Call handleLogin function on button click
          >
            Submit
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
