import { useEffect, useState } from "react";

import Header from "../home/Header";
import NewMobiles from "../home/NewMobile";
import Footer from "../home/Footer";

import ProductGallery from "./ProductGallery";
import ProductMainInfo from "./ProductMainInfo";
import ProductSpecs from "./ProductSpecs";
import PaymentSection from "./PaymentSection";
import Assurance from "./Assurance";
import Delivery from "./Delivery";
import PaymentOptions from "./PaymentOptions"

const slug = new URLSearchParams(window.location.search).get("slug");

export default function Mobile({ slug }) {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const projectId = "m6ggu8sz";
    const dataset = "production";

    const query = encodeURIComponent(`
      *[_type == "mobile" && slug.current == "${slug}"][0]{
        Name,
        cardData,
        mrp,
        discount,
        price,
        rating,
        razorpayButtonId,
        specs,
        "images": detailImages[].asset->url
      }
    `);

    const url = `https://${projectId}.api.sanity.io/v2023-01-01/data/query/${dataset}?query=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMobile(data.result));
  }, [slug]);

  if (!mobile) return <p>Loading...</p>;

  return (
     <div id="mobile-page">
      <Header />

      <section className="product-container">
        
        <div className="product-gallery-wrap">
          <ProductGallery images={mobile.images} />
        </div>

        
        <div className="product-data">
          <ProductMainInfo mobile={mobile} />
          
          <Delivery />
          <ProductSpecs specs={mobile.specs} />
          <PaymentSection mobile={mobile} />
          <Assurance />
          <PaymentOptions />
          <NewMobiles excludeSlug={slug} />
        </div>
      </section>

      {/* <Footer /> */}

      
    </div>
  );
}
