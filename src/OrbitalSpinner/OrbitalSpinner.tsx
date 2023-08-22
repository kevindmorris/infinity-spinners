import React from "react";
import styled from "styled-components";
import { ISpinner, SpinnerProps } from "../utils/types";
import { clockwise } from "../utils/animations";

const Spinner = styled.circle<ISpinner>`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.$weight};
  stroke-linecap: round;
  stroke-dasharray: 0 150;
  animation: ${clockwise} ${(props) => props.speed}s linear infinite;
  transform-origin: center;
`;
const Path = styled.circle<ISpinner>`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.$weight};
  opacity: 0.25;
`;

const OrbitalSpinner = ({
  size,
  color,
  speed,
  weight,
  style,
}: SpinnerProps) => {
  return (
    <div style={{ width: size, height: size, ...style }}>
      <svg viewBox="0 0 50 50">
        <Path color={color} $weight={weight} />
        <Spinner color={color} speed={speed} $weight={weight} />
      </svg>
    </div>
  );
};

export default OrbitalSpinner;

OrbitalSpinner.defaultProps = {
  size: "50px",
  color: "black",
  speed: 2,
  weight: 3,
  style: {},
};
