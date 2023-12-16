import Title from "../components/title";
import Description from "../components/description";
import SEO from "../components/seo";

const title = "Welcome to the Justice Department of Fakelandia";
const description =
  "Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour.";

const Home: React.FC = () => (
  <>
    <SEO title={title} description={description} />

    <Title title={title} />
    <Description description={description} />
  </>
);

export default Home;
