import { Switch, Route } from 'react-router-dom';
import { Header, Contacts, Footer } from './components/index';
import { Home, About} from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </main>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
