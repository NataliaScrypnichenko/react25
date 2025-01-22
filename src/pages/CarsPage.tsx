
// створення сторінок
import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import {ICar} from "../components/models/ICar.ts";

const CarsPage = () => {
    // виводимо на єкран
    const [cars, setCars] = useState<ICar[]>([])
    // створюємо і отримуємо відповідь
    useEffect(()=>{
        getCars().then((cars)=>{
           setCars(cars);
        })

    },[])
    // виводимо на єкран
    return (
        <div>
            {cars.map((car)=>(<div key={car.id}>{car.id}{car.brand}</div>))}
        </div>
    );
};

export default CarsPage;