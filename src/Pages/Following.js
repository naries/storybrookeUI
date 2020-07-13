import React, { useState } from 'react'
import Empty from '../reusables/Empty'
import Follower from '../reusables/Follower';

const following = [    
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    },
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34
    }
];



const Following = () => {
    const [followState, setFollowState] = useState(following)

    const _setFollowState = (i) => {
        let newFollowState = [...followState].filter((follow, index) => index !== i)
        setFollowState(newFollowState)
        
    }
    return (<div className="h-screen overflow-auto bg-white border border-gray-300 col-span-7 md:col-span-2 lg:col-span-3 text-gray-700 text-center m-2 ">
                <div className="text-gray-600 text-xl font-bold text-left m-2">Following</div>
                {followState.length === 0 && <Empty title="You are following no one." buttonTitle="Suggestions" link="suggestions"/>}
                <div className="text-left">
                {followState.map(({name, following, follow}, i) => 
                    <Follower
                        key = {i}
                        name={name} 
                        followers={follow} 
                        following={following}
                        unfollow={true}
                        onClick={()=>_setFollowState(i)}
                        last={i === following.length - 1 ? true: false}
                    />
                )}
            </div>
        </div>
    )
}

export default Following;