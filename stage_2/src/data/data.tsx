import spidermanThumbnail from "../assets/images/spiderman.png"; 
import strangerthingsThumbnail from "../assets/images/postermo.png"; 
import Facebook from "../assets/icons/fa-brands_facebook-square.png"
import Instagram  from "../assets/icons/fa-brands_instagram.png";
import Twitter  from "../assets/icons/fa-brands_twitter.png";
import Youtube  from "../assets/icons/fa-brands_youtube.png";
import HomeIcon from "../assets/images/Home.png"
import ProjectorIcon from  "../assets/images/Movie Projector (1).png"
import TvSeriesIcon from "../assets/images/TV Show (1).png"
import UpcomingsIcon from "../assets/images/Calendar.png"

export const response = [
    {title:"SpiderMan1",year:"2021",country:"USA",thumbmail:spidermanThumbnail,rating:"75.3",category:["Action,Adventure,Comedy"]},
    {title:"Stranger Things",year:"2021",country:"USA",thumbmail:strangerthingsThumbnail,rating:"90.3",category:["Action,Adventure,Comedy"]},
    {title:"SpiderMan",year:"2021",country:"USA",thumbmail:spidermanThumbnail,rating:"75.3",category:["Action,Adventure,Comedy"]},
    {title:"Stranger Things",year:"2021",country:"USA",thumbmail:strangerthingsThumbnail,rating:"90.3",category:["Action,Adventure,Comedy"]},
    {title:"SpiderMan",year:"2021",country:"USA",thumbmail:spidermanThumbnail,rating:"75.3",category:["Action,Adventure,Comedy"]},
    {title:"Stranger Things",year:"2021",country:"USA",thumbmail:strangerthingsThumbnail,rating:"90.3",category:["Action,Adventure,Comedy"]},
    {title:"SpiderMan",year:"2021",country:"USA",thumbmail:spidermanThumbnail,rating:"75.3",category:["Action,Adventure,Comedy"]},
    {title:"Stranger Things",year:"2021",country:"USA",thumbmail:strangerthingsThumbnail,rating:"90.3",category:["Action,Adventure,Comedy"]},
    {title:"Stranger Things",year:"2021",country:"USA",thumbmail:strangerthingsThumbnail,rating:"90.3",category:["Action,Adventure,Comedy"]},
    {title:"Stranger Things",year:"2021",country:"USA",thumbmail:strangerthingsThumbnail,rating:"90.3",category:["Action,Adventure,Comedy"]},
]
export const socialMedia = [
    {name:"facebook",icon:Facebook},
    {name:"instagram",icon:Instagram},
    {name:"twitter",icon:Twitter},
    {name:"youtube",icon:Youtube},
]
export const sideMenu = [
    {name:"Home",icon:HomeIcon,href:"/home",current:false},
    {name:"Movie",icon:ProjectorIcon,href:"/movies",current:true},
    {name:"Tv Series",icon:TvSeriesIcon,href:"/tv-series",current:false},
    {name:"Upcomings",icon:UpcomingsIcon,href:"/upcomings",current:false}
]
export const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTdjOTBlN2YzZDg1YTY3ZTcyMjVjYjQxM2QxZWJiYyIsInN1YiI6IjY1MDJhZDYzNTU0NWNhMDBjNGRiZGY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56sVnpRe_vJjFj3U557bp93XcTIjwp01KIOfZf7LhS8"