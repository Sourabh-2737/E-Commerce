import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { ToastContainer } from "react-toastify";

function App() {
  const hasCodeRun = JSON.parse(localStorage.getItem(`hasCodeRun`))
  if(!hasCodeRun){
    localStorage.setItem('limit', '0')
    localStorage.setItem('hasCodeRun', 'true')
  }
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
