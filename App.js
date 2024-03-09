import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery" ;
import Icons from "./pages/Icons" ;
import Single from "./pages/Single";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import Test from "./pages/Test" ;
import {Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div>
  
        <Routes>
        {user && <Route path="/" exact element={<Home />} />}
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/icons" element={<Icons/>}/>
          <Route path="/single" element={<Single/>}/>
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
			    <Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/test" element={<Test/>}/>
        </Routes>
   
      
  </div>
  );
}

export default App;
