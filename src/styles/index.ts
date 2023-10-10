import styled from 'styled-components';

interface FullWidthBoxProps {
  maxWidth?: string;
}

export const FullWidthBox = styled.div<FullWidthBoxProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '70vw'};
`;

export const FullWidthFlexBox = styled(FullWidthBox)`
  display: flex;
`;
