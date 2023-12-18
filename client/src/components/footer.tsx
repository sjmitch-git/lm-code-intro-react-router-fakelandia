const Footer: React.FC = () => (
  <footer className="bg-theme text-white p-4" data-testid="footer">
    <div className="container mx-auto flex justify-between">
      <p>&copy; 2023 Stephen</p>
      <a
        href="https://github.com/sjmitch-git/lm-code-intro-react-router-fakelandia"
        target="_blank"
      >
        GitHub Code
      </a>
    </div>
  </footer>
);

export default Footer;
