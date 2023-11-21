import './App.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Products} from './Pages/Products/Products.jsx'
import {Cart} from './Pages/Cart/Cart.jsx'
import { ProductContextProvider } from './Context/Product-Context.jsx'


function App() {

  const router = createBrowserRouter([
    {
      path: "/products",
      element: <Products/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    }
    ]
  )

  return (
    <>
      <div>
      <ProductContextProvider>
        <RouterProvider router={router} />
        </ProductContextProvider>
      </div>
    </>
    
  )
}

export default App;
