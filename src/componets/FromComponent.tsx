import {FormEvent, useState} from "react";

interface IFromProps {
    username: string;
    password: string;
};

const FromComponent = () => {
    // записуємо як контроль цілої форми.Контролювати будемо задопомогою const через input є 2 варіанта
    const [formState, setFormState] = useState<IFromProps>({
          username:'foobar',
        password:'1111',
    });

    // формі завжди використовуємо HTMLElement для того, щоб сторінка не перезавантажувалась
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
         event.preventDefault();
         // формуємо об'єкт і відправляємо в ного
         const user={
             username:formState.username,
             password:formState.password
         };
         console.log(user);

         // //дістаємо інформацію із формули
         // const form = event.target as HTMLFormElement;
         // console.log(form);
         // console.log(form.username.value);// виводить дані
         // console.log(form.password.value);
    };

    // function handleUsernameChange(event: FormEvent<HTMLInputElement>) {
    //          const input = event.target as HTMLInputElement;
    //           console.log(input.value);
    //           //ми можемо водити дані
    //           setFormState({...formState, username: input.value});
    // }
    //  //1 вариант
    // function handlePasswordChange(event: FormEvent<HTMLInputElement>) {
    //     const input = event.target as HTMLInputElement;
    //     console.log(input.value);
    //     //ми можемо водити дані
    //     setFormState({...formState, password: input.value});
    // }
          //2
    //2
    function handleInputChange(event: FormEvent<HTMLInputElement>) {
        const input = event.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value});
    }
    return (
        // 2
        <div>
            {/*привязуємо їх до імпута прописуємо в фром*/}
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
    //    return (
    //         // 1
    //         <div>
    //             {/*привязуємо їх до імпута прописуємо в фром*/}
    //             <form onSubmit={handleSubmit}>
    //                 <input type="text" name={'username'} value={formState.username} onChange={handleUsernameChange}/>
    //                 <input type="text" name={'password'} value={formState.password} onChange={handlePasswordChange}/>
    //                 <button>send</button>
    //             </form>
    //         </div>
};

export default FromComponent;