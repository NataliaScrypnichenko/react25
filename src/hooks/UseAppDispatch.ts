import {useDispatch} from "react-redux";
import {store} from "../redux/sorte.ts";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()