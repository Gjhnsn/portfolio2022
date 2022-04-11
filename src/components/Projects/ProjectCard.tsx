import React, { FC } from "react";
import {
  CardFooter,
  Description,
  LinkWrapper,
  ProjectCardData,
  ProjectCardImage,
  ProjectContainer,
  ProjectName,
  ProjectTech,
  TechList,
  ProjectCardOverlay,
  ProjectTitle,
  TitleContainer,
  CardBorder,
  OpenIcon,
  ViewCodeIcon,
} from "./styles";
import { IProjectCardProps } from "../../utils/models";
import { TiMinus } from "react-icons/ti";

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  // array of tech used for each project from projectData
  const techList = project.techUsed.map((item) => {
    return (
      <ProjectTech key={item}>
        <TiMinus
          style={{
            margin: "0 5px 0 10px",
          }}
        />
        <TechList>{item}</TechList>
      </ProjectTech>
    );
  });

  const projectImg = project.image;

  return (
    <ProjectContainer>
      <TitleContainer>
        <ProjectTitle>{project.name}</ProjectTitle>
      </TitleContainer>
      <ProjectCardImage projectImg={projectImg}>
        <ProjectCardOverlay />
      </ProjectCardImage>

      {/* --------------------- right side card begins here */}
      <CardBorder>
        <ProjectCardData>
          <LinkWrapper>
            <ViewCodeIcon onClick={() => window.open(`${project.repoLink}`, '_blank') } />
            <OpenIcon onClick={() => window.open(`${project.liveLink}`, '_blank')} />
          </LinkWrapper>
          <ProjectName>{project.name}</ProjectName>
          <Description>
            <p>{project.description}</p>
          </Description>
          <CardFooter>{techList}</CardFooter>
        </ProjectCardData>
      </CardBorder>
    </ProjectContainer>
  );
};

export default ProjectCard;
