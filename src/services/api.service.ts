import  axios from "axios";
import {ICar} from "../components/models/ICar.ts";

// axios підключаємо, убираємо слеші тому, що підключаємо їх до ендпоїдів
const axiosInstance = axios.create({
    baseURL: "http://185.69.152.209/carsAPI/v1",
    headers:{'Content-Type': 'application/json'}
});
// на його основі робимо запит і потрібно пам'ятати що коли працюємо з арі axios то по факту під капотом є axiosResponse об'єкт в якому
// є купа додаткових х-ки про нашу відповідь
export const getCars =async ():Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>("/cars");
    console.log(axiosResponse.data);//відповідь об'єкт реорганізована відповідь все що там ми можемо використовувати за необхідністю
    // достаємо параметр дейта data якраз в ньому будуть автівки
    const cars = axiosResponse.data;
    console.log(cars);// отримали всі автівки
    return cars;
}
//цей метод потім застосуємо в CarsPage але по правильному потрібно зробити компоненти

//2.берегти автівки і сюди він буде приходити перевіреним і сервір його буде провіряти другий раз

export const addCar =async (car:ICar) => {

    await axiosInstance.post("/cars", car);
}
// після ідемо на CreateCarPage