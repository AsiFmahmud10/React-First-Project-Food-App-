import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ThemeContextProvider from './Theme/ThemeContext'


function App() {
    
   
  return (
    
    <Router >
      
          <div className="App">
      
            <ThemeContextProvider>
   
                 <Navbar/>
                  <Home/>     
                
               </ThemeContextProvider>
        
              </div>
         
     </Router>
    
  );
}


export default App;
