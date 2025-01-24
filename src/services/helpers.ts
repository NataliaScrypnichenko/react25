//щоб не було помилки  //  Витягаємо user із localStorage key замість пишемоо юзер машини ...


export const retriveLocalStorage =<T> (key:string) => {
    const object = localStorage.getItem(key) || '';
    if (!Object) {
        return {} as T;
    }
    const parse =JSON.parse(object);
    return parse as T;
}