import React from 'react'
import Empty from '../reusables/Empty'
import Follower from '../reusables/Follower';

const followers = [
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
        youFollow: false
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34,
        youFollow: true
    },
    {
        name: "Mayokun Ayobami o.",
        following: 159,
        follow: 137,
        youFollow: true,
    },{
        name: "Ajiboye Mayokun A.",
        following: 23,
        follow: 34,
        youFollow: true
    }
];

const Followers = () => (
    <div className="bg-white border border-gray-300 col-span-7 md:col-span-2 lg:col-span-3 text-gray-700 text-center m-2 ">
        <div className="text-gray-600 text-xl font-bold text-left m-2">Followers</div>
        {followers.length === 0 && <Empty title="You have no followers. They'll show up here when you do!"/>}
        <div className="text-left">
            {followers.map(({name, following, follow, youFollow}, i) => 
                <Follower 
                    key = {i} 
                    name={name} 
                    followers={follow} 
                    following={following} 
                    youFollow={youFollow}
                    last={i === followers.length - 1 ? true: false}
                />
            )}
        </div>
    </div> 
);

export default Followers;