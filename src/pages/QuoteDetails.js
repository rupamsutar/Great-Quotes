import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments"
const QuoteDetails = () => {
    const params = useParams();
    return(
        <React.Fragment>
            <h1>QuoteDetails</h1>
            <h2>{params.quoteID}</h2>
            <Route path={`/quotes/${params.quoteID}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    )
}

export default QuoteDetails;