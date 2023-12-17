import Nav from "./nav";

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4 stick top-0" data-testid="header">
    <Nav />
  </header>
);

export default Header;
