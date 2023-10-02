import { Route,Routes,BrowserRouter,Navigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing-page" replace/>}/>
        <Route path="/landing-page" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
