import {howitworks} from "../data/data"
import VideoPic from "../assets/icon/rec-1.cb7888a47e24214aeb105805426a8300.svg.png"

export default function HowITWorks() {
  return (
    <div className="d-flex flex-column align-items-center px-5">
        <p className="fw-bold" style={{ fontSize: "2rem" }}> How it works</p>
        <div className="d-flex col-12 align-items-center justify-content-center px-5" style={{textAlign:"center"}}>
        {howitworks.map((item:any)=>(
            <div className="d-flex flex-column col-4 align-items-center justify-content-center p-5">
                <img src={item.icon} alt="icon" style={{ width: "25px", height: "25px" }}/>
                <p className="fw-medium my-2" style={{ color: "#1B233D", fontSize: "1.3rem" }}>{item.title}</p>
                <p  className="my-4 mx-0" style={{ color: "#616163" }}>{item.detail}</p>
                <img src={VideoPic } alt="video placeholder image" style={{ width: "300px", height: "200px" }}  />
            </div>
        ))}
        </div>
    </div>
  )
}
