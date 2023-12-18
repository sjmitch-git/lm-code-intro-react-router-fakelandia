interface descriptionProps {
  description: string;
  className?: string;
}

const Description: React.FC<descriptionProps> = ({ description, className }) => (
  <h2 className={`text-lg md:text-xl max-w-prose mb-8 ${className ? className : ""}`}>
    {description}
  </h2>
);

export default Description;
