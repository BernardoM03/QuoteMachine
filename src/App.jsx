import React from "react";
import data from "./data.jsx";


export default function App() {
    const [quotesData, setQuotesData] = React.useState(data);
    const [featuredQuote, setFeaturedQuote] = React.useState(quotesData.quotes[0]);

    function generateQuote() {
        const numQuotes = quotesData.quotes.length - 1;
        const rngNum = Math.ceil(Math.random() * numQuotes);
        setFeaturedQuote(quotesData.quotes[rngNum]);
    }

    return (
        <main className="container" id="quote-box">
            <div className="quote">
                <h1 className="text" id="text">{featuredQuote.quote}</h1>
                <h2 className="author" id="author">~{featuredQuote.author}</h2>
            </div>
            <button className="new-quote" id="new-quote" onClick={generateQuote}>New Quote</button>
            <a class="tweet-quote" id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
        </main>
    )
}