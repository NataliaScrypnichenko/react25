import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";
import './LeftComponentA.css'

const LeftComponentA = () => {
    // відхопити
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
           this is component LeftComponentA, and theme value is-{theme}
        </div>
    );
};

export default LeftComponentA;