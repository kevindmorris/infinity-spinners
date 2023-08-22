import { keyframes } from "styled-components";

export const clockwise = keyframes`
from  {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}	
`;
export const anticlockwise = keyframes`
from  {
  transform: rotate(360deg);
}
to {
  transform: rotate(0deg);
}	
`;
export const dashrotate = keyframes`
0% {
  stroke-dasharray: 20 150;
  stroke-dashoffset: 20;
}
50% {
  stroke-dasharray: 110 150;
  stroke-dashoffset: -35;
}
100% {
  transform: rotate(360deg);
  stroke-dasharray: 20 150;
  stroke-dashoffset: -140;
}
`;
export const breathe = keyframes`
0% {
  r: 10%;
}
50% {
  r: 40%;
}
100% {
  r: 10%;
}`;
export const heartbeat = keyframes`
0% {
  r: 20%;
}
8% {
  r: 40%;
}
16% {
  r: 30%;
}
24% {
  r: 40%;
}
100% {
  r: 20%;
}
`;
export const pulse = keyframes`
0% {
  r: 10%;
  opacity: 0;
}
25% {
  r: 20%;
  opacity: 1;
}
100% {
  r: 40%;
  opacity: 0;
}
`;
