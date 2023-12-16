import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4">
      <article className="container mx-auto">
        <Outlet />
      </article>
    </main>
    <Footer />
  </div>
);

export default MainLayout;
