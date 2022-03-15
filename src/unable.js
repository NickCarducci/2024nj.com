import React from "react";
const unable = {
  "2006": {
    beneficiaries: 9645921,
    musculoskeletal: 36,
    psychiatric: 32.8,
    circulatory: 21,
    endocrinologic: 16.4,
    nervous: 16.6,
    injurious: 11.4,
    respiratory: 8.2,
    sensory: 9.2,
    intellectual: 7.2,
    infectionparasite: null,
    immunocompromised: null,
    neoplasmic: null,
    onconogenic: null,
    digestive: null,
    genitourinary: null,
    epidermic: null,
    prejudicial: null,
    other: 35,
    none: 6.3
  },
  "2010": {
    beneficiaries: 8886060,
    musculoskeletal: 39,
    psychiatric: 33.7,
    circulatory: 22.4,
    endocrinologic: 18.3,
    nervous: 16.2,
    injurious: 13.9,
    respiratory: 9.5,
    sensory: 8.6,
    intellectual: 4.9,
    infectionparasite: null,
    immunocompromised: null,
    neoplasmic: null,
    onconogenic: null,
    digestive: null,
    genitourinary: null,
    epidermic: null,
    prejudicial: null,
    other: null,
    none: null
  },
  "2015": {
    beneficiaries: 12896735,
    musculoskeletal: 42.1,
    psychiatric: 35.4,
    circulatory: 20.6,
    endocrinologic: 15.8,
    nervous: 17,
    injurious: 14.9,
    respiratory: 11.1,
    sensory: 8.1,
    intellectual: 5.2,
    infectionparasite: 5.8,
    immunocompromised: 1.3,
    neoplasmic: 5.2,
    onconogenic: 1.4,
    digestive: 6.3,
    genitourinary: 3.1,
    epidermic: 0.9,
    prejudicial: 3.6,
    other: 16.8,
    none: null
  }
};

class Unable extends React.Component {
  constructor(props) {
    super(props);

    let noData = [];
    let date = [];
    let beneficiaries = [];
    let beneficiariesData = [];
    let disabilities = {};
    let types = [];
    Object.keys(unable).forEach((yr, i) => {
      const year = String(yr); //new Date(yr).getTime();
      const data = Object.values(unable)[i];
      Object.keys(data).forEach((disability, i) => {
        const num = Object.values(data)[i];
        if (!num || disability === "beneficiaries") return null;
        if (!disabilities[disability]) disabilities[disability] = [];
        disabilities[disability].push([year, data.beneficiaries * (num / 100)]);
        types.push(data.beneficiaries * (num / 100));
      });
      date.push(year);
      beneficiaries.push(data.beneficiaries);
      beneficiariesData.push([year, data.beneficiaries]);
      return noData.push([year, 0]);
    });
    //const all = [...beneficiaries, ...types];
    var lowBeneficiaries = Math.min(...types);
    var lowDate = Math.min(...date);
    var highBeneficiaries = Math.max(...types);
    var highDate = Math.max(...date);
    //console.log(dataData);
    var state = {
      ...disabilities,
      date,
      noData,
      highBeneficiaries,
      beneficiariesData,
      yAxis: highBeneficiaries - lowBeneficiaries,
      xAxis: highDate - lowDate,
      lowBeneficiaries,
      highDate,
      lowDate
    };
    this.state = state;
  }
  componentDidUpdate = () => {
    if (this.state.chartType !== this.state.laststate) {
      this.setState({ laststate: this.state.chartType }, () => {
        let noData = [];
        let date = [];
        let beneficiaries = [];
        let beneficiariesData = [];
        let disabilities = {};
        let types = [];
        Object.keys(unable).forEach((yr, i) => {
          const year = new Date(yr).getTime();
          const data = Object.values(unable)[i];
          Object.keys(data).forEach((disability, i) => {
            const num = Object.values(data)[i];
            if (!disabilities[disability]) disabilities[disability] = [];
            disabilities[disability].push([year, num]);
            types.push(num);
          });

          date.push(year);
          beneficiaries.push(data.beneficiaries);
          beneficiariesData.push([year, data.beneficiaries]);
          return noData.push([year, 0]);
        });
        const all = [...beneficiaries, ...types];
        var lowBeneficiaries = Math.min(...all);
        var lowDate = Math.min(...date);
        var highBeneficiaries = Math.max(...all);
        var highDate = Math.max(...date);
        //console.log(dataData);
        var state = {
          ...disabilities,
          highBeneficiaries,
          beneficiariesData,
          yAxis: highBeneficiaries - lowBeneficiaries,
          xAxis: highDate - lowDate,
          lowBeneficiaries,
          highDate,
          lowDate
        };
        this.setState(state);
      });
    }
  };
  render() {
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };

    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "translate(0%,0%) scale(1,-1)"
    };
    const shortNumber = (scler, notRound) => {
      var newnum = String(Math.round(scler));
      if (notRound) newnum = String(scler);
      var app = null;
      var decimal = null;
      const suff = ["", "k", "m", "b", "t"];
      for (let i = 0; i < suff.length; i++) {
        if (newnum.length > 3) {
          decimal = newnum[newnum.length - 3];
          newnum = newnum.substring(0, newnum.length - 3);
        } else {
          app = i;
          break;
        }
      }
      return newnum + (decimal ? "." + decimal : "") + suff[app];
    };
    //console.log(this.state.oilprice);
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      0
    ]);
    //console.log(this.state.oilprice);

    /*const beneficiariesData = this.state.beneficiariesData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);*/
    const musculoskeletal = this.state.musculoskeletal.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const psychiatric = this.state.psychiatric.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const circulatory = this.state.circulatory.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const endocrinologic = this.state.endocrinologic.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const nervous = this.state.nervous.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const injurious = this.state.injurious.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const respiratory = this.state.respiratory.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const sensory = this.state.sensory.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const intellectual = this.state.intellectual.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const infectionparasite = this.state.infectionparasite.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const immunocompromised = this.state.immunocompromised.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const neoplasmic = this.state.neoplasmic.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const onconogenic = this.state.onconogenic.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const digestive = this.state.digestive.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const genitourinary = this.state.genitourinary.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const epidermic = this.state.epidermic.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const prejudicial = this.state.prejudicial.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const other = this.state.other.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const none = this.state.none.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      ((y - this.state.lowBeneficiaries) / this.state.yAxis) * 150
    ]);
    const labelitem = {
      color: "white",
      width: "max-content",
      margin: "0px 4px"
    };
    const StringDecimal = (y, suffindex = 3) => {
      var string;
      if (y) {
        const x = String(y);
        if (x.includes(".")) {
          const here = x.indexOf(".");
          string = x.substring(0, here) + x.substring(here, here + suffindex);
        } else string = x;
      }
      return string;
    };
    return (
      <div
        style={{
          width: "100%",
          minHeight: "240px",
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            bottom: "0px",
            zIndex: "1",
            backgroundColor: "rgba(255,255,255,.3)",
            padding: "4px 8px",
            position: "absolute",
            right: "0px"
          }}
        >
          <a
            style={{ color: "grey" }}
            href="https://www.ssa.gov/disabilityresearch/documents/TTW5_4_NBSstats2.pdf"
          >
            {new Date(this.state.lowDate).getFullYear()}
            &nbsp;-&nbsp;
            {new Date(this.state.highDate).getFullYear()}
          </a>
        </div>
        <div
          style={{
            position: "absolute"
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(250,250,250,.6)",
              color: "white",
              padding: "8px",
              lineHeight: "34px",
              maxWidth: "max-content",
              width: "calc(100% - 80px)"
            }}
          ></span>
          <div
            style={{ marginTop: "6px", display: "flex", width: "max-content" }}
          >
            <div style={labelitem}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "green"
                }}
              />
              beneficiaries
            </div>
          </div>
        </div>
        <div style={{ transform: "translate(0px,230px)" }}>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={4}
                    height={4}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth={0}
                    key={i}
                  />
                )
            )}
            {/*beneficiariesData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
                )*/}
            {musculoskeletal.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {psychiatric.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="red"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {circulatory.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {endocrinologic.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {nervous.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {injurious.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="deepskyblue"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {respiratory.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {sensory.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {intellectual.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {infectionparasite.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {immunocompromised.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {neoplasmic.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {onconogenic.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {digestive.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {genitourinary.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {epidermic.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {other.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {none.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
        {/*<div
          style={{
            backgroundColor: "rgba(250,250,250,0.6)",
            top: "10px",
            height: "40px",
            display: "flex",
            position: "relative",
            width: "100%",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              position: "absolute",
              width: "max-content"
            }}
          ></div>
          </div>*/}
      </div>
    );
  }
}

export default Unable;
