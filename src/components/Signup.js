import React, { useState } from 'react'; // Import React and the useState hook for managing state
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material'; // Import Material UI components for layout and styling

export default function SignUp() {
  // State variables to store the email and password values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle sign-up logic (simulating successful sign-up and showing an alert)
  const handleSignUp = () => {
    // Simulate a successful sign-up by showing an alert
    alert('Sign Up Successful');
  };

  return (
    <Box sx={{
      display: 'flex', // Use flexbox to center the content horizontally and vertically
      alignItems: 'center', // Vertically center the content
      justifyContent: 'center', // Horizontally center the content
      minHeight: '100vh', // Ensure the Box takes the full height of the viewport
      backgroundColor: '#2b2b2b', // Set the background color to a dark shade
      width: '100%', // Ensure the Box takes the full width of the screen
      padding: 2, // Add padding inside the Box
      margin: 0, // Remove default margin
    }}>
      {/* Container component to restrict the width of the content */}
      <Container maxWidth="sm">
        {/* Paper component to give the form a card-like background with elevation */}
        <Paper elevation={5} sx={{
          padding: 4, // Add padding inside the Paper
          backgroundColor: '#1e1e1e', // Set background color to dark shade for Paper
          borderRadius: 3, // Add rounded corners to the Paper
        }}>
          {/* Typography component to display the 'Sign Up' title */}
          <Typography variant="h4" gutterBottom sx={{ color: '#90caf9', textAlign: 'center' }}>
            Sign Up
          </Typography>

          {/* Email input field */}
          <TextField
            label="Email" // Label for the input field
            variant="outlined" // Use outlined style for the TextField
            fullWidth // Make the TextField take the full width of the parent container
            margin="normal" // Add margin to the input field for spacing
            value={email} // Bind the email state to the input field value
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            sx={{
              input: { color: '#fff' }, // Set input text color to white
              '& .MuiInputLabel-root': { color: '#90caf9' }, // Set label color to light blue
            }}
          />
          
          {/* Password input field */}
          <TextField
            label="Password" // Label for the password input field
            type="password" // Set input type to 'password' (characters will be hidden)
            variant="outlined" // Use outlined style for the TextField
            fullWidth // Make the TextField take the full width of the parent container
            margin="normal" // Add margin to the input field for spacing
            value={password} // Bind the password state to the input field value
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            sx={{
              input: { color: '#fff' }, // Set input text color to white
              '& .MuiInputLabel-root': { color: '#90caf9' }, // Set label color to light blue
            }}
          />
          
          {/* Sign Up button */}
          <Button
            variant="contained" // Use contained style for the button
            fullWidth // Make the button take the full width of the parent container
            sx={{
              marginTop: 2, // Add margin above the button for spacing
              padding: '12px', // Add padding inside the button for larger clickable area
              backgroundColor: '#1e88e5', // Set button background color to blue
              '&:hover': {
                backgroundColor: '#1565c0', // Darker blue when hovered
              },
            }}
            onClick={handleSignUp} // Trigger the handleSignUp function when the button is clicked
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
