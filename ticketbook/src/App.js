import "./App.css";
import Navbar from "./components/navbar/navbar";

import Home from "./components/home/home";
import Moviee from "./components/movie-details/moviee";
import Ticketsummary from "./components/ticket-booking/ticketsummary";
import Footer from "./components/footer/footer";
import Avatar from "./components/movie-details/avatar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/moviee" exact>
          <Moviee />
        </Route>
        <Route path="/moviee/avatar" exact>
          <Avatar />
        </Route>
        <Route path="/ticketsummary" exact>
          <Ticketsummary />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
