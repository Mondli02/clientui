import React, { Component } from 'react'  
import axios from 'axios';  
import { Line } from 'react-chartjs-2';  
export class Linecharts extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Meters: {} };  
        }  
                componentDidMount() {  
                axios.get('/api/meters/METER000002')  
                        .then(res => {  
                                console.log(res);  
                                const meters = res.data;  
                                let ReadingDateTime = [];  
                                let WH = [];  
                                Object.values(meters).forEach(record => {  
                                    ReadingDateTime.push(record.ReadingDateTime);  
                                    WH.push(record.WH);  
                                });  
                                this.setState({  
                                        Data: {  
                                                labels: ReadingDateTime,  
                                                datasets: [  
                                                        {  
                                                                label: 'Watts Per hour',  
                                                                data: WH,  
                                                                backgroundColor: [  
                                                                        "#3cb371",  
                                                                        "#0000FF",  
                                                                        "#9966FF",  
                                                                        "#4C4CFF",  
                                                                        "#00FFFF",  
                                                                        "#f990a7",  
                                                                        "#aad2ed",  
                                                                        "#FF00FF",  
                                                                        "Blue",  
                                                                        "Red"  

                                                                ]  
                                                        }  
                                                ]  
                                        }  
                                });  
                        })  
        }  
        render() {  
                return (  
                        <div>  
                                <Line  
                                        data={this.state.Meters}  
                                        options={{ maintainAspectRatio: false }} />  
                        </div>  
                )  
        }  
}  
export default Linecharts  