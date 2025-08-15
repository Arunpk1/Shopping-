import Applayout from './Applayout.jsx';
import Cartitems from './Cart-items.jsx'
import { lazy, Suspense } from 'react';

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Resdetails from './Resdetails.jsx';

import CartView from './CartView.jsx';
 
const About = lazy(() => import("./About.jsx"));


const approuter=createBrowserRouter([
  {
    path:"",
  element:<Applayout/>,
  children:[{path:"",
    element:<Cartitems/>
  },{
    path:"/about",
    element:<Suspense fallback={<h1>loading...</h1>}><About/></Suspense>}
,{
    path:"/Cart",
    element:<Suspense fallback={<h1>loading...</h1>}><CartView/></Suspense>},

{
  path:"/restuarants/:id",
  element:<Resdetails/>
}]

  }
])

export default function App(){

    return(
        <RouterProvider router={approuter}></RouterProvider>
      
      
    

    )
}