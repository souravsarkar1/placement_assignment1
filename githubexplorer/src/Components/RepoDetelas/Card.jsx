import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'

const Card = ({ name, owner, languages_url, fork, url, created_at, updated_at, pushed_at, svn_url, forks_count }) => {
    return (
        <div className='manindiv'>
            <div className="fistDiv">
                <h5>Repo : {name}</h5>
                <img src={owner.avatar_url} alt="" />
                <br />
                <Link className='Link' to={url} target='_blank'>Main Repo</Link>
                <br />
                <Link className='Link' to={languages_url} target='_blank'>Language Used</Link>
                <br />

            </div>
            <div className="secondDiv">
                <p>Created at : {created_at}</p>
                <p>Last Update : {updated_at}</p>
                <p>Last Pushed on : {pushed_at}</p>
            </div>
            <div className="thirdDiv">
                <Link className='Link' target='_blank' to={svn_url}>Go To Repo</Link>
                <p>Total Fork : {forks_count}</p>
                <p>{fork ? "Forked Repo" : "Main Repo"}</p>
                <Link className='Link' to={'/follower'}>Follwer</Link>
            </div>
        </div>
    )
}

export default Card
