import React from "react";
import "./style.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: ""};

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
      
        this.setState({ advice });
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  render() {
    const { advice } = this.state; 
    return (
      <>
       
        <div className="app">
          <div className="card">
            <h1 className="heading">{advice}</h1>
          <button className="cta" onClick={this.fetchAdvice} >
  <span>GIVE ME ADVICE!</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path> 
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>

            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
