import "./bitate.css";
import logob from "../../img/Logo BITATE.png";
import face from "../../img/Face Icon1.png";
import inta from "../../img/intaicon.png";
import tube from "../../img/Tube.png";

export default function Bitate() {
  return (
    <section className="py-3 bitatex">
      <div className="container bicolor">
        <nav className="navbar-expand navbar">
          <button className="navbar-brand" href="#">
            <img className="m-1" src={logob} alt="Yachay Landing Page" />
            BITATE
          </button>
          <div className="redessociales">
            <div className="collapse navbar-collapse bitmarg" id="">
              <a href="https://www.facebook.com/people/BitateComics/100089772007208/" className="p-2">
                <img src={face} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/bitatecomics/?igshid=ZDdkNTZiNTM%3D" className="p-2">
                <img src={inta} alt="instagram" />
              </a>
              <a href="https://www.youtube.com/@bitatecomics" className="p-2">
                <img src={tube} alt="youtube" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

