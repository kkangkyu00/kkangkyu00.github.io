import styled from 'styled-components';

export const NavContainer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 55px;
  z-index: 80;
  width: 70%;
  height: 100%;
  padding-left: 50px;
  background: ${({ theme }) => theme.defaultOverlay};
  transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
  transform: translateX(${({ $open }) => ($open ? '0%' : '-100%')});

  .nav-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .nav-title {
    position: absolute;
    top: 65px;
    left: calc(16vw - 60px);
    ${({ theme }) => theme.typography.body16B};
  }
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    padding-left: calc(16vw - 60px);
    list-style: none;
  }
  .nav-wrapper li {
    overflow: hidden;
    background: ${({ theme }) => theme.defaultOverlay};
  }
  .nav-wrapper li a {
    position: relative;
    display: inline-block;
    padding: 0 10px;
    ${({ theme }) => theme.typography.title32B};
    font-weight: 900;
    text-decoration: none;
    color: inherit;
    transition: transform 800ms cubic-bezier(1, 0, 0, 1) 0ms;
    transform: translateY(100%);
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0px;
      left: 0px;
      z-index: -1;
      display: block;
      height: 15px;
      opacity: 0.5;
      background: #ff5851;
      transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
      transform: scaleX(0) translateY(-50%);
      transform-origin: left center;
    }
  }
  .nav-open .nav-wrapper li a {
    display: inline-block;
    transform: translateY(0%);
  }
  .nav-wrapper li.active a,
  .nav-wrapper li a:hover {
    &:before {
      background: #ff5851;
      transform: scaleX(1) translateY(-50%);
      transform-origin: left center;
    }
  }
  .nav-footer {
    position: absolute;
    bottom: 120px;
    left: calc(16vw - 60px);
    font-size: 12px;
  }
`;

export const StyledButton = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 50%;
  left: 25px;
  z-index: 90;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  pointer-events: all;
  transition: transform 0.6s ease;
  transform: translateY(-50%) translateX(${({ $open }) => `${$open ? 60 : 0}%`});

  .nav-toggle {
    width: 40px;
  }
  .line {
    display: block;
    float: right;
    clear: right;
    height: 2px;
    background: ${({ theme }) => theme.defaultColor};
  }
  .nav-toggle .line:nth-child(1) {
    width: 16px;
  }
  .nav-toggle .line:nth-child(2) {
    width: 20px;
    margin-top: 3px;
  }
  .nav-toggle .line:nth-child(3) {
    width: 12px;
    margin-top: 3px;
  }
  .nav-toggle-txt {
    top: 20px;
    font-size: 10px;
    transform: rotate(-90deg);
  }
`;
