import SmartImage from "./SmartImage";

export default function Story() {
  return (
    <section className="section" id="story">
      <div className="section-inner story">
        <div className="story-mark">
          <SmartImage
            src="/Ecoweave_logo.jpeg"
            alt="Ecoweave logo with floral accents and denim bag illustration"
            fallback="/placeholder-logo.svg"
          />
        </div>
        <div>
          <div className="eyebrow">A little about us</div>
          <h2>
            Small details.
            <br />
            Personal style.
          </h2>
          <p>
            Welcome to Ecoweave Bags n Accessories Shop — a little corner for
            bags and accessories that bring character to your everyday look.
            From denim textures to delicate trims, we love the details that make
            a piece feel special.
          </p>
          <p>
            Whether you&rsquo;re looking for an everyday carryall or a cute
            accent for your outfit, we&rsquo;d love to help you find a piece
            you&rsquo;ll enjoy carrying.
          </p>
          <div className="values">
            <div className="value">
              <b>Thoughtful style</b>
              <span>Details that catch the eye</span>
            </div>
            <div className="value">
              <b>Everyday charm</b>
              <span>Made to fit your look</span>
            </div>
            <div className="value">
              <b>Personal service</b>
              <span>Just send us a message</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
