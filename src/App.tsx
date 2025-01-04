import './App.css'
import MyComponent from "./components/MyComponent.tsx";

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

function App() {

  return (
    <>
        <MyComponent title={'title 1'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </MyComponent>
        <MyComponent title={'title 2'}>
            Lorem ipsum dolor sit amet
        </MyComponent>
        <MyComponent title={'title 3'}>

        </MyComponent>
        {
            // MyComponent({text:'hello 2'}) не використовуэмо його
        }

    </>
  )
}
export default App
