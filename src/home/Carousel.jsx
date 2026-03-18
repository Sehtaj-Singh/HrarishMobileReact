import { useEffect, useRef, useState } from "react";

export default function Carousel() {

  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = [
    "/images/is3.webp",
    "/images/is2.webp",
    "/images/is1.webp",
    "/images/is4.webp"
  ];

  const total = slides.length;

  useEffect(() => {

    const track = trackRef.current;
    const slideWidth = track.children[0].offsetWidth;

    const carousel = track.closest(".carousel");
    const offset = (carousel.offsetWidth - slideWidth) / 2;

    track.style.transform =
      `translateX(${-slideWidth * index + offset}px)`;

  }, [index]);

  /* autoplay */

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex(i => (i + 1) % total);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <section className="carousel">

        <div className="carousel-track" ref={trackRef}>

          {slides.map((src, i) => (
            <div
              className={`slide ${i === index ? "active-slide" : ""}`}
              key={i}
            >
              <img src={src} alt={`slide-${i}`} />
            </div>
          ))}

        </div>

      </section>

      <div className="carousel-dots">

        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}

      </div>
    </>
  );
}