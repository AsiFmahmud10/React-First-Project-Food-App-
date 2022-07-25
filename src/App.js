import './App.css'
import Navbar from './Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ThemeContextProvider from './Theme/ThemeContext'
import Recipe from './Recipe'
import Searchbar from './Searchbar'
import DataContextProvider from './dataContext/DataContext'


function App() {
    
   
  return (
    
    <Router >
      
          <div className="App">
      
            <ThemeContextProvider>
                  <DataContextProvider>
                                  <Navbar/>
                                    <Switch>
                                    <Route exact path="/">
                                             <Searchbar/>
                                         </Route> 

                                          <Route exact path="/Recipe">  
                                              <Recipe/> 
                                          </Route>
                                       
                                    </Switch>   
                          </DataContextProvider>
               </ThemeContextProvider>
        
              </div>
         
     </Router>
    
  );
}


export default App;
