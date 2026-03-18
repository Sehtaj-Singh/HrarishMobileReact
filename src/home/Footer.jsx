export default function Footer() {
  return (
    <>
      <footer className="hm-footer">

        <div className="hm-footer-container">

          <div className="hm-footer-col hm-footer-brand">
            <img src="/images/cardLogo1.webp" id="footer-img" />
            <p className="hm-footer-about">
              Your trusted destination for the latest smartphones,
              accessories and unbeatable offers.
            </p>
          </div>

          <div className="hm-footer-col">
            <h3 className="hm-footer-heading">Quick Links</h3>

            <ul className="hm-footer-list">
              <li><a href="#bn-mobile">Brand New Mobiles</a></li>
              <li><a href="#top-seller">Top Sellers</a></li>
              <li><a href="#repair">Repair</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="hm-footer-col">
            <h3 className="hm-footer-heading">Contact</h3>

            <ul className="hm-footer-list footer-contact">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Sant nagar, Sirsa, Haryana
              </li>

              <li>
                <i className="fa-solid fa-phone"></i>
                +91 85720 02626
              </li>

              <li>
                <i className="fa-solid fa-envelope"></i>
                harishmobile49@gmail.com
              </li>
            </ul>
          </div>

        </div>

      </footer>

      <div className="hm-footer-bottom">
        © {new Date().getFullYear()} Harish Mobile. All rights reserved.
      </div>
    </>
  );
}