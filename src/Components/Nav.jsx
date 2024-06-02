import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <nav className="navbar">
      <div className="logo">
        <img src="image/icon.png" href="%PUBLIC_URL%/image/icon.png"/>
        <Link to="/">FILM TOPIA RANKS</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/action">Action</Link></li>
        <li><a href="/comedy">Comedy</a></li>
        <li><a href="/horror">Horror</a></li>
        <li><a href="/romance">Romance</a></li>
      </ul>
      <button className="youtube-button"><a href="https://www.youtube.com/">YouTube</a></button>
    </nav>
        </div>
    );
}

export default Nav;