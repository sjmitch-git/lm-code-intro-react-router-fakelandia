import { Outlet, useLocation } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import Background from "../assets/images/mountains.jpg";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const mainStyle = {
    backgroundImage: isHomePage ? `url(${Background})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4" data-testid="main" style={mainStyle}>
        <article className="container mx-auto">
          <Outlet />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
