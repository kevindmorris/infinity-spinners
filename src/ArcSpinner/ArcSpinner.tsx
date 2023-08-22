import React from "react";
import styled from "styled-components";
import { ISpinner, SpinnerProps } from "../utils/types";
import { clockwise } from "../utils/animations";

const Spinner = styled.circle<ISpinner>`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: url("#myGradient");
  stroke-width: ${(props) => props.$weight};
  stroke-linecap: round;
  stroke-dasharray: 35 150;
  animation: ${clockwise} ${(props) => props.speed}s linear infinite;
  transform-origin: center;
`;

const ArcSpinner = ({ size, color, speed, weight, style }: SpinnerProps) => {
  return (
    <div style={{ width: size, height: size, ...style }}>
      <svg viewBox="0 0 50 50">
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>
        <Spinner speed={speed} $weight={weight} />
      </svg>
    </div>
  );
};

export default ArcSpinner;

ArcSpinner.defaultProps = {
  size: "50px",
  color: "black",
  speed: 2,
  weight: 3,
  style: {},
};
