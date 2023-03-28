import React, { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import Animation from '../../asset/Escena 4.json';
import ReactHowler from "react-howler";
import sound4 from "../../asset/Sound/audioescena4.mp3";
import "./index.css"

const Cuartaescena = (Props) =>{
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
    <ReactHowler src={sound4} playing={ViewPass}/>
    </div>
    <div className="boton_text">
    <Link to='/escena3'>
      <button className="buttonm">Anterior</button>
      </Link>
      <Link to='/escena5'>
      <button className="buttonm">Siguiente</button>
      </Link>
    </div>
  </div>
  
  
)

};  
export default Cuartaescena;