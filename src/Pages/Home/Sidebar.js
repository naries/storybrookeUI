import React from 'react'
import Button from '../../reusables/Button'
import { Home, Stories, Book, Star, Bell } from '../../reusables/Icons'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return(
        <div className = "col-span-2 text-gray-700 hidden sm:hidden md:hidden lg:block px-4 py-2 m-2">
            <div className = "flex flex-row">
                <div className="bg-gray-400 h-24 w-24 border-gray-500 rounded-full"></div>
                <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
                    <div className="grid grid-row-2 h-full p-2 py-4 gap-1">
                        <div className="flex content-center flex-wrap row-span-2 text-left font-bold">Username</div>
                        <div className="flex content-center flex-wrap row-span-2 text-left">
                            <Link to="/profile"><Button /></Link></div>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex content-center flex-wrap">
                    <div className="cursor-pointer hover:font-bold w-1/2 p-2 text-left">3 Following</div>
                    <div className="cursor-pointer hover:font-bold w-1/2 p-2 text-left">5 Followers</div>
                </div>
            </div>
            <div className="">
                <div className="cursor-pointer transition duration-300 ease-linear hover:bg-gray-200 pl-2 border-2 rounded-sm border-transparent hover:border-gray-700 flex flex-row content-center flex-wrap  h-12 my-2 text-left font-semibold text-lg justify-between">
                    <Link to="/home">
                        <div className="flex flex-row flex-wrap content-center">
                            <div className="flex flex-row flex-wrap content-center "><Home /></div>
                            <div className="ml-4">Home</div>
                        </div>
                    </Link>
                    <div className="flex flex-wrap text-sm content-center p-1 px-3 bg-red-700 mr-6 text-white border border-white rounded-full">12</div>
                </div>
                <div className="cursor-pointer transition duration-300 ease-linear hover:bg-gray-200 pl-2 border-2 rounded-sm border-transparent hover:border-gray-700 flex flex-row content-center flex-wrap  h-12 my-2 text-left font-semibold text-lg justify-between">
                    <Link to="/Stories">
                        <div className="flex flex-row flex-wrap content-center">
                            <div className="flex flex-row flex-wrap content-center "><Stories /></div>
                                <div className = "ml-4">Stories</div>
                        </div>
                    </Link>
                    <div className="flex flex-wrap text-sm content-center p-1 px-3 bg-red-700 mr-6 text-white border border-white rounded-full">12 new</div>
                </div>
                <Link to ="/library">
                <div className="cursor-pointer transition duration-300 ease-linear hover:bg-gray-200 pl-2 border-2 rounded-sm border-transparent hover:border-gray-700 flex flex-row content-center flex-wrap  h-12 my-2 text-left font-semibold text-lg justify-between">
                        <div className="flex flex-row flex-wrap content-center">
                            <div className="flex flex-row flex-wrap content-center "><Book /></div>
                                <div className = "ml-4">Books</div>
                        </div>
                    </div>
                </Link>
                <Link to='/favorites'>
                    <div className="cursor-pointer transition duration-300 ease-linear hover:bg-gray-200 pl-2 border-2 rounded-sm border-transparent hover:border-gray-700 flex flex-row content-center flex-wrap  h-12 my-2 text-left font-semibold text-lg justify-between">
                        <div className="flex flex-row flex-wrap content-center">
                             <div className="flex flex-row flex-wrap content-center "><Star /></div>
                                <div className = "ml-4">Favorites</div>
                        </div>
                    </div>
                </Link>
                <Link to="/notification">
                <div className="cursor-pointer transition duration-300 ease-linear hover:bg-gray-200 pl-2 border-2 rounded-sm border-transparent hover:border-gray-700 flex flex-row content-center flex-wrap  h-12 my-2 text-left font-semibold text-lg justify-between">
                        <div className = "flex flex-row flex-wrap content-center">
                            <div className="flex flex-row flex-wrap content-center "><Bell /></div>
                                <div className = "ml-4">Notification</div>
                        </div>
                        <div className="flex flex-wrap text-sm content-center p-1 px-3 bg-red-700 mr-6 text-white border border-white rounded-full">1</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;