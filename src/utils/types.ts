import CSS from "csstype";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISpinner
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** The size of the component. */
  size?: number | string;
  /** The color of the component. */
  color?: CSS.Property.Color;
  /** The speed of the component in seconds. */
  speed?: number;
  /** The line weight of the component. */
  $weight?: number;
}

export interface SpinnerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** The size of the component. */
  size?: number | string;
  /** The color of the component. */
  color?: CSS.Property.Color;
  /** The speed of the component in seconds. */
  speed?: number;
  /** The line weight of the component. */
  weight?: number;
}
