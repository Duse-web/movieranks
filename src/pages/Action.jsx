import { Link } from 'react-router-dom';

const Action = () => {
    return(
        <div>
            <h1>Action page</h1>
            <Link to="/">Home</Link>
            <Link to="/action">Action</Link>
            <Link to="/horror">Horror</Link>
            <Link to="/romance">Romance</Link>
            
        </div>
    );
}

export default Action;