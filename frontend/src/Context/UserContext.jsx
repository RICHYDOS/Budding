import { createContext, useState } from "react";
import server from "../Utils/AxiosInstance";
import { useQuery} from "react-query"

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser ] = useState({})
    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;