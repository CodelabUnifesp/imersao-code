import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Body } from "./Components/Body";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Receitas from "./Pages/Receitas";
import Receita from "./Pages/Receita"; 
import Sobre from "./Pages/Sobre";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/receitas">
              <Receitas />
            </Route>
            <Route exact path="/receitas/:id" component={Receita}>
            </Route>
            <Route path="/sobre">
              <Sobre />
            </Route>
          </Switch>
        </Body>
      </div>
    </BrowserRouter>
  );
}

export default App;
