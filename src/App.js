import './App.css';
import {BrowserRouter as Router, Routes,Route} from'react-router-dom'
import InputPage from './Pages/InputPage/inputPage';
import OutputPage from './Pages/OutputPage/outputPage';
import {createContext,useReducer} from 'react';
import reducer from './reducer.js'
import Header from './components/header/header';
export const AppContext=createContext(null);


function App() {
    const defaultState={noOfItems:0,items:[]}
    const [state,dispatch]=useReducer(reducer,defaultState)
  
  return (
  <AppContext.Provider value={{state,dispatch}}>

  <Router>
    <Header/>
    <Routes>
      <Route path='/' exact element={<InputPage/>} />
      <Route path='/output' exact element={<OutputPage/>} />

    </Routes>
  </Router>

  </AppContext.Provider>
    );
}

export default App;
