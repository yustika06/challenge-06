import React from 'react'
import './PageUser.css'
import Car from '../../Assets/img/car.png'
import happy from '../../Assets/img/happy.png'
import icon_complete from '../../Assets/img/icon_complete.png'
import icon_price from '../../Assets/img/icon_price.png'
import icon_24hrs from '../../Assets/img/icon_24hrs.png'
import icon_professional from '../../Assets/img/icon_professional.png'
import foto1 from '../../Assets/img/foto1.png'
import foto2 from '../../Assets/img/foto2.png'
import Rate from '../../Assets/img/Rate.png'
import back from '../../Assets/img/back.jpg'
import next from '../../Assets/img/next.jpg'
import icon_facebook from '../../Assets/img/icon_facebook.png'
import icon_instagram from '../../Assets/img/icon_instagram.png'
import icon_twitter from '../../Assets/img/icon_twitter.png'
import icon_mail from '../../Assets/img/icon_mail.png'
import icon_twitch from '../../Assets/img/icon_twitch.png'
export const Pageuser = () => {
  return (
    <div>
        <div classNameName="head" id="home">
    <div classNameName="container">
        <div classNameName="box biru"></div>
        <div classNameName="navigasi">
            <nav classNameName="navbar navbar-expand-lg navbar-light">
            <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span classNameName="navbar-toggler-icon"></span>
            </button>
                <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div classNameName="navbar-nav">
                    <a classNameName="nav-link active" aria-current="page" href="#service">Our Services</a>
                    <a classNameName="nav-link" href="#why-us">Why Us</a>
                    <a classNameName="nav-link" href="#testimonial">Testimonial</a>
                    <a classNameName="nav-link" href="#FAQ">FAQ</a>
                    <button classNameName="btn" type="button">Register</button> 
                    </div>
                </div>
            </nav>
        </div>
        <div classNameName="hal-2">
            <div classNameName="tulisan">
                Sewa dan Rental Mobil Terbaik di Tangerang Selatan
                <p></p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                untuk sewa mobil 24 jam.<p></p>
                <button classNameName="btn button" type="button">Mulai sewa Mobil</button></div>
            <div classNameName="gambar">
                <div classNameName="background"><img classNameName="img-fluid" src={Car} alt="background"></img></div>
            </div>
        </div> 
    </div>
</div>         


{/* Our Service  */}
<div className="section-2" id="service">
    <div className="container">
      <div className="sec2">
        <div className="kiri">
          <div className="circle happy"><img classNameName="img-fluid" src={happy} alt="happy-girl"></img></div>         
      </div>
      <div classNameName="kanan"style="width: 50%;">
          <h1>Best Car Rental for any kind of trip in South Tangerang!</h1>
          <p>Sewa mobil di Tangerang Selatan bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, 
              kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <div className="list">
                  <p><span className="fa-stack"><i className="fa fa-solid fa-check" id="ceklis"></i></span>Sewa Mobil Dengan Supir di Tangsel 12 Jam</p>
                  <p><span className="fa-stack"><i className="fa fa-solid fa-check" id="ceklis"></i></span>Sewa Mobil Lepas Kunci di Tangsel 24 Jam</p>
                  <p><span className="fa-stack"><i className="fa fa-solid fa-check" id="ceklis"></i></span>Sewa Mobil Jangka Panjang Bulanan</p>
                  <p><span className="fa-stack"><i className="fa fa-solid fa-check" id="ceklis"></i></span>Gratis Antar - Jemput Mobil di Bandara</p>
                  <p><span className="fa-stack"><i className="fa fa-solid fa-check" id="ceklis"></i></span>Layanan Airport Transfer / Drop In Out</p>
              </div>
      </div>
      </div>
    </div>
</div>


    </div>
  )
}
