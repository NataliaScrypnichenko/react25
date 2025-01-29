import {useSelector} from "react-redux";
import {store} from "../redux/sorte.ts";




export const useAppSelector = useSelector. withTypes<ReturnType <typeof store.getState> >();
