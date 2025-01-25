 import './App.css'
 import LeftBranch from "./components/LeftBranch.tsx";
 import RightBranch from "./components/RightBranch.tsx";
 import {init, MyContext} from "./contetx/MyContext.tsx";
 import {useState} from "react";

 //ми виз начаємо в якому контексті будуть знаходитися компоненти<LeftBranch/>, <RightBranch/> і ми їх обгорнули, щоб тільки
 // зчитувати то пишем так <MyContext.Provider value={init}>
function App(){

  const [counter, setCounter] = useState<number>(init.counterValue)
  return (
    <div>
      {/*але ми хочемо змінювати дані*/}
      <MyContext.Provider value={{
        counterValue:counter,
        increment:(obj)=>{
           setCounter(++obj);
           console.log(obj);
        }
      }}>

        <LeftBranch/>
         <RightBranch/>

      </MyContext.Provider>
    </div>
  );
};

export default App
