// створили 2й файл
//формуємо 3 файл Melyout але в його ролі буде виступати АРР (але перед цим наводимо порядок в main.tsx)

import PaginationComponent from "./component/pagination/PaginationComponent.tsx";
import {Some} from "./component/some/Some.tsx";



const App=() => {

  return (
    <div>
        <Some/>
           hello
        <PaginationComponent/>
    </div>
  );
};

export default App
