import React, { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import Animation from '../asset/escena1.json';
import ReactHowler from "react-howler";
import sonidoani from "../asset/Sound/Audioescena1.mp3";
import "./index.css"

const Comicinteractivo = (Props) =>{
  const LottieRef = useRef();
  const [isActive, setIsActive] = useState(false)
  const [ ViewPass, setViewPass] = useState(false)

  const changeView = () =>{
    if (!isActive) {
      setViewPass(true)
    }
  }

useEffect( () => {
  LottieRef.current.setSpeed(1)
  LottieRef.current.goToAndStop(1,true)
  if (ViewPass) {
    LottieRef.current.playSegments(0,3)
  }
},[ViewPass])

/* animacion1 */

return(
  <div>
    <div>
    <div>
        <h2>Click en la pantalla para empezar animación</h2>
      </div>
    <Lottie className="anima" lottieRef={LottieRef} animationData={Animation} loop={false} onClick={changeView}/>
    <ReactHowler src={sonidoani} playing={ViewPass}/>
    </div>
    <div className="boton_text">
    <Link to='/instruccion'>
      <button className="buttonm">Instrucción</button>
      </Link>
      <Link to='/escena2'>
      <button className="buttonm">Siguiente</button>
      </Link>
    </div>
  </div>
)

};  
export default Comicinteractivo;