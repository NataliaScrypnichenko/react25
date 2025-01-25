
// А чи можна зробити так що компонент <UserComponent/> в UsersComponent незмінний, щоб він і
// не рірендерився, бо це зайве навантаження,можна і ложимо його в фцію memo-мемомізації,
// не змінюється і до нього не будуть приходити пропси.memo- використовується тоді колт компонент великий і в нього є логіка і цикли

import {memo} from "react";

const UserComponent = memo(() => {
    console.log("user");
    return (
        <div>
            user
        </div>
    );
});

export default UserComponent;