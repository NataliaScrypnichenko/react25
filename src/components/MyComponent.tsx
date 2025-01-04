//будуємо все те що є в файлі App.tsx
// function MyComponent() {
//     return <div>hello okten!</div>
// }

//після цього вказую що цей компонент спроможний до імпорту цього файлу.Ми працюємо в Купі розмежених
// між собою файлів

//export default MyComponent;
//це означає що можу тепер в цьому файлі писати що потрібно, а не файлі App.tsx, тобто тут пишу слова, а App.tsx
// пишу назву функції, і буде все те саме/тобто фц. імпортується в файл App.tsx.Але є нюанс якщо я декілька захочу щось
// написати викликати, то буде декілька разів написано  hello okten!, тобто можна перевикористовувати це.Ми
//можемо в App.tsx поставити {}(джейєксі) що означає варіант інтерпуляції, можемо писати js коди.
// Можна викликати її як фц. {MyComponent()} і буде все те саме.
//Компоненти потрібні в проєкті для того щоб ми могли збирати як конструктор

// Компонент буде мати різний текст
//  function MyComponent({text}:{text:string}) {
//      return <div>{text}</div>
//  }
// export default MyComponent;
//щоб дані передати  <MyComponent/> то  <MyComponent text={'hello 1'}/>,text={'hello 1'}оце і є аргумент
//робимо дещо менше і пишемо правильно

// import {FC} from "react";
//
// type MyComponentPropType={text:string}
//
// const MyComponent: FC<MyComponentPropType>=({text})=> {
//      return <div>{text}</div>
//  }//це правильна конструкція.
//  //це називається факшен компонент.Якщо ми не хочемо мати ({text}:MyComponentPropType), а іменно MyComponentPropType
// //потім ми добавляємо FunctionComponent(FC) і вони будуть мати свій тип це FC<MyComponentPropType>
// export default MyComponent;


//  щоб швидко написати таку фцю то пишемо rsc дає підсказку
//import React from 'react'; це видаляємо

 import {FC} from "react";

import styles from './MyComponent.module.css'

type MyComponentPropType={text:string}

const MyComponent:FC<MyComponentPropType> = ({text}) => {
    return (
        <div className={styles.target}>
            {text}
        </div>
    );
};

export default MyComponent;