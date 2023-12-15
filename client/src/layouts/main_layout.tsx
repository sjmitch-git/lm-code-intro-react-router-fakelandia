import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout = () => (
  <>
    <Header />
    <main className="p-6" style={{ flex: "1" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
