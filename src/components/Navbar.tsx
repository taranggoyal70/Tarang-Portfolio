import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <a href="#top" className="navbar-title" aria-label="Tarang Goyal, home">
        <span>TG</span>
        <span className="navbar-name">Tarang Goyal</span>
      </a>
      <nav aria-label="Primary navigation">
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <div className="navbar-actions">
        <a
          href="mailto:taranggoyal2000@gmail.com"
          className="navbar-email"
        >
          Email
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-resume"
        >
          Résumé ↗
        </a>
      </div>
    </header>
  );
};

export default Navbar;
