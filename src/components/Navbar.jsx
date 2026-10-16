import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">HireLoop</div>
      <ul className="nav-links">
        <li><a href="#">Colleges</a></li>
        <li><a href="#">Employers</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Blogs</a></li>
      </ul>
      <div className="nav-actions">
        <a href="#">Sign In</a>
        <button className="btn-pill">Sign Up</button>
      </div>
    </nav>
  );
}