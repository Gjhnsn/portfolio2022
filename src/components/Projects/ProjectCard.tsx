import React, { FC } from "react";
import {
  CardFooter,
  Description,
  IconPlaceHolder,
  LinkWrapper,
  ProjectCardData,
  ProjectCardImage,
  ProjectContainer,
  ProjectName,
  ProjectTech,
} from "./styles";
import { IProjectCardProps } from "../../utils/models";

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  
    const tech = project.techUsed.map(i => `#${i} `) 

  return (
    <ProjectContainer>
      <ProjectCardImage>project img</ProjectCardImage>
      <ProjectCardData>
        <LinkWrapper>
          <IconPlaceHolder />
          <IconPlaceHolder />
        </LinkWrapper>
        <ProjectName>{project.name}</ProjectName>
        <Description>
          <p>{project.description}</p>
        </Description>
        <CardFooter>
          <ProjectTech>{tech}</ProjectTech>
        </CardFooter>
      </ProjectCardData>
    </ProjectContainer>
  );
};

export default ProjectCard;
