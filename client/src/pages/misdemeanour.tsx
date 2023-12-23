import Title from "../components/title";
import Description from "../components/description";
import List from "../components/list";
import SEO from "../components/seo";
import ResultsControl from "../components/results_control";
import FilterControl from "../components/filter_control";
import { MisdemeanourProvider } from "../contexts/MisdemeanourContext";

const title = "Misdemeanours";
const description = "Here you can browse a list of recent misdemeanours committed by our citizens.";

const Misdemeanour: React.FC = () => (
  <MisdemeanourProvider>
    <SEO title={title} description={description} />

    <Title title={title} />
    <Description description={description} />

    <div className="grid lg:grid-cols-4 gap-4 lg:gap-8">
      <aside className="flex gap-8 flex-col lg:justify-start">
        <FilterControl />
        <ResultsControl />
      </aside>
      <div className="lg:col-span-3">
        <List />
      </div>
    </div>
  </MisdemeanourProvider>
);

export default Misdemeanour;
