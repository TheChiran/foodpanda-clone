import Header from "../common/components/Header/Index";
import { Outlet } from "react-router-dom";
import "./../global.styles.scss";
import Footer from "../common/components/Footer/Index";

function App() {
  return (
    <div className="foodpanda-clone-app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
