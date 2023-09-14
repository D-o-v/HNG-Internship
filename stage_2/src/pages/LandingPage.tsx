import Logo from "../assets/icons/tv.png"
import SearchIcon from "../assets/images/Search.png"
import Menu from "../assets/images/Menu.png"
import WatchIcon from "../assets/images/Icon.png"
import IMDB from "../assets/images/ratin.png"
import Berry from "../assets/images/Berry.png"
export default function LandingPage() {
    return (
    <div className=' container-fluid hompageContainer bg-center d-flex flex-column py-4 px-5'>
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
      <p className="text-white col-10 mt-5" style={{fontSize:"3rem",fontWeight:"700"}}>John Wick 3 : Parabellum</p>
      <div className="d-flex flex-column lh-sm">
        <div className='d-flex justify-content-between align-items-center col-6'>
          <div className='d-flex justify-content-center align-items-center'>
                <img src={IMDB} alt="Imdb logo" style={{marginRight:"0.5rem"}}/>
                <p className='mb-0 text-white'>85.3/100</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={Berry} alt="Rotten tomatoe rating" style={{marginRight:"1rem"}}/>
                <p className='mb-0 text-white'>85.3%</p>
            </div>
        </div>
        <p className="text-white col-10">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        </div>
        <button className="btn btn-danger d-flex align-items-center justify-content-center mt-2">
          <img src={WatchIcon} alt="Watch Icon" />
          <p className="text text-white align-self-end px-3 m-0"><strong>WATCH TRAILER</strong></p>
        </button>
    </div>
</div>

    );
}

