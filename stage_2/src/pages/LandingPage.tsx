import Logo from "../assets/icons/tv.png"
import SearchIcon from "../assets/images/Search.png"
import Menu from "../assets/images/Menu.png"
import WatchIcon from "../assets/images/Icon.png"
import IMDB from "../assets/images/ratin.png"
import Berry from "../assets/images/Berry.png"
import { Movie } from "../types/types"
import Blank from "../assets/images/Blank.png"
import {useNavigate} from "react-router-dom"

interface LandingPageProps {
  movieList: Movie[]; 
  setSelected: React.Dispatch<React.SetStateAction<Movie | null>>
}
export default function LandingPage({movieList,setSelected}:LandingPageProps) {
  const navigate = useNavigate()
  const handleClick=(data:any)=>{
    setSelected(data)
    navigate(`/movies/${data.id}`)
}
    return (
    <div data-testid="movie-poster" className=' container-fluid hompageContainer bg-center d-flex flex-column py-4 px-5'  style={{ 
      backgroundImage: `url(${movieList.length > 0 ?`https://image.tmdb.org/t/p/w500${movieList[0].poster_path}` : Blank})`
    }}>
    <div className="headerContainer d-flex align-items-center justify-content-between col-12 ">
      <div className="d-flex justify-content-center align-items-center">
        <img src={Logo} alt="Tv-logo" />
        <p className="text text-white align-self-end px-3" ><strong>MovieBox</strong></p>
      </div>
        <div className="form-outline col-6 position-relative">
            <input 
            type="search"
            className="form-control search " 
            aria-label="Search"
            placeholder="What do you want to watch?" 
            style={{
                backgroundColor: "rgba(252, 253, 253, 0)",
                border: "2px solid #fff",
                color:"white"
            }}/>
            <img src={SearchIcon} alt="SearchIcon" style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer"
            }} />
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <p className="text text-white align-self-center px-3 mb-0" ><strong>Sign in</strong></p>
            <img src={Menu} alt="SignIn" className="mt-0" />
        </div>
    </div>
    <div className="col-4 mt-5 ">
      <p data-testid="movie-title" className="text-white col-10 mt-5" style={{fontSize:"3rem",fontWeight:"700"}}>{movieList[0].title}</p>
      <div className="d-flex flex-column lh-sm">
        <div className='d-flex justify-content-between align-items-center col-6'>
          <div className='d-flex justify-content-center align-items-center'>
                <img src={IMDB} alt="Imdb logo" style={{marginRight:"0.5rem"}}/>
                <p className='mb-0 text-white'>{movieList[0].vote_average}%</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={Berry} alt="Rotten tomatoe rating" style={{marginRight:"1rem"}}/>
                <p className='mb-0 text-white'>{movieList[0].vote_average}%</p>
            </div>
        </div>
        <p data-testid="movie-overview" className="text-white col-10">{movieList[0].overview}</p>
        </div>
        <button 
        className="btn btn-danger d-flex align-items-center justify-content-center mt-2"
        onClick={() => handleClick(movieList[0])} style={{ cursor: "pointer" }}>
          <img src={WatchIcon} alt="Watch Icon" />
          <p className="text text-white align-self-end px-3 m-0"><strong>WATCH TRAILER</strong></p>
        </button>
    </div>
</div>

    );
}

