import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'write her'
        }
    }
    componentDidMount(){
        console.log('componentDidMountt')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handel=()=>{
        
        this.setState({ name: 'karthick',});
    }
  render() {
    return (
      <div>
       <h1>Name:{this.state.name}</h1>
       <button onClick={this.handel}>save</button>
      </div>
    )
  }
}

export default Home