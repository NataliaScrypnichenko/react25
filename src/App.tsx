import {FC} from "react";
import './App.css'
import FromComponent from "./componets/FromComponent.tsx";

 const App:FC=() => {

  return (
      <div>
        <FromComponent/>

      </div>
  );
};
export default App;
//не котрольованому можна на сайті додавати все що хочеш, тому що АРР не конт.
// не контр. моменти це форми
{/*<div contentEditable={true} > Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
{/*  Accusamus accusantium at atque aut consequatur consequuntur culpa harum minima,*/}
{/*  minus natus nemo nobis, odio quae, qui quos sit sunt veniam veritatis.</div>*/}