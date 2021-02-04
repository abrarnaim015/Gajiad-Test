// import logo from './logo.svg';
// import './App.css';
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages'


function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ HomePage } />
      </Switch>
    </>
  );
}

export default App;
