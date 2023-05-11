import { Route, Routes, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown";

import NotFound from "pages/NotFound";

import PagesModel from "components/PagesModel";
import DefaultPage from "components/DefaultPage";
import Card from "components/Card/CardProjects";

import { PageMarkdownContainer } from "./markdown-styles";
import { TitleOtherProjects, RecommendedProjectsUl } from "./styles";

import projects from "json/projects.json"

export default function Projects() {
  const params = useParams();

  const project = projects.find((project) => {
    return project.id === Number(params.id);
  })

  if (!project) {
    return <NotFound />
  }

  const recommendedProjects = projects
    .filter((project) => project.id !== Number(params.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  
  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={
        <PagesModel
          photoCover={`/assets/image/projects/${project.id}/cover_projects.jpg`}
          title={project.title}
        >
          <PageMarkdownContainer>
            <ReactMarkdown>
              {project.text}
            </ReactMarkdown>
          </PageMarkdownContainer>
          <TitleOtherProjects>Outros projetos que você pode gostar:</TitleOtherProjects>
          <RecommendedProjectsUl>
            {recommendedProjects.map((project) => (
              <li key={project.id}>
                <Card project={project} />
              </li>
            ))}
          </RecommendedProjectsUl>
        </PagesModel>
      } />
      </Route>
    </Routes>
  )
}
