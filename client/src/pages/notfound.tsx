import Title from "../components/title";
import Description from "../components/description";
import SEO from "../components/seo";

const title = "Not Found!";
const description = "Oops! The page you requested could not be found.";

const NotFound: React.FC = () => (
  <>
    <SEO title={title} description={description} />

    <Title title={title} />
    <Description description={description} />
  </>
);

export default NotFound;
