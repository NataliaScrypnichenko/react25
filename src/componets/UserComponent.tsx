

import {FC, memo} from "react";


// буде заходити об'єкт який містить колбек функцію.Memo буде кешувати нашу функцыю тільки у випадку якщо в неї не
// змінюються пропси і ми там визиваємо useCallback вона дозволяэ нам не викликати 2 рази user
//Тепер ми можемо кешувати  не тільки компонент але щей його пропси які будуть являтися об'єктами або функціями
const UserComponent:FC<{ foo: () => void } > = memo(() => {
    console.log("user");
    return (
        <div>
            user
        </div>
    );
});

export default UserComponent;