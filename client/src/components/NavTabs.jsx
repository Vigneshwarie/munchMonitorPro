import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav nav-tabs ">
      <div className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Entry
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/SignLogin"
          className={currentPage === '/SignLogin' ? 'nav-link active' : 'nav-link'}
        >
          Sign Login
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/ViewCreate"
          className={currentPage === '/ViewCreate' ? 'nav-link active' : 'nav-link'}
        >
          View Create
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/Feeder"
          className={currentPage === '/Feeder' ? 'nav-link active' : 'nav-link'}
        >
          Feeder
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="Create"
          className={currentPage === '/Create' ? 'nav-link active' : 'nav-link'}
        >
          Create
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="CreateProfile"
          className={currentPage === '/CreateProfile' ? 'nav-link active' : 'nav-link'}
        >
         Create Profile
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="LoginPage"
          className={currentPage === '/LoginPage' ? 'nav-link active' : 'nav-link'}
        >
         LoginPage
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="Devs"
          className={currentPage === '/Devs' ? 'nav-link active' : 'nav-link'}
        >
         LoginPage
        </Link>
      </div>
    </div>
  );
}

export default NavTabs;
