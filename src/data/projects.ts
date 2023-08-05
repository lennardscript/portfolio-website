export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Mi segundo portafolio",
    techs: ["ReactJS (NextJS)", "Tailwind CSS"],
    link: "https://github.com/lennardscript/my-portfolio",
  },
  {
    title: "Proyecto Android / Desarrollo de aplicaciones Android",
    techs: ["Kotlin"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
