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
         //errors відповідає за помилки,isValid за якщо форма в імпутах дає тру,то вона валідна
         formState:{errors,isValid}
     } = useForm<IFromProps>({
         // 'onChange'-коли в input водиться нове значення 'onTouched'-коли фокусуємось на форму
         // 'onSubmit'-коли будемо відправляти форму тільки тоді все відбувається
         // 'onBlur'-коли ми будемо втрачати фокус їз input форми
         //'all' - всі трігери
         mode: 'all',
     });

    const customHandler = (formDataProps:IFromProps)=>{
        console.log(formDataProps);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
              {/*  виводимо  message із input використовуючи label>,потрібно в файлі scc  робити блоки*/}
              <label>  <input type="text" {...register('username',
                    {
                    required: {value:true, message:'name is required'},
                //     pattern:{
                //         value: /\w+/,
                //     message: 'wrong name'
                // }можемо замінити
                   minLength: {value: 4 ,message:'wrong name'}
                })}/>
                  {/*  виводимо  message із input використовуючи label>*/}
                  {errors.username && <div>{errors.username.message}</div>}
              </label>

              <label>
                <input type="text" {...register('password',
                    {
                        required: true,
                        minLength: {value: 3 ,message:'past too shor'},
                        maxLength: {value: 6 ,message:'past too long'}
                    })}/>
                  {/*  виводимо  message із input використовуючи label>*/}
                  {errors.password && <div>{errors.password.message}</div>}
              </label>

                <label>
                <input type={'number'} {...register('age',{
                       required:true,
                       valueAsNumber:true,
                      min:{value: 1 , message:'age too small'},
                      max:{value: 100 , message:'age too big'}

                })}/>
                    {/*  виводимо  message із input використовуючи label>*/}
                    {errors.age && <div>{errors.age.message}</div>}
                </label>

                {/*активовувати чи дези активовувати,тобто активна коли пишеш і не активна*/}
                <button disabled={!isValid} >send</button>
            </form>

        </div>

    );
};

export default FromComponent;