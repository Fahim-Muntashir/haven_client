import React from 'react';
import ReactStars from "react-rating-stars-component";

const Ratings = () => {
    return (
        <div>
            <ReactStars
                className=""
                edit={false}
                count={5}
                size={24}
                value={4.3}
                activeColor="#ffd700"
            />
        </div>
    );
};

export default Ratings;