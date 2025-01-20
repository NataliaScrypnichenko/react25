import {useForm} from "react-hook-form";

interface IFromProps {
  username: string;
  password: string;
  age: string;
}
const FromComponent = () => {

     const {
         handleSubmit,
         register,
         formState:{errors,isValid}
     } = useForm<IFromProps>({
         mode: 'all',
     });

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