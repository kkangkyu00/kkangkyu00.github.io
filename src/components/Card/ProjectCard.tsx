/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';
import { Card, CardProps } from 'antd';
import styled, { css } from 'styled-components';
import Image from 'components/Image';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 100%;
  //height: 64px;
  //margin-top: 16px;
  max-width: 354px;
  border: none;
  overflow: hidden;
  & {
    .ant-card-cover {
      max-height: 180px;
      //aspect-ratio: auto 1 / 1;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px;
      position: relative;
      z-index: 0;
      svg:not(card-img) {
        width: 40px;
        height: 40px;
        color: #535353;
        object-fit: contain;
        aspect-ratio: auto 1 / 1;
      }
    }
    .ant-card-body {
      height: 100px;
      padding: 0;
      margin: auto 0;
      .ant-card-meta {
        .ant-card-meta-title {
          margin: 0;
        }
      }
    }
  }
`;

interface ProjectCardProps extends CardProps {
  title?: string;
  image?: string | ReactNode;
  description?: string;
  onTabChange?: (e: any) => void;
}

const ProjectCard = ({ title, image, description, onTabChange }: ProjectCardProps) => {
  return (
    <StyledCard
      onTabChange={onTabChange}
      cover={typeof image === 'string' ? <Image className="card-img" src={image} /> : image}
    >
      {title ? <Meta title={title} description={description} /> : null}
      <div>Read more</div>
    </StyledCard>
  );
};

export default ProjectCard;
