
import { Movie } from "../types/types"
import LandinPage from "./LandingPage"
import FeaturedMoviePage from "./featuredMoviePage"
interface HomepageProps {
  movieList: Movie[]; 
}
export default function Homepage({movieList}: HomepageProps) {
  return (
   <div className="h-100">
   <LandinPage/>
   <FeaturedMoviePage movieList={movieList}/>
   </div>
  )
}
