import React, { useState } from 'react'
import { Down, Like, Liked, Comment, Starred, Star } from '../reusables/Icons'

const Post = () => {
    const [liked, setLiked] = useState(false)
    const [starred, setStarred] = useState(false)
    const [menu, showMenu] = useState(false)

    const _setLiked = () => {
        setLiked(!liked)
    }

    const _setStarred = () => {
        setStarred(!starred)
    }

    const _showDropDown = () => {
        showMenu(!menu)
    }

    return(
        <div className="bg-white transition duration-150 ease-linear hover:bg-gray-100 cursor-pointer hover:border-gray-500 rounded-sm border border-gray-300 my-4">
            <div className="flex flex-wrap flex-row w-full h-16 p-2 justify-between">
                <div className="flex flex-wrap flex-row">
                    <div className="ml-2 h-12 w-12 bg-gray-400 rounded-full"></div>
                    <div className="flex flex-wrap content-center font-bold h-full ml-4 text-left">Author of this story</div>
                </div>
                <div className="hover:bg-gray-200 relative" ><div className="flex flex-wrap content-center text-center h-12 p-2 " onClick={()=>_showDropDown()}><Down /></div>
                    <div className="bg-white border border-gray-300 absolute w-48 z-10 top-auto right-0 p-4 text-left" style={{display: menu ? 'block': 'none'}}>
                        <div className="py-2 px-2 hover:font-medium">Hide post</div>
                        <div className="py-2 px-2 hover:font-medium">View Author Profile</div>
                        <div className="py-2 px-2 hover:font-medium">Unfollow Author</div>
                        <div className="py-2 px-2 hover:font-medium" onClick={()=>_showDropDown()}>Cancel</div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="m-4 text-left text-xl font-medium">Title of this story</div>
                <div className="text-left mt-4 ml-4 mr-4">The story shows up over here with a smaller font. The space here is not that much to view the story.</div>
                <div className="text-left ml-4 text-blue-600">...see more</div>
            </div>
            <div className="py-6">
                <div className="flex flex-wrap content-center px-4 text-left mb-2" onClick={_setLiked}>{ !liked ? <Like /> : <Liked /> }  <div className="ml-2"><span className="font-bold hover:underline">madboy01</span> and 299 like this story</div></div>
                <div className="flex flex-wrap content-center px-4 text-left mb-2" onClick={_setStarred}>{ !starred ? <Star /> : <Starred /> } <div className="ml-2">Add to favorites</div></div>
                <div className="flex flex-wrap content-center px-4 text-left"><Comment />  <div className="ml-2">30</div></div>
            </div>
        </div>
    )
};

export default Post;