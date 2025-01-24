
import {Link} from "react-router";

// відображення переходу при нажаті на назву сторінки

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/cars'>home</Link>
            </li>
            <li>
                <Link to='/login'>login</Link>
            </li>
            <li>
                <Link to='/auth/resources'>auth-resources</Link>
            </li>
        </ul>
    );
};

export default Menu;