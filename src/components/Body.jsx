import React, { useState } from 'react'
import RestroCard from './RestroCard'
import { resList } from '../utils/mockData'

const Body = () => {

  const [restroList, setRestroList] = useState(resList);

const handleClick = () => {
  const updatedList = resList.filter((restro) => restro.info.avgRating > 4);
  console.log(updatedList);
  setRestroList(updatedList);
}

return (
  <div>
    <div className='filter'>
      <button className='filter-btn' onClick={handleClick}>Top Rated Restaurants</button>
    </div>
    <div className='res-container'>
      {restroList.map((restro) => (
        <RestroCard key={restro.info.id} restroInfo={restro} />
      ))}
    </div>
  </div>
)
}

export default Body
