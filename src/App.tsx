import { ConfigProvider } from "antd";
import MainToolbar from "./components/toolbars/main-toolbar/MainToolbar";
import Artwork from "./components/artwork/Artwork";

const App = () => {
  return (
    <div className="h-screen bg-gray-50">
      <ConfigProvider>
        <MainToolbar />

        <Artwork />
      </ConfigProvider>
    </div>
  );
};

export default App;
