import React from 'react';
import './CountryCard.css';

const CountryCard = ({ elementValue }) => {
    console.log(elementValue)
    return (
        <div className='countryCardContainer'>
            <div className='card'>
                <div className='country'>{elementValue && elementValue.country}</div>
                <img src={elementValue && elementValue.imgUrl} alt={elementValue && elementValue.country} />
                <div className='subheading'><div className='separate'>Nickname:</div><div className='description'>{elementValue && elementValue.nickName}</div></div>
                <div className='subheading'><div className='separate'>Federation: </div><div className='description'>{elementValue && elementValue.federation}</div></div>
                <div className='subheading'><div className='separate'>Coach: </div><div className='description'>{elementValue && elementValue.coach}</div></div>
                <div className='subheading'><div className='separate'>Captain: </div><div className='description'>{elementValue && elementValue.captain}</div></div>
                <div className='subheading'><div className='separate'>Confederation: </div><div className='description'>{elementValue && elementValue.confederation}</div></div>
            </div>
            Click anywhere to go back
        </div>
    )
}

export default CountryCard
