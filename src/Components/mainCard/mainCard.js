import './mainCard.css';

export const MainCard = ({ handleClick }) => {
    

    return (
        <section className="main-card">
            <div className="main-card__bio">
                <div className="main-card__image"></div>
                <p className="main-card__text">Report for <span className="main-card__name">Jeremy Robson</span></p>
            </div>
            <div className="main-card__btn-container">
                <button className="main-card__btn main-card__btn--active" type="button" onClick={handleClick}>Daily</button>
                <button className="main-card__btn" type="button" onClick={handleClick}>Weekly</button>
                <button className="main-card__btn" type="button" onClick={handleClick}>Monthly</button>
            </div>
        </section>
    );
}