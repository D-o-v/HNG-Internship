import { useState, useEffect } from "react";
import Homepage from "./pages/homepage";
import SingleMoviePage from "./pages/singleMoviePage";
import NotFound from "./pages/NotFound";
import "./styles/customStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Movie } from './types/types';
import axios from 'axios';
import { token } from './data/data';
import LoadingOverlay from 'react-loading-overlay-ts';
import { Spinner } from "react-bootstrap";

export default function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [selectedMovie, setSelected] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true); 
  const [movieClicked,setMovieClicked]= useState<boolean>(false)

  const getMovielist = async () => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      if (response.status === 200) {
        setMovieList(response?.data?.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovielist();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={loading ? 
            <LoadingOverlay active={loading} spinner>
              <div className="mx-auto w-100 align-items-center justify-content-center d-flex" style={{height:"100vh"}}>
                <Spinner animation="grow" />
              </div>
            </LoadingOverlay> 
            : <Homepage movieList={movieList} setSelected={setSelected} setMovieClicked={setMovieClicked} />} />
        <Route
          path="/movies"
          element={
            movieClicked ? (
              <Navigate to="/movies/:id" replace />
            ) : (
              <Navigate to="home" />
            )
          }
        />
        <Route path="/movies/:id" element={loading ?
            <LoadingOverlay active={loading} spinner>
            <div className="mx-auto w-100 align-items-center justify-content-center d-flex" style={{height:"100vh"}}>
              <Spinner animation="grow" />
            </div>
          </LoadingOverlay> 
           : <SingleMoviePage movieList={movieList} selectedMovie={selectedMovie} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
