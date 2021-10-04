import { Switch, Route } from "react-router-dom";

import Loan from "./pages/dashboard/loan"
import Route1 from "./pages/dashboard/sample"
import Route2 from "./pages/dashboard/sample3"


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Loan} />
      <Route exact path="/route 1" component={Route1} />
      <Route exact path="/route 3" component={Route2} />
    </Switch>
  );
}

export default App;
