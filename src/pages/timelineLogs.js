// Nouvelle version dynamique de la timeline avec popup positionnée au-dessus du point actif
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const sampleData = {
    "2024-11": [
        {
            id: 1,
            title: "Ajout post",
            date: "2024-11-29",
            image: "http://localhost:3333/uploads/1750689105117-647335.jpg",
        },
        {
            id: 2,
            title: "Participation au concours",
            date: "2024-11-20",
            image: "http://localhost:3333/uploads/1750688646679-898577.jpg",
        },
        {
            id: 4,
            title: "Ajout post (bis)",
            date: "2024-11-29",
            image: "http://localhost:3333/uploads/1750702828620-891548.jpg",
        },
    ],
    "2024-10": [
        {
            id: 3,
            title: "Like d'un post",
            date: "2024-10-15",
            image: "http://localhost:3333/uploads/1750702828620-891548.jpg",
        },
    ],
};

const getFormattedMonth = (date) => {
    const options = { year: "numeric", month: "long" };
    return new Date(date + "-01").toLocaleDateString("fr-FR", options);
};

export default function Timeline() {
    const months = Object.keys(sampleData).sort((a, b) => b.localeCompare(a));
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [popupLeft, setPopupLeft] = useState(null);
    const pointRefs = useRef({});

    const currentMonth = months[currentMonthIndex];
    const activities = sampleData[currentMonth];

    const groupedByDate = activities.reduce((acc, activity) => {
        if (!acc[activity.date]) acc[activity.date] = [];
        acc[activity.date].push(activity);
        return acc;
    }, {});

    const year = parseInt(currentMonth.split("-")[0]);
    const month = parseInt(currentMonth.split("-")[1]) - 1;
    const totalDays = new Date(year, month + 1, 0).getDate();

    const handlePrevMonth = () => {
        if (currentMonthIndex < months.length - 1) setCurrentMonthIndex(currentMonthIndex + 1);
        setSelectedDate(null);
    };

    const handleNextMonth = () => {
        if (currentMonthIndex > 0) setCurrentMonthIndex(currentMonthIndex - 1);
        setSelectedDate(null);
    };

    const handlePrevActivity = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNextActivity = () => {
        const currentActivities = groupedByDate[selectedDate];
        setSelectedIndex((prev) =>
            prev < currentActivities.length - 1 ? prev + 1 : prev
        );
    };

    useEffect(() => {
        if (selectedDate && pointRefs.current[selectedDate]) {
            const point = pointRefs.current[selectedDate];
            const rect = point.getBoundingClientRect();
            const center = rect.left + rect.width / 2;
            setPopupLeft(center);
        }
    }, [selectedDate, currentMonthIndex]);

    useEffect(() => {
        if (!selectedDate) {
            const firstDate = Object.keys(groupedByDate).sort((a, b) => new Date(a) - new Date(b))[0];
            if (firstDate) setSelectedDate(firstDate);
        }
    }, [currentMonthIndex]);

    return (
        <div className="timeline-container">
            <div className="timeline-header">
                <button className="timeline-header-btn" onClick={handlePrevMonth}>
                    <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
                </button>
                <h1 className="timeline-h1-header">{getFormattedMonth(currentMonth)}</h1>
                <button className="timeline-header-btn" onClick={handleNextMonth}>
                    <FontAwesomeIcon icon={faChevronRight} size="2xl" />
                </button>
            </div>

            {selectedDate && popupLeft !== null && (
                <div
                    className="timeline-popup"
                    style={{ left: `${popupLeft}px`, transform: "translateX(-50%)" }}
                >
                    <div className="popup-header">
                        <button onClick={handlePrevActivity}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <div>
                            <span>{groupedByDate[selectedDate][selectedIndex].title}</span>
                            <small>{groupedByDate[selectedDate][selectedIndex].date}</small>
                        </div>
                        <button onClick={handleNextActivity}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                    <div className="popup-image-container">
                        <img
                            src={groupedByDate[selectedDate][selectedIndex].image}
                            alt="activite"
                        />
                        <div className="popup-index">
                            {selectedIndex + 1}/{groupedByDate[selectedDate].length}
                        </div>
                    </div>
                    <div className="popup-arrow" />
                </div>
            )}

            <div className="timeline-bar">
                {[...Array(totalDays)].map((_, i) => {
                    const day = i + 1;
                    const dayStr = `${currentMonth}-${String(day).padStart(2, "0")}`;
                    const hasActivity = groupedByDate[dayStr];

                    return (
                        <div
                            key={dayStr}
                            ref={(el) => (pointRefs.current[dayStr] = el)}
                            className={`timeline-point ${hasActivity ? "has-data" : "no-data"} ${
                                selectedDate === dayStr ? "active" : ""
                            }`}
                            onClick={() => {
                                if (hasActivity) {
                                    setSelectedDate(dayStr);
                                    setSelectedIndex(0);
                                }
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
