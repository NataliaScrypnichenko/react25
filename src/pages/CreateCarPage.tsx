import {useForm} from "react-hook-form";
import {ICar} from "../components/models/ICar.ts";
import {addCar} from "../services/api.service.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";


const CreateCarPage = () => {
   // типізуємо форму щоб вона слідкувала за своїм станом useForm<ICar>() і в середину ставимо дефолтне значення
    // і так режим слідкування за зміними, а потім робимо input

   const {register, handleSubmit, formState:{errors}} = useForm<ICar>(
       {mode:'all',resolver:joiResolver(carValidator)});

   const createHandle = (data:ICar) => {
      addCar(data);

   }

    // щоб працював прошарок createHandle, який дозволить перевіряти об'єкт яки збережений в діві то resolver:joiResolver(carValidator)})
    return (
        <div >
            {/*викликає handleSubmit який приймає колбек функцію */}
            <form onSubmit={handleSubmit(createHandle)}></form>

            <div>
                <input type='text'{...register('brand')}/>
                <div>{errors.brand?.message}</div>
            </div>

            <div >
            <input type= 'number'{...register('price')}/>
                <div>{errors.price?.message}</div>
            </div>

            <div>
            <input type='number' {...register('year')}/>
                <div>{errors.year?.message}</div>
            </div>
            <button >save car</button>
        </div>
    );
};

export default CreateCarPage;

// потрібно робити додатковий компонент який відповідає за форму в якій вона буде зберігатися