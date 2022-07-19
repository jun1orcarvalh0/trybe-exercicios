import './App.css';

const tasks = ['study', 'workout', 'wash the dishes', 'make the bed']
const jsxTasks = tasks.map((task) => <li>{ task }</li> )

function App() {
  return (
    <div>
      <h2>Tasks</h2>
      { jsxTasks }
    </div>
  );
}

export default App;
