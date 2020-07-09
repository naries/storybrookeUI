import React from 'react'
import { Add, Stories, Home, Bell } from './Icons'

const AddPost = () => (
    <div className="flex flex-row flex-wrap justify-between">
        <div className = "bg-white transition duration-150 ease-linear cursor-pointer hover:px-8 hover:bg-gray-200 hover:border-gray-500 rounded-full border border-gray-300 flex flex-row px-4 py-4 ">
            <div>
                <Add />
            </div>
            <div className="ml-4">Write a new story!</div>
        </div>
        <div className="flex flex-row">    
            <div className="ml-1 transition duration-150 ease-linear cursor-pointer hover:bg-gray-200 hover:border-gray-500 rounded-full overflow-hidden flex flex-row p-4">
                <div>
                    <Home />
                </div>
            </div>
            <div className="ml-1 transition duration-150 ease-linear cursor-pointer hover:bg-gray-200 hover:border-gray-500 rounded-full overflow-hidden flex flex-row p-4">
                <div>
                    <Stories />
                </div>
            </div>
            <div className="ml-1 transition duration-150 ease-linear cursor-pointer hover:bg-gray-200 hover:border-gray-500 rounded-full overflow-hidden flex flex-row p-4">
                <div>
                    <Bell />
                </div>
            </div>
        </div>
    </div>    
);

export default AddPost;