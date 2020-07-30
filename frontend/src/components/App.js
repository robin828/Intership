import React from 'react';
import {ThemeProvider} from '@material-ui/styles'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Landing from './Landing'
import Registration from './ui/pages/Registration'
import EmployerReg from './ui/pages/EmployerReg'
import CandidateReg from './ui/pages/CandidateReg'
import Login from './ui/pages/Login'
import Contact from './ui/pages/Contact'
import About from './ui/pages/About'
import theme from './ui/Theme'
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom"
function App() {
  const [value, setValue] = React.useState(0)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/employer" component={EmployerReg}/>
          <Route exact path="/candidate" component={CandidateReg}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </Router>
    </ThemeProvider>
  );
}

export default App;

