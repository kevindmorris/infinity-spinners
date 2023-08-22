import React from "react";
import styled from "styled-components";
import { ISpinner, SpinnerProps } from "../utils/types";
import { pulse } from "../utils/animations";

const Spinner = styled.circle<ISpinner>`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.$weight};
  animation: ${pulse} ${(props) => props.speed}s linear infinite;
`;
const Spinner2 = styled(Spinner)`
  animation-delay: -${(props) => (props.speed ? props.speed / 2 : 1)}s;
`;

const PulseSpinner = ({
  size = 50,
  color = "#000",
  speed = 2,
  weight = 3,
  style,
}: SpinnerProps) => {
  return (
    <div style={{ width: size, height: size, ...style }}>
      <svg viewBox="0 0 50 50">
        <Spinner color={color} speed={speed} $weight={weight} />
        <Spinner2 color={color} speed={speed} $weight={weight} />
      </svg>
    </div>
  );
};

export default PulseSpinner;
