import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/action">Action</Link></li>
            <li><a href="comedy">Comedy</a></li>
            <li><a href="horror">Horror</a></li>
            <li><a href="romance">Romance</a></li>
          </ul>
          <button><a href='https://www.youtube.com/'>Youtube</a></button>
        </nav>
        </div>
    );
}

export default Nav;