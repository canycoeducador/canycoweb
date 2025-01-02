import "./Contact.scss";

function Contact() {
  return (
    <section className="main_sectionContact" id="contact">
      <h3 className="main_sectionContact_title">
        <span className="">06</span> Contacto
      </h3>
      <p className="main_sectionContact_subtitle">Estaré encantado de ayudarte</p>
      <ul className="main_sectionContact_list">
        <li className="main_sectionContact_list-element mail">
          <a href="mailto:patricialobotejedor@gmail.com">
            <i className="far fa-paper-plane"></i>
            <p>email</p>
          </a>
        </li>
        <li className="main_sectionContact_list-element phone">
          <a href="tel:636311105">
            <i className="fas fa-mobile-alt"></i>
            <p>telefono</p>
          </a>
        </li>
        <li className="main_sectionContact_list-element linkedin">
          <a href="https://www.linkedin.com/in/patricia-lobo-tejedor/" target="_blank">
            <i className="fab fa-linkedin"></i>
            <p>redes</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
