import React from "react";
import { populationdata } from "./populationdata";
class Population extends React.Component {
  constructor(props) {
    super(props);

    //let testing = [];
    let noData = [];
    let date = [];
    let ages = [];
    let people = [];
    let peopleData = [];
    let peopleall = [];

    Object.keys(populationdata).forEach((year, i) => {
      const yeardata = populationdata[year];
      date.push(year);
      yeardata.forEach((agedata) => {
        if (!isNaN(agedata.pop) && agedata.age !== "total") {
          if (!people[agedata.age]) people[agedata.age] = [];
          if (!peopleData[agedata.age]) peopleData[agedata.age] = [];
          if (!ages.includes(agedata.age)) ages.push(agedata.age);
          people[agedata.age].push(year);
          peopleData[agedata.age].push([year, agedata.pop]);
          peopleall.push(agedata.pop);
          return noData.push([year, 0]);
        }
      });
    });
    /*let dataDataData = {};
    Object.keys(dataData).forEach((label, i) => {
      const yearData = Object.values(label)[i];
      if (!dataDataData[yearData[0]]) dataDataData[yearData[0]] = 0;
      dataDataData[yearData[0]] = dataDataData[yearData[0]] + yearData[1];
    });*/
    var lowPeople = Math.min(...peopleall);
    var lowDate = Math.min(...date);
    var highPeople = Math.max(...peopleall);
    var highDate = Math.max(...date);
    //console.log(dataData);
    var state = {
      ages,
      peopleData,
      noData,
      yAxisPeople: highPeople - lowPeople,
      xAxisPeople: highDate - lowDate,
      lowPeople,
      highPeople,
      highDate,
      lowDate
    };
    this.state = state;
  }
  render() {
    const { ages } = this.state;
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
    const coefficience = (this.props.lastWidth - 60) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxisPeople) *
        coefficience *
        this.props.lastWidth,
      0
    ]);
    //console.log(this.state.oilprice);

    const lineheight = this.props.lineheight ? this.props.lineheight : 200;
    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: lineheight + 10,
      transform: "translate(0%,0%) scale(1,-1)"
    };

    var populations = {};
    Object.keys(this.state.peopleData)
      .filter((age) => age !== "total")
      .forEach((age) => {
        if (!populations[age]) populations[age] = [];
        populations[age] = this.state.peopleData[age].map(([x, y]) => [
          ((x - this.state.lowDate) / this.state.xAxisPeople) *
            coefficience *
            this.props.lastWidth,
          ((y - this.state.lowPeople) / this.state.yAxisPeople) * lineheight
        ]);
      });

    return (
      <div
        style={{
          fontSize: "12px",
          width: "100%",
          height: lineheight + 80,
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            zIndex: "9",
            backgroundColor: "rgba(255,255,255,.7)",
            padding: "4px 8px",
            position: "absolute",
            right: "0px"
          }}
        >
          <a href="https://www.census.gov/data-tools/demo/idb/#/pop?COUNTRY_YEAR=2022&COUNTRY_YR_ANIM=2015&FIPS_SINGLE=US&menu=popViz&POP_YEARS=1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022&FIPS=US&popPages=BYAGE">
            {this.state.lowDate}
            &nbsp;-&nbsp;
            {this.state.highDate}
          </a>
        </div>
        <div
          style={{
            userSelect: "none",
            cursor: "pointer",
            display: "flex",
            backgroundColor: "rgba(255,255,255,.6)",
            height: "40px",
            position: "relative"
          }}
        >
          <select
            onChange={(e) => {
              this.setState({ chosenAge: e.target.value });
            }}
          >
            {ages.map((age) => (
              <option key={age + "option"}>{age}</option>
            ))}
          </select>
          <div
            onClick={() =>
              this.setState({
                chosenAge:
                  isNaN(this.state.chosenAge) || this.state.chosenAge > 99
                    ? 100
                    : this.state.chosenAge + 1
              })
            }
            style={{
              userSelect: "none",
              padding: "15px 0px",
              width: "30px",
              textAlign: "center"
            }}
          >
            ^
          </div>
          <div
            onClick={() =>
              this.setState({
                chosenAge:
                  isNaN(this.state.chosenAge) || this.state.chosenAge < 1
                    ? 0
                    : this.state.chosenAge - 1
              })
            }
            style={{
              userSelect: "none",
              padding: "15px 0px",
              transform: "rotate(180deg)",
              width: "30px",
              textAlign: "center"
            }}
          >
            ^
          </div>
          <div>
            {" " +
              (!isNaN(this.state.chosenAge)
                ? this.state.chosenAge
                : "total min-max single-year")}
            <br />
            <span>
              {String(this.state.chosenAge) &&
              this.state.peopleData[this.state.chosenAge]
                ? shortNumber(
                    Math.min(
                      ...this.state.peopleData[this.state.chosenAge].map(
                        (x) => x[1]
                      )
                    )
                  )
                : shortNumber(this.state.lowPeople)}
              -
              {String(this.state.chosenAge) &&
              this.state.peopleData[this.state.chosenAge]
                ? shortNumber(
                    Math.max(
                      ...this.state.peopleData[this.state.chosenAge].map(
                        (x) => x[1]
                      )
                    )
                  )
                : shortNumber(this.state.highPeople)}
            </span>
          </div>
        </div>
        <div style={{ height: lineheight + 20, position: "relative" }}>
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
            {Object.keys(populations).map((age) =>
              populations[age].map(([x, y], i) => {
                return (
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      transform=".3s ease-in"
                      width={
                        !this.state.chosenAge
                          ? 2
                          : String(this.state.chosenAge) === String(age)
                          ? 5
                          : 1
                      }
                      height={
                        !this.state.chosenAge
                          ? 2
                          : this.state.chosenAge === age
                          ? 5
                          : 1
                      }
                      stroke={`rgb(${(age / 100) * 200},80,${
                        age > 74 ? 0 : (age / 100) * 200 + 60
                      })`} //"deepskyblue"
                      fill="blue"
                      opacity={
                        !this.state.chosenAge || this.state.chosenAge === age
                          ? 1
                          : 0.5
                      }
                      strokeWidth={1}
                      key={i}
                    />
                  )
                );
              })
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
          </div>
          
          secure the border ports criminals just as bad. sure but why not import outsourcing,
          they build their own house, they don't even gentrify, we can even get surplus producer value with padroni, 
          installments rents or insurance. consumer surpls over marginal labor leisure utilization utility with price controls

          judges prison "constitutionally is not a suicide pact!"
          */}
      </div>
    );
  }
}

export default Population;
