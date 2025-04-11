import { CiLogin } from "react-icons/ci";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/LoginSignUp";
import Chat from "./pages/Chat/Chat";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Chat" element={<Chat />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;
