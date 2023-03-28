import "./bannerComic.css";
import Banner from "../../img/bannercomic.jpg"
import paisajem from "../../img/fondobanner.png";
import paisajep from "../../img/FONDOcasabague.png"
import render3d from "../../img/render1.jpg"

export default function BannerComic() {
  return (
    <section className="Banner">
      <div className="container">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={paisajep} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={Banner} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={paisajem} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={render3d} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )

}