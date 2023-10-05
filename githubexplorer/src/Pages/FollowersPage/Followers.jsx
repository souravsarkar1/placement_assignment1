import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FollowerCard from '../../Components/Follower/FollowerCard';
import "./Follwer.css"
import { useNavigate } from 'react-router-dom';

const Follower = () => {
  const [follower, setFollower] = useState([]);
  const data = useSelector(st => st.DataReducer.data);
  const navigate = useNavigate();
  console.log(data[0].owner.followers_url);
  let url = data[0].owner.followers_url

  useEffect(() => {
    if (data.length === 0) {
      navigate("/")
    }
    axios.get(url).then((res) => {
      console.log(res.data);
      setFollower(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [data, url,navigate])

  return (
    <div>
    <br />

      <h1>Follower</h1>
      <div className='follower-container'>
      {follower.map(el => (
        <FollowerCard key={el.id} {...el} />
      ))}
      </div>
      
    </div>
  )
}

export default Follower
