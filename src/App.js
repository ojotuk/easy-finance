import { Switch, Route } from "react-router-dom";

import Loan from "./pages/dashboard/loan/Loan"
import DeviceCategory from "./pages/dashboard/loan/DeviceCategory"
import DeviceLoanForm from "./pages/dashboard/loan/DeviceForm";
import Route1 from "./pages/dashboard/sample"
import Route2 from "./pages/dashboard/sample3"


function App() {
  return (
    <Switch>
      <Route exact path="/loans" component={Loan} />
      <Route exact path="/loans/:type/:action" component={DeviceCategory} />
      <Route exact path="/loans/:type/:action/:category" component={DeviceLoanForm} />
      <Route exact path="/route 1" component={Route1} />
      <Route exact path="/route 3" component={Route2} />
    </Switch>
  );
}

export default App;
