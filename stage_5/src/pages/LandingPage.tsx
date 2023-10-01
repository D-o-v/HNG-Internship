// import Header from "../components/Header"
import ShowThem from "../components/ShowThem"
import Feature from "../components/Feature"
import HowITWorks from "../components/HowItWorks"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <div className="d-flex p-0 flex-column" style={{overflowX:"hidden"}}>
        <ShowThem/>
        <Feature/>
        <HowITWorks/>
        <Footer/>
    </div>
  )
}
