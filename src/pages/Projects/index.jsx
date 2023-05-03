import { Route, Routes, useParams } from "react-router-dom"
import projects from "json/projects.json"
import ReactMarkdown from "react-markdown";

import './Projects.css'
import styles from './Projects.module.css'

import PagesModel from "components/PagesModel";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import Card from "components/Card/CardProjects";

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
          <div className="page-markdown-container">
            <ReactMarkdown>
              {project.text}
            </ReactMarkdown>
          </div>
          <h2 className={styles.titleOtherProjects}>Outros projetos que você pode gostar:</h2>
          <ul className={styles.recommendedProjects}>
            {recommendedProjects.map((project) => (
              <li key={project.id}>
                <Card project={project} />
              </li>
            ))}
          </ul>
        </PagesModel>
      } />
      </Route>
    </Routes>
  )
}
