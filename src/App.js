import "./App.css";
import Home from "./Screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import Cart from "./Components/Cart";
import { MyProvider } from "./Components/ReduxApi";

function App() {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
