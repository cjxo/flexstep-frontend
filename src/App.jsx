import { Outlet } from "react-router-dom";
import WideTopBar from "./components/WideTopBar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <WideTopBar />
      <main className="mainContent">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
