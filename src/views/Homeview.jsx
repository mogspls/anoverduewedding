import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"

// Components

// Assets
import First from "../assets/images/PHS07114-Edit.jpg";
import Second from "../assets/images/PHS06229-Edit-Edit.jpg";

export default function Homeview() {
  gsap.registerPlugin(ScrollTrigger);
  function scrollTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
  };

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange, DOMContentLoaded, load, resize"
  });

  function toggleBg() {
    document.querySelector(".wrapper").classList.toggle("fff")
  }
  function displayNone() {
    document.querySelector("#landing").classList.toggle('displayNone');
  }
  useEffect(() => {
    scrollTop();
    gsap.to(".hero", {
      scrollTrigger: {
        scroller: document.querySelector("body"),
        trigger: "#homepage",
        start: "top",
        end: "center",
        scrub: true,
        // markers: true,
        pin: true
      },
      scale: 1.5,
      opacity: 0,
      ease: "linear",
      force3D: true
    });
    ScrollTrigger.create({
      trigger: "#first",
      // markers: true,
      start: "80% 50%",
      end: "bottom top",
      onEnter: () => {toggleBg()},
      onLeaveBack: () => {toggleBg(); displayNone()}
    })
    gsap.to(".wrapper .first", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#second",
        start: "bottom center",
        end: "bottom top",
        markers: true,
        scrub: true,
        onLeaveBack: () => displayNone()
      },
      opacity: 0,
      y: '25%'
    })
    gsap.to(".wrapper .second", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#second",
        start: "bottom center",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
      opacity: 0,
      y: '-25%'
    });
  }, []);

  return (
    <main id="homepage">

      {/* Landing */}
      <section id="landing">
        <div className="hero"></div>
        <div className="wrapper">
          <div style={{backgroundImage: `url(${First})`}} className="first"></div>
          <div style={{backgroundImage: `url(${Second})`}} className="second"></div>
        </div>
        <div className="container" style={{position: 'absolute', top: "0", zIndex: '10'}}>
          <div className="subtitle">
            <h1>An Overdue <br/> Wedding</h1>
            <p>Finally tying the knot at <strong>December 4, 2021</strong></p>
          </div>
          <div className="scrollDown">
            <p>Scroll Down</p>
            <p>&#8595;</p>
          </div>
        </div>
      </section>
      {/* End of landing */}
    </main>
  )
}