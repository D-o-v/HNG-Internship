import Header from "./Header"
import HeroImage from "../assets/image/Hero section.png"
import InstallHelpMe from "../assets/icon/help me out.png"


export default function ShowThem() {
  return (
    <div className="col-12 mx-0 px-0" style={{height:"100vh"}}>
      <Header/>
      <div className="row px-5 mx-0">
      <div className="col-6 d-flex flex-column align-items-center justify-content-center px-5" >
        <p className="fw-bold " style={{fontSize:"4rem", color:"rgba(20, 20, 20, 1)",lineHeight:"4rem"}}>Show Them Don’t Just Tell</p>
        <p className="" style={{color:"rgba(0, 0, 0, 0.75)"}}>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
        <div className="btn mx-0 py-2 my-2 align-self-start" style={{backgroundColor:"#120B48"}}>
          <img src={InstallHelpMe} alt="Install help me out" className="m-0" />
        </div>
      </div>
        <img src={HeroImage} alt="Hero image" className="col-6 mx-0" style={{width:"45vw"}} />
      </div>
    </div>
  )
}
