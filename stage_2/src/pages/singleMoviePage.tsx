import { useState,useEffect } from "react";
import {sideMenu} from "../data/data"
import Logo from "../assets/icons/tv.png"
import LogoutIcon from "../assets/images/Logout (1).png"
import {NavLink} from 'react-router-dom';
import TicketIcon from "../assets/icons/Two Tickets.png"
import ListIcon from "../assets/images/List.png"
import ImageLast from "../assets/icons/Rectangle 37.png"
import StarIcon from "../assets/icons/Star.png"
import ShareIcon from "../assets/icons/Share.png"
import BookMarkIcon from "../assets/icons/Bookmark (1).png"
import HeartIcon from "../assets/icons/Heart.png"
import { Movie } from "../types/types";
import axios from 'axios';
import { token } from '../data/data';
import YouTube from "react-youtube";

interface SingleMoviePageProps {
    movieList: Movie[];
    selectedMovie: Movie | null; // Define the selected movie
  }
export default function SingleMoviePage({movieList,selectedMovie} : SingleMoviePageProps) {

        const videoOpts = {
          width: '100%',
          height: '315',
        }
    const movies = checkMovie(selectedMovie, movieList);
    const  [singleId,setSingleId] = useState<{ key: string }[]>([])
    const  [singleRunTime,setSingleRunTime] = useState<string>("")
    const [likes,setLikes] =useState<number>(movies[0]?.vote_count)
    const [isNotLiked,setIsNotLiked] =useState(false)

    function checkMovie(selectedMovie: Movie | null, movieList: Movie[]) {
      if (selectedMovie !== null && movieList.length > 0) {
        return movieList.filter((item) => item.id === selectedMovie.id);
      }
      return [];
    }
    const getMovieTrailer = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movies[0].id}/videos`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
            });
            if(response.status===200){
                setSingleId(findOfficialTrailer(response?.data?.results))
            }
        } catch (error) {
            console.error(error);
        }
    };
    const getMovieRunTime = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movies[0].id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
            });
            if(response.status===200){
                setSingleRunTime(formatRuntime(parseFloat(response?.data.runtime)))
            }
        } catch (error) {
            console.error(error);
        }
    };
    function formatRuntime(runtime:number) {
        if (isNaN(runtime) || runtime <= 0) {
          return 'Invalid runtime';
        }
      
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
      
        let formattedTime = '';
      
        if (hours > 0) {
          formattedTime += `${hours}h `;
        }
      
        if (minutes > 0) {
          formattedTime += `${minutes}m`;
        }
      
        return formattedTime.trim();
    }
    function findOfficialTrailer(trailer:[]) {
        const officialTrailers = trailer.filter((item:any) => item.type === "Trailer");
        return officialTrailers;
      }
    function handleLike(){
        if(!isNotLiked){
            setLikes((preValue)=>preValue + 1)
        }else{
            setLikes((preValue)=>preValue - 1)
        }
        setIsNotLiked(!isNotLiked)
    }
      
    useEffect(()=>{
        getMovieTrailer()
        getMovieRunTime()
    },[])    
    return (
    <div className="row singleMovieContainer"> 
    {/* side bar */}
        <div className="left-side col-lg-2 col-sm-4 col-xs-12 border border-1 px-0">
            <NavLink to="/home" className=" col-12 d-flex justify-content-between align-items-center px-4 mt-2 py-2"
                style={
                    {
                        textDecoration: "none",
                        color: "black"
                    }
            }>
                <img src={Logo}
                    alt="Tv-logo"/>
                <p className="fw-bold my-0">MovieBox</p>
            </NavLink>
            <div className="col-12 h-60"> {
                sideMenu.map((item) => (<NavLink to={
                        `${item.href!=="/movies"?item.href:`${item.href}/${movies[0]?.id}`}`
                    }
                    className="sidemenu d-flex align-items-center justify-content-baseline my-1 px-4"
                    style={
                        {textDecoration: "none"}
                }>
                    <img src={
                            item.icon
                        }
                        alt={
                            `${
                                item.name
                            } icon `
                        }
                        className=""/>
                    <span className="fw-bold m-3"> {
                        item.name
                    }</span>
                </NavLink>))
            } </div>
            <div className="col-10 my-3 mx-auto rounded-4 d-flex flex-column align-items-center justify-content-center m-auto p-2"
                style={
                    {
                        fontSize: "12px",
                        backgroundColor: "rgba(190, 18, 60, 0.1)",
                        border: "1px solid rgba(190, 18, 60, 1)"
                    }
            }>
                <p className=" fw-bold mt-4">Play movie quizes and earn free tickets</p>
                <p className="">50k people are playing now</p>
                <button className="rounded-pill border-0 px-3 py-1"
                    style={
                        {
                            color: "rgba(190, 18, 60, 1)",
                            backgroundColor: "rgba(190, 18, 60, 0.2)"
                        }
                    }
                    disabled>
                    Start Playing
                </button>
            </div>
            <div className="col-12 sidemenu d-flex align-items-center justify-content-baseline my-2 px-4">
                <img src={LogoutIcon}
                    alt="Logout icon"/>
                <span className="fw-bold m-2" >Log Out</span>
            </div>
        </div>
        {/* main body */}
        <div className=" right-side col-lg-10 col-sm-8 col-xs-12 overflow-y-auto  px-4">
            <div className="col-12 my-3 rounded-4" >
                <YouTube 
                videoId={singleId[0]?.key}
                opts={videoOpts}
                />
                </div>
            <div className="d-flex col-12">
                <div className="col-7">
                    <div className="d-flex align-items-center py-4 px-4">
                        <p className="p-0 m-0 fw-bold" data-testid="movie-title">{movies[0]?.title}</p>
                        <p className="p-0 m-0 fw-bold" data-testid="movie-release-date"> • {movies[0]?.release_date} </p>
                        <p className="p-0 m-0 fw-bold" data-testid="movie-runtime">• {singleRunTime}</p>
                        <div className="rounded-pill border border-danger mx-2 px-2 py-0 ">
                            <p className="p-0 m-0">Action</p>
                        </div>
                    </div>
                    <p className="col-12 px-4" data-testid="movie-overview">{movies[0]?.overview}</p>
                    <div className="">
                        <p className="col-12 px-4 py-2 my-0 border border-light border-1">Director : Joseph Kosinski</p>
                        <p className="col-12 px-4 py-2 my-0 border border-light border-1">Writers : Jim Cash, Jack Epps Jr, Peter Craig</p>
                        <p className="col-12 px-4 py-2 my-0 border border-light border-1">Stars: Tom Cruise, Jennifer Connelly, Miles Teller</p>
                    </div>
                    <div className="d-flex rounded-2 px-0 py-0 my-3"
                        style={
                            {
                                border: "1px solid rgba(199, 199, 199, 1)",
                                marginLeft: "2rem"
                            }
                    }>
                        <button className="btn btn-danger ">Top rated movie #65</button>
                        <div className="d-flex align-items-center justify-content-between px-4">
                            <p className="m-0 p-0 fw-bold">Awards 9 nominations</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 px-5 my-2">
                    <div className="col d-flex align-items-center justify-content-between px-4 my-1">
                        <img className="m-0 p-0" src={HeartIcon} alt="Heart Icon"/>
                        <img className="m-0 p-0" src={ShareIcon} alt=" Share Icon" />
                        <img className="m-0 p-0" src={BookMarkIcon} alt=" Bookmark Icon" />
                        <div className="m-0 p-0 d-flex align-items-center justify-content-between" onClick={() => handleLike()} style={{ cursor: "pointer" }}>
                            {!isNotLiked
                            ?<svg
                            xmlns="http://www.w3.org/2000/svg" 
                            height="1em" 
                            viewBox="0 0 576 512"
                            className="mx-1"
                            >
                            <path 
                            d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                            />
                            </svg>
                            :<img className="m-0 p-0" src={StarIcon} alt=" Star Icon"/>}
                            <p className="m-0 p-0" >{likes}</p>
                        </div>
                        
                    </div>
                    <div className="col d-flex flex-column">
                        <button className="col btn btn-danger d-flex  align-items-center px-5">
                            <img src={TicketIcon}
                                alt="Ticket Icon"
                                style={
                                    {marginRight: "2rem"}
                                }/>
                            <p className="m-0 p-0">See Showtimes</p>
                        </button>
                        <div className="col rounded-2 my-2"
                            style={
                                {
                                    fontSize: "12px",
                                    backgroundColor: "rgba(190, 18, 60, 0.1)",
                                    border: "1px solid rgba(190, 18, 60, 1)"
                                }
                        }>
                            <div className="col d-flex  align-items-center px-5">
                                <img src={ListIcon}
                                    alt="List Icon"
                                    style={
                                        {marginRight: "2rem"}
                                    }/>
                                <p className="m-0 p-0">More watch optionss</p>
                            </div>
                        </div>
                    </div>
                    <img src={ImageLast} alt="Image placeholder" className="mx-2 col-11 " style={{marginTop:"2rem"}} />
                </div>
            </div>
        </div>
    </div>)
}
