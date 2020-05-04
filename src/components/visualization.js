import React, { createRef, Component } from "react";
import * as d3 from "d3"

class PieClass extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.sleepArcs = [];
    this.calArcs = [];
    this.stepArcs = [];
    this.dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
    this.createArc4 = d3
      .arc()
      .innerRadius(props.outerRadius+120)
      .outerRadius(props.outerRadius+160);
    this.colors = [d3.rgb(215, 184, 255),d3.rgb(175, 247, 161),d3.rgb(143, 231, 255)];
    this.valColors = [d3.rgb(164, 112, 230),d3.rgb(100, 204, 80),d3.rgb(0, 152, 194)];
    // this.colors = [d3.rgb(66, 215, 245),d3.rgb(242, 204, 128),d3.rgb(205, 146, 247)];
    // this.valColors = [d3.rgb(53, 164, 212),d3.rgb(219, 148, 7),d3.rgb(126, 26, 176)];
    
    this.format = d3.format(".2f");
  }
  componentDidMount() {
    const svg = d3.select(this.ref.current);
    const data = this.createPie1(this.props.data);
    const { width, height, innerRadius, outerRadius, allRawData, week} = this.props;
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
      .attr("fill", (d, i) => this.colors[0])
      .on("mouseover", handleMouseOverSleep)
      .on("mouseout", handleMouseOutSleep);

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc2)
      .attr("fill", (d, i) => this.colors[1])
      .on("mouseover", handleMouseOverCal)
      .on("mouseout", handleMouseOutCal);
    
    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc3)
      .attr("fill", (d, i) => this.colors[2])
      .on("mouseover", handleMouseOverStep)
      .on("mouseout", handleMouseOutStep);
    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc4)
      .attr("fill", "white");
    path
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", d => `translate(${this.createArc4.centroid(d)})`)
      .style("fill", "black")
      .style("font-size", 14)
      .style("font-weight", 900)
      .text((d, i) => this.dates[i]);
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "sleep")
        .attr("d", this.sleepArcs[i])
        .attr("fill", (d, i) => this.valColors[0])
        .attr("i", i)
        .on("mouseover", handleMouseOverSleepData)
        .on("mouseout", handleMouseOutSleep);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "cal")
        .attr("d", this.calArcs[i])
        .attr("fill", (d, i) => this.valColors[1])
        .attr("i", i)
        .on("mouseover", handleMouseOverCalData)
        .on("mouseout", handleMouseOutCal);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "step")
        .attr("d", this.stepArcs[i])
        .attr("fill", (d, i) => this.valColors[2])
        .attr("i", i)
        .on("mouseover", handleMouseOverStepData)
        .on("mouseout", handleMouseOutStep);
    }
      

    // Create Event Handlers for mouse
    function handleMouseOverSleep(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+190} ${outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(allRawData[0][week][i]);

      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+150} ${outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../sleepIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOutSleep(d, i) {
      console.log("moused out " + i);
          // // Select text by id and then remove
          d3
          .selectAll("g")
          .select("#t"+i)
          .remove();  // Remove text location
          d3
          .selectAll("g")
          .select("#pic1")
          .remove(); 
        }
    function handleMouseOverSleepData(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+190} ${outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(allRawData[0][week][d3.select(this).attr("i")]);

      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+150} ${outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../sleepIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOverCal(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+190} ${outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(allRawData[1][week][i]);

      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+150} ${outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../calorieIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOutCal(d, i) {
      console.log("moused out " + i);
          // // Select text by id and then remove
          d3
          .selectAll("g")
          .select("#t"+i)
          .remove();  // Remove text location
          d3
          .selectAll("g")
          .select("#pic1")
          .remove(); 
        }
    function handleMouseOverCalData(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+190} ${outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(allRawData[1][week][d3.select(this).attr("i")]);

      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+150} ${outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../calorieIcon.png")
      .attr("id", "pic1")
    }
     // Create Event Handlers for mouse
     function handleMouseOverStep(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+190} ${outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(allRawData[2][week][i]);

      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+150} ${outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../stepIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOutStep(d, i) {
      console.log("moused out " + i);

          // // Select text by id and then remove
          d3
          .selectAll("g")
          .select("#t"+i)
          .remove();  // Remove text location
          d3
          .selectAll("g")
          .select("#pic1")
          .remove(); 
        }
    function handleMouseOverStepData(d, i) {  // Add interactivity
      console.log("moused over " + i);
      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+190} ${outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(allRawData[2][week][d3.select(this).attr("i")]);

      svg
      .append("g")
      .attr("transform", `translate(${outerRadius+150} ${outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../stepIcon.png")
      .attr("id", "pic1")
    }

  }

  componentWillUpdate(nextProps, nextState) {
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
      .attr("d", this.createArc4)
      .attr("fill", "white");
    path
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", d => `translate(${this.createArc4.centroid(d)})`)
      .style("fill", "black")
      .style("font-size", 14)
      .style("font-weight", 900)
      .text((d, i) => this.dates[i]);
      
    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc1)
      .attr("fill", (d, i) => this.colors[0])
      .on("mouseover", handleMouseOverSleep)
      .on("mouseout", handleMouseOutSleep);

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc2)
      .attr("fill", (d, i) => this.colors[1])
      .on("mouseover", handleMouseOverCal)
      .on("mouseout", handleMouseOutCal);
    
    path
      .append("path")
      .attr("class", "arc")
      .attr("d", this.createArc3)
      .attr("fill", (d, i) => this.colors[2])
      .on("mouseover", handleMouseOverStep)
      .on("mouseout", handleMouseOutStep);

    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.sleepArcs[i])
        .attr("fill", (d, i) => this.valColors[0])
        .attr("i", i)
        .on("mouseover", handleMouseOverSleepData)
        .on("mouseout", handleMouseOutSleep);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.calArcs[i])
        .attr("fill", (d, i) => this.valColors[1])
        .attr("i", i)
        .on("mouseover", handleMouseOverCalData)
        .on("mouseout", handleMouseOutCal);
    }
    for (i = 0; i < 7; i++) {
        path
        .append("path")
        .attr("class", "arc")
        .attr("d", this.stepArcs[i])
        .attr("fill", (d, i) => this.valColors[2])
        .attr("i", i)
        .on("mouseover", handleMouseOverStepData)
        .on("mouseout", handleMouseOutStep);
    }
    // Create Event Handlers for mouse
    function handleMouseOverSleep(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+190} ${nextProps.outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(nextProps.allRawData[0][nextProps.week][i]);

      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+150} ${nextProps.outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../sleepIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOutSleep(d, i) {
      console.log("moused out " + i);
          // // Select text by id and then remove
          d3
          .selectAll("g")
          .select("#t"+i)
          .remove();  // Remove text location
          d3
          .selectAll("g")
          .select("#pic1")
          .remove(); 
        }
    function handleMouseOverSleepData(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+190} ${nextProps.outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(nextProps.allRawData[0][nextProps.week][d3.select(this).attr("i")]);

      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+150} ${nextProps.outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../sleepIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOverCal(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+190} ${nextProps.outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(nextProps.allRawData[1][nextProps.week][i]);

      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+150} ${nextProps.outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../calorieIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOutCal(d, i) {
      console.log("moused out " + i);
          // // Select text by id and then remove
          d3
          .selectAll("g")
          .select("#t"+i)
          .remove();  // Remove text location
          d3
          .selectAll("g")
          .select("#pic1")
          .remove(); 
        }
    function handleMouseOverCalData(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+190} ${nextProps.outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(nextProps.allRawData[1][nextProps.week][d3.select(this).attr("i")]);

      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+150} ${nextProps.outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../calorieIcon.png")
      .attr("id", "pic1")
    }
     // Create Event Handlers for mouse
     function handleMouseOverStep(d, i) {  // Add interactivity
      console.log("moused over " + i);
      // Specify where to put label of text
      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+190} ${nextProps.outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(nextProps.allRawData[2][nextProps.week][i]);

      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+150} ${nextProps.outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../stepIcon.png")
      .attr("id", "pic1")
    }

    function handleMouseOutStep(d, i) {
      console.log("moused out " + i);

          // // Select text by id and then remove
          d3
          .selectAll("g")
          .select("#t"+i)
          .remove();  // Remove text location
          d3
          .selectAll("g")
          .select("#pic1")
          .remove(); 
        }
    function handleMouseOverStepData(d, i) {  // Add interactivity
      console.log("moused over " + i);
      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+190} ${nextProps.outerRadius+160})`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("id", "t"+i)
      .style("fill", "black")
      .style("font-size", 20)
      .text(nextProps.allRawData[2][nextProps.week][d3.select(this).attr("i")]);

      svg
      .append("g")
      .attr("transform", `translate(${nextProps.outerRadius+150} ${nextProps.outerRadius+60})`)
      .append("svg:image")
      .attr('width', 80)
      .attr('height', 80)
      .attr("xlink:href", "../../stepIcon.png")
      .attr("id", "pic1")
    }
  }

  render() {
    return <svg ref={this.ref} />;
  }
}

export default PieClass;