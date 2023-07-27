import React from 'react';
import Badge from 'components/Badge/TechBadge';

import { TechContainer } from './styles';

export default function TecnologiesGrid() {
  return (
    <TechContainer>
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        name="HTML5"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        name="CSS3"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        name="JavaScript"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        name="TypeScript"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        name="React"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        name="Java"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        name="C"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        name="Python"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        name="Node.js"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        name="Express"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        name="MS SQL Server"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
        name="SQLite"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        name="PostgreSQL"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        name="Docker"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        name="Git"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        name="GitHub"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
        name="GitLab"
      />
      <Badge
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        name="Figma"
      />
    </TechContainer>
  );
}
