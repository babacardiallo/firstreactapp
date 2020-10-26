import React, {Component} from 'react';
import './App.css';
import Header from './component/Header';
import Center from './component/Center';

class App extends Component {
  
  noCopy = () => {
     alert("Merici de ne pas copier le texte");
  }
   
  changeTitle = (e) => {
    this.setState({
      title: 'Master1 Sécurité'
    });
  }

  changeTitleViaParam = (e) => {
    this.setState({
      title: e
    });
  }

  state = {
    title : "Welcome to TDSI"
  }
  chnageValue = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  render(){
    return (
      <div className="App">
            <Header title={this.state.title}></Header>
            <p onCopy={this.noCopy}>merci de lire attentivement le texte</p>
            <Center></Center>
            <input type="text" onChange={this.chnageValue} value={this.state.title}></input>
            <p><button onClick={this.changeTitle}>Changer le titre</button></p>
            <p><button onClick={() => this.changeTitleViaParam('Niaff')}>Changer le titre Via param</button></p>

     </div>
    );
  }
  
}

export default App;
