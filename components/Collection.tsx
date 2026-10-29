import SmartImage from "./SmartImage";
import InquireButton from "./InquireButton";
import { products } from "@/data/products";

export default function Collection() {
  return (
    <section className="section collection" id="collection">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="eyebrow">The collection</div>
            <h2>
              Find a little
              <br />
              something lovely.
            </h2>
          </div>
          <p>
            Explore the pieces currently featured by Ecoweave. Message us to ask
            about availability, pricing, and delivery.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.slug}>
              <div className="product-image">
                <SmartImage src={product.image} alt={product.alt} />
              </div>
              <div className="product-body">
                <div className="product-label">{product.label}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className="price">{product.price}</span>
                  <InquireButton className="small-link" productName={product.name}>
                    Inquire ↗
                  </InquireButton>
                </div>
              </div>
            </article>
          ))}

          {/* Coming soon card */}
          <article className="product-card">
            <div className="coming-soon">
              <div className="flower">✿</div>
              <h3>More lovely finds</h3>
              <p>New bags and accessories will be added here as they become available.</p>
            </div>
            <div className="product-body">
              <div className="product-label">Coming soon</div>
              <h3>New arrivals</h3>
              <p>Keep an eye out for the next pieces in our collection.</p>
            </div>
          </article>

          {/* Let's connect card */}
          <article className="product-card">
            <div className="coming-soon">
              <div className="flower">♡</div>
              <h3>Something for you</h3>
              <p>Have a style in mind? Send us a message and let&rsquo;s talk.</p>
            </div>
            <div className="product-body">
              <div className="product-label">Let&apos;s connect</div>
              <h3>Your next favorite</h3>
              <p>Ask about available designs, colors, and details.</p>
              <div className="product-footer">
                <span className="price">Message us</span>
                <a className="small-link" href="#contact">Say hello ↗</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
