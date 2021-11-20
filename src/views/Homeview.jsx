import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom"

// Components

// Assets
import Logo from "../assets/images/gold-logo.svg"
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
        start: "top top",
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
    })

    gsap.to(".letter", {
      scrollTrigger: {
        scroller: document.body,
        trigger: "#fifth",
        start: "top bottom",
        end: "center center",
        scrub: true,
        invalidateOnRefresh: true
      },
      y: '-60%',
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
              <h1>An overDue <br/> Wedding</h1>
              <p>Finally tying the knot on <strong>December 4, 2021</strong></p>
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
            <h1>Wedding <br/> Details</h1>
            <section>
              <div>
                <h2>Date</h2>
                <p>December 4, 2021 (Saturday) at 1PM</p>
              </div>
              <div>
                <h2>Ceremony</h2>
                <p>Sacred Heart of Jesus Parish, Cupang, Muntinlupa (along Don Jesus Boulevard in front of Madison Galeries)</p>
              </div>
              <div>
                <h2>Reception</h2>
                <p>The Palms Country Club, Alabang, Muntinlupa (along Laguna Heights Drive, near Festival Mall Alabang)</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* End of second */}
      <section id="third"></section>
      <section id="fourth">
        <div className="container">
          <header>
            <img src={Wreathe} alt="Laurel Wreathe" height="75px" style={{padding: '10px'}} />
            <h1 style={{fontFamily: 'Playfair Display, serif'}} >Entourage</h1>
          </header>
          <main>
            <div className="flex">
              <section>
                <div>
                  <h2>Parents of the Groom</h2>
                  <p>Ernesto P. Due</p>
                  <p>Rose Lulu R. Due</p>
                </div>
                <div>
                  <h2>Parents of the Bride</h2>
                  <p>Albert Dennis N. Añover</p>
                  <p>Lizabelle A. Añover</p>
                </div>
              </section>
              <section>
                <div>
                  <h2>Principal Sponsors</h2>
                  <p>Manuel A. Ballesca</p>
                  <p>Ruby Rowena A. Ballesca</p>
                  <p>Ponciano C. Bautista, Jr.</p>
                  <p>Maria Ester F. Bautista</p>
                  <p>Bernardo S. Belen</p>
                  <p>Ann Margaret M. Belen</p>
                  <p>Teodoro S. Carbonera</p>
                  <p>Ma. Mathea M. Carbonera</p>
                  <p>Jose Vittorio H. Gaite</p>
                  <p>Cecille Anne C. Gaite</p>
                  <p>Pio Diomedes B. Manalo</p>
                  <p>Victoria Theresa S. Bautista</p>
                </div>
                <div>
                  <h2>Best Men</h2>
                  <p>Franzly R. Suaze</p>
                  <p>Allen Dale M. Carbonera</p>
                </div>
                <div>
                  <h2>Maid of Honor</h2>
                  <p>Alyssa Danielle A. Añover</p>
                </div>
              </section>
            </div>
            <div className="flex">
              <section>
                <div>
                  <h2>Secondary Sponsors</h2>
                  <div>
                    <h3>Candle</h3>
                    <p>Noel Jacob A. Añover</p>
                    <p>Frances Andrea A. Añover</p>
                  </div>
                  <div>
                    <h3>Veil</h3>
                    <p>Arvin Jerome A. Adiao</p>
                    <p>Ma. Carmela C. Murillo</p>
                  </div>
                  <div>
                    <h3>Cord</h3>
                    <p>Kharl Michael R. Manlutac</p>
                    <p>Cheryl Yvan C. Chong</p>
                  </div>
                </div>
              </section>
              <section>
                <div>
                  <h2>Bearers</h2>
                  <div>
                    <h3>Bible</h3>
                    <p>Khenn Michael R. Manlutac</p>
                  </div>
                  <div>
                    <h3>Ring</h3>
                    <p>David Joshua A. Añover</p>
                  </div>
                  <div>
                    <h3>Coin</h3>
                    <p>Jose Miguel A. Añover</p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </section>
      <section id="fifth">
        <div className="ribbon">
          <div id="envelope">
            <div className="logo-wrapper">
              <img src={Logo} alt="" className="logo" style={{fill: "#D2C094"}} />
            </div>
          </div>
          <div className="letter">
            <h1 style={{fontSize: '21px', padding: '32px 0px'}}>#AnOverDueWedding</h1>
            <a href="https://forms.gle/Mq4dZUYbRjk6VfCU6">Click here to RSVP</a>
          </div>
        </div>
      </section>
    </main>
  )
}