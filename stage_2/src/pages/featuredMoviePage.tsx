import {socialMedia} from '../data/data';
import FavouriteIcon from '../assets/images/Favorite.png';
import IMDB from "../assets/images/ratin.png"
import Berry from "../assets/images/Berry.png"
import {useNavigate} from "react-router-dom"
import { Movie } from '../types/types';

interface FeaturedMoviePageProps {
    movieList: Movie[]; // Ensure this matches the prop name
  }
const FeaturedMoviePage = ({ movieList}:FeaturedMoviePageProps) => {
  const navigate = useNavigate()

  const handleClick=(data:any)=>{
    console.log(data)
    navigate(`/movies/${data}`)
}


return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6">
                <h3 className="text-start mb-4">Featured Movie</h3>
            </div>
            <div className="col-lg-6 text-end">
                <p className="mb-4 featuredMovieText2">See More &gt;</p>
            </div>
        </div>
        <div className="row d-flex justify-content-between">
            {
            movieList.slice(0, 10).map((data:any) => (
                <div className="col-lg-2 mx-lg-1 px-lg-0 gap-auto col-md-4 col-sm-6 mb-2 d-flex justify-content-end ">
                    <div data-testid="movie-card" className="card border-0 col-12 m-0 p-0 w-100" onClick={() => handleClick(data.id)} style={{ cursor: "pointer" }}>
                        <img data-testid="movie-poster" src={
                                `https://image.tmdb.org/t/p/w500${data.poster_path}`
                            }
                            alt={
                                `${
                                    data.title
                                } image`
                            }/>
                        <div className="cardBackground">
                            <div className="heart-div p-2">
                                <img src={FavouriteIcon}
                                    alt="Heart-Icon"
                                    className="heart"/>
                            </div>
                            <div className="tv-text p-0">
                                <p className='px-2 py-0 mb-0'>
                                    {/* <strong>TV SERIES</strong> */}
                                </p>
                            </div>

                        </div>
                        <div className="card-body px-1 ">
                            <p data-testid="movie-release-date" className="text fw-bold" style={{fontSize:"11px"}}>
                                {
                                    // `
                                    // ${
                                    //     data.country
                                    // },
                                    // ${
                                    //     data.release_date
                                    // // }-Current`
                                    // }`
                                    data.release_date
                                }
                            </p>
                            <h5 data-testid="movie-title" style={{fontSize:"14px", marginTop:"-0.5rem"}}>
                                {
                                data.title
                            }</h5>
                            <div className='d-flex justify-content-between align-items-center '>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src={IMDB} alt="Imdb logo" style={{marginRight:"0.5rem"}}/>
                                    <p className='mb-0' style={{fontSize:"12px"}}>{data.vote_average}/100</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src={Berry} alt="Rotten tomatoe rating" style={{marginRight:"0.2rem"}}/>
                                    <p className='mb-0' style={{fontSize:"12px"}}>{data.vote_average}%</p>
                                </div>
                            </div>
                            {/* {data.genre_ids.map((genre)=><p className="text fw-bold mt-2" style={{fontSize:"10px"}}>{genre}</p>)} */}
                        </div>
                    </div>
                </div>
            ))
        } 
        </div>
        <div className='py-5'>
        <div className='d-flex gap-5 col-lg-3 col-md-4 col-sm-6 align-items-center justify-content-center mx-auto'>
          {socialMedia.map((item) => (
              <img src={item.icon} alt={`${item.name} icon`} />
          ))}
        </div>
          <div className='d-flex gap-5 col-lg-6 col-sm-12 align-items-center justify-content-center mt-2 fw-bold mx-auto'>
            <p>Condition of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
          </div>
          <p className='text d-flex gap-5 col-lg-6 col-sm-12 align-items-center justify-content-center mt-3 fw-bold mx-auto'>&copy; 2023 MovieBox By Odunayo Dauda</p>
        </div>
    </div>
);    
}
export default FeaturedMoviePage;
