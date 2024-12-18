import { makeAutoObservable } from "mobx";
import { Shape } from "../interfaces/shape.interface";

class ShapeStore {
  shapes: Shape[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
  }

  updateShape(id: string, newProps: Partial<Shape>) {
    const shape = this.shapes.find((s) => s.id === id);
    if (shape) {
      Object.assign(shape, newProps);
    }
  }

  selectShape(id: string) {
    this.shapes.forEach((s) => (s.isSelected = s.id === id));
  }
}

export const shapeStore = new ShapeStore();
