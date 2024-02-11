import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = "https://google-web-search1.p.rapidapi.com/?query=World%20Cup&limit=20&related_keywords=true"


export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const getResults = async (type) =>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers:{
                'X-RapidAPI-Key': '113e0362c6msh99953037fd395b3p1382e4jsn7721be7170b5',
                'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
            }
        });
        const data = await response.text();
        console.log(" this is the search data"+ data);

        setResults(data);
        setIsLoading(false);
    }

    return (
    <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
        {children}
    </ResultContext.Provider>)
}
export const useResultContext = () => useContext(ResultContext);