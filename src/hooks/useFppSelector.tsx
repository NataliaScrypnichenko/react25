import {useSelector} from "react-redux";
import {store} from "../redux/sorte.ts";

//створюємо свій хук буде лекще його використовувати вUsersPage(useAppSelector вона візьме з нашого стору стан його із кожного сегмента який х-зує їх витяне типи даних)


export const useAppSelector = useSelector. withTypes<ReturnType <typeof store.getState> >();
