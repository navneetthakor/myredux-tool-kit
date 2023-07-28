
import './App.css';
import Product from './componetn/Product';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Cart from './componetn/Cart';
import Dashbord from './componetn/Dashbord';
import RootLayout from './componetn/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route exect path="/" element={<RootLayout/>}>
      <Route exect path='/' element={<Product/>}/>
      <Route exect path= "/dashbord" element={<Dashbord/>}/>
      <Route exect path= "/cart" element={<Cart/>}/>

    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
