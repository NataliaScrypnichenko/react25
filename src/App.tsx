import './App.css'
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./services/user.service.ts";
// робимо запит і збереження
function App(){
    useEffect(()=>{
        getAllUsers().then(value => console.log(value));

        saveUser({id:1, name:"Jons",email:"john@gmail.com"}).then(value => console.log(value));
    },[])
  return (
      <>
      </>
  );
}

export default App;
