import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')    // Wheather Dark Mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
      // setInterval(() => {
      //   document.title="TextUtils is Amazing"
      // }, 1000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now"
      // }, 2000);
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#18096a'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    // <Router>
      <div>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <Textform heading="Enter the the to analyze below" mode={mode} showAlert={showAlert} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
    // </Router>
  )
}

export default App;
