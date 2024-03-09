import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignLogin from './pages/SignLogin'
import ViewCreate from './pages/ViewCreate.jsx';
import Create from './pages/Create.jsx';
import CreateProfile from './pages/CreateProfile.jsx'
import Error from './pages/Error.jsx'
import Feeder from './pages/Feeder.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Homepage from './pages/Homepage.jsx';



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
        path: '/SignLogin',
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
        path: '/Feeder',
        element: <Feeder />,
      },
      {
        path: '/Create',
        element: <Create />,
      },
      {
        path: '/CreateProfile',
        element: <CreateProfile />,
      },
      {
        path: '/LoginPage',
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

