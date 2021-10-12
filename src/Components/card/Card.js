import './card.css';

export const Card = ({data, time, type}) => {

    return (
        <div className={`card card--${type}`}>
            <div className={`card__header card__header--${type}`}></div>
            <div className="card__content">
                <div className="card__lines">
                    <p className="card__title">{data.type}</p>
                    <button className="card__button" type="button"><svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></button>
                </div>
                <div className="card__lines">
                    <p className="card__current">{`${data.current}hrs`}</p>
                    <p className="card__previous">{`${time} - ${data.previous}hrs`}</p>
                </div>
            </div>
        </div>
    );
}