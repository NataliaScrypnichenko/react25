 // створили 1 цей файл потім 2
// повернулися після routes.tsx і тут описуємо як можна передати дані на http://localhost:5173/
 // через  useSearchParams() в середину приймає об'єкти



 import {useSearchParams} from "react-router-dom";

 const PaginationComponent = () => {

    const [query,setQuery] = useSearchParams({pg:'1'});//{pg:'1'} це адрес поселаня/query-цепоточний парамете tQuery
     // useSearchParams дає нам можливість змінити один параметр
     //дає помилку, тому що useSearchParams дає нам нал і щоб не було
     // потрібно зробити перевірку чи він існуэ
    return (
        <div>
            <button onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg
                    setQuery({pg: (--currentPage).toString()})
                }
            }}>prev
            </button>
            <button onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg
                    setQuery({pg: (++currentPage).toString()})
                }
            }}>next
            </button>

        </div>
    );
 };
 // при виклику кнопок адрес елек. збільшується і її можна зчитувати інформацію це в файлі Some
 export default PaginationComponent;