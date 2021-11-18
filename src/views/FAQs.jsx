//Assets
import IsaBPI from "../assets/images/ISA-BPI.jpg"
import IsaGcash from "../assets/images/ISA-GCASH.jpg";
import JKBDO from "../assets/images/JK-BDO.jpg";

export default function COVID() {

  return (
    <main id="faqs">
      <div className="container">
        <header style={{justifyContent: 'flex-end'}}>
          <h1>Frequently Asked <br/> <span style={{color: "#B48082"}}>Questions</span></h1>
        </header>
        <main>
          <div>
            <h1>1.</h1>
            <div>
              <h2>Can I bring anyone with me?</h2>
              <p>No, unless he/she has also been personally invited to the wedding. We wish to be surrounded by friends and family whom we hold close to our hearts. And as much as we would love to have everyone celebrate with us, we can only accommodate a limited number of guests. </p>
            </div>
          </div>
          <div>
            <h1>2.</h1>
            <div>
              <h2>Am I allowed to take pictures or videos during the ceremony?</h2>
              <p>As we walk down the aisle, we wish to see your faces and smiles (to the best of our imagination under your masks). As such, we would want to keep the solemnity of the ceremony without any distractions from other electronic devices.</p>
              <p>Our amazing photographers and videographers will capture every aspect of our ceremony. We invite you to just sit back, relax, and enjoy being fully present with us. Don’t worry, you may freely use your devices and take photos immediately after the ceremony.</p>
            </div>
          </div>
          <div>
            <h1>3.</h1>
            <div>
              <h2>How will the meals be served at the reception?</h2>
              <p>Banquet servers will be roaming around the ballroom to offer hors d’oeuvres during cocktails. After which, plated dinners will be served per guest while seated at their tables. Buffet service is not allowed at the venue. To ensure the safety of the guests, table cutleries and napkins will be individually packed. Take-out of leftover food is prohibited.</p>
            </div>
          </div>
          <div>
            <h1>4.</h1>
            <div>
              <h2>How do I RSVP?</h2>
              <p>Scrolling down on the homepage will reveal a link which will direct you to the RSVP page. Kindly accomplish the form accurately and correctly. We will need your details in order to consolidate guest details for COVID-testing, catering, seating, and contact tracing purposes.</p>
              <p>Please confirm whether you will be able to attend the wedding or not on or before <strong>November 24, 2021</strong>.</p>
            </div>
          </div>
          <div>
            <h1>5.</h1>
            <div>
              <h2>I already said YES to the RSVP but won’t be able to attend due to an unforeseen event. What should I do?</h2>
              <p>It would be sad that you can no longer attend our wedding, but we completely understand that there are factors that are beyond our control. Please let us know as soon as possible so we can give your allotted seat to other guest/s.</p>
            </div>
          </div>
          <div>
            <h1>6.</h1>
            <div>
              <h2>I initially said NO to the RSVP but had a change of plans; I am now available to attend the event. What should I do?</h2>
              <p>We are so glad that you will be able to celebrate with us! Please join us as we receive the sacrament of matrimony during the church ceremony. However, please understand that your seat for the reception may have been reallocated to another guest. Having said that, please inform us immediately so we can get back to you on the availability of your seat for the reception.</p>
            </div>
          </div>
          <div>
            <h1>7.</h1>
            <div>
              <h2>Do you have a wedding gift registry?</h2>
              <p>We do not have a gift registry.</p>
              <p>As love is what this day is all about, your presence and well wishes are more than anything we could ever ask for. We are truly grateful for your time and effort to be with us. </p>
              <p>But should you insist that a gift is worth giving, a small saving for our future would be a delightful blessing.</p>
              <section className="flex">
                <a href={IsaBPI} download>
                  <img src={IsaBPI} alt="" />
                  <p><strong>BPI</strong></p>
                  <p>Account Name: Ana Isabel A. Añover</p>
                  <p>Account Number: 8239-5865-39</p>
                </a>
                <a href={IsaGcash} download>
                  <img src={IsaGcash} alt="" />
                  <p><strong>Gcash</strong></p>
                  <p>Account Name: Ana Isabel A.</p>
                  <p>09178754283</p>
                </a>
                <a href={JKBDO} download>
                  <img src={JKBDO} alt="" />
                  <p><strong>BDO Pay</strong></p>
                  <p>John Kevin R. Due/Ana Isabel A. Añover</p>
                  <p>0065-0015-2270</p>
                </a>
              </section>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}