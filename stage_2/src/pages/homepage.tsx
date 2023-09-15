
import { Movie } from "../types/types"
import LandinPage from "./LandingPage"
import FeaturedMoviePage from "./featuredMoviePage"
interface HomepageProps {
  movieList: Movie[]; 
  setSelected: React.Dispatch<React.SetStateAction<Movie | null>>
  setMovieClicked: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Homepage({movieList,setSelected,setMovieClicked}: HomepageProps) {
  return (
   <div className="h-100">
   <LandinPage movieList={movieList} setSelected={setSelected}/>
   <FeaturedMoviePage movieList={movieList} setSelected={setSelected} setMovieClicked={setMovieClicked}/>
   </div>
  )
}
