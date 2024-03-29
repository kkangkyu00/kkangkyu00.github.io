import styled from 'styled-components';

export const NavWrapper = styled.div<{ $open: boolean }>`
  position: relative;
  .nav-container {
    position: fixed;
    top: 0;
    left: 0px;
    z-index: 80;
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    background: ${({ theme }) => theme.defaultOverlay};
    transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
    transform: translateX(${({ $open }) => ($open ? '0%' : '-100%')});
  }
  .nav-container:after {
    content: '';
    position: absolute;
    right: -55px;
    width: 55px;
    height: 100%;
    background: ${({ theme }) => theme.defaultOverlay};
  }
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    padding-left: 16vw;
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
    bottom: 130px;
    left: 16vw;
    font-size: 12px;
  }
  .nav-dim {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    opacity: ${({ $open }) => ($open ? 0.5 : 0)};
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    width: 100%;
    height: 100vh;
    background: #000;
    //transition: opacity 2s;
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
    .line {
      display: block;
      float: right;
      clear: right;
      height: 2px;
      background: ${({ theme }) => theme.defaultColor};
      transition: all 0.3s ease;
    }
  }
  .nav-toggle-txt {
    top: 20px;
    font-size: 10px;
    transform: rotate(-90deg);
    visibility: ${({ $open }) => $open && 'hidden'};
  }

  // initial
  .nav-toggle {
    .line:nth-child(1) {
      width: 16px;
    }
    .line:nth-child(2) {
      width: 20px;
      margin-top: 3px;
    }
    .line:nth-child(3) {
      width: 12px;
      margin-top: 3px;
    }
  }
  // opened
  .nav-toggle.opened {
    .line {
      transition: all 0.3s ease;
    }
    .line:nth-child(1) {
      width: 20px;
      transform: rotate(45deg) translate(2px, 0px);
    }
    .line:nth-child(2) {
      width: 20px;
      transform: rotate(-45deg) translate(3.5px, -1.5px);
    }
    .line:nth-child(3) {
      width: 12px;
      display: none;
    }
  }
  // hover
  &:hover .nav-toggle:not(.nav-toggle.opened) {
    .line:nth-child(1) {
      width: 20px !important;
    }
    .line:nth-child(2) {
      width: 32px !important;
    }
    .line:nth-child(3) {
      width: 18px !important;
    }
  }
`;
