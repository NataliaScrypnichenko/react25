import {useForm} from "react-hook-form";

interface IFromProps {
  username: string;
  password: string;
  name: string;

}
const FromComponent = () => {

     // його можна параметизовувати тип даних які знаходяться в серредені useForm повертає об'єкт в якому є багато ф-цї
     // handleSubmit це обробник він ставиться на подію onSubmit і в ньому є колбек фцю? в середині фю повинен бути об'єки який х-є поля форми,
    // але їх потрібно зарегістріровати register-він привязує ту інформацю яку ми привязуємо до нього
     const {handleSubmit,register} = useForm<IFromProps>();
    //
    const customHandler = (formDataProps:IFromProps)=>{
        console.log(formDataProps);
    };
    return (
        <div>
            {/*formDataProps руєструє імпути в середині */}
            <form onSubmit={handleSubmit(customHandler)}>
                {/*все що в формі воно є string*/}
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('name')}/>
                <button >send</button>
            </form>

        </div>

    );
};

export default FromComponent;