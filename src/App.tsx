import './App.css'

import LeftComponent from "./component/LeftComponent.tsx";
import RightComponent from "./component/RightComponent.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";



function App() {

    const [themeColor, setThemeColor] = useState<string>('light')
  return (
    <div>
        <MyContext.Provider value={{
            theme:themeColor,
            changeTheme:(themeValue:string)=>{
              setThemeColor(themeValue)

            }
        }}>
             <LeftComponent/>
               <RightComponent/>
            </MyContext.Provider>
    </div>
  );
};

export default App
