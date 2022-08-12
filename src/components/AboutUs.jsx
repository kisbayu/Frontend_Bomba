import React from 'react'
import './AboutUs.css'
import Fade from 'react-reveal/Fade';

function AboutUs() {
  return (
    <div className="AboutUs pb-5">
        <div className="AboutUs-container">
          <div className="container align-content-center">
            <div className="row mt-5">
              <div className="col-6">
                <img src="images/img-10.jpg" alt="bomba-2" className='img-thumbnail rounded' />
              </div>
              <div className="col-6 ">
                <Fade delay={1000} duration={2000} right>
                <h2>Tentang Kami</h2>
                <p>Desa Bomba merupakan salah satu desa yang berada di Kecamatan Batudaka, Kabupaten Tojo Una-Una. Desa Bomba memiliki banyak sekali potensi mulai dari potensi alam, maritim, wista, manusia, dan masih banyak yang lainnya. Dengan mottonya "Pusimba'a Raya" yang berarti Bersatu hati dalam membangun Desa Bomba dan menebarkan kasih sayang sesama masyarakat desa bomba sesuai dengan sifat Allah, Maha Pengasih dan Maha Penyayang, Desa Bomba siap untuk berkembang dan lebih maju lagi dengan berlandaskan imtaq dan iptek.</p>
                </Fade>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default AboutUs