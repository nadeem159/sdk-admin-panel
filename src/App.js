import { BrowserRouter,Route, Routes } from "react-router-dom";
import PrivateRoute from "./app/PrivateRoute.jsx";
import Login from "./app/component/login/Login";
import AboutUs from "./app/component/aboutus/AboutUs";
import Home from "./app/component/Home/Home.jsx";


function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/" element={<Home /> } />
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
