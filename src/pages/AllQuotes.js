import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [{id: "q1", author:"Rupam", text: "Full-stack development is GREAT !"},
    {id:"q2", author:"Pranali", text:"Testing is L O V E !"}];

const AllQuotes = () => {
    return(
            <QuoteList quotes={DUMMY_QUOTES} />        
    )
}

export default AllQuotes;