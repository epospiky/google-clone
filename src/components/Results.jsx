import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading';

const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(()=>{
        getResults('/search/q=Javascript&num=40')
    },[])
    if(isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return ( 
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {results?.results?.map(({link, title}, index)=>(
                        <div key={index} className='md:w-2/5 w-full'>
                            <a hr></a>
                        </div>
                    ))}
                </div>
            )
        case '/images':
            return ''    
        case '/search':
            return 'search'
        case '/search':
            return 'search'
        default:
            return 'ERROR';
    }
}

export default Results