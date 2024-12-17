import { ConfigProvider } from "antd";
import MainToolbar from "./components/toolbars/main-toolbar/MainToolbar";

const App = () => {
  return (
    <div className="h-screen bg-gray-50">
      <ConfigProvider>
        <MainToolbar />
      </ConfigProvider>
    </div>
  );
};

export default App;
