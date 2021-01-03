import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
