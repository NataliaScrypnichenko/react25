// зчитуємо інформацію
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";


export const Some = () => {
     const [query, setQuery] = useSearchParams();
    useEffect(()=>{
     const pg = query.get('pg');
     console.log(pg);
    //  creat request to API with searchParams(создать запрос з API)/потрібно створювати в іншому файлі но зараз буде тут
      fetch('https://reqres.in/api/users?page'+pg)
        .then(value =>value.json())
          .then(value => {
              console.log(value)
          });




    },[query])


    return (
        <div>Some Component</div>
    );
};
