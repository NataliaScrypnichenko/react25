import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
     // знайшли поточні параметри з урли зчитали(або сетнули по дефолтному)
     const [searchParams,setSearchParams] = useSearchParams({page:'1'});
    // зчитуємо значення якщо воно відміне від одиниці якщо не має, то ми його впроваджуємо(після onClick змінює їх )
    let currentPage =Number(searchParams.get("page") || '1');
    return (
        <div>

             <button onClick={()=>{
                 if(currentPage > 1){
                     // urrentPage перетворюємо в стрінгу (все що відбувається в урлі воно завжди стрінгове)
                     setSearchParams({page:(--currentPage).toString()});
                 }
             }}>prev</button>

            <button onClick={()=>{
                setSearchParams({page:(++currentPage).toString()});
            }} >next</button>

        </div>
    );
};

export default PaginationComponent;