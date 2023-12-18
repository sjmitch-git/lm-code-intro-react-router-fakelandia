import Title from "../components/title";
import Description from "../components/description";
import SEO from "../components/seo";
import ConfessForm from "../components/confess_forrm";

const title = "Confess To Us";
const description = "Use this page to confess to your own misdemeanour.";

const Confession: React.FC = () => (
  <>
    <SEO title={title} description={description} />

    <Title title={title} />
    <Description description={description} />

    <div className="grid lg:grid-cols-6 gap-8">
      <aside className="flex gap-4 flex-col lg:justify-start lg:col-span-3 lg:order-last">
        <ul className="max-w-prose list-disc lg:text-lg lg:ml-4">
          <li className="mb-4">
            It's very difficult to catch people committing misdemeanours so we appreciate it when
            citizens confess to us directly.
          </li>
          <li className="mb-4">
            However, if you're just having a hard and need to vent, then you're welcome to contact
            us here too. It's up to you!
          </li>
        </ul>
      </aside>
      <div className="lg:col-span-3">
        <ConfessForm />
      </div>
    </div>
  </>
);

export default Confession;
