import { Outlet, useLocation } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const mainStyle = {
    backgroundImage: isHomePage
      ? "url(https://images.unsplash.com/photo-1552152370-fb05b25ff17d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      : "none",
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
