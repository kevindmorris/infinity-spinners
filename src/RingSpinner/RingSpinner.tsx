import React from "react";
import styled from "styled-components";
import { ISpinner, SpinnerProps } from "../utils/types";
import { anticlockwise, clockwise } from "../utils/animations";

const OuterSpinner = styled.circle<ISpinner>`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.$weight};
  stroke-linecap: round;
  stroke-dasharray: 35 150;
  animation: ${clockwise} ${(props) => props.speed}s linear infinite;
  transform-origin: center;
`;
const InnerSpinner = styled.circle<ISpinner>`
  cx: 25;
  cy: 25;
  r: ${(props) => (props.$weight ? 19 - props.$weight : 16)};
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.$weight};
  stroke-linecap: round;
  stroke-dasharray: 35 150;
  animation: ${anticlockwise} ${(props) => props.speed}s linear infinite;
  transform-origin: center;
`;

const RingSpinner = ({
  size = 50,
  color = "#000",
  speed = 2,
  weight = 3,
  style,
}: SpinnerProps) => {
  return (
    <div style={{ width: size, height: size, ...style }}>
      <svg viewBox="0 0 50 50">
        <OuterSpinner color={color} speed={speed} $weight={weight} />
        <InnerSpinner color={color} speed={speed} $weight={weight} />
      </svg>
    </div>
  );
};

export default RingSpinner;
