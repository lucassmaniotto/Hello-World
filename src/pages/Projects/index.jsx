import { Route, Routes, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import NotFound from 'pages/NotFound';

import PagesModel from 'components/PagesModel';
import DefaultPage from 'components/DefaultPage';
import Card from 'components/Card/CardProjects';

import { PageMarkdownContainer } from './markdown-styles';
import { TitleOtherProjects, RecommendedProjectsUl } from './styles';

import projects_ptBR from 'json/projects_ptBR.json';
import projects_en from 'json/projects_en.json';
import projects_fr from 'json/projects_fr.json';

export default function Projects() {
  const params = useParams();
  const { t } = useTranslation();

  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'ptBR';

  const projectsData =
    selectedLanguage === 'ptBR'
      ? projects_ptBR
      : selectedLanguage === 'en'
      ? projects_en
      : projects_fr;

  const project = projectsData.find((project) => {
    return project.id === Number(params.id);
  });

  if (!project) {
    return <NotFound />;
  }

  const recommendedProjects = projects_ptBR
    .filter((project) => project.id !== Number(params.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PagesModel
              photoCover={`/assets/image/projects/${project.id}/cover_projects.jpg`}
              title={project.title}
            >
              <PageMarkdownContainer>
                <ReactMarkdown>{project.text}</ReactMarkdown>
              </PageMarkdownContainer>
              <TitleOtherProjects>{t('article-sugestion')}</TitleOtherProjects>
              <RecommendedProjectsUl>
                {recommendedProjects.map((project) => (
                  <li key={project.id}>
                    <Card project={project} />
                  </li>
                ))}
              </RecommendedProjectsUl>
            </PagesModel>
          }
        />
      </Route>
    </Routes>
  );
}
