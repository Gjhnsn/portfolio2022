import React from "react";
import Layout from "../../common/Layout/Layout";
import { workData } from "../../utils/workData";
import WorkCard from "./WorkCard";
import { Underline } from "../About/styles";
import { HeaderContainer } from "../Projects/styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInVariant } from "../../utils/animations";

const Work = () => {
  const renderWork = workData.map((project) => {
    return <WorkCard key={project.id} project={project} />;
  });

  const [workRef, workInView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.section 
      id="contact"
      variants={fadeInVariant}
      initial="hidden"
      animate={workInView ? "visible" : "hidden"}
      ref={workRef}
      >
      <Layout>
        <HeaderContainer  style={{marginBottom: '15px'}}>
            <h2>Work</h2>
            <Underline />
        </HeaderContainer>
        {renderWork}
      </Layout>
    </motion.section>
  );
};

export default Work;
