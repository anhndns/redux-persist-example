import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { storeToken } from "./actions";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Yongky Ali",
      inputToken: ""
    };

    this.storeToken = this.storeToken.bind(this);
    this.getState = this.getState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    console.log(store.getState());
  }

  storeToken(token) {
    store.dispatch(storeToken(token));
  }

  getState() {
    console.log(store.getState());
  }

  handleInputChange(event) {
    let value = event.target.value;
    this.setState({
      inputToken: value
    });
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <h3>Hello CodeSandbox</h3>
            <div>{this.state.name}</div>
            <input type="text" onChange={this.handleInputChange} />
            <button onClick={() => this.storeToken(this.state.inputToken)}>
              Store token
            </button>
            <button onClick={() => this.getState()}>Get redux state</button>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
