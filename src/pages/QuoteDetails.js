import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


const QuoteDetails = () => {
    const params = useParams();

    const {sendRequest, status, data:loadedQuote, error} = useHttp(getSingleQuote, true);
    const match = useRouteMatch();

    const {quoteID} = params;

    useEffect(() => {
        sendRequest(quoteID);
    },[sendRequest, quoteID]);    

    if (status === "pending") {
        return <div className="centered"> 
            <LoadingSpinner />
        </div>
    };

    if (error) {
        return <p className="centered focused">{error}</p>
    };

    if (!loadedQuote) {
        return <p>No Quotes Found</p>
    };

    return(
        <React.Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`${match.url}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.url}/comments`}>
                <Comments quoteId={quoteID}/>
            </Route>
        </React.Fragment>
    )
}

export default QuoteDetails;