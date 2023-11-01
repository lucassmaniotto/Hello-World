import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainButton from "../../Button/MainButton";

import {
  CardProjectContainer,
  CardProjectCover,
  CardProjectTitle,
  Tag,
} from "./styles";

export default function Card({ project }) {
  const { t } = useTranslation();

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
        <MainButton>{t("see-projects")}</MainButton>
      </CardProjectContainer>
    </Link>
  );
}
