import React, { Component } from 'react';
import './App.css';
import SwitchButton from './SwitchButton';

class App extends Component {
  state = {
    timeMiliSec: 0,
    timeSec: 0,
    active: false,
    timeMin: 0,
    timeHou: 0,

  }
  handleStart = () => {
    console.log('click')
    this.setState ({
      active: !this.state.active
    })
    if (this.state.active) {
      clearInterval(this.idInterval)
    }else {
     this.idInterval = setInterval(() => this.addTime(), 10)
    }
  }
  addTime = () => {

      let mili = this.state.timeMiliSec+ 1
		  let sec = this.state.timeSec
		  let min = this.state.timeMin
      let hour = this.state.timeHou

      if(mili >= 100) {
			  sec += 1;
			  mili = 0;
		  }

		  if(sec >= 60) {
			  min += 1 ;
			  sec = 0;
		  }
		  if(min >= 60) {
        hour += 1;
        min = 0;
      }
		  this.setState({
        timeMiliSec: mili,
        timeMin: min,
        timeSec: sec,
        timeHou: hour,

		  })
      // this.setState({
      //   timeSec: this.state.timeSec + 1,
      // })
      // if (this.state.timeSec === 99) {
      //   this.setState({
      //       timeMin: this.state.timeMin + 1,
      //       timeSec: this.timeSec = 0
      //   })
      //   }
      //   if (this.state.timeMin >= 60 && this.state.timeSec === 99) {
      //     this.setState((state) => {
      //       timeHou: this.state.timeHou + 1,
      //       timeMin: this.state.timeMin = 0,
      //       timeSec: this.state.timeSec = 0
      //     }))
      //   }
    }
  render() {
    return (
      <div className="App">
        <span>{this.state.timeHou}:{this.state.timeMin}:{this.state.timeSec}:{this.state.timeMiliSec}</span>
        <SwitchButton click={this.handleStart} active={this.state.active}/>
      </div>
    );
  }
}


export default App;
