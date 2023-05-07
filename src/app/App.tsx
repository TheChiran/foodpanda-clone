import Header from "../common/components/Header/Index";
import "./../style/app.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="foodpanda-clone-app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
