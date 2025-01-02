import "./OurHistory.scss";
import CanycoLogo from "../assets/1.png";

function OurHistory() {
  return (
    <section className="main_sectionPhoto" id="home">
      <div className="main_sectionPhoto-wrap">
        <h1 className="main_sectionPhoto-wrap-title">NUESTRA HISTORIA</h1>
        <h2 className="main_sectionPhoto-wrap-subtitle">
          <img src={CanycoLogo} alt="" />
        </h2>
        <p className="main_sectionPhoto-wrap-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis explicabo iusto dicta
          non veritatis vel in iure obcaecati nemo. Porro ex laudantium atque magnam explicabo nulla
          excepturi dolorum alias esse?
        </p>
      </div>
    </section>
  );
}

export default OurHistory;
