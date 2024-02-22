import React from 'react';
import "../card.css";

const cardOne = "https://thumbs.dreamstime.com/b/sweeper-cleaning-road-broom-worker-working-site-sweeping-toll-plaza-his-routine-had-71380676.jpg";


const Card = () => {
  return (
    
        <div className='card_container'>
                <div><img src={cardOne} alt="card-img"/> </div>
                <h1>Waste pickers</h1>
                <span>by Satyendra Singh</span>
                <p>Every struggles of those who keeps our street clean.
                If we look at the life of...</p>
                <button>Read More</button>
        </div>
    
  )
}

export default Card