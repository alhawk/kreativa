import { ConfigProvider } from "antd";
import MainToolbar from "./components/toolbars/main-toolbar/MainToolbar";
import Drawer from "./components/drawer/Drawer";

const App = () => {
  return (
    <div className="h-screen bg-gray-50">
      <ConfigProvider>
        <MainToolbar />

        <Drawer />
      </ConfigProvider>
    </div>
  );
};

export default App;
