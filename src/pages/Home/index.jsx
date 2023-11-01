import Card from "../../components/Card/CardProjects";

import projects_ptBR from "../../i18n/translations/projects_ptBR.json";
import projects_en from "../../i18n/translations/projects_en.json";
import projects_es from "../../i18n/translations/projects_es.json";
import HomeProjectsUl from "./styles";

export default function Home() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "ptBR";

  const projectsData =
    selectedLanguage === "ptBR"
      ? projects_ptBR
      : selectedLanguage === "en"
      ? projects_en
      : projects_es;

  return (
    <HomeProjectsUl key={projectsData.id}>
      {projectsData.map((project) => (
        <li key={project.id}>
          <Card project={project} />
        </li>
      ))}
    </HomeProjectsUl>
  );
}
