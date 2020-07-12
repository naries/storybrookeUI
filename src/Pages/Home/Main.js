import React, { useState } from 'react'
import Post from '../../reusables/Post'
import AddPost from '../../reusables/AddPost'
import CreatePost from '../../reusables/CreatePost'
import Storylist from '../../server/mocks/Storylist'

const Main = () => {
    const [loading, setLoading] = useState(false)
    const [creator, showCreator] = useState(false)
    
    const _replaceWithLoading = () => {
        if(loading) _toggleNewStoryCreator() 
        setLoading(!loading)
    }

    const scon = Storylist.filter(story=>story.show)

    const _toggleNewStoryCreator = () => {
        showCreator(!creator)
    }

    const content = <div className="col-span-7 md:col-span-2 lg:col-span-3 text-gray-700 text-center px-4 py-2 m-2 ">
            <AddPost creator={creator} toggleCreator={()=>_toggleNewStoryCreator()} />
            {creator && <CreatePost loading = {loading} replaceLoading={()=>_replaceWithLoading()} />}
            {scon.map((story, i) => <Post key={i} data={story}/>)}
        </div>

    return (
        <>{content}</>
    );
}

export default Main;