import { Link } from 'react-router-dom';

const Comedy = () => {
    return(
        <div>
            <h1>Comedy page</h1>
            <nav>
                <ul>
            <Link to="/">Home</Link>
            <Link to="/action">Action</Link>
            <Link to="/horror">Horror</Link>
            <Link to="/romance">Romance</Link>
            <Link to="/comedy">Comedy</Link>
            </ul>
            </nav>
        </div>
    );
}

export default Comedy;