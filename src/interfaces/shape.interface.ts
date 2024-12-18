export interface BaseShape {
  id: string;
  type: "rect" | "circle" | "line";
  x: number;
  y: number;
  isSelected: boolean;
}

export interface Rectangle extends BaseShape {
  type: "rect";
  width: number;
  height: number;
  fill: string;
}

export interface Circle extends BaseShape {
  type: "circle";
  radius: number;
  fill: string;
}

export interface Line extends BaseShape {
  type: "line";
  points: number[];
  stroke: string;
  strokewidth: number;
}

export type Shape = Rectangle | Circle | Line;
