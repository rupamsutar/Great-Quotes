import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from './components/layout/Layout';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));



function App() {
  return (
    <Layout>
    <Suspense fallback={
      <div className="centered">
        <LoadingSpinner />
      </div>
    }>
    <Switch>
      <Route path="/Great-Quotes">
        <Redirect to="/quotes" />
      </Route>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteID">
        <QuoteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    </Suspense>
    </Layout>
  );
}

export default App;
