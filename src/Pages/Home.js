import React from 'react'
import '../assets/main.css'
import Sidebar from './Home/Sidebar'
import Main from './Home/Main'
import Sidepane from './Home/Sidepane'

const Home = () => (
    <>
        <div className="grid bg-gray-100 gap-4 grid-cols-7 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-7 px-0 sm:px-0 md:px-8 lg:px-16">
            <Sidebar />
            <Main />
            <Sidepane />
        </div>
    </>
);

export default Home;