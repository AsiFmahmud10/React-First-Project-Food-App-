import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DataContextProvider from "./dataContext/DataContext";
import Navbar from "./components/Navbar";
import Recipe from "./page/Recipe";
import Searchbar from "./components/Searchbar";
import ThemeContextProvider from "./theme/ThemeContext";

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeContextProvider>
          <DataContextProvider>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Searchbar />
              </Route>

              <Route exact path="/Recipe">
                <Recipe />
              </Route>
            </Switch>
          </DataContextProvider>
        </ThemeContextProvider>
      </div>
    </Router>
  );
}

export default App;
