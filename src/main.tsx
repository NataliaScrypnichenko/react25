import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router =createBrowserRouter([
    // туе буде головний <MainLayout і створимо його в папці layout і файлі MainLayout буде меню, а тут ййого замінювальна частина
    {
        path:'/', element:<MainLayout/> ,// це батьківський елемент
        children:[
            {path: '', element:<HomePage/>},// ств.дефолтну сторінку яка нічого не відображає
            {path: 'a', element:<APage/>},// тепер з'являється логічний компонент сторінка, для сторінок буде окрема папка,створили дефолтну сторінку і сюди її імпортнемо альт+ентер
            {
                path: 'b', element: <BPage/>, children: [// можемо робити додаткові сторінки
                       // /b/1
                       {path: '1', element: <div>content 1</div>},
                       {path: '2', element: <div>content 2</div>},
                       {path: '3', element: <div>content 3</div>},
                   ],//щоб відображалась інф.то потрібно ств.відповідає за це <Outlet/> за відображення на стр.BPage
            },
        ]
    },
])

// const router =createBrowserRouter([
// // // тут створюємо шляхи тобто ми покузуємо тут при якій урлі з'явиться ось тут.render(<RouterProvider router={router} />)
// //     {path:'/', element:<div>Main Layout</div>},
// //      {path:'/a', element:<div>Main Layout a</div>},
// //      {path:'/b', element:<div>Main Layout b</div>} ми тут працювати не будемо
// ])

createRoot(document.getElementById('root')!)
    // вказуємо що саме будемо рендити, але зараз не робимо, тому що ми замінюємо цю частину.На
    // Він приймає аргумента якість певні значення router={} - це шляхи за якими ми будемо переходити заходити на сайт.
    // Тобто це мапа в якій якийсь компонент буде відповідати і якого потрібно буде показувати в цьому місці до цього була АРР.
    .render(<RouterProvider router={router} />)
