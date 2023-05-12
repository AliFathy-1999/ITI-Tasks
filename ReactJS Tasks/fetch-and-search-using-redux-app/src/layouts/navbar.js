import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/post1" className="navbar-brand">Navbar React App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active" >Post 1</Link>
        <Link to="/post2" className="nav-link" >Post 2</Link>

      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
