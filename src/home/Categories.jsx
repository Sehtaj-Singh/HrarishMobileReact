import { useEffect } from "react";

export default function Categories() {

  useEffect(() => {
    const elements = document.querySelectorAll(".cat-content");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.8 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <section className="categories">
      <h2 id="cat-title">Categories</h2>

      <div className="cat-container">

        {/* ===== REFURB ===== */}
        <div className="cat-box cat-refurb ">
          <div className="cat-img">
            <img src="/images/cat-refu.jpg" alt="Refurbished Mobile" />
          </div>

          <div className="cat-content refurb">
            <h3>Refurbished Mobile</h3>
            
            <p className="cat-desc">
              Tested and certified phones at lower prices with warranty.
            </p>
          </div>
        </div>


        {/* ===== NEW ===== */}
        <div className="cat-box cat-new">
          <div className="cat-content new">
            <h3>New Mobile</h3>
            
            <p className="cat-desc">
              Latest smartphones with full warranty and original accessories.
            </p>
          </div>

          <div className="cat-img">
            <img src="/images/cat-new.jpg" alt="New Mobile" />
          </div>
        </div>


        {/* ===== ACCESSORY ===== */}
        <div className="cat-box cat-accessory">

          <h3>Assessory</h3>

          

        </div>

      </div>
    </section>
  );
}