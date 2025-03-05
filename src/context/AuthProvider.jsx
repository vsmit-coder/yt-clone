import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContect = createContext()

export default function AuthProvider({children}) {
    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);
    const [ value , setValue ] = useState("New");

    useEffect(() =>{
        fethAllData(value);
    },[value])

    const fethAllData= (query) => {
        setLoading(true);
        fetchData(`search/?q=${query}`).then((res)=>{
            console.log(res.contents);
            
            setData(res.contents);
            setLoading(false);
        })
    }
    return(
        <AuthContect.Provider value={{loading,data,value,setValue}}>
            {children}
        </AuthContect.Provider>
    )
}

export const useAuth=()=>useContext(AuthContect)