import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
import './CharacterComponent.css'
interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,//х-ки дя персонажа даються через children
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div className='my-12 border-2 '>
            <h2 className='text-blue-400' >{item.name} {item.surname}</h2>
            <p className='text-4xl text-amber-800'>{children}</p>
        </div>
    );
};