import React from "react";
import Layout from "../../common/Layout/Layout";
import { workData } from "../../utils/workData";
import WorkCard from "./WorkCard";
import { Underline } from "../About/styles";
import { HeaderContainer } from "../Projects/styles";

const Work = () => {
  const renderWork = workData.map((project) => {
    return <WorkCard key={project.id} project={project} />;
  });

  return (
    <section>
      <Layout>
        <HeaderContainer>
            <h2>Work</h2>
            <Underline />
        </HeaderContainer>
        {renderWork}
      </Layout>
    </section>
  );
};

export default Work;
