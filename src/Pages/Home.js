import React from 'react'
import '../assets/main.css'
import Sidebar from './Home/Sidebar'
import Main from './Home/Main'
import Sidepane from './Home/Sidepane'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Profile from './Profile'
import Favorites from './Favorites'
import Library from './Library'
import Notification from './Notification'
import Stories from './Stories'
import Followers from './Followers'
import Following from './Following'
import Suggestions from './Suggestions'
const Home = () => (
    <>
        <div 
        className="grid bg-gray-100 gap-4 h-screen grid-cols-7 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-7 px-0 sm:px-0 md:px-8 lg:px-16" 
        style={{backgroundColor: '#fefefe'}}>
            <Router>
                <Sidebar />
                    <Switch>
                        <Route exact path="/">
                            <Redirect to='/home'/>
                        </Route>

                        <Route path="/home">
                            <Main />
                        </Route>

                        <Route path="/favorites">
                            <Favorites />
                        </Route>

                        <Route path="/notification">
                            <Notification />
                        </Route>

                        <Route path="/library">
                            <Library />
                        </Route>

                        <Route path="/stories">
                            <Stories />
                        </Route>

                        <Route path="/profile">
                            <Profile/>
                        </Route>

                        <Route path="/followers">
                            <Followers/>
                        </Route>

                        <Route path="/Following">
                            <Following />
                        </Route>
                        <Route path="/suggestions">
                            <Suggestions />
                        </Route>
                    </Switch>
                <Sidepane />
            </Router>
        </div>
    </>
);

export default Home;