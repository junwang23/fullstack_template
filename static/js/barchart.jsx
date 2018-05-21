import React, { Component } from "react";
import { select } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale"
import { axisLeft, axisBottom } from "d3-axis"
import { range, max } from "d3-array"
import 'd3-transition';


export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const w = this.props.width;
        const h = this.props.height;
        const m = this.props.margin;

        return (
            <svg width={w} height={h} id="barchart">
                <g className="axis x" transform={"translate(" + m + "," + (h - m) + ")"}></g>
                <g className="axis y" transform={"translate(" + m + "," + m + ")"}></g>
                <g className="bars" transform={"translate(" + m + "," + m + ")"}></g>
            </svg>
        );
    }

    update(nextProps) {
        const { data, width, height, margin } = nextProps;
        var xdom = range(data.length),
            ydom = [0, max(data)],
            x = scaleBand().domain(xdom).range([0, width - 2 * margin]).padding(0.1),
            y = scaleLinear().domain(ydom).range([height - 2 * margin, 0]);

        select("#barchart").select(".axis.x")
            .transition().duration(1000)
            .call(axisBottom(x));
        select("#barchart").select(".axis.y")
            .transition().duration(1000)
            .call(axisLeft(y));

        const bars = select("#barchart").select(".bars").selectAll(".bar")
            .data(data);

        bars.transition().duration(1000)
            .attr("x", (d, i) => x(i))
            .attr("y", y)
            .attr("width", x.bandwidth())
            .attr("height", d => y.range()[0] - y(d));

        bars.enter().append("rect")
            .attr("class", "bar")
            .attr("x", (d, i) => x(i))
            .attr("y", y)
            .attr("width", x.bandwidth())
            .attr("height", d => y.range()[0] - y(d))
            .attr("opacity", 0)
            .transition().duration(1000)
            .attr("opacity", 1);

        bars.exit().transition().duration(1000)
            .attr("opacity", 0).remove();
    }
}