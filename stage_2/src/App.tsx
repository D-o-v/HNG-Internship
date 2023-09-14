import {useState,useEffect} from "react"
import Homepage from "./pages/homepage"
import SingleMoviePage from "./pages/singleMoviePage";
import NotFound from "./pages/NotFound";
import "./styles/customStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { Movie } from './types/types';
import axios from 'axios';
import { token } from './data/data';


export default function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
    const getMovielist = async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
        });
        console.log(response.data);
        if(response.status===200){
            setMovieList(response?.data?.results)
        }
    } catch (error) {
        console.error(error);
    }
    };
    useEffect(()=>{
      getMovielist()
  },[])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace/>}/>
      <Route path="/home" element={<Homepage movieList={movieList}/>}/>
      <Route path="/movies" element={<Navigate to="/movies/:id" replace/>}/>
      <Route path="/movies/:id" element={<SingleMoviePage movieList={movieList} />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}
