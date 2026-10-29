import SmartImage from "./SmartImage";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <div className="eyebrow">Everyday style, with a softer touch</div>
        <h1>
          A little charm.
          <br />A lot of <em>personality.</em>
        </h1>
        <p className="hero-copy">
          Meet your next everyday favorite. Ecoweave brings together charming
          bags and accessories with thoughtful details, playful textures, and a
          touch of handmade-inspired sweetness.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#collection">
            Explore the collection <span>→</span>
          </a>
          <a className="button button-outline" href="#story">
            Get to know us
          </a>
        </div>
        <div className="trust-row">
          <span>Charming details</span>
          <span>Everyday-friendly</span>
          <span>Made to stand out</span>
        </div>
      </div>
      <div className="hero-art">
        <span className="sparkle one">✦</span>
        <span className="sparkle two">✧</span>
        <div className="hero-photo-wrap">
          <SmartImage
            className="hero-photo"
            src="/bag1.jpeg"
            alt="Blue denim tote bag decorated with a cream lace bow and denim handles"
            priority
          />
        </div>
        <div className="floating-note">
          <strong>Your new daily favorite</strong>
          <span>Denim texture · Delicate lace · Unique details</span>
        </div>
      </div>
    </section>
  );
}
