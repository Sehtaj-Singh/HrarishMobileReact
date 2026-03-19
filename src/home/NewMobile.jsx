import { useEffect, useState } from "react";

export default function NewMobiles({ excludeSlug }) {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    const projectId = "m6ggu8sz";
    const dataset = "production";

    const query = encodeURIComponent(`
      *[_type == "mobile" && category == "new"]{
        _id,
        Name,
        slug,
        cardData,
        mrp,
        discount,
        price,
        rating,
        "imageUrl": cardImage.asset->url
      }
    `);

    const url = `https://${projectId}.api.sanity.io/v2023-01-01/data/query/${dataset}?query=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMobiles(data.result || []);
      });
  }, []);

  return (
    <section id="bn-mobile" className="bn-section seeatdetail">
      <div className="bn-wrapper">
        <h2 className="bn-title">New Mobiles</h2>

        <div className="bn-slider-wrapper">
          <div id="bnSlider" className="bn-slider">
            {mobiles
              .filter((item) => item.slug?.current !== excludeSlug)
              .map((item) => {
                const rating = item.rating || 0;
                const fullTitle = `${item.Name || ""} ${item.cardData || ""}`;

                return (
                  <a
                    key={item._id}
                    className="MobileCard"
                    href={`?slug=${item.slug.current}`}
                  >
                    <img
                      className="cardLogo"
                      src="/images/cardLogo1.webp"
                      alt="Harish Mobile"
                    />

                    <div id="card-image">
                      {item.imageUrl && (
                        <img
                          className="mobileImage"
                          src={item.imageUrl}
                          alt={fullTitle}
                          loading="lazy"
                        />
                      )}
                    </div>

                    <div id="card-details">
                      <h3 id="card-name">{fullTitle}</h3>

                      <p className="mobileRating">
                        <span className="star-wrapper">
                          <span className="stars-empty">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </span>

                          <span
                            className="stars-filled"
                            style={{ width: `${(rating / 5) * 100}%` }}
                          >
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </span>
                        </span>

                        <span className="rating-number">
                          {rating.toFixed(1)}/5
                        </span>
                      </p>

                      <div id="card-discout">
                        <div className="mobileDiscount">
                          -{item.discount || 0}%
                        </div>

                        <div className="mobileMRP">
                          ₹{item.mrp?.toLocaleString("en-IN")}
                        </div>
                      </div>

                      <div className="finalPriceWrap">
                        <div id="ribbon-wrap">
                          <div className="finalPrice">
                            ₹{item.price?.toLocaleString("en-IN")}
                          </div>
                        </div>

                        <div className="cornerRibbonLeft"></div>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}