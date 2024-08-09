import React, { Component } from 'react';

class XClassComp extends Component {
   constructor(props) {
        super(props);
        this.state={
            counter:0,
       };
        this.handleDecrement=this.handleDecrement.bind(this);
        this.handleIncrement=this.handleIncrement.bind(this);

    }
    handleDecrement(){
        this.setState({
            counter:this.state.counter-1
        })
       }
    handleIncrement(){
       this.setState({
        counter:this.state.counter+1
       })
       }
 
    // componentWillMount() {

    // }

    // componentDidMount() {


    // }

    render() {
        return (
            <div>
            <h1>Counter App</h1>
            <p>Count: {this.state.counter}</p>
            <button type="button" onClick={this.handleIncrement} style={{width:'auto',height:'auto'}}>Increment</button>
            <button type="button" onClick={this.handleDecrement} style={{width:'auto',height:'auto'}}>Decrement</button>

            </div>
        );
    }
}


export default XClassComp;