import React, { Component } from 'react'


export default class Counter extends Component {
 
 state = {
 value: this.props.value
 };

handleIncrement = Product => {
    this.setState({count: this.state.value + 1});
};

    render() {
        console.log(this.props);
    return (
      <div>
     <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
         onClick={() => this.handleIncrement(this.props.Product)}
          className="btn btn-secondary btn-sm"
          >
           klik di sini
           </button>
      </div>
    );
  }

  getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.value === 0? "warning" : "primary";
      return classes;
  }

  formatCount() {
    const {value} = this.state;
    return value === 0 ? "masukan nilai mu" : value;
  }
}