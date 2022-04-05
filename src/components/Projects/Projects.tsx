import React from "react";
import Layout from "../../common/Layout/Layout";
import { Underline } from "../About/styles";
import { HeaderContainer } from "./styles";
import ProjectCard from "./ProjectCard";
import { projectData } from "../../utils/projectData";

const Projects = () => {
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
        <HeaderContainer>
          <h2>Projects</h2>
          <Underline />
        </HeaderContainer>
        {renderProjects()}
      </Layout>
    </section>
  );
};

export default Projects;
