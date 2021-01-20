import { Switch, Route } from 'react-router-dom';
import { Header, Contacts, Footer } from './components/index';
import { Home, About, Gallery, Faq, Order } from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/faqs" component={Faq}/>
          <Route exact path="/order" component={Order}/>
        </Switch>
      </main>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
