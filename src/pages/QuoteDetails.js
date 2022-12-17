import React from "react";
import { useParams} from "react-router-dom";
const QuoteDetails = () => {
    const params = useParams();
    return(
        <React.Fragment>
            <h1>QuoteDetails</h1>
            <h2>{params.quoteID}</h2>
        </React.Fragment>
    )
}

export default QuoteDetails;