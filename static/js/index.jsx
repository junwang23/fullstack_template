import React from "react";
import ReactDOM from "react-dom"
import BarChart from "./barchart";
import "../css/index.css"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [40, 80, 90, 70, 50]
        }
    }

    render() {
        return (
            <div>
                <h1>Hello There!</h1>
                <BarChart width={500} height={300} margin={20} data={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("content"));