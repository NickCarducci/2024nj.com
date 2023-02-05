import React from "react";
const pharmacy = [
  {
    date: "2006-01",
    Amphetamine: 1972308.18,
    Oxymorphone: 26.882851,
    PowderedOpium: 10497.810159,
    Morphine: 4258148.82,
    Oxycodone: 8710111.13,
    Methadone: 3408613.78,
    Fentanyl: 103354.06,
    Codeine: 4504889,
    Cocaine: 16340.470115,
    Cannabicyclol: 0
  },
  {
    date: "2006-04",
    Amphetamine: 1954704.27,
    Oxymorphone: 23.162829,
    PowderedOpium: 13055.450228,
    Morphine: 4348391.6,
    Oxycodone: 9071200.06,
    Methadone: 3449053.59,
    Fentanyl: 108210.49,
    Codeine: 4838444.02,
    Cocaine: 16024.580135,
    Cannabicyclol: 0
  },
  {
    date: "2006-07",
    Amphetamine: 1928845.44,
    Oxymorphone: 12557.470583,
    PowderedOpium: 11579.020135,
    Morphine: 4449465.34,
    Oxycodone: 9479570.06,
    Methadone: 3546687.99,
    Fentanyl: 109730.98,
    Codeine: 4781469.65,
    Cocaine: 14241.400129,
    Cannabicyclol: 0
  },
  {
    date: "2006-10",
    Amphetamine: 2084481.35,
    Oxymorphone: 45556.34007,
    PowderedOpium: 11251.790163,
    Morphine: 4435497.18,
    Oxycodone: 9757720.92,
    Methadone: 3557363.35,
    Fentanyl: 107148.53,
    Codeine: 4612290.36,
    Cocaine: 13871.980159,
    Cannabicyclol: 0
  },
  {
    date: "2007-01",
    Amphetamine: 2184786.46,
    Oxymorphone: 59485.710244,
    PowderedOpium: 12229.240156,
    Morphine: 4573680.11,
    Oxycodone: 10768268.16,
    Methadone: 3622219.99,
    Fentanyl: 112347.51,
    Codeine: 4687010.28,
    Cocaine: 14649.010112,
    Cannabicyclol: 0
  },
  {
    date: "2007-04",
    Amphetamine: 2192306.69,
    Oxymorphone: 85093.800157,
    PowderedOpium: 11752.860113,
    Morphine: 4679232.92,
    Oxycodone: 11024291.8,
    Methadone: 3672659.87,
    Fentanyl: 113303.65,
    Codeine: 4601403.74,
    Cocaine: 15535.850119,
    Cannabicyclol: 0
  },
  {
    date: "2007-07",
    Amphetamine: 2112198.3,
    Oxymorphone: 102110.910089,
    PowderedOpium: 5242749.520281,
    Morphine: 4727184.84,
    Oxycodone: 11211726.81,
    Methadone: 3690721.91,
    Fentanyl: 117770.21,
    Codeine: 4569201.98,
    Cocaine: 13515.51012,
    Cannabicyclol: 0
  },
  {
    date: "2007-10",
    Amphetamine: 2336147.25,
    Oxymorphone: 143694.230077,
    PowderedOpium: 158.88253,
    Morphine: 5051758.4,
    Oxycodone: 12446307.1,
    Methadone: 3875510.45,
    Fentanyl: 119715.68,
    Codeine: 4957758.43,
    Cocaine: 14817.200102,
    Cannabicyclol: 0
  },
  {
    date: "2008-01",
    Amphetamine: 2266935.31,
    Oxymorphone: 135800.530114,
    PowderedOpium: 4564.540809,
    Morphine: 4839237.87,
    Oxycodone: 11443549.99,
    Methadone: 3573607.68,
    Fentanyl: 122567.81,
    Codeine: 4834517.97,
    Cocaine: 14640.04011,
    Cannabicyclol: 0
  },
  {
    date: "2008-04",
    Amphetamine: 2284468.77,
    Oxymorphone: 173950.940063,
    PowderedOpium: 10247.410127,
    Morphine: 5096530.86,
    Oxycodone: 11749172.16,
    Methadone: 3706756.23,
    Fentanyl: 117442.31,
    Codeine: 4413747.92,
    Cocaine: 11704.120285,
    Cannabicyclol: 0
  },
  {
    date: "2008-07",
    Amphetamine: 2296924.82,
    Oxymorphone: 193038.120056,
    PowderedOpium: 8707.280171,
    Morphine: 5302399.6,
    Oxycodone: 12646586.8,
    Methadone: 3699428.18,
    Fentanyl: 121005.01,
    Codeine: 4406795.97,
    Cocaine: 16304.350107,
    Cannabicyclol: 0
  },
  {
    date: "2008-10",
    Amphetamine: 2442173.64,
    Oxymorphone: 209322.810027,
    PowderedOpium: 8663.350277,
    Morphine: 5352177.87,
    Oxycodone: 13116910.84,
    Methadone: 3827612.17,
    Fentanyl: 119344.3,
    Codeine: 4422270.86,
    Cocaine: 13105.960199,
    Cannabicyclol: 0
  },
  {
    date: "2009-01",
    Amphetamine: 2446802.01,
    Oxymorphone: 222850.250027,
    PowderedOpium: 9025.850221,
    Morphine: 5485821.56,
    Oxycodone: 12947814.44,
    Methadone: 3705331.12,
    Fentanyl: 117177.02,
    Codeine: 4307303.81,
    Cocaine: 12848.710216,
    Cannabicyclol: 0
  },
  {
    date: "2009-04",
    Amphetamine: 2743449.67,
    Oxymorphone: 246736.170081,
    PowderedOpium: 8650.470187,
    Morphine: 5560240.64,
    Oxycodone: 13663823.15,
    Methadone: 3809365.57,
    Fentanyl: 115884.5,
    Codeine: 4363479.19,
    Cocaine: 13137.230159,
    Cannabicyclol: 0
  },
  {
    date: "2009-07",
    Amphetamine: 2616830.44,
    Oxymorphone: 263590.69003,
    PowderedOpium: 8622.610214,
    Morphine: 5591651.94,
    Oxycodone: 14034274.02,
    Methadone: 3835186.84,
    Fentanyl: 117491.12,
    Codeine: 4141640.23,
    Cocaine: 14892.510119,
    Cannabicyclol: 0
  },
  {
    date: "2009-10",
    Amphetamine: 2766366.96,
    Oxymorphone: 281316.850024,
    PowderedOpium: 8685.990135,
    Morphine: 5612771.86,
    Oxycodone: 15095662.91,
    Methadone: 3838759.45,
    Fentanyl: 122319.55,
    Codeine: 4176710.46,
    Cocaine: 9288.450474,
    Cannabicyclol: 0
  },
  {
    date: "2010-01",
    Amphetamine: 2816587.53,
    Oxymorphone: 285551.880031,
    PowderedOpium: 9210.730162,
    Morphine: 5504978.77,
    Oxycodone: 15219155.9,
    Methadone: 3805820.52,
    Fentanyl: 125169.35,
    Codeine: 4064789.16,
    Cocaine: 14837.460193,
    Cannabicyclol: 0
  },
  {
    date: "2010-04",
    Amphetamine: 2987482.18,
    Oxymorphone: 315965.060031,
    PowderedOpium: 9296.850164,
    Morphine: 5837321.21,
    Oxycodone: 16599379.83,
    Methadone: 3932278,
    Fentanyl: 132866.66,
    Codeine: 4045599.83,
    Cocaine: 12693.100185,
    Cannabicyclol: 0
  },
  {
    date: "2010-07",
    Amphetamine: 2936022.24,
    Oxymorphone: 334401.850007,
    PowderedOpium: 8811.820244,
    Morphine: 5749510.33,
    Oxycodone: 16019055.68,
    Methadone: 3838908.93,
    Fentanyl: 134906.6,
    Codeine: 3907059.09,
    Cocaine: 11021.650245,
    Cannabicyclol: 0
  },
  {
    date: "2010-10",
    Amphetamine: 3033402.21,
    Oxymorphone: 419272.340015,
    PowderedOpium: 7182.010324,
    Morphine: 5803901.51,
    Oxycodone: 15836094.56,
    Methadone: 3884441.95,
    Fentanyl: 135834.94,
    Codeine: 4102574.41,
    Cocaine: 10471.520262,
    Cannabicyclol: 0
  },
  {
    date: "2011-01",
    Amphetamine: 3116058.8,
    Oxymorphone: 477585.420029,
    PowderedOpium: 10225.840213,
    Morphine: 5804455.2,
    Oxycodone: 15824759.3,
    Methadone: 3816844.01,
    Fentanyl: 118649.07,
    Codeine: 4383277.98,
    Cocaine: 11262.750133,
    Cannabicyclol: 0
  },
  {
    date: "2011-04",
    Amphetamine: 3410904.99,
    Oxymorphone: 520268.090027,
    PowderedOpium: 8592.910217,
    Morphine: 5929790.79,
    Oxycodone: 16006934.43,
    Methadone: 3857613.59,
    Fentanyl: 135171.17,
    Codeine: 4195863.5,
    Cocaine: 11260.230211,
    Cannabicyclol: 0
  },
  {
    date: "2011-07",
    Amphetamine: 3158085.83,
    Oxymorphone: 568725.180019,
    PowderedOpium: 8582.32019,
    Morphine: 5930945.53,
    Oxycodone: 16059506.2,
    Methadone: 3802254.13,
    Fentanyl: 122038.59,
    Codeine: 4000872.16,
    Cocaine: 11151.040194,
    Cannabicyclol: 0
  },
  {
    date: "2011-10",
    Amphetamine: 3224183.29,
    Oxymorphone: 606899.930012,
    PowderedOpium: 8568.970223,
    Morphine: 5959620.56,
    Oxycodone: 15655232.41,
    Methadone: 3828714.77,
    Fentanyl: 125752.04,
    Codeine: 4214007.72,
    Cocaine: 9826.520203,
    Cannabicyclol: 0
  },
  {
    date: "2012-01",
    Amphetamine: 3575105.85,
    Oxymorphone: 471295.810029,
    PowderedOpium: 8586.240185,
    Morphine: 6085175.67,
    Oxycodone: 15411438.12,
    Methadone: 3740925.98,
    Fentanyl: 123767.44,
    Codeine: 3980197.06,
    Cocaine: 10604.220193,
    Cannabicyclol: 0
  },
  {
    date: "2012-04",
    Amphetamine: 3554756.22,
    Oxymorphone: 410079.560013,
    PowderedOpium: 8063.250231,
    Morphine: 5945668.38,
    Oxycodone: 15277714.44,
    Methadone: 3844588.48,
    Fentanyl: 119883.11,
    Codeine: 3893423.2,
    Cocaine: 10205.500252,
    Cannabicyclol: 0
  },
  {
    date: "2012-07",
    Amphetamine: 3609254.88,
    Oxymorphone: 367735.160017,
    PowderedOpium: 6584.450354,
    Morphine: 6086567.01,
    Oxycodone: 15201289.42,
    Methadone: 3732436.34,
    Fentanyl: 119376.41,
    Codeine: 3763764.74,
    Cocaine: 9604.16018,
    Cannabicyclol: 0
  },
  {
    date: "2012-10",
    Amphetamine: 3748609.42,
    Oxymorphone: 370071.430018,
    PowderedOpium: 9934.230164,
    Morphine: 6105140.66,
    Oxycodone: 15385140.72,
    Methadone: 3846497.67,
    Fentanyl: 119158.24,
    Codeine: 3767196.59,
    Cocaine: 10232.540243,
    Cannabicyclol: 0
  },
  {
    date: "2013-01",
    Amphetamine: 3609553.56,
    Oxymorphone: 390417.960051,
    PowderedOpium: 7921.190199,
    Morphine: 5693732.76,
    Oxycodone: 14266116.07,
    Methadone: 3643261,
    Fentanyl: 110347.6,
    Codeine: 3527110.68,
    Cocaine: 9284.230181,
    Cannabicyclol: 0
  },
  {
    date: "2013-04",
    Amphetamine: 3733323.34,
    Oxymorphone: 406029.960063,
    PowderedOpium: 7895.110216,
    Morphine: 5795392.34,
    Oxycodone: 14200971.16,
    Methadone: 3729037.34,
    Fentanyl: 115688.39,
    Codeine: 3492564.58,
    Cocaine: 9539.120207,
    Cannabicyclol: 0
  },
  {
    date: "2013-07",
    Amphetamine: 3836468.2,
    Oxymorphone: 413680.510046,
    PowderedOpium: 7995.04025,
    Morphine: 5879054.42,
    Oxycodone: 14409496.93,
    Methadone: 3739048.19,
    Fentanyl: 115872.37,
    Codeine: 3492776.24,
    Cocaine: 8863.850169,
    Cannabicyclol: 0
  },
  {
    date: "2013-10",
    Amphetamine: 4032634.54,
    Oxymorphone: 412292.160026,
    PowderedOpium: 8373.840262,
    Morphine: 5653368.83,
    Oxycodone: 14480529.44,
    Methadone: 3761519.04,
    Fentanyl: 113383.41,
    Codeine: 3461090.83,
    Cocaine: 8934.35029,
    Cannabicyclol: 0
  },
  {
    date: "2014-01",
    Amphetamine: 4084526.17,
    Oxymorphone: 407550.240022,
    PowderedOpium: 7752.060261,
    Morphine: 5524288.39,
    Oxycodone: 13989221.42,
    Methadone: 3631897.64,
    Fentanyl: 111398.17,
    Codeine: 3159712.42,
    Cocaine: 8337.390169,
    Cannabicyclol: 0
  },
  {
    date: "2014-04",
    Amphetamine: 4148854.07,
    Oxymorphone: 416850.960054,
    PowderedOpium: 7855.940248,
    Morphine: 5496598.77,
    Oxycodone: 13995476.01,
    Methadone: 3765949.61,
    Fentanyl: 110814.49,
    Codeine: 3166823.59,
    Cocaine: 8984.850243,
    Cannabicyclol: 0
  },
  {
    date: "2014-07",
    Amphetamine: 4312264.56,
    Oxymorphone: 436671.310044,
    PowderedOpium: 8400.310184,
    Morphine: 5598228.17,
    Oxycodone: 14613074.26,
    Methadone: 3783234.55,
    Fentanyl: 115110,
    Codeine: 3430592.54,
    Cocaine: 8004.970207,
    Cannabicyclol: 0
  },
  {
    date: "2014-10",
    Amphetamine: 4499265.87,
    Oxymorphone: 430349.660065,
    PowderedOpium: 8667.480182,
    Morphine: 5514480.56,
    Oxycodone: 14664176.5,
    Methadone: 3852459.51,
    Fentanyl: 114569.37,
    Codeine: 4691899.04,
    Cocaine: 8413.150297,
    Cannabicyclol: 0
  },
  {
    date: "2015-01",
    Amphetamine: 4438614.34,
    Oxymorphone: 416833.840016,
    PowderedOpium: 8097.150196,
    Morphine: 5286875.96,
    Oxycodone: 14137036.11,
    Methadone: 3739336.35,
    Fentanyl: 107960.51,
    Codeine: 4500007.06,
    Cocaine: 8345.380162,
    Cannabicyclol: 0.000007
  },
  {
    date: "2015-04",
    Amphetamine: 4606209.97,
    Oxymorphone: 423720.180019,
    PowderedOpium: 8481.04019,
    Morphine: 5270441.89,
    Oxycodone: 14367832.43,
    Methadone: 3820219.13,
    Fentanyl: 108798.43,
    Codeine: 4814093.02,
    Cocaine: 8827.500184,
    Cannabicyclol: 0.000007
  },
  {
    date: "2015-07",
    Amphetamine: 4661826.89,
    Oxymorphone: 431308.750017,
    PowderedOpium: 8294.120228,
    Morphine: 5243047.42,
    Oxycodone: 14496330.96,
    Methadone: 3815617.31,
    Fentanyl: 108942.85,
    Codeine: 4600581.97,
    Cocaine: 7425.47031,
    Cannabicyclol: 0.010006
  },
  {
    date: "2015-10",
    Amphetamine: 4847942.78,
    Oxymorphone: 425075.970024,
    PowderedOpium: 8758.860252,
    Morphine: 5283356.01,
    Oxycodone: 14548860.96,
    Methadone: 3881695.93,
    Fentanyl: 107349.73,
    Codeine: 4710236.61,
    Cocaine: 8196.640201,
    Cannabicyclol: 0.000007
  },
  {
    date: "2016-01",
    Amphetamine: 4847969.23,
    Oxymorphone: 412741.09001,
    PowderedOpium: 7990.860239,
    Morphine: 5008333.24,
    Oxycodone: 14219851.32,
    Methadone: 3788005.1,
    Fentanyl: 103164.21,
    Codeine: 4437425.17,
    Cocaine: 7502.710213,
    Cannabicyclol: 0
  },
  {
    date: "2016-04",
    Amphetamine: 4992883.29,
    Oxymorphone: 397479.680008,
    PowderedOpium: 8377.850171,
    Morphine: 4854087.37,
    Oxycodone: 13755131.74,
    Methadone: 3835633.19,
    Fentanyl: 100695.62,
    Codeine: 4387100.55,
    Cocaine: 7432.180278,
    Cannabicyclol: 0
  },
  {
    date: "2016-07",
    Amphetamine: 5025386.97,
    Oxymorphone: 383307.760014,
    PowderedOpium: 8544.570188,
    Morphine: 4736525.09,
    Oxycodone: 13532745.56,
    Methadone: 3708145.81,
    Fentanyl: 96389.63,
    Codeine: 4307724.61,
    Cocaine: 6933.640218,
    Cannabicyclol: 0
  },
  {
    date: "2016-10",
    Amphetamine: 5099683.58,
    Oxymorphone: 370529.830008,
    PowderedOpium: 8284.360204,
    Morphine: 4572021.66,
    Oxycodone: 13251013.91,
    Methadone: 3188695.9,
    Fentanyl: 94047.42,
    Codeine: 4281520.12,
    Cocaine: 7376.980228,
    Cannabicyclol: 0
  },
  {
    date: "2017-01",
    Amphetamine: 5166948.15,
    Oxymorphone: 351666.510011,
    PowderedOpium: 7714.5103,
    Morphine: 4432979.8,
    Oxycodone: 12834969.17,
    Methadone: 3615706.25,
    Fentanyl: 87260.89,
    Codeine: 4167394.82,
    Cocaine: 6911.340296,
    Cannabicyclol: 0
  },
  {
    date: "2017-04",
    Amphetamine: 5197728.27,
    Oxymorphone: 329262.400016,
    PowderedOpium: 8232.610263,
    Morphine: 4186962.19,
    Oxycodone: 12424453.8,
    Methadone: 3717719.32,
    Fentanyl: 83194.09,
    Codeine: 4109687.16,
    Cocaine: 7064.000316,
    Cannabicyclol: 0
  },
  {
    date: "2017-07",
    Amphetamine: 5181758.77,
    Oxymorphone: 246529.620051,
    PowderedOpium: 7964.430282,
    Morphine: 4047824.25,
    Oxycodone: 11899026.09,
    Methadone: 3653913.96,
    Fentanyl: 77897.11,
    Codeine: 3949389.18,
    Cocaine: 6257.1002,
    Cannabicyclol: 0
  },
  {
    date: "2017-10",
    Amphetamine: 5384712.93,
    Oxymorphone: 182655.050073,
    PowderedOpium: 8466.400168,
    Morphine: 3925663.66,
    Oxycodone: 11681682.22,
    Methadone: 3698180.79,
    Fentanyl: 76065.25,
    Codeine: 3910813.8,
    Cocaine: 6705.980308,
    Cannabicyclol: 0
  }
];

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

class Healthcare extends React.Component {
  constructor(props) {
    super(props);
    let dates = [];
    let noData = [];
    var amphetamines = [];
    var oxymorphone = [];
    var powderopium = [];
    var morphine = [];
    var oxycodine = [];
    var methadone = [];
    var fentanyl = [];
    var codine = [];
    var cocaine = [];
    var cannabicyclol = [];
    pharmacy.forEach((x) => {
      const date = new Date(x.date + "-01").getTime();
      dates.push(date);
      noData.push([date, 0]);
      amphetamines.push([date, x.Amphetamine]);
      oxymorphone.push([date, x.Oxymorphone]);
      powderopium.push([date, x.PowderedOpium]);
      morphine.push([date, x.Morphine]);
      oxycodine.push([date, x.Oxycodone]);
      methadone.push([date, x.Methadone]);
      fentanyl.push([date, x.Fentanyl]);
      codine.push([date, x.Codeine]);
      cocaine.push([date, x.Cocaine]);
      cannabicyclol.push([date, x.Cannabicyclol]);
    });
    const num = (a) => a.map((x) => x[1]);
    const all = [
      ...num(amphetamines),
      ...num(oxymorphone),
      ...num(powderopium),
      ...num(morphine),
      ...num(oxycodine),
      ...num(methadone),
      ...num(fentanyl),
      ...num(codine),
      ...num(cocaine),
      ...num(cannabicyclol)
    ];
    var lowDate = Math.min(...dates);
    var highDate = Math.max(...dates);
    var highdruguse = Math.max(...all);
    var lowdruguse = Math.min(...all);
    noData.sort((a, b) => a[0] - b[0]);
    var state = {
      amphetamines,
      oxymorphone,
      powderopium,
      morphine,
      oxycodine,
      methadone,
      fentanyl,
      codine,
      cocaine,
      cannabicyclol,
      lowdruguse,
      dates,
      noData,
      yAxis: highdruguse - lowdruguse,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      highdruguse
    };
    this.state = state;
  }

  render() {
    const linecss = {
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "scale(1,-1)"
    };
    const drugs = [
      "amphetamines",
      "oxymorphone",
      "powderopium",
      "morphine",
      "oxycodine",
      "methadone",
      "fentanyl",
      "codine",
      "cocaine",
      "cannabicyclol"
    ];
    const stroke = (a) => {
      var stroke = null;
      if (a === "amphetamines") {
        stroke = "purple";
      } else if (a === "oxymorphone") {
        stroke = "orange";
      } else if (a === "powderopium") {
        stroke = "red";
      } else if (a === "morphine") {
        stroke = "pink";
      } else if (a === "oxycodine") {
        stroke = "gold";
      } else if (a === "methadone") {
        stroke = "brown";
      } else if (a === "fentanyl") {
        stroke = "teal";
      } else if (a === "codine") {
        stroke = "blue";
      } else if (a === "cocaine") {
        stroke = "black";
      } else if (a === "cannabicyclol") {
        stroke = "green";
      }
      return stroke;
    };
    return (
      <div
        style={{
          position: "relative",
          left: "0px",
          width: "100%"
        }}
      >
        <div
          style={{
            left: "0px",
            maxWidth: "50%",
            top: "0px",
            height: "min-content",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            zIndex: "9",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          <a href="https://vau.money/login">2006-2017</a>
        </div>
        <div
          style={{
            right: "0px",
            maxWidth: "50%",
            top: "0px",
            height: "min-content",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            zIndex: "9",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          highest retail scripts -&nbsp;
          <div
            style={{
              top: "0px",
              height: "min-content",
              display: "flex",
              position: "relative",
              right: "0px"
            }}
          >
            {shortNumber(this.state.highdruguse)}
          </div>
        </div>
        <div style={{ height: "200px" }}>
          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {this.state.noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={
                      ((x - this.state.lowDate) / this.state.xAxis) *
                      this.props.width *
                      0.9
                    }
                    y={
                      ((y - this.state.lowdruguse) / this.state.highdruguse) *
                      150
                    }
                    width={1}
                    height={1}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
          </svg>

          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {drugs.map((a) =>
              this.state[a].map(([x, y], i) => {
                return (
                  <rect
                    x={
                      ((x - this.state.lowDate) / this.state.xAxis) *
                      this.props.width *
                      0.9
                    }
                    y={
                      ((y - this.state.lowdruguse) / this.state.highdruguse) *
                      150
                    }
                    width={3}
                    height={3}
                    stroke={stroke(a)}
                    fill="transparent"
                    strokeWidth={2}
                    key={a + i}
                  />
                );
              })
            )}
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {drugs.map((x) => {
            return (
              <div key={x} style={{ padding: "4px 10px", color: stroke(x) }}>
                {x}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Healthcare;
