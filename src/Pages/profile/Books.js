import React from 'react'

const Books = () => (
    <div className="border-b border-gray-200 p-2 hover:bg-white">
        <div>
            <div>Title of the book</div>
            <div className="text-sm py-1">Abstract of the book goes here...</div>
        </div>
        <div className="w-24 my-1">
            <div className="text-center cursor-pointer font-medium p-1 text-sm rounded-md border border-blue-400 text-blue-400 bg-white">Download</div>
        </div>
    </div>    
);

export default Books;