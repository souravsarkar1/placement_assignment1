import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/RepoDetelas/Card';
import "./RepoDeteals.css"
const RepoDetiels = () => {
  const navigate = useNavigate();
  const data = useSelector(st => st.DataReducer.data);
  useEffect(() => {
    if (data.length === 0) {
      navigate("/")
    }
  }, [data, navigate])
  return (
    <div>
    <br />
      <h1>RepoDetiels</h1>
      <div className='container'>
        {data.length > 0 && data?.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>

    </div>
  )
}

export default RepoDetiels
