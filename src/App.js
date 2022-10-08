
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode =(cls)=>{
    removeBodyClasses();
    
   document.body.classList.add('bg-'+cls)

    if(mode==='light')
    {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "Success");
    
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }

  return (
    <>

    <Router>
      <Navbar title="TextUtils" /*aboutText="About TextUtils"*/ mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
      
      <div className='container my-3'>

        <div className="container">
              <Routes>
                <Route exact path="/about" element={<About mode={mode}/>}>
                </Route>
                <Route exact path="/" element={<TextForm heading=" Try TextUtil - Word Counter, Character Counter, Remove extra spaces"  mode={mode} showAlert={showAlert} />}>
                </Route>
              </Routes>
        </div>

        {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>*/}
        {/*<About/>*/}
      </div>
    </Router>
    
    </>
  );
}

export default App;
