import { useState } from "react";
import Konva from "konva";
import { v4 as uuid } from "uuid";
import { observer } from "mobx-react-lite";
import { Circle, Layer, Line, Rect, Stage } from "react-konva";
import { shapeStore } from "../../stores/shape.store";
import { Shape } from "../../interfaces/shape.interface";
import useToolProvider from "../../providers/tool-provider/use-tool-provider";
import { ToolEnum } from "../../interfaces/enums/tool.enum";
import { ShapeEnum } from "../../interfaces/enums/shape.enum";

const Drawer = observer(() => {
  const { activeTool } = useToolProvider();
  const [isDrawing, setIsDrawing] = useState(false);
  const [newShapeId, setNewShapeId] = useState<string | null>(null);
  const draggable = activeTool === ToolEnum.Picker;

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();

    if (e.target && pointerPosition && activeTool !== ToolEnum.Picker) {
      let newShape: Shape = {
        id: uuid(),
        type: ShapeEnum.Rect,
        x: pointerPosition.x,
        y: pointerPosition.y,
        width: 0,
        height: 0,
        fill: "red",
        isSelected: false,
      };

      if (activeTool === ToolEnum.Circle) {
        newShape = {
          id: uuid(),
          type: ShapeEnum.Circle,
          x: pointerPosition.x,
          y: pointerPosition.y,
          radius: 0,
          fill: "red",
          isSelected: false,
        };
      }

      if (activeTool === ToolEnum.Line) {
        newShape = {
          id: uuid(),
          type: ShapeEnum.Line,
          x: pointerPosition.x,
          y: pointerPosition.y,
          stroke: "red",
          strokewidth: 2,
          points: [pointerPosition.x, pointerPosition.y],
          isSelected: false,
        };
      }

      shapeStore.addShape(newShape);
      setIsDrawing(true);
      setNewShapeId(newShape.id);
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDrawing || !newShapeId || activeTool === ToolEnum.Picker) return;

    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();
    const newShape = shapeStore.shapes.find((s) => s.id === newShapeId);

    if (pointerPosition && newShape && activeTool === ToolEnum.Rect) {
      shapeStore.updateShape(newShapeId, {
        width: pointerPosition?.x - (newShape?.x || 0),
        height: pointerPosition?.y - (newShape?.y || 0),
      });
    }

    if (pointerPosition && newShape && activeTool === ToolEnum.Circle) {
      const width = pointerPosition?.x - (newShape?.x || 0);
      const height = pointerPosition?.y - (newShape?.y || 0);
      shapeStore.updateShape(newShapeId, {
        radius: Math.max(width, height),
      });
    }

    if (pointerPosition && newShape && activeTool === ToolEnum.Line) {
      const x2 = pointerPosition?.x;
      const y2 = pointerPosition?.y;
      shapeStore.updateShape(newShapeId, {
        points: [newShape.points[0], newShape.points[1], x2, y2],
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
              return (
                <Rect
                  key={shape.id}
                  {...shape}
                  draggable={draggable}
                  ref={(node) => {
                    if (node) {
                      node.draggable(draggable);
                    }
                  }}
                />
              );
            case "circle":
              return (
                <Circle
                  key={shape.id}
                  {...shape}
                  draggable={draggable}
                  ref={(node) => {
                    if (node) {
                      node.draggable(draggable);
                    }
                  }}
                />
              );
            case "line":
              return (
                <Line
                  key={shape.id}
                  {...shape}
                  draggable={draggable}
                  ref={(node) => {
                    if (node) {
                      node.draggable(draggable);
                    }
                  }}
                />
              );
            default:
              return null;
          }
        })}
      </Layer>
    </Stage>
  );
});
export default Drawer;
