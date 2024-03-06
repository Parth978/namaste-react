import React from 'react'
import { CDN_URL } from '../utils/constant';

const RestroCard = (props) => {
  const { restroInfo } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = restroInfo?.info;
  return (
    <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
      <img className='res-logo' alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>
        {name}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  )
}

export default RestroCard