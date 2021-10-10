@import React from 'react';

export const MainCard = () => {
    

    const handleClick = ({target}) => {
      
    }

    return (
        <section className="main-card">
            <div className="main-card__bio">
                <img className="main-card__image" src="../../images/image-jeremy.png" />
                <p className="main-card__text">Report for <span className="main-card__name">Jeremy Robson</span></p>
            </div>
            <div className="main-card__btn-container">
                <button className="main-card__btn" type="button" onClick={handleClick}>Daily</button>
                <button className="main-card__btn" type="button" onClick={handleClick}>Weekly</button>
                <button className="main-card__btn" type="button" onClick={handleClick}>Monthly</button>
            </div>
        </section>
    );
}