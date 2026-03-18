import { useRef, useState } from "react";

export default function ProductGallery({ images }) {

  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="product-gallery">

      <div className="pg-carousel">

        <button className="pg-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="pg-track-wrapper">
          <div
            className="pg-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images?.map((img, i) => (
              <div className="pg-slide" key={i}>
                <img src={img} alt={`mobile-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="pg-btn next" onClick={nextSlide}>
          &#10095;
        </button>

      </div>

    </section>
  );
}