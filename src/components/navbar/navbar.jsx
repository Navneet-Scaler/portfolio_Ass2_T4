import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Navneet</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="../project" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/project" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Resume</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Certifications</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Blogs</a>
        </li>
      </ul>
      <div className="nav-link">Link</div>
    </nav>
  );
};

export default Navbar;