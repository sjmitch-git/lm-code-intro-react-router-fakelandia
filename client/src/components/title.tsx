interface titleProps {
  title: string;
}

const Title: React.FC<titleProps> = ({ title }) => (
  <h1 className="text-3xl md:text-4xl my-8 max-w-prose">{title}</h1>
);

export default Title;
