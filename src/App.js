
import React from "react";
import './App.css';
import {BrowserRouter  ,Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ShopContextProvider from "./Context/shop-context";

    const App = () => {
      return (
        <ShopContextProvider>
        <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navbar />}>
            <Route index element={<Shop/>} />
            <Route path="Cart" element={<Cart/>} />
           </Route>

        </Routes>
        </BrowserRouter>
        </ShopContextProvider>
          
      );
    }
  
      
  
  

export default App;
