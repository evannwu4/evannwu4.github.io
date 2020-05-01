import React, { createRef, Component } from "react";
import * as d3 from "d3"

class PieClass extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.sleepArcs = [];
    this.calArcs = [];
    this.stepArcs = [];
    this.createPie1 = d3
      .pie()
      .value(d => d)
      .padAngle(Math.PI/200)
      .sort(null);
    this.createArc1 = d3
      .arc()
      .innerRadius(props.innerRadius)
      .outerRadius(props.outerRadius);
    this.createArc2 = d3
      .arc()
      .innerRadius(props.outerRadius)
      .outerRadius(props.outerRadius+60);
    this.createArc3 = d3
      .arc()
      .innerRadius(props.outerRadius+60)
      .outerRadius(props.outerRadius+120);
    this.colors = [d3.rgb(215, 184, 255),d3.rgb(175, 247, 161),d3.rgb(143, 231, 255)];
    this.valColors = [d3.rgb(164, 112, 230),d3.rgb(100, 204, 80),d3.rgb(0, 152, 194)];

    // this.colors = [d3.rgb(66, 215, 245),d3.rgb(242, 204, 128),d3.rgb(205, 146, 247)];
    // this.valColors = [d3.rgb(53, 164, 212),d3.rgb(219, 148, 7),d3.rgb(126, 26, 176)];
    
    this.format = d3.format(".2f");
  }
  componentDidMount() {
    const svg = d3.select(this.ref.current);
    const data = this.createPie1(this.props.data);
    const { width, height, innerRadius, outerRadius } = this.props;
    var i;
    for (i = 0; i < 7; i++) {
        this.sleepArcs[i] = d3
        .arc()
        .innerRadius(this.props.innerRadius)
        .outerRadius(this.props.innerRadius+this.props.sleepData[i])
        .startAngle(i*((2*Math.PI)/7))
        .endAngle((i+1)*((2*Math.PI)/7));
    }
    for (i = 0; i < 7; i++) {
        this.calArcs[i] = d3
        .arc()
        .innerRadius(this.props.outerRadius)
        .outerRadius(this.props.outerRadius+this.props.calData[i])
        .startAngle(i*((2*Math.PI)/7))
        .endAngle((i+1)*((2*Math.PI)/7));
    }
    for (i = 0; i < 7; i++) {
        this.stepArcs[i] = d3
        .arc()
        .innerRadius(this.props.outerRadius+60)
        .outerRadius(this.props.outerRadius+60+this.props.stepData[i])
        .startAngle(i*((2*Math.PI)/7))
        .endAngle((i+1)*((2*Math.PI)/7));
    }
    svg
      .attr("class", "chart")
      .attr("width", width)
      .attr("height", height);

    const group = svg
      .append("g")
      .attr("transform", `translate(${outerRadius+190} ${outerRadius+130})`);

    const groupWithEnter = group
      .selectAll("g.arc")
      .data(data)
      .enter();

    const path = groupWithEnter.append("g").attr("class", "arc");

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc1)
      .attr("fill", (d, i) => this.colors[0]);

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc2)
      .attr("fill", (d, i) => this.colors[1]);
    
    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc3)
      .attr("fill", (d, i) => this.colors[2]);
    var i;
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.sleepArcs[i])
        .attr("fill", (d, i) => this.valColors[0]);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.calArcs[i])
        .attr("fill", (d, i) => this.valColors[1]);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.stepArcs[i])
        .attr("fill", (d, i) => this.valColors[2]);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps.data);
    const svg = d3.select(this.ref.current);
    const old_group = svg
      .selectAll("g");
    old_group.remove();
    var i;
    for (i = 0; i < 7; i++) {
        this.sleepArcs[i] = d3
        .arc()
        .innerRadius(nextProps.innerRadius)
        .outerRadius(nextProps.innerRadius+nextProps.sleepData[i])
        .startAngle(i*((2*Math.PI)/7))
        .endAngle((i+1)*((2*Math.PI)/7));
    }
    for (i = 0; i < 7; i++) {
        this.calArcs[i] = d3
        .arc()
        .innerRadius(nextProps.outerRadius)
        .outerRadius(nextProps.outerRadius+nextProps.calData[i])
        .startAngle(i*((2*Math.PI)/7))
        .endAngle((i+1)*((2*Math.PI)/7));
    }
    for (i = 0; i < 7; i++) {
        this.stepArcs[i] = d3
        .arc()
        .innerRadius(nextProps.outerRadius+60)
        .outerRadius(nextProps.outerRadius+60+nextProps.stepData[i])
        .startAngle(i*((2*Math.PI)/7))
        .endAngle((i+1)*((2*Math.PI)/7));
    }
    const data = this.createPie1(nextProps.data);
    
    const group = svg
    .append("g")
    .attr("transform", `translate(${nextProps.outerRadius+190} ${nextProps.outerRadius+130})`);

    const groupWithEnter = group
        .selectAll("g.arc")
        .data(data)
        .enter();

    const path = groupWithEnter.append("g").attr("class", "arc");
  
    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc1)
      .attr("fill", (d, i) => this.colors[0]);

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc2)
      .attr("fill", (d, i) => this.colors[1]);
    
    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc3)
      .attr("fill", (d, i) => this.colors[2]);
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.sleepArcs[i])
        .attr("fill", (d, i) => this.valColors[0]);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.calArcs[i])
        .attr("fill", (d, i) => this.valColors[1]);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.stepArcs[i])
        .attr("fill", (d, i) => this.valColors[2]);
    }
  }

  render() {
    return <svg ref={this.ref} />;
  }
}

export default PieClass;