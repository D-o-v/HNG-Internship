import Icon from "../assets/icon/iCON 7 1.png"
export default function Header() {
  return (
    <div className="d-flex align-items-center justify-content-between col-12 px-5 py-2 border-bottom">
        <div className="d-flex align-items-center justify-content-center mx-5 gap-3">
            <img src={Icon} alt="Icon"  className="col-6" style={{width:"30px",height:"30px"}}/>
            <p className="fw-bolder col-6 my-0" style={{color:"rgba(16, 10, 66, 1)"}}>HelpMeOut</p>
        </div>
        <div className="d-flex align-items-center flex-row justify-content-between gap-5" style={{color:"rgba(16, 10, 66, 1)"}}>
          <p className="fw-medium my-0">Features</p>
          <p className="fw-medium my-0">How It Works</p>
        </div>
        <p className="fw-medium mx-5 my-0" style={{color:"rgba(16, 10, 66, 1)"}}>Get Started</p>
    </div>
  )
}
