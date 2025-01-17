// створили 2й файл
//формуємо 3 файл Melyout але в його ролі буде виступати АРР (але перед цим наводимо порядок в main.tsx)

import PaginationComponent from "./component/pagination/PaginationComponent.tsx";
import {UsersComponent} from "./component/users-component/UsersComponent.tsx";



const App=() => {

  return (
    <div>
        <UsersComponent/>
        <PaginationComponent/>
    </div>
  );
};

export default App
