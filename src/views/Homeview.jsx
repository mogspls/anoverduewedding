import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom"

// Components

// Assets
import Logo from "../assets/images/logo.svg"
import First from "../assets/images/PHS07114-Edit.jpg";
import Second from "../assets/images/PHS06229-Edit-Edit.jpg";
import Wreathe from "../assets/images/Laurel-Wreathe.png";

export default function Homeview() {

  //States
  // const [isActive, setIsActive] = useState(false);

  // Config
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange, DOMContentLoaded, load, resize"
  });

  function scrollTop() { window.scrollTo(0,0); }

  useEffect(() => {
    scrollTop();
    gsap.to(".hero", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#landing",
        start: "center center",
        end: "bottom center",
        scrub: true,
        // markers: true,
        toggleClass: {
          targets: "#landing",
          className: "is-active"
        },
        pin: true,
      },
      scale: 1.5,
      opacity: 0.3,
      ease: "linear",
      force3D: true,
    });

    ScrollTrigger.create({
      scroller: document.body,
      trigger: "#second",
      start: "top bottom",
      end: "bottom top",
      toggleClass: {
        targets: ".wrapper",
        className: "active"
      },
      // markers: true,
    });

    gsap.to(".first", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#third",
        start: "top bottom",
        end: "top center",
        pin: true,
        // markers: true,
        scrub: true,
      },
      y: "-100%"
    });

    gsap.to(".second", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#third",
        start: "top bottom",
        end: "bottom center",
        pin: true,
        // markers: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
      y: "100%"
    });

    gsap.to(".details", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#second",
        start: "center center",
        end: "bottom top",
        pin: true,
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true
      },
      scale: 1.3
    })

    gsap.to(".letter", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#fourth",
        start: "top bottom",
        end: "center center",
        scrub: true,
        invalidateOnRefresh: true
      },
      y: '-75%',
    })
  }, []);

  return (
    <main id="homepage">

      {/* Landing */}
      <section id="landing">
        <div className="landing-wrapper">
          <div className="hero"></div>
          <div className="container">
            <div className="subtitle">
              <h1>An Overdue <br/> Wedding</h1>
              <p>Finally tying the knot at <strong>December 4, 2021</strong></p>
            </div>
            <div className="scrollDown">
              <p>Scroll Down</p>
              <p>&#8595;</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of landing */}

      {/* Start of second */}
      <section id="second">
        <div className="wrapper">
          <div style={{backgroundImage: `url(${First})`}} className="first"></div>
          <div style={{backgroundImage: `url(${Second})`}} className="second"></div>
        </div>
        <div className="container">
          <div className="details">
            <h1>Wedding Details</h1>
            <div>
              <img src={Wreathe} alt="Laurel Wreathe" height="100px" style={{padding: '10px'}} />
              <h6>DATE</h6>
              <p>December 4, 2021 (Saturday) at 1PM</p>
            </div>
            <div>
              <h6>CEREMONY</h6>
              <p>Sacred Heart of Jesus Parish, Cupang, Muntinlupa (along Don Jesus Boulevard in front of Madison Galeries) </p>
            </div>
            <div>
              <h6>RECEPTION</h6>
              <p>The Palms Country Club, Alabang, Muntinlupa (along Laguna Heights Drive, near Festival Mall Alabang)</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of second */}
      <section id="third"></section>
      <section id="fourth">
        <div className="ribbon">
          <div id="envelope">
            <div className="logo-wrapper">
              <img src={Logo} alt="" className="logo" />
            </div>
          </div>
          <div className="letter">
            <h1 style={{fontSize: '21px', padding: '32px 0px'}}>#AnoverDueWedding</h1>
            <a href="">Click here <br/> to RSVP</a>
          </div>
        </div>
      </section>
    </main>
  )
}