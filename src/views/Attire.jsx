import { Parallax } from "react-parallax";
import Banner from "../assets/images/PHS06288-Edit.jpg"


export default function Attire() {
  function scrollTop() { window.scrollTo(0,0); }
  scrollTop();

  const colors = [
     {
      name: "Bridesmaids",
      colors: ["#D2A4A3", "#C29191", "#B47F81", "#CA9A9A", "#BB8888", "#DAAFAD"]
    },
    {
      name: "Groomsmen",
      colors: ["#132A40", "#12304B", "#0F3657", "#132D46", "#0D395D", "#113351"]
    },
    {
      name: "Parents",
      colors: ["#8C5C6F", "#C0A9B0", "#A47F8C", "#B1939D", "#D1C3C6", "#976D7D"]
    },
    {
      name: "Principal Sponsors",
      colors: ["#C1B27F", "#D2C094", "#E3D0AA", "#CAB989", "#ECD9B6", "#DBC89F"]
    },
  ];

  return (
    <main id="attire">
      <Parallax bgImage={Banner} strength={500}>
        <div style={{height: 500}}></div>
      </Parallax>
      <h1 style={{padding: '50px 0px'}}>What to <br/>wear?</h1>

      <div className="container">
        <div className="content">
          {/* Guests */}
          <div className="col" id="guests">
            <header>
              <h1>Guests</h1>
            </header>
            <section>
              <div>
                <h2>Gentlemen</h2>
                <ul>
                  <li><p>Color: <strong>Black</strong></p></li>
                  <li><p>2-Piece suit with Necktie</p></li>
                </ul>
              </div>
              <div>
                <h2>Ladies</h2>
                <ul>
                  <li><p>Color: <strong>All-White (no prints)</strong></p></li>
                  <li><p>Floor length gown</p></li>
                  <li><p>Tea-length cocktail dress</p></li>
                  <li><p>Dressy seperates</p></li>
                </ul>
              </div>
            </section>
          </div>
          {/* End of guests */}
          <h1>Entourage</h1>
          {
            colors.length > 0 ? (
              colors.map((color, key) => {
                return (
                  <div key={key} className="col">
                    <header>
                      <h1>{color.name}</h1>
                    </header>
                    <section className="colors">
                      <div className="title">
                        <h3>Colors</h3>
                      </div>
                      <div className="kulay">
                        {color.colors.map((kulay, key) => {
                          return (
                            <span key={key} style={{background: `${kulay}`}}/>
                          )
                        })}
                      </div>
                    </section>
                  </div>
                )
              })
            ) : null
          }
        </div>
      </div>
    </main>
  )
}