export default function Contact() {
  return (
    <>
      <h2 id="contact-title">Contact Us</h2>

      <section id="contact" className="contact-section">

        <div id="contact-conatiner">

          <img id="map" src="/images/location.webp" alt="map" loading="lazy" />

          <div className="contact-icons">

            <a href="tel:8572002626" className="contact-icon">
              <div className="ribon-name">
                <i className="fa-solid fa-phone"></i>
                <h3>Phone</h3>
              </div>
              85720 02626
            </a>

            <a href="mailto:harishmobile49@gmail.com" className="contact-icon">
              <div className="ribon-name">
                <i className="fa-solid fa-envelope"></i>
                <h3>Email</h3>
              </div>
              harishmobile49@gmail.com
            </a>

            <a href="https://wa.me/918572002626" className="contact-icon">
              <div className="ribon-name">
                <i className="fa-brands fa-whatsapp"></i>
                <h3>Whatsapp</h3>
              </div>
              85720 02626
            </a>

          </div>

        </div>

        <form className="contact-form">
          <h3 className="form-title">Message Us</h3>

          <img id="conatct" src="/images/contact.webp"></img>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </section>
    </>
  );
}