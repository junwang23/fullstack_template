import React, { Component } from "react";
import ReactDOM from "react-dom"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BarChart from "./barchart";
import "../css/demo.css"


export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [[40, 80, 90, 70, 50, 60],
                    [60, 20, 50, 80, 40, 70]],
            "idx": 0
        }
    }

    handleClick(idx) {
        this.setState({
            "idx": 1 - idx
        });
    }

    render() {
        return (
            <Grid container className="demo">
                <Grid item lg={12} sm={12}>
                    <h1>Hello There!</h1>
                </Grid>
                <Grid item lg={12} sm={12}>
                    <Button color="primary" variant="raised" onClick={() => this.handleClick(this.state.idx)}>Toggle</Button>
                </Grid>
                <Grid item lg={12} sm={12}>
                    <BarChart width={500} height={300} margin={20} data={this.state.data[this.state.idx]} />
                </Grid>
            </Grid>
        );
    }
}