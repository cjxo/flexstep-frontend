import { Outlet } from "react-router-dom";
import WideTopBar from "./components/WideTopBar.jsx";
import Footer from "./components/Footer.jsx";
import { AuthProvider } from "./context/Auth";

const App = () => {
  return (
    <AuthProvider>
      <WideTopBar />
      <main className="mainContent">
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  );
};

export default App;
