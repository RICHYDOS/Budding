import { createContext, useContext, useEffect, useState } from "react";
import server from "../Utils/AxiosInstance";
import { useQuery} from "react-query"
import { UserContext } from "./UserContext";

const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const { user } = useContext(UserContext);
    // const start
    console.log(`/carts/${user.cart}`)
    const { cartIsLoading, data: cartData } = useQuery("cart", () => server.get(`/carts/${user.cart}`, {enabled: Boolean(user.cart)}))
    useEffect(() => console.log(Boolean(user.cart)), [cartData])

    return (
        <CartContext.Provider value={{cartIsLoading, cartData}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;