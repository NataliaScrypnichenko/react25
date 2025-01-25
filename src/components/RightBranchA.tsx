import {useContext} from "react";
import {MyContext} from "../contetx/MyContext.tsx";


const RightBranchA = () => {

    const {counterValue,increment} = useContext(MyContext);
    return (
        <div>
            Right Branch A

            <button onClick={()=>{
                // і тут буде збільшуватися counterValue
                increment(counterValue);
            }}>click me to increment counter in LBA</button>
        </div>
    );
};

export default RightBranchA;