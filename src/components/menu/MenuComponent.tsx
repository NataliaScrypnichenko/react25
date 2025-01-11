import {Link} from "react-router";


export const MenuComponent = () => {
    return (
        <ul>
            <li><Link to='/posts'>posts</Link></li>
            <li><Link to='/users'>users</Link></li>
        </ul>
    );
};

