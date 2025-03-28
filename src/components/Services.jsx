import { useState } from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faSliders,
  faDog,
  faHouseChimney,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null); // Estado para rastrear qué tarjeta está volteada

  const handleFlip = (index) => {
    // Si la tarjeta ya está volteada, deshaz el flip; de lo contrario, voltea la nueva tarjeta
    setFlippedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const services = [
    {
      icon: faChalkboardUser,
      title: "Clases de obediencia básica",
      description:
        "Enseñamos las órdenes fundamentales como por ejemplo “paseo”, “quieto” y “llamada” para una comunicación clara y efectiva.",
    },
    {
      icon: faSliders,
      title: "Modificación de conducta",
      description:
        "Si tu perro tiene comportamientos problemáticos, trabajaremos para cambiar esos hábitos y promover un comportamiento positivo.",
    },
    {
      icon: faDog,
      title: "Socialización canina",
      description:
        "Ayudamos a que tu perro se relacione de forma amigable con otros perros y personas, reduciendo miedos o agresividad.",
    },
    {
      icon: faHouseChimney,
      title: "Entrenamiento a domicilio",
      description:
        "¡Desde la comodidad de tu hogar! El entrenamiento en su entorno familiar es ideal para que el perro se sienta más relajado y aprenda mejor.",
    },
    {
      icon: faPaw,
      title: "Programa para cachorros",
      description:
        "Un programa diseñado para guiar el desarrollo de tu cachorro, asegurando buenos hábitos desde el principio.",
    },
  ];

  return (
    <section className="main_section services" id="services">
      <h3 className="main_section-title">Servicios</h3>
      <p className="main_section-subtitle">
        A continuación podéis encontrar los servicios necesarios para que tu compañero y tú
        aprendais y crezcais como equipo
      </p>
      <ul className="main_section_list">
        {services.map((service, index) => (
          <li key={index} className="main_section_list-element" onClick={() => handleFlip(index)}>
            <div className={`card ${flippedCardIndex === index ? "flipped" : ""}`}>
              <div className="card-front">
                <FontAwesomeIcon icon={service.icon} />
                <h3>{service.title}</h3>
              </div>
              <div className="card-back">
                <p>{service.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
