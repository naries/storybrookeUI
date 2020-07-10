import React from 'react'

const Button = props => (
    <div className="cursor-pointer bg-blue-400 transition duration-300 ease-in hover:bg-blue-500 text-white font-bold text-sm p-2 rounded-md font-sans">
        {props.title ? props.title : 'Edit Profile'}
    </div>    
);

export default Button;