import { gsap, Power3, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./App.css";
import doodle from "./doodle.svg";
import New from "./New";
gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: "Architecto aliquam",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.",
  },
  {
    title: "Ceritatis placeat",
    subtitle:
      "Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?",
  },
  {
    title: "Vitae voluptates",
    subtitle:
      "In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.",
  },
];

function App() {
  let t1 = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    t1.from(
      ".bannerMain-rgt",
      3,
      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      "Start"
    );
    t1.staggerFrom(
      ".text",
      1,
      { y: 30, ease: Power3.easeOut, opacity: 0 },
      0.15,
      "Start"
    )
      .from(
        ".btn-primary",
        1,
        { y: 20, opacity: 0, ease: Power3.easeOut, delay: 0.4 },
        0.35
      )
      .from(
        ".paragraphAnimation",
        1,
        { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        0.35
      )
      .from(
        "nav",
        1,
        { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        0.35,
        "Start"
      );
    gsap.from(".content", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".content-main",
        markers: true,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, [t1]);

  return (
    <div className="App">
      <div>
        <nav>
          <div className="nav-logo">FarHan .</div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="javascript.void()">Home</a>
              </li>
              <li>
                <a href="javascript.void()">Products</a>
              </li>
              <li>
                <a href="javascript.void()">Pricing</a>
              </li>
              <li>
                <a href="javascript.void()">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {" "}
          <section className="bannerMain">
            <div className="bannerMain-lft">
              <div className="bannerMain-lft__inner">
                <h2>
                  <div className="textWrapper">
                    <span className="text">Go paperless </span>
                  </div>
                  <div className="textWrapper">
                    <span className="text">with our App</span>
                  </div>
                </h2>
                <p className="paragraphAnimation">
                  We provide seemeless integration with <br /> multiple devices
                  so that you can take <br /> notes even better.
                </p>
              </div>
              <button className="btn-primary">request access</button>
            </div>
            <div className="bannerMain-rgt">
              <img src={doodle} alt="doodle" />
            </div>
          </section>
        </div>
      </div>
      <New />
      {/* <div className="content">
        <main className="content-main">
          {panels.map(({ title, subtitle }) => (
            <div key={panels.index}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          ))}
        </main>
      </div> */}
    </div>
  );
}

export default App;

/* 

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


*/
