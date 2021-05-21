import { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo } from "../actions";
import { Todo } from "../actions/interfaces";
import { StoreState } from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { fetching: false };
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList = (): JSX.Element[] => {
        const todoList = this.props.todos.map((todo) => {
            return (
                <div
                    key={todo.id}
                    onClick={() => this.onTodoClick(todo.id)}
                    style={{ border: "solid lightgray 1px", margin: "2px" }}
                >
                    <small>{todo.title}</small>
                    <br></br>
                </div>
            );
        });
        return todoList;
    };

    render() {
        const { todos } = this.props;
        console.log(todos);

        return (
            <div className="jumbotron">
                <h3>Hi from ReactTS...</h3>

                <button onClick={this.onButtonClick}>Fetch Todos</button>
                {this.state.fetching ? "LOADING" : this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
