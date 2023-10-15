import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffie from './components/AddCoffie.jsx';
import UpdateCoffie from './components/UpdateCoffie.jsx';
import SignUp from './SignUp/SignUp.jsx';
import SignIn from './SignUp/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch(' https://new-coffie-store-server-6dc0pkweh-jihad-hasans-projects.vercel.app/coffiee')
  },
  {
    path: '/addCoffie',
    element: <AddCoffie></AddCoffie>,
  },
  {
    path: '/updateCoffie/:id',
    element: <UpdateCoffie></UpdateCoffie>,
    loader: ({ params }) => fetch(` https://new-coffie-store-server-6dc0pkweh-jihad-hasans-projects.vercel.app/coffiee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch(' https://new-coffie-store-server-6dc0pkweh-jihad-hasans-projects.vercel.app/user')
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
