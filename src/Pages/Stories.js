import React from 'react'
import Post from '../reusables/Post'
import Storylist from '../server/mocks/Storylist'

const Stories = () => {
    const scon = Storylist.filter(story=>story.show)


    const content = <div className="col-span-7 md:col-span-2 lg:col-span-3 text-gray-700 text-center px-4 py-2 m-2 ">
            {scon.map((story, i) => <Post key={i} data={story}/>)}
        </div>

    return (
        <>{content}</>
    );
}

export default Stories;