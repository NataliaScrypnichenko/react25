import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {cartService} from "../../service/api.service.ts";

export const CatsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])
    
    useEffect(()=>{
      //  якщо id є андифайн, то робимо перевірку
      if (id){
          cartService.getCartsOfUsers(id)
              .then(({carts}:ICartResponseModel) => {
                  setCarts(carts);
              });
      }

    },[id]);
    // якщо є дочірний елемент роутер потрібно},[id])
    return (
        <div>
            {
                carts.map((cart:ICart)=>(<div className={'text-3xl'} key={cart.id}>
                    {cart.total} {cart.totalQuantity}

                </div>))
            }
        </div>
    )
}