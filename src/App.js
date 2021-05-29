import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Header, Contacts, Footer } from './components/index';
import { Home, About, Gallery, Faq, Order, NotFound, ComingSoon } from './pages/index';
import './App.scss';

function App() {
  const [ darkStyle, setDarkStyle ] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if(location !== '/') {
      setDarkStyle(true);
    } else {
      setDarkStyle(false);
    }
  }, [location]);

  return (
    <div className="App">
      <Header darkTheme={darkStyle} />
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/faqs" component={Faq}/>
          <Route exact path="/order" component={Order}/>
          <Route exact path="/coming-soon" component={ComingSoon}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
