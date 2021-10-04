import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Route1 from "./pages/dashboard/sample";
import Route2 from "./pages/dashboard/sample3";
import Start from "./pages/landing"
const Loan = React.lazy(() => import("./pages/dashboard/loan"));
const Category = React.lazy(() => import("./pages/dashboard/loan/DeviceCategory"));
const Form = React.lazy(() => import("./pages/dashboard/loan/DeviceForm"));

const LoanPage = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Loan />
  </Suspense>
);
const CategoryPage = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Category />
  </Suspense>
);

const FormPage = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Form />
  </Suspense>
);

function App() {
  return (
    <Switch>
      <Route exact path="/loans" component={LoanPage} />
      <Route exact path="/loans/:type/:action" component={CategoryPage} />
      <Route
        exact
        path="/loans/:type/:action/:category"
        component={FormPage}
      />
      <Route exact path="/route 1" component={Route1} />
      <Route exact path="/route 3" component={Route2} />
      <Route component={Start} />
    </Switch>
  );
}

export default App;
