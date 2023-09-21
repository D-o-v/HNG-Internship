import { useNavigate } from "react-router-dom"
import SearchIcon from "../assets/icons/Search.png"
import { LoginProps } from "../types/types";
import { SearchProps } from "../types/types";


const Header: React.FC<LoginProps & SearchProps> = ({ setIsIn, setSearchItem }) => {

        const navigate =useNavigate()

        const handleSignOut=()=>{
            setIsIn(false)
            navigate("/")
        }

        const handleSearchInput=(e:any)=>{
            e.preventDefault()
            setSearchItem(e.target.value)
        }

  return (
        <div className="m-0 p-2 bg-dark text-white d-sm-flex d-md-flex d-lg-flex align-items-center justify-content-betwen">
            <div className="d-flex col-lg-3 align-items-center justify-content-center gap-2 m-0 ">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"> 
            <path 
            d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
            className="w-100"
            fill="white"
            />
            </svg>
            <p className="fw-bold m-0">My Picture Gallery</p>
            </div>
            <div className="form-outline col-lg-6 position-relative m-auto my-2">
            <input 
            type="search"
            className="form-control search" 
            onChange={handleSearchInput}
            aria-label="Search"
            placeholder="Search gallery" 
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
            <div className="d-flex justify-content-center align-items-center border border-2 rounded-2  m-auto py-0 px-2 gap-1 btn btn-dark" onClick={()=>handleSignOut()}>
                <p className="text text-white align-self-center px-1 fw-medium m-0">Sign Out</p>
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                 height="1em" 
                 viewBox="0 0 512 512">
                    <path 
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                    fill="white"
                    className="p-0 m-0"
                    />
                </svg>
            </div>
        </div>
  )
}
export default Header