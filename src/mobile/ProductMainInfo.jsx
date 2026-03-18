export default function ProductMainInfo({ mobile }) {
  const rating = mobile.rating || 0;

  console.log("FULL MOBILE:", mobile);
  console.log("SPECS:", mobile.specs);

  return (
    <section className="product-main-info">
      <h1 id="productName">{mobile.Name}</h1>

      {/* ✅ FIXED RATING */}
      <div className="mobileRating atDetail">
        Rating :
        <span className="star-wrapper starAtDetail">
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
        {/* optional rating number */}
        <span className="rating-number">{rating.toFixed(1)}/5</span>
      </div>

      <div className="product-variants">
        <div className="variant-item">
          <span className="variant-label">RAM :</span>
          <span className="variant-value">
            {mobile.specs?.memory?.ram || "—"}
          </span>
        </div>

        <div className="variant-item">
          <span className="variant-label">Storage :</span>
          <span className="variant-value">
            {mobile.specs?.memory?.storage || "—"}
          </span>
        </div>

        <div className="variant-item">
          <span className="variant-label">Color :</span>
          <span className="variant-value">
            {mobile.specs?.design?.color || "—"}
          </span>
        </div>
      </div>

      <div className="price-section-main">
        {/* Discount */}
        <span className="discount">-{mobile.discount}%</span>

        {/* MRP (cut) */}
        <span className="mrp">₹{mobile.mrp?.toLocaleString()}</span>

        {/* Final Price */}
        <span className="price">₹{mobile.price?.toLocaleString()}</span>
      </div>
    </section>
  );
}
