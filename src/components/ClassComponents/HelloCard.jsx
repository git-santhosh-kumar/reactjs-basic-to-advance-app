import { Component } from 'react';

export default class CounterCard extends Component {
    constructor(props) {
        super();
        this.msg = props.msg ?? "Default msg";
    }

    render () {
        return (
            <div className="counter-card p-4 border rounded shadow-md w-80">
                <h4 className="text-lg font-semibold mb-2">Class Component</h4>
                <p className="mb-4">Message: <em>{this.msg}</em></p>
            </div>
        );
    }
}