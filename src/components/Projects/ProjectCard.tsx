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
  TechList,
} from "./styles";
import { IProjectCardProps } from "../../utils/models";
import { TiMinus } from "react-icons/ti";

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  // array of tech used for each project from projectData
  const techList = project.techUsed.map((item) => {
    return (
      <ProjectTech>
        <TiMinus
          style={{
            margin: "0 5px 0 10px",
          }}
        />
        <TechList>{item}</TechList>
      </ProjectTech>
    );
  });

  return (
    <ProjectContainer>
      {/* projec image to be placed below */}
      <ProjectCardImage>project img</ProjectCardImage>
      <ProjectCardData>
        <LinkWrapper>
          {/* icon links to replace placeholders below */}
          <IconPlaceHolder />
          <IconPlaceHolder />
        </LinkWrapper>
        <ProjectName>{project.name}</ProjectName>
        <Description>
          <p>{project.description}</p>
        </Description>
        <CardFooter>{techList}</CardFooter>
      </ProjectCardData>
    </ProjectContainer>
  );
};

export default ProjectCard;
