import Card from 'components/Card/CardProjects';

import { HomeProjectsUl } from './styles';

import projects from 'json/projects.json';

export default function Home() {
  return (
    <HomeProjectsUl>
      {projects.map((project) => (
        <li key={project.id}>
          <Card project={project} />
        </li>
      ))}
    </HomeProjectsUl>
  )
}
