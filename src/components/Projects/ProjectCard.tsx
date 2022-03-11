import React, { FC } from "react";
import {
  ProjectCardPlaceholder,
  ProjectCardPlaceholder2,
  ProjectContainer,
} from "./styles";
import { IProjectCardProps } from "../../utils/models";

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectCardPlaceholder>project img</ProjectCardPlaceholder>
      <ProjectCardPlaceholder2>
        <p>{project.name}</p>
      </ProjectCardPlaceholder2>
    </ProjectContainer>
  );
};

export default ProjectCard;
