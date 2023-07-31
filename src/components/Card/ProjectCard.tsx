/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Card, CardProps } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 100%;
  margin-top: 16px;
  max-width: 354px;
  border: none;
  & {
    .ant-card-cover {
      min-height: 64px;
      aspect-ratio: auto 1 / 1;
      overflow: hidden;
      margin: 0px;
      position: relative;
      z-index: 0;
    }
    .ant-card-cover:hover {
      .overlay-hover {
        opacity: 1;
        transition: opacity 0.5s ease;
      }
    }
    .ant-card-body {
      padding: 16px 0;
      .ant-card-meta {
        .ant-card-meta-title {
          margin: 0;
        }
      }
    }
  }
`;

const Overlay = styled.div`
  && {
    opacity: 0;
    z-index: 1;
    position: absolute;
    height: 100%;
    padding: 23px 4px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }
`;

interface ProjectCardProps extends CardProps {
  title?: string;
}

const ProjectCard = ({ title = 'asd' }: ProjectCardProps) => {
  return (
    <StyledCard
      cover={
        <>
          <Overlay className="overlay-hover">ProjectName</Overlay>
          <div>cover # image</div>
        </>
      }
    >
      {title ? <Meta title={title} description="description" /> : null}
    </StyledCard>
  );
};

export default ProjectCard;
