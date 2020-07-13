import React from 'react'
import Button from './Button'

const Follower = ({name, followers, following, youFollow, last, unfollow, onClick}) => (
    <div>
        <div className="p-2 flex flex-row flex-wrap justify-between border-b border-gray-200" style={{borderBottomWidth: last ? 0: 1}}>
            <div className="flex flex-row">
                <div className="w-12 h-12 bg-gray-400 border border-gray-500 rounded-full"></div>
                <div className="px-4 flex flex-wrap content-center flex-col">
                    <div className="font-bold">{name}</div>
                    <div className="font-normal text-xs flex flex-row">
                        <div>{followers} Followers</div>
                        <div className="px-2">{following} Following</div>
                    </div>
                </div>
            </div>
            <div className="px-2 flex flex-wrap content-center justify-center flex-col">
                {unfollow && <Button title="Unfollow" onClick={()=>onClick()}/>}
                {youFollow && <Button title="Follow Back" onClick={()=>onClick()}/>}
                {(!youFollow && !unfollow) && <Button title="Following" inactive={true} onClick={()=>onClick()}/>}
            </div>
        </div>
    </div>
)

export default Follower