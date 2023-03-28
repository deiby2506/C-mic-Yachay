import "./somos.css"
import deiby from "../../img/Deiby.jpg"
import juan from "../../img/Juan.jpg"
import jhon from "../../img/Jhon.jpg"
import alejo from "../../img/Alejo.jpg"

export default function Somos() {
  return (
    <section className="somos">
      <div className="tituso">
        <h1>NOSOTROS SOMOS</h1>
      </div>
      <div className="row quienes">
        <div className="col-3">
          <article className="textquienes">
            <img src={deiby} alt="" />
            <h2>Deiby</h2>
            <div>
              <p className="text_somos">Aprendiz SENA programador con una visión artística, creativa y la capacidad de trabajar en equipo. Capaz de crear diseños únicos y atractivos que cumplan con los requisitos y ayuden a lograr sus objetivos de comunicación visual.</p>
            </div>
          </article>
        </div>
        <div className="col-3">
          <article>
            <img src={juan} alt="" />
            <h2>Juan</h2>
            <div>
              <p className="text_somos">Aprendiz SENA con habilidades para la edición de vídeo, trabajando con diferentes formatos de vídeo y tiene habilidades para manejar la grabación de sonido, la corrección de color, la creación de efectos visuales y la animación.</p>
            </div>
          </article>
        </div>
        <div className="col-3">
          <article>
            <img src={jhon} alt="" />
            <h2>Jhon</h2>
            <div>
              <p className="text_somos">Aprendiz SENA creativo que utiliza su habilidad artística y conocimientos técnicos para crear diseños visuales que se utilizan en una amplia variedad de contextos, como publicidad, diseño editorial, ilustración, entre otros.</p>
            </div>
          </article>
          
        </div>
        <div className="col-3"><article>
          <img src={alejo} alt="" />
          <h2>Alejo</h2>
          <div>
              <p className="text_somos">Aprendiz SENA con  habilidades técnicas para trabajar con software de diseño gráfico como Adobe Illustrator, Photoshop, InDesign, entre otros, además de generar ideas creativas.</p>
            </div>
        </article>
        </div>
      </div>
    </section>

  );
}