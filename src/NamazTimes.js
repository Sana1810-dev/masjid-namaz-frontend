import React, { useEffect, useState } from "react";
import axios from "axios";

const NamazTimes = () => {
    const [namazTimes, setNamazTimes] = useState({});

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/namaz-times")
            .then(response => setNamazTimes(response.data))
            .catch(error => console.error("Error fetching namaz times", error));
    }, []);

    return (
        <div>
            <h2>Masjid Namaz Timings</h2>
            <ul>
                {Object.entries(namazTimes).map(([prayer, time]) => (
                    <li key={prayer}>{prayer}: {time}</li>
                ))}
            </ul>
        </div>
    );
};

export default NamazTimes;
