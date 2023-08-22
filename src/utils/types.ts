import CSS from "csstype";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISpinner
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: CSS.Property.Width;
  color?: CSS.Property.Color;
  speed?: number;
  $weight?: number;
}
export interface SpinnerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: CSS.Property.Width;
  color?: CSS.Property.Color;
  speed?: number;
  weight?: number;
}
