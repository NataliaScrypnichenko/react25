import {simpsons} from "../../Data_simsons/data_simsons.tsx";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) => <CharacterComponent  key={index}  item={value}>
                    {value.info}
                {/*потрібно зробити ключ, щоб не було помилки index key={index} */}
                {/* щоб вся інформація відображалась потрібно передати в файл CharacterComponent */}
                </CharacterComponent>)
            }
        </div>
    );
};