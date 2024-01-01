export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Mi segundo portafolio",
    techs: ["React (Next)", "Tailwind CSS"],
    link: "https://github.com/lennardscript/my-portfolio",
  },
  {
    title: "Proyecto Android - Desarrollo de aplicaciones Android",
    techs: ["Kotlin"],
    link: "https://github.com/lennardscript/DarkSoulsApp",
  },
  {
    title: "Proyecto Capstone - ShopFleet",
    techs: ["HTML5", "CSS3", "Tailwind CSS", "TypeScript", "Node.js", "React", "PHP", "Laravel", "PostgreSQL", "Docker"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
