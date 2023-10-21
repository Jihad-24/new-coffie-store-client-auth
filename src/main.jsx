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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffiee-store-api.vercel.app/coffiee')
  },
  {
    path: '/addCoffie',
    element: <AddCoffie></AddCoffie>,
  },
  {
    path: '/updateCoffie/:id',
    element: <UpdateCoffie></UpdateCoffie>,
    loader: ({ params }) => fetch(` https://coffiee-store-api.vercel.app/coffiee/${params.id}`)
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
    loader: () => fetch(' https://coffiee-store-api.vercel.app/user')
  },
  {
    path: '/users2',
    element: <Users2></Users2>,
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
