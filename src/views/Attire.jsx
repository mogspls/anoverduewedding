// import { Parallax } from "react-parallax";
// import Banner from "../assets/images/PHS06775-Edit.jpg"
import BW1 from "../assets/images/men-1.jpeg"
import BW2 from "../assets/images/men-2.jpeg"
import white1 from "../assets/images/White1.jpeg"
import white2 from "../assets/images/White2.jpeg"
import white3 from "../assets/images/White3.jpeg"


export default function Attire() {
  function scrollTop() { window.scrollTo(0,0); }
  scrollTop();

  const colors = [
    {
      name: "Parents",
      colors: ["#8C5C6F", "#C0A9B0", "#A47F8C", "#B1939D", "#D1C3C6", "#976D7D", 
      "#132A40", "#12304B", "#0F3657", "#132D46", "#0D395D", "#113351"],
      pictures: [
        './images/Purple1.jpeg',
        './images/Purple2.jpeg',
        './images/Purple3.jpeg'],
    },
    {
      name: "Principal Sponsors",
      colors: ["#C1B27F", "#D2C094", "#E3D0AA", "#CAB989", "#ECD9B6", "#DBC89F",
      "#132A40", "#12304B", "#0F3657", "#132D46", "#0D395D", "#113351"],
      pictures: [
        './images/Gold1.jpeg',
        './images/Gold2.jpeg',
        './images/Gold3.jpeg'
      ],
    },
    {
      name: "Bridesmaids/Groomsmen",
      colors: ["#D2A4A3", "#C29191", "#B47F81", "#CA9A9A", "#BB8888", "#DAAFAD",
      "#132A40", "#12304B", "#0F3657", "#132D46", "#0D395D", "#113351"],
      pictures: [
        './images/Pink1.jpeg',
        './images/Pink2.jpeg',
        './images/Pink3.jpeg'
      ],
    },
  ];

  return (
    <main id="attire">
      {/* <Parallax bgImage={Banner} strength={500}>
        <div style={{height: 768}}></div>
      </Parallax> */}
      <h1 style={{padding: '50px 0px', textAlign: 'center'}}>What to <br/>wear?</h1>

      <div className="container">
        <div className="content">

          {/* Guests */}
          <h1 style={{color: '#fff'}}>All Guests (non-entourage)</h1>
          <div className="col" id="guests">
            <section>
              <div>
                <div className="mosaic">
                  <div style={{backgroundImage: `url(${BW1})`}}></div>
                  <div style={{backgroundImage: `url(${BW2})`}}></div>
                </div>
                <header>
                  <h1>Gentlemen</h1>
                </header>
                <ul>
                  <li>Color: Black</li>
                  <li>Coat, white long sleeves, black necktie and slacks</li>
                </ul>
              </div>
              <div>
                <div className="mosaic">
                  <div style={{backgroundImage: `url(${white1})`}}></div>
                  <div style={{backgroundImage: `url(${white2})`}}></div>
                  <div style={{backgroundImage: `url(${white3})`}}></div>
                </div>
                <header>
                  <h1>Ladies</h1>
                </header>
                <ul>
                  <li>Color: White or Shades of White (no prints)</li>
                  <li>Floor length gown</li>
                  <li>Tea-length dress</li>
                  <li>Dressy separates</li>
                  <li>Pants suit</li>
                  <li>Jumpsuit</li>
                </ul>
              </div>
            </section>
          </div>
          {/* End of guests */}
          <h1 style={{color: "#fff"}}>Entourage</h1>
          {
            colors.length > 0 ? (
              colors.map((color, key) => {
                return (
                  <div key={key} className="col">
                    <header style={{flexDirection: 'column'}}>
                      <div className="mosaic">
                        {color.pictures.map((pic, key) => {
                          return (
                            <div style={{backgroundImage: `url(${pic})`}} key={key} />
                          )
                        })}
                      </div>
                      <h1>{color.name}</h1>
                      <div>
                        <header>
                          <h3>Gentlemen</h3>
                        </header>
                        <ul>
                          <li>Blue coat, white long sleeves, necktie (provided) and slacks</li>
                        </ul>
                      </div>
                      <header>
                        <h3>Ladies</h3>
                      </header>
                      <ul>
                        <li>Floor length gown</li>
                        <li>Tea-length dress</li>
                        <li>Dressy separates</li>
                        <li>Pants suit</li>
                        <li>Jumpsuit</li>
                      </ul>
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