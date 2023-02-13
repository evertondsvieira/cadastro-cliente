import { Routes, Route, Navigate } from "react-router-dom";
import Client from "../Pages/Client";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/client' element={<Client />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
}

export default RoutesMain;