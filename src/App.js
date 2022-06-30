import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import SignIn from './pages/signin/signin';
import Drawer1 from './component/drawer/drawer';
import Router from './router/router';
import SignUp from './pages/signup/signup';



function App() {
  return (
    <div className="App">
     {/* <SignIn/> */}
     {/* <SignUp/> */}
     {/* <Dashboard/> */}
    {/* <Drawer1/> */}
    <Router/>

    </div>
  );
}

export default App;
