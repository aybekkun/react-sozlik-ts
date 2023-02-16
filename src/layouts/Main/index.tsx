import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Popular from "../../components/Popular";
import "./Main.scss";
const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
        <Popular />
      </main>

      <Footer />
    </div>
  );
};

export default Main;
