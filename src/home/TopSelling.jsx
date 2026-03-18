import { useEffect, useState } from "react";

export default function TopSelling() {

  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {

    const projectId = "m6ggu8sz";
    const dataset = "production";

    const query = encodeURIComponent(`
      *[_type == "mobile" && category == "top"]{
        _id,
        Name,
        slug,
        price,
        "imageUrl": cardImage.asset->url
      }
    `);

    const url = `https://${projectId}.api.sanity.io/v2023-01-01/data/query/${dataset}?query=${query}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMobiles(data.result || []);
      })
      .catch(err => {
        console.error("Sanity fetch error:", err);
      });

  }, []);

  return (

    <section id="top-seller" className="top-sellers">

      <h2 className="section-title">Top Selling</h2>

      <div className="mobile-grid">

        {mobiles.map((mobile) => (

          <a
            key={mobile._id}
            className="mobile-card"
            href={`?slug=${mobile.slug?.current}`}
          >

            <div className="mobile-image">

              <img
                src={mobile.imageUrl}
                alt={mobile.Name}
                loading="lazy"
              />

            </div>

            <h3 className="mobile-title">
              {mobile.Name}
            </h3>

            <p className="mobile-price">
              ₹{mobile.price?.toLocaleString("en-IN")}
            </p>

          </a>

        ))}

      </div>

    </section>

  );

}