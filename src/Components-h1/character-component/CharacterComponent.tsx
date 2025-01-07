import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
import './CharacterComponent.css'
interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,//х-ки дя персонажа даються через children
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div className='my-10 border-2 '>
            <h2 className='text-5xl text-blue-800' >{item.name} {item.surname}</h2>
            <img src={item.photo} alt={item.name} />
            <p className='text-4xl text-amber-800'>{children}</p>
        </div>
    );
};