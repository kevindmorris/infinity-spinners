import React from "react";
import styled from "styled-components";
import { ISpinner, SpinnerProps } from "../utils/types";
import { heartbeat } from "../utils/animations";

const Spinner = styled.circle<ISpinner>`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${(props) => props.color};
  stroke-width: ${(props) => props.$weight};
  animation: ${heartbeat} ${(props) => props.speed}s linear infinite;
`;

const HearbeatSpinner = ({
  size,
  color,
  speed,
  weight,
  style,
}: SpinnerProps) => {
  return (
    <div style={{ width: size, height: size, ...style }}>
      <svg viewBox="0 0 50 50">
        <Spinner color={color} speed={speed} $weight={weight} />
      </svg>
    </div>
  );
};

export default HearbeatSpinner;

HearbeatSpinner.defaultProps = {
  size: "50px",
  color: "black",
  speed: 2,
  weight: 3,
  style: {},
};
