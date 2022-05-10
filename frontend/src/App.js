import { BrowserRouter,Routes,Route } from "react-router-dom";
import Menu from "./components/Menu";
import ProductDetails from "./components/ProductDetails";
import ProductPage from "./components/ProductPage";
import Signin from "./components/Signin";
import Home from "./pages/Home";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<ProductPage/>}></Route>
          <Route path="/products/:slug" element={<ProductDetails/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
