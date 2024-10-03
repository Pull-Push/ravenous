import React from 'react';


export function Business() {
    const business = {
        image: 'images/macks.jpg',
        name: "MaCk's American Bar and Grill",
        address: "300 Wanaque Ave",
        city: "Pompton Lakes",
        state: "NJ",
        zipcode: "07442",
        category: "American",
        rating: 4.0,
        reviewCount: 140
    }
    return (
        <div>
            <img style={{ width: 270, height: 270 }} src={business.image} alt={business.name} />
            <h4>{business.name}</h4>
            <div className='details'>
                <div className='details-left'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipcode}</p>
                </div>
                <div className='details-right'>
                    <p>{business.category}</p>
                    <p>{business.rating} stars</p>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
};