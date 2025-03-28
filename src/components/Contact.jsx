import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className="main_section contact" id="contact">
      <div className="valla">
        <div className="travesano"></div>
        <div className="travesano"></div>
        <div className="tabla"></div>
        <div className="tabla"></div>
        <div className="tabla"></div>
        <div className="tabla"></div>
        <div className="tabla"></div>
        <div className="tabla"></div>
        <div className="tabla"></div>
        <div className="tabla"></div>
      </div>

      <div className="contact-board">
        <div className="clavo clavo-top-left"></div>
        <div className="clavo clavo-top-right"></div>
        <div className="clavo clavo-bottom-left"></div>
        <div className="clavo clavo-bottom-right"></div>
        <h3 className="main_section-title">Contacto</h3>
        <ul className="main_sectionContact_list">
          <li className="main_sectionContact_list-element mail">
            <a href="mailto:canycoeducador@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>canycoeducador@gmail.com</p>
            </a>
          </li>
          <li className="main_sectionContact_list-element phone">
            <a href="tel:677609222">
              <FontAwesomeIcon icon={faMobileAlt} />
              <p>677 609 222</p>
            </a>
          </li>
          <li className="main_sectionContact_list-element linkedin">
            <a
              href="https://www.instagram.com/canycoeducador"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCircleUser} />
              <p>@canycoeducador</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
