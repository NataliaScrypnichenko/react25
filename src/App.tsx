import './App.css'
import {products} from "./data/productsList.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";

// function App() {
//
//   return (
//     <>
//         <MyComponent/>
//         {
//             MyComponent()
//         }
//
//     </>
//   )
// }

// function App() {
//
//   return (
//     <>
//         <MyComponent title={'title 1'}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             </MyComponent>
//         <MyComponent title={'title 2'}>
//             Lorem ipsum dolor sit amet
//         </MyComponent>
//         <MyComponent title={'title 3'}>
//
//         </MyComponent>
//         {
//             // MyComponent({text:'hello 2'}) не використовуэмо його
//         }
//
//     </>
//   )
// } це ми можемо використовувати так багато компонентів але можемо скоротити і запустити цикл

// } це ми можемо використовувати так багато компонентів, але можемо скоротити і запустити цикл
// де повинен бути масив по якому ми запустимо цикл створили файли продукт?можна писати написати під фц
// function App() {
//  products то сам створиться імпорт
// в реакті всі фцї ітерувати через mар

// function App() {
//
//   return (
//     <>
//       {
//         products.map((product)=>(
//             <div>
//               <h2>{product.title }.{product.price} auh</h2>
//               <img src={product.image} alt={product.title}/>
//         </div>))
//       }
//     </>
//   )
// }// так не можна робити в розгорнутому виді а повині робити як в папкі my-product і файлі MyProduct.tsx

function App() {

  return (
    <>
      {
        products.map((product,index)=>< MyProduct key={index} product={product}/>)
      }
    </>
  )
}
export default App
// це оптимізація продуктивности// щоб не було помилок то додаємо (product,index)=>< MyProduct key={index} product={product}
// це додається тоді коли не має айді