import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { UsersPage } from "../pages/Users";
import { UserDetailsPage } from "../pages/UserDetails";
import { UnknownPage } from "../pages/Unknown";

export const Navbar = () => (
  <BrowserRouter>
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/users">Users</a>
      <a href="/userdetails/1">UserDetails</a>
    </div>
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="/users" element={<UsersPage />}></Route>
      <Route path="/userdetails/:userid" element={<UserDetailsPage />}></Route>
      <Route path="*" element={<UnknownPage />}></Route>
    </Routes>
  </BrowserRouter>
);