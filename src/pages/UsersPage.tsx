import {UsersComponent} from "../component/users-component/UsersComponent.tsx";



export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            {/*<PaginationComponent/> його потрібно оформити окремо то ств.
             його на Layout і після в router.tsx міняємо 'path:'users' на 'path:'' */}
        {/* тобто перенесли ми його а це означає що можемо його  використовувати в інших точках*/}
        {/*    якраз він буде містити кнопки вперед і назад*/}
        </div>
    );
};

export default UsersPage;