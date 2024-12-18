import { Layer, Rect, Stage } from "react-konva";

const Artwork = () => {
  return (
    <div className="ml-[60px] mt-[10px] h-[calc(100vh-20px)]">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect x={20} y={20} width={40} height={40} fill="red" />
        </Layer>
      </Stage>
    </div>
  );
};

export default Artwork;
