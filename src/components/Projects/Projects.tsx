import React from "react";
import Layout from "../../common/Layout/Layout";
import { Underline } from "../About/styles";
import {
  HeaderContainer,
  ProjectCardPlaceholder,
  ProjectCardPlaceholder2,
  ProjectContainer,
} from "./styles";

const Projects = () => {
  return (
    <Layout>
      <HeaderContainer>
        <h2>Projects</h2>
        <Underline />
      </HeaderContainer>
      <ProjectContainer>
        <ProjectCardPlaceholder id="2">project img</ProjectCardPlaceholder>
        <ProjectCardPlaceholder2>
          <p>Project data</p>
        </ProjectCardPlaceholder2>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectCardPlaceholder id="2">project img</ProjectCardPlaceholder>
        <ProjectCardPlaceholder2>
          <p>Project data</p>
        </ProjectCardPlaceholder2>
      </ProjectContainer>
    </Layout>
  );
};

export default Projects;
