import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const New = () => {
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

  useEffect(() => {
    gsap.from(".contents", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".content-mains",
        markers: true,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);
  return (
    <div className="contents">
      <main className="content-mains">
        {panels.map(({ title, subtitle }) => (
          <div key={panels.index}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default New;
