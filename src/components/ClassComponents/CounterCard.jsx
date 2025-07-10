import { Component } from 'react';

export default class CounterCard extends Component {
    constructor(props) {
        super(props);
        this.msg = props.msg ?? "Default msg";
        this.state = {
            counter: 0
        };
    }

    increment = () => this.setState({counter: this.state.counter + 1});
    decrement = () => this.setState({counter: this.state.counter - 1});
    reset = () => this.setState({counter: 0});

    render () {
        return (
            <div className="counter-card p-4 border rounded shadow-md w-80">
                <h4 className="text-lg font-semibold mb-2">Class Component</h4>
                <p className="mb-4">Message: <em>{this.msg}</em></p>
                <p className="mb-4">Counter Value: {this.state.counter}</p>
                <div className="flex gap-2">
                    <button onClick={this.increment} className="bg-blue-500 text-white px-2 py-1 rounded">Increment</button>
                    <button onClick={this.decrement} className="bg-red-500 text-white px-2 py-1 rounded">Decrement</button>
                    <button onClick={this.reset} className="bg-gray-500 text-white px-2 py-1 rounded">Reset</button>
                </div>
            </div>
        );
    }
}