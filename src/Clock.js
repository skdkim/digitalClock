import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date : new Date()}
  }

  componentWillMount(){
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({date : new Date()});
  }

  render(){
    return(
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}

export default Clock;
