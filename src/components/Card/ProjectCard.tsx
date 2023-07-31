/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Card, CardProps } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

// #999999
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

      .overlay {
        z-index: 1;
        position: absolute;
        height: 100%;
        display: flex;
        //flex-direction: column;
        //-webkit-box-pack: center;
        //justify-content: center;
        padding: 23px 4px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
        //color: rgb(255, 255, 255);
        //text-align: center;
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
  display: none;
  &:hover {
    z-index: 1;
    position: absolute;
    height: 100%;
    //display: none !important;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 16px;
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
          <div className="overlay">ProjectName</div>
          <div>cover # image</div>
        </>
      }
    >
      {title ? <Meta title={title} description="description" /> : null}
    </StyledCard>
  );
};

export default ProjectCard;
