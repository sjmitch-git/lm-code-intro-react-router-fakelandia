interface titleProps {
  title: string;
  className?: string;
}

const Title: React.FC<titleProps> = ({ title, className }) => (
  <h1
    className={`text-3xl md:text-4xl my-8 max-w-prose ${className ? className : ""}`}
    data-testid="title"
  >
    {title}
  </h1>
);

export default Title;
