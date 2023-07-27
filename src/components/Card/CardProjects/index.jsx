import React from 'react';
import { Link } from 'react-router-dom';

import MainButton from 'components/Button/MainButton';

import {
  CardProjectContainer,
  CardProjectCover,
  CardProjectTitle,
  Tag,
} from './styles';

export default function Card({ project }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <CardProjectContainer>
        <CardProjectCover
          src={`/assets/image/projects/${project.id}/cover.png`}
          alt={project.title}
        />
        <CardProjectTitle>{project.title}</CardProjectTitle>
        {project.tags ? (
          <label>
            {project.tags.map((tag) => (
              <Tag key={tag.id} type={tag.type}>
                {tag.name}
              </Tag>
            ))}
          </label>
        ) : (
          <label>?</label>
        )}
        <MainButton>Ver projeto</MainButton>
      </CardProjectContainer>
    </Link>
  );
}
