import React from 'react'
import { Link } from 'react-router-dom'

const Empty = ({title, buttonTitle, link}) => (
    <div className="h-full bg-gray-300 text-center flex flex-wrap justify-center content-center font-medium">
        <div>
             {title} {buttonTitle && (<><span>See </span><span className="hover:text-red-800 cursor-pointer font-bold text-blue-800"><Link to={link}>{buttonTitle}</Link></span>.</>)}
        </div>
    </div>
);

export default Empty;