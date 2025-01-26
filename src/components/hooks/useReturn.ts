import {useEffect, useState} from "react";


export  const useReturn =<T,> (url:string) => {

    const [odj, setOdj] =useState<T>()

   useEffect(() => {

       fetch(url)
           .then(value => value.json())
           .then(value => {
               setOdj(value)
           });
   }, [])
    return odj;

}
export default useReturn;

