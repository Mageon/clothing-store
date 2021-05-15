import './App.css';
import HomePage from './pages/homepage/hompage.component';
import { Route, Switch } from 'react-router-dom';
import { Turorial } from './pages/tuto/tuto';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Switch>
        <Route exact path='/' component={HomePage}/>        
        <Route exact path='/tuto' component={Turorial}/>
        <Route exact path='/shop' component={ShopPage}/>

      </Switch>
      {/* Swithch renders the first match of the Route component, then renders nothing else */}
    </div>
  );
}

export default App;
