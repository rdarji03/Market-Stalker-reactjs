import React from 'react';
import stats_loader from "./stats.gif"
const StatsLoader = () => {
    return (
        <section className="stats_loader flex justify-center sm:flex sm:justify-center">
            <img src={stats_loader} alt="" />
        </section>
    );
}

export default StatsLoader;
