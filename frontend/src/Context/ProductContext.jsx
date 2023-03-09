import { createContext } from "react";
import server from "../Utils/AxiosInstance";
import { useQuery} from "react-query"

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const { isLoading : productDataIsLoading, data : productData } = useQuery("products", () => {
        return server.get("/products");
      });

    return (
        <ProductContext.Provider value={{ productDataIsLoading, productData }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;