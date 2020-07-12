import React, { useState } from 'react'
import Books from './profile/Books'
import Button from '../reusables/Button';
import Storylist from '../server/mocks/Storylist';
import Post from '../reusables/Post';
import PictureUpload from '../reusables/PictureUpload';
import { Book, Stories, Star } from '../reusables/Icons';

const Profile = () => {
    const [toggleLibrary, setToggleLibrary] = useState(false)
    const [toggleStories, setToggleStories] = useState(false)
    const [toggleFavorites, setToggleFavorites] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('Ajiboye Mayokun A.')
    const [bio, setBio] = useState('This is my main bio. You have to click it to change it! I wish I can do what I can do')
    const [saving, setSaving] = useState(false)


    const _libraryToggleHandler = () => {
        setToggleLibrary(!toggleLibrary)
    }
    
    const _storyToggleHandler = () => {
        setToggleStories(!toggleStories)
    }

    const _favoritesToggleHandler = () => {
        setToggleFavorites(!toggleFavorites)
    }

    const _goIntoEditMode = () => {
        if(editMode){
            _setSaving()
            setTimeout(() => {
                setSaving(false)
                setEditMode(!editMode)
            }, 2000)
            return
        }
        setEditMode(!editMode)
    }

    function _setTitle(e) {
        setTitle(e.target.value)
    }

    function _setBio(e) {
        setBio(e.target.value)
    }

    const _setSaving = () => {
        setSaving(true)
    }

    const _handleUpload = () => {
        alert('hi')
    }
    return (
        <div className="col-span-7 md:col-span-2 lg:col-span-3 text-gray-700 text-center px-4 py-2 m-2">
            <div className="border border-gray-400 hover:border-2">
                <div className="bg-blue-200 border border-white h-64 rounded-sm">
                    <PictureUpload onChange={_handleUpload}/>
                </div>
                <div>   
                    <div 
                        className="text-left bg-white cursor-pointer border-b border-gray-300 p-2">
                        <div className="font-bold text-2xl mb-2">
                            {!editMode && (
                                <div>{title} <span className="text-sm text-gray-500 font-normal">
                                        <span className="font-normal text-indigo-700">@mayokun</span>
                                    </span>
                                </div>
                            )}
                            
                            {editMode && <input
                                className="p-2 w-full border-2 text-xl font-extrabold  border-black rounded-md"
                                value={title}
                                onChange={_setTitle}
                            />}
                        </div>
                        {!editMode && <div className="my-4">
                            {bio}
                        </div>}
                        <div>
                            {editMode && (
                                <textarea 
                                    className="w-full resize-none p-2 border-2 border-black rounded-md"
                                    onChange={_setBio}>{bio}</textarea>
                            )}
                        </div>
                        <div className="font-sm"></div>
                        <div className="m-2" onClick={_goIntoEditMode}><Button title={editMode ? saving ? 'Saving...' :'Save' : 'Edit'} /></div>
                    </div>

                    <div 
                        className="text-left hover:bg-white cursor-pointer border-b border-gray-300 p-2 flex flex-row justify-between"
                        onClick={_favoritesToggleHandler}>
                        <div className="font-bold flex flex-row">
                            <div className="mr-2"><Star /></div>
                            <div className="flex flex-wrap content-center">Favorites</div>
                        </div>
                        <div className="text-sm text-indigo-400 hover:underline cursor-pointer flex flex-wrap content-center font-medium">20 Stories</div>
                    </div>
                    <div className="mx-2">
                        {toggleFavorites && Storylist.map((story, i)=><Post key={i} data={story}/>)}
                    </div>

                    <div 
                        className="text-left hover:bg-white cursor-pointer border-b border-gray-300 p-2 flex flex-row justify-between"
                        onClick={_libraryToggleHandler}>
                        <div className="font-bold flex flex-row">
                            <div className="mr-2"><Book /></div>
                            <div className="flex flex-wrap content-center">Library</div>
                        </div>
                        <div className="text-sm text-indigo-400 hover:underline cursor-pointer flex flex-wrap content-center font-medium">35 books</div>
                    </div>
                    {toggleLibrary && (<>
                        <div className="text-left transition-all">
                            <Books/>
                            <Books/>
                            <Books/>
                        </div>
                        <div className="mx-4 my-2">
                            <Button title="See All"/>
                        </div>
                    </>)}


                    <div 
                        className="text-left hover:bg-white cursor-pointer p-2 flex flex-row justify-between"
                        onClick={_storyToggleHandler}>
                        <div className="font-bold flex flex-row">
                            <div className="mr-2"><Stories /></div>
                            <div className="flex flex-wrap content-center">Stories</div>
                        </div>
                    </div>
                    <div className="mx-2">
                        {toggleStories && Storylist.map((story, i)=><Post key={i} data={story}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;