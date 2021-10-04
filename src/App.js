import { Power3, TweenMax } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  let icon = useRef(null);
  let text = useRef(null);
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [circleState, setCircleState] = useState(false)

  const handleClick = () => { 
    TweenMax.to(circleRed, .8, {width: 200, height: 200,  ease: Power3.easeInOut})
    setCircleState(true);
  }

  const handleClickRevert = () => { 
    TweenMax.to(circleRed, .8, {width: 75, height: 75,  ease: Power3.easeInOut})
    setCircleState(false);
  }
 
  useEffect(() => {
    TweenMax.to(app, 0, {css:{visibility: 'visible'}})
    // TweenMax.from(circle, .8, {opacity: 0, ease: Power3.easeInOut, x: 40})
    // TweenMax.from(circleRed, .8, {opacity: 0, ease: Power3.easeInOut, x: 40, delay: .2})
    // TweenMax.from(circleBlue, .8, {opacity: 0, ease: Power3.easeInOut, x: 40, delay: .4})


    TweenMax.staggerFrom([circle, circleRed, circleBlue ], .8, {opacity: 0, ease: Power3.easeOut, x: 40}, .5 )
  },[]);


  useEffect(() => {
    TweenMax.to(icon, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });

    TweenMax.to(text, 1, {
      opacity: 1,
      y: -20,
      delay: 0.5,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div 
    ref={el => {app = el}}
    className="App">
      <header className="App-header">
        <img
          ref={(el) => {
            icon = el;
          }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p
          ref={(el) => {
            text = el;
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="circle-container">
          <div
          ref={el => {circle = el}}
          className="circle"></div>
          <div 
          ref={el => {circleRed = el}}
          onClick={circleState !== true ? handleClick : handleClickRevert}
          className="circle red"></div>
          <div 
          ref={el => {circleBlue = el}}
          className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
