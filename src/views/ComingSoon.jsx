import Logo from "../assets/images/logo.svg"

export default function comingSoon() {
  return (
    <main id="comingSoon">
      <div className="container">        
        <img src={Logo} alt="AnOverDueWedding" id="logo" style={{
          width: '150px',
          height: '150px',
          padding: '12px',
          borderRadius: '100px', 
          border: 'solid 1px #fff'
        }} />
        <h1>Coming Soon.</h1>
        <p>November 18, 2021 at 12:00am</p>
      </div>
    </main>
  )
}