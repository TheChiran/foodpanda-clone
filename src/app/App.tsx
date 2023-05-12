import Header from "../common/components/Header/Index";
import { Outlet } from "react-router-dom";
import "./../global.styles.scss";

function App() {
  return (
    <div className="foodpanda-clone-app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
