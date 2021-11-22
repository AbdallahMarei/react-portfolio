import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Header from "./components/header/header.components";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import Contact from "./pages/contactpage/contact.component";
import Skills from "./pages/skillspage/skills.component";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      darkMode: false
    }
  }

  changeDarkMode = () => {
    let changeDark = !this.state.darkMode;
    this.setState({darkMode: changeDark})
    console.log(this.state.darkMode)
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => (
    <HomePage {...props} dark={this.state.darkMode} darkFunction={this.changeDarkMode} />
  )}/>
          <Route exact path="/contact" render={(props) => (
    <Contact {...props} dark={this.state.darkMode} darkFunction={this.changeDarkMode} />
  )}/>
          <Route exact path="/skills" render={(props) => (
    <Skills {...props} dark={this.state.darkMode} darkFunction={this.changeDarkMode} />
  )}/>
          <Route exact path="/skills" component={HomePage}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
