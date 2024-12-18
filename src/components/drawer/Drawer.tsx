import { useState } from "react";
import Konva from "konva";
import { v4 as uuid } from "uuid";
import { observer } from "mobx-react-lite";
import { Circle, Layer, Line, Rect, Stage } from "react-konva";
import { shapeStore } from "../../stores/shape.store";
import { Shape } from "../../interfaces/shape.interface";

const Drawer = observer(() => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [newShapeId, setNewShapeId] = useState<string | null>(null);
  const newShapeType = "rect";

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();

    if (e.target && pointerPosition) {
      const newShape: Shape = {
        id: uuid(),
        type: newShapeType,
        x: pointerPosition.x,
        y: pointerPosition.y,
        width: 0,
        height: 0,
        fill: "red",
        isSelected: false,
      };

      shapeStore.addShape(newShape);
      setIsDrawing(true);
      setNewShapeId(newShape.id);
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDrawing || !newShapeId) return;

    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();
    const newShape = shapeStore.shapes.find((s) => s.id === newShapeId);

    if (pointerPosition && newShape) {
      shapeStore.updateShape(newShapeId, {
        width: pointerPosition?.x - (newShape?.x || 0),
        height: pointerPosition?.y - (newShape?.y || 0),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setNewShapeId(null);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Layer>
        {shapeStore.shapes.map((shape) => {
          switch (shape.type) {
            case "rect":
              return <Rect key={shape.id} {...shape} draggable />;
            case "circle":
              return <Circle key={shape.id} {...shape} draggable />;
            case "line":
              return <Line key={shape.id} {...shape} draggable />;
            default:
              return null;
          }
        })}
      </Layer>
    </Stage>
  );
});
export default Drawer;
