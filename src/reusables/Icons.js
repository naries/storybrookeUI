import React from 'react'
import {ReactComponent as DownArrow} from '../assets/chevron-down.svg'
import {ReactComponent as HomeIcon} from '../assets/home.svg'
import {ReactComponent as StoryIcon} from '../assets/bookmark-alt.svg'
import {ReactComponent as BookIcon} from '../assets/book.svg'
import {ReactComponent as StarIcon} from '../assets/star.svg'
import {ReactComponent as StarredIcon} from '../assets/star-filled.svg'
import {ReactComponent as BellIcon} from '../assets/alarm.svg'
import {ReactComponent as PlusIcon} from '../assets/plus.svg'
import {ReactComponent as LikeIcon} from '../assets/heart.svg'
import {ReactComponent as LikedIcon} from '../assets/heart-filled.svg'
import {ReactComponent as CommentIcon} from '../assets/bubble.svg'

const Down = () => (
    <DownArrow className="h-5 w-5 text-gray-200" />
);

const Home = () => (
    <HomeIcon className="h-5 w-56text-gray-200" />
)

const Stories = () => (
    <StoryIcon className="h-5 w-5 text-gray-200" />
)

const Book = () => (
    <BookIcon className="h-5 w-5 text-gray-200"/>
)

const Star = () => (
    <StarIcon className="h-5 w-5 text-gray-200" />
)

const Starred = () => (
    <StarredIcon className="h-5 w-5 text-gray-200" />
)

const Bell = () => (
    <BellIcon className="h-5 w-5 text-gray-200" />
)

const Add = () => (
    <PlusIcon className="h-5 w-5 text-gray-200" />
)

const Like = () => (
    <LikeIcon className="h-5 w-5 text-gray-200" />
)

const Liked = () => (
    <LikedIcon className="h-5 w-5 text-gray-200" />
)

const Comment = () => (
    <CommentIcon className="h-5 w-5 text-gray-200" />
)

export {Down, Home, Stories, Book, Star, Bell, Add, Like, Liked, Comment, Starred};