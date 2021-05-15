import './App.css';
import HomePage from './pages/homepage/hompage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>
      Temporary HATS PAGE COMPONENT
    </h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
      {/* Swithch renders the first match of the Route component, then renders nothing else */}
    </div>
  );
}

export default App;
