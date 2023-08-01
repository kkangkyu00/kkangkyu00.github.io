/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Card, CardProps, Col } from 'antd';
import styled, { css } from 'styled-components';

import Image from 'components/Image';

const { Meta } = Card;

type TDirection = 'row';
interface StyledCardProps {
  direction?: TDirection;
}
const FlexCss = css`
  display: flex;
  flex-direction: row;
`;

const StyledCard = styled(Card)<StyledCardProps>`
  width: 100%;
  margin-top: 16px;
  max-width: 354px;
  border: none;
  ${({ direction }) => direction && FlexCss};
  & {
    .ant-card-cover {
      width: ${({ direction }) => direction && '74px'};
      min-height: 64px;
      aspect-ratio: auto 1 / 1;
      overflow: hidden;
      display: flex;
      margin: 0px;
      position: relative;
      z-index: 0;
      svg {
        object-fit: contain;
        aspect-ratio: auto 1 / 1;
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
  &&:hover {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
`;

interface ProjectCardProps extends CardProps {
  title?: string;
  image?: string;
  direction?: TDirection;
}

const ProjectCard = ({ title, direction, image, hoverable }: ProjectCardProps) => {
  return (
    <StyledCard
      direction={direction}
      cover={
        <>
          {hoverable ? <Overlay>ProjectName</Overlay> : null}
          <Image className="card-img" src={image} />
        </>
      }
    >
      {title ? <Meta title={title} description="description" /> : null}
    </StyledCard>
  );
};

export default ProjectCard;
