import VideoRepo from "../assets/image/Video Repository.png"
import Icon1 from "../assets/icon/Icon placeholder.png"
import Icon2 from "../assets/icon/Icon placeholder (1).png"
import Icon3 from "../assets/icon/Icon placeholder (2).png"


export default function Feature() {
  return (
    <div className="col-12 px-5">
      <div className=" d-flex flex-column col-12 align-items-center justify-content-center">
        <p className="fw-bold" style={{ fontSize: "2rem" }}>Features</p>
        <p className="" style={{ color: "#616163" }}>Key Highlights of Our Extension</p>
      </div>
      <div className="d-flex my-5">
        <div className="col-6 px-5  pt-2 pb-0" >
          <div className="col-12 d-flex align-items-start p-0  my-4">
          <img src={Icon1} alt="icon" className="mx-3 my-1" style={{ width: "25px", height: "25px" }} />
            <div className="m-0 p-0">
              <p className="fw-medium m-0" style={{ color: "#1B233D", fontSize: "1.3rem" }}>Simple Screen Recording</p>
              <p className="m-0" style={{ color: "#616163" }}>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
          </div>
          </div>
          <div className="col-12 d-flex align-items-start p-0 my-4">
          <img src={Icon2} alt="icon" className="mx-3 my-1" style={{ width: "25px", height: "25px" }} />
            <div className="m-0 p-0">
              <p className="fw-medium m-0" style={{ color: "#1B233D", fontSize: "1.3rem" }}>Easy-to-Share URL</p>
              <p className="m-0" style={{ color: "#616163" }}>Share your recordings instantly with a single link. No attachments, no downloads.</p>
          </div>
          </div>
          <div className="col-12 d-flex align-items-start p-0 my-4">
          <img src={Icon3} alt="icon" className="mx-3 my-1" style={{ width: "25px", height: "25px" }} />
            <div className="m-0 p-0">
              <p className="fw-medium m-0" style={{ color: "#1B233D", fontSize: "1.3rem" }}>Revisit Recordings</p>
              <p className="m-0" style={{ color: "#616163" }}>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
          </div>
          </div>
        </div>
        <img src={VideoRepo} alt="video Repo Image" className="col-6 px-5 pt-2 pb-0"/>
      </div>

    </div>
  )
}
