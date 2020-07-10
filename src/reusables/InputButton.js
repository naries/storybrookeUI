import React from 'react'

const InputButton = props => (
    <input 
        type="submit" 
        className="cursor-pointer bg-blue-400 transition duration-300 ease-in w-full hover:bg-blue-500 text-white font-bold text-sm p-2 rounded-md font-sans" 
        value={props.title ? props.title : 'Edit Profile'}/>    
);

export default InputButton