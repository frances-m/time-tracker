import { useEffect, useState } from "react"
import { Card } from "../card/Card";

export const Cards = ({ timeFrame }) => {
    const [timeData, setTimeData] = useState({
        work: {},
        play: {},
        study: {},
        exercise: {},
        social: {},
        selfcare: {}
    });

    useEffect(() => {
        const formatTimeFrame = timeFrame.toLowerCase();

        async function fetchData() {
            const response = await fetch("../../../data.json");
            const data = await response.json();

            data.forEach((item, i) => {
                let dataType = item.title;
                let timeDataKey = dataType.toLowerCase().replace(" ", "");
                setTimeData(prev => ({
                    ...prev, 
                    [timeDataKey]: {
                        type: dataType, 
                        current: item.timeframes[formatTimeFrame].current,
                        previous: item.timeframes[formatTimeFrame].previous,
                    }
                }));
            });
        }
        fetchData();
    }, [timeFrame]);

    const time = () => {
        switch (timeFrame) {
            case 'Daily': 
              return "Yesterday";
            case 'Weekly':
                return "Last Week";
            case 'Monthly':
                return "Last Month";
            default: 
              return "Loading...";
        }
    }

    const types = Object.keys(timeData);

    return (
        <div className="cards">
            <Card data={timeData.work} time={time()} type={types[0]} />
            <Card data={timeData.play} time={time()} type={types[1]} />
            <Card data={timeData.study} time={time()} type={types[2]} />
            <Card data={timeData.exercise} time={time()} type={types[3]} />
            <Card data={timeData.social} time={time()} type={types[4]} />
            <Card data={timeData.selfcare} time={time()} type={types[5]} />
        </div>
    )

}