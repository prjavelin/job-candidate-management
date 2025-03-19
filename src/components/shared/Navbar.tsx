import "bootstrap/dist/css/bootstrap.min.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">Job Manager</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">Home</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">Jobs</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light">Candidates</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
