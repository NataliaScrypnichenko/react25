
import {Link} from "react-router";

 // відображення переходу при нажаті на назву сторінки

 export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/cars'>cars</Link>
            </li>
            <li>
                <Link to='/cars/create'>create</Link>
            </li>
        </ul>
    );
 };

export default Menu;