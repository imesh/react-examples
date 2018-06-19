import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "World (from state)"
        }
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: "Message Updated (in state)"
        })
    }

    render() {
        return (
           <div>
             <h1>Hello {this.state.message}!</h1>
             <button onClick={this.updateMessage}>Click me!</button>
           </div>   
        )
      }
}

ReactDOM.render(
    <Hello message="World" />, 
    document.getElementById("root")
);