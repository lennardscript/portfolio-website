type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "lea.burgoscorv@gmail.com",
  title: "Leandro Burgos Corvalán 👨‍💻",
  description:
    "¡Hola 👋!, Soy un *estudiante de Ingeniería en Informática de Duoc UC.* Desde muy niño he tenido contacto con la informática y tal contacto fue la que me ha *desarrollado una pasión en esta área.* Siempre estoy dispuesto a aprender nuevas cosas en los que me permiten enriquecerme y *crecer profesionalmente* como también mi fuerte participación en la contribución al código libre (Open Source).",
  socials: [
    {
      label: "LinkedIn",
      link: "/",
    },
    {
      label: "GitHub",
      link: "https://github.com/lennardscript",
    },
  ],
};

export default presentation;
