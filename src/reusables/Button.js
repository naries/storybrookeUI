import React from 'react'

const Button = ({title, inactive, noButton, onClick}) => (<>
    {!inactive && <div 
        className="text-center cursor-pointer bg-blue-400 transition duration-300 ease-in hover:bg-blue-500 text-white font-bold text-sm p-2 py-1 rounded-md font-sans"
        onClick={()=>onClick()}>
        {title ? title : 'Edit Profile'}
    </div>}
    {inactive && <div 
        onClick={()=>onClick()}
        className="text-center cursor-not-allowed transition duration-300 ease-in text-red-400 font-bold text-sm p-2 py-1 rounded-md font-sans">
        {title ? title : 'Edit Profile'}
    </div>}
    {noButton && <div>asdfasf</div>}
</>);

export default Button;