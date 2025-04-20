import React, { Component } from 'react'

export default class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        this.ref = React.createRef();
    }
    componentDidMount(){
        console.log('Component mounted');
    }
    render(){
        return (
                <>
                    <h1>{this.state.count}</h1>
                    <buttton onClick = {this.setState({count : this.state.count + 1})} ref = {this.ref}>+</buttton>
                </>
        )
    }
}