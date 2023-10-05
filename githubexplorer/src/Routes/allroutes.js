import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Follower from '../Pages/FollowersPage/Followers'
import FollowerRepo from '../Pages/FollowerRepositoryList/Home'
import RepoDetiels from '../Pages/RepositoryDetailsPage/RepoDetelas'
import { PrivateRoute } from './PrivateRoutes'


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/follower' element={<PrivateRoute><Follower /></PrivateRoute>} />
                <Route path='/followerrepolist' element={<PrivateRoute><FollowerRepo /></PrivateRoute>} />
                <Route path='/repo' element={<PrivateRoute><RepoDetiels /></PrivateRoute>} />
            </Routes>
        </div>
    )
}

export default AllRoutes
