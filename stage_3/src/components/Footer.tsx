import { socialMedia } from '../data'

export default function Footer() {
  return (
    <div>
         <div className='py-5'>
        <div className='d-flex gap-5 col-lg-3 col-md-4 col-sm-6 align-items-center justify-content-center mx-auto'>
          {socialMedia.map((item) => (
              <img src={item.icon} alt={`${item.name} icon`} key={item.name} />
          ))}
        </div>
          <div className='d-flex gap-5 col-lg-6 col-sm-12 align-items-center justify-content-center mt-1 fw-bold mx-auto'>
            <p>Condition of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
          </div>
          <p className='text d-flex gap-5 col-lg-6 col-sm-12 align-items-center justify-content-center mt-2 fw-bold mx-auto'>&copy; 2023 Picture-Gallery By Odunayo Dauda</p>
        </div>
    </div>
  )
}
