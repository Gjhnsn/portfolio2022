import React from "react";
import Layout from "../../../components/Layout/Layout";
import { Underline } from "../About/styles";
import { HeaderContainer } from "./styles";
import ProjectCard from "./ProjectCard";
import { projectData } from "../../../utils/projectData";
import { useInView } from "react-intersection-observer";
import { fadeInVariant } from "../../../utils/animations";

const Projects = () => {
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  // map through project data to render cards
  const renderProjects = () => {
    const cards = projectData.map((project) => {
      return <ProjectCard key={project.id} project={project} />;
    });
    return cards;
  };

  return (
    <section id="projects">
      <Layout>
        <HeaderContainer
          variants={fadeInVariant}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          ref={projectsRef}
        >
          <h2>Projects</h2>
          <Underline />
        </HeaderContainer>
        {renderProjects()}
      </Layout>
    </section>
  );
};

export default Projects;
