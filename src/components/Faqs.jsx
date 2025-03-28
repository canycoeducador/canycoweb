import { useState } from "react";
import "./Faqs.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Faqs() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <section className="main_section faqs" id="faqs">
      <h3 className="main_section-title">Preguntas frecuentes</h3>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} id="panel1">
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            ¿Necesito tener conocimientos previos antes de la primera sesión?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          No es necesario tener conocimientos previos. Antes de nuestra primera sesión presencial,
          te enviaré un formulario para conocer en profundidad a tu perro y a ti. Una vez
          completado, tendremos una breve llamada telefónica para explicarte todos los detalles que
          deberás tener en cuenta antes de la sesión inicial.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} id="panel2">
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">¿Es posible tener una sesión a domicilio?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Sí, evaluamos cada caso de forma individual. Si es necesario trabajar ciertos aspectos en
          el propio domicilio, podemos realizar la sesión en tu hogar.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} id="panel3">
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">
            Si vivo lejos, ¿podemos realizar las sesiones de forma online?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Dependerá de la situación. Algunos casos requieren un enfoque presencial, pero en otros es
          posible trabajar con pautas y realizar un seguimiento online. Esto se valorará durante la
          evaluación inicial.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} id="panel4">
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span">¿Cuánto dura cada sesión de entrenamiento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Cada sesión tiene una duración aproximada de 1 hora a 1 hora y 15 minutos.
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Faqs;
