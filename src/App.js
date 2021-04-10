import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ThemeContextProvider from './Theme/ThemeContext'
import Recipe from './Recipe'


function App() {
    
   
  return (
    
    <Router >
      
          <div className="App">
      
            <ThemeContextProvider>
   
                 <Navbar/>
                  <Switch>
                    <Route exact path="/">  <Home/>  </Route>
                    <Route exact path="/Recipe"> <Recipe/> </Route>
                  </Switch>   
                
               </ThemeContextProvider>
        
              </div>
         
     </Router>
    
  );
}


export default App;
