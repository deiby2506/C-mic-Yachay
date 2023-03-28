import "./personajes.css"
import chia from "../../img/Chia_1.png"
import chimi from "../../img/Chimi_1.png"
import bochi from "../../img/Bochica_1.png"
import xue from "../../img/Xue_1.png"

export default function Personajes() {
  return (
    <section className="personajes" id="personajes">
      <div className="tituper">
        <h1>PERSONAJES</h1>
      </div>
      <div className="row personaje">
        <div className="col-3">
          <article>
            <img src={chia} alt="" />
            <h4>Chia</h4>
          </article>
        </div>
        <div className="col-3">
          <article>
            <img src={chimi} alt="" />
            <h4>Chiminigagua</h4>
          </article>
        </div>
        <div className="col-3">
          <article>
            <img src={bochi} alt="" />
            <h4>Bochica</h4>
          </article>
        </div>
        <div className="col-3"><article>
          <img src={xue} alt="" />
          <h4>Xue</h4>
        </article>
        </div>
      </div>
    </section>

  );
}