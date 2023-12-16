import Title from "../components/title";
import Description from "../components/description";
import SEO from "../components/seo";

const title = "Confession!";
const description = "Use this page to confess to your own misdemeanour.";

const Confession: React.FC = () => (
  <>
    <SEO title={title} description={description} />

    <Title title={title} />
    <Description description={description} />
  </>
);

export default Confession;
