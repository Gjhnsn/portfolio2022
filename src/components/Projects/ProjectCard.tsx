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

  console.log(project.image)
  const projectImg = project.image;


  return (
    <ProjectContainer>

      {/* project image to be placed below */}
      {/* <ProjectCardImage style={{backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.65), rgba(18, 18, 18, 0.55)), url(${img})`}}>project img</ProjectCardImage> */}
      <ProjectCardImage projectImg={projectImg} >project img</ProjectCardImage>

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
