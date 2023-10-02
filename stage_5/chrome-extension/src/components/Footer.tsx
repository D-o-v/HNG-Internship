import Logo from "../assets/icon/logo.png"

export default function Footer() {
  return (
    <div className='d-flex col px-5 py-4 align-items-center' style={{color:"white",backgroundColor:"#120B48",textAlign:"start", lineHeight:"1rem",fontSize:"16px"}}>
        <div className='col-3 px-5'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='col-3 px-5'>
            <p className="fw-medium">Menu</p>
            <p className="fw-sm">Home</p>
            <p>Converter</p>
            <p>How it works</p>
        </div>
        <div className='col-3 px-5'>
        <p className="fw-medium">About us</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
        </div>
        <div className='col-3 px-5'>
        <p className="fw-medium">Screen Record</p>
            <p>Browser Window</p>
            <p>Desktop</p>
            <p>Application</p>
        </div>
    </div>
  )
}
