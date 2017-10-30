import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <div>
                <button style={Mybutton} onClick={()=>this.props.onClickFunction(this.props.value)}>{this.props.value}</button>
                </div>
        )

    }
}

var Mystyle={
    fontFamily:'Times New Roman',
    fontSize:30,
    textAlign:'center',
    fontStyle:'italic'
}

var Mybutton={
    position:'relative',
    left:330,
    borderRadius:'12px',
    height:40,
    width:60,
    background:'#4ddb1a'
}
class Count extends React.Component{
    constructor(){
        super();
        this.state={
            data: 0
        }
       
    }

    changevalue=(value)=>{
        this.setState((prevState)=>({data:prevState.data+value}))

    }
    render(){
        return(
            <div>
                <hr/>
                <h1 style={Mystyle}>Click the button to add that value!</h1>
                <hr/>
                <Button value={1} onClickFunction={this.changevalue}/>
                <br/>
                <Button value={5} onClickFunction={this.changevalue}/>
                <br/>
                <Button value={10} onClickFunction={this.changevalue} />
                <hr/>
                <h1 style={Mystyle}> Result={this.state.data}</h1>
                <hr/>
            </div>
        )
    }
}

export default Count;