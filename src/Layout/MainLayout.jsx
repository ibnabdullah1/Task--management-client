import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../Routes/Pages/Navbar/Navbar";
import Footer from "../Routes/Pages/Footer/Footer";

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
