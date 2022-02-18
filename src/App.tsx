import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { ResultPage } from "./pages/ResultPage";
import { Page404 } from "./pages/Page404";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route path="/result/">
            <ResultPage />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
