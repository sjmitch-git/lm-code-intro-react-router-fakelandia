import Title from "../components/title";
import Description from "../components/description";
import SEO from "../components/seo";

const title = "Confession!";
const description = "Us this page to confess to your own misdemenour.";

const Confession: React.FC = () => (
  <>
    <SEO title={title} description={description} />

    <Title title={title} />
    <Description description={description} />
  </>
);

export default Confession;
