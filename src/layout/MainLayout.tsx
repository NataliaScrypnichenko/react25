
// створюмоє його тут і импортуємо в файлі main. {path:'/', element:<MainLayout/>} нажимаючи Alt+Enter
import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

// відображатись принатискані на сторінках повино тут і є команда яка відповідає за це <Outlet/> за відображення.
// А дані які буде показуватися відобріжені в файлі main.tsx в element:<BPage/>. а адресу на якій буде знаходитися буде в path: 'b'
const MainLayout = () => {
    return (
        <>
             <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
};

export default MainLayout;