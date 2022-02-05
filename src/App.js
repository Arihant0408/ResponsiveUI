import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './MyComponents/header';
import Headimage from './MyComponents/headimage';
import Card from './MyComponents/card';
import Sidebar from './MyComponents/sidebar';


function App() {

  return (
      <> 
      { <Router>
        <Header /> 
        <Headimage />

        <div className='container'>
        <div className='row'>
          <div className=' my-4 col-xs-12 col-sm-6 cards' >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <div className='col-xs-0 col-sm-6 ' >
        <Sidebar />
        </div>
        </div>
        </div>
        <Switch>
            <Route exact path="/" render={()=>{
              return(
              <>
              {/* <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />  */}
              </>)
            }}> 
            </Route>
            <Route exact path="/about">
              {/* <About /> */}
            </Route> 
          </Switch> 
        {/* <Footer /> */}
      </Router> }
      </>
  );
}

export default App;
