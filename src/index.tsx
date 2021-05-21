import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers"

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

/* Functional Component with Typescript Example: 
const App = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>;
};
*/

/* Class Component with Typescript Example: 

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 };
    }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 });
    };
    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <h4>Hello from ReactTS...</h4>
                <p>Today, your color is... {this.props.color}</p>
                <div>
                    <button onClick={this.onIncrement}>Increment</button>
                    <button onClick={this.onDecrement}>Increment</button>
                    <p>{this.state.counter}</p>
                </div>
            </div>
        );
    }
}


/* ReactDOM renderer for function and class examples:
ReactDOM.render(<App color="red" />, document.querySelector("#root"));
 */
