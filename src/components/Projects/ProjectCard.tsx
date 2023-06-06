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
import { useInView } from 'react-intersection-observer';
import { fadeInVariant } from "../../utils/animations";


const ProjectCard: FC<IProjectCardProps> = ({ project }) => {

  const [projectsRef, projectsInView] = useInView({
    threshold: .15,
    triggerOnce: true,
  })

  // array of tech used for each project from projectData
  const techList = project.techUsed.map((item) => {
    return (
      <ProjectTech key={item}>
        <TiMinus
          style={{
            margin: "0 5px 1px 10px",
          }}
        />
        <TechList>{item}</TechList>
      </ProjectTech>
    );
  });

  const projectImg = project.image;

  const extraProjectLinks = () => {
    if (!project.altRepoLink) {
      return
    } else if (project.altRepoLink && project.name === "MoneyMinder") {
      return (<p>View original source code <a href={project.altRepoLink} target="_blank">here</a>.</p>)
    } else if (project.altRepoLink && project.name === "QuickR") {
      return (<p>View app demo <a href={project.altRepoLink} target="_blank">here</a>.</p>)
    }
  }

  return (
    <ProjectContainer
    variants={fadeInVariant}
    initial="hidden"
    animate={projectsInView ? "visible" : "hidden"}
    ref={projectsRef}
    >
      <TitleContainer >
        <ProjectTitle>{project.name}</ProjectTitle>
      </TitleContainer>
      <ProjectCardImage projectImg={projectImg}>
        <ProjectCardOverlay />
      </ProjectCardImage>

      {/* --------------------- right side card begins here */}
      <CardBorder>
        <ProjectCardData projectImg={projectImg}>
          <LinkWrapper>
            <ViewCodeIcon
              onClick={() => window.open(`${project.repoLink}`, "_blank")}
            />
            <OpenIcon
              onClick={() => window.open(`${project.liveLink}`, "_blank")}
            />
          </LinkWrapper>
          <ProjectName>{project.name}</ProjectName>
          
          <Description>
            <p>{project.description}</p>
            { extraProjectLinks() }
          </Description>
          
          <CardFooter>{techList}</CardFooter>
        </ProjectCardData>
      </CardBorder>
    </ProjectContainer>
  );
};

export default ProjectCard;
