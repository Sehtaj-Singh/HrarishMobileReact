export default function Delivery() {

  const today = new Date();

  // add 8 days
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 8);

  // Day name
  const day = deliveryDate.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  // Month name
  const month = deliveryDate.toLocaleDateString("en-IN", {
    month: "long",
  });

  const year = deliveryDate.getFullYear();
  const date = deliveryDate.getDate();

  // ordinal (1st, 2nd, 3rd...)
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const formattedDate = `${day}, ${date}${getOrdinal(date)} ${month} ${year}`;

  return (
    <section className="delivery-section">

      <h2 className="delivery-title">Estimated Delivery :</h2>

      <div className="delivery-text">

        <img src="/images/truck1.webp" alt="delivery" />

        <p>{formattedDate}</p>

      </div>

    </section>
  );
}