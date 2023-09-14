import {sideMenu} from "../data/data"
// import {response} from "../data/data"
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


export default function SingleMoviePage({movieList} : any) {
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
                        item.href
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
            <div className="col-12"> 
            {/* {
                response.filter((item) => item.title === movieList).map((item) => (<img src={
                        item.thumbmail
                    }
                    alt={
                        item.title
                    }
                    key={
                        item.title
                    }
                    className="rounded-5 mt-3"
                    style={
                        {
                            width: "100%",
                            height: "250px"
                        }
                    }/>))
            }  */}
            <video
            width="560"
            height="315"
            src={`https://api.themoviedb.org/3/movie/${movieList.id}`}
            title={movieList.title}
            // frameborder="0"
            // allowfullscreen
      ></video>
            </div>
            <div className="d-flex col-12">
                <div className="col-7">
                    <div className="d-flex align-items-center py-4 px-4">
                        <p className="p-0 m-0 fw-bold">{`${movieList.title}•${movieList.release_date}•2h 10m}`}</p>
                        <div className="rounded-pill border border-danger mx-2 px-2 py-0 ">
                            <p className="p-0 m-0">Action</p>
                        </div>
                    </div>
                    <p className="col-12 px-4">After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                                                but must confront ghosts of his past when he leads TOP GUN's elite graduates
                                                on a mission that demands the ultimate sacrifice from those chosen to fly it.
                    </p>
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
                        <div className="m-0 p-0 d-flex align-items-center justify-content-between">
                        <img className="m-0 p-0" src={StarIcon} alt=" Star Icon" />
                        <p className="m-0 p-0">8K</p>
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
