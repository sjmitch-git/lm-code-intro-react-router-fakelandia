import Title from "../components/title";
import Description from "../components/description";
import SEO from "../components/seo";

const title = "Misdemeanour!";
const description = "Here you can browse a list of recent misdemenours committed by our citizens.";

const Misdemeanour: React.FC = () => (
  <>
    <SEO title={title} description={description} />

    <Title title={title} />
    <Description description={description} />
  </>
);

export default Misdemeanour;
