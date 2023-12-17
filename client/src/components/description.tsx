interface descriptionProps {
  description: string;
}

const Description: React.FC<descriptionProps> = ({ description }) => (
  <h2 className="text-lg md:text-xl max-w-prose mb-8">{description}</h2>
);

export default Description;
