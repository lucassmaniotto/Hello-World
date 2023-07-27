import React from 'react';
import Card from 'components/Card/CardProjects';

import projects_ptBR from 'json/projects_ptBR.json';
import projects_en from 'json/projects_en.json';
import projects_fr from 'json/projects_fr.json';
import { HomeProjectsUl } from './styles';

export default function Home() {
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'ptBR';

  const projectsData =
    selectedLanguage === 'ptBR'
      ? projects_ptBR
      : selectedLanguage === 'en'
      ? projects_en
      : projects_fr;

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
