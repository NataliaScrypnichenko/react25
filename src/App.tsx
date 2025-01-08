
// import {useEffect, useState} from "react";
// import {IUser} from "./models/IUser.ts";
// import UserComponent from "./components/user-component/UserComponent.tsx";

//витягнути дані і тут їх відобразити, але є проблема тещо відбувається в аксихроній ф-ції залишається в цій фцї,
// тобто витягнути з останього зена і передати її в дів не можемо потенційно, але по факту використовуючи useState..
// можемо сказати cons, відповідно в другому .then(value =>будемо казати user і після чого хочемо їх додати до
// діва.Яка тепер передати .then(value => users, то ми беремо setUsers(value), але воно впливати не буде на fetch, але в майбутньому якщо будемо
// щось бажати змінити, і додати нове, то не потрібно
// let users = [
//   {name: 'vasya', age: 31, status: false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
// ];

 // fetch('https://jsonplaceholder.typicode.com/users')
 //     .then(value => value.json())
 //     .then(response => {
 //       setUsers(response);// запускає перебудову компонента
 //     })
//робимо щоб фцїя працювала один раз а не багато разів.Для цього є спеціальний хук useEffect він має два аргумента .
// Перший це колбек фця і другий це масив залежності і він пустий.Один раз виконується тому що масив вказаний пустий.Масив залежності це-
//якщо існує умовно якась змінна (let х=0) і ми будемо її змінювати в майб.і поставили її [х]) то useEffect буде перепрацьовувати.
// Перший це колбек фця спроможна мати  return () => {}- теж колбек ф.яка спроможна виконуватися після
// того, як useEffect зробив свою справу.
// Будь яка фця яка називається з use в реакти називається хук.
// типізуємо копыруэмо ыз сайта  створюємо  IUser файл ы додаэмо данi в IUser.ts.Виводити всіх користувачів за допомогою
// Арр не потрыбно на це бэ другий компонент UsersComponent.tsx і переносимо частину useEffect


import UsersComponent from "./components/users-component/UsersComponent.tsx";

const App=() => {

//ми все перенесли до файла UsersComponent а тут їх викликаємо
  return (
    <div>
        <UsersComponent/>
    </div>
  );
};

export default App
