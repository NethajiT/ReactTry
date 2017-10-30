import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Application1 from './Application1';

var Navbar={
    fontFamily:'Times New Roman'
}
const Webpage = () => (
  <Router>
    <div>
      <ul style={Navbar}>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/events">Events</Link>&nbsp;
        <Link to="/add">Add Game</Link>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/events" component={TapButton}/>
      <Route path="/add" component={Application1}/>
    </div>
  </Router>
)
var Mystyle={
    fontFamily:'Times New Roman',
    fontSize:30,
    textAlign:'center',
    fontStyle:'italic'
}

var Mybox={
    borderRadius:'10px',
    height:30,
    width:340
}

var Mybutton={
    borderRadius:'10px',
    background:'#4ddb1a',
    height:40,
    width:40
}
var empty={
    height:70,
}

const Home = () => (
  <div style={Mystyle}>
    <h2>Home</h2>
    <hr/>
    <p>This page is an example for simple routing and React events</p>
  </div>
)

class TapButton extends React.Component{
    constructor(){
        super();

        this.state={
            data:''
        }
    }

    

     updateui=()=>
    {
        alert(this.state.data);
        this.setState({data:"Button was clicked!"})
    }

    setvalue=(e)=>{
        this.setState({data:e.target.value})
    }
    render(){
        return(
            <div>
               <h1 style={Mystyle}>Hey! Try this simple events..</h1>
               <hr/>
               <center>
                   <div style={empty}></div>
               <input style={Mybox} type="text" onChange={this.setvalue} />
               <button style={Mybutton} onClick={this.updateui}>TAP</button>
               </center>
               <hr/>
               <h2 style={Mystyle}>{this.state.data}</h2>
                </div>
        )
    }
}

export default Webpage;