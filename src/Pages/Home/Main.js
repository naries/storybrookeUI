import React from 'react'
import Post from '../../reusables/Post'
import AddPost from '../../reusables/AddPost'

const Main = () => {
    return (
        <div className="col-span-7 md:col-span-2 lg:col-span-3 text-gray-700 text-center px-4 py-2 m-2 ">
            <AddPost />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Main;