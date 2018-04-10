import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = { hoveringOverGitHubIcon : false }
  }

  setHoveringOverGitHubIcon = () => {
    /* 'true' on MouseOver, 'false' on MouseOut */
    this.setState(st => { return { hoveringOverGitHubIcon : !st.hoveringOverGitHubIcon }});
  }

  render = () => {
    console.log(process.env);
    return (
      <div className="backgroundGradient container-fluid takeFullViewportHeight">
        <div className="row">
          <div className="col-xs-3 col-md-3">
            <img className="palmTreeImage" src="./img/PalmTree.svg" alt="A black palmtree at dusk"/>
          </div>
          <div className="col-xs-8 col-md-6">
            <div className="contentBlock centerText">
              <h1 className="pressStart2PFont centerText">Under Construction</h1>
              <h1 className="centerText gitHubIcon"><a href="https://github.com/anoukmontreuil/" onMouseOver={this.setHoveringOverGitHubIcon} onMouseOut={this.setHoveringOverGitHubIcon}><i className="fab fa-github-alt" alt="GitHub"></i></a></h1>
              {this.state.hoveringOverGitHubIcon ? <div className="pressStart2PFont centerText popUpText">View GitHub Profile</div> : null}
            </div>
          </div>
          <div className="col-md-3">
            <img className="palmTreeImage flipImage" src="./img/PalmTree.svg" alt="A black palmtree at dusk"/>
          </div>
        </div>
        <div className="row">
          <footer className="footer footerBlock">
            <div className="pressStart2PFont text-muted">&copy; 2018 <a href="mailto:anoukmontreuil@gmail.com">Anouk Montreuil</a></div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;