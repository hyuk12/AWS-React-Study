import {css} from "@emotion/react";
export const style = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;

  width: 300px;
  height: 100%;
  background-color: rgba(236, 226, 223, 0.96);
  box-shadow: 1px 0 5px 1px black;
  transition: left 1s ease;
`;

export const HiddenMenu = css`
  position: absolute;
  top: 0;
  left: -300px;
  z-index: 99;

  width: 300px;
  height: 100%;
  background-color: rgba(236, 226, 223, 0.96);
  box-shadow: 1px 0 5px 1px black;
  transition: left 1s ease;
`;

export const MenuButton = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: -13px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0;
  width: 13px;
  height: 60px;

  background-color: #454545;
  color: #f0e5d3;

  &:hover, &:active {
    background-color: #454545;
    text-shadow: 0 0 5px #f0e5d3;
  }
`;


export const NavigationStyle = css`
  .react-minimal-side-navigation__item {
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .react-minimal-side-navigation__item--active,
  .react-minimal-side-navigation__item:hover {
    background-color: #f0e5d3;
    color: #454545;
  }

  .react-minimal-side-navigation__item--active > .react-minimal-side-navigation__item__title,
  .react-minimal-side-navigation__item:hover > .react-minimal-side-navigation__item__title {
    color: #454545;
  }
`;
