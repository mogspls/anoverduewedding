import Banner from "../assets/images/PHS06616-Edit.jpg"

export default function Details() {
  return (
    <main id="details">
      <div style={{backgroundImage: `url(${Banner})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center', }}></div>
      <div className="container">
        <h1>What to <br/>wear</h1>
      </div>
    </main>
  )
}