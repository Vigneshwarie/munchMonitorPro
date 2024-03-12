import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignLogin from './pages/SignLogin'
import ViewCreate from './pages/ViewCreate.jsx';
import Create from './pages/Create.jsx';
import Profile from './pages/Profile.jsx';
import Error from './pages/Error.jsx'
import Feeder from './pages/Feeder.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Homepage from './pages/Homepage.jsx';
import MyPets from './pages/MyPets.jsx';
import EditProfile from './pages/EditProfile.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignLogin />,
      },
      {
        path: '/homepage',
        element: <Homepage />,
      },
      {
        path: '/ViewCreate',
        element: <ViewCreate />,
      },
      {
        path: '/feedMe/:id',
        element: <Feeder />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/LoginPage',
        element: <LoginPage />,
      },
      {
        path: '/myPets',
        element: <MyPets />,
      },
      {
        path: '/editPet/:id',
        element: <EditProfile />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

