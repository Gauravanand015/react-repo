import TodoItems from "./components/TodoItems";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TODO_PROVIDER from "./store/TodoContext";

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  return (
    <TODO_PROVIDER>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <TodoItems />
      </center>
    </TODO_PROVIDER>
  );
}

export default App;
