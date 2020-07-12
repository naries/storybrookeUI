import React from 'react'

export default props => <div className='h-full '>
    <div className='flex flex-wrap justify-end m-2'>
        <label className="shadow-lg bg-gray-500 cursor-pointer text-white border-2 border-transparent py-1 px-2 text-sm rounded-md" htmlFor='single'>Change</label>
        <input style={{display:'none'}} type='file' id='single' onChange={props.onChange} /> 
    </div>
</div>