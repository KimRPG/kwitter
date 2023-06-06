import React, { useState } from "react";
import AppRouter from "./Router.js";
import authService from "../fbase.js"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <header> hi </header>
    <AppRouter isLoggedIn = {isLoggedIn}></AppRouter>
    <footer>&copy; </footer>
    </>
  );
}

export default App;
