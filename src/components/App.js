import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'
import { addEmail } from '../actions'

class App extends Component {

  constructor(){
    super();

    this.state = {
      input:''
    }

    this.submitFrom = this.submitFrom.bind(this)
  }

  submitFrom(e){
    e.preventDefault()
    this.props.addEmail(this.state.input)
  }

  render() {
    console.log(this.props.email);
    return (
      <div className="App">
        <form onSubmit={this.submitFrom}>
          <input type="text" onChange={e => this.setState({ input: e.target.value})} value={this.state.input}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    email: state.email
  }
}
export default connect(mapStateToProps, { addEmail })(App);
