import { useEffect, useState } from "react";
import "./OurHistory.scss";

function OurHistory() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="main_section history" id="home">
      <div className="main_section-background"></div>
      <div className="main_section-banner parallax">
        <div className="background"></div>
        <h1
          className="title"
          style={{
            transform: `translateY(${scrollY * 0.9}px)`,
          }}
        >
          Ayudo a fortalecer el vínculo entre las personas y sus perros
        </h1>
      </div>
      <div className="main_section-info">
        <div className="anillas"></div>
        <div className="cuaderno">
          <h3 className="main_section-title title">Nuestra historia</h3>
          <p className="description intro">
            Soy Sorin y él es Thor 🐾, mi fiel compañero desde hace 8 años. Muchos de vosotros ya
            nos conocéis, pero desde aquí queremos contaros algo especial: hemos dado el salto
            juntos a esta nueva aventura como educador canino. Después de años aprendiendo juntos,
            para después compartir experiencias con otros perros en protectora y por último realizar
            la formación de educador canino de Tecnican, 📚he decidido convertir esta pasión en algo
            más grande.
          </p>
          <p className="description other">
            Mi misión es que guías y perros trabajen en equipo para entenderse mejor y disfrutar
            juntos de una vida equilibrada. 🐕❤️ Los que me conocéis sabéis que Thor es mi mayor
            inspiración en este camino, y me acompaña en cada paso. 🐾 Gracias a quienes ya nos
            habéis apoyado en este viaje. Si tienes un peludo en casa y tienes algún problema o
            solamente quieres ayuda para fortalecer vuestro vínculo, ¡estamos aquí para ello! 🐾
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurHistory;
