import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetails = () => {

    const match = useRouteMatch();

    const DUMMY_QUOTES = [
        {id: "q1", author:"Rupam", text: "Full-stack development is GREAT !"},
        {id:"q2", author:"Pranali", text:"Testing is L O V E !"}
    ];

    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteID);
    if (!quote) {
        return <p>No Quote Found</p>
    }

    return(
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`${match.url}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.url}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    )
}

export default QuoteDetails;