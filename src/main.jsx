import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main/Main';
import Home from './components/Home/Home/Home';
import Products from './components/Home/Products/Products';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/products",
        element:<Products></Products>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/products/:id',
        element:<ProductsDetails></ProductsDetails>,
        loader:({params}) => fetch(`https://cozy-home-server.vercel.app/products/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
<React.StrictMode>
<AuthProvider>
<QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
   
   </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>
 
  
)
