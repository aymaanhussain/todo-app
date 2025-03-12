import React from 'react'; // Import React library for building components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to create navigation links
import { Button, Typography, Box } from '@mui/material'; // Import Material UI components for layout and styling

export default function Home() {
  return (
    <Box sx={{
      display: 'flex', // Use flexbox to arrange child elements
      alignItems: 'center', // Vertically align items in the center
      justifyContent: 'center', // Horizontally center items
      minHeight: '100vh', // Ensures Box takes full viewport height
      backgroundColor: '#2b2b2b', // Background color for the To-Do list app
      width: '100%', // Ensure Box takes full width of the screen
      padding: 2, // Add padding inside the Box
      margin: 0, // Remove any default margin
    }}>
      <Box sx={{
        textAlign: 'center', // Center-align the text inside this Box
        color: '#ffffff', // White text color for contrast on dark background
        maxWidth: 600, // Restrict the content width for readability
        width: '100%', // Ensure full width within the maxWidth constraint
      }}>
        <Typography variant="h2" gutterBottom sx={{ color: '#90caf9' }}>
          Welcome to the Todo App
        </Typography>
        <Typography variant="h6" sx={{ color: '#b0bec5', marginBottom: 3 }}>
          Organize your tasks with ease
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          {/* First Button (Login) */}
          <Button
            component={Link} // Use Link component to navigate to the /login route
            to="/login"
            variant="contained" // Style the button with contained variant
            sx={{
              padding: '12px 24px', // Add padding to the button
              backgroundColor: '#1e88e5', // Bright blue color for the button
              '&:hover': { // Change button color on hover
                backgroundColor: '#1565c0', // Darker blue on hover
              },
            }}
          >
            Login
          </Button>
          
          {/* Second Button (Signup) */}
          <Button
            component={Link} // Use Link component to navigate to the /signup route
            to="/signup"
            variant="contained" // Style the button with contained variant
            sx={{
              padding: '12px 24px', // Add padding to the button
              backgroundColor: '#1e88e5', // Bright blue color for the button
              '&:hover': { // Change button color on hover
                backgroundColor: '#1565c0', // Darker blue on hover
              },
            }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
