import React from 'react';
import TopNews from "./TopNews";
import ForexNews from './ForexNews';
import CryptoNews from './CryptoNews';
import StockNews from './StockNews';

const News = () => {
    return (
        <div>
            <TopNews/>
            <ForexNews/>
            <CryptoNews/>
            <StockNews/>
        </div>
    );
}

export default News;
