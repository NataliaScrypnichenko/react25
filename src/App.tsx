import {Outlet} from "react-router";
import Menu from "./components/menu/Menu.tsx";

const App=() => {

  return (
    <div>
        <Menu/>
         <Outlet/>
    </div>
  );
};

export default App
