import React from 'react'
import Books from './profile/Books'
import { Book } from '../reusables/Icons';


const Library = () => {
    const content = <div className="col-span-7 md:col-span-2 lg:col-span-3 text-gray-700 text-center px-4 py-2 m-2 ">
            <div className="font-bold flex flex-row">
                <div className="mr-2"><Book /></div>
                <div className="flex flex-wrap content-center">Library: Your books</div>
            </div>
            <div className="text-left transition-all">
                <Books/>
                <Books/>
                <Books/>
            </div>
        </div>
    return (
        <>
        
        {content}</>
    );
}

export default Library;