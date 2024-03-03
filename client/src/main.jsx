import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Entry from './pages/Entry.jsx'
import SignLogin from './pages/SignLogin.jsx'
import ViewCreate from './pages/ViewCreate.jsx';
import View from './pages/View.jsx';
import Create from './pages/Create.jsx';
import SignUp from './pages/SignUp.jsx'
import Error from './pages/Error.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Entry />,
      },
      {
        path: '/SignLogin',
        element: <SignLogin />,
      },
      {
        path: '/ViewCreate',
        element: <ViewCreate />,
      },
      {
        path: '/View',
        element: <View />,
      },
      {
        path: '/Create',
        element: <Create />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

