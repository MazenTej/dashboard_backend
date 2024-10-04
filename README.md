# Dashboard Analytics

## Overview
This **Dashboard Analytics** project is a full-stack web application designed to display various traffic metrics such as organic traffic, global traffic, and device types for a specified period. The app features user authentication, dynamic chart generation, and the ability to export data as Excel sheets. It is built using **React** for the frontend and **Node.js** for the backend, with data stored in **MongoDB**. The dashboard fetches traffic data through the **Google Analytics API**.

## Key Features

- **User Authentication**: Secure login and registration system using **JWT** and **bcryptjs** for password hashing.
- **Date Range Picker**: Select a specific date range for the traffic data.
- **Dynamic Charts**: View charts that show organic traffic, global traffic, and device types based on the selected date range.
  - **Chart Dimensions**: Charts can be viewed by day, month, or year.
- **Data Export**: Export data as an Excel file for offline analysis.
- **Responsive UI**: Built with **React Bootstrap** for a modern, responsive design.
- **Logout and Avatar**: A user-friendly avatar and logout feature for secure session management.

## Technologies Used

### Backend

- **Node.js**: Server-side framework to set up the backend.
- **MongoDB**: NoSQL database for user and application data.
- **Postman**: Used for testing API routes.

#### NPM Packages
- **express**: Manages routing and request handling.
- **mongoose**: Interacts with the MongoDB database.
- **validator**: Input validation for registration and login forms.
- **jsonwebtoken (JWT)**: Manages authorization with JSON Web Tokens.
- **passport & passport-jwt**: Authentication middleware with JWT strategy.
- **bcryptjs**: Hashes passwords for secure storage.
- **concurrently**: Allows the backend and frontend to run simultaneously on different ports.

### Frontend

- **React**: JavaScript library for building the user interface.
- **Redux**: State management for handling application state across components.
- **axios**: HTTP client for making API requests to the backend.

#### Frontend Libraries and NPM Packages
- **classnames**: Dynamically apply CSS classes in JSX.
- **react-redux**: Connects React components to the Redux store.
- **react-router-dom**: Handles client-side routing.
- **redux-thunk**: Middleware for asynchronous Redux actions.
- **react-bootstrap / bootstrap / rsuite**: UI components and styles.
- **date-fns / react-date-range**: Provides date range picking functionalities.
- **react-data-export / xlsx / file-saver**: Enables data export to Excel files.
- **react-use-analytics-api**: Used to fetch data from the Google Analytics API.
- **react-use-animations**: Animations for the loading states.
- **react-avatar**: Avatar component for user profiles.

## How to Run the App

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/dashboard-analytics.git
