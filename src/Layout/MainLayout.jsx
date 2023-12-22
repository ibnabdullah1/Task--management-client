import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import { StickyNavbar } from "../Pages/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <StickyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
