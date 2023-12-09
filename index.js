function App() {
  const [todos, settodos] = React.useState([
    {
      text: "learn React",
      isCompleted: false,
    },
    {
      text: "meet a friend",
      isCompleted: false,
    },
    {
      text: "build a todo App",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text: text, isCompleted: false }];
    settodos(newTodo);
  };

  const removeTodo = (index) => {
    // const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    settodos(temp);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} remove={removeTodo} />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
