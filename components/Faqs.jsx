import "./Faqs.scss";

function Faqs() {
  return (
    <section className="main_sectionContact" id="contact">
      <h3 className="main_sectionContact_title">
        <span className="">04</span> Faqs
      </h3>
      <p className="main_sectionContact_subtitle">preguntas frecuentes</p>
      <ul className="main_sectionContact_list">
        <li className="main_sectionContact_list-element mail">
          <a href="mailto:patricialobotejedor@gmail.com">
            <i className="far fa-paper-plane"></i>
            <p>lista 1</p>
          </a>
        </li>
        <li className="main_sectionContact_list-element phone">
          <a href="tel:636311105">
            <i className="fas fa-mobile-alt"></i>
            <p>lista 2</p>
          </a>
        </li>
        <li className="main_sectionContact_list-element linkedin">
          <a href="https://www.linkedin.com/in/patricia-lobo-tejedor/" target="_blank">
            <i className="fab fa-linkedin"></i>
            <p>lista 3</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Faqs;
