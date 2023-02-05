import React from "react";
import { laborwagedata, yearlypop } from "./salarydata";

export const shortNumber = (scler, notRound) => {
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
//industry by age
//wages by age
//wages by industry
const frequency = (chosenfrequency, a, range) => {
  var frequency = null;
  if (!chosenfrequency && range) {
    if (a === 0) {
      frequency = ["12-17"];
    } else if (a === 1) {
      frequency = ["18-24"];
    } else if (a === 2) {
      frequency = ["25-34"];
    } else if (a === 3) {
      frequency = ["35-44"];
    } else if (a === 4) {
      frequency = ["45-54"];
    } else if (a === 5) {
      frequency = ["55-64"];
    } else if (a === 6) {
      frequency = ["65-74"];
    }
  } else if (chosenfrequency || range) {
    //high
    if (a === 0) {
      frequency = [24];
    } else if (a === 1) {
      frequency = [29];
    } else if (a === 2) {
      frequency = [34];
    } else if (a === 3) {
      frequency = [44];
    } else if (a === 4) {
      frequency = [54];
    } else if (a === 5) {
      frequency = [64];
    } else if (a === 6) {
      frequency = [74];
    }
  } else {
    //cohort
    if (a === 0) {
      frequency = [17];
    } else if (a === 1) {
      frequency = [21, 24];
    } else if (a === 2) {
      frequency = [29, 34];
    } else if (a === 3) {
      frequency = [44];
    } else if (a === 4) {
      frequency = [54];
    } else if (a === 5) {
      frequency = [64];
    } else if (a === 6) {
      frequency = [74];
    }
  }
  return frequency;
};
class Wages extends React.Component {
  constructor(props) {
    super(props);

    let date = [];
    let noData = [];
    var averageLifetimeData = [];
    var averageLifetime = [];
    let mortalZeroNJData = [];
    var mortalZeroNJ = [];
    let mortalEightyFiveNJDataAge = [];
    //let mortalEightyFiveNJAge = [];
    let mortalSixtyFiveNJDataAge = [];
    //let mortalSixtyFiveNJAge = [];
    let mortalSeventyFiveNJDataAge = [];
    //let mortalSeventyFiveNJAge = [];
    let mortalFiftyNJDataAge = [];
    //let mortalFiftyNJAge = [];
    let mortalZeroNJDataAge = [];
    //let mortalZeroNJAge = [];
    let mortalFiftyNJData = [];
    let mortalFiftyNJ = [];
    let mortalSeventyFiveNJData = [];
    let mortalSeventyFiveNJ = [];
    let mortalSixtyFiveNJData = [];
    let mortalSixtyFiveNJ = [];
    let mortalEightyFiveNJData = [];
    let mortalEightyFiveNJ = [];
    let mortalNinetyFiveNJData = [];
    let mortalNinetyFiveNJ = [];
    let mortalOneTenNJData = [];
    let mortalOneTenNJ = [];
    let mZeroNJData = [];
    /*let mEightyFiveNJDataAge = [];
    let mSixtyFiveNJDataAge = [];
    let mSeventyFiveNJDataAge = [];
    let mFiftyNJDataAge = [];
    let mZeroNJDataAge = [];*/
    let mFiftyNJData = [];
    let mSixtyFiveNJData = [];
    let mSeventyFiveNJData = [];
    let mEightyFiveNJData = [];
    let mNinetyFiveNJData = [];
    let mOneTenNJData = [];
    const numer = (d) => Number(String(d).replaceAll(",", ""));
    Object.keys(laborwagedata).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      Object.values(Object.values(laborwagedata)[i]).forEach((x, n) => {
        const age = numer(Object.keys(Object.values(laborwagedata)[i])[n]);
        //console.log(age, year, x);
        //const age = Object.keys(x)[i];
        /*const pop = numer(
          popdata[year].find((y) => y.age - age > 0 && y.age - age < 10).pop
        );*/
        if (age === 17) {
          Object.values(x).forEach((v) =>
            Object.values(v).forEach((z) => {
              const m = numer(z);
              m && mZeroNJData.push([year, m]);
            })
          );
          //pop && mZeroNJDataAge.push([year, pop]);
        } else if (age === 21 || age === 24) {
          Object.values(x).forEach((v) =>
            Object.values(v).forEach((z) => {
              const m = numer(z);
              m && mFiftyNJData.push([year, m]);
            })
          );
          //pop && mFiftyNJDataAge.push([year, pop]);
        } else if (age === 29 || age === 34) {
          Object.values(x).forEach((v) =>
            Object.values(v).forEach((z) => {
              const m = numer(z);
              m && mSixtyFiveNJData.push([year, m]);
            })
          );
          //pop && mSixtyFiveNJDataAge.push([year, pop]);
        } else if (age === 44) {
          Object.values(x).forEach((v) =>
            Object.values(v).forEach((z) => {
              const m = numer(z);
              m && mSeventyFiveNJData.push([year, m]);
            })
          );
          //pop && mSeventyFiveNJDataAge.push([year, pop]);
        } else if (age === 54) {
          Object.values(x).forEach((v) =>
            Object.values(v).forEach((z) => {
              const m = numer(z);
              m && mEightyFiveNJData.push([year, m]);
            })
          );
          //pop && mEightyFiveNJDataAge.push([year, pop]);
        } else if (age === 64) {
          //console.log(v);
          Object.values(x).forEach((v) =>
            Object.values(v).forEach((z) => {
              const m = numer(z);
              m && mNinetyFiveNJData.push([year, m]);
            })
          );
        } else if (age === 74) {
          Object.values(x).forEach((v) =>
            Object.values(v).forEach((z) => {
              const m = numer(z);
              m && mOneTenNJData.push([year, m]);
            })
          );
        }
      });
    });
    //console.log(mEightyFiveNJData);
    date.forEach((x) => {
      let totmO = 0;
      mOneTenNJData.forEach((obj) => {
        if (obj[0] === x) totmO = totmO + obj[1];
      });
      mortalOneTenNJ.push(totmO);
      mortalOneTenNJData.push([x, totmO]);

      let totmN = 0;
      mNinetyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmN = totmN + obj[1];
      });
      mortalNinetyFiveNJ.push(totmN);
      mortalNinetyFiveNJData.push([x, totmN]);
      let totmE = 0;
      mEightyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmE = totmE + obj[1];
      });
      mortalEightyFiveNJ.push(totmE);
      mortalEightyFiveNJData.push([x, totmE]);
      let totmSe = 0;
      mSeventyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmSe = totmSe + obj[1];
      });
      mortalSeventyFiveNJ.push(totmSe);
      mortalSeventyFiveNJData.push([x, totmSe]);
      let totmS = 0;
      mSixtyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmS = totmS + obj[1];
      });
      mortalSixtyFiveNJ.push(totmS);
      mortalSixtyFiveNJData.push([x, totmS]);
      let totmF = 0;
      mFiftyNJData.forEach((obj) => {
        if (obj[0] === x) totmF = totmF + obj[1];
      });
      mortalFiftyNJ.push(totmF);
      mortalFiftyNJData.push([x, totmF]);
      let totmZ = 0;
      mZeroNJData.forEach((obj) => {
        if (obj[0] === x) totmZ = totmZ + obj[1];
      });
      mortalZeroNJ.push(totmZ);
      mortalZeroNJData.push([
        x,
        totmZ
      ]); /*
      let totmEFA = 0;
      mEightyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmEFA = totmEFA + obj[1];
      });
      mortalEightyFiveNJAge.push(totmEFA);
      mortalEightyFiveNJDataAge.push([x, totmEFA]);
      let totmSeA = 0;
      mSeventyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSeA = totmSeA + obj[1];
      });
      mortalSeventyFiveNJAge.push(totmSeA);
      mortalSeventyFiveNJDataAge.push([x, totmSeA]);
      let totmSA = 0;
      mSixtyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSA = totmSA + obj[1];
      });
      mortalSixtyFiveNJAge.push(totmSA);
      mortalSixtyFiveNJDataAge.push([x, totmSA]);
      let totmFA = 0;
      mFiftyNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmFA = totmFA + obj[1];
      });
      mortalFiftyNJAge.push(totmFA);
      mortalFiftyNJDataAge.push([x, totmFA]);
      let totmZA = 0;
      mZeroNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmZA = totmZA + obj[1];
      });
      mortalZeroNJAge.push(totmZA);
      mortalZeroNJDataAge.push([x, totmZA]);*/
    });
    //console.log(mortalSixtyFiveNJData);
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...mortalZeroNJ);
    const all = [
      ...mortalZeroNJ,
      ...mortalFiftyNJ,
      ...mortalSixtyFiveNJ,
      ...mortalSeventyFiveNJ,
      ...mortalEightyFiveNJ,
      ...mortalNinetyFiveNJ,
      ...mortalOneTenNJ
    ];
    var highlifetime = Math.max(...averageLifetime);
    var highDeaths = Math.max(...all);
    /*var cappop = Math.max(
      ...mortalZeroNJAge,
      ...mortalFiftyNJAge,
      ...mortalSixtyFiveNJAge,
      ...mortalSeventyFiveNJAge,
      ...mortalEightyFiveNJAge
    );*/
    noData.sort((a, b) => a[0] - b[0]);
    /*mortalZeroNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);*/
    mortalZeroNJData.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
    var state = {
      //cappop,
      highlifetime,
      averageLifetimeData,
      date,
      mortalZeroNJData,
      mortalZeroNJDataAge,
      mortalFiftyNJDataAge,
      mortalSixtyFiveNJDataAge,
      mortalSeventyFiveNJDataAge,
      mortalEightyFiveNJDataAge,
      mortalFiftyNJData,
      mortalSixtyFiveNJData,
      mortalSeventyFiveNJData,
      mortalEightyFiveNJData,
      mortalNinetyFiveNJData,
      mortalOneTenNJData,
      noData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDeaths,
      highDeaths
      //payOrEmploys: true
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    const { payOrEmploys, chosenfrequency, percapita } = this.state;
    if (
      percapita !== this.state.lastpercapita ||
      payOrEmploys !== this.state.lastChosenRate ||
      this.state.lastchosenfrequency !== chosenfrequency
    )
      this.setState(
        {
          lastpercapita: percapita,
          lastchosenfrequency: chosenfrequency,
          lastChosenRate: payOrEmploys
        },
        () => {
          let date = [];
          let noData = [];
          let mortalZeroNJData = [];
          var mortalZeroNJ = [];
          let mortalZeroNJDataAge = [];
          //let mortalZeroNJAge = [];
          let mortalFiftyNJDataAge = [];
          //let mortalFiftyNJAge = [];
          let mortalSixtyFiveNJDataAge = [];
          //let mortalSixtyFiveNJAge = [];
          let mortalSeventyFiveNJDataAge = [];
          //let mortalSeventyFiveNJAge = [];
          let mortalEightyFiveNJDataAge = [];
          //let mortalEightyFiveNJAge = [];
          let mortalFiftyNJData = [];
          let mortalFiftyNJ = [];
          let mortalSixtyFiveNJData = [];
          let mortalSixtyFiveNJ = [];
          let mortalSeventyFiveNJData = [];
          let mortalSeventyFiveNJ = [];
          let mortalEightyFiveNJData = [];
          let mortalEightyFiveNJ = [];
          let mortalNinetyFiveNJData = [];
          let mortalNinetyFiveNJ = [];
          let mortalOneTenNJData = [];
          let mortalOneTenNJ = [];
          let mZeroNJData = [];
          /*let mZeroNJDataAge = [];
          let mFiftyNJDataAge = [];
          let mSixtyFiveNJDataAge = [];
          let mSeventyFiveNJDataAge = [];
          let mEightyFiveNJDataAge = [];*/
          let mFiftyNJData = [];
          let mSixtyFiveNJData = [];
          let mSeventyFiveNJData = [];
          let mEightyFiveNJData = [];
          let mNinetyFiveNJData = [];
          let mOneTenNJData = [];
          const numer = (d) => Number(String(d).replaceAll(",", ""));
          Object.keys(laborwagedata).forEach((yearSet, i) => {
            const year = yearSet; //Number(yearSet.split("-")[1]);
            noData.push([year, 0]);
            date.push(year);
            /*const thisdecade = popdata.find(
              (x) => x.year - year < 5 && x.year - year > -5
            );*/
            Object.values(Object.values(laborwagedata)[i]).forEach((x, n) => {
              const age = numer(
                Object.keys(Object.values(laborwagedata)[i])[n]
              );
              /* const popp = numer(popdata[year].find((y) => y.age === age).pop);
              if (frequency(chosenfrequency, 0).includes(age)) {
                Object.values(x).forEach((v) => 
                  Object.values(v).forEach(m=>
                  mZeroNJDataAge.push([yea, payOrEmploys ? popp : popp]);
)               });
              } else if (frequency(chosenfrequency, 1).includes(age)) {
                Object.values(x).forEach((v) => 
                  Object.values(v).forEach(m=>
                  mFiftyNJDataAge.push([yer, payOrEmploys ? popp / 9 : popp]);
)               });
              } else if (frequency(chosenfrequency, 2).includes(age)) {
                Object.values(x).forEach((v) => 
                  Object.values(v).forEach(m=>
                  mSixtyFiveNJDataAge.push[
)                   year,
                    payOrEmploys ? popp / 3 : popp
                  ]);
                });
              } else if (frequency(chosenfrequency, 3).includes(age)) {
                Object.values(x).forEach((v) => 
                  Object.values(v).forEach(m=>
                  mSeventyFiveNJDataAge.puh([
)                   year,
                    payOrEmploys ? popp / 2 : popp
                  ]);
                });
              } else if (frequency(chosenfrequency, 4).includes(age)) {
                Object.values(x).forEach((v) => 
                  Object.values(v).forEach(m=>
                  mEightyFiveNJDataAge.pus([
)                   year,
                    payOrEmploys ? popp / 2 : popp
                  ]);
                });
              }*/
              if (frequency(chosenfrequency, 0).includes(age)) {
                Object.values(x).forEach((v) =>
                  Object.values(v).forEach((z, i) => {
                    const pay = numer(Object.keys(v)[i].replace("k", ""));
                    const m = numer(z);
                    m && mZeroNJData.push([year, pay * m, m]);
                  })
                );
              } else if (frequency(chosenfrequency, 1).includes(age)) {
                //console.log(popp)
                Object.values(x).forEach((v) =>
                  Object.values(v).forEach((z, i) => {
                    const pay = numer(Object.keys(v)[i].replace("k", ""));
                    const m = numer(z);
                    m && mFiftyNJData.push([year, pay * m, m]);
                  })
                );
              } else if (frequency(chosenfrequency, 2).includes(age)) {
                Object.values(x).forEach((v) =>
                  Object.values(v).forEach((z, i) => {
                    const pay = numer(Object.keys(v)[i].replace("k", ""));
                    const m = numer(z);
                    m && mSixtyFiveNJData.push([year, pay * m, m]);
                  })
                );
              } else if (frequency(chosenfrequency, 3).includes(age)) {
                Object.values(x).forEach((v) =>
                  Object.values(v).forEach((z, i) => {
                    const pay = numer(Object.keys(v)[i].replace("k", ""));
                    const m = numer(z);
                    m && mSeventyFiveNJData.push([year, pay * m, m]);
                  })
                );
              } else if (frequency(chosenfrequency, 4).includes(age)) {
                Object.values(x).forEach((v) =>
                  Object.values(v).forEach((z, i) => {
                    const pay = numer(Object.keys(v)[i].replace("k", ""));
                    const m = numer(z);
                    m && mEightyFiveNJData.push([year, pay * m, m]);
                  })
                );
              } else if (frequency(chosenfrequency, 5).includes(age)) {
                Object.values(x).forEach((v) =>
                  Object.values(v).forEach((z, i) => {
                    const pay = numer(Object.keys(v)[i].replace("k", ""));
                    const m = numer(z);
                    m && mNinetyFiveNJData.push([year, pay * m, m]);
                  })
                );
              } else if (frequency(chosenfrequency, 6).includes(age)) {
                Object.values(x).forEach((v) =>
                  Object.values(v).forEach((z, i) => {
                    const pay = numer(Object.keys(v)[i].replace("k", ""));
                    const m = numer(z);
                    m && mOneTenNJData.push([year, pay * m, m]);
                  })
                );
              }
            });
          });
          date.forEach((x) => {
            const getpop = (e) => {
              const rnge = frequency(false, e, true)[0].split("-");
              //const diff = rnge[1] - rnge[0];
              var pop = 0;
              const population = yearlypop[x];
              for (let r = Number(rnge[0]); r < Number(rnge[1] + 2); r++) {
                Object.keys(population).forEach((y, i) => {
                  //console.log(x, y);
                  if (Number(y) === r) {
                    pop = pop + Number(Object.values(population)[i]);
                  }
                });
              }
              // console.log(rnge, pop);
              return pop / 1000;
            };
            let totmO = 0;
            let totmOO = 0;
            mOneTenNJData.forEach((obj) => {
              if (obj[0] === x) {
                totmO = totmO + obj[payOrEmploys ? 1 : 2];
                totmOO = totmOO + obj[2];
              }
            });
            const perCapita = (x, o, base) => {
              //console.log(x,getpop(o))
              return percapita ? (payOrEmploys ? x / base : x / getpop(o)) : x;
            };
            mortalOneTenNJ.push(perCapita(totmO, 0, totmOO));
            mortalOneTenNJData.push([x, perCapita(totmO, 0, totmOO)]);

            let totmN = 0;
            let totmNN = 0;
            mNinetyFiveNJData.forEach((obj) => {
              if (obj[0] === x) {
                totmN = totmN + obj[payOrEmploys ? 1 : 2];
                totmNN = totmNN + obj[2];
              }
            });
            mortalNinetyFiveNJ.push(perCapita(totmN, 1, totmNN));
            mortalNinetyFiveNJData.push([x, perCapita(totmN, 1, totmNN)]);
            let totmE = 0;
            let totmEE = 0;
            mEightyFiveNJData.forEach((obj) => {
              if (obj[0] === x) {
                totmE = totmE + obj[payOrEmploys ? 1 : 2];
                totmEE = totmEE + obj[2];
              }
            });
            mortalEightyFiveNJ.push(perCapita(totmE, 2, totmEE));
            mortalEightyFiveNJData.push([x, perCapita(totmE, 2, totmEE)]);
            let totmSe = 0;
            let totmSee = 0;
            mSeventyFiveNJData.forEach((obj) => {
              if (obj[0] === x) {
                totmSe = totmSe + obj[payOrEmploys ? 1 : 2];
                totmSee = totmSee + obj[2];
              }
            });
            mortalSeventyFiveNJ.push(perCapita(totmSe, 3, totmSee));
            mortalSeventyFiveNJData.push([x, perCapita(totmSe, 3, totmSee)]);
            let totmS = 0;
            let totmSS = 0;
            mSixtyFiveNJData.forEach((obj) => {
              if (obj[0] === x) {
                totmS = totmS + obj[payOrEmploys ? 1 : 2];
                totmSS = totmSS + obj[2];
              }
            });
            mortalSixtyFiveNJ.push(perCapita(totmS, 4, totmSS));
            mortalSixtyFiveNJData.push([x, perCapita(totmS, 4, totmSS)]);
            let totmF = 0;
            let totmFF = 0;
            mFiftyNJData.forEach((obj) => {
              if (obj[0] === x) {
                totmF = totmF + obj[payOrEmploys ? 1 : 2];
                totmFF = totmFF + obj[2];
              }
            });
            mortalFiftyNJ.push(perCapita(totmF, 5, totmFF));
            mortalFiftyNJData.push([x, perCapita(totmF, 5, totmFF)]);
            let totmZ = 0;
            let totmZZ = 0;
            mZeroNJData.forEach((obj) => {
              if (obj[0] === x) {
                totmZ = totmZ + obj[payOrEmploys ? 1 : 2];
                totmZZ = totmZZ + obj[2];
              }
            });
            mortalZeroNJ.push(perCapita(totmZ, 6, totmZZ));
            mortalZeroNJData.push([
              x,
              perCapita(totmZ, 6, totmZZ)
            ]); /*
            let totmEFA = 0;
            mEightyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmEFA = totmEFA + obj[1];
            });
            mortalEightyFiveNJAge.push(totmEFA);
            mortalEightyFiveNJDataAge.push([x, totmEFA]);
            let totmSeA = 0;
            mSeventyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmSeA = totmSeA + obj[1];
            });
            mortalSeventyFiveNJAge.push(totmSeA);
            mortalSeventyFiveNJDataAge.push([x, totmSeA]);
            let totmSA = 0;
            mSixtyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmSA = totmSA + obj[1];
            });
            mortalSixtyFiveNJAge.push(totmSA);
            mortalSixtyFiveNJDataAge.push([x, totmSA]);
            let totmFA = 0;
            mFiftyNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmFA = totmFA + obj[1];
            });
            mortalFiftyNJAge.push(totmFA);
            mortalFiftyNJDataAge.push([x, totmFA]);
            let totmZA = 0;
            mZeroNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmZA = totmZA + obj[1];
            });
            mortalZeroNJAge.push(totmZA);
            mortalZeroNJDataAge.push([x, totmZA]);*/
          });
          var lowDate = Math.min(...date);
          var highDate = Math.max(...date);
          var lowDeaths = 0; //Math.min(...mortalZeroNJ);
          const all = [
            ...(!percapita ? mortalZeroNJ : []),
            ...(!percapita ? mortalFiftyNJ : []),
            ...mortalSixtyFiveNJ,
            ...mortalSeventyFiveNJ,
            ...mortalEightyFiveNJ,
            ...mortalNinetyFiveNJ,
            ...mortalOneTenNJ
          ];
          var highDeaths = Math.max(...all);
          /*var cappop = Math.max(
            ...mortalZeroNJAge,
            ...mortalFiftyNJAge,
            ...mortalSixtyFiveNJAge,
            ...mortalSeventyFiveNJAge,
            ...mortalEightyFiveNJAge
          );*/
          noData.sort(
            (a, b) => a[0] - b[0]
          ); /*
          mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);*/
          mortalZeroNJData.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
          this.setState({
            date,
            //cappop,
            mortalZeroNJData,
            mortalZeroNJDataAge,
            mortalFiftyNJDataAge,
            mortalSixtyFiveNJDataAge,
            mortalSeventyFiveNJDataAge,
            mortalEightyFiveNJDataAge,
            mortalFiftyNJData,
            mortalSixtyFiveNJData,
            mortalSeventyFiveNJData,
            mortalEightyFiveNJData,
            mortalNinetyFiveNJData,
            mortalOneTenNJData,
            noData,
            yAxis: highDeaths - lowDeaths,
            xAxis: highDate - lowDate,
            lowDate,
            highDate,
            lowDeaths,
            highDeaths
          });
        }
      );
  };
  render() {
    const yaxis = /*this.state.yaxis ? */ this.state.yAxis; //: this.state.cappop;
    const { payOrEmploys, lowDate } = this.state;
    const coefficience = (this.props.lastWidth - 80) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      0
    ]); /*
    const mortalZeroNJDataAge = this.state.mortalZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / this.state.cappop) *lineheight
    ]);
    const mortalFiftyNJDataAge = this.state.mortalFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) *lineheight
      ]
    );
    const mortalSixtyFiveNJDataAge = this.state.mortalSixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) *lineheight
      ]
    );
    const mortalSeventyFiveNJDataAge = this.state.mortalSeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) *lineheight
      ]
    );
    const mortalEightyFiveNJDataAge = this.state.mortalEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) *lineheight
      ]
    );*/
    const lineheight = this.props.lineheight ? this.props.lineheight : 180;
    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: lineheight + 10,
      transform: "translate(0%,0%) scale(1,-1)"
    };
    const mortalZeroNJData = this.state.mortalZeroNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / yaxis) * lineheight
    ]);
    const mortalFiftyNJData = this.state.mortalFiftyNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / yaxis) * lineheight
    ]);
    const mortalSixtyFiveNJData = this.state.mortalSixtyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const mortalSeventyFiveNJData = this.state.mortalSeventyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const mortalEightyFiveNJData = this.state.mortalEightyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const mortalNinetyFiveNJData = this.state.mortalNinetyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const mortalOneTenNJData = this.state.mortalOneTenNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / yaxis) * lineheight
    ]);
    const averageLifetimeData = this.state.averageLifetimeData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - 0) / this.state.highlifetime) * lineheight
    ]);
    //console.log(this.state.xAxis);
    //const ite = { border: "1px grey dashed", width: "max-content" };
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      alignItems: "center"
    };
    const buttonStyle = {
      width: "max-content",
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
    //console.log(mortalEightyFiveNJData);
    return (
      <div
        style={{
          fontSize: "12px",
          width: "100%",
          height: lineheight + 90,
          position: "relative",
          backgroundColor: "rgb(190,150,180)"
        }}
      >
        <div style={labelstyle}>
          <span
            style={{
              color: "white",
              fontSize: "12px",
              wordWrap: "break-word"
            }}
          >
            <a
              style={{
                color: "white"
              }}
              href="https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-hinc/hinc-03.2014.html"
            >
              National Household Income
            </a>
            <br />
            part time 30hr workweek
            <br />
            {payOrEmploys ? "$" : !this.state.percapita ? "" : ""}
            {shortNumber(this.state.highDeaths * (payOrEmploys ? 1000 : 100)) +
              (payOrEmploys || !this.state.percapita ? "" : "%")}
          </span>
          <div
            style={buttonStyle}
            onClick={() =>
              this.setState(
                //{ chosenfrequency: !this.state.chosenfrequency }
                this.state.payOrEmploys && this.state.chosenfrequency
                  ? { payOrEmploys: false, chosenfrequency: false }
                  : !this.state.payOrEmploys
                  ? { payOrEmploys: true }
                  : { chosenfrequency: true }
              )
            }
          >
            {payOrEmploys ? "pay per " : "employment per "}
          </div>
          <button
            style={buttonStyle}
            onClick={() => {
              this.setState({
                percapita: !this.state.percapita
              });
            }}
          >
            {this.state.percapita
              ? payOrEmploys
                ? "employee"
                : "capita"
              : this.state.chosenfrequency && !payOrEmploys
              ? "high"
              : "cohort"}
          </button>
          <div
            style={{
              bottom: "0px",
              backgroundColor: "rgba(255,255,255,.3)",
              padding: "4px 8px",
              position: "absolute",
              right: "0px"
            }}
          >
            {lowDate}&nbsp;
            {this.state.highDate}
          </div>
        </div>{" "}
        <div
          style={{
            width: "100%",
            height: "50px",
            overflowX: "auto",
            overflowY: "hidden",
            position: "absolute"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute"
            }}
          >
            <div
              style={{
                width: "max-content"
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "white"
                }}
              />
              {frequency(this.state.chosenfrequency, 0, true)}&nbsp;&nbsp;
            </div>
            <div
              style={{
                width: "max-content"
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "purple"
                }}
              />
              {frequency(this.state.chosenfrequency, 1, true)}&nbsp;&nbsp;
            </div>
            <div
              style={{
                width: "max-content"
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "blue"
                }}
              />
              {frequency(this.state.chosenfrequency, 2, true)}&nbsp;&nbsp;
            </div>
            <div
              style={{
                width: "max-content"
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "green"
                }}
              />
              {frequency(this.state.chosenfrequency, 3, true)}&nbsp;&nbsp;
            </div>
            <div
              style={{
                width: "max-content"
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "orange"
                }}
              />
              {frequency(this.state.chosenfrequency, 4, true)}&nbsp;&nbsp;
            </div>
            <div
              style={{
                width: "max-content"
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "red"
                }}
              />
              {frequency(this.state.chosenfrequency, 5, true)}&nbsp;&nbsp;
            </div>
            <div
              style={{
                width: "max-content"
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "black"
                }}
              />
              {
                frequency(this.state.chosenfrequency, 6, true) //chosenfrequency, index, range defaults cohort
              }
              &nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            height: lineheight,
            marginTop: "30px"
          }}
        >
          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {(!this.state.percapita || payOrEmploys) &&
              mortalZeroNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="white"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
            {/*<BasisCurve
              showPoints={false}
              strokeWidth={4}
              stroke="purple"
              data={mortalZeroNJData}
            />*/}
            {/*mortalZeroNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="white"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalFiftyNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="purple"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalSixtyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="blue"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalSeventyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="green"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalEightyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="orange"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
                  )*/}
            {(!this.state.percapita || payOrEmploys) &&
              mortalFiftyNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="purple"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
            {mortalSixtyFiveNJData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="blue"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalSeventyFiveNJData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalEightyFiveNJData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="orange"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalNinetyFiveNJData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="red"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalOneTenNJData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="black"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {averageLifetimeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="black"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
        {/*<div
          style={{
            marginTop: "30px",
            marginLeft: "20px",
            alignContent: "center",
            height: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,  minmax(10px, 1fr))",
            width: "calc(100% - 30px)"
          }}
        >
          {this.state.date.map((x) => (
            <div
              key={x}
              style={{
                fontWeight: "bolder",
                fontSize: this.props.lastWidth < 300 ? "8px" : "14px",
                transform: "rotate(-20deg)",
                width: "min-content",
                wordBreak: "none",
                margin: "0px 0px"
              }}
            >
              {x}
            </div>
          ))}
        </div>*/}
      </div>
    );
  }
}
export default Wages;
