import "./Activities.scss";
import canycoCourse from "../assets/9.png";

function Activities() {
  return (
    <section className="main_section activities" id="activities">
      <h3 className="main_section-title">Últimas actividades y cursos</h3>
      <a href="https://www.instagram.com/p/DGpxKe-tMFO/?hl=es&img_index=1">
        <img src={canycoCourse} alt="" />
      </a>
    </section>
  );
}

export default Activities;
