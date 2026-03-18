import { useEffect } from "react";

export default function PaymentSection({ mobile }) {
  useEffect(() => {
    if (!mobile?.razorpayButtonId) return;

    const container = document.getElementById("razorpay-container");
    if (!container) return;

    container.innerHTML = "";

    const form = document.createElement("form");

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute(
      "data-payment_button_id",
      mobile.razorpayButtonId
    );
    script.async = true;

    form.appendChild(script);
    container.appendChild(form);
  }, [mobile]);

  return (
    <section className="payment-section">
      
      {/* ===== PRICE CONTAINER ===== */}
      <div className="payment-price-box">

        <div className="price-top">
          <span className="payment-mrp">
            ₹{mobile.mrp?.toLocaleString("en-IN")}
          </span>

          <span className="payment-discount">
            -{mobile.discount}%
          </span>
        </div>

        <div className="payment-final-price">
          ₹{mobile.price?.toLocaleString("en-IN")}
        </div>

      </div>

      {/* ===== RAZORPAY BUTTON ===== */}
      <div
        id="razorpay-container"
        className="payment-button-box"
      ></div>

    </section>
  );
}