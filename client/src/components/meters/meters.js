import React, { Component } from 'react';
import './meters.css';

class Meters extends Component {
    constructor() {
      super();
      this.state = {
        meters: []
      };
    }
    componentDidMount() {
        fetch('/api/meters/METER000002')
          .then(res => res.json())
          .then(meters => this.setState({meters}, () => console.log('Meters fetched...', meters)));
      }
    render() {
        return (
          <div>
            <h2>Meters</h2>
            <ul>
            {Object.keys(this.state.meters).map(meter => 
             <li key={meter.ID}>{meter.SerialNumber} {meter.ReadingDateTime}</li>
            )}
            </ul>
          </div>
        );

      }
}

export default Meters;
