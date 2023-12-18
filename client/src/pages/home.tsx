import { NavLink } from "react-router-dom";
import Title from "../components/title";
import Description from "../components/description";
import SEO from "../components/seo";

const title = "Welcome to the Justice Department of Fakelandia";
const description =
  "Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour.";

const Home: React.FC = () => (
  <>
    <SEO title={title} description={description} />

    <Title title={title} className="text-center" />
    <Description description={description} className="text-center mx-auto mb-24" />

    <nav className="flex justify-center gap-8">
      <NavLink to="/misdemeanour" className="btn bg-primary text-light">
        Misdemeanours
      </NavLink>
      <NavLink to="/confession" className="btn bg-primary text-light">
        Confess To Us
      </NavLink>
    </nav>
  </>
);

export default Home;
