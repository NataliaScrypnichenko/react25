// запускає перебудову компонента дивимось уро2.2
//  });реорганізація додавання АРІ. папки,тримати логіку в самому компоненту поганий варіант
//  (компоненти поділяються на декілька типів)Компоненти це юзер інтерфейс відображеня вони н7е повіні думати.ОЦе зараз є думалка
// відповідно створюємо іншу папку

import {IUser} from "../IUser.ts";

 const getUsers=async ():Promise<IUser[]>=>{
    // const users = await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(value => value.json())
    // return users; зменшуємо фцію томущо юзер ніде не використовується більше і є надлишковим
     return await fetch('https://jsonplaceholder.typicode.com/users')
         .then(value => value.json())
}
// async це асинхрона фц і вній буде відбуватися запит(Promise<IUser[]>- типізуємо )коли працюємо
// з силочними даними то зміна буде const


 // service нам цікавий через тк що якщо ще в якихось компонентах знадобиться робити цю дію await fetch('https://jsonplaceholder.typicode.com/users')
// то нам не потрібно буцде викликати ще один fetch то ми можемо використовувати цю фцію,тобто цю функцію можна перевикористовувати
// ми можимо сюди додати ще фцію яка працює по індитифікатору

const getUser=async (id:string):Promise<IUser>=>{
    // const user =await fetch('https://jsonplaceholder.typicode.com/users'+id)
    //     .then(value => value.json())
    //   return user;
    return await fetch('https://jsonplaceholder.typicode.com/users'+id)
        .then(value => value.json())
}

export {
    getUsers,
    getUser
}