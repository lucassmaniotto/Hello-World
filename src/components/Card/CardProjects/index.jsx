import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainButton from "../../Button/MainButton";

import { PROJECTS_IMAGES } from "../../../assets/images/Images";

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
          src={PROJECTS_IMAGES(project.id).cover_card}
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
