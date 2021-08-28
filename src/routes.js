import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Favoritos from "./Pages/Favoritos";
import Blog from "./Pages/BlogInfo";
const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={Blog} /> 
        <Route exact path="/favoritos" component={Favoritos} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
