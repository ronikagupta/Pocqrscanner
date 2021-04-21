import React from "react";
import ReactDOM from "react-dom";
import Scanner from "./Scanner";
import Result from "./Result";

import "./styles.css";

class Start extends React.Component {
  state = {
    scanning: false,
    results: null
  };

  render() {
    return (
      <div>
        <button  onClick={this.toggleScan}>
          {this.state.scanning ? "Back" : "New scan"}
        </button>
        {this.state.scanning ? (
          <Scanner onDetected={this.onDetected} />
        ) : (
          <Result result={this.state.result} />
        )}
      </div>
    );
  }

  toggleScan = () => {
    this.setState({ scanning: !this.state.scanning });
  };

  onDetected = result => {
    console.log(result);
    this.setState({ result, scanning: false });
  };
}

function App() {
  return (
    <div className="App">
      <Start />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App