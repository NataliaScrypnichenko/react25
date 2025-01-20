import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValiadator from "../valiadtors/user.valiadator.ts";

interface IFromProps {
  username: string;
  password: string;
  age: string;
}
const FromComponent = () => {
     //привязуємо ф.валідатор

     const {handleSubmit, register, formState:{errors,isValid}}
         = useForm<IFromProps>({mode: 'all',resolver:joiResolver(userValiadator)});//видає помилку і ідемо їх кастилізувати в файл user.vali//

    const customHandler = (formDataProps:IFromProps)=>{
        console.log(formDataProps);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
              <label>
                  <input type="text" {...register('username')}/>
                  {errors.username && <div>{errors.username.message}</div>}
              </label>

              <label>
                  <input type="text" {...register('password')}/>
                  {errors.password && <div>{errors.password.message}</div>}
              </label>

                <label>
                     <input type={'number'} {...register('age')}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>

                <button disabled={!isValid} >send</button>
            </form>
        </div>
    );
};

export default FromComponent;