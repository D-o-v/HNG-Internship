import {useState} from "react"
import { Route,BrowserRouter,Routes,Navigate} from "react-router-dom"
import Login from "./components/Login"
import ImageGrid from "./components/Gallery"
import "./styles/customeStyles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [isIn,setIsIn] = useState(false)
  return (
    
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login isIn={isIn} setIsIn={setIsIn} />}/>
      <Route path="/my-gallery" element={isIn?<ImageGrid isIn={isIn} setIsIn={setIsIn}/>:<Navigate to="/"/>}/>
    </Routes>
  
    </BrowserRouter>
  )
}
