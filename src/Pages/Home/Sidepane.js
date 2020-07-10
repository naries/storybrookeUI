import React from 'react'
import {Books} from '../../server/mocks/Trending'

const Sidepane = () => (
    <div className="col-span-2 md:col-span-1 lg:col-span-2 text-gray-700 text-center px-4 py-2 m-2 hidden sm:hidden md:block lg:block">
        <div>
            <div className="flex flex-wrap content-center h-16 text-2xl text-indigo-900 text-left">
                Trending
            </div>
            <div>
                <div className="flex flex-wrap content-center h-12 text-xl">Books</div>
                {Books.map((book, i) => <div key ={i} className="hover:text-blue-400 cursor-pointer">
                    <div className = "flex flex-wrap content-center h-8 font-bold">{book.title}</div>
                    <div className="flex flex-wrap  h-8 text-sm">{book.downloads} downloads</div>
                </div>)}
                {/* <!-- see all --> */}
                <div className = "bg-blue-400 p-2 rounded mx-4 text-white text-center cursor-pointer flex flex-wrap justify-center content-center font-medium font-sans text-sm">See more </div>
            </div>
        </div>
    </div>
);

export default Sidepane;