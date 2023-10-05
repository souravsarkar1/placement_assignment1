import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Home.css"
import { getData, makeEmapyData } from '../../Redux/DataReducer/action';
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(st => st.DataReducer.data);
  // const isError = useSelector(st => st.DataReducer.isError);
const navigate = useNavigate();
  console.log(data);
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getData(username));
  };
  const hanldeEmptyData = ()=>{
    dispatch(makeEmapyData());
  }
if (data.length>0) {
  navigate("/repo")
}

  return (
    <div className="home-container">
      <h1>GitHub Profile Search</h1>
      {data.length !== 0 ?
      <button onClick={hanldeEmptyData}>Make Empty Data</button>
    :
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      }
    </div>
  );
};

export default React.memo(Home);
