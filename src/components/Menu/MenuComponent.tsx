import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul >
            <li className=" text-2xl">
                <Link to="/users">users</Link>
            </li>
        </ul>
    )
}