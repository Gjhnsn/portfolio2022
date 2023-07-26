import React, { FC } from "react";
import { IWorkCardProps } from "../../utils/models";
import {
  Card,
  MutedText,
  ContentText,
  TechList,
  FlexContainer,
  LinkBox,
} from "./styles";
import { MdOpenInNew } from "react-icons/md";

const WorkCard: FC<IWorkCardProps> = ({ project }) => {
  const techList = project.techUsed.map((tech) => (
    <MutedText className="tech" key={tech}>
      {tech}
    </MutedText>
  ));

  return (
    <Card>
      <h3>{project.title}</h3>
      <MutedText>{project.company}</MutedText>
      <LinkBox>
        {project.liveLink && <MdOpenInNew className="icon" />}
      </LinkBox>
      <FlexContainer>
        <ContentText>{project.description}</ContentText>
      </FlexContainer>
      <TechList>{techList}</TechList>
    </Card>
  );
};

export default WorkCard;
