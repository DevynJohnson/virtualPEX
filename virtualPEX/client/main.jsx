// client/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ErrorPage from './pages/Error.jsx';
import Food from './pages/Food.jsx';
import Clothing from './pages/Clothing.jsx';
import Household from './pages/Household.jsx';
import Animals from './pages/Animals.jsx';
import Colors from './pages/Colors.jsx';
import People from './pages/People.jsx';

// Define routes for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'food', element: <Food /> },
      { path: 'clothing', element: <Clothing /> },
      { path: 'household', element: <Household /> },
      { path: 'animals', element: <Animals />},
      { path: 'colors', element: <Colors />},
      { path: 'people', element: <People />}
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error('No root element found');
}
