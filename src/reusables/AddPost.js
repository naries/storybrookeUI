import React from 'react'
import { Add, Stories, Home, Bell } from './Icons'

const AddPost = ({creator, toggleCreator}) => (
    <div className="flex flex-row flex-wrap justify-between">
            <div 
                className = "flex bg-blue-100 flex-wrap content-center transition duration-150 ease-linear cursor-pointer hover:px-8 hover:bg-gray-200 hover:border-gray-500 rounded-sm border border-gray-300 flex flex-row px-2 py-1 "
                onClick={() => toggleCreator()}>
            
                {!creator && <div><Add /></div>}
            
            {!creator ? <div className="ml-4">Write a new story!</div>: <div>Quit creating</div>}
        </div>
        <div className="flex flex-row">    
            <div className="ml-1 bg-blue-100 transition duration-150 ease-linear cursor-pointer hover:bg-gray-200 hover:border-gray-500 rounded-full overflow-hidden flex flex-row p-2">
                <div>
                    <Home />
                </div>
            </div>
            <div className="ml-1 bg-blue-100 transition duration-150 ease-linear cursor-pointer hover:bg-gray-200 hover:border-gray-500 rounded-full overflow-hidden flex flex-row p-2">
                <div>
                    <Stories />
                </div>
            </div>
            <div className="ml-1 bg-blue-100 transition duration-150 ease-linear cursor-pointer hover:bg-gray-200 hover:border-gray-500 rounded-full overflow-hidden flex flex-row p-2">
                <div>
                    <Bell />
                </div>
            </div>
        </div>
    </div>    
);

export default AddPost;