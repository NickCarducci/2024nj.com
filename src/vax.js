import React from "react";
import { usmortality, worldwide, yearly, worldwidepopdata } from "./vaxdata";

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
const popdata = [
  {
    year: 1790,
    pop: 3929214
  },
  {
    year: 1800,
    pop: 5308483
  },
  {
    year: 1810,
    pop: 7239881
  },
  {
    year: 1820,
    pop: 9638453
  },
  {
    year: 1830,
    pop: 12860702
  },
  {
    year: 1840,
    pop: 17063353
  },
  {
    year: 1850,
    pop: 23191876
  },
  {
    year: 1860,
    pop: 31443321
  },
  {
    year: 1870,
    pop: 38558371
  },
  {
    year: 1880,
    pop: 50189209
  },
  {
    year: 1890,
    pop: 62979766
  },
  {
    year: 1900,
    pop: 76212168
  },
  {
    year: 1910,
    pop: 92228496
  },
  {
    year: 1920,
    pop: 106021537
  },
  {
    year: 1930,
    pop: 123202624
  },
  {
    year: 1940,
    pop: 142164569
  },
  {
    year: 1950,
    pop: 161325798
  },
  {
    year: 1960,
    pop: 189323175
  },
  {
    year: 1970,
    pop: 213302031
  },
  {
    year: 1980,
    pop: 236542199
  },
  {
    year: 1990,
    pop: 258709873
  },
  {
    year: 2000,
    pop: 291421906
  },
  {
    year: 2010,
    pop: 308745538
  },
  {
    year: 2020,
    pop: 333005258
  },
  {
    year: 2030,
    pop: 349655258
  },
  {
    year: 2040,
    pop: 366305258
  }
];
const ushosp = [
  /*{
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 40,
    "AGE 0-4": 179,
    "AGE 25-49": "X",
    "AGE 25-64": "157",
    "AGE 5-24": 205,
    "AGE 50-64": "X",
    "AGE 65": 29,
    ILITOTAL: 570,
    "TOTAL PATIENTS": 46842
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 41,
    "AGE 0-4": 199,
    "AGE 25-49": "X",
    "AGE 25-64": "151",
    "AGE 5-24": 242,
    "AGE 50-64": "X",
    "AGE 65": 23,
    ILITOTAL: 615,
    "TOTAL PATIENTS": 48023
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 42,
    "AGE 0-4": 228,
    "AGE 25-49": "X",
    "AGE 25-64": "153",
    "AGE 5-24": 266,
    "AGE 50-64": "X",
    "AGE 65": 34,
    ILITOTAL: 681,
    "TOTAL PATIENTS": 54961
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 43,
    "AGE 0-4": 188,
    "AGE 25-49": "X",
    "AGE 25-64": "193",
    "AGE 5-24": 236,
    "AGE 50-64": "X",
    "AGE 65": 36,
    ILITOTAL: 653,
    "TOTAL PATIENTS": 57044
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 44,
    "AGE 0-4": 217,
    "AGE 25-49": "X",
    "AGE 25-64": "162",
    "AGE 5-24": 280,
    "AGE 50-64": "X",
    "AGE 65": 41,
    ILITOTAL: 700,
    "TOTAL PATIENTS": 55506
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 45,
    "AGE 0-4": 178,
    "AGE 25-49": "X",
    "AGE 25-64": "148",
    "AGE 5-24": 281,
    "AGE 50-64": "X",
    "AGE 65": 48,
    ILITOTAL: 655,
    "TOTAL PATIENTS": 51062
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 46,
    "AGE 0-4": 294,
    "AGE 25-49": "X",
    "AGE 25-64": "240",
    "AGE 5-24": 328,
    "AGE 50-64": "X",
    "AGE 65": 70,
    ILITOTAL: 932,
    "TOTAL PATIENTS": 64463
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 47,
    "AGE 0-4": 288,
    "AGE 25-49": "X",
    "AGE 25-64": "293",
    "AGE 5-24": 456,
    "AGE 50-64": "X",
    "AGE 65": 63,
    ILITOTAL: 1100,
    "TOTAL PATIENTS": 66749
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 48,
    "AGE 0-4": 268,
    "AGE 25-49": "X",
    "AGE 25-64": "206",
    "AGE 5-24": 343,
    "AGE 50-64": "X",
    "AGE 65": 69,
    ILITOTAL: 886,
    "TOTAL PATIENTS": 52890
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 49,
    "AGE 0-4": 299,
    "AGE 25-49": "X",
    "AGE 25-64": "282",
    "AGE 5-24": 415,
    "AGE 50-64": "X",
    "AGE 65": 102,
    ILITOTAL: 1098,
    "TOTAL PATIENTS": 67887
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 50,
    "AGE 0-4": 346,
    "AGE 25-49": "X",
    "AGE 25-64": "268",
    "AGE 5-24": 388,
    "AGE 50-64": "X",
    "AGE 65": 81,
    ILITOTAL: 1083,
    "TOTAL PATIENTS": 61314
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 51,
    "AGE 0-4": 348,
    "AGE 25-49": "X",
    "AGE 25-64": "235",
    "AGE 5-24": 362,
    "AGE 50-64": "X",
    "AGE 65": 59,
    ILITOTAL: 1004,
    "TOTAL PATIENTS": 47719
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 52,
    "AGE 0-4": 510,
    "AGE 25-49": "X",
    "AGE 25-64": "404",
    "AGE 5-24": 492,
    "AGE 50-64": "X",
    "AGE 65": 113,
    ILITOTAL: 1519,
    "TOTAL PATIENTS": 48429
  },
  {
    "REGION TYPE": "National",
    YEAR: 1997,
    WEEK: 53,
    "AGE 0-4": 579,
    "AGE 25-49": "X",
    "AGE 25-64": "584",
    "AGE 5-24": 576,
    "AGE 50-64": "X",
    "AGE 65": 207,
    ILITOTAL: 1946,
    "TOTAL PATIENTS": 52333
  },*/
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 1,
    "AGE 0-4": 639,
    "AGE 25-49": "X",
    "AGE 25-64": "759",
    "AGE 5-24": 810,
    "AGE 50-64": "X",
    "AGE 65": 207,
    ILITOTAL: 2415,
    "TOTAL PATIENTS": 67228
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 2,
    "AGE 0-4": 690,
    "AGE 25-49": "X",
    "AGE 25-64": "654",
    "AGE 5-24": 1121,
    "AGE 50-64": "X",
    "AGE 65": 148,
    ILITOTAL: 2613,
    "TOTAL PATIENTS": 70828
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 3,
    "AGE 0-4": 856,
    "AGE 25-49": "X",
    "AGE 25-64": "679",
    "AGE 5-24": 1440,
    "AGE 50-64": "X",
    "AGE 65": 151,
    ILITOTAL: 3126,
    "TOTAL PATIENTS": 67898
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 4,
    "AGE 0-4": 824,
    "AGE 25-49": "X",
    "AGE 25-64": "817",
    "AGE 5-24": 1600,
    "AGE 50-64": "X",
    "AGE 65": 196,
    ILITOTAL: 3437,
    "TOTAL PATIENTS": 69999
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 5,
    "AGE 0-4": 881,
    "AGE 25-49": "X",
    "AGE 25-64": "769",
    "AGE 5-24": 1471,
    "AGE 50-64": "X",
    "AGE 65": 233,
    ILITOTAL: 3354,
    "TOTAL PATIENTS": 69486
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 6,
    "AGE 0-4": 699,
    "AGE 25-49": "X",
    "AGE 25-64": "671",
    "AGE 5-24": 1101,
    "AGE 50-64": "X",
    "AGE 65": 146,
    ILITOTAL: 2617,
    "TOTAL PATIENTS": 66322
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 7,
    "AGE 0-4": 457,
    "AGE 25-49": "X",
    "AGE 25-64": "523",
    "AGE 5-24": 849,
    "AGE 50-64": "X",
    "AGE 65": 119,
    ILITOTAL: 1948,
    "TOTAL PATIENTS": 62675
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 8,
    "AGE 0-4": 313,
    "AGE 25-49": "X",
    "AGE 25-64": "330",
    "AGE 5-24": 534,
    "AGE 50-64": "X",
    "AGE 65": 112,
    ILITOTAL: 1289,
    "TOTAL PATIENTS": 60247
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 9,
    "AGE 0-4": 241,
    "AGE 25-49": "X",
    "AGE 25-64": "214",
    "AGE 5-24": 308,
    "AGE 50-64": "X",
    "AGE 65": 64,
    ILITOTAL: 827,
    "TOTAL PATIENTS": 57449
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 10,
    "AGE 0-4": 201,
    "AGE 25-49": "X",
    "AGE 25-64": "183",
    "AGE 5-24": 305,
    "AGE 50-64": "X",
    "AGE 65": 59,
    ILITOTAL: 748,
    "TOTAL PATIENTS": 50582
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 11,
    "AGE 0-4": 162,
    "AGE 25-49": "X",
    "AGE 25-64": "123",
    "AGE 5-24": 249,
    "AGE 50-64": "X",
    "AGE 65": 51,
    ILITOTAL: 585,
    "TOTAL PATIENTS": 53889
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 12,
    "AGE 0-4": 156,
    "AGE 25-49": "X",
    "AGE 25-64": "93",
    "AGE 5-24": 196,
    "AGE 50-64": "X",
    "AGE 65": 41,
    ILITOTAL: 486,
    "TOTAL PATIENTS": 48699
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 13,
    "AGE 0-4": 90,
    "AGE 25-49": "X",
    "AGE 25-64": "92",
    "AGE 5-24": 144,
    "AGE 50-64": "X",
    "AGE 65": 32,
    ILITOTAL: 358,
    "TOTAL PATIENTS": 48105
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 14,
    "AGE 0-4": 82,
    "AGE 25-49": "X",
    "AGE 25-64": "93",
    "AGE 5-24": 152,
    "AGE 50-64": "X",
    "AGE 65": 41,
    ILITOTAL: 368,
    "TOTAL PATIENTS": 42959
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 15,
    "AGE 0-4": 64,
    "AGE 25-49": "X",
    "AGE 25-64": "73",
    "AGE 5-24": 106,
    "AGE 50-64": "X",
    "AGE 65": 19,
    ILITOTAL: 262,
    "TOTAL PATIENTS": 42140
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 16,
    "AGE 0-4": 82,
    "AGE 25-49": "X",
    "AGE 25-64": "68",
    "AGE 5-24": 100,
    "AGE 50-64": "X",
    "AGE 65": 15,
    ILITOTAL: 265,
    "TOTAL PATIENTS": 39496
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 17,
    "AGE 0-4": 58,
    "AGE 25-49": "X",
    "AGE 25-64": "61",
    "AGE 5-24": 120,
    "AGE 50-64": "X",
    "AGE 65": 27,
    ILITOTAL: 266,
    "TOTAL PATIENTS": 38324
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 18,
    "AGE 0-4": 39,
    "AGE 25-49": "X",
    "AGE 25-64": "64",
    "AGE 5-24": 93,
    "AGE 50-64": "X",
    "AGE 65": 13,
    ILITOTAL: 209,
    "TOTAL PATIENTS": 35821
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 19,
    "AGE 0-4": 79,
    "AGE 25-49": "X",
    "AGE 25-64": "37",
    "AGE 5-24": 61,
    "AGE 50-64": "X",
    "AGE 65": 9,
    ILITOTAL: 186,
    "TOTAL PATIENTS": 32200
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 20,
    "AGE 0-4": 54,
    "AGE 25-49": "X",
    "AGE 25-64": "40",
    "AGE 5-24": 52,
    "AGE 50-64": "X",
    "AGE 65": 19,
    ILITOTAL: 165,
    "TOTAL PATIENTS": 27263
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 21,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 22,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 23,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 24,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 25,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 26,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 27,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 28,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 29,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 30,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 31,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 32,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 33,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 34,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 35,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 36,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 37,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 38,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 39,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 40,
    "AGE 0-4": 115,
    "AGE 25-49": "X",
    "AGE 25-64": "139",
    "AGE 5-24": 210,
    "AGE 50-64": "X",
    "AGE 65": 26,
    ILITOTAL: 490,
    "TOTAL PATIENTS": 70272
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 41,
    "AGE 0-4": 133,
    "AGE 25-49": "X",
    "AGE 25-64": "174",
    "AGE 5-24": 262,
    "AGE 50-64": "X",
    "AGE 65": 36,
    ILITOTAL: 605,
    "TOTAL PATIENTS": 77092
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 42,
    "AGE 0-4": 217,
    "AGE 25-49": "X",
    "AGE 25-64": "225",
    "AGE 5-24": 287,
    "AGE 50-64": "X",
    "AGE 65": 54,
    ILITOTAL: 783,
    "TOTAL PATIENTS": 86720
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 43,
    "AGE 0-4": 278,
    "AGE 25-49": "X",
    "AGE 25-64": "226",
    "AGE 5-24": 530,
    "AGE 50-64": "X",
    "AGE 65": 52,
    ILITOTAL: 1086,
    "TOTAL PATIENTS": 95437
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 44,
    "AGE 0-4": 298,
    "AGE 25-49": "X",
    "AGE 25-64": "262",
    "AGE 5-24": 414,
    "AGE 50-64": "X",
    "AGE 65": 60,
    ILITOTAL: 1034,
    "TOTAL PATIENTS": 101821
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 45,
    "AGE 0-4": 258,
    "AGE 25-49": "X",
    "AGE 25-64": "292",
    "AGE 5-24": 402,
    "AGE 50-64": "X",
    "AGE 65": 70,
    ILITOTAL: 1022,
    "TOTAL PATIENTS": 102108
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 46,
    "AGE 0-4": 355,
    "AGE 25-49": "X",
    "AGE 25-64": "281",
    "AGE 5-24": 478,
    "AGE 50-64": "X",
    "AGE 65": 64,
    ILITOTAL: 1178,
    "TOTAL PATIENTS": 103429
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 47,
    "AGE 0-4": 291,
    "AGE 25-49": "X",
    "AGE 25-64": "322",
    "AGE 5-24": 512,
    "AGE 50-64": "X",
    "AGE 65": 83,
    ILITOTAL: 1208,
    "TOTAL PATIENTS": 83346
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 48,
    "AGE 0-4": 319,
    "AGE 25-49": "X",
    "AGE 25-64": "310",
    "AGE 5-24": 453,
    "AGE 50-64": "X",
    "AGE 65": 94,
    ILITOTAL: 1176,
    "TOTAL PATIENTS": 103241
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 49,
    "AGE 0-4": 353,
    "AGE 25-49": "X",
    "AGE 25-64": "303",
    "AGE 5-24": 461,
    "AGE 50-64": "X",
    "AGE 65": 85,
    ILITOTAL: 1202,
    "TOTAL PATIENTS": 103600
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 50,
    "AGE 0-4": 312,
    "AGE 25-49": "X",
    "AGE 25-64": "320",
    "AGE 5-24": 426,
    "AGE 50-64": "X",
    "AGE 65": 83,
    ILITOTAL: 1141,
    "TOTAL PATIENTS": 97416
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 51,
    "AGE 0-4": 335,
    "AGE 25-49": "X",
    "AGE 25-64": "296",
    "AGE 5-24": 359,
    "AGE 50-64": "X",
    "AGE 65": 74,
    ILITOTAL: 1064,
    "TOTAL PATIENTS": 71380
  },
  {
    "REGION TYPE": "National",
    YEAR: 1998,
    WEEK: 52,
    "AGE 0-4": 418,
    "AGE 25-49": "X",
    "AGE 25-64": "466",
    "AGE 5-24": 377,
    "AGE 50-64": "X",
    "AGE 65": 162,
    ILITOTAL: 1423,
    "TOTAL PATIENTS": 77216
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 1,
    "AGE 0-4": 439,
    "AGE 25-49": "X",
    "AGE 25-64": "659",
    "AGE 5-24": 548,
    "AGE 50-64": "X",
    "AGE 65": 134,
    ILITOTAL: 1780,
    "TOTAL PATIENTS": 97593
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 2,
    "AGE 0-4": 431,
    "AGE 25-49": "X",
    "AGE 25-64": "962",
    "AGE 5-24": 874,
    "AGE 50-64": "X",
    "AGE 65": 140,
    ILITOTAL: 2407,
    "TOTAL PATIENTS": 94632
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 3,
    "AGE 0-4": 801,
    "AGE 25-49": "X",
    "AGE 25-64": "1168",
    "AGE 5-24": 1689,
    "AGE 50-64": "X",
    "AGE 65": 206,
    ILITOTAL: 3864,
    "TOTAL PATIENTS": 106864
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 4,
    "AGE 0-4": 755,
    "AGE 25-49": "X",
    "AGE 25-64": "1419",
    "AGE 5-24": 2185,
    "AGE 50-64": "X",
    "AGE 65": 186,
    ILITOTAL: 4545,
    "TOTAL PATIENTS": 111421
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 5,
    "AGE 0-4": 970,
    "AGE 25-49": "X",
    "AGE 25-64": "1562",
    "AGE 5-24": 2919,
    "AGE 50-64": "X",
    "AGE 65": 219,
    ILITOTAL: 5670,
    "TOTAL PATIENTS": 111667
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 6,
    "AGE 0-4": 1029,
    "AGE 25-49": "X",
    "AGE 25-64": "1591",
    "AGE 5-24": 2911,
    "AGE 50-64": "X",
    "AGE 65": 237,
    ILITOTAL: 5768,
    "TOTAL PATIENTS": 114244
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 7,
    "AGE 0-4": 822,
    "AGE 25-49": "X",
    "AGE 25-64": "1599",
    "AGE 5-24": 2275,
    "AGE 50-64": "X",
    "AGE 65": 224,
    ILITOTAL: 4920,
    "TOTAL PATIENTS": 104830
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 8,
    "AGE 0-4": 800,
    "AGE 25-49": "X",
    "AGE 25-64": "1520",
    "AGE 5-24": 1932,
    "AGE 50-64": "X",
    "AGE 65": 234,
    ILITOTAL: 4486,
    "TOTAL PATIENTS": 105946
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 9,
    "AGE 0-4": 769,
    "AGE 25-49": "X",
    "AGE 25-64": "1357",
    "AGE 5-24": 1543,
    "AGE 50-64": "X",
    "AGE 65": 241,
    ILITOTAL: 3910,
    "TOTAL PATIENTS": 97176
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 10,
    "AGE 0-4": 539,
    "AGE 25-49": "X",
    "AGE 25-64": "1041",
    "AGE 5-24": 1140,
    "AGE 50-64": "X",
    "AGE 65": 202,
    ILITOTAL: 2922,
    "TOTAL PATIENTS": 97612
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 11,
    "AGE 0-4": 458,
    "AGE 25-49": "X",
    "AGE 25-64": "704",
    "AGE 5-24": 778,
    "AGE 50-64": "X",
    "AGE 65": 130,
    ILITOTAL: 2070,
    "TOTAL PATIENTS": 87063
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 12,
    "AGE 0-4": 378,
    "AGE 25-49": "X",
    "AGE 25-64": "548",
    "AGE 5-24": 641,
    "AGE 50-64": "X",
    "AGE 65": 129,
    ILITOTAL: 1696,
    "TOTAL PATIENTS": 84079
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 13,
    "AGE 0-4": 243,
    "AGE 25-49": "X",
    "AGE 25-64": "382",
    "AGE 5-24": 397,
    "AGE 50-64": "X",
    "AGE 65": 69,
    ILITOTAL: 1091,
    "TOTAL PATIENTS": 79237
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 14,
    "AGE 0-4": 127,
    "AGE 25-49": "X",
    "AGE 25-64": "202",
    "AGE 5-24": 265,
    "AGE 50-64": "X",
    "AGE 65": 38,
    ILITOTAL: 632,
    "TOTAL PATIENTS": 71588
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 15,
    "AGE 0-4": 102,
    "AGE 25-49": "X",
    "AGE 25-64": "102",
    "AGE 5-24": 175,
    "AGE 50-64": "X",
    "AGE 65": 17,
    ILITOTAL: 396,
    "TOTAL PATIENTS": 64515
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 16,
    "AGE 0-4": 59,
    "AGE 25-49": "X",
    "AGE 25-64": "66",
    "AGE 5-24": 133,
    "AGE 50-64": "X",
    "AGE 65": 13,
    ILITOTAL: 271,
    "TOTAL PATIENTS": 64253
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 17,
    "AGE 0-4": 111,
    "AGE 25-49": "X",
    "AGE 25-64": "118",
    "AGE 5-24": 150,
    "AGE 50-64": "X",
    "AGE 65": 20,
    ILITOTAL: 399,
    "TOTAL PATIENTS": 64824
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 18,
    "AGE 0-4": 35,
    "AGE 25-49": "X",
    "AGE 25-64": "50",
    "AGE 5-24": 84,
    "AGE 50-64": "X",
    "AGE 65": 11,
    ILITOTAL: 180,
    "TOTAL PATIENTS": 59546
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 19,
    "AGE 0-4": 102,
    "AGE 25-49": "X",
    "AGE 25-64": "88",
    "AGE 5-24": 86,
    "AGE 50-64": "X",
    "AGE 65": 16,
    ILITOTAL: 292,
    "TOTAL PATIENTS": 55872
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 20,
    "AGE 0-4": 100,
    "AGE 25-49": "X",
    "AGE 25-64": "68",
    "AGE 5-24": 100,
    "AGE 50-64": "X",
    "AGE 65": 15,
    ILITOTAL: 283,
    "TOTAL PATIENTS": 53444
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 21,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 22,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 23,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 24,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 25,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 26,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 27,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 28,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 29,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 30,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 31,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 32,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 33,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 34,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 35,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 36,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 37,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 38,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 39,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 40,
    "AGE 0-4": 264,
    "AGE 25-49": "X",
    "AGE 25-64": "228",
    "AGE 5-24": 273,
    "AGE 50-64": "X",
    "AGE 65": 26,
    ILITOTAL: 791,
    "TOTAL PATIENTS": 80941
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 41,
    "AGE 0-4": 292,
    "AGE 25-49": "X",
    "AGE 25-64": "297",
    "AGE 5-24": 351,
    "AGE 50-64": "X",
    "AGE 65": 57,
    ILITOTAL: 997,
    "TOTAL PATIENTS": 93434
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 42,
    "AGE 0-4": 346,
    "AGE 25-49": "X",
    "AGE 25-64": "293",
    "AGE 5-24": 371,
    "AGE 50-64": "X",
    "AGE 65": 57,
    ILITOTAL: 1067,
    "TOTAL PATIENTS": 113187
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 43,
    "AGE 0-4": 371,
    "AGE 25-49": "X",
    "AGE 25-64": "289",
    "AGE 5-24": 367,
    "AGE 50-64": "X",
    "AGE 65": 62,
    ILITOTAL: 1089,
    "TOTAL PATIENTS": 107163
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 44,
    "AGE 0-4": 438,
    "AGE 25-49": "X",
    "AGE 25-64": "434",
    "AGE 5-24": 607,
    "AGE 50-64": "X",
    "AGE 65": 91,
    ILITOTAL: 1570,
    "TOTAL PATIENTS": 131448
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 45,
    "AGE 0-4": 473,
    "AGE 25-49": "X",
    "AGE 25-64": "461",
    "AGE 5-24": 535,
    "AGE 50-64": "X",
    "AGE 65": 101,
    ILITOTAL: 1570,
    "TOTAL PATIENTS": 126461
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 46,
    "AGE 0-4": 443,
    "AGE 25-49": "X",
    "AGE 25-64": "544",
    "AGE 5-24": 622,
    "AGE 50-64": "X",
    "AGE 65": 92,
    ILITOTAL: 1701,
    "TOTAL PATIENTS": 132304
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 47,
    "AGE 0-4": 483,
    "AGE 25-49": "X",
    "AGE 25-64": "714",
    "AGE 5-24": 504,
    "AGE 50-64": "X",
    "AGE 65": 132,
    ILITOTAL: 1833,
    "TOTAL PATIENTS": 108377
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 48,
    "AGE 0-4": 518,
    "AGE 25-49": "X",
    "AGE 25-64": "994",
    "AGE 5-24": 835,
    "AGE 50-64": "X",
    "AGE 65": 137,
    ILITOTAL: 2484,
    "TOTAL PATIENTS": 142980
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 49,
    "AGE 0-4": 643,
    "AGE 25-49": "X",
    "AGE 25-64": "1316",
    "AGE 5-24": 1124,
    "AGE 50-64": "X",
    "AGE 65": 181,
    ILITOTAL: 3264,
    "TOTAL PATIENTS": 139657
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 50,
    "AGE 0-4": 828,
    "AGE 25-49": "X",
    "AGE 25-64": "1676",
    "AGE 5-24": 1405,
    "AGE 50-64": "X",
    "AGE 65": 299,
    ILITOTAL: 4208,
    "TOTAL PATIENTS": 143607
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 51,
    "AGE 0-4": 1130,
    "AGE 25-49": "X",
    "AGE 25-64": "2189",
    "AGE 5-24": 1399,
    "AGE 50-64": "X",
    "AGE 65": 450,
    ILITOTAL: 5168,
    "TOTAL PATIENTS": 116927
  },
  {
    "REGION TYPE": "National",
    YEAR: 1999,
    WEEK: 52,
    "AGE 0-4": 1339,
    "AGE 25-49": "X",
    "AGE 25-64": "3146",
    "AGE 5-24": 1697,
    "AGE 50-64": "X",
    "AGE 65": 664,
    ILITOTAL: 6846,
    "TOTAL PATIENTS": 121233
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 1,
    "AGE 0-4": 1314,
    "AGE 25-49": "X",
    "AGE 25-64": "3250",
    "AGE 5-24": 2043,
    "AGE 50-64": "X",
    "AGE 65": 665,
    ILITOTAL: 7272,
    "TOTAL PATIENTS": 141197
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 2,
    "AGE 0-4": 1011,
    "AGE 25-49": "X",
    "AGE 25-64": "2251",
    "AGE 5-24": 1746,
    "AGE 50-64": "X",
    "AGE 65": 462,
    ILITOTAL: 5470,
    "TOTAL PATIENTS": 140143
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 3,
    "AGE 0-4": 851,
    "AGE 25-49": "X",
    "AGE 25-64": "1357",
    "AGE 5-24": 1334,
    "AGE 50-64": "X",
    "AGE 65": 315,
    ILITOTAL: 3857,
    "TOTAL PATIENTS": 132462
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 4,
    "AGE 0-4": 722,
    "AGE 25-49": "X",
    "AGE 25-64": "962",
    "AGE 5-24": 1048,
    "AGE 50-64": "X",
    "AGE 65": 169,
    ILITOTAL: 2901,
    "TOTAL PATIENTS": 134511
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 5,
    "AGE 0-4": 633,
    "AGE 25-49": "X",
    "AGE 25-64": "786",
    "AGE 5-24": 914,
    "AGE 50-64": "X",
    "AGE 65": 145,
    ILITOTAL: 2478,
    "TOTAL PATIENTS": 136683
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 6,
    "AGE 0-4": 599,
    "AGE 25-49": "X",
    "AGE 25-64": "646",
    "AGE 5-24": 862,
    "AGE 50-64": "X",
    "AGE 65": 116,
    ILITOTAL: 2223,
    "TOTAL PATIENTS": 137511
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 7,
    "AGE 0-4": 539,
    "AGE 25-49": "X",
    "AGE 25-64": "447",
    "AGE 5-24": 610,
    "AGE 50-64": "X",
    "AGE 65": 72,
    ILITOTAL: 1668,
    "TOTAL PATIENTS": 131648
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 8,
    "AGE 0-4": 452,
    "AGE 25-49": "X",
    "AGE 25-64": "328",
    "AGE 5-24": 481,
    "AGE 50-64": "X",
    "AGE 65": 64,
    ILITOTAL: 1325,
    "TOTAL PATIENTS": 116119
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 9,
    "AGE 0-4": 499,
    "AGE 25-49": "X",
    "AGE 25-64": "360",
    "AGE 5-24": 477,
    "AGE 50-64": "X",
    "AGE 65": 49,
    ILITOTAL: 1385,
    "TOTAL PATIENTS": 112138
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 10,
    "AGE 0-4": 381,
    "AGE 25-49": "X",
    "AGE 25-64": "256",
    "AGE 5-24": 394,
    "AGE 50-64": "X",
    "AGE 65": 57,
    ILITOTAL: 1088,
    "TOTAL PATIENTS": 106737
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 11,
    "AGE 0-4": 342,
    "AGE 25-49": "X",
    "AGE 25-64": "206",
    "AGE 5-24": 342,
    "AGE 50-64": "X",
    "AGE 65": 44,
    ILITOTAL: 934,
    "TOTAL PATIENTS": 100814
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 12,
    "AGE 0-4": 305,
    "AGE 25-49": "X",
    "AGE 25-64": "229",
    "AGE 5-24": 346,
    "AGE 50-64": "X",
    "AGE 65": 37,
    ILITOTAL: 917,
    "TOTAL PATIENTS": 100658
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 13,
    "AGE 0-4": 282,
    "AGE 25-49": "X",
    "AGE 25-64": "206",
    "AGE 5-24": 320,
    "AGE 50-64": "X",
    "AGE 65": 29,
    ILITOTAL: 837,
    "TOTAL PATIENTS": 101612
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 14,
    "AGE 0-4": 186,
    "AGE 25-49": "X",
    "AGE 25-64": "171",
    "AGE 5-24": 286,
    "AGE 50-64": "X",
    "AGE 65": 23,
    ILITOTAL: 666,
    "TOTAL PATIENTS": 91806
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 15,
    "AGE 0-4": 178,
    "AGE 25-49": "X",
    "AGE 25-64": "127",
    "AGE 5-24": 196,
    "AGE 50-64": "X",
    "AGE 65": 21,
    ILITOTAL: 522,
    "TOTAL PATIENTS": 90035
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 16,
    "AGE 0-4": 107,
    "AGE 25-49": "X",
    "AGE 25-64": "96",
    "AGE 5-24": 120,
    "AGE 50-64": "X",
    "AGE 65": 24,
    ILITOTAL: 347,
    "TOTAL PATIENTS": 76910
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 17,
    "AGE 0-4": 112,
    "AGE 25-49": "X",
    "AGE 25-64": "80",
    "AGE 5-24": 141,
    "AGE 50-64": "X",
    "AGE 65": 14,
    ILITOTAL: 347,
    "TOTAL PATIENTS": 79100
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 18,
    "AGE 0-4": 93,
    "AGE 25-49": "X",
    "AGE 25-64": "77",
    "AGE 5-24": 147,
    "AGE 50-64": "X",
    "AGE 65": 7,
    ILITOTAL: 324,
    "TOTAL PATIENTS": 73550
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 19,
    "AGE 0-4": 67,
    "AGE 25-49": "X",
    "AGE 25-64": "77",
    "AGE 5-24": 85,
    "AGE 50-64": "X",
    "AGE 65": 10,
    ILITOTAL: 239,
    "TOTAL PATIENTS": 67962
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 20,
    "AGE 0-4": 79,
    "AGE 25-49": "X",
    "AGE 25-64": "64",
    "AGE 5-24": 65,
    "AGE 50-64": "X",
    "AGE 65": 11,
    ILITOTAL: 219,
    "TOTAL PATIENTS": 59761
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 21,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 22,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 23,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 24,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 25,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 26,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 27,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 28,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 29,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 30,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 31,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 32,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 33,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 34,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 35,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 36,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 37,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 38,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 39,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 40,
    "AGE 0-4": 206,
    "AGE 25-49": "X",
    "AGE 25-64": "322",
    "AGE 5-24": 443,
    "AGE 50-64": "X",
    "AGE 65": 70,
    ILITOTAL: 1041,
    "TOTAL PATIENTS": 84727
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 41,
    "AGE 0-4": 270,
    "AGE 25-49": "X",
    "AGE 25-64": "389",
    "AGE 5-24": 489,
    "AGE 50-64": "X",
    "AGE 65": 86,
    ILITOTAL: 1234,
    "TOTAL PATIENTS": 116917
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 42,
    "AGE 0-4": 390,
    "AGE 25-49": "X",
    "AGE 25-64": "458",
    "AGE 5-24": 617,
    "AGE 50-64": "X",
    "AGE 65": 96,
    ILITOTAL: 1561,
    "TOTAL PATIENTS": 134587
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 43,
    "AGE 0-4": 411,
    "AGE 25-49": "X",
    "AGE 25-64": "564",
    "AGE 5-24": 683,
    "AGE 50-64": "X",
    "AGE 65": 123,
    ILITOTAL: 1781,
    "TOTAL PATIENTS": 145165
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 44,
    "AGE 0-4": 465,
    "AGE 25-49": "X",
    "AGE 25-64": "564",
    "AGE 5-24": 703,
    "AGE 50-64": "X",
    "AGE 65": 138,
    ILITOTAL: 1870,
    "TOTAL PATIENTS": 150676
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 45,
    "AGE 0-4": 564,
    "AGE 25-49": "X",
    "AGE 25-64": "635",
    "AGE 5-24": 849,
    "AGE 50-64": "X",
    "AGE 65": 181,
    ILITOTAL: 2229,
    "TOTAL PATIENTS": 155700
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 46,
    "AGE 0-4": 572,
    "AGE 25-49": "X",
    "AGE 25-64": "736",
    "AGE 5-24": 979,
    "AGE 50-64": "X",
    "AGE 65": 162,
    ILITOTAL: 2449,
    "TOTAL PATIENTS": 163893
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 47,
    "AGE 0-4": 704,
    "AGE 25-49": "X",
    "AGE 25-64": "646",
    "AGE 5-24": 913,
    "AGE 50-64": "X",
    "AGE 65": 154,
    ILITOTAL: 2417,
    "TOTAL PATIENTS": 131168
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 48,
    "AGE 0-4": 673,
    "AGE 25-49": "X",
    "AGE 25-64": "900",
    "AGE 5-24": 1085,
    "AGE 50-64": "X",
    "AGE 65": 196,
    ILITOTAL: 2854,
    "TOTAL PATIENTS": 178641
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 49,
    "AGE 0-4": 710,
    "AGE 25-49": "X",
    "AGE 25-64": "916",
    "AGE 5-24": 1232,
    "AGE 50-64": "X",
    "AGE 65": 239,
    ILITOTAL: 3097,
    "TOTAL PATIENTS": 178529
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 50,
    "AGE 0-4": 677,
    "AGE 25-49": "X",
    "AGE 25-64": "1077",
    "AGE 5-24": 1455,
    "AGE 50-64": "X",
    "AGE 65": 185,
    ILITOTAL: 3394,
    "TOTAL PATIENTS": 165935
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 51,
    "AGE 0-4": 767,
    "AGE 25-49": "X",
    "AGE 25-64": "1052",
    "AGE 5-24": 1337,
    "AGE 50-64": "X",
    "AGE 65": 205,
    ILITOTAL: 3361,
    "TOTAL PATIENTS": 139431
  },
  {
    "REGION TYPE": "National",
    YEAR: 2000,
    WEEK: 52,
    "AGE 0-4": 1059,
    "AGE 25-49": "X",
    "AGE 25-64": "1496",
    "AGE 5-24": 1335,
    "AGE 50-64": "X",
    "AGE 65": 262,
    ILITOTAL: 4152,
    "TOTAL PATIENTS": 122719
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 1,
    "AGE 0-4": 1049,
    "AGE 25-49": "X",
    "AGE 25-64": "1855",
    "AGE 5-24": 1571,
    "AGE 50-64": "X",
    "AGE 65": 321,
    ILITOTAL: 4796,
    "TOTAL PATIENTS": 148538
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 2,
    "AGE 0-4": 1081,
    "AGE 25-49": "X",
    "AGE 25-64": "1722",
    "AGE 5-24": 2423,
    "AGE 50-64": "X",
    "AGE 65": 318,
    ILITOTAL: 5544,
    "TOTAL PATIENTS": 177720
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 3,
    "AGE 0-4": 1395,
    "AGE 25-49": "X",
    "AGE 25-64": "1806",
    "AGE 5-24": 3223,
    "AGE 50-64": "X",
    "AGE 65": 293,
    ILITOTAL: 6717,
    "TOTAL PATIENTS": 176566
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 4,
    "AGE 0-4": 1542,
    "AGE 25-49": "X",
    "AGE 25-64": "1991",
    "AGE 5-24": 4057,
    "AGE 50-64": "X",
    "AGE 65": 318,
    ILITOTAL: 7908,
    "TOTAL PATIENTS": 188879
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 5,
    "AGE 0-4": 1329,
    "AGE 25-49": "X",
    "AGE 25-64": "1958",
    "AGE 5-24": 3705,
    "AGE 50-64": "X",
    "AGE 65": 295,
    ILITOTAL: 7287,
    "TOTAL PATIENTS": 182792
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 6,
    "AGE 0-4": 1370,
    "AGE 25-49": "X",
    "AGE 25-64": "1731",
    "AGE 5-24": 3017,
    "AGE 50-64": "X",
    "AGE 65": 358,
    ILITOTAL: 6476,
    "TOTAL PATIENTS": 179586
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 7,
    "AGE 0-4": 1059,
    "AGE 25-49": "X",
    "AGE 25-64": "1393",
    "AGE 5-24": 2126,
    "AGE 50-64": "X",
    "AGE 65": 254,
    ILITOTAL: 4832,
    "TOTAL PATIENTS": 171948
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 8,
    "AGE 0-4": 834,
    "AGE 25-49": "X",
    "AGE 25-64": "1278",
    "AGE 5-24": 1566,
    "AGE 50-64": "X",
    "AGE 65": 245,
    ILITOTAL: 3923,
    "TOTAL PATIENTS": 162402
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 9,
    "AGE 0-4": 683,
    "AGE 25-49": "X",
    "AGE 25-64": "752",
    "AGE 5-24": 1008,
    "AGE 50-64": "X",
    "AGE 65": 163,
    ILITOTAL: 2606,
    "TOTAL PATIENTS": 150399
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 10,
    "AGE 0-4": 622,
    "AGE 25-49": "X",
    "AGE 25-64": "854",
    "AGE 5-24": 934,
    "AGE 50-64": "X",
    "AGE 65": 152,
    ILITOTAL: 2562,
    "TOTAL PATIENTS": 155916
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 11,
    "AGE 0-4": 524,
    "AGE 25-49": "X",
    "AGE 25-64": "522",
    "AGE 5-24": 762,
    "AGE 50-64": "X",
    "AGE 65": 135,
    ILITOTAL: 1943,
    "TOTAL PATIENTS": 143075
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 12,
    "AGE 0-4": 485,
    "AGE 25-49": "X",
    "AGE 25-64": "507",
    "AGE 5-24": 751,
    "AGE 50-64": "X",
    "AGE 65": 136,
    ILITOTAL: 1879,
    "TOTAL PATIENTS": 135154
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 13,
    "AGE 0-4": 465,
    "AGE 25-49": "X",
    "AGE 25-64": "419",
    "AGE 5-24": 575,
    "AGE 50-64": "X",
    "AGE 65": 131,
    ILITOTAL: 1590,
    "TOTAL PATIENTS": 129934
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 14,
    "AGE 0-4": 288,
    "AGE 25-49": "X",
    "AGE 25-64": "421",
    "AGE 5-24": 421,
    "AGE 50-64": "X",
    "AGE 65": 126,
    ILITOTAL: 1256,
    "TOTAL PATIENTS": 112235
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 15,
    "AGE 0-4": 219,
    "AGE 25-49": "X",
    "AGE 25-64": "305",
    "AGE 5-24": 344,
    "AGE 50-64": "X",
    "AGE 65": 82,
    ILITOTAL: 950,
    "TOTAL PATIENTS": 101175
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 16,
    "AGE 0-4": 234,
    "AGE 25-49": "X",
    "AGE 25-64": "344",
    "AGE 5-24": 331,
    "AGE 50-64": "X",
    "AGE 65": 88,
    ILITOTAL: 997,
    "TOTAL PATIENTS": 105580
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 17,
    "AGE 0-4": 198,
    "AGE 25-49": "X",
    "AGE 25-64": "253",
    "AGE 5-24": 274,
    "AGE 50-64": "X",
    "AGE 65": 46,
    ILITOTAL: 771,
    "TOTAL PATIENTS": 103824
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 18,
    "AGE 0-4": 173,
    "AGE 25-49": "X",
    "AGE 25-64": "225",
    "AGE 5-24": 265,
    "AGE 50-64": "X",
    "AGE 65": 71,
    ILITOTAL: 734,
    "TOTAL PATIENTS": 99802
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 19,
    "AGE 0-4": 165,
    "AGE 25-49": "X",
    "AGE 25-64": "196",
    "AGE 5-24": 250,
    "AGE 50-64": "X",
    "AGE 65": 60,
    ILITOTAL: 671,
    "TOTAL PATIENTS": 92532
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 20,
    "AGE 0-4": 94,
    "AGE 25-49": "X",
    "AGE 25-64": "159",
    "AGE 5-24": 179,
    "AGE 50-64": "X",
    "AGE 65": 38,
    ILITOTAL: 470,
    "TOTAL PATIENTS": 70113
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 21,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 22,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 23,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 24,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 25,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 26,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 27,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 28,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 29,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 30,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 31,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 32,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 33,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 34,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 35,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 36,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 37,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 38,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 39,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 40,
    "AGE 0-4": 429,
    "AGE 25-49": "X",
    "AGE 25-64": "372",
    "AGE 5-24": 485,
    "AGE 50-64": "X",
    "AGE 65": 82,
    ILITOTAL: 1368,
    "TOTAL PATIENTS": 137156
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 41,
    "AGE 0-4": 479,
    "AGE 25-49": "X",
    "AGE 25-64": "526",
    "AGE 5-24": 628,
    "AGE 50-64": "X",
    "AGE 65": 114,
    ILITOTAL: 1747,
    "TOTAL PATIENTS": 159264
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 42,
    "AGE 0-4": 562,
    "AGE 25-49": "X",
    "AGE 25-64": "560",
    "AGE 5-24": 697,
    "AGE 50-64": "X",
    "AGE 65": 113,
    ILITOTAL: 1932,
    "TOTAL PATIENTS": 165425
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 43,
    "AGE 0-4": 567,
    "AGE 25-49": "X",
    "AGE 25-64": "643",
    "AGE 5-24": 876,
    "AGE 50-64": "X",
    "AGE 65": 118,
    ILITOTAL: 2204,
    "TOTAL PATIENTS": 174566
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 44,
    "AGE 0-4": 655,
    "AGE 25-49": "X",
    "AGE 25-64": "665",
    "AGE 5-24": 883,
    "AGE 50-64": "X",
    "AGE 65": 168,
    ILITOTAL: 2371,
    "TOTAL PATIENTS": 182365
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 45,
    "AGE 0-4": 626,
    "AGE 25-49": "X",
    "AGE 25-64": "687",
    "AGE 5-24": 865,
    "AGE 50-64": "X",
    "AGE 65": 149,
    ILITOTAL: 2327,
    "TOTAL PATIENTS": 190992
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 46,
    "AGE 0-4": 693,
    "AGE 25-49": "X",
    "AGE 25-64": "811",
    "AGE 5-24": 862,
    "AGE 50-64": "X",
    "AGE 65": 142,
    ILITOTAL: 2508,
    "TOTAL PATIENTS": 187174
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 47,
    "AGE 0-4": 602,
    "AGE 25-49": "X",
    "AGE 25-64": "698",
    "AGE 5-24": 643,
    "AGE 50-64": "X",
    "AGE 65": 147,
    ILITOTAL: 2090,
    "TOTAL PATIENTS": 141523
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 48,
    "AGE 0-4": 638,
    "AGE 25-49": "X",
    "AGE 25-64": "877",
    "AGE 5-24": 866,
    "AGE 50-64": "X",
    "AGE 65": 185,
    ILITOTAL: 2566,
    "TOTAL PATIENTS": 181932
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 49,
    "AGE 0-4": 602,
    "AGE 25-49": "X",
    "AGE 25-64": "676",
    "AGE 5-24": 848,
    "AGE 50-64": "X",
    "AGE 65": 149,
    ILITOTAL: 2275,
    "TOTAL PATIENTS": 180095
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 50,
    "AGE 0-4": 666,
    "AGE 25-49": "X",
    "AGE 25-64": "570",
    "AGE 5-24": 780,
    "AGE 50-64": "X",
    "AGE 65": 153,
    ILITOTAL: 2169,
    "TOTAL PATIENTS": 170971
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 51,
    "AGE 0-4": 707,
    "AGE 25-49": "X",
    "AGE 25-64": "684",
    "AGE 5-24": 725,
    "AGE 50-64": "X",
    "AGE 65": 162,
    ILITOTAL: 2278,
    "TOTAL PATIENTS": 148450
  },
  {
    "REGION TYPE": "National",
    YEAR: 2001,
    WEEK: 52,
    "AGE 0-4": 719,
    "AGE 25-49": "X",
    "AGE 25-64": "718",
    "AGE 5-24": 656,
    "AGE 50-64": "X",
    "AGE 65": 172,
    ILITOTAL: 2265,
    "TOTAL PATIENTS": 106451
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 1,
    "AGE 0-4": 785,
    "AGE 25-49": "X",
    "AGE 25-64": "808",
    "AGE 5-24": 752,
    "AGE 50-64": "X",
    "AGE 65": 223,
    ILITOTAL: 2568,
    "TOTAL PATIENTS": 132274
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 2,
    "AGE 0-4": 837,
    "AGE 25-49": "X",
    "AGE 25-64": "869",
    "AGE 5-24": 969,
    "AGE 50-64": "X",
    "AGE 65": 200,
    ILITOTAL: 2875,
    "TOTAL PATIENTS": 171747
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 3,
    "AGE 0-4": 1067,
    "AGE 25-49": "X",
    "AGE 25-64": "948",
    "AGE 5-24": 1533,
    "AGE 50-64": "X",
    "AGE 65": 195,
    ILITOTAL: 3743,
    "TOTAL PATIENTS": 180969
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 4,
    "AGE 0-4": 1460,
    "AGE 25-49": "X",
    "AGE 25-64": "1156",
    "AGE 5-24": 2004,
    "AGE 50-64": "X",
    "AGE 65": 177,
    ILITOTAL: 4797,
    "TOTAL PATIENTS": 166968
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 5,
    "AGE 0-4": 1556,
    "AGE 25-49": "X",
    "AGE 25-64": "1415",
    "AGE 5-24": 2351,
    "AGE 50-64": "X",
    "AGE 65": 235,
    ILITOTAL: 5557,
    "TOTAL PATIENTS": 188431
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 6,
    "AGE 0-4": 1542,
    "AGE 25-49": "X",
    "AGE 25-64": "1478",
    "AGE 5-24": 2330,
    "AGE 50-64": "X",
    "AGE 65": 274,
    ILITOTAL: 5624,
    "TOTAL PATIENTS": 192039
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 7,
    "AGE 0-4": 1557,
    "AGE 25-49": "X",
    "AGE 25-64": "1573",
    "AGE 5-24": 2436,
    "AGE 50-64": "X",
    "AGE 65": 358,
    ILITOTAL: 5924,
    "TOTAL PATIENTS": 187242
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 8,
    "AGE 0-4": 1509,
    "AGE 25-49": "X",
    "AGE 25-64": "1544",
    "AGE 5-24": 2359,
    "AGE 50-64": "X",
    "AGE 65": 348,
    ILITOTAL: 5760,
    "TOTAL PATIENTS": 184544
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 9,
    "AGE 0-4": 1208,
    "AGE 25-49": "X",
    "AGE 25-64": "1529",
    "AGE 5-24": 1997,
    "AGE 50-64": "X",
    "AGE 65": 370,
    ILITOTAL: 5104,
    "TOTAL PATIENTS": 186608
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 10,
    "AGE 0-4": 848,
    "AGE 25-49": "X",
    "AGE 25-64": "1007",
    "AGE 5-24": 1558,
    "AGE 50-64": "X",
    "AGE 65": 218,
    ILITOTAL: 3631,
    "TOTAL PATIENTS": 168647
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 11,
    "AGE 0-4": 731,
    "AGE 25-49": "X",
    "AGE 25-64": "832",
    "AGE 5-24": 1252,
    "AGE 50-64": "X",
    "AGE 65": 162,
    ILITOTAL: 2977,
    "TOTAL PATIENTS": 154942
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 12,
    "AGE 0-4": 567,
    "AGE 25-49": "X",
    "AGE 25-64": "607",
    "AGE 5-24": 1092,
    "AGE 50-64": "X",
    "AGE 65": 151,
    ILITOTAL: 2417,
    "TOTAL PATIENTS": 148527
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 13,
    "AGE 0-4": 547,
    "AGE 25-49": "X",
    "AGE 25-64": "488",
    "AGE 5-24": 913,
    "AGE 50-64": "X",
    "AGE 65": 131,
    ILITOTAL: 2079,
    "TOTAL PATIENTS": 142223
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 14,
    "AGE 0-4": 397,
    "AGE 25-49": "X",
    "AGE 25-64": "449",
    "AGE 5-24": 692,
    "AGE 50-64": "X",
    "AGE 65": 117,
    ILITOTAL: 1655,
    "TOTAL PATIENTS": 138645
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 15,
    "AGE 0-4": 327,
    "AGE 25-49": "X",
    "AGE 25-64": "292",
    "AGE 5-24": 467,
    "AGE 50-64": "X",
    "AGE 65": 83,
    ILITOTAL: 1169,
    "TOTAL PATIENTS": 130554
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 16,
    "AGE 0-4": 247,
    "AGE 25-49": "X",
    "AGE 25-64": "262",
    "AGE 5-24": 442,
    "AGE 50-64": "X",
    "AGE 65": 67,
    ILITOTAL: 1018,
    "TOTAL PATIENTS": 124465
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 17,
    "AGE 0-4": 235,
    "AGE 25-49": "X",
    "AGE 25-64": "155",
    "AGE 5-24": 389,
    "AGE 50-64": "X",
    "AGE 65": 51,
    ILITOTAL: 830,
    "TOTAL PATIENTS": 117581
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 18,
    "AGE 0-4": 209,
    "AGE 25-49": "X",
    "AGE 25-64": "147",
    "AGE 5-24": 269,
    "AGE 50-64": "X",
    "AGE 65": 47,
    ILITOTAL: 672,
    "TOTAL PATIENTS": 109945
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 19,
    "AGE 0-4": 169,
    "AGE 25-49": "X",
    "AGE 25-64": "156",
    "AGE 5-24": 302,
    "AGE 50-64": "X",
    "AGE 65": 46,
    ILITOTAL: 673,
    "TOTAL PATIENTS": 106720
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 20,
    "AGE 0-4": 159,
    "AGE 25-49": "X",
    "AGE 25-64": "142",
    "AGE 5-24": 236,
    "AGE 50-64": "X",
    "AGE 65": 39,
    ILITOTAL: 576,
    "TOTAL PATIENTS": 100422
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 21,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 22,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 23,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 24,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 25,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 26,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 27,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 28,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 29,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 30,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 31,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 32,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 33,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 34,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 35,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 36,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 37,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 38,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 39,
    "AGE 0-4": 0,
    "AGE 25-49": "0",
    "AGE 25-64": "0",
    "AGE 5-24": 0,
    "AGE 50-64": "0",
    "AGE 65": 0,
    ILITOTAL: 0,
    "TOTAL PATIENTS": 0
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 40,
    "AGE 0-4": 582,
    "AGE 25-49": "X",
    "AGE 25-64": "524",
    "AGE 5-24": 805,
    "AGE 50-64": "X",
    "AGE 65": 149,
    ILITOTAL: 2060,
    "TOTAL PATIENTS": 176569
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 41,
    "AGE 0-4": 683,
    "AGE 25-49": "X",
    "AGE 25-64": "585",
    "AGE 5-24": 872,
    "AGE 50-64": "X",
    "AGE 65": 127,
    ILITOTAL: 2267,
    "TOTAL PATIENTS": 186355
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 42,
    "AGE 0-4": 642,
    "AGE 25-49": "X",
    "AGE 25-64": "543",
    "AGE 5-24": 878,
    "AGE 50-64": "X",
    "AGE 65": 113,
    ILITOTAL: 2176,
    "TOTAL PATIENTS": 192469
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 43,
    "AGE 0-4": 728,
    "AGE 25-49": "X",
    "AGE 25-64": "672",
    "AGE 5-24": 1045,
    "AGE 50-64": "X",
    "AGE 65": 154,
    ILITOTAL: 2599,
    "TOTAL PATIENTS": 207512
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 44,
    "AGE 0-4": 823,
    "AGE 25-49": "X",
    "AGE 25-64": "741",
    "AGE 5-24": 1189,
    "AGE 50-64": "X",
    "AGE 65": 154,
    ILITOTAL: 2907,
    "TOTAL PATIENTS": 223208
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 45,
    "AGE 0-4": 887,
    "AGE 25-49": "X",
    "AGE 25-64": "886",
    "AGE 5-24": 1272,
    "AGE 50-64": "X",
    "AGE 65": 180,
    ILITOTAL: 3225,
    "TOTAL PATIENTS": 229454
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 46,
    "AGE 0-4": 851,
    "AGE 25-49": "X",
    "AGE 25-64": "898",
    "AGE 5-24": 1173,
    "AGE 50-64": "X",
    "AGE 65": 175,
    ILITOTAL: 3097,
    "TOTAL PATIENTS": 223712
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 47,
    "AGE 0-4": 802,
    "AGE 25-49": "X",
    "AGE 25-64": "817",
    "AGE 5-24": 1166,
    "AGE 50-64": "X",
    "AGE 65": 182,
    ILITOTAL: 2967,
    "TOTAL PATIENTS": 223818
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 48,
    "AGE 0-4": 834,
    "AGE 25-49": "X",
    "AGE 25-64": "711",
    "AGE 5-24": 978,
    "AGE 50-64": "X",
    "AGE 65": 186,
    ILITOTAL: 2709,
    "TOTAL PATIENTS": 188814
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 49,
    "AGE 0-4": 857,
    "AGE 25-49": "X",
    "AGE 25-64": "869",
    "AGE 5-24": 1117,
    "AGE 50-64": "X",
    "AGE 65": 206,
    ILITOTAL: 3049,
    "TOTAL PATIENTS": 243078
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 50,
    "AGE 0-4": 804,
    "AGE 25-49": "X",
    "AGE 25-64": "792",
    "AGE 5-24": 1179,
    "AGE 50-64": "X",
    "AGE 65": 182,
    ILITOTAL: 2957,
    "TOTAL PATIENTS": 235136
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 51,
    "AGE 0-4": 951,
    "AGE 25-49": "X",
    "AGE 25-64": "849",
    "AGE 5-24": 1404,
    "AGE 50-64": "X",
    "AGE 65": 212,
    ILITOTAL: 3416,
    "TOTAL PATIENTS": 216179
  },
  {
    "REGION TYPE": "National",
    YEAR: 2002,
    WEEK: 52,
    "AGE 0-4": 915,
    "AGE 25-49": "X",
    "AGE 25-64": "828",
    "AGE 5-24": 937,
    "AGE 50-64": "X",
    "AGE 65": 177,
    ILITOTAL: 2857,
    "TOTAL PATIENTS": 144287
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 1,
    "AGE 0-4": 1028,
    "AGE 25-49": "X",
    "AGE 25-64": "962",
    "AGE 5-24": 1019,
    "AGE 50-64": "X",
    "AGE 65": 251,
    ILITOTAL: 3260,
    "TOTAL PATIENTS": 171193
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 2,
    "AGE 0-4": 1068,
    "AGE 25-49": "X",
    "AGE 25-64": "1091",
    "AGE 5-24": 1296,
    "AGE 50-64": "X",
    "AGE 65": 274,
    ILITOTAL: 3729,
    "TOTAL PATIENTS": 234513
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 3,
    "AGE 0-4": 1154,
    "AGE 25-49": "X",
    "AGE 25-64": "1011",
    "AGE 5-24": 1798,
    "AGE 50-64": "X",
    "AGE 65": 241,
    ILITOTAL: 4204,
    "TOTAL PATIENTS": 231550
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 4,
    "AGE 0-4": 1373,
    "AGE 25-49": "X",
    "AGE 25-64": "1104",
    "AGE 5-24": 2998,
    "AGE 50-64": "X",
    "AGE 65": 221,
    ILITOTAL: 5696,
    "TOTAL PATIENTS": 235566
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 5,
    "AGE 0-4": 1411,
    "AGE 25-49": "X",
    "AGE 25-64": "1322",
    "AGE 5-24": 4064,
    "AGE 50-64": "X",
    "AGE 65": 282,
    ILITOTAL: 7079,
    "TOTAL PATIENTS": 246969
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 6,
    "AGE 0-4": 1606,
    "AGE 25-49": "X",
    "AGE 25-64": "1421",
    "AGE 5-24": 4447,
    "AGE 50-64": "X",
    "AGE 65": 308,
    ILITOTAL: 7782,
    "TOTAL PATIENTS": 245751
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 7,
    "AGE 0-4": 1568,
    "AGE 25-49": "X",
    "AGE 25-64": "1566",
    "AGE 5-24": 4224,
    "AGE 50-64": "X",
    "AGE 65": 291,
    ILITOTAL: 7649,
    "TOTAL PATIENTS": 253656
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 8,
    "AGE 0-4": 1694,
    "AGE 25-49": "X",
    "AGE 25-64": "1537",
    "AGE 5-24": 3689,
    "AGE 50-64": "X",
    "AGE 65": 308,
    ILITOTAL: 7228,
    "TOTAL PATIENTS": 241110
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 9,
    "AGE 0-4": 1336,
    "AGE 25-49": "X",
    "AGE 25-64": "1400",
    "AGE 5-24": 2583,
    "AGE 50-64": "X",
    "AGE 65": 287,
    ILITOTAL: 5606,
    "TOTAL PATIENTS": 241683
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 10,
    "AGE 0-4": 1015,
    "AGE 25-49": "X",
    "AGE 25-64": "1085",
    "AGE 5-24": 2103,
    "AGE 50-64": "X",
    "AGE 65": 247,
    ILITOTAL: 4450,
    "TOTAL PATIENTS": 228549
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 11,
    "AGE 0-4": 880,
    "AGE 25-49": "X",
    "AGE 25-64": "987",
    "AGE 5-24": 1669,
    "AGE 50-64": "X",
    "AGE 65": 274,
    ILITOTAL: 3810,
    "TOTAL PATIENTS": 220250
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 12,
    "AGE 0-4": 737,
    "AGE 25-49": "X",
    "AGE 25-64": "773",
    "AGE 5-24": 1321,
    "AGE 50-64": "X",
    "AGE 65": 156,
    ILITOTAL: 2987,
    "TOTAL PATIENTS": 196724
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 13,
    "AGE 0-4": 624,
    "AGE 25-49": "X",
    "AGE 25-64": "640",
    "AGE 5-24": 1016,
    "AGE 50-64": "X",
    "AGE 65": 159,
    ILITOTAL: 2439,
    "TOTAL PATIENTS": 198913
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 14,
    "AGE 0-4": 506,
    "AGE 25-49": "X",
    "AGE 25-64": "541",
    "AGE 5-24": 846,
    "AGE 50-64": "X",
    "AGE 65": 135,
    ILITOTAL: 2028,
    "TOTAL PATIENTS": 192349
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 15,
    "AGE 0-4": 569,
    "AGE 25-49": "X",
    "AGE 25-64": "551",
    "AGE 5-24": 799,
    "AGE 50-64": "X",
    "AGE 65": 163,
    ILITOTAL: 2082,
    "TOTAL PATIENTS": 194383
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 16,
    "AGE 0-4": 440,
    "AGE 25-49": "X",
    "AGE 25-64": "382",
    "AGE 5-24": 539,
    "AGE 50-64": "X",
    "AGE 65": 106,
    ILITOTAL: 1467,
    "TOTAL PATIENTS": 177577
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 17,
    "AGE 0-4": 429,
    "AGE 25-49": "X",
    "AGE 25-64": "394",
    "AGE 5-24": 508,
    "AGE 50-64": "X",
    "AGE 65": 114,
    ILITOTAL: 1445,
    "TOTAL PATIENTS": 176111
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 18,
    "AGE 0-4": 275,
    "AGE 25-49": "X",
    "AGE 25-64": "272",
    "AGE 5-24": 444,
    "AGE 50-64": "X",
    "AGE 65": 84,
    ILITOTAL: 1075,
    "TOTAL PATIENTS": 170406
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 19,
    "AGE 0-4": 215,
    "AGE 25-49": "X",
    "AGE 25-64": "245",
    "AGE 5-24": 471,
    "AGE 50-64": "X",
    "AGE 65": 74,
    ILITOTAL: 1005,
    "TOTAL PATIENTS": 157191
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 20,
    "AGE 0-4": 248,
    "AGE 25-49": "X",
    "AGE 25-64": "235",
    "AGE 5-24": 283,
    "AGE 50-64": "X",
    "AGE 65": 70,
    ILITOTAL: 836,
    "TOTAL PATIENTS": 142514
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 21,
    "AGE 0-4": 264,
    "AGE 25-49": "X",
    "AGE 25-64": "169",
    "AGE 5-24": 262,
    "AGE 50-64": "X",
    "AGE 65": 45,
    ILITOTAL: 740,
    "TOTAL PATIENTS": 95728
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 22,
    "AGE 0-4": 213,
    "AGE 25-49": "X",
    "AGE 25-64": "179",
    "AGE 5-24": 205,
    "AGE 50-64": "X",
    "AGE 65": 44,
    ILITOTAL: 641,
    "TOTAL PATIENTS": 81063
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 23,
    "AGE 0-4": 201,
    "AGE 25-49": "X",
    "AGE 25-64": "133",
    "AGE 5-24": 195,
    "AGE 50-64": "X",
    "AGE 65": 34,
    ILITOTAL: 563,
    "TOTAL PATIENTS": 79090
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 24,
    "AGE 0-4": 198,
    "AGE 25-49": "X",
    "AGE 25-64": "180",
    "AGE 5-24": 187,
    "AGE 50-64": "X",
    "AGE 65": 55,
    ILITOTAL: 620,
    "TOTAL PATIENTS": 78023
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 25,
    "AGE 0-4": 139,
    "AGE 25-49": "X",
    "AGE 25-64": "127",
    "AGE 5-24": 123,
    "AGE 50-64": "X",
    "AGE 65": 34,
    ILITOTAL: 423,
    "TOTAL PATIENTS": 72110
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 26,
    "AGE 0-4": 122,
    "AGE 25-49": "X",
    "AGE 25-64": "163",
    "AGE 5-24": 124,
    "AGE 50-64": "X",
    "AGE 65": 32,
    ILITOTAL: 441,
    "TOTAL PATIENTS": 71593
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 27,
    "AGE 0-4": 109,
    "AGE 25-49": "X",
    "AGE 25-64": "94",
    "AGE 5-24": 91,
    "AGE 50-64": "X",
    "AGE 65": 24,
    ILITOTAL: 318,
    "TOTAL PATIENTS": 64699
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 28,
    "AGE 0-4": 137,
    "AGE 25-49": "X",
    "AGE 25-64": "120",
    "AGE 5-24": 141,
    "AGE 50-64": "X",
    "AGE 65": 43,
    ILITOTAL: 441,
    "TOTAL PATIENTS": 72972
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 29,
    "AGE 0-4": 98,
    "AGE 25-49": "X",
    "AGE 25-64": "116",
    "AGE 5-24": 98,
    "AGE 50-64": "X",
    "AGE 65": 53,
    ILITOTAL: 365,
    "TOTAL PATIENTS": 69593
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 30,
    "AGE 0-4": 112,
    "AGE 25-49": "X",
    "AGE 25-64": "121",
    "AGE 5-24": 139,
    "AGE 50-64": "X",
    "AGE 65": 48,
    ILITOTAL: 420,
    "TOTAL PATIENTS": 71103
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 31,
    "AGE 0-4": 100,
    "AGE 25-49": "X",
    "AGE 25-64": "102",
    "AGE 5-24": 120,
    "AGE 50-64": "X",
    "AGE 65": 39,
    ILITOTAL: 361,
    "TOTAL PATIENTS": 71466
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 32,
    "AGE 0-4": 136,
    "AGE 25-49": "X",
    "AGE 25-64": "136",
    "AGE 5-24": 125,
    "AGE 50-64": "X",
    "AGE 65": 46,
    ILITOTAL: 443,
    "TOTAL PATIENTS": 69844
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 33,
    "AGE 0-4": 120,
    "AGE 25-49": "X",
    "AGE 25-64": "133",
    "AGE 5-24": 131,
    "AGE 50-64": "X",
    "AGE 65": 37,
    ILITOTAL: 421,
    "TOTAL PATIENTS": 69003
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 34,
    "AGE 0-4": 159,
    "AGE 25-49": "X",
    "AGE 25-64": "120",
    "AGE 5-24": 144,
    "AGE 50-64": "X",
    "AGE 65": 27,
    ILITOTAL: 450,
    "TOTAL PATIENTS": 70178
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 35,
    "AGE 0-4": 166,
    "AGE 25-49": "X",
    "AGE 25-64": "112",
    "AGE 5-24": 155,
    "AGE 50-64": "X",
    "AGE 65": 30,
    ILITOTAL: 463,
    "TOTAL PATIENTS": 70000
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 36,
    "AGE 0-4": 177,
    "AGE 25-49": "X",
    "AGE 25-64": "124",
    "AGE 5-24": 182,
    "AGE 50-64": "X",
    "AGE 65": 36,
    ILITOTAL: 519,
    "TOTAL PATIENTS": 65474
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 37,
    "AGE 0-4": 145,
    "AGE 25-49": "X",
    "AGE 25-64": "122",
    "AGE 5-24": 184,
    "AGE 50-64": "X",
    "AGE 65": 24,
    ILITOTAL: 475,
    "TOTAL PATIENTS": 74328
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 38,
    "AGE 0-4": 136,
    "AGE 25-49": "X",
    "AGE 25-64": "116",
    "AGE 5-24": 183,
    "AGE 50-64": "X",
    "AGE 65": 26,
    ILITOTAL: 461,
    "TOTAL PATIENTS": 72401
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 39,
    "AGE 0-4": 135,
    "AGE 25-49": "X",
    "AGE 25-64": "143",
    "AGE 5-24": 221,
    "AGE 50-64": "X",
    "AGE 65": 34,
    ILITOTAL: 533,
    "TOTAL PATIENTS": 71273
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 40,
    "AGE 0-4": 808,
    "AGE 25-49": "X",
    "AGE 25-64": "607",
    "AGE 5-24": 881,
    "AGE 50-64": "X",
    "AGE 65": 146,
    ILITOTAL: 2442,
    "TOTAL PATIENTS": 254144
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 41,
    "AGE 0-4": 913,
    "AGE 25-49": "X",
    "AGE 25-64": "696",
    "AGE 5-24": 1132,
    "AGE 50-64": "X",
    "AGE 65": 191,
    ILITOTAL: 2932,
    "TOTAL PATIENTS": 281045
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 42,
    "AGE 0-4": 878,
    "AGE 25-49": "X",
    "AGE 25-64": "811",
    "AGE 5-24": 1147,
    "AGE 50-64": "X",
    "AGE 65": 195,
    ILITOTAL: 3031,
    "TOTAL PATIENTS": 287436
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 43,
    "AGE 0-4": 1006,
    "AGE 25-49": "X",
    "AGE 25-64": "884",
    "AGE 5-24": 1369,
    "AGE 50-64": "X",
    "AGE 65": 216,
    ILITOTAL: 3475,
    "TOTAL PATIENTS": 312412
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 44,
    "AGE 0-4": 1207,
    "AGE 25-49": "X",
    "AGE 25-64": "1127",
    "AGE 5-24": 2080,
    "AGE 50-64": "X",
    "AGE 65": 276,
    ILITOTAL: 4690,
    "TOTAL PATIENTS": 331980
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 45,
    "AGE 0-4": 1542,
    "AGE 25-49": "X",
    "AGE 25-64": "1249",
    "AGE 5-24": 2735,
    "AGE 50-64": "X",
    "AGE 65": 264,
    ILITOTAL: 5790,
    "TOTAL PATIENTS": 335258
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 46,
    "AGE 0-4": 2185,
    "AGE 25-49": "X",
    "AGE 25-64": "1757",
    "AGE 5-24": 4133,
    "AGE 50-64": "X",
    "AGE 65": 310,
    ILITOTAL: 8385,
    "TOTAL PATIENTS": 348359
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 47,
    "AGE 0-4": 2561,
    "AGE 25-49": "X",
    "AGE 25-64": "2425",
    "AGE 5-24": 5684,
    "AGE 50-64": "X",
    "AGE 65": 471,
    ILITOTAL: 11141,
    "TOTAL PATIENTS": 358275
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 48,
    "AGE 0-4": 3247,
    "AGE 25-49": "X",
    "AGE 25-64": "2890",
    "AGE 5-24": 4933,
    "AGE 50-64": "X",
    "AGE 65": 672,
    ILITOTAL: 11742,
    "TOTAL PATIENTS": 272576
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 49,
    "AGE 0-4": 4734,
    "AGE 25-49": "X",
    "AGE 25-64": "5330",
    "AGE 5-24": 7817,
    "AGE 50-64": "X",
    "AGE 65": 1067,
    ILITOTAL: 18948,
    "TOTAL PATIENTS": 392274
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 50,
    "AGE 0-4": 6620,
    "AGE 25-49": "X",
    "AGE 25-64": "5573",
    "AGE 5-24": 11550,
    "AGE 50-64": "X",
    "AGE 65": 1219,
    ILITOTAL: 24962,
    "TOTAL PATIENTS": 388269
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 51,
    "AGE 0-4": 6434,
    "AGE 25-49": "X",
    "AGE 25-64": "5906",
    "AGE 5-24": 9851,
    "AGE 50-64": "X",
    "AGE 65": 1508,
    ILITOTAL: 23699,
    "TOTAL PATIENTS": 345097
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 52,
    "AGE 0-4": 5336,
    "AGE 25-49": "X",
    "AGE 25-64": "4517",
    "AGE 5-24": 5231,
    "AGE 50-64": "X",
    "AGE 65": 1331,
    ILITOTAL: 16415,
    "TOTAL PATIENTS": 232344
  },
  {
    "REGION TYPE": "National",
    YEAR: 2003,
    WEEK: 53,
    "AGE 0-4": 3391,
    "AGE 25-49": "X",
    "AGE 25-64": "3827",
    "AGE 5-24": 2894,
    "AGE 50-64": "X",
    "AGE 65": 1220,
    ILITOTAL: 11332,
    "TOTAL PATIENTS": 248992
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 1,
    "AGE 0-4": 1930,
    "AGE 25-49": "X",
    "AGE 25-64": "2605",
    "AGE 5-24": 2299,
    "AGE 50-64": "X",
    "AGE 65": 768,
    ILITOTAL: 7602,
    "TOTAL PATIENTS": 314349
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 2,
    "AGE 0-4": 1679,
    "AGE 25-49": "X",
    "AGE 25-64": "1586",
    "AGE 5-24": 1857,
    "AGE 50-64": "X",
    "AGE 65": 461,
    ILITOTAL: 5583,
    "TOTAL PATIENTS": 308614
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 3,
    "AGE 0-4": 1721,
    "AGE 25-49": "X",
    "AGE 25-64": "1276",
    "AGE 5-24": 1604,
    "AGE 50-64": "X",
    "AGE 65": 360,
    ILITOTAL: 4961,
    "TOTAL PATIENTS": 289774
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 4,
    "AGE 0-4": 1487,
    "AGE 25-49": "X",
    "AGE 25-64": "1067",
    "AGE 5-24": 1543,
    "AGE 50-64": "X",
    "AGE 65": 339,
    ILITOTAL: 4436,
    "TOTAL PATIENTS": 287586
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 5,
    "AGE 0-4": 1454,
    "AGE 25-49": "X",
    "AGE 25-64": "1047",
    "AGE 5-24": 1448,
    "AGE 50-64": "X",
    "AGE 65": 302,
    ILITOTAL: 4251,
    "TOTAL PATIENTS": 295646
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 6,
    "AGE 0-4": 1420,
    "AGE 25-49": "X",
    "AGE 25-64": "889",
    "AGE 5-24": 1297,
    "AGE 50-64": "X",
    "AGE 65": 218,
    ILITOTAL: 3824,
    "TOTAL PATIENTS": 288762
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 7,
    "AGE 0-4": 1301,
    "AGE 25-49": "X",
    "AGE 25-64": "876",
    "AGE 5-24": 1255,
    "AGE 50-64": "X",
    "AGE 65": 259,
    ILITOTAL: 3691,
    "TOTAL PATIENTS": 282347
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 8,
    "AGE 0-4": 956,
    "AGE 25-49": "X",
    "AGE 25-64": "719",
    "AGE 5-24": 1038,
    "AGE 50-64": "X",
    "AGE 65": 203,
    ILITOTAL: 2916,
    "TOTAL PATIENTS": 281202
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 9,
    "AGE 0-4": 925,
    "AGE 25-49": "X",
    "AGE 25-64": "682",
    "AGE 5-24": 910,
    "AGE 50-64": "X",
    "AGE 65": 227,
    ILITOTAL: 2744,
    "TOTAL PATIENTS": 271597
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 10,
    "AGE 0-4": 878,
    "AGE 25-49": "X",
    "AGE 25-64": "764",
    "AGE 5-24": 888,
    "AGE 50-64": "X",
    "AGE 65": 178,
    ILITOTAL: 2708,
    "TOTAL PATIENTS": 257294
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 11,
    "AGE 0-4": 730,
    "AGE 25-49": "X",
    "AGE 25-64": "756",
    "AGE 5-24": 826,
    "AGE 50-64": "X",
    "AGE 65": 175,
    ILITOTAL: 2487,
    "TOTAL PATIENTS": 243802
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 12,
    "AGE 0-4": 760,
    "AGE 25-49": "X",
    "AGE 25-64": "628",
    "AGE 5-24": 733,
    "AGE 50-64": "X",
    "AGE 65": 179,
    ILITOTAL: 2300,
    "TOTAL PATIENTS": 248805
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 13,
    "AGE 0-4": 610,
    "AGE 25-49": "X",
    "AGE 25-64": "495",
    "AGE 5-24": 611,
    "AGE 50-64": "X",
    "AGE 65": 142,
    ILITOTAL: 1858,
    "TOTAL PATIENTS": 234998
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 14,
    "AGE 0-4": 583,
    "AGE 25-49": "X",
    "AGE 25-64": "440",
    "AGE 5-24": 566,
    "AGE 50-64": "X",
    "AGE 65": 116,
    ILITOTAL: 1705,
    "TOTAL PATIENTS": 212432
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 15,
    "AGE 0-4": 545,
    "AGE 25-49": "X",
    "AGE 25-64": "500",
    "AGE 5-24": 573,
    "AGE 50-64": "X",
    "AGE 65": 131,
    ILITOTAL: 1749,
    "TOTAL PATIENTS": 209178
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 16,
    "AGE 0-4": 501,
    "AGE 25-49": "X",
    "AGE 25-64": "461",
    "AGE 5-24": 511,
    "AGE 50-64": "X",
    "AGE 65": 142,
    ILITOTAL: 1615,
    "TOTAL PATIENTS": 203802
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 17,
    "AGE 0-4": 470,
    "AGE 25-49": "X",
    "AGE 25-64": "349",
    "AGE 5-24": 404,
    "AGE 50-64": "X",
    "AGE 65": 108,
    ILITOTAL: 1331,
    "TOTAL PATIENTS": 194708
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 18,
    "AGE 0-4": 435,
    "AGE 25-49": "X",
    "AGE 25-64": "383",
    "AGE 5-24": 491,
    "AGE 50-64": "X",
    "AGE 65": 85,
    ILITOTAL: 1394,
    "TOTAL PATIENTS": 184038
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 19,
    "AGE 0-4": 449,
    "AGE 25-49": "X",
    "AGE 25-64": "361",
    "AGE 5-24": 443,
    "AGE 50-64": "X",
    "AGE 65": 74,
    ILITOTAL: 1327,
    "TOTAL PATIENTS": 168276
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 20,
    "AGE 0-4": 451,
    "AGE 25-49": "X",
    "AGE 25-64": "337",
    "AGE 5-24": 380,
    "AGE 50-64": "X",
    "AGE 65": 94,
    ILITOTAL: 1262,
    "TOTAL PATIENTS": 155386
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 21,
    "AGE 0-4": 375,
    "AGE 25-49": "X",
    "AGE 25-64": "280",
    "AGE 5-24": 349,
    "AGE 50-64": "X",
    "AGE 65": 66,
    ILITOTAL: 1070,
    "TOTAL PATIENTS": 133008
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 22,
    "AGE 0-4": 391,
    "AGE 25-49": "X",
    "AGE 25-64": "289",
    "AGE 5-24": 308,
    "AGE 50-64": "X",
    "AGE 65": 73,
    ILITOTAL: 1061,
    "TOTAL PATIENTS": 120884
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 23,
    "AGE 0-4": 355,
    "AGE 25-49": "X",
    "AGE 25-64": "257",
    "AGE 5-24": 309,
    "AGE 50-64": "X",
    "AGE 65": 66,
    ILITOTAL: 987,
    "TOTAL PATIENTS": 133117
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 24,
    "AGE 0-4": 307,
    "AGE 25-49": "X",
    "AGE 25-64": "258",
    "AGE 5-24": 240,
    "AGE 50-64": "X",
    "AGE 65": 46,
    ILITOTAL: 851,
    "TOTAL PATIENTS": 128740
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 25,
    "AGE 0-4": 277,
    "AGE 25-49": "X",
    "AGE 25-64": "245",
    "AGE 5-24": 284,
    "AGE 50-64": "X",
    "AGE 65": 81,
    ILITOTAL: 887,
    "TOTAL PATIENTS": 124037
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 26,
    "AGE 0-4": 238,
    "AGE 25-49": "X",
    "AGE 25-64": "215",
    "AGE 5-24": 183,
    "AGE 50-64": "X",
    "AGE 65": 62,
    ILITOTAL: 698,
    "TOTAL PATIENTS": 124146
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 27,
    "AGE 0-4": 233,
    "AGE 25-49": "X",
    "AGE 25-64": "210",
    "AGE 5-24": 205,
    "AGE 50-64": "X",
    "AGE 65": 62,
    ILITOTAL: 710,
    "TOTAL PATIENTS": 90238
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 28,
    "AGE 0-4": 249,
    "AGE 25-49": "X",
    "AGE 25-64": "227",
    "AGE 5-24": 280,
    "AGE 50-64": "X",
    "AGE 65": 80,
    ILITOTAL: 836,
    "TOTAL PATIENTS": 97135
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 29,
    "AGE 0-4": 259,
    "AGE 25-49": "X",
    "AGE 25-64": "162",
    "AGE 5-24": 200,
    "AGE 50-64": "X",
    "AGE 65": 38,
    ILITOTAL: 659,
    "TOTAL PATIENTS": 95515
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 30,
    "AGE 0-4": 260,
    "AGE 25-49": "X",
    "AGE 25-64": "189",
    "AGE 5-24": 230,
    "AGE 50-64": "X",
    "AGE 65": 40,
    ILITOTAL: 719,
    "TOTAL PATIENTS": 92216
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 31,
    "AGE 0-4": 213,
    "AGE 25-49": "X",
    "AGE 25-64": "225",
    "AGE 5-24": 235,
    "AGE 50-64": "X",
    "AGE 65": 60,
    ILITOTAL: 733,
    "TOTAL PATIENTS": 116693
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 32,
    "AGE 0-4": 243,
    "AGE 25-49": "X",
    "AGE 25-64": "247",
    "AGE 5-24": 256,
    "AGE 50-64": "X",
    "AGE 65": 63,
    ILITOTAL: 809,
    "TOTAL PATIENTS": 89644
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 33,
    "AGE 0-4": 256,
    "AGE 25-49": "X",
    "AGE 25-64": "200",
    "AGE 5-24": 256,
    "AGE 50-64": "X",
    "AGE 65": 58,
    ILITOTAL: 770,
    "TOTAL PATIENTS": 95481
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 34,
    "AGE 0-4": 259,
    "AGE 25-49": "X",
    "AGE 25-64": "231",
    "AGE 5-24": 265,
    "AGE 50-64": "X",
    "AGE 65": 44,
    ILITOTAL: 799,
    "TOTAL PATIENTS": 91326
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 35,
    "AGE 0-4": 279,
    "AGE 25-49": "X",
    "AGE 25-64": "252",
    "AGE 5-24": 358,
    "AGE 50-64": "X",
    "AGE 65": 71,
    ILITOTAL: 960,
    "TOTAL PATIENTS": 96656
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 36,
    "AGE 0-4": 281,
    "AGE 25-49": "X",
    "AGE 25-64": "263",
    "AGE 5-24": 309,
    "AGE 50-64": "X",
    "AGE 65": 60,
    ILITOTAL: 913,
    "TOTAL PATIENTS": 104207
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 37,
    "AGE 0-4": 342,
    "AGE 25-49": "X",
    "AGE 25-64": "299",
    "AGE 5-24": 413,
    "AGE 50-64": "X",
    "AGE 65": 68,
    ILITOTAL: 1122,
    "TOTAL PATIENTS": 118343
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 38,
    "AGE 0-4": 322,
    "AGE 25-49": "X",
    "AGE 25-64": "268",
    "AGE 5-24": 416,
    "AGE 50-64": "X",
    "AGE 65": 83,
    ILITOTAL: 1089,
    "TOTAL PATIENTS": 117483
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 39,
    "AGE 0-4": 333,
    "AGE 25-49": "X",
    "AGE 25-64": "319",
    "AGE 5-24": 382,
    "AGE 50-64": "X",
    "AGE 65": 82,
    ILITOTAL: 1116,
    "TOTAL PATIENTS": 114857
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 40,
    "AGE 0-4": 877,
    "AGE 25-49": "X",
    "AGE 25-64": "853",
    "AGE 5-24": 1256,
    "AGE 50-64": "X",
    "AGE 65": 185,
    ILITOTAL: 3171,
    "TOTAL PATIENTS": 353449
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 41,
    "AGE 0-4": 1071,
    "AGE 25-49": "X",
    "AGE 25-64": "971",
    "AGE 5-24": 1373,
    "AGE 50-64": "X",
    "AGE 65": 216,
    ILITOTAL: 3631,
    "TOTAL PATIENTS": 355116
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 42,
    "AGE 0-4": 1240,
    "AGE 25-49": "X",
    "AGE 25-64": "1019",
    "AGE 5-24": 1534,
    "AGE 50-64": "X",
    "AGE 65": 226,
    ILITOTAL: 4019,
    "TOTAL PATIENTS": 378094
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 43,
    "AGE 0-4": 1190,
    "AGE 25-49": "X",
    "AGE 25-64": "1223",
    "AGE 5-24": 1671,
    "AGE 50-64": "X",
    "AGE 65": 285,
    ILITOTAL: 4369,
    "TOTAL PATIENTS": 380921
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 44,
    "AGE 0-4": 1327,
    "AGE 25-49": "X",
    "AGE 25-64": "1215",
    "AGE 5-24": 1718,
    "AGE 50-64": "X",
    "AGE 65": 291,
    ILITOTAL: 4551,
    "TOTAL PATIENTS": 377692
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 45,
    "AGE 0-4": 1497,
    "AGE 25-49": "X",
    "AGE 25-64": "1279",
    "AGE 5-24": 1874,
    "AGE 50-64": "X",
    "AGE 65": 319,
    ILITOTAL: 4969,
    "TOTAL PATIENTS": 380718
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 46,
    "AGE 0-4": 1531,
    "AGE 25-49": "X",
    "AGE 25-64": "1279",
    "AGE 5-24": 1874,
    "AGE 50-64": "X",
    "AGE 65": 299,
    ILITOTAL: 4983,
    "TOTAL PATIENTS": 387182
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 47,
    "AGE 0-4": 1490,
    "AGE 25-49": "X",
    "AGE 25-64": "1274",
    "AGE 5-24": 1678,
    "AGE 50-64": "X",
    "AGE 65": 271,
    ILITOTAL: 4713,
    "TOTAL PATIENTS": 295546
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 48,
    "AGE 0-4": 1538,
    "AGE 25-49": "X",
    "AGE 25-64": "1434",
    "AGE 5-24": 2059,
    "AGE 50-64": "X",
    "AGE 65": 376,
    ILITOTAL: 5407,
    "TOTAL PATIENTS": 387004
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 49,
    "AGE 0-4": 1551,
    "AGE 25-49": "X",
    "AGE 25-64": "1450",
    "AGE 5-24": 2052,
    "AGE 50-64": "X",
    "AGE 65": 375,
    ILITOTAL: 5428,
    "TOTAL PATIENTS": 374356
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 50,
    "AGE 0-4": 1670,
    "AGE 25-49": "X",
    "AGE 25-64": "1643",
    "AGE 5-24": 2071,
    "AGE 50-64": "X",
    "AGE 65": 371,
    ILITOTAL: 5755,
    "TOTAL PATIENTS": 355806
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 51,
    "AGE 0-4": 1856,
    "AGE 25-49": "X",
    "AGE 25-64": "1608",
    "AGE 5-24": 1807,
    "AGE 50-64": "X",
    "AGE 65": 418,
    ILITOTAL: 5689,
    "TOTAL PATIENTS": 259639
  },
  {
    "REGION TYPE": "National",
    YEAR: 2004,
    WEEK: 52,
    "AGE 0-4": 2252,
    "AGE 25-49": "X",
    "AGE 25-64": "2413",
    "AGE 5-24": 1993,
    "AGE 50-64": "X",
    "AGE 65": 621,
    ILITOTAL: 7279,
    "TOTAL PATIENTS": 283617
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 1,
    "AGE 0-4": 2010,
    "AGE 25-49": "X",
    "AGE 25-64": "2869",
    "AGE 5-24": 2450,
    "AGE 50-64": "X",
    "AGE 65": 712,
    ILITOTAL: 8041,
    "TOTAL PATIENTS": 369455
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 2,
    "AGE 0-4": 2188,
    "AGE 25-49": "X",
    "AGE 25-64": "2542",
    "AGE 5-24": 2982,
    "AGE 50-64": "X",
    "AGE 65": 611,
    ILITOTAL: 8323,
    "TOTAL PATIENTS": 378024
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 3,
    "AGE 0-4": 2199,
    "AGE 25-49": "X",
    "AGE 25-64": "2839",
    "AGE 5-24": 3682,
    "AGE 50-64": "X",
    "AGE 65": 608,
    ILITOTAL: 9328,
    "TOTAL PATIENTS": 368678
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 4,
    "AGE 0-4": 2747,
    "AGE 25-49": "X",
    "AGE 25-64": "3586",
    "AGE 5-24": 5364,
    "AGE 50-64": "X",
    "AGE 65": 725,
    ILITOTAL: 12422,
    "TOTAL PATIENTS": 405254
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 5,
    "AGE 0-4": 3086,
    "AGE 25-49": "X",
    "AGE 25-64": "4498",
    "AGE 5-24": 7650,
    "AGE 50-64": "X",
    "AGE 65": 958,
    ILITOTAL: 16192,
    "TOTAL PATIENTS": 406772
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 6,
    "AGE 0-4": 3626,
    "AGE 25-49": "X",
    "AGE 25-64": "5757",
    "AGE 5-24": 8854,
    "AGE 50-64": "X",
    "AGE 65": 1132,
    ILITOTAL: 19369,
    "TOTAL PATIENTS": 421461
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 7,
    "AGE 0-4": 3834,
    "AGE 25-49": "X",
    "AGE 25-64": "6515",
    "AGE 5-24": 8400,
    "AGE 50-64": "X",
    "AGE 65": 1182,
    ILITOTAL: 19931,
    "TOTAL PATIENTS": 419426
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 8,
    "AGE 0-4": 3720,
    "AGE 25-49": "X",
    "AGE 25-64": "5125",
    "AGE 5-24": 6759,
    "AGE 50-64": "X",
    "AGE 65": 1026,
    ILITOTAL: 16630,
    "TOTAL PATIENTS": 397883
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 9,
    "AGE 0-4": 2997,
    "AGE 25-49": "X",
    "AGE 25-64": "4058",
    "AGE 5-24": 5343,
    "AGE 50-64": "X",
    "AGE 65": 836,
    ILITOTAL: 13234,
    "TOTAL PATIENTS": 383196
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 10,
    "AGE 0-4": 2728,
    "AGE 25-49": "X",
    "AGE 25-64": "3634",
    "AGE 5-24": 4494,
    "AGE 50-64": "X",
    "AGE 65": 745,
    ILITOTAL: 11601,
    "TOTAL PATIENTS": 367292
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 11,
    "AGE 0-4": 2416,
    "AGE 25-49": "X",
    "AGE 25-64": "2969",
    "AGE 5-24": 3513,
    "AGE 50-64": "X",
    "AGE 65": 604,
    ILITOTAL: 9502,
    "TOTAL PATIENTS": 355454
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 12,
    "AGE 0-4": 2145,
    "AGE 25-49": "X",
    "AGE 25-64": "2434",
    "AGE 5-24": 2771,
    "AGE 50-64": "X",
    "AGE 65": 550,
    ILITOTAL: 7900,
    "TOTAL PATIENTS": 335940
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 13,
    "AGE 0-4": 1827,
    "AGE 25-49": "X",
    "AGE 25-64": "1979",
    "AGE 5-24": 2133,
    "AGE 50-64": "X",
    "AGE 65": 390,
    ILITOTAL: 6329,
    "TOTAL PATIENTS": 334438
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 14,
    "AGE 0-4": 1422,
    "AGE 25-49": "X",
    "AGE 25-64": "1327",
    "AGE 5-24": 1737,
    "AGE 50-64": "X",
    "AGE 65": 330,
    ILITOTAL: 4816,
    "TOTAL PATIENTS": 315823
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 15,
    "AGE 0-4": 1356,
    "AGE 25-49": "X",
    "AGE 25-64": "1169",
    "AGE 5-24": 1603,
    "AGE 50-64": "X",
    "AGE 65": 317,
    ILITOTAL: 4445,
    "TOTAL PATIENTS": 314948
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 16,
    "AGE 0-4": 1096,
    "AGE 25-49": "X",
    "AGE 25-64": "954",
    "AGE 5-24": 1469,
    "AGE 50-64": "X",
    "AGE 65": 306,
    ILITOTAL: 3825,
    "TOTAL PATIENTS": 305833
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 17,
    "AGE 0-4": 1117,
    "AGE 25-49": "X",
    "AGE 25-64": "894",
    "AGE 5-24": 1411,
    "AGE 50-64": "X",
    "AGE 65": 224,
    ILITOTAL: 3646,
    "TOTAL PATIENTS": 302065
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 18,
    "AGE 0-4": 903,
    "AGE 25-49": "X",
    "AGE 25-64": "762",
    "AGE 5-24": 1136,
    "AGE 50-64": "X",
    "AGE 65": 189,
    ILITOTAL: 2990,
    "TOTAL PATIENTS": 277120
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 19,
    "AGE 0-4": 979,
    "AGE 25-49": "X",
    "AGE 25-64": "710",
    "AGE 5-24": 1115,
    "AGE 50-64": "X",
    "AGE 65": 208,
    ILITOTAL: 3012,
    "TOTAL PATIENTS": 263009
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 20,
    "AGE 0-4": 805,
    "AGE 25-49": "X",
    "AGE 25-64": "600",
    "AGE 5-24": 926,
    "AGE 50-64": "X",
    "AGE 65": 200,
    ILITOTAL: 2531,
    "TOTAL PATIENTS": 238494
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 21,
    "AGE 0-4": 687,
    "AGE 25-49": "X",
    "AGE 25-64": "518",
    "AGE 5-24": 695,
    "AGE 50-64": "X",
    "AGE 65": 156,
    ILITOTAL: 2056,
    "TOTAL PATIENTS": 194550
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 22,
    "AGE 0-4": 693,
    "AGE 25-49": "X",
    "AGE 25-64": "568",
    "AGE 5-24": 678,
    "AGE 50-64": "X",
    "AGE 65": 160,
    ILITOTAL: 2099,
    "TOTAL PATIENTS": 167661
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 23,
    "AGE 0-4": 548,
    "AGE 25-49": "X",
    "AGE 25-64": "462",
    "AGE 5-24": 594,
    "AGE 50-64": "X",
    "AGE 65": 140,
    ILITOTAL: 1744,
    "TOTAL PATIENTS": 171960
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 24,
    "AGE 0-4": 573,
    "AGE 25-49": "X",
    "AGE 25-64": "409",
    "AGE 5-24": 507,
    "AGE 50-64": "X",
    "AGE 65": 125,
    ILITOTAL: 1614,
    "TOTAL PATIENTS": 154899
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 25,
    "AGE 0-4": 580,
    "AGE 25-49": "X",
    "AGE 25-64": "431",
    "AGE 5-24": 507,
    "AGE 50-64": "X",
    "AGE 65": 110,
    ILITOTAL: 1628,
    "TOTAL PATIENTS": 170645
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 26,
    "AGE 0-4": 497,
    "AGE 25-49": "X",
    "AGE 25-64": "326",
    "AGE 5-24": 452,
    "AGE 50-64": "X",
    "AGE 65": 84,
    ILITOTAL: 1359,
    "TOTAL PATIENTS": 160216
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 27,
    "AGE 0-4": 426,
    "AGE 25-49": "X",
    "AGE 25-64": "313",
    "AGE 5-24": 390,
    "AGE 50-64": "X",
    "AGE 65": 69,
    ILITOTAL: 1198,
    "TOTAL PATIENTS": 142302
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 28,
    "AGE 0-4": 389,
    "AGE 25-49": "X",
    "AGE 25-64": "323",
    "AGE 5-24": 361,
    "AGE 50-64": "X",
    "AGE 65": 75,
    ILITOTAL: 1148,
    "TOTAL PATIENTS": 157068
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 29,
    "AGE 0-4": 333,
    "AGE 25-49": "X",
    "AGE 25-64": "303",
    "AGE 5-24": 364,
    "AGE 50-64": "X",
    "AGE 65": 68,
    ILITOTAL: 1068,
    "TOTAL PATIENTS": 149699
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 30,
    "AGE 0-4": 328,
    "AGE 25-49": "X",
    "AGE 25-64": "279",
    "AGE 5-24": 327,
    "AGE 50-64": "X",
    "AGE 65": 56,
    ILITOTAL: 990,
    "TOTAL PATIENTS": 147612
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 31,
    "AGE 0-4": 331,
    "AGE 25-49": "X",
    "AGE 25-64": "267",
    "AGE 5-24": 326,
    "AGE 50-64": "X",
    "AGE 65": 58,
    ILITOTAL: 982,
    "TOTAL PATIENTS": 142468
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 32,
    "AGE 0-4": 319,
    "AGE 25-49": "X",
    "AGE 25-64": "297",
    "AGE 5-24": 350,
    "AGE 50-64": "X",
    "AGE 65": 57,
    ILITOTAL: 1023,
    "TOTAL PATIENTS": 145121
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 33,
    "AGE 0-4": 330,
    "AGE 25-49": "X",
    "AGE 25-64": "225",
    "AGE 5-24": 326,
    "AGE 50-64": "X",
    "AGE 65": 47,
    ILITOTAL: 928,
    "TOTAL PATIENTS": 150673
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 34,
    "AGE 0-4": 292,
    "AGE 25-49": "X",
    "AGE 25-64": "265",
    "AGE 5-24": 311,
    "AGE 50-64": "X",
    "AGE 65": 54,
    ILITOTAL: 922,
    "TOTAL PATIENTS": 151290
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 35,
    "AGE 0-4": 342,
    "AGE 25-49": "X",
    "AGE 25-64": "273",
    "AGE 5-24": 367,
    "AGE 50-64": "X",
    "AGE 65": 51,
    ILITOTAL: 1033,
    "TOTAL PATIENTS": 151854
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 36,
    "AGE 0-4": 338,
    "AGE 25-49": "X",
    "AGE 25-64": "264",
    "AGE 5-24": 396,
    "AGE 50-64": "X",
    "AGE 65": 63,
    ILITOTAL: 1061,
    "TOTAL PATIENTS": 136817
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 37,
    "AGE 0-4": 302,
    "AGE 25-49": "X",
    "AGE 25-64": "289",
    "AGE 5-24": 383,
    "AGE 50-64": "X",
    "AGE 65": 52,
    ILITOTAL: 1026,
    "TOTAL PATIENTS": 150127
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 38,
    "AGE 0-4": 368,
    "AGE 25-49": "X",
    "AGE 25-64": "285",
    "AGE 5-24": 516,
    "AGE 50-64": "X",
    "AGE 65": 50,
    ILITOTAL: 1219,
    "TOTAL PATIENTS": 156067
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 39,
    "AGE 0-4": 381,
    "AGE 25-49": "X",
    "AGE 25-64": "276",
    "AGE 5-24": 484,
    "AGE 50-64": "X",
    "AGE 65": 63,
    ILITOTAL: 1204,
    "TOTAL PATIENTS": 149205
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 40,
    "AGE 0-4": 1172,
    "AGE 25-49": "X",
    "AGE 25-64": "924",
    "AGE 5-24": 1256,
    "AGE 50-64": "X",
    "AGE 65": 234,
    ILITOTAL: 3586,
    "TOTAL PATIENTS": 333164
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 41,
    "AGE 0-4": 1285,
    "AGE 25-49": "X",
    "AGE 25-64": "853",
    "AGE 5-24": 1247,
    "AGE 50-64": "X",
    "AGE 65": 197,
    ILITOTAL: 3582,
    "TOTAL PATIENTS": 338343
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 42,
    "AGE 0-4": 1393,
    "AGE 25-49": "X",
    "AGE 25-64": "992",
    "AGE 5-24": 1525,
    "AGE 50-64": "X",
    "AGE 65": 212,
    ILITOTAL: 4122,
    "TOTAL PATIENTS": 369609
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 43,
    "AGE 0-4": 1439,
    "AGE 25-49": "X",
    "AGE 25-64": "997",
    "AGE 5-24": 1599,
    "AGE 50-64": "X",
    "AGE 65": 213,
    ILITOTAL: 4248,
    "TOTAL PATIENTS": 377999
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 44,
    "AGE 0-4": 1639,
    "AGE 25-49": "X",
    "AGE 25-64": "1190",
    "AGE 5-24": 1894,
    "AGE 50-64": "X",
    "AGE 65": 282,
    ILITOTAL: 5005,
    "TOTAL PATIENTS": 398840
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 45,
    "AGE 0-4": 1563,
    "AGE 25-49": "X",
    "AGE 25-64": "1251",
    "AGE 5-24": 1929,
    "AGE 50-64": "X",
    "AGE 65": 295,
    ILITOTAL: 5038,
    "TOTAL PATIENTS": 376924
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 46,
    "AGE 0-4": 1679,
    "AGE 25-49": "X",
    "AGE 25-64": "1331",
    "AGE 5-24": 1951,
    "AGE 50-64": "X",
    "AGE 65": 315,
    ILITOTAL: 5276,
    "TOTAL PATIENTS": 382697
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 47,
    "AGE 0-4": 1666,
    "AGE 25-49": "X",
    "AGE 25-64": "1249",
    "AGE 5-24": 1593,
    "AGE 50-64": "X",
    "AGE 65": 294,
    ILITOTAL: 4802,
    "TOTAL PATIENTS": 298578
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 48,
    "AGE 0-4": 1858,
    "AGE 25-49": "X",
    "AGE 25-64": "1583",
    "AGE 5-24": 2176,
    "AGE 50-64": "X",
    "AGE 65": 349,
    ILITOTAL: 5966,
    "TOTAL PATIENTS": 402264
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 49,
    "AGE 0-4": 1987,
    "AGE 25-49": "X",
    "AGE 25-64": "1534",
    "AGE 5-24": 2463,
    "AGE 50-64": "X",
    "AGE 65": 387,
    ILITOTAL: 6371,
    "TOTAL PATIENTS": 385248
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 50,
    "AGE 0-4": 2241,
    "AGE 25-49": "X",
    "AGE 25-64": "1997",
    "AGE 5-24": 3063,
    "AGE 50-64": "X",
    "AGE 65": 396,
    ILITOTAL: 7697,
    "TOTAL PATIENTS": 383548
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 51,
    "AGE 0-4": 2696,
    "AGE 25-49": "X",
    "AGE 25-64": "2293",
    "AGE 5-24": 3058,
    "AGE 50-64": "X",
    "AGE 65": 530,
    ILITOTAL: 8577,
    "TOTAL PATIENTS": 333921
  },
  {
    "REGION TYPE": "National",
    YEAR: 2005,
    WEEK: 52,
    "AGE 0-4": 2678,
    "AGE 25-49": "X",
    "AGE 25-64": "2882",
    "AGE 5-24": 2561,
    "AGE 50-64": "X",
    "AGE 65": 721,
    ILITOTAL: 8842,
    "TOTAL PATIENTS": 289638
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 1,
    "AGE 0-4": 2422,
    "AGE 25-49": "X",
    "AGE 25-64": "2817",
    "AGE 5-24": 2366,
    "AGE 50-64": "X",
    "AGE 65": 734,
    ILITOTAL: 8339,
    "TOTAL PATIENTS": 343871
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 2,
    "AGE 0-4": 2272,
    "AGE 25-49": "X",
    "AGE 25-64": "2155",
    "AGE 5-24": 2921,
    "AGE 50-64": "X",
    "AGE 65": 534,
    ILITOTAL: 7882,
    "TOTAL PATIENTS": 393716
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 3,
    "AGE 0-4": 2249,
    "AGE 25-49": "X",
    "AGE 25-64": "1999",
    "AGE 5-24": 3150,
    "AGE 50-64": "X",
    "AGE 65": 460,
    ILITOTAL: 7858,
    "TOTAL PATIENTS": 381699
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 4,
    "AGE 0-4": 2643,
    "AGE 25-49": "X",
    "AGE 25-64": "2281",
    "AGE 5-24": 3646,
    "AGE 50-64": "X",
    "AGE 65": 544,
    ILITOTAL: 9114,
    "TOTAL PATIENTS": 411882
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 5,
    "AGE 0-4": 2612,
    "AGE 25-49": "X",
    "AGE 25-64": "2288",
    "AGE 5-24": 4153,
    "AGE 50-64": "X",
    "AGE 65": 498,
    ILITOTAL: 9551,
    "TOTAL PATIENTS": 411291
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 6,
    "AGE 0-4": 2754,
    "AGE 25-49": "X",
    "AGE 25-64": "2543",
    "AGE 5-24": 4593,
    "AGE 50-64": "X",
    "AGE 65": 537,
    ILITOTAL: 10427,
    "TOTAL PATIENTS": 418286
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 7,
    "AGE 0-4": 2624,
    "AGE 25-49": "X",
    "AGE 25-64": "2992",
    "AGE 5-24": 4979,
    "AGE 50-64": "X",
    "AGE 65": 631,
    ILITOTAL: 11226,
    "TOTAL PATIENTS": 401661
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 8,
    "AGE 0-4": 2753,
    "AGE 25-49": "X",
    "AGE 25-64": "3073",
    "AGE 5-24": 5284,
    "AGE 50-64": "X",
    "AGE 65": 791,
    ILITOTAL: 11901,
    "TOTAL PATIENTS": 400827
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 9,
    "AGE 0-4": 2579,
    "AGE 25-49": "X",
    "AGE 25-64": "2989",
    "AGE 5-24": 5008,
    "AGE 50-64": "X",
    "AGE 65": 767,
    ILITOTAL: 11343,
    "TOTAL PATIENTS": 399459
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 10,
    "AGE 0-4": 2564,
    "AGE 25-49": "X",
    "AGE 25-64": "2913",
    "AGE 5-24": 5106,
    "AGE 50-64": "X",
    "AGE 65": 678,
    ILITOTAL: 11261,
    "TOTAL PATIENTS": 405365
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 11,
    "AGE 0-4": 2330,
    "AGE 25-49": "X",
    "AGE 25-64": "2231",
    "AGE 5-24": 4154,
    "AGE 50-64": "X",
    "AGE 65": 607,
    ILITOTAL: 9322,
    "TOTAL PATIENTS": 376971
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 12,
    "AGE 0-4": 1895,
    "AGE 25-49": "X",
    "AGE 25-64": "1919",
    "AGE 5-24": 3709,
    "AGE 50-64": "X",
    "AGE 65": 541,
    ILITOTAL: 8064,
    "TOTAL PATIENTS": 369804
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 13,
    "AGE 0-4": 1697,
    "AGE 25-49": "X",
    "AGE 25-64": "1745",
    "AGE 5-24": 3393,
    "AGE 50-64": "X",
    "AGE 65": 478,
    ILITOTAL: 7313,
    "TOTAL PATIENTS": 362605
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 14,
    "AGE 0-4": 1437,
    "AGE 25-49": "X",
    "AGE 25-64": "1299",
    "AGE 5-24": 2660,
    "AGE 50-64": "X",
    "AGE 65": 342,
    ILITOTAL: 5738,
    "TOTAL PATIENTS": 349662
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 15,
    "AGE 0-4": 1181,
    "AGE 25-49": "X",
    "AGE 25-64": "1067",
    "AGE 5-24": 2014,
    "AGE 50-64": "X",
    "AGE 65": 285,
    ILITOTAL: 4547,
    "TOTAL PATIENTS": 334760
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 16,
    "AGE 0-4": 959,
    "AGE 25-49": "X",
    "AGE 25-64": "873",
    "AGE 5-24": 1479,
    "AGE 50-64": "X",
    "AGE 65": 239,
    ILITOTAL: 3550,
    "TOTAL PATIENTS": 310641
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 17,
    "AGE 0-4": 836,
    "AGE 25-49": "X",
    "AGE 25-64": "779",
    "AGE 5-24": 1382,
    "AGE 50-64": "X",
    "AGE 65": 180,
    ILITOTAL: 3177,
    "TOTAL PATIENTS": 305389
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 18,
    "AGE 0-4": 745,
    "AGE 25-49": "X",
    "AGE 25-64": "637",
    "AGE 5-24": 1208,
    "AGE 50-64": "X",
    "AGE 65": 190,
    ILITOTAL: 2780,
    "TOTAL PATIENTS": 288278
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 19,
    "AGE 0-4": 745,
    "AGE 25-49": "X",
    "AGE 25-64": "621",
    "AGE 5-24": 1039,
    "AGE 50-64": "X",
    "AGE 65": 187,
    ILITOTAL: 2592,
    "TOTAL PATIENTS": 276338
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 20,
    "AGE 0-4": 715,
    "AGE 25-49": "X",
    "AGE 25-64": "582",
    "AGE 5-24": 969,
    "AGE 50-64": "X",
    "AGE 65": 162,
    ILITOTAL: 2428,
    "TOTAL PATIENTS": 256267
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 21,
    "AGE 0-4": 699,
    "AGE 25-49": "X",
    "AGE 25-64": "452",
    "AGE 5-24": 764,
    "AGE 50-64": "X",
    "AGE 65": 146,
    ILITOTAL: 2061,
    "TOTAL PATIENTS": 231075
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 22,
    "AGE 0-4": 572,
    "AGE 25-49": "X",
    "AGE 25-64": "404",
    "AGE 5-24": 561,
    "AGE 50-64": "X",
    "AGE 65": 108,
    ILITOTAL: 1645,
    "TOTAL PATIENTS": 190252
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 23,
    "AGE 0-4": 754,
    "AGE 25-49": "X",
    "AGE 25-64": "564",
    "AGE 5-24": 626,
    "AGE 50-64": "X",
    "AGE 65": 131,
    ILITOTAL: 2075,
    "TOTAL PATIENTS": 213847
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 24,
    "AGE 0-4": 514,
    "AGE 25-49": "X",
    "AGE 25-64": "388",
    "AGE 5-24": 447,
    "AGE 50-64": "X",
    "AGE 65": 81,
    ILITOTAL: 1430,
    "TOTAL PATIENTS": 169353
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 25,
    "AGE 0-4": 463,
    "AGE 25-49": "X",
    "AGE 25-64": "328",
    "AGE 5-24": 409,
    "AGE 50-64": "X",
    "AGE 65": 100,
    ILITOTAL: 1300,
    "TOTAL PATIENTS": 167770
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 26,
    "AGE 0-4": 466,
    "AGE 25-49": "X",
    "AGE 25-64": "323",
    "AGE 5-24": 390,
    "AGE 50-64": "X",
    "AGE 65": 92,
    ILITOTAL: 1271,
    "TOTAL PATIENTS": 154741
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 27,
    "AGE 0-4": 437,
    "AGE 25-49": "X",
    "AGE 25-64": "305",
    "AGE 5-24": 402,
    "AGE 50-64": "X",
    "AGE 65": 71,
    ILITOTAL: 1215,
    "TOTAL PATIENTS": 139216
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 28,
    "AGE 0-4": 549,
    "AGE 25-49": "X",
    "AGE 25-64": "449",
    "AGE 5-24": 511,
    "AGE 50-64": "X",
    "AGE 65": 108,
    ILITOTAL: 1617,
    "TOTAL PATIENTS": 175259
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 29,
    "AGE 0-4": 541,
    "AGE 25-49": "X",
    "AGE 25-64": "460",
    "AGE 5-24": 440,
    "AGE 50-64": "X",
    "AGE 65": 112,
    ILITOTAL: 1553,
    "TOTAL PATIENTS": 172654
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 30,
    "AGE 0-4": 502,
    "AGE 25-49": "X",
    "AGE 25-64": "422",
    "AGE 5-24": 403,
    "AGE 50-64": "X",
    "AGE 65": 128,
    ILITOTAL: 1455,
    "TOTAL PATIENTS": 172581
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 31,
    "AGE 0-4": 508,
    "AGE 25-49": "X",
    "AGE 25-64": "402",
    "AGE 5-24": 430,
    "AGE 50-64": "X",
    "AGE 65": 88,
    ILITOTAL: 1428,
    "TOTAL PATIENTS": 161937
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 32,
    "AGE 0-4": 473,
    "AGE 25-49": "X",
    "AGE 25-64": "383",
    "AGE 5-24": 435,
    "AGE 50-64": "X",
    "AGE 65": 82,
    ILITOTAL: 1373,
    "TOTAL PATIENTS": 168024
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 33,
    "AGE 0-4": 510,
    "AGE 25-49": "X",
    "AGE 25-64": "390",
    "AGE 5-24": 466,
    "AGE 50-64": "X",
    "AGE 65": 91,
    ILITOTAL: 1457,
    "TOTAL PATIENTS": 167183
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 34,
    "AGE 0-4": 404,
    "AGE 25-49": "X",
    "AGE 25-64": "279",
    "AGE 5-24": 379,
    "AGE 50-64": "X",
    "AGE 65": 76,
    ILITOTAL: 1138,
    "TOTAL PATIENTS": 154071
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 35,
    "AGE 0-4": 398,
    "AGE 25-49": "X",
    "AGE 25-64": "292",
    "AGE 5-24": 457,
    "AGE 50-64": "X",
    "AGE 65": 77,
    ILITOTAL: 1224,
    "TOTAL PATIENTS": 153390
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 36,
    "AGE 0-4": 492,
    "AGE 25-49": "X",
    "AGE 25-64": "396",
    "AGE 5-24": 506,
    "AGE 50-64": "X",
    "AGE 65": 69,
    ILITOTAL: 1463,
    "TOTAL PATIENTS": 144289
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 37,
    "AGE 0-4": 446,
    "AGE 25-49": "X",
    "AGE 25-64": "361",
    "AGE 5-24": 521,
    "AGE 50-64": "X",
    "AGE 65": 78,
    ILITOTAL: 1406,
    "TOTAL PATIENTS": 159603
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 38,
    "AGE 0-4": 511,
    "AGE 25-49": "X",
    "AGE 25-64": "362",
    "AGE 5-24": 534,
    "AGE 50-64": "X",
    "AGE 65": 80,
    ILITOTAL: 1487,
    "TOTAL PATIENTS": 157627
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 39,
    "AGE 0-4": 476,
    "AGE 25-49": "X",
    "AGE 25-64": "364",
    "AGE 5-24": 512,
    "AGE 50-64": "X",
    "AGE 65": 81,
    ILITOTAL: 1433,
    "TOTAL PATIENTS": 160732
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 40,
    "AGE 0-4": 1434,
    "AGE 25-49": "X",
    "AGE 25-64": "1116",
    "AGE 5-24": 1699,
    "AGE 50-64": "X",
    "AGE 65": 264,
    ILITOTAL: 4513,
    "TOTAL PATIENTS": 375076
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 41,
    "AGE 0-4": 1278,
    "AGE 25-49": "X",
    "AGE 25-64": "992",
    "AGE 5-24": 1602,
    "AGE 50-64": "X",
    "AGE 65": 200,
    ILITOTAL: 4072,
    "TOTAL PATIENTS": 384920
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 42,
    "AGE 0-4": 1543,
    "AGE 25-49": "X",
    "AGE 25-64": "1099",
    "AGE 5-24": 1830,
    "AGE 50-64": "X",
    "AGE 65": 265,
    ILITOTAL: 4737,
    "TOTAL PATIENTS": 419005
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 43,
    "AGE 0-4": 1582,
    "AGE 25-49": "X",
    "AGE 25-64": "1086",
    "AGE 5-24": 1996,
    "AGE 50-64": "X",
    "AGE 65": 224,
    ILITOTAL: 4888,
    "TOTAL PATIENTS": 434287
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 44,
    "AGE 0-4": 1672,
    "AGE 25-49": "X",
    "AGE 25-64": "1157",
    "AGE 5-24": 2270,
    "AGE 50-64": "X",
    "AGE 65": 281,
    ILITOTAL: 5380,
    "TOTAL PATIENTS": 445334
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 45,
    "AGE 0-4": 2112,
    "AGE 25-49": "X",
    "AGE 25-64": "1320",
    "AGE 5-24": 2393,
    "AGE 50-64": "X",
    "AGE 65": 314,
    ILITOTAL: 6139,
    "TOTAL PATIENTS": 454901
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 46,
    "AGE 0-4": 2355,
    "AGE 25-49": "X",
    "AGE 25-64": "1342",
    "AGE 5-24": 2681,
    "AGE 50-64": "X",
    "AGE 65": 290,
    ILITOTAL: 6668,
    "TOTAL PATIENTS": 453945
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 47,
    "AGE 0-4": 2188,
    "AGE 25-49": "X",
    "AGE 25-64": "1409",
    "AGE 5-24": 2202,
    "AGE 50-64": "X",
    "AGE 65": 357,
    ILITOTAL: 6156,
    "TOTAL PATIENTS": 336822
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 48,
    "AGE 0-4": 2573,
    "AGE 25-49": "X",
    "AGE 25-64": "1774",
    "AGE 5-24": 2792,
    "AGE 50-64": "X",
    "AGE 65": 391,
    ILITOTAL: 7530,
    "TOTAL PATIENTS": 452089
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 49,
    "AGE 0-4": 2643,
    "AGE 25-49": "X",
    "AGE 25-64": "1804",
    "AGE 5-24": 3244,
    "AGE 50-64": "X",
    "AGE 65": 431,
    ILITOTAL: 8122,
    "TOTAL PATIENTS": 436741
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 50,
    "AGE 0-4": 3270,
    "AGE 25-49": "X",
    "AGE 25-64": "2177",
    "AGE 5-24": 4470,
    "AGE 50-64": "X",
    "AGE 65": 479,
    ILITOTAL: 10396,
    "TOTAL PATIENTS": 435177
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 51,
    "AGE 0-4": 3387,
    "AGE 25-49": "X",
    "AGE 25-64": "2237",
    "AGE 5-24": 4065,
    "AGE 50-64": "X",
    "AGE 65": 503,
    ILITOTAL: 10192,
    "TOTAL PATIENTS": 365334
  },
  {
    "REGION TYPE": "National",
    YEAR: 2006,
    WEEK: 52,
    "AGE 0-4": 3243,
    "AGE 25-49": "X",
    "AGE 25-64": "2216",
    "AGE 5-24": 2868,
    "AGE 50-64": "X",
    "AGE 65": 586,
    ILITOTAL: 8913,
    "TOTAL PATIENTS": 286087
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 1,
    "AGE 0-4": 2927,
    "AGE 25-49": "X",
    "AGE 25-64": "2394",
    "AGE 5-24": 2481,
    "AGE 50-64": "X",
    "AGE 65": 584,
    ILITOTAL: 8386,
    "TOTAL PATIENTS": 369521
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 2,
    "AGE 0-4": 2507,
    "AGE 25-49": "X",
    "AGE 25-64": "2018",
    "AGE 5-24": 2756,
    "AGE 50-64": "X",
    "AGE 65": 480,
    ILITOTAL: 7761,
    "TOTAL PATIENTS": 416464
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 3,
    "AGE 0-4": 2548,
    "AGE 25-49": "X",
    "AGE 25-64": "1701",
    "AGE 5-24": 3248,
    "AGE 50-64": "X",
    "AGE 65": 412,
    ILITOTAL: 7909,
    "TOTAL PATIENTS": 395477
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 4,
    "AGE 0-4": 3410,
    "AGE 25-49": "X",
    "AGE 25-64": "2257",
    "AGE 5-24": 4684,
    "AGE 50-64": "X",
    "AGE 65": 537,
    ILITOTAL: 10888,
    "TOTAL PATIENTS": 446119
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 5,
    "AGE 0-4": 3456,
    "AGE 25-49": "X",
    "AGE 25-64": "2559",
    "AGE 5-24": 5648,
    "AGE 50-64": "X",
    "AGE 65": 457,
    ILITOTAL: 12120,
    "TOTAL PATIENTS": 428241
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 6,
    "AGE 0-4": 3840,
    "AGE 25-49": "X",
    "AGE 25-64": "2910",
    "AGE 5-24": 6995,
    "AGE 50-64": "X",
    "AGE 65": 452,
    ILITOTAL: 14197,
    "TOTAL PATIENTS": 454533
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 7,
    "AGE 0-4": 3879,
    "AGE 25-49": "X",
    "AGE 25-64": "2955",
    "AGE 5-24": 6668,
    "AGE 50-64": "X",
    "AGE 65": 529,
    ILITOTAL: 14031,
    "TOTAL PATIENTS": 429057
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 8,
    "AGE 0-4": 3728,
    "AGE 25-49": "X",
    "AGE 25-64": "3175",
    "AGE 5-24": 6537,
    "AGE 50-64": "X",
    "AGE 65": 608,
    ILITOTAL: 14048,
    "TOTAL PATIENTS": 442099
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 9,
    "AGE 0-4": 3016,
    "AGE 25-49": "X",
    "AGE 25-64": "2778",
    "AGE 5-24": 5429,
    "AGE 50-64": "X",
    "AGE 65": 578,
    ILITOTAL: 11801,
    "TOTAL PATIENTS": 433281
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 10,
    "AGE 0-4": 2798,
    "AGE 25-49": "X",
    "AGE 25-64": "2533",
    "AGE 5-24": 4937,
    "AGE 50-64": "X",
    "AGE 65": 447,
    ILITOTAL: 10715,
    "TOTAL PATIENTS": 428255
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 11,
    "AGE 0-4": 2668,
    "AGE 25-49": "X",
    "AGE 25-64": "2426",
    "AGE 5-24": 4031,
    "AGE 50-64": "X",
    "AGE 65": 472,
    ILITOTAL: 9597,
    "TOTAL PATIENTS": 395394
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 12,
    "AGE 0-4": 2049,
    "AGE 25-49": "X",
    "AGE 25-64": "1857",
    "AGE 5-24": 3307,
    "AGE 50-64": "X",
    "AGE 65": 349,
    ILITOTAL: 7562,
    "TOTAL PATIENTS": 385735
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 13,
    "AGE 0-4": 1664,
    "AGE 25-49": "X",
    "AGE 25-64": "1625",
    "AGE 5-24": 2508,
    "AGE 50-64": "X",
    "AGE 65": 351,
    ILITOTAL: 6148,
    "TOTAL PATIENTS": 386327
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 14,
    "AGE 0-4": 1445,
    "AGE 25-49": "X",
    "AGE 25-64": "1379",
    "AGE 5-24": 1803,
    "AGE 50-64": "X",
    "AGE 65": 331,
    ILITOTAL: 4958,
    "TOTAL PATIENTS": 361955
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 15,
    "AGE 0-4": 1429,
    "AGE 25-49": "X",
    "AGE 25-64": "1274",
    "AGE 5-24": 1821,
    "AGE 50-64": "X",
    "AGE 65": 345,
    ILITOTAL: 4869,
    "TOTAL PATIENTS": 357183
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 16,
    "AGE 0-4": 1257,
    "AGE 25-49": "X",
    "AGE 25-64": "1112",
    "AGE 5-24": 1523,
    "AGE 50-64": "X",
    "AGE 65": 287,
    ILITOTAL: 4179,
    "TOTAL PATIENTS": 356055
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 17,
    "AGE 0-4": 1152,
    "AGE 25-49": "X",
    "AGE 25-64": "937",
    "AGE 5-24": 1386,
    "AGE 50-64": "X",
    "AGE 65": 220,
    ILITOTAL: 3695,
    "TOTAL PATIENTS": 347413
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 18,
    "AGE 0-4": 969,
    "AGE 25-49": "X",
    "AGE 25-64": "755",
    "AGE 5-24": 1143,
    "AGE 50-64": "X",
    "AGE 65": 210,
    ILITOTAL: 3077,
    "TOTAL PATIENTS": 317311
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 19,
    "AGE 0-4": 917,
    "AGE 25-49": "X",
    "AGE 25-64": "713",
    "AGE 5-24": 1055,
    "AGE 50-64": "X",
    "AGE 65": 175,
    ILITOTAL: 2860,
    "TOTAL PATIENTS": 296262
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 20,
    "AGE 0-4": 815,
    "AGE 25-49": "X",
    "AGE 25-64": "590",
    "AGE 5-24": 861,
    "AGE 50-64": "X",
    "AGE 65": 176,
    ILITOTAL: 2442,
    "TOTAL PATIENTS": 285031
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 21,
    "AGE 0-4": 761,
    "AGE 25-49": "X",
    "AGE 25-64": "561",
    "AGE 5-24": 785,
    "AGE 50-64": "X",
    "AGE 65": 136,
    ILITOTAL: 2243,
    "TOTAL PATIENTS": 259803
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 22,
    "AGE 0-4": 722,
    "AGE 25-49": "X",
    "AGE 25-64": "554",
    "AGE 5-24": 652,
    "AGE 50-64": "X",
    "AGE 65": 130,
    ILITOTAL: 2058,
    "TOTAL PATIENTS": 220020
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 23,
    "AGE 0-4": 628,
    "AGE 25-49": "X",
    "AGE 25-64": "422",
    "AGE 5-24": 510,
    "AGE 50-64": "X",
    "AGE 65": 119,
    ILITOTAL: 1679,
    "TOTAL PATIENTS": 225197
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 24,
    "AGE 0-4": 598,
    "AGE 25-49": "X",
    "AGE 25-64": "413",
    "AGE 5-24": 469,
    "AGE 50-64": "X",
    "AGE 65": 134,
    ILITOTAL: 1614,
    "TOTAL PATIENTS": 217982
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 25,
    "AGE 0-4": 521,
    "AGE 25-49": "X",
    "AGE 25-64": "394",
    "AGE 5-24": 441,
    "AGE 50-64": "X",
    "AGE 65": 100,
    ILITOTAL: 1456,
    "TOTAL PATIENTS": 216378
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 26,
    "AGE 0-4": 514,
    "AGE 25-49": "X",
    "AGE 25-64": "431",
    "AGE 5-24": 408,
    "AGE 50-64": "X",
    "AGE 65": 102,
    ILITOTAL: 1455,
    "TOTAL PATIENTS": 218376
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 27,
    "AGE 0-4": 394,
    "AGE 25-49": "X",
    "AGE 25-64": "313",
    "AGE 5-24": 360,
    "AGE 50-64": "X",
    "AGE 65": 102,
    ILITOTAL: 1169,
    "TOTAL PATIENTS": 176387
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 28,
    "AGE 0-4": 366,
    "AGE 25-49": "X",
    "AGE 25-64": "296",
    "AGE 5-24": 372,
    "AGE 50-64": "X",
    "AGE 65": 52,
    ILITOTAL: 1086,
    "TOTAL PATIENTS": 199040
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 29,
    "AGE 0-4": 446,
    "AGE 25-49": "X",
    "AGE 25-64": "335",
    "AGE 5-24": 345,
    "AGE 50-64": "X",
    "AGE 65": 85,
    ILITOTAL: 1211,
    "TOTAL PATIENTS": 206574
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 30,
    "AGE 0-4": 477,
    "AGE 25-49": "X",
    "AGE 25-64": "391",
    "AGE 5-24": 392,
    "AGE 50-64": "X",
    "AGE 65": 96,
    ILITOTAL: 1356,
    "TOTAL PATIENTS": 205241
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 31,
    "AGE 0-4": 321,
    "AGE 25-49": "X",
    "AGE 25-64": "344",
    "AGE 5-24": 311,
    "AGE 50-64": "X",
    "AGE 65": 61,
    ILITOTAL: 1037,
    "TOTAL PATIENTS": 194161
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 32,
    "AGE 0-4": 389,
    "AGE 25-49": "X",
    "AGE 25-64": "320",
    "AGE 5-24": 385,
    "AGE 50-64": "X",
    "AGE 65": 78,
    ILITOTAL: 1172,
    "TOTAL PATIENTS": 200154
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 33,
    "AGE 0-4": 439,
    "AGE 25-49": "X",
    "AGE 25-64": "338",
    "AGE 5-24": 411,
    "AGE 50-64": "X",
    "AGE 65": 95,
    ILITOTAL: 1283,
    "TOTAL PATIENTS": 207580
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 34,
    "AGE 0-4": 495,
    "AGE 25-49": "X",
    "AGE 25-64": "408",
    "AGE 5-24": 457,
    "AGE 50-64": "X",
    "AGE 65": 88,
    ILITOTAL: 1448,
    "TOTAL PATIENTS": 210629
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 35,
    "AGE 0-4": 502,
    "AGE 25-49": "X",
    "AGE 25-64": "416",
    "AGE 5-24": 500,
    "AGE 50-64": "X",
    "AGE 65": 108,
    ILITOTAL: 1526,
    "TOTAL PATIENTS": 213219
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 36,
    "AGE 0-4": 519,
    "AGE 25-49": "X",
    "AGE 25-64": "417",
    "AGE 5-24": 545,
    "AGE 50-64": "X",
    "AGE 65": 73,
    ILITOTAL: 1554,
    "TOTAL PATIENTS": 187384
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 37,
    "AGE 0-4": 496,
    "AGE 25-49": "X",
    "AGE 25-64": "417",
    "AGE 5-24": 682,
    "AGE 50-64": "X",
    "AGE 65": 99,
    ILITOTAL: 1694,
    "TOTAL PATIENTS": 211509
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 38,
    "AGE 0-4": 609,
    "AGE 25-49": "X",
    "AGE 25-64": "502",
    "AGE 5-24": 681,
    "AGE 50-64": "X",
    "AGE 65": 121,
    ILITOTAL: 1913,
    "TOTAL PATIENTS": 208278
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 39,
    "AGE 0-4": 729,
    "AGE 25-49": "X",
    "AGE 25-64": "583",
    "AGE 5-24": 788,
    "AGE 50-64": "X",
    "AGE 65": 128,
    ILITOTAL: 2228,
    "TOTAL PATIENTS": 273623
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 40,
    "AGE 0-4": 2187,
    "AGE 25-49": "X",
    "AGE 25-64": "1167",
    "AGE 5-24": 1997,
    "AGE 50-64": "X",
    "AGE 65": 290,
    ILITOTAL: 5641,
    "TOTAL PATIENTS": 526227
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 41,
    "AGE 0-4": 2387,
    "AGE 25-49": "X",
    "AGE 25-64": "1321",
    "AGE 5-24": 2433,
    "AGE 50-64": "X",
    "AGE 65": 303,
    ILITOTAL: 6444,
    "TOTAL PATIENTS": 529126
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 42,
    "AGE 0-4": 2583,
    "AGE 25-49": "X",
    "AGE 25-64": "1455",
    "AGE 5-24": 2551,
    "AGE 50-64": "X",
    "AGE 65": 352,
    ILITOTAL: 6941,
    "TOTAL PATIENTS": 557172
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 43,
    "AGE 0-4": 2871,
    "AGE 25-49": "X",
    "AGE 25-64": "1400",
    "AGE 5-24": 2788,
    "AGE 50-64": "X",
    "AGE 65": 375,
    ILITOTAL: 7434,
    "TOTAL PATIENTS": 546680
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 44,
    "AGE 0-4": 3074,
    "AGE 25-49": "X",
    "AGE 25-64": "1475",
    "AGE 5-24": 2998,
    "AGE 50-64": "X",
    "AGE 65": 368,
    ILITOTAL: 7915,
    "TOTAL PATIENTS": 547104
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 45,
    "AGE 0-4": 3398,
    "AGE 25-49": "X",
    "AGE 25-64": "1609",
    "AGE 5-24": 3303,
    "AGE 50-64": "X",
    "AGE 65": 377,
    ILITOTAL: 8687,
    "TOTAL PATIENTS": 566717
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 46,
    "AGE 0-4": 3563,
    "AGE 25-49": "X",
    "AGE 25-64": "1780",
    "AGE 5-24": 3290,
    "AGE 50-64": "X",
    "AGE 65": 471,
    ILITOTAL: 9104,
    "TOTAL PATIENTS": 546284
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 47,
    "AGE 0-4": 3651,
    "AGE 25-49": "X",
    "AGE 25-64": "1812",
    "AGE 5-24": 2631,
    "AGE 50-64": "X",
    "AGE 65": 476,
    ILITOTAL: 8570,
    "TOTAL PATIENTS": 433951
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 48,
    "AGE 0-4": 3679,
    "AGE 25-49": "X",
    "AGE 25-64": "1921",
    "AGE 5-24": 3158,
    "AGE 50-64": "X",
    "AGE 65": 413,
    ILITOTAL: 9171,
    "TOTAL PATIENTS": 548159
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 49,
    "AGE 0-4": 3365,
    "AGE 25-49": "X",
    "AGE 25-64": "1772",
    "AGE 5-24": 2907,
    "AGE 50-64": "X",
    "AGE 65": 392,
    ILITOTAL: 8436,
    "TOTAL PATIENTS": 516263
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 50,
    "AGE 0-4": 3298,
    "AGE 25-49": "X",
    "AGE 25-64": "1697",
    "AGE 5-24": 2694,
    "AGE 50-64": "X",
    "AGE 65": 402,
    ILITOTAL: 8091,
    "TOTAL PATIENTS": 463416
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 51,
    "AGE 0-4": 3580,
    "AGE 25-49": "X",
    "AGE 25-64": "1987",
    "AGE 5-24": 2724,
    "AGE 50-64": "X",
    "AGE 65": 459,
    ILITOTAL: 8750,
    "TOTAL PATIENTS": 451862
  },
  {
    "REGION TYPE": "National",
    YEAR: 2007,
    WEEK: 52,
    "AGE 0-4": 3848,
    "AGE 25-49": "X",
    "AGE 25-64": "2184",
    "AGE 5-24": 2348,
    "AGE 50-64": "X",
    "AGE 65": 522,
    ILITOTAL: 8902,
    "TOTAL PATIENTS": 357646
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 1,
    "AGE 0-4": 3737,
    "AGE 25-49": "X",
    "AGE 25-64": "2731",
    "AGE 5-24": 2568,
    "AGE 50-64": "X",
    "AGE 65": 670,
    ILITOTAL: 9706,
    "TOTAL PATIENTS": 430603
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 2,
    "AGE 0-4": 3393,
    "AGE 25-49": "X",
    "AGE 25-64": "3262",
    "AGE 5-24": 3644,
    "AGE 50-64": "X",
    "AGE 65": 816,
    ILITOTAL: 11115,
    "TOTAL PATIENTS": 531444
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 3,
    "AGE 0-4": 3664,
    "AGE 25-49": "X",
    "AGE 25-64": "3038",
    "AGE 5-24": 4900,
    "AGE 50-64": "X",
    "AGE 65": 595,
    ILITOTAL: 12197,
    "TOTAL PATIENTS": 516966
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 4,
    "AGE 0-4": 4289,
    "AGE 25-49": "X",
    "AGE 25-64": "4499",
    "AGE 5-24": 7661,
    "AGE 50-64": "X",
    "AGE 65": 722,
    ILITOTAL: 17171,
    "TOTAL PATIENTS": 516683
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 5,
    "AGE 0-4": 5222,
    "AGE 25-49": "X",
    "AGE 25-64": "6595",
    "AGE 5-24": 11974,
    "AGE 50-64": "X",
    "AGE 65": 1021,
    ILITOTAL: 24812,
    "TOTAL PATIENTS": 559609
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 6,
    "AGE 0-4": 6059,
    "AGE 25-49": "X",
    "AGE 25-64": "9212",
    "AGE 5-24": 15323,
    "AGE 50-64": "X",
    "AGE 65": 1302,
    ILITOTAL: 31896,
    "TOTAL PATIENTS": 596692
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 7,
    "AGE 0-4": 6244,
    "AGE 25-49": "X",
    "AGE 25-64": "9487",
    "AGE 5-24": 14336,
    "AGE 50-64": "X",
    "AGE 65": 1558,
    ILITOTAL: 31625,
    "TOTAL PATIENTS": 583210
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 8,
    "AGE 0-4": 5922,
    "AGE 25-49": "X",
    "AGE 25-64": "9812",
    "AGE 5-24": 12783,
    "AGE 50-64": "X",
    "AGE 65": 1728,
    ILITOTAL: 30245,
    "TOTAL PATIENTS": 570334
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 9,
    "AGE 0-4": 4978,
    "AGE 25-49": "X",
    "AGE 25-64": "8583",
    "AGE 5-24": 9958,
    "AGE 50-64": "X",
    "AGE 65": 1508,
    ILITOTAL: 25027,
    "TOTAL PATIENTS": 589626
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 10,
    "AGE 0-4": 4420,
    "AGE 25-49": "X",
    "AGE 25-64": "6781",
    "AGE 5-24": 7849,
    "AGE 50-64": "X",
    "AGE 65": 1204,
    ILITOTAL: 20254,
    "TOTAL PATIENTS": 558269
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 11,
    "AGE 0-4": 3878,
    "AGE 25-49": "X",
    "AGE 25-64": "5676",
    "AGE 5-24": 6112,
    "AGE 50-64": "X",
    "AGE 65": 1048,
    ILITOTAL: 16714,
    "TOTAL PATIENTS": 550776
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 12,
    "AGE 0-4": 3153,
    "AGE 25-49": "X",
    "AGE 25-64": "4520",
    "AGE 5-24": 4493,
    "AGE 50-64": "X",
    "AGE 65": 874,
    ILITOTAL: 13040,
    "TOTAL PATIENTS": 514205
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 13,
    "AGE 0-4": 2689,
    "AGE 25-49": "X",
    "AGE 25-64": "3496",
    "AGE 5-24": 3395,
    "AGE 50-64": "X",
    "AGE 65": 796,
    ILITOTAL: 10376,
    "TOTAL PATIENTS": 504350
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 14,
    "AGE 0-4": 2372,
    "AGE 25-49": "X",
    "AGE 25-64": "2872",
    "AGE 5-24": 2697,
    "AGE 50-64": "X",
    "AGE 65": 642,
    ILITOTAL: 8583,
    "TOTAL PATIENTS": 492850
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 15,
    "AGE 0-4": 2045,
    "AGE 25-49": "X",
    "AGE 25-64": "2160",
    "AGE 5-24": 2354,
    "AGE 50-64": "X",
    "AGE 65": 486,
    ILITOTAL: 7045,
    "TOTAL PATIENTS": 500881
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 16,
    "AGE 0-4": 1857,
    "AGE 25-49": "X",
    "AGE 25-64": "1802",
    "AGE 5-24": 2013,
    "AGE 50-64": "X",
    "AGE 65": 407,
    ILITOTAL: 6079,
    "TOTAL PATIENTS": 479187
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 17,
    "AGE 0-4": 1572,
    "AGE 25-49": "X",
    "AGE 25-64": "1345",
    "AGE 5-24": 1713,
    "AGE 50-64": "X",
    "AGE 65": 323,
    ILITOTAL: 4953,
    "TOTAL PATIENTS": 459808
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 18,
    "AGE 0-4": 1466,
    "AGE 25-49": "X",
    "AGE 25-64": "1107",
    "AGE 5-24": 1416,
    "AGE 50-64": "X",
    "AGE 65": 235,
    ILITOTAL: 4224,
    "TOTAL PATIENTS": 425187
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 19,
    "AGE 0-4": 1356,
    "AGE 25-49": "X",
    "AGE 25-64": "1066",
    "AGE 5-24": 1381,
    "AGE 50-64": "X",
    "AGE 65": 208,
    ILITOTAL: 4011,
    "TOTAL PATIENTS": 440183
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 20,
    "AGE 0-4": 1439,
    "AGE 25-49": "X",
    "AGE 25-64": "980",
    "AGE 5-24": 1274,
    "AGE 50-64": "X",
    "AGE 65": 211,
    ILITOTAL: 3904,
    "TOTAL PATIENTS": 401601
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 21,
    "AGE 0-4": 1393,
    "AGE 25-49": "X",
    "AGE 25-64": "926",
    "AGE 5-24": 1116,
    "AGE 50-64": "X",
    "AGE 65": 211,
    ILITOTAL: 3646,
    "TOTAL PATIENTS": 367075
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 22,
    "AGE 0-4": 1473,
    "AGE 25-49": "X",
    "AGE 25-64": "1004",
    "AGE 5-24": 1083,
    "AGE 50-64": "X",
    "AGE 65": 243,
    ILITOTAL: 3803,
    "TOTAL PATIENTS": 348477
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 23,
    "AGE 0-4": 1159,
    "AGE 25-49": "X",
    "AGE 25-64": "729",
    "AGE 5-24": 906,
    "AGE 50-64": "X",
    "AGE 65": 139,
    ILITOTAL: 2933,
    "TOTAL PATIENTS": 330127
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 24,
    "AGE 0-4": 1113,
    "AGE 25-49": "X",
    "AGE 25-64": "720",
    "AGE 5-24": 886,
    "AGE 50-64": "X",
    "AGE 65": 187,
    ILITOTAL: 2906,
    "TOTAL PATIENTS": 327366
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 25,
    "AGE 0-4": 1115,
    "AGE 25-49": "X",
    "AGE 25-64": "712",
    "AGE 5-24": 855,
    "AGE 50-64": "X",
    "AGE 65": 160,
    ILITOTAL: 2842,
    "TOTAL PATIENTS": 321789
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 26,
    "AGE 0-4": 937,
    "AGE 25-49": "X",
    "AGE 25-64": "654",
    "AGE 5-24": 810,
    "AGE 50-64": "X",
    "AGE 65": 133,
    ILITOTAL: 2534,
    "TOTAL PATIENTS": 306499
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 27,
    "AGE 0-4": 913,
    "AGE 25-49": "X",
    "AGE 25-64": "575",
    "AGE 5-24": 762,
    "AGE 50-64": "X",
    "AGE 65": 155,
    ILITOTAL: 2405,
    "TOTAL PATIENTS": 307073
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 28,
    "AGE 0-4": 881,
    "AGE 25-49": "X",
    "AGE 25-64": "669",
    "AGE 5-24": 749,
    "AGE 50-64": "X",
    "AGE 65": 132,
    ILITOTAL: 2431,
    "TOTAL PATIENTS": 311423
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 29,
    "AGE 0-4": 826,
    "AGE 25-49": "X",
    "AGE 25-64": "619",
    "AGE 5-24": 703,
    "AGE 50-64": "X",
    "AGE 65": 171,
    ILITOTAL: 2319,
    "TOTAL PATIENTS": 301532
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 30,
    "AGE 0-4": 779,
    "AGE 25-49": "X",
    "AGE 25-64": "552",
    "AGE 5-24": 704,
    "AGE 50-64": "X",
    "AGE 65": 131,
    ILITOTAL: 2166,
    "TOTAL PATIENTS": 300292
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 31,
    "AGE 0-4": 788,
    "AGE 25-49": "X",
    "AGE 25-64": "599",
    "AGE 5-24": 763,
    "AGE 50-64": "X",
    "AGE 65": 139,
    ILITOTAL: 2289,
    "TOTAL PATIENTS": 304175
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 32,
    "AGE 0-4": 679,
    "AGE 25-49": "X",
    "AGE 25-64": "619",
    "AGE 5-24": 706,
    "AGE 50-64": "X",
    "AGE 65": 216,
    ILITOTAL: 2220,
    "TOTAL PATIENTS": 294930
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 33,
    "AGE 0-4": 789,
    "AGE 25-49": "X",
    "AGE 25-64": "650",
    "AGE 5-24": 745,
    "AGE 50-64": "X",
    "AGE 65": 184,
    ILITOTAL: 2368,
    "TOTAL PATIENTS": 298701
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 34,
    "AGE 0-4": 730,
    "AGE 25-49": "X",
    "AGE 25-64": "619",
    "AGE 5-24": 754,
    "AGE 50-64": "X",
    "AGE 65": 134,
    ILITOTAL: 2237,
    "TOTAL PATIENTS": 300714
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 35,
    "AGE 0-4": 794,
    "AGE 25-49": "X",
    "AGE 25-64": "616",
    "AGE 5-24": 892,
    "AGE 50-64": "X",
    "AGE 65": 127,
    ILITOTAL: 2429,
    "TOTAL PATIENTS": 298342
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 36,
    "AGE 0-4": 774,
    "AGE 25-49": "X",
    "AGE 25-64": "663",
    "AGE 5-24": 880,
    "AGE 50-64": "X",
    "AGE 65": 144,
    ILITOTAL: 2461,
    "TOTAL PATIENTS": 293535
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 37,
    "AGE 0-4": 859,
    "AGE 25-49": "X",
    "AGE 25-64": "758",
    "AGE 5-24": 994,
    "AGE 50-64": "X",
    "AGE 65": 177,
    ILITOTAL: 2788,
    "TOTAL PATIENTS": 327567
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 38,
    "AGE 0-4": 1062,
    "AGE 25-49": "X",
    "AGE 25-64": "958",
    "AGE 5-24": 1527,
    "AGE 50-64": "X",
    "AGE 65": 188,
    ILITOTAL: 3735,
    "TOTAL PATIENTS": 336560
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 39,
    "AGE 0-4": 983,
    "AGE 25-49": "X",
    "AGE 25-64": "932",
    "AGE 5-24": 1306,
    "AGE 50-64": "X",
    "AGE 65": 179,
    ILITOTAL: 3400,
    "TOTAL PATIENTS": 329731
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 40,
    "AGE 0-4": 1535,
    "AGE 25-49": "X",
    "AGE 25-64": "1476",
    "AGE 5-24": 2352,
    "AGE 50-64": "X",
    "AGE 65": 324,
    ILITOTAL: 5687,
    "TOTAL PATIENTS": 555999
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 41,
    "AGE 0-4": 1861,
    "AGE 25-49": "X",
    "AGE 25-64": "1485",
    "AGE 5-24": 2291,
    "AGE 50-64": "X",
    "AGE 65": 322,
    ILITOTAL: 5959,
    "TOTAL PATIENTS": 578446
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 42,
    "AGE 0-4": 1869,
    "AGE 25-49": "X",
    "AGE 25-64": "1467",
    "AGE 5-24": 2219,
    "AGE 50-64": "X",
    "AGE 65": 341,
    ILITOTAL: 5896,
    "TOTAL PATIENTS": 582351
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 43,
    "AGE 0-4": 1976,
    "AGE 25-49": "X",
    "AGE 25-64": "1668",
    "AGE 5-24": 2474,
    "AGE 50-64": "X",
    "AGE 65": 367,
    ILITOTAL: 6485,
    "TOTAL PATIENTS": 598473
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 44,
    "AGE 0-4": 2119,
    "AGE 25-49": "X",
    "AGE 25-64": "1869",
    "AGE 5-24": 2547,
    "AGE 50-64": "X",
    "AGE 65": 452,
    ILITOTAL: 6987,
    "TOTAL PATIENTS": 599343
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 45,
    "AGE 0-4": 2276,
    "AGE 25-49": "X",
    "AGE 25-64": "1981",
    "AGE 5-24": 2668,
    "AGE 50-64": "X",
    "AGE 65": 372,
    ILITOTAL: 7297,
    "TOTAL PATIENTS": 612526
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 46,
    "AGE 0-4": 2512,
    "AGE 25-49": "X",
    "AGE 25-64": "1889",
    "AGE 5-24": 2854,
    "AGE 50-64": "X",
    "AGE 65": 412,
    ILITOTAL: 7667,
    "TOTAL PATIENTS": 598635
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 47,
    "AGE 0-4": 2600,
    "AGE 25-49": "X",
    "AGE 25-64": "1893",
    "AGE 5-24": 2828,
    "AGE 50-64": "X",
    "AGE 65": 412,
    ILITOTAL: 7733,
    "TOTAL PATIENTS": 608646
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 48,
    "AGE 0-4": 3024,
    "AGE 25-49": "X",
    "AGE 25-64": "1741",
    "AGE 5-24": 2412,
    "AGE 50-64": "X",
    "AGE 65": 457,
    ILITOTAL: 7634,
    "TOTAL PATIENTS": 478386
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 49,
    "AGE 0-4": 3114,
    "AGE 25-49": "X",
    "AGE 25-64": "2212",
    "AGE 5-24": 2913,
    "AGE 50-64": "X",
    "AGE 65": 469,
    ILITOTAL: 8708,
    "TOTAL PATIENTS": 597052
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 50,
    "AGE 0-4": 3252,
    "AGE 25-49": "X",
    "AGE 25-64": "1974",
    "AGE 5-24": 3024,
    "AGE 50-64": "X",
    "AGE 65": 439,
    ILITOTAL: 8689,
    "TOTAL PATIENTS": 579573
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 51,
    "AGE 0-4": 3137,
    "AGE 25-49": "X",
    "AGE 25-64": "1640",
    "AGE 5-24": 2579,
    "AGE 50-64": "X",
    "AGE 65": 456,
    ILITOTAL: 7812,
    "TOTAL PATIENTS": 479318
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 52,
    "AGE 0-4": 3897,
    "AGE 25-49": "X",
    "AGE 25-64": "1947",
    "AGE 5-24": 2367,
    "AGE 50-64": "X",
    "AGE 65": 495,
    ILITOTAL: 8706,
    "TOTAL PATIENTS": 403876
  },
  {
    "REGION TYPE": "National",
    YEAR: 2008,
    WEEK: 53,
    "AGE 0-4": 3814,
    "AGE 25-49": "X",
    "AGE 25-64": "2163",
    "AGE 5-24": 2042,
    "AGE 50-64": "X",
    "AGE 65": 584,
    ILITOTAL: 8603,
    "TOTAL PATIENTS": 425780
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 1,
    "AGE 0-4": 3245,
    "AGE 25-49": "X",
    "AGE 25-64": "2606",
    "AGE 5-24": 2548,
    "AGE 50-64": "X",
    "AGE 65": 557,
    ILITOTAL: 8956,
    "TOTAL PATIENTS": 579428
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 2,
    "AGE 0-4": 3142,
    "AGE 25-49": "X",
    "AGE 25-64": "2329",
    "AGE 5-24": 3345,
    "AGE 50-64": "X",
    "AGE 65": 473,
    ILITOTAL: 9289,
    "TOTAL PATIENTS": 565631
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 3,
    "AGE 0-4": 3602,
    "AGE 25-49": "X",
    "AGE 25-64": "2821",
    "AGE 5-24": 4597,
    "AGE 50-64": "X",
    "AGE 65": 436,
    ILITOTAL: 11456,
    "TOTAL PATIENTS": 582932
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 4,
    "AGE 0-4": 4039,
    "AGE 25-49": "X",
    "AGE 25-64": "3215",
    "AGE 5-24": 6602,
    "AGE 50-64": "X",
    "AGE 65": 468,
    ILITOTAL: 14324,
    "TOTAL PATIENTS": 611176
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 5,
    "AGE 0-4": 4606,
    "AGE 25-49": "X",
    "AGE 25-64": "4240",
    "AGE 5-24": 8882,
    "AGE 50-64": "X",
    "AGE 65": 540,
    ILITOTAL: 18268,
    "TOTAL PATIENTS": 638613
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 6,
    "AGE 0-4": 5064,
    "AGE 25-49": "X",
    "AGE 25-64": "4636",
    "AGE 5-24": 11215,
    "AGE 50-64": "X",
    "AGE 65": 752,
    ILITOTAL: 21667,
    "TOTAL PATIENTS": 648304
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 7,
    "AGE 0-4": 4848,
    "AGE 25-49": "X",
    "AGE 25-64": "4685",
    "AGE 5-24": 9851,
    "AGE 50-64": "X",
    "AGE 65": 638,
    ILITOTAL: 20022,
    "TOTAL PATIENTS": 624583
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 8,
    "AGE 0-4": 4694,
    "AGE 25-49": "X",
    "AGE 25-64": "5007",
    "AGE 5-24": 10092,
    "AGE 50-64": "X",
    "AGE 65": 657,
    ILITOTAL: 20450,
    "TOTAL PATIENTS": 659573
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 9,
    "AGE 0-4": 4420,
    "AGE 25-49": "X",
    "AGE 25-64": "4272",
    "AGE 5-24": 9116,
    "AGE 50-64": "X",
    "AGE 65": 633,
    ILITOTAL: 18441,
    "TOTAL PATIENTS": 623389
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 10,
    "AGE 0-4": 4046,
    "AGE 25-49": "X",
    "AGE 25-64": "3601",
    "AGE 5-24": 7446,
    "AGE 50-64": "X",
    "AGE 65": 618,
    ILITOTAL: 15711,
    "TOTAL PATIENTS": 637672
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 11,
    "AGE 0-4": 3657,
    "AGE 25-49": "X",
    "AGE 25-64": "3002",
    "AGE 5-24": 6036,
    "AGE 50-64": "X",
    "AGE 65": 582,
    ILITOTAL: 13277,
    "TOTAL PATIENTS": 605503
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 12,
    "AGE 0-4": 3237,
    "AGE 25-49": "X",
    "AGE 25-64": "2661",
    "AGE 5-24": 5052,
    "AGE 50-64": "X",
    "AGE 65": 450,
    ILITOTAL: 11400,
    "TOTAL PATIENTS": 608342
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 13,
    "AGE 0-4": 2829,
    "AGE 25-49": "X",
    "AGE 25-64": "2158",
    "AGE 5-24": 4283,
    "AGE 50-64": "X",
    "AGE 65": 399,
    ILITOTAL: 9669,
    "TOTAL PATIENTS": 586651
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 14,
    "AGE 0-4": 2577,
    "AGE 25-49": "X",
    "AGE 25-64": "2085",
    "AGE 5-24": 3407,
    "AGE 50-64": "X",
    "AGE 65": 391,
    ILITOTAL: 8460,
    "TOTAL PATIENTS": 564460
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 15,
    "AGE 0-4": 2371,
    "AGE 25-49": "X",
    "AGE 25-64": "1727",
    "AGE 5-24": 2761,
    "AGE 50-64": "X",
    "AGE 65": 363,
    ILITOTAL: 7222,
    "TOTAL PATIENTS": 558837
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 16,
    "AGE 0-4": 2353,
    "AGE 25-49": "X",
    "AGE 25-64": "1743",
    "AGE 5-24": 2855,
    "AGE 50-64": "X",
    "AGE 65": 397,
    ILITOTAL: 7348,
    "TOTAL PATIENTS": 577836
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 17,
    "AGE 0-4": 4821,
    "AGE 25-49": "X",
    "AGE 25-64": "5093",
    "AGE 5-24": 8043,
    "AGE 50-64": "X",
    "AGE 65": 670,
    ILITOTAL: 18627,
    "TOTAL PATIENTS": 624734
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 18,
    "AGE 0-4": 3920,
    "AGE 25-49": "X",
    "AGE 25-64": "3875",
    "AGE 5-24": 6221,
    "AGE 50-64": "X",
    "AGE 65": 562,
    ILITOTAL: 14578,
    "TOTAL PATIENTS": 598189
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 19,
    "AGE 0-4": 3236,
    "AGE 25-49": "X",
    "AGE 25-64": "3018",
    "AGE 5-24": 5888,
    "AGE 50-64": "X",
    "AGE 65": 412,
    ILITOTAL: 12554,
    "TOTAL PATIENTS": 550300
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 20,
    "AGE 0-4": 4188,
    "AGE 25-49": "X",
    "AGE 25-64": "4136",
    "AGE 5-24": 12026,
    "AGE 50-64": "X",
    "AGE 65": 424,
    ILITOTAL: 20774,
    "TOTAL PATIENTS": 544432
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 21,
    "AGE 0-4": 4496,
    "AGE 25-49": "X",
    "AGE 25-64": "4950",
    "AGE 5-24": 12461,
    "AGE 50-64": "X",
    "AGE 65": 487,
    ILITOTAL: 22394,
    "TOTAL PATIENTS": 531526
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 22,
    "AGE 0-4": 3865,
    "AGE 25-49": "X",
    "AGE 25-64": "4213",
    "AGE 5-24": 8615,
    "AGE 50-64": "X",
    "AGE 65": 412,
    ILITOTAL: 17105,
    "TOTAL PATIENTS": 538177
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 23,
    "AGE 0-4": 3072,
    "AGE 25-49": "X",
    "AGE 25-64": "3276",
    "AGE 5-24": 5660,
    "AGE 50-64": "X",
    "AGE 65": 384,
    ILITOTAL: 12392,
    "TOTAL PATIENTS": 493761
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 24,
    "AGE 0-4": 2623,
    "AGE 25-49": "X",
    "AGE 25-64": "3084",
    "AGE 5-24": 4740,
    "AGE 50-64": "X",
    "AGE 65": 333,
    ILITOTAL: 10780,
    "TOTAL PATIENTS": 521701
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 25,
    "AGE 0-4": 2299,
    "AGE 25-49": "X",
    "AGE 25-64": "2476",
    "AGE 5-24": 3700,
    "AGE 50-64": "X",
    "AGE 65": 326,
    ILITOTAL: 8801,
    "TOTAL PATIENTS": 512268
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 26,
    "AGE 0-4": 2145,
    "AGE 25-49": "X",
    "AGE 25-64": "2023",
    "AGE 5-24": 2893,
    "AGE 50-64": "X",
    "AGE 65": 361,
    ILITOTAL: 7422,
    "TOTAL PATIENTS": 475877
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 27,
    "AGE 0-4": 1701,
    "AGE 25-49": "X",
    "AGE 25-64": "1815",
    "AGE 5-24": 2481,
    "AGE 50-64": "X",
    "AGE 65": 293,
    ILITOTAL: 6290,
    "TOTAL PATIENTS": 480680
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 28,
    "AGE 0-4": 1581,
    "AGE 25-49": "X",
    "AGE 25-64": "1708",
    "AGE 5-24": 2437,
    "AGE 50-64": "X",
    "AGE 65": 238,
    ILITOTAL: 5964,
    "TOTAL PATIENTS": 502466
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 29,
    "AGE 0-4": 1608,
    "AGE 25-49": "X",
    "AGE 25-64": "1611",
    "AGE 5-24": 2285,
    "AGE 50-64": "X",
    "AGE 65": 231,
    ILITOTAL: 5735,
    "TOTAL PATIENTS": 503971
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 30,
    "AGE 0-4": 1519,
    "AGE 25-49": "X",
    "AGE 25-64": "1575",
    "AGE 5-24": 2199,
    "AGE 50-64": "X",
    "AGE 65": 294,
    ILITOTAL: 5587,
    "TOTAL PATIENTS": 485804
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 31,
    "AGE 0-4": 1651,
    "AGE 25-49": "X",
    "AGE 25-64": "1530",
    "AGE 5-24": 2082,
    "AGE 50-64": "X",
    "AGE 65": 263,
    ILITOTAL: 5526,
    "TOTAL PATIENTS": 496666
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 32,
    "AGE 0-4": 1645,
    "AGE 25-49": "X",
    "AGE 25-64": "1646",
    "AGE 5-24": 2321,
    "AGE 50-64": "X",
    "AGE 65": 265,
    ILITOTAL: 5877,
    "TOTAL PATIENTS": 506019
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 33,
    "AGE 0-4": 2167,
    "AGE 25-49": "X",
    "AGE 25-64": "2168",
    "AGE 5-24": 4210,
    "AGE 50-64": "X",
    "AGE 65": 396,
    ILITOTAL: 8941,
    "TOTAL PATIENTS": 544827
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 34,
    "AGE 0-4": 2883,
    "AGE 25-49": "X",
    "AGE 25-64": "2977",
    "AGE 5-24": 8253,
    "AGE 50-64": "X",
    "AGE 65": 443,
    ILITOTAL: 14556,
    "TOTAL PATIENTS": 588916
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 35,
    "AGE 0-4": 3713,
    "AGE 25-49": "X",
    "AGE 25-64": "3982",
    "AGE 5-24": 13114,
    "AGE 50-64": "X",
    "AGE 65": 541,
    ILITOTAL: 21350,
    "TOTAL PATIENTS": 573972
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 36,
    "AGE 0-4": 4087,
    "AGE 25-49": "X",
    "AGE 25-64": "4547",
    "AGE 5-24": 13407,
    "AGE 50-64": "X",
    "AGE 65": 520,
    ILITOTAL: 22561,
    "TOTAL PATIENTS": 571201
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 37,
    "AGE 0-4": 4445,
    "AGE 25-49": "X",
    "AGE 25-64": "5668",
    "AGE 5-24": 15326,
    "AGE 50-64": "X",
    "AGE 65": 652,
    ILITOTAL: 26091,
    "TOTAL PATIENTS": 638302
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 38,
    "AGE 0-4": 4462,
    "AGE 25-49": "X",
    "AGE 25-64": "5252",
    "AGE 5-24": 14152,
    "AGE 50-64": "X",
    "AGE 65": 588,
    ILITOTAL: 24454,
    "TOTAL PATIENTS": 608464
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 39,
    "AGE 0-4": 4974,
    "AGE 25-49": "X",
    "AGE 25-64": "6090",
    "AGE 5-24": 16291,
    "AGE 50-64": "X",
    "AGE 65": 564,
    ILITOTAL: 27919,
    "TOTAL PATIENTS": 606458
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 40,
    "AGE 0-4": 9302,
    "AGE 25-49": "8554",
    "AGE 25-64": "X",
    "AGE 5-24": 27406,
    "AGE 50-64": "2255",
    "AGE 65": 903,
    ILITOTAL: 48420,
    "TOTAL PATIENTS": 855346
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 41,
    "AGE 0-4": 11527,
    "AGE 25-49": "10271",
    "AGE 25-64": "X",
    "AGE 5-24": 32585,
    "AGE 50-64": "2800",
    "AGE 65": 1013,
    ILITOTAL: 58196,
    "TOTAL PATIENTS": 853912
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 42,
    "AGE 0-4": 13187,
    "AGE 25-49": "12399",
    "AGE 25-64": "X",
    "AGE 5-24": 39364,
    "AGE 50-64": "3048",
    "AGE 65": 1070,
    ILITOTAL: 69068,
    "TOTAL PATIENTS": 906536
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 43,
    "AGE 0-4": 13174,
    "AGE 25-49": "12166",
    "AGE 25-64": "X",
    "AGE 5-24": 36860,
    "AGE 50-64": "3083",
    "AGE 65": 1128,
    ILITOTAL: 66411,
    "TOTAL PATIENTS": 898860
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 44,
    "AGE 0-4": 12161,
    "AGE 25-49": "10250",
    "AGE 25-64": "X",
    "AGE 5-24": 30860,
    "AGE 50-64": "2672",
    "AGE 65": 1074,
    ILITOTAL: 57017,
    "TOTAL PATIENTS": 899425
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 45,
    "AGE 0-4": 10151,
    "AGE 25-49": "8174",
    "AGE 25-64": "X",
    "AGE 5-24": 21112,
    "AGE 50-64": "2314",
    "AGE 65": 978,
    ILITOTAL: 42729,
    "TOTAL PATIENTS": 864348
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 46,
    "AGE 0-4": 8979,
    "AGE 25-49": "6163",
    "AGE 25-64": "X",
    "AGE 5-24": 14652,
    "AGE 50-64": "1843",
    "AGE 65": 883,
    ILITOTAL: 32520,
    "TOTAL PATIENTS": 853552
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 47,
    "AGE 0-4": 7716,
    "AGE 25-49": "4378",
    "AGE 25-64": "X",
    "AGE 5-24": 8237,
    "AGE 50-64": "1406",
    "AGE 65": 771,
    ILITOTAL: 22508,
    "TOTAL PATIENTS": 654101
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 48,
    "AGE 0-4": 7195,
    "AGE 25-49": "4259",
    "AGE 25-64": "X",
    "AGE 5-24": 7988,
    "AGE 50-64": "1470",
    "AGE 65": 818,
    ILITOTAL: 21730,
    "TOTAL PATIENTS": 814550
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 49,
    "AGE 0-4": 6490,
    "AGE 25-49": "3588",
    "AGE 25-64": "X",
    "AGE 5-24": 7218,
    "AGE 50-64": "1314",
    "AGE 65": 715,
    ILITOTAL: 19325,
    "TOTAL PATIENTS": 781811
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 50,
    "AGE 0-4": 6275,
    "AGE 25-49": "3249",
    "AGE 25-64": "X",
    "AGE 5-24": 5785,
    "AGE 50-64": "1113",
    "AGE 65": 659,
    ILITOTAL: 17081,
    "TOTAL PATIENTS": 728401
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 51,
    "AGE 0-4": 6078,
    "AGE 25-49": "2677",
    "AGE 25-64": "X",
    "AGE 5-24": 4127,
    "AGE 50-64": "1049",
    "AGE 65": 644,
    ILITOTAL: 14575,
    "TOTAL PATIENTS": 536961
  },
  {
    "REGION TYPE": "National",
    YEAR: 2009,
    WEEK: 52,
    "AGE 0-4": 6598,
    "AGE 25-49": "3202",
    "AGE 25-64": "X",
    "AGE 5-24": 3726,
    "AGE 50-64": "1284",
    "AGE 65": 803,
    ILITOTAL: 15613,
    "TOTAL PATIENTS": 583299
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 1,
    "AGE 0-4": 4998,
    "AGE 25-49": "3333",
    "AGE 25-64": "X",
    "AGE 5-24": 3961,
    "AGE 50-64": "1244",
    "AGE 65": 763,
    ILITOTAL: 14299,
    "TOTAL PATIENTS": 721138
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 2,
    "AGE 0-4": 4877,
    "AGE 25-49": "2793",
    "AGE 25-64": "X",
    "AGE 5-24": 4614,
    "AGE 50-64": "1182",
    "AGE 65": 622,
    ILITOTAL: 14088,
    "TOTAL PATIENTS": 770895
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 3,
    "AGE 0-4": 5399,
    "AGE 25-49": "2693",
    "AGE 25-64": "X",
    "AGE 5-24": 5079,
    "AGE 50-64": "1008",
    "AGE 65": 578,
    ILITOTAL: 14757,
    "TOTAL PATIENTS": 766177
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 4,
    "AGE 0-4": 5333,
    "AGE 25-49": "2560",
    "AGE 25-64": "X",
    "AGE 5-24": 5655,
    "AGE 50-64": "1046",
    "AGE 65": 528,
    ILITOTAL: 15122,
    "TOTAL PATIENTS": 785580
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 5,
    "AGE 0-4": 5816,
    "AGE 25-49": "2581",
    "AGE 25-64": "X",
    "AGE 5-24": 6142,
    "AGE 50-64": "948",
    "AGE 65": 550,
    ILITOTAL: 16037,
    "TOTAL PATIENTS": 767773
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 6,
    "AGE 0-4": 5496,
    "AGE 25-49": "2644",
    "AGE 25-64": "X",
    "AGE 5-24": 5577,
    "AGE 50-64": "1006",
    "AGE 65": 658,
    ILITOTAL: 15381,
    "TOTAL PATIENTS": 756068
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 7,
    "AGE 0-4": 5388,
    "AGE 25-49": "2649",
    "AGE 25-64": "X",
    "AGE 5-24": 5536,
    "AGE 50-64": "994",
    "AGE 65": 498,
    ILITOTAL: 15065,
    "TOTAL PATIENTS": 762208
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 8,
    "AGE 0-4": 5040,
    "AGE 25-49": "2943",
    "AGE 25-64": "X",
    "AGE 5-24": 6207,
    "AGE 50-64": "1218",
    "AGE 65": 679,
    ILITOTAL: 16087,
    "TOTAL PATIENTS": 806925
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 9,
    "AGE 0-4": 4281,
    "AGE 25-49": "2763",
    "AGE 25-64": "X",
    "AGE 5-24": 5685,
    "AGE 50-64": "1085",
    "AGE 65": 672,
    ILITOTAL: 14486,
    "TOTAL PATIENTS": 781411
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 10,
    "AGE 0-4": 4612,
    "AGE 25-49": "2660",
    "AGE 25-64": "X",
    "AGE 5-24": 5270,
    "AGE 50-64": "1112",
    "AGE 65": 700,
    ILITOTAL: 14354,
    "TOTAL PATIENTS": 768702
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 11,
    "AGE 0-4": 4063,
    "AGE 25-49": "2468",
    "AGE 25-64": "X",
    "AGE 5-24": 4466,
    "AGE 50-64": "976",
    "AGE 65": 628,
    ILITOTAL: 12601,
    "TOTAL PATIENTS": 741293
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 12,
    "AGE 0-4": 3625,
    "AGE 25-49": "2097",
    "AGE 25-64": "X",
    "AGE 5-24": 4108,
    "AGE 50-64": "827",
    "AGE 65": 534,
    ILITOTAL: 11191,
    "TOTAL PATIENTS": 747358
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 13,
    "AGE 0-4": 3408,
    "AGE 25-49": "1954",
    "AGE 25-64": "X",
    "AGE 5-24": 3733,
    "AGE 50-64": "736",
    "AGE 65": 528,
    ILITOTAL: 10359,
    "TOTAL PATIENTS": 713863
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 14,
    "AGE 0-4": 3090,
    "AGE 25-49": "1718",
    "AGE 25-64": "X",
    "AGE 5-24": 2933,
    "AGE 50-64": "644",
    "AGE 65": 428,
    ILITOTAL: 8813,
    "TOTAL PATIENTS": 730068
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 15,
    "AGE 0-4": 3117,
    "AGE 25-49": "1572",
    "AGE 25-64": "X",
    "AGE 5-24": 3110,
    "AGE 50-64": "598",
    "AGE 65": 404,
    ILITOTAL: 8801,
    "TOTAL PATIENTS": 749563
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 16,
    "AGE 0-4": 2921,
    "AGE 25-49": "1461",
    "AGE 25-64": "X",
    "AGE 5-24": 3044,
    "AGE 50-64": "522",
    "AGE 65": 414,
    ILITOTAL: 8362,
    "TOTAL PATIENTS": 719580
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 17,
    "AGE 0-4": 3081,
    "AGE 25-49": "1435",
    "AGE 25-64": "X",
    "AGE 5-24": 2972,
    "AGE 50-64": "557",
    "AGE 65": 395,
    ILITOTAL: 8440,
    "TOTAL PATIENTS": 720054
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 18,
    "AGE 0-4": 2781,
    "AGE 25-49": "1385",
    "AGE 25-64": "X",
    "AGE 5-24": 2901,
    "AGE 50-64": "482",
    "AGE 65": 365,
    ILITOTAL: 7914,
    "TOTAL PATIENTS": 705551
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 19,
    "AGE 0-4": 2851,
    "AGE 25-49": "1363",
    "AGE 25-64": "X",
    "AGE 5-24": 2645,
    "AGE 50-64": "491",
    "AGE 65": 347,
    ILITOTAL: 7697,
    "TOTAL PATIENTS": 669414
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 20,
    "AGE 0-4": 2816,
    "AGE 25-49": "1364",
    "AGE 25-64": "X",
    "AGE 5-24": 2553,
    "AGE 50-64": "498",
    "AGE 65": 372,
    ILITOTAL: 7603,
    "TOTAL PATIENTS": 670887
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 21,
    "AGE 0-4": 2636,
    "AGE 25-49": "1235",
    "AGE 25-64": "X",
    "AGE 5-24": 2188,
    "AGE 50-64": "445",
    "AGE 65": 349,
    ILITOTAL: 6853,
    "TOTAL PATIENTS": 633532
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 22,
    "AGE 0-4": 2413,
    "AGE 25-49": "1212",
    "AGE 25-64": "X",
    "AGE 5-24": 2172,
    "AGE 50-64": "463",
    "AGE 65": 335,
    ILITOTAL: 6595,
    "TOTAL PATIENTS": 549773
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 23,
    "AGE 0-4": 2147,
    "AGE 25-49": "1081",
    "AGE 25-64": "X",
    "AGE 5-24": 1831,
    "AGE 50-64": "374",
    "AGE 65": 322,
    ILITOTAL: 5755,
    "TOTAL PATIENTS": 604004
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 24,
    "AGE 0-4": 1975,
    "AGE 25-49": "978",
    "AGE 25-64": "X",
    "AGE 5-24": 1784,
    "AGE 50-64": "339",
    "AGE 65": 240,
    ILITOTAL: 5316,
    "TOTAL PATIENTS": 580329
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 25,
    "AGE 0-4": 2027,
    "AGE 25-49": "882",
    "AGE 25-64": "X",
    "AGE 5-24": 1779,
    "AGE 50-64": "397",
    "AGE 65": 249,
    ILITOTAL: 5334,
    "TOTAL PATIENTS": 575664
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 26,
    "AGE 0-4": 1754,
    "AGE 25-49": "862",
    "AGE 25-64": "X",
    "AGE 5-24": 1541,
    "AGE 50-64": "323",
    "AGE 65": 238,
    ILITOTAL: 4718,
    "TOTAL PATIENTS": 542536
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 27,
    "AGE 0-4": 1753,
    "AGE 25-49": "816",
    "AGE 25-64": "X",
    "AGE 5-24": 1566,
    "AGE 50-64": "334",
    "AGE 65": 222,
    ILITOTAL: 4691,
    "TOTAL PATIENTS": 519414
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 28,
    "AGE 0-4": 1458,
    "AGE 25-49": "819",
    "AGE 25-64": "X",
    "AGE 5-24": 1450,
    "AGE 50-64": "298",
    "AGE 65": 209,
    ILITOTAL: 4234,
    "TOTAL PATIENTS": 547187
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 29,
    "AGE 0-4": 1323,
    "AGE 25-49": "759",
    "AGE 25-64": "X",
    "AGE 5-24": 1335,
    "AGE 50-64": "335",
    "AGE 65": 198,
    ILITOTAL: 3950,
    "TOTAL PATIENTS": 531790
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 30,
    "AGE 0-4": 1290,
    "AGE 25-49": "805",
    "AGE 25-64": "X",
    "AGE 5-24": 1279,
    "AGE 50-64": "302",
    "AGE 65": 174,
    ILITOTAL: 3850,
    "TOTAL PATIENTS": 526723
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 31,
    "AGE 0-4": 1381,
    "AGE 25-49": "839",
    "AGE 25-64": "X",
    "AGE 5-24": 1357,
    "AGE 50-64": "291",
    "AGE 65": 209,
    ILITOTAL: 4077,
    "TOTAL PATIENTS": 518121
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 32,
    "AGE 0-4": 1378,
    "AGE 25-49": "809",
    "AGE 25-64": "X",
    "AGE 5-24": 1307,
    "AGE 50-64": "300",
    "AGE 65": 214,
    ILITOTAL: 4008,
    "TOTAL PATIENTS": 525260
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 33,
    "AGE 0-4": 1485,
    "AGE 25-49": "883",
    "AGE 25-64": "X",
    "AGE 5-24": 1592,
    "AGE 50-64": "360",
    "AGE 65": 198,
    ILITOTAL: 4518,
    "TOTAL PATIENTS": 537190
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 34,
    "AGE 0-4": 1520,
    "AGE 25-49": "811",
    "AGE 25-64": "X",
    "AGE 5-24": 1592,
    "AGE 50-64": "295",
    "AGE 65": 202,
    ILITOTAL: 4420,
    "TOTAL PATIENTS": 558382
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 35,
    "AGE 0-4": 1564,
    "AGE 25-49": "1019",
    "AGE 25-64": "X",
    "AGE 5-24": 1866,
    "AGE 50-64": "354",
    "AGE 65": 204,
    ILITOTAL: 5007,
    "TOTAL PATIENTS": 548573
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 36,
    "AGE 0-4": 1850,
    "AGE 25-49": "1076",
    "AGE 25-64": "X",
    "AGE 5-24": 1959,
    "AGE 50-64": "374",
    "AGE 65": 234,
    ILITOTAL: 5493,
    "TOTAL PATIENTS": 531250
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 37,
    "AGE 0-4": 1720,
    "AGE 25-49": "1061",
    "AGE 25-64": "X",
    "AGE 5-24": 2118,
    "AGE 50-64": "358",
    "AGE 65": 253,
    ILITOTAL: 5510,
    "TOTAL PATIENTS": 589930
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 38,
    "AGE 0-4": 2134,
    "AGE 25-49": "1291",
    "AGE 25-64": "X",
    "AGE 5-24": 2510,
    "AGE 50-64": "480",
    "AGE 65": 326,
    ILITOTAL: 6741,
    "TOTAL PATIENTS": 623077
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 39,
    "AGE 0-4": 1995,
    "AGE 25-49": "1269",
    "AGE 25-64": "X",
    "AGE 5-24": 2383,
    "AGE 50-64": "446",
    "AGE 65": 294,
    ILITOTAL: 6387,
    "TOTAL PATIENTS": 599366
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 40,
    "AGE 0-4": 2627,
    "AGE 25-49": "1677",
    "AGE 25-64": "X",
    "AGE 5-24": 3142,
    "AGE 50-64": "627",
    "AGE 65": 400,
    ILITOTAL: 8473,
    "TOTAL PATIENTS": 746485
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 41,
    "AGE 0-4": 2953,
    "AGE 25-49": "1779",
    "AGE 25-64": "X",
    "AGE 5-24": 3522,
    "AGE 50-64": "649",
    "AGE 65": 444,
    ILITOTAL: 9347,
    "TOTAL PATIENTS": 746230
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 42,
    "AGE 0-4": 3044,
    "AGE 25-49": "1898",
    "AGE 25-64": "X",
    "AGE 5-24": 3641,
    "AGE 50-64": "690",
    "AGE 65": 411,
    ILITOTAL: 9684,
    "TOTAL PATIENTS": 777397
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 43,
    "AGE 0-4": 3226,
    "AGE 25-49": "1754",
    "AGE 25-64": "X",
    "AGE 5-24": 3822,
    "AGE 50-64": "682",
    "AGE 65": 420,
    ILITOTAL: 9904,
    "TOTAL PATIENTS": 781234
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 44,
    "AGE 0-4": 3451,
    "AGE 25-49": "1981",
    "AGE 25-64": "X",
    "AGE 5-24": 4397,
    "AGE 50-64": "736",
    "AGE 65": 455,
    ILITOTAL: 11020,
    "TOTAL PATIENTS": 766753
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 45,
    "AGE 0-4": 3927,
    "AGE 25-49": "1956",
    "AGE 25-64": "X",
    "AGE 5-24": 4679,
    "AGE 50-64": "734",
    "AGE 65": 511,
    ILITOTAL: 11807,
    "TOTAL PATIENTS": 769982
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 46,
    "AGE 0-4": 4416,
    "AGE 25-49": "2327",
    "AGE 25-64": "X",
    "AGE 5-24": 5322,
    "AGE 50-64": "774",
    "AGE 65": 497,
    ILITOTAL: 13336,
    "TOTAL PATIENTS": 787038
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 47,
    "AGE 0-4": 4598,
    "AGE 25-49": "2043",
    "AGE 25-64": "X",
    "AGE 5-24": 4145,
    "AGE 50-64": "743",
    "AGE 65": 550,
    ILITOTAL: 12079,
    "TOTAL PATIENTS": 606527
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 48,
    "AGE 0-4": 5045,
    "AGE 25-49": "2440",
    "AGE 25-64": "X",
    "AGE 5-24": 4978,
    "AGE 50-64": "915",
    "AGE 65": 619,
    ILITOTAL: 13997,
    "TOTAL PATIENTS": 772016
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 49,
    "AGE 0-4": 5060,
    "AGE 25-49": "2511",
    "AGE 25-64": "X",
    "AGE 5-24": 5867,
    "AGE 50-64": "893",
    "AGE 65": 627,
    ILITOTAL: 14958,
    "TOTAL PATIENTS": 742606
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 50,
    "AGE 0-4": 6300,
    "AGE 25-49": "2847",
    "AGE 25-64": "X",
    "AGE 5-24": 7194,
    "AGE 50-64": "1031",
    "AGE 65": 650,
    ILITOTAL: 18022,
    "TOTAL PATIENTS": 704923
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 51,
    "AGE 0-4": 7295,
    "AGE 25-49": "3433",
    "AGE 25-64": "X",
    "AGE 5-24": 7071,
    "AGE 50-64": "1262",
    "AGE 65": 838,
    ILITOTAL: 19899,
    "TOTAL PATIENTS": 588406
  },
  {
    "REGION TYPE": "National",
    YEAR: 2010,
    WEEK: 52,
    "AGE 0-4": 7478,
    "AGE 25-49": "4455",
    "AGE 25-64": "X",
    "AGE 5-24": 5764,
    "AGE 50-64": "1581",
    "AGE 65": 1068,
    ILITOTAL: 20346,
    "TOTAL PATIENTS": 592880
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 1,
    "AGE 0-4": 6584,
    "AGE 25-49": "4455",
    "AGE 25-64": "X",
    "AGE 5-24": 6342,
    "AGE 50-64": "1586",
    "AGE 65": 1059,
    ILITOTAL: 20026,
    "TOTAL PATIENTS": 744043
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 2,
    "AGE 0-4": 6238,
    "AGE 25-49": "4220",
    "AGE 25-64": "X",
    "AGE 5-24": 7773,
    "AGE 50-64": "1537",
    "AGE 65": 953,
    ILITOTAL: 20721,
    "TOTAL PATIENTS": 711908
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 3,
    "AGE 0-4": 7247,
    "AGE 25-49": "5095",
    "AGE 25-64": "X",
    "AGE 5-24": 11243,
    "AGE 50-64": "1734",
    "AGE 65": 938,
    ILITOTAL: 26257,
    "TOTAL PATIENTS": 751850
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 4,
    "AGE 0-4": 8007,
    "AGE 25-49": "5952",
    "AGE 25-64": "X",
    "AGE 5-24": 15291,
    "AGE 50-64": "1794",
    "AGE 65": 931,
    ILITOTAL: 31975,
    "TOTAL PATIENTS": 798637
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 5,
    "AGE 0-4": 8195,
    "AGE 25-49": "6536",
    "AGE 25-64": "X",
    "AGE 5-24": 16366,
    "AGE 50-64": "1990",
    "AGE 65": 1197,
    ILITOTAL: 34284,
    "TOTAL PATIENTS": 772974
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 6,
    "AGE 0-4": 8036,
    "AGE 25-49": "6812",
    "AGE 25-64": "X",
    "AGE 5-24": 16516,
    "AGE 50-64": "1996",
    "AGE 65": 1096,
    ILITOTAL: 34456,
    "TOTAL PATIENTS": 812230
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 7,
    "AGE 0-4": 8172,
    "AGE 25-49": "7257",
    "AGE 25-64": "X",
    "AGE 5-24": 17493,
    "AGE 50-64": "2352",
    "AGE 65": 1293,
    ILITOTAL: 36567,
    "TOTAL PATIENTS": 831600
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 8,
    "AGE 0-4": 7839,
    "AGE 25-49": "6425",
    "AGE 25-64": "X",
    "AGE 5-24": 13718,
    "AGE 50-64": "2028",
    "AGE 65": 1267,
    ILITOTAL: 31277,
    "TOTAL PATIENTS": 801449
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 9,
    "AGE 0-4": 6376,
    "AGE 25-49": "4869",
    "AGE 25-64": "X",
    "AGE 5-24": 10496,
    "AGE 50-64": "1740",
    "AGE 65": 1146,
    ILITOTAL: 24627,
    "TOTAL PATIENTS": 781629
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 10,
    "AGE 0-4": 5691,
    "AGE 25-49": "3939",
    "AGE 25-64": "X",
    "AGE 5-24": 8427,
    "AGE 50-64": "1421",
    "AGE 65": 899,
    ILITOTAL: 20377,
    "TOTAL PATIENTS": 747993
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 11,
    "AGE 0-4": 5363,
    "AGE 25-49": "3265",
    "AGE 25-64": "X",
    "AGE 5-24": 6702,
    "AGE 50-64": "1175",
    "AGE 65": 804,
    ILITOTAL: 17309,
    "TOTAL PATIENTS": 741807
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 12,
    "AGE 0-4": 4400,
    "AGE 25-49": "2551",
    "AGE 25-64": "X",
    "AGE 5-24": 5489,
    "AGE 50-64": "978",
    "AGE 65": 613,
    ILITOTAL: 14031,
    "TOTAL PATIENTS": 728883
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 13,
    "AGE 0-4": 4189,
    "AGE 25-49": "2244",
    "AGE 25-64": "X",
    "AGE 5-24": 5025,
    "AGE 50-64": "877",
    "AGE 65": 622,
    ILITOTAL: 12957,
    "TOTAL PATIENTS": 739375
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 14,
    "AGE 0-4": 3701,
    "AGE 25-49": "1985",
    "AGE 25-64": "X",
    "AGE 5-24": 4557,
    "AGE 50-64": "747",
    "AGE 65": 508,
    ILITOTAL: 11498,
    "TOTAL PATIENTS": 729089
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 15,
    "AGE 0-4": 3164,
    "AGE 25-49": "1574",
    "AGE 25-64": "X",
    "AGE 5-24": 3562,
    "AGE 50-64": "641",
    "AGE 65": 450,
    ILITOTAL: 9391,
    "TOTAL PATIENTS": 691707
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 16,
    "AGE 0-4": 3139,
    "AGE 25-49": "1505",
    "AGE 25-64": "X",
    "AGE 5-24": 3064,
    "AGE 50-64": "559",
    "AGE 65": 428,
    ILITOTAL: 8695,
    "TOTAL PATIENTS": 662612
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 17,
    "AGE 0-4": 2895,
    "AGE 25-49": "1324",
    "AGE 25-64": "X",
    "AGE 5-24": 2673,
    "AGE 50-64": "555",
    "AGE 65": 383,
    ILITOTAL: 7830,
    "TOTAL PATIENTS": 681240
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 18,
    "AGE 0-4": 2532,
    "AGE 25-49": "1305",
    "AGE 25-64": "X",
    "AGE 5-24": 2553,
    "AGE 50-64": "524",
    "AGE 65": 393,
    ILITOTAL: 7307,
    "TOTAL PATIENTS": 655627
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 19,
    "AGE 0-4": 2551,
    "AGE 25-49": "1254",
    "AGE 25-64": "X",
    "AGE 5-24": 2595,
    "AGE 50-64": "485",
    "AGE 65": 351,
    ILITOTAL: 7236,
    "TOTAL PATIENTS": 651983
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 20,
    "AGE 0-4": 2353,
    "AGE 25-49": "1131",
    "AGE 25-64": "X",
    "AGE 5-24": 2280,
    "AGE 50-64": "461",
    "AGE 65": 305,
    ILITOTAL: 6530,
    "TOTAL PATIENTS": 620485
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 21,
    "AGE 0-4": 2213,
    "AGE 25-49": "1045",
    "AGE 25-64": "X",
    "AGE 5-24": 2110,
    "AGE 50-64": "405",
    "AGE 65": 299,
    ILITOTAL: 6072,
    "TOTAL PATIENTS": 586460
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 22,
    "AGE 0-4": 2249,
    "AGE 25-49": "1013",
    "AGE 25-64": "X",
    "AGE 5-24": 1980,
    "AGE 50-64": "397",
    "AGE 65": 307,
    ILITOTAL: 5946,
    "TOTAL PATIENTS": 531954
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 23,
    "AGE 0-4": 2040,
    "AGE 25-49": "1037",
    "AGE 25-64": "X",
    "AGE 5-24": 1760,
    "AGE 50-64": "432",
    "AGE 65": 278,
    ILITOTAL: 5547,
    "TOTAL PATIENTS": 564322
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 24,
    "AGE 0-4": 1812,
    "AGE 25-49": "911",
    "AGE 25-64": "X",
    "AGE 5-24": 1599,
    "AGE 50-64": "405",
    "AGE 65": 262,
    ILITOTAL: 4989,
    "TOTAL PATIENTS": 539238
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 25,
    "AGE 0-4": 1604,
    "AGE 25-49": "870",
    "AGE 25-64": "X",
    "AGE 5-24": 1422,
    "AGE 50-64": "308",
    "AGE 65": 244,
    ILITOTAL: 4448,
    "TOTAL PATIENTS": 532356
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 26,
    "AGE 0-4": 1472,
    "AGE 25-49": "750",
    "AGE 25-64": "X",
    "AGE 5-24": 1462,
    "AGE 50-64": "324",
    "AGE 65": 210,
    ILITOTAL: 4218,
    "TOTAL PATIENTS": 506732
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 27,
    "AGE 0-4": 1423,
    "AGE 25-49": "823",
    "AGE 25-64": "X",
    "AGE 5-24": 1269,
    "AGE 50-64": "270",
    "AGE 65": 224,
    ILITOTAL: 4009,
    "TOTAL PATIENTS": 468565
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 28,
    "AGE 0-4": 1255,
    "AGE 25-49": "756",
    "AGE 25-64": "X",
    "AGE 5-24": 1206,
    "AGE 50-64": "316",
    "AGE 65": 188,
    ILITOTAL: 3721,
    "TOTAL PATIENTS": 526346
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 29,
    "AGE 0-4": 1243,
    "AGE 25-49": "733",
    "AGE 25-64": "X",
    "AGE 5-24": 1184,
    "AGE 50-64": "259",
    "AGE 65": 178,
    ILITOTAL: 3597,
    "TOTAL PATIENTS": 518011
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 30,
    "AGE 0-4": 1251,
    "AGE 25-49": "667",
    "AGE 25-64": "X",
    "AGE 5-24": 1188,
    "AGE 50-64": "263",
    "AGE 65": 169,
    ILITOTAL: 3538,
    "TOTAL PATIENTS": 514262
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 31,
    "AGE 0-4": 1088,
    "AGE 25-49": "635",
    "AGE 25-64": "X",
    "AGE 5-24": 1125,
    "AGE 50-64": "203",
    "AGE 65": 151,
    ILITOTAL: 3202,
    "TOTAL PATIENTS": 496632
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 32,
    "AGE 0-4": 1207,
    "AGE 25-49": "704",
    "AGE 25-64": "X",
    "AGE 5-24": 1223,
    "AGE 50-64": "231",
    "AGE 65": 158,
    ILITOTAL: 3523,
    "TOTAL PATIENTS": 521671
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 33,
    "AGE 0-4": 1342,
    "AGE 25-49": "767",
    "AGE 25-64": "X",
    "AGE 5-24": 1358,
    "AGE 50-64": "241",
    "AGE 65": 166,
    ILITOTAL: 3874,
    "TOTAL PATIENTS": 531975
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 34,
    "AGE 0-4": 1505,
    "AGE 25-49": "814",
    "AGE 25-64": "X",
    "AGE 5-24": 1600,
    "AGE 50-64": "305",
    "AGE 65": 220,
    ILITOTAL: 4444,
    "TOTAL PATIENTS": 551005
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 35,
    "AGE 0-4": 1528,
    "AGE 25-49": "887",
    "AGE 25-64": "X",
    "AGE 5-24": 1781,
    "AGE 50-64": "308",
    "AGE 65": 213,
    ILITOTAL: 4717,
    "TOTAL PATIENTS": 548228
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 36,
    "AGE 0-4": 1622,
    "AGE 25-49": "904",
    "AGE 25-64": "X",
    "AGE 5-24": 1809,
    "AGE 50-64": "293",
    "AGE 65": 185,
    ILITOTAL: 4813,
    "TOTAL PATIENTS": 514168
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 37,
    "AGE 0-4": 1788,
    "AGE 25-49": "1022",
    "AGE 25-64": "X",
    "AGE 5-24": 2206,
    "AGE 50-64": "346",
    "AGE 65": 205,
    ILITOTAL: 5567,
    "TOTAL PATIENTS": 575887
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 38,
    "AGE 0-4": 1816,
    "AGE 25-49": "1126",
    "AGE 25-64": "X",
    "AGE 5-24": 2264,
    "AGE 50-64": "374",
    "AGE 65": 242,
    ILITOTAL: 5822,
    "TOTAL PATIENTS": 584534
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 39,
    "AGE 0-4": 2248,
    "AGE 25-49": "1253",
    "AGE 25-64": "X",
    "AGE 5-24": 2514,
    "AGE 50-64": "449",
    "AGE 65": 244,
    ILITOTAL: 6708,
    "TOTAL PATIENTS": 605162
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 40,
    "AGE 0-4": 3106,
    "AGE 25-49": "1765",
    "AGE 25-64": "X",
    "AGE 5-24": 3485,
    "AGE 50-64": "632",
    "AGE 65": 377,
    ILITOTAL: 9365,
    "TOTAL PATIENTS": 778182
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 41,
    "AGE 0-4": 3317,
    "AGE 25-49": "1777",
    "AGE 25-64": "X",
    "AGE 5-24": 3667,
    "AGE 50-64": "672",
    "AGE 65": 370,
    ILITOTAL: 9803,
    "TOTAL PATIENTS": 791987
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 42,
    "AGE 0-4": 3324,
    "AGE 25-49": "1763",
    "AGE 25-64": "X",
    "AGE 5-24": 3837,
    "AGE 50-64": "655",
    "AGE 65": 379,
    ILITOTAL: 9958,
    "TOTAL PATIENTS": 794995
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 43,
    "AGE 0-4": 3453,
    "AGE 25-49": "1773",
    "AGE 25-64": "X",
    "AGE 5-24": 4035,
    "AGE 50-64": "657",
    "AGE 65": 380,
    ILITOTAL: 10298,
    "TOTAL PATIENTS": 788840
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 44,
    "AGE 0-4": 3634,
    "AGE 25-49": "1957",
    "AGE 25-64": "X",
    "AGE 5-24": 4658,
    "AGE 50-64": "760",
    "AGE 65": 387,
    ILITOTAL: 11396,
    "TOTAL PATIENTS": 784334
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 45,
    "AGE 0-4": 3949,
    "AGE 25-49": "2072",
    "AGE 25-64": "X",
    "AGE 5-24": 4348,
    "AGE 50-64": "671",
    "AGE 65": 456,
    ILITOTAL: 11496,
    "TOTAL PATIENTS": 797839
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 46,
    "AGE 0-4": 3923,
    "AGE 25-49": "2166",
    "AGE 25-64": "X",
    "AGE 5-24": 4361,
    "AGE 50-64": "797",
    "AGE 65": 474,
    ILITOTAL: 11721,
    "TOTAL PATIENTS": 801594
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 47,
    "AGE 0-4": 4125,
    "AGE 25-49": "1803",
    "AGE 25-64": "X",
    "AGE 5-24": 3340,
    "AGE 50-64": "679",
    "AGE 65": 430,
    ILITOTAL: 10377,
    "TOTAL PATIENTS": 626731
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 48,
    "AGE 0-4": 4237,
    "AGE 25-49": "2059",
    "AGE 25-64": "X",
    "AGE 5-24": 3955,
    "AGE 50-64": "815",
    "AGE 65": 413,
    ILITOTAL: 11479,
    "TOTAL PATIENTS": 782984
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 49,
    "AGE 0-4": 3995,
    "AGE 25-49": "1938",
    "AGE 25-64": "X",
    "AGE 5-24": 4040,
    "AGE 50-64": "772",
    "AGE 65": 442,
    ILITOTAL: 11187,
    "TOTAL PATIENTS": 736905
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 50,
    "AGE 0-4": 4579,
    "AGE 25-49": "2077",
    "AGE 25-64": "X",
    "AGE 5-24": 4097,
    "AGE 50-64": "838",
    "AGE 65": 546,
    ILITOTAL: 12137,
    "TOTAL PATIENTS": 729258
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 51,
    "AGE 0-4": 5016,
    "AGE 25-49": "2068",
    "AGE 25-64": "X",
    "AGE 5-24": 3535,
    "AGE 50-64": "818",
    "AGE 65": 521,
    ILITOTAL: 11958,
    "TOTAL PATIENTS": 645424
  },
  {
    "REGION TYPE": "National",
    YEAR: 2011,
    WEEK: 52,
    "AGE 0-4": 5243,
    "AGE 25-49": "2315",
    "AGE 25-64": "X",
    "AGE 5-24": 3184,
    "AGE 50-64": "946",
    "AGE 65": 668,
    ILITOTAL: 12356,
    "TOTAL PATIENTS": 581697
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 1,
    "AGE 0-4": 4514,
    "AGE 25-49": "2342",
    "AGE 25-64": "X",
    "AGE 5-24": 3393,
    "AGE 50-64": "1028",
    "AGE 65": 715,
    ILITOTAL: 11992,
    "TOTAL PATIENTS": 678631
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 2,
    "AGE 0-4": 4059,
    "AGE 25-49": "2319",
    "AGE 25-64": "X",
    "AGE 5-24": 3636,
    "AGE 50-64": "918",
    "AGE 65": 611,
    ILITOTAL: 11543,
    "TOTAL PATIENTS": 747894
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 3,
    "AGE 0-4": 4364,
    "AGE 25-49": "2247",
    "AGE 25-64": "X",
    "AGE 5-24": 4030,
    "AGE 50-64": "800",
    "AGE 65": 498,
    ILITOTAL: 11939,
    "TOTAL PATIENTS": 724623
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 4,
    "AGE 0-4": 4766,
    "AGE 25-49": "2303",
    "AGE 25-64": "X",
    "AGE 5-24": 4802,
    "AGE 50-64": "825",
    "AGE 65": 513,
    ILITOTAL: 13209,
    "TOTAL PATIENTS": 784244
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 5,
    "AGE 0-4": 5218,
    "AGE 25-49": "2415",
    "AGE 25-64": "X",
    "AGE 5-24": 5336,
    "AGE 50-64": "915",
    "AGE 65": 564,
    ILITOTAL: 14448,
    "TOTAL PATIENTS": 775298
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 6,
    "AGE 0-4": 5028,
    "AGE 25-49": "2582",
    "AGE 25-64": "X",
    "AGE 5-24": 5555,
    "AGE 50-64": "894",
    "AGE 65": 565,
    ILITOTAL: 14624,
    "TOTAL PATIENTS": 784516
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 7,
    "AGE 0-4": 5277,
    "AGE 25-49": "2937",
    "AGE 25-64": "X",
    "AGE 5-24": 5994,
    "AGE 50-64": "1054",
    "AGE 65": 667,
    ILITOTAL: 15929,
    "TOTAL PATIENTS": 789193
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 8,
    "AGE 0-4": 5246,
    "AGE 25-49": "3009",
    "AGE 25-64": "X",
    "AGE 5-24": 5990,
    "AGE 50-64": "1131",
    "AGE 65": 761,
    ILITOTAL: 16137,
    "TOTAL PATIENTS": 767022
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 9,
    "AGE 0-4": 5219,
    "AGE 25-49": "3141",
    "AGE 25-64": "X",
    "AGE 5-24": 6239,
    "AGE 50-64": "1153",
    "AGE 65": 766,
    ILITOTAL: 16518,
    "TOTAL PATIENTS": 788242
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 10,
    "AGE 0-4": 4811,
    "AGE 25-49": "2832",
    "AGE 25-64": "X",
    "AGE 5-24": 6493,
    "AGE 50-64": "998",
    "AGE 65": 629,
    ILITOTAL: 15763,
    "TOTAL PATIENTS": 749198
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 11,
    "AGE 0-4": 5175,
    "AGE 25-49": "3321",
    "AGE 25-64": "X",
    "AGE 5-24": 6768,
    "AGE 50-64": "1185",
    "AGE 65": 701,
    ILITOTAL: 17150,
    "TOTAL PATIENTS": 747570
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 12,
    "AGE 0-4": 4422,
    "AGE 25-49": "2822",
    "AGE 25-64": "X",
    "AGE 5-24": 5683,
    "AGE 50-64": "988",
    "AGE 65": 609,
    ILITOTAL: 14524,
    "TOTAL PATIENTS": 755579
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 13,
    "AGE 0-4": 3807,
    "AGE 25-49": "2485",
    "AGE 25-64": "X",
    "AGE 5-24": 5256,
    "AGE 50-64": "920",
    "AGE 65": 549,
    ILITOTAL: 13017,
    "TOTAL PATIENTS": 747079
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 14,
    "AGE 0-4": 3582,
    "AGE 25-49": "2306",
    "AGE 25-64": "X",
    "AGE 5-24": 4631,
    "AGE 50-64": "839",
    "AGE 65": 572,
    ILITOTAL: 11930,
    "TOTAL PATIENTS": 711808
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 15,
    "AGE 0-4": 3253,
    "AGE 25-49": "2109",
    "AGE 25-64": "X",
    "AGE 5-24": 4059,
    "AGE 50-64": "767",
    "AGE 65": 544,
    ILITOTAL: 10732,
    "TOTAL PATIENTS": 717202
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 16,
    "AGE 0-4": 3001,
    "AGE 25-49": "1990",
    "AGE 25-64": "X",
    "AGE 5-24": 4020,
    "AGE 50-64": "719",
    "AGE 65": 393,
    ILITOTAL: 10123,
    "TOTAL PATIENTS": 732480
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 17,
    "AGE 0-4": 2638,
    "AGE 25-49": "1831",
    "AGE 25-64": "X",
    "AGE 5-24": 3802,
    "AGE 50-64": "664",
    "AGE 65": 435,
    ILITOTAL: 9370,
    "TOTAL PATIENTS": 726772
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 18,
    "AGE 0-4": 2509,
    "AGE 25-49": "1728",
    "AGE 25-64": "X",
    "AGE 5-24": 3671,
    "AGE 50-64": "636",
    "AGE 65": 455,
    ILITOTAL: 8999,
    "TOTAL PATIENTS": 662649
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 19,
    "AGE 0-4": 2524,
    "AGE 25-49": "1559",
    "AGE 25-64": "X",
    "AGE 5-24": 3468,
    "AGE 50-64": "606",
    "AGE 65": 419,
    ILITOTAL: 8576,
    "TOTAL PATIENTS": 655492
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 20,
    "AGE 0-4": 2465,
    "AGE 25-49": "1547",
    "AGE 25-64": "X",
    "AGE 5-24": 3087,
    "AGE 50-64": "588",
    "AGE 65": 375,
    ILITOTAL: 8062,
    "TOTAL PATIENTS": 636347
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 21,
    "AGE 0-4": 2545,
    "AGE 25-49": "1461",
    "AGE 25-64": "X",
    "AGE 5-24": 3011,
    "AGE 50-64": "483",
    "AGE 65": 378,
    ILITOTAL: 7878,
    "TOTAL PATIENTS": 616765
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 22,
    "AGE 0-4": 2480,
    "AGE 25-49": "1276",
    "AGE 25-64": "X",
    "AGE 5-24": 2601,
    "AGE 50-64": "446",
    "AGE 65": 350,
    ILITOTAL: 7153,
    "TOTAL PATIENTS": 550614
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 23,
    "AGE 0-4": 2336,
    "AGE 25-49": "1281",
    "AGE 25-64": "X",
    "AGE 5-24": 2352,
    "AGE 50-64": "458",
    "AGE 65": 338,
    ILITOTAL: 6765,
    "TOTAL PATIENTS": 581700
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 24,
    "AGE 0-4": 2231,
    "AGE 25-49": "1150",
    "AGE 25-64": "X",
    "AGE 5-24": 2024,
    "AGE 50-64": "428",
    "AGE 65": 300,
    ILITOTAL: 6133,
    "TOTAL PATIENTS": 564670
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 25,
    "AGE 0-4": 2259,
    "AGE 25-49": "1119",
    "AGE 25-64": "X",
    "AGE 5-24": 1974,
    "AGE 50-64": "411",
    "AGE 65": 285,
    ILITOTAL: 6048,
    "TOTAL PATIENTS": 572296
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 26,
    "AGE 0-4": 2168,
    "AGE 25-49": "1058",
    "AGE 25-64": "X",
    "AGE 5-24": 1850,
    "AGE 50-64": "422",
    "AGE 65": 288,
    ILITOTAL: 5786,
    "TOTAL PATIENTS": 536380
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 27,
    "AGE 0-4": 1911,
    "AGE 25-49": "1013",
    "AGE 25-64": "X",
    "AGE 5-24": 1706,
    "AGE 50-64": "388",
    "AGE 65": 273,
    ILITOTAL: 5291,
    "TOTAL PATIENTS": 505533
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 28,
    "AGE 0-4": 1913,
    "AGE 25-49": "964",
    "AGE 25-64": "X",
    "AGE 5-24": 1751,
    "AGE 50-64": "337",
    "AGE 65": 220,
    ILITOTAL: 5185,
    "TOTAL PATIENTS": 558637
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 29,
    "AGE 0-4": 1818,
    "AGE 25-49": "914",
    "AGE 25-64": "X",
    "AGE 5-24": 1640,
    "AGE 50-64": "318",
    "AGE 65": 241,
    ILITOTAL: 4931,
    "TOTAL PATIENTS": 546713
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 30,
    "AGE 0-4": 1752,
    "AGE 25-49": "975",
    "AGE 25-64": "X",
    "AGE 5-24": 1721,
    "AGE 50-64": "372",
    "AGE 65": 283,
    ILITOTAL: 5103,
    "TOTAL PATIENTS": 557488
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 31,
    "AGE 0-4": 1728,
    "AGE 25-49": "1050",
    "AGE 25-64": "X",
    "AGE 5-24": 1706,
    "AGE 50-64": "408",
    "AGE 65": 267,
    ILITOTAL: 5159,
    "TOTAL PATIENTS": 541600
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 32,
    "AGE 0-4": 1660,
    "AGE 25-49": "989",
    "AGE 25-64": "X",
    "AGE 5-24": 1718,
    "AGE 50-64": "375",
    "AGE 65": 284,
    ILITOTAL: 5026,
    "TOTAL PATIENTS": 548294
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 33,
    "AGE 0-4": 1721,
    "AGE 25-49": "986",
    "AGE 25-64": "X",
    "AGE 5-24": 1755,
    "AGE 50-64": "357",
    "AGE 65": 232,
    ILITOTAL: 5051,
    "TOTAL PATIENTS": 560110
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 34,
    "AGE 0-4": 2098,
    "AGE 25-49": "1194",
    "AGE 25-64": "X",
    "AGE 5-24": 2128,
    "AGE 50-64": "425",
    "AGE 65": 296,
    ILITOTAL: 6141,
    "TOTAL PATIENTS": 594395
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 35,
    "AGE 0-4": 1958,
    "AGE 25-49": "1305",
    "AGE 25-64": "X",
    "AGE 5-24": 2335,
    "AGE 50-64": "443",
    "AGE 65": 277,
    ILITOTAL: 6318,
    "TOTAL PATIENTS": 600354
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 36,
    "AGE 0-4": 1886,
    "AGE 25-49": "1317",
    "AGE 25-64": "X",
    "AGE 5-24": 2294,
    "AGE 50-64": "481",
    "AGE 65": 318,
    ILITOTAL: 6296,
    "TOTAL PATIENTS": 558585
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 37,
    "AGE 0-4": 2176,
    "AGE 25-49": "1408",
    "AGE 25-64": "X",
    "AGE 5-24": 2870,
    "AGE 50-64": "513",
    "AGE 65": 415,
    ILITOTAL: 7382,
    "TOTAL PATIENTS": 622114
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 38,
    "AGE 0-4": 2295,
    "AGE 25-49": "1530",
    "AGE 25-64": "X",
    "AGE 5-24": 2972,
    "AGE 50-64": "511",
    "AGE 65": 348,
    ILITOTAL: 7656,
    "TOTAL PATIENTS": 630563
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 39,
    "AGE 0-4": 2421,
    "AGE 25-49": "1546",
    "AGE 25-64": "X",
    "AGE 5-24": 2867,
    "AGE 50-64": "575",
    "AGE 65": 398,
    ILITOTAL: 7807,
    "TOTAL PATIENTS": 623572
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 40,
    "AGE 0-4": 2773,
    "AGE 25-49": "1814",
    "AGE 25-64": "X",
    "AGE 5-24": 3691,
    "AGE 50-64": "702",
    "AGE 65": 415,
    ILITOTAL: 9395,
    "TOTAL PATIENTS": 779285
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 41,
    "AGE 0-4": 2960,
    "AGE 25-49": "1957",
    "AGE 25-64": "X",
    "AGE 5-24": 4007,
    "AGE 50-64": "745",
    "AGE 65": 489,
    ILITOTAL: 10158,
    "TOTAL PATIENTS": 769959
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 42,
    "AGE 0-4": 3202,
    "AGE 25-49": "1902",
    "AGE 25-64": "X",
    "AGE 5-24": 4233,
    "AGE 50-64": "760",
    "AGE 65": 488,
    ILITOTAL: 10585,
    "TOTAL PATIENTS": 797444
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 43,
    "AGE 0-4": 3346,
    "AGE 25-49": "2012",
    "AGE 25-64": "X",
    "AGE 5-24": 4268,
    "AGE 50-64": "771",
    "AGE 65": 516,
    ILITOTAL: 10913,
    "TOTAL PATIENTS": 798388
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 44,
    "AGE 0-4": 3326,
    "AGE 25-49": "2032",
    "AGE 25-64": "X",
    "AGE 5-24": 4422,
    "AGE 50-64": "797",
    "AGE 65": 484,
    ILITOTAL: 11061,
    "TOTAL PATIENTS": 734781
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 45,
    "AGE 0-4": 3733,
    "AGE 25-49": "2330",
    "AGE 25-64": "X",
    "AGE 5-24": 5145,
    "AGE 50-64": "925",
    "AGE 65": 541,
    ILITOTAL: 12674,
    "TOTAL PATIENTS": 785871
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 46,
    "AGE 0-4": 4034,
    "AGE 25-49": "2569",
    "AGE 25-64": "X",
    "AGE 5-24": 5526,
    "AGE 50-64": "897",
    "AGE 65": 597,
    ILITOTAL: 13623,
    "TOTAL PATIENTS": 777534
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 47,
    "AGE 0-4": 4651,
    "AGE 25-49": "2824",
    "AGE 25-64": "X",
    "AGE 5-24": 5387,
    "AGE 50-64": "1105",
    "AGE 65": 683,
    ILITOTAL: 14650,
    "TOTAL PATIENTS": 627772
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 48,
    "AGE 0-4": 5102,
    "AGE 25-49": "3950",
    "AGE 25-64": "X",
    "AGE 5-24": 7018,
    "AGE 50-64": "1498",
    "AGE 65": 953,
    ILITOTAL: 18521,
    "TOTAL PATIENTS": 831730
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 49,
    "AGE 0-4": 6486,
    "AGE 25-49": "4672",
    "AGE 25-64": "X",
    "AGE 5-24": 10857,
    "AGE 50-64": "1791",
    "AGE 65": 1071,
    ILITOTAL: 24877,
    "TOTAL PATIENTS": 835762
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 50,
    "AGE 0-4": 7446,
    "AGE 25-49": "5692",
    "AGE 25-64": "X",
    "AGE 5-24": 12945,
    "AGE 50-64": "2087",
    "AGE 65": 1262,
    ILITOTAL: 29432,
    "TOTAL PATIENTS": 811800
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 51,
    "AGE 0-4": 8546,
    "AGE 25-49": "7437",
    "AGE 25-64": "X",
    "AGE 5-24": 13971,
    "AGE 50-64": "2730",
    "AGE 65": 1648,
    ILITOTAL: 34332,
    "TOTAL PATIENTS": 754019
  },
  {
    "REGION TYPE": "National",
    YEAR: 2012,
    WEEK: 52,
    "AGE 0-4": 9709,
    "AGE 25-49": "9295",
    "AGE 25-64": "X",
    "AGE 5-24": 11391,
    "AGE 50-64": "3639",
    "AGE 65": 2554,
    ILITOTAL: 36588,
    "TOTAL PATIENTS": 607171
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 1,
    "AGE 0-4": 8444,
    "AGE 25-49": "9679",
    "AGE 25-64": "X",
    "AGE 5-24": 9108,
    "AGE 50-64": "4080",
    "AGE 65": 2792,
    ILITOTAL: 34103,
    "TOTAL PATIENTS": 687051
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 2,
    "AGE 0-4": 8297,
    "AGE 25-49": "10877",
    "AGE 25-64": "X",
    "AGE 5-24": 13424,
    "AGE 50-64": "4502",
    "AGE 65": 2796,
    ILITOTAL: 39896,
    "TOTAL PATIENTS": 850531
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 3,
    "AGE 0-4": 8633,
    "AGE 25-49": "8977",
    "AGE 25-64": "X",
    "AGE 5-24": 15992,
    "AGE 50-64": "3523",
    "AGE 65": 2316,
    ILITOTAL: 39441,
    "TOTAL PATIENTS": 838326
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 4,
    "AGE 0-4": 7441,
    "AGE 25-49": "7021",
    "AGE 25-64": "X",
    "AGE 5-24": 13439,
    "AGE 50-64": "2760",
    "AGE 65": 1765,
    ILITOTAL: 32426,
    "TOTAL PATIENTS": 778610
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 5,
    "AGE 0-4": 6609,
    "AGE 25-49": "6421",
    "AGE 25-64": "X",
    "AGE 5-24": 12653,
    "AGE 50-64": "2551",
    "AGE 65": 1574,
    ILITOTAL: 29808,
    "TOTAL PATIENTS": 806640
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 6,
    "AGE 0-4": 5757,
    "AGE 25-49": "5236",
    "AGE 25-64": "X",
    "AGE 5-24": 10816,
    "AGE 50-64": "1971",
    "AGE 65": 1207,
    ILITOTAL: 24987,
    "TOTAL PATIENTS": 772086
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 7,
    "AGE 0-4": 5289,
    "AGE 25-49": "4698",
    "AGE 25-64": "X",
    "AGE 5-24": 9395,
    "AGE 50-64": "1894",
    "AGE 65": 1045,
    ILITOTAL: 22321,
    "TOTAL PATIENTS": 771229
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 8,
    "AGE 0-4": 5099,
    "AGE 25-49": "4357",
    "AGE 25-64": "X",
    "AGE 5-24": 8415,
    "AGE 50-64": "1625",
    "AGE 65": 1023,
    ILITOTAL: 20519,
    "TOTAL PATIENTS": 755092
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 9,
    "AGE 0-4": 4633,
    "AGE 25-49": "4030",
    "AGE 25-64": "X",
    "AGE 5-24": 7981,
    "AGE 50-64": "1619",
    "AGE 65": 968,
    ILITOTAL: 19231,
    "TOTAL PATIENTS": 762238
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 10,
    "AGE 0-4": 4791,
    "AGE 25-49": "3935",
    "AGE 25-64": "X",
    "AGE 5-24": 7709,
    "AGE 50-64": "1536",
    "AGE 65": 858,
    ILITOTAL: 18829,
    "TOTAL PATIENTS": 737736
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 11,
    "AGE 0-4": 4480,
    "AGE 25-49": "3606",
    "AGE 25-64": "X",
    "AGE 5-24": 7065,
    "AGE 50-64": "1352",
    "AGE 65": 889,
    ILITOTAL: 17392,
    "TOTAL PATIENTS": 715059
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 12,
    "AGE 0-4": 3957,
    "AGE 25-49": "3191",
    "AGE 25-64": "X",
    "AGE 5-24": 6095,
    "AGE 50-64": "1270",
    "AGE 65": 741,
    ILITOTAL: 15254,
    "TOTAL PATIENTS": 723449
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 13,
    "AGE 0-4": 3830,
    "AGE 25-49": "2924",
    "AGE 25-64": "X",
    "AGE 5-24": 5204,
    "AGE 50-64": "1124",
    "AGE 65": 632,
    ILITOTAL: 13714,
    "TOTAL PATIENTS": 704276
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 14,
    "AGE 0-4": 3516,
    "AGE 25-49": "2677",
    "AGE 25-64": "X",
    "AGE 5-24": 4299,
    "AGE 50-64": "1106",
    "AGE 65": 675,
    ILITOTAL: 12273,
    "TOTAL PATIENTS": 701881
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 15,
    "AGE 0-4": 3110,
    "AGE 25-49": "2219",
    "AGE 25-64": "X",
    "AGE 5-24": 3929,
    "AGE 50-64": "957",
    "AGE 65": 603,
    ILITOTAL: 10818,
    "TOTAL PATIENTS": 722583
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 16,
    "AGE 0-4": 2707,
    "AGE 25-49": "1757",
    "AGE 25-64": "X",
    "AGE 5-24": 3509,
    "AGE 50-64": "724",
    "AGE 65": 491,
    ILITOTAL: 9188,
    "TOTAL PATIENTS": 694415
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 17,
    "AGE 0-4": 2588,
    "AGE 25-49": "1630",
    "AGE 25-64": "X",
    "AGE 5-24": 3364,
    "AGE 50-64": "582",
    "AGE 65": 425,
    ILITOTAL: 8589,
    "TOTAL PATIENTS": 700300
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 18,
    "AGE 0-4": 2439,
    "AGE 25-49": "1470",
    "AGE 25-64": "X",
    "AGE 5-24": 3142,
    "AGE 50-64": "565",
    "AGE 65": 370,
    ILITOTAL: 7986,
    "TOTAL PATIENTS": 667648
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 19,
    "AGE 0-4": 2422,
    "AGE 25-49": "1474",
    "AGE 25-64": "X",
    "AGE 5-24": 2877,
    "AGE 50-64": "570",
    "AGE 65": 361,
    ILITOTAL: 7704,
    "TOTAL PATIENTS": 647130
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 20,
    "AGE 0-4": 2431,
    "AGE 25-49": "1345",
    "AGE 25-64": "X",
    "AGE 5-24": 2583,
    "AGE 50-64": "565",
    "AGE 65": 393,
    ILITOTAL: 7317,
    "TOTAL PATIENTS": 623114
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 21,
    "AGE 0-4": 2230,
    "AGE 25-49": "1279",
    "AGE 25-64": "X",
    "AGE 5-24": 2219,
    "AGE 50-64": "493",
    "AGE 65": 368,
    ILITOTAL: 6589,
    "TOTAL PATIENTS": 581338
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 22,
    "AGE 0-4": 2109,
    "AGE 25-49": "1147",
    "AGE 25-64": "X",
    "AGE 5-24": 2094,
    "AGE 50-64": "483",
    "AGE 65": 357,
    ILITOTAL: 6190,
    "TOTAL PATIENTS": 541528
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 23,
    "AGE 0-4": 1983,
    "AGE 25-49": "1086",
    "AGE 25-64": "X",
    "AGE 5-24": 1779,
    "AGE 50-64": "460",
    "AGE 65": 330,
    ILITOTAL: 5638,
    "TOTAL PATIENTS": 558875
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 24,
    "AGE 0-4": 1969,
    "AGE 25-49": "1112",
    "AGE 25-64": "X",
    "AGE 5-24": 1713,
    "AGE 50-64": "468",
    "AGE 65": 277,
    ILITOTAL: 5539,
    "TOTAL PATIENTS": 541138
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 25,
    "AGE 0-4": 1877,
    "AGE 25-49": "1040",
    "AGE 25-64": "X",
    "AGE 5-24": 1766,
    "AGE 50-64": "489",
    "AGE 65": 302,
    ILITOTAL: 5474,
    "TOTAL PATIENTS": 546643
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 26,
    "AGE 0-4": 1703,
    "AGE 25-49": "947",
    "AGE 25-64": "X",
    "AGE 5-24": 1581,
    "AGE 50-64": "399",
    "AGE 65": 285,
    ILITOTAL: 4915,
    "TOTAL PATIENTS": 540408
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 27,
    "AGE 0-4": 1594,
    "AGE 25-49": "851",
    "AGE 25-64": "X",
    "AGE 5-24": 1489,
    "AGE 50-64": "321",
    "AGE 65": 251,
    ILITOTAL: 4506,
    "TOTAL PATIENTS": 474295
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 28,
    "AGE 0-4": 1576,
    "AGE 25-49": "862",
    "AGE 25-64": "X",
    "AGE 5-24": 1491,
    "AGE 50-64": "362",
    "AGE 65": 219,
    ILITOTAL: 4510,
    "TOTAL PATIENTS": 543833
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 29,
    "AGE 0-4": 1432,
    "AGE 25-49": "849",
    "AGE 25-64": "X",
    "AGE 5-24": 1405,
    "AGE 50-64": "315",
    "AGE 65": 185,
    ILITOTAL: 4186,
    "TOTAL PATIENTS": 521874
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 30,
    "AGE 0-4": 1416,
    "AGE 25-49": "800",
    "AGE 25-64": "X",
    "AGE 5-24": 1464,
    "AGE 50-64": "332",
    "AGE 65": 221,
    ILITOTAL: 4233,
    "TOTAL PATIENTS": 524969
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 31,
    "AGE 0-4": 1216,
    "AGE 25-49": "852",
    "AGE 25-64": "X",
    "AGE 5-24": 1284,
    "AGE 50-64": "350",
    "AGE 65": 184,
    ILITOTAL: 3886,
    "TOTAL PATIENTS": 487617
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 32,
    "AGE 0-4": 1367,
    "AGE 25-49": "870",
    "AGE 25-64": "X",
    "AGE 5-24": 1338,
    "AGE 50-64": "302",
    "AGE 65": 198,
    ILITOTAL: 4075,
    "TOTAL PATIENTS": 523015
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 33,
    "AGE 0-4": 1364,
    "AGE 25-49": "919",
    "AGE 25-64": "X",
    "AGE 5-24": 1366,
    "AGE 50-64": "331",
    "AGE 65": 188,
    ILITOTAL: 4168,
    "TOTAL PATIENTS": 522533
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 34,
    "AGE 0-4": 1331,
    "AGE 25-49": "892",
    "AGE 25-64": "X",
    "AGE 5-24": 1561,
    "AGE 50-64": "301",
    "AGE 65": 232,
    ILITOTAL: 4317,
    "TOTAL PATIENTS": 522965
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 35,
    "AGE 0-4": 1499,
    "AGE 25-49": "1014",
    "AGE 25-64": "X",
    "AGE 5-24": 1814,
    "AGE 50-64": "410",
    "AGE 65": 316,
    ILITOTAL: 5053,
    "TOTAL PATIENTS": 540157
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 36,
    "AGE 0-4": 1681,
    "AGE 25-49": "1137",
    "AGE 25-64": "X",
    "AGE 5-24": 2035,
    "AGE 50-64": "462",
    "AGE 65": 311,
    ILITOTAL: 5626,
    "TOTAL PATIENTS": 539175
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 37,
    "AGE 0-4": 1926,
    "AGE 25-49": "1217",
    "AGE 25-64": "X",
    "AGE 5-24": 2437,
    "AGE 50-64": "440",
    "AGE 65": 354,
    ILITOTAL: 6374,
    "TOTAL PATIENTS": 584196
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 38,
    "AGE 0-4": 2175,
    "AGE 25-49": "1350",
    "AGE 25-64": "X",
    "AGE 5-24": 2683,
    "AGE 50-64": "537",
    "AGE 65": 365,
    ILITOTAL: 7110,
    "TOTAL PATIENTS": 591969
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 39,
    "AGE 0-4": 2393,
    "AGE 25-49": "1500",
    "AGE 25-64": "X",
    "AGE 5-24": 2963,
    "AGE 50-64": "648",
    "AGE 65": 459,
    ILITOTAL: 7963,
    "TOTAL PATIENTS": 631088
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 40,
    "AGE 0-4": 2974,
    "AGE 25-49": "1840",
    "AGE 25-64": "X",
    "AGE 5-24": 3769,
    "AGE 50-64": "638",
    "AGE 65": 456,
    ILITOTAL: 9677,
    "TOTAL PATIENTS": 854487
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 41,
    "AGE 0-4": 3276,
    "AGE 25-49": "1924",
    "AGE 25-64": "X",
    "AGE 5-24": 3925,
    "AGE 50-64": "762",
    "AGE 65": 533,
    ILITOTAL: 10420,
    "TOTAL PATIENTS": 860298
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 42,
    "AGE 0-4": 3483,
    "AGE 25-49": "2010",
    "AGE 25-64": "X",
    "AGE 5-24": 3880,
    "AGE 50-64": "785",
    "AGE 65": 500,
    ILITOTAL: 10658,
    "TOTAL PATIENTS": 848016
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 43,
    "AGE 0-4": 3930,
    "AGE 25-49": "2292",
    "AGE 25-64": "X",
    "AGE 5-24": 4484,
    "AGE 50-64": "816",
    "AGE 65": 514,
    ILITOTAL: 12036,
    "TOTAL PATIENTS": 877917
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 44,
    "AGE 0-4": 4045,
    "AGE 25-49": "2354",
    "AGE 25-64": "X",
    "AGE 5-24": 4642,
    "AGE 50-64": "930",
    "AGE 65": 531,
    ILITOTAL: 12502,
    "TOTAL PATIENTS": 874537
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 45,
    "AGE 0-4": 4434,
    "AGE 25-49": "2511",
    "AGE 25-64": "X",
    "AGE 5-24": 5062,
    "AGE 50-64": "953",
    "AGE 65": 538,
    ILITOTAL: 13498,
    "TOTAL PATIENTS": 878845
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 46,
    "AGE 0-4": 4643,
    "AGE 25-49": "2716",
    "AGE 25-64": "X",
    "AGE 5-24": 5000,
    "AGE 50-64": "990",
    "AGE 65": 578,
    ILITOTAL: 13927,
    "TOTAL PATIENTS": 868987
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 47,
    "AGE 0-4": 4835,
    "AGE 25-49": "3088",
    "AGE 25-64": "X",
    "AGE 5-24": 5579,
    "AGE 50-64": "1083",
    "AGE 65": 583,
    ILITOTAL: 15168,
    "TOTAL PATIENTS": 875411
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 48,
    "AGE 0-4": 4937,
    "AGE 25-49": "3027",
    "AGE 25-64": "X",
    "AGE 5-24": 4313,
    "AGE 50-64": "1059",
    "AGE 65": 639,
    ILITOTAL: 13975,
    "TOTAL PATIENTS": 665926
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 49,
    "AGE 0-4": 5549,
    "AGE 25-49": "4375",
    "AGE 25-64": "X",
    "AGE 5-24": 6579,
    "AGE 50-64": "1552",
    "AGE 65": 865,
    ILITOTAL: 18920,
    "TOTAL PATIENTS": 854664
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 50,
    "AGE 0-4": 5501,
    "AGE 25-49": "4458",
    "AGE 25-64": "X",
    "AGE 5-24": 7046,
    "AGE 50-64": "1591",
    "AGE 65": 802,
    ILITOTAL: 19398,
    "TOTAL PATIENTS": 802651
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 51,
    "AGE 0-4": 6555,
    "AGE 25-49": "6525",
    "AGE 25-64": "X",
    "AGE 5-24": 8406,
    "AGE 50-64": "2272",
    "AGE 65": 939,
    ILITOTAL: 24697,
    "TOTAL PATIENTS": 814891
  },
  {
    "REGION TYPE": "National",
    YEAR: 2013,
    WEEK: 52,
    "AGE 0-4": 7814,
    "AGE 25-49": "7499",
    "AGE 25-64": "X",
    "AGE 5-24": 7485,
    "AGE 50-64": "2874",
    "AGE 65": 1316,
    ILITOTAL: 26988,
    "TOTAL PATIENTS": 615148
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 1,
    "AGE 0-4": 7488,
    "AGE 25-49": "9135",
    "AGE 25-64": "X",
    "AGE 5-24": 6726,
    "AGE 50-64": "3555",
    "AGE 65": 1750,
    ILITOTAL: 28654,
    "TOTAL PATIENTS": 680424
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 2,
    "AGE 0-4": 6233,
    "AGE 25-49": "8846",
    "AGE 25-64": "X",
    "AGE 5-24": 7881,
    "AGE 50-64": "3565",
    "AGE 65": 1622,
    ILITOTAL: 28147,
    "TOTAL PATIENTS": 812343
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 3,
    "AGE 0-4": 6007,
    "AGE 25-49": "8091",
    "AGE 25-64": "X",
    "AGE 5-24": 9517,
    "AGE 50-64": "3149",
    "AGE 65": 1606,
    ILITOTAL: 28370,
    "TOTAL PATIENTS": 855297
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 4,
    "AGE 0-4": 5878,
    "AGE 25-49": "6818",
    "AGE 25-64": "X",
    "AGE 5-24": 8858,
    "AGE 50-64": "2616",
    "AGE 65": 1332,
    ILITOTAL: 25502,
    "TOTAL PATIENTS": 786928
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 5,
    "AGE 0-4": 5133,
    "AGE 25-49": "6031",
    "AGE 25-64": "X",
    "AGE 5-24": 8714,
    "AGE 50-64": "2403",
    "AGE 65": 1203,
    ILITOTAL: 23484,
    "TOTAL PATIENTS": 813726
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 6,
    "AGE 0-4": 4729,
    "AGE 25-49": "5278",
    "AGE 25-64": "X",
    "AGE 5-24": 7711,
    "AGE 50-64": "2242",
    "AGE 65": 1125,
    ILITOTAL: 21085,
    "TOTAL PATIENTS": 804244
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 7,
    "AGE 0-4": 4210,
    "AGE 25-49": "4470",
    "AGE 25-64": "X",
    "AGE 5-24": 6717,
    "AGE 50-64": "1829",
    "AGE 65": 969,
    ILITOTAL: 18195,
    "TOTAL PATIENTS": 777340
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 8,
    "AGE 0-4": 4250,
    "AGE 25-49": "4306",
    "AGE 25-64": "X",
    "AGE 5-24": 6121,
    "AGE 50-64": "1684",
    "AGE 65": 873,
    ILITOTAL: 17234,
    "TOTAL PATIENTS": 812700
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 9,
    "AGE 0-4": 3953,
    "AGE 25-49": "3691",
    "AGE 25-64": "X",
    "AGE 5-24": 5875,
    "AGE 50-64": "1505",
    "AGE 65": 890,
    ILITOTAL: 15914,
    "TOTAL PATIENTS": 832786
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 10,
    "AGE 0-4": 3775,
    "AGE 25-49": "3472",
    "AGE 25-64": "X",
    "AGE 5-24": 5575,
    "AGE 50-64": "1430",
    "AGE 65": 792,
    ILITOTAL: 15044,
    "TOTAL PATIENTS": 790831
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 11,
    "AGE 0-4": 3616,
    "AGE 25-49": "3210",
    "AGE 25-64": "X",
    "AGE 5-24": 5022,
    "AGE 50-64": "1360",
    "AGE 65": 816,
    ILITOTAL: 14024,
    "TOTAL PATIENTS": 794024
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 12,
    "AGE 0-4": 3798,
    "AGE 25-49": "3285",
    "AGE 25-64": "X",
    "AGE 5-24": 5611,
    "AGE 50-64": "1422",
    "AGE 65": 810,
    ILITOTAL: 14926,
    "TOTAL PATIENTS": 803374
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 13,
    "AGE 0-4": 3523,
    "AGE 25-49": "3256",
    "AGE 25-64": "X",
    "AGE 5-24": 5812,
    "AGE 50-64": "1298",
    "AGE 65": 772,
    ILITOTAL: 14661,
    "TOTAL PATIENTS": 805133
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 14,
    "AGE 0-4": 3582,
    "AGE 25-49": "3153",
    "AGE 25-64": "X",
    "AGE 5-24": 5659,
    "AGE 50-64": "1436",
    "AGE 65": 807,
    ILITOTAL: 14637,
    "TOTAL PATIENTS": 797863
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 15,
    "AGE 0-4": 3574,
    "AGE 25-49": "2943",
    "AGE 25-64": "X",
    "AGE 5-24": 5587,
    "AGE 50-64": "1316",
    "AGE 65": 786,
    ILITOTAL: 14206,
    "TOTAL PATIENTS": 809707
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 16,
    "AGE 0-4": 3130,
    "AGE 25-49": "2516",
    "AGE 25-64": "X",
    "AGE 5-24": 4279,
    "AGE 50-64": "1088",
    "AGE 65": 710,
    ILITOTAL: 11723,
    "TOTAL PATIENTS": 773101
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 17,
    "AGE 0-4": 2846,
    "AGE 25-49": "2504",
    "AGE 25-64": "X",
    "AGE 5-24": 3770,
    "AGE 50-64": "1036",
    "AGE 65": 658,
    ILITOTAL: 10814,
    "TOTAL PATIENTS": 770592
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 18,
    "AGE 0-4": 2501,
    "AGE 25-49": "2084",
    "AGE 25-64": "X",
    "AGE 5-24": 3591,
    "AGE 50-64": "913",
    "AGE 65": 559,
    ILITOTAL: 9648,
    "TOTAL PATIENTS": 766139
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 19,
    "AGE 0-4": 2789,
    "AGE 25-49": "2009",
    "AGE 25-64": "X",
    "AGE 5-24": 3615,
    "AGE 50-64": "834",
    "AGE 65": 528,
    ILITOTAL: 9775,
    "TOTAL PATIENTS": 737834
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 20,
    "AGE 0-4": 2544,
    "AGE 25-49": "1876",
    "AGE 25-64": "X",
    "AGE 5-24": 3256,
    "AGE 50-64": "825",
    "AGE 65": 532,
    ILITOTAL: 9033,
    "TOTAL PATIENTS": 708049
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 21,
    "AGE 0-4": 2733,
    "AGE 25-49": "1742",
    "AGE 25-64": "X",
    "AGE 5-24": 3068,
    "AGE 50-64": "771",
    "AGE 65": 483,
    ILITOTAL: 8797,
    "TOTAL PATIENTS": 679395
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 22,
    "AGE 0-4": 2528,
    "AGE 25-49": "1542",
    "AGE 25-64": "X",
    "AGE 5-24": 2459,
    "AGE 50-64": "625",
    "AGE 65": 504,
    ILITOTAL: 7658,
    "TOTAL PATIENTS": 624582
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 23,
    "AGE 0-4": 2383,
    "AGE 25-49": "1492",
    "AGE 25-64": "X",
    "AGE 5-24": 2349,
    "AGE 50-64": "607",
    "AGE 65": 398,
    ILITOTAL: 7229,
    "TOTAL PATIENTS": 631143
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 24,
    "AGE 0-4": 2227,
    "AGE 25-49": "1413",
    "AGE 25-64": "X",
    "AGE 5-24": 2181,
    "AGE 50-64": "561",
    "AGE 65": 401,
    ILITOTAL: 6783,
    "TOTAL PATIENTS": 635233
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 25,
    "AGE 0-4": 2159,
    "AGE 25-49": "1285",
    "AGE 25-64": "X",
    "AGE 5-24": 2009,
    "AGE 50-64": "528",
    "AGE 65": 388,
    ILITOTAL: 6369,
    "TOTAL PATIENTS": 593740
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 26,
    "AGE 0-4": 2049,
    "AGE 25-49": "1235",
    "AGE 25-64": "X",
    "AGE 5-24": 1917,
    "AGE 50-64": "509",
    "AGE 65": 328,
    ILITOTAL: 6038,
    "TOTAL PATIENTS": 596063
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 27,
    "AGE 0-4": 1865,
    "AGE 25-49": "1075",
    "AGE 25-64": "X",
    "AGE 5-24": 1688,
    "AGE 50-64": "416",
    "AGE 65": 308,
    ILITOTAL: 5352,
    "TOTAL PATIENTS": 538049
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 28,
    "AGE 0-4": 1758,
    "AGE 25-49": "1122",
    "AGE 25-64": "X",
    "AGE 5-24": 1623,
    "AGE 50-64": "441",
    "AGE 65": 351,
    ILITOTAL: 5295,
    "TOTAL PATIENTS": 601116
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 29,
    "AGE 0-4": 1582,
    "AGE 25-49": "1116",
    "AGE 25-64": "X",
    "AGE 5-24": 1621,
    "AGE 50-64": "403",
    "AGE 65": 361,
    ILITOTAL: 5083,
    "TOTAL PATIENTS": 592305
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 30,
    "AGE 0-4": 1455,
    "AGE 25-49": "1128",
    "AGE 25-64": "X",
    "AGE 5-24": 1450,
    "AGE 50-64": "398",
    "AGE 65": 334,
    ILITOTAL: 4765,
    "TOTAL PATIENTS": 591814
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 31,
    "AGE 0-4": 1450,
    "AGE 25-49": "1094",
    "AGE 25-64": "X",
    "AGE 5-24": 1655,
    "AGE 50-64": "417",
    "AGE 65": 326,
    ILITOTAL: 4942,
    "TOTAL PATIENTS": 603580
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 32,
    "AGE 0-4": 1460,
    "AGE 25-49": "1074",
    "AGE 25-64": "X",
    "AGE 5-24": 1528,
    "AGE 50-64": "409",
    "AGE 65": 273,
    ILITOTAL: 4744,
    "TOTAL PATIENTS": 605307
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 33,
    "AGE 0-4": 1528,
    "AGE 25-49": "1107",
    "AGE 25-64": "X",
    "AGE 5-24": 1631,
    "AGE 50-64": "403",
    "AGE 65": 311,
    ILITOTAL: 4980,
    "TOTAL PATIENTS": 586778
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 34,
    "AGE 0-4": 1569,
    "AGE 25-49": "1196",
    "AGE 25-64": "X",
    "AGE 5-24": 1813,
    "AGE 50-64": "412",
    "AGE 65": 315,
    ILITOTAL: 5305,
    "TOTAL PATIENTS": 635980
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 35,
    "AGE 0-4": 1684,
    "AGE 25-49": "1223",
    "AGE 25-64": "X",
    "AGE 5-24": 2184,
    "AGE 50-64": "401",
    "AGE 65": 307,
    ILITOTAL: 5799,
    "TOTAL PATIENTS": 640080
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 36,
    "AGE 0-4": 1753,
    "AGE 25-49": "1284",
    "AGE 25-64": "X",
    "AGE 5-24": 2258,
    "AGE 50-64": "453",
    "AGE 65": 302,
    ILITOTAL: 6050,
    "TOTAL PATIENTS": 578913
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 37,
    "AGE 0-4": 2300,
    "AGE 25-49": "1550",
    "AGE 25-64": "X",
    "AGE 5-24": 3316,
    "AGE 50-64": "568",
    "AGE 65": 396,
    ILITOTAL: 8130,
    "TOTAL PATIENTS": 695966
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 38,
    "AGE 0-4": 2535,
    "AGE 25-49": "1705",
    "AGE 25-64": "X",
    "AGE 5-24": 3650,
    "AGE 50-64": "605",
    "AGE 65": 393,
    ILITOTAL: 8888,
    "TOTAL PATIENTS": 696282
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 39,
    "AGE 0-4": 2522,
    "AGE 25-49": "1820",
    "AGE 25-64": "X",
    "AGE 5-24": 3447,
    "AGE 50-64": "657",
    "AGE 65": 428,
    ILITOTAL: 8874,
    "TOTAL PATIENTS": 683887
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 40,
    "AGE 0-4": 2958,
    "AGE 25-49": "1959",
    "AGE 25-64": "X",
    "AGE 5-24": 3994,
    "AGE 50-64": "712",
    "AGE 65": 527,
    ILITOTAL: 10150,
    "TOTAL PATIENTS": 841540
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 41,
    "AGE 0-4": 3055,
    "AGE 25-49": "2116",
    "AGE 25-64": "X",
    "AGE 5-24": 4437,
    "AGE 50-64": "821",
    "AGE 65": 548,
    ILITOTAL: 10977,
    "TOTAL PATIENTS": 828544
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 42,
    "AGE 0-4": 3442,
    "AGE 25-49": "2321",
    "AGE 25-64": "X",
    "AGE 5-24": 4728,
    "AGE 50-64": "870",
    "AGE 65": 580,
    ILITOTAL: 11941,
    "TOTAL PATIENTS": 845727
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 43,
    "AGE 0-4": 3455,
    "AGE 25-49": "2459",
    "AGE 25-64": "X",
    "AGE 5-24": 4955,
    "AGE 50-64": "892",
    "AGE 65": 531,
    ILITOTAL: 12292,
    "TOTAL PATIENTS": 862314
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 44,
    "AGE 0-4": 3632,
    "AGE 25-49": "2242",
    "AGE 25-64": "X",
    "AGE 5-24": 5102,
    "AGE 50-64": "807",
    "AGE 65": 530,
    ILITOTAL: 12313,
    "TOTAL PATIENTS": 855608
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 45,
    "AGE 0-4": 4277,
    "AGE 25-49": "2349",
    "AGE 25-64": "X",
    "AGE 5-24": 5799,
    "AGE 50-64": "863",
    "AGE 65": 565,
    ILITOTAL: 13853,
    "TOTAL PATIENTS": 857601
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 46,
    "AGE 0-4": 4424,
    "AGE 25-49": "2323",
    "AGE 25-64": "X",
    "AGE 5-24": 5816,
    "AGE 50-64": "911",
    "AGE 65": 588,
    ILITOTAL: 14062,
    "TOTAL PATIENTS": 844700
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 47,
    "AGE 0-4": 4740,
    "AGE 25-49": "2921",
    "AGE 25-64": "X",
    "AGE 5-24": 7322,
    "AGE 50-64": "1049",
    "AGE 65": 642,
    ILITOTAL: 16674,
    "TOTAL PATIENTS": 831289
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 48,
    "AGE 0-4": 5432,
    "AGE 25-49": "3277",
    "AGE 25-64": "X",
    "AGE 5-24": 6848,
    "AGE 50-64": "1165",
    "AGE 65": 880,
    ILITOTAL: 17602,
    "TOTAL PATIENTS": 671251
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 49,
    "AGE 0-4": 6185,
    "AGE 25-49": "4623",
    "AGE 25-64": "X",
    "AGE 5-24": 9106,
    "AGE 50-64": "1767",
    "AGE 65": 1224,
    ILITOTAL: 22905,
    "TOTAL PATIENTS": 878430
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 50,
    "AGE 0-4": 7424,
    "AGE 25-49": "5287",
    "AGE 25-64": "X",
    "AGE 5-24": 13050,
    "AGE 50-64": "1970",
    "AGE 65": 1441,
    ILITOTAL: 29172,
    "TOTAL PATIENTS": 853532
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 51,
    "AGE 0-4": 9270,
    "AGE 25-49": "6920",
    "AGE 25-64": "X",
    "AGE 5-24": 16418,
    "AGE 50-64": "2671",
    "AGE 65": 2103,
    ILITOTAL: 37382,
    "TOTAL PATIENTS": 837119
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 52,
    "AGE 0-4": 10363,
    "AGE 25-49": "8982",
    "AGE 25-64": "X",
    "AGE 5-24": 13951,
    "AGE 50-64": "3718",
    "AGE 65": 3519,
    ILITOTAL: 40533,
    "TOTAL PATIENTS": 662849
  },
  {
    "REGION TYPE": "National",
    YEAR: 2014,
    WEEK: 53,
    "AGE 0-4": 9732,
    "AGE 25-49": "9348",
    "AGE 25-64": "X",
    "AGE 5-24": 9406,
    "AGE 50-64": "4288",
    "AGE 65": 4117,
    ILITOTAL: 36891,
    "TOTAL PATIENTS": 694773
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 1,
    "AGE 0-4": 7160,
    "AGE 25-49": "8072",
    "AGE 25-64": "X",
    "AGE 5-24": 9589,
    "AGE 50-64": "3614",
    "AGE 65": 3048,
    ILITOTAL: 31483,
    "TOTAL PATIENTS": 771835
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 2,
    "AGE 0-4": 7044,
    "AGE 25-49": "6946",
    "AGE 25-64": "X",
    "AGE 5-24": 11966,
    "AGE 50-64": "2909",
    "AGE 65": 2339,
    ILITOTAL: 31204,
    "TOTAL PATIENTS": 792459
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 3,
    "AGE 0-4": 7840,
    "AGE 25-49": "6451",
    "AGE 25-64": "X",
    "AGE 5-24": 13949,
    "AGE 50-64": "2951",
    "AGE 65": 2030,
    ILITOTAL: 33221,
    "TOTAL PATIENTS": 800359
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 4,
    "AGE 0-4": 7118,
    "AGE 25-49": "5844",
    "AGE 25-64": "X",
    "AGE 5-24": 13159,
    "AGE 50-64": "2585",
    "AGE 65": 1915,
    ILITOTAL: 30621,
    "TOTAL PATIENTS": 789407
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 5,
    "AGE 0-4": 6656,
    "AGE 25-49": "5380",
    "AGE 25-64": "X",
    "AGE 5-24": 12093,
    "AGE 50-64": "2368",
    "AGE 65": 1654,
    ILITOTAL: 28151,
    "TOTAL PATIENTS": 814097
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 6,
    "AGE 0-4": 6429,
    "AGE 25-49": "4884",
    "AGE 25-64": "X",
    "AGE 5-24": 10328,
    "AGE 50-64": "2072",
    "AGE 65": 1505,
    ILITOTAL: 25218,
    "TOTAL PATIENTS": 823153
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 7,
    "AGE 0-4": 5537,
    "AGE 25-49": "4295",
    "AGE 25-64": "X",
    "AGE 5-24": 8164,
    "AGE 50-64": "1842",
    "AGE 65": 1271,
    ILITOTAL: 21109,
    "TOTAL PATIENTS": 746836
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 8,
    "AGE 0-4": 4823,
    "AGE 25-49": "4061",
    "AGE 25-64": "X",
    "AGE 5-24": 7280,
    "AGE 50-64": "1765",
    "AGE 65": 1249,
    ILITOTAL: 19178,
    "TOTAL PATIENTS": 812660
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 9,
    "AGE 0-4": 4639,
    "AGE 25-49": "3914",
    "AGE 25-64": "X",
    "AGE 5-24": 7116,
    "AGE 50-64": "1696",
    "AGE 65": 1076,
    ILITOTAL: 18441,
    "TOTAL PATIENTS": 789858
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 10,
    "AGE 0-4": 4710,
    "AGE 25-49": "3654",
    "AGE 25-64": "X",
    "AGE 5-24": 6748,
    "AGE 50-64": "1654",
    "AGE 65": 1067,
    ILITOTAL: 17833,
    "TOTAL PATIENTS": 805881
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 11,
    "AGE 0-4": 4559,
    "AGE 25-49": "3482",
    "AGE 25-64": "X",
    "AGE 5-24": 6084,
    "AGE 50-64": "1573",
    "AGE 65": 997,
    ILITOTAL: 16695,
    "TOTAL PATIENTS": 804117
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 12,
    "AGE 0-4": 4418,
    "AGE 25-49": "3284",
    "AGE 25-64": "X",
    "AGE 5-24": 6003,
    "AGE 50-64": "1486",
    "AGE 65": 931,
    ILITOTAL: 16122,
    "TOTAL PATIENTS": 801027
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 13,
    "AGE 0-4": 4174,
    "AGE 25-49": "2968",
    "AGE 25-64": "X",
    "AGE 5-24": 5623,
    "AGE 50-64": "1321",
    "AGE 65": 889,
    ILITOTAL: 14975,
    "TOTAL PATIENTS": 771143
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 14,
    "AGE 0-4": 3903,
    "AGE 25-49": "2931",
    "AGE 25-64": "X",
    "AGE 5-24": 4634,
    "AGE 50-64": "1387",
    "AGE 65": 878,
    ILITOTAL: 13733,
    "TOTAL PATIENTS": 785602
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 15,
    "AGE 0-4": 3448,
    "AGE 25-49": "2448",
    "AGE 25-64": "X",
    "AGE 5-24": 4214,
    "AGE 50-64": "1160",
    "AGE 65": 774,
    ILITOTAL: 12044,
    "TOTAL PATIENTS": 800974
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 16,
    "AGE 0-4": 3182,
    "AGE 25-49": "2052",
    "AGE 25-64": "X",
    "AGE 5-24": 4011,
    "AGE 50-64": "975",
    "AGE 65": 640,
    ILITOTAL: 10860,
    "TOTAL PATIENTS": 756827
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 17,
    "AGE 0-4": 3203,
    "AGE 25-49": "2122",
    "AGE 25-64": "X",
    "AGE 5-24": 4280,
    "AGE 50-64": "888",
    "AGE 65": 602,
    ILITOTAL: 11095,
    "TOTAL PATIENTS": 761638
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 18,
    "AGE 0-4": 3106,
    "AGE 25-49": "2074",
    "AGE 25-64": "X",
    "AGE 5-24": 4079,
    "AGE 50-64": "846",
    "AGE 65": 589,
    ILITOTAL: 10694,
    "TOTAL PATIENTS": 748690
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 19,
    "AGE 0-4": 2805,
    "AGE 25-49": "1810",
    "AGE 25-64": "X",
    "AGE 5-24": 3641,
    "AGE 50-64": "813",
    "AGE 65": 602,
    ILITOTAL: 9671,
    "TOTAL PATIENTS": 714799
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 20,
    "AGE 0-4": 2754,
    "AGE 25-49": "1768",
    "AGE 25-64": "X",
    "AGE 5-24": 3296,
    "AGE 50-64": "736",
    "AGE 65": 470,
    ILITOTAL: 9024,
    "TOTAL PATIENTS": 678023
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 21,
    "AGE 0-4": 2593,
    "AGE 25-49": "1461",
    "AGE 25-64": "X",
    "AGE 5-24": 2714,
    "AGE 50-64": "652",
    "AGE 65": 493,
    ILITOTAL: 7913,
    "TOTAL PATIENTS": 616171
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 22,
    "AGE 0-4": 2211,
    "AGE 25-49": "1334",
    "AGE 25-64": "X",
    "AGE 5-24": 2345,
    "AGE 50-64": "594",
    "AGE 65": 462,
    ILITOTAL: 6946,
    "TOTAL PATIENTS": 609891
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 23,
    "AGE 0-4": 2109,
    "AGE 25-49": "1320",
    "AGE 25-64": "X",
    "AGE 5-24": 2284,
    "AGE 50-64": "575",
    "AGE 65": 456,
    ILITOTAL: 6744,
    "TOTAL PATIENTS": 611184
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 24,
    "AGE 0-4": 1734,
    "AGE 25-49": "1167",
    "AGE 25-64": "X",
    "AGE 5-24": 2046,
    "AGE 50-64": "495",
    "AGE 65": 408,
    ILITOTAL: 5850,
    "TOTAL PATIENTS": 602628
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 25,
    "AGE 0-4": 1897,
    "AGE 25-49": "1170",
    "AGE 25-64": "X",
    "AGE 5-24": 1921,
    "AGE 50-64": "496",
    "AGE 65": 429,
    ILITOTAL: 5913,
    "TOTAL PATIENTS": 592081
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 26,
    "AGE 0-4": 1678,
    "AGE 25-49": "1043",
    "AGE 25-64": "X",
    "AGE 5-24": 1701,
    "AGE 50-64": "430",
    "AGE 65": 380,
    ILITOTAL: 5232,
    "TOTAL PATIENTS": 534938
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 27,
    "AGE 0-4": 1546,
    "AGE 25-49": "1081",
    "AGE 25-64": "X",
    "AGE 5-24": 1675,
    "AGE 50-64": "443",
    "AGE 65": 371,
    ILITOTAL: 5116,
    "TOTAL PATIENTS": 590468
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 28,
    "AGE 0-4": 1487,
    "AGE 25-49": "1028",
    "AGE 25-64": "X",
    "AGE 5-24": 1609,
    "AGE 50-64": "405",
    "AGE 65": 341,
    ILITOTAL: 4870,
    "TOTAL PATIENTS": 588337
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 29,
    "AGE 0-4": 1383,
    "AGE 25-49": "1011",
    "AGE 25-64": "X",
    "AGE 5-24": 1498,
    "AGE 50-64": "413",
    "AGE 65": 321,
    ILITOTAL: 4626,
    "TOTAL PATIENTS": 580010
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 30,
    "AGE 0-4": 1415,
    "AGE 25-49": "999",
    "AGE 25-64": "X",
    "AGE 5-24": 1459,
    "AGE 50-64": "432",
    "AGE 65": 300,
    ILITOTAL: 4605,
    "TOTAL PATIENTS": 567663
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 31,
    "AGE 0-4": 1392,
    "AGE 25-49": "1026",
    "AGE 25-64": "X",
    "AGE 5-24": 1590,
    "AGE 50-64": "420",
    "AGE 65": 325,
    ILITOTAL: 4753,
    "TOTAL PATIENTS": 578812
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 32,
    "AGE 0-4": 1330,
    "AGE 25-49": "1062",
    "AGE 25-64": "X",
    "AGE 5-24": 1667,
    "AGE 50-64": "400",
    "AGE 65": 291,
    ILITOTAL: 4750,
    "TOTAL PATIENTS": 579668
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 33,
    "AGE 0-4": 1429,
    "AGE 25-49": "1134",
    "AGE 25-64": "X",
    "AGE 5-24": 1815,
    "AGE 50-64": "436",
    "AGE 65": 359,
    ILITOTAL: 5173,
    "TOTAL PATIENTS": 609994
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 34,
    "AGE 0-4": 1687,
    "AGE 25-49": "1151",
    "AGE 25-64": "X",
    "AGE 5-24": 2033,
    "AGE 50-64": "423",
    "AGE 65": 354,
    ILITOTAL: 5648,
    "TOTAL PATIENTS": 635661
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 35,
    "AGE 0-4": 1636,
    "AGE 25-49": "1230",
    "AGE 25-64": "X",
    "AGE 5-24": 2292,
    "AGE 50-64": "481",
    "AGE 65": 324,
    ILITOTAL: 5963,
    "TOTAL PATIENTS": 619323
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 36,
    "AGE 0-4": 1714,
    "AGE 25-49": "1297",
    "AGE 25-64": "X",
    "AGE 5-24": 2169,
    "AGE 50-64": "461",
    "AGE 65": 329,
    ILITOTAL: 5970,
    "TOTAL PATIENTS": 583853
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 37,
    "AGE 0-4": 1993,
    "AGE 25-49": "1392",
    "AGE 25-64": "X",
    "AGE 5-24": 2744,
    "AGE 50-64": "536",
    "AGE 65": 397,
    ILITOTAL: 7062,
    "TOTAL PATIENTS": 651524
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 38,
    "AGE 0-4": 2178,
    "AGE 25-49": "1520",
    "AGE 25-64": "X",
    "AGE 5-24": 2947,
    "AGE 50-64": "627",
    "AGE 65": 432,
    ILITOTAL: 7704,
    "TOTAL PATIENTS": 654414
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 39,
    "AGE 0-4": 2170,
    "AGE 25-49": "1654",
    "AGE 25-64": "X",
    "AGE 5-24": 2746,
    "AGE 50-64": "652",
    "AGE 65": 404,
    ILITOTAL: 7626,
    "TOTAL PATIENTS": 650904
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 40,
    "AGE 0-4": 2849,
    "AGE 25-49": "2015",
    "AGE 25-64": "X",
    "AGE 5-24": 3693,
    "AGE 50-64": "871",
    "AGE 65": 621,
    ILITOTAL: 10049,
    "TOTAL PATIENTS": 808287
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 41,
    "AGE 0-4": 3016,
    "AGE 25-49": "2102",
    "AGE 25-64": "X",
    "AGE 5-24": 4007,
    "AGE 50-64": "912",
    "AGE 65": 678,
    ILITOTAL: 10715,
    "TOTAL PATIENTS": 809660
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 42,
    "AGE 0-4": 3263,
    "AGE 25-49": "2357",
    "AGE 25-64": "X",
    "AGE 5-24": 4360,
    "AGE 50-64": "951",
    "AGE 65": 653,
    ILITOTAL: 11584,
    "TOTAL PATIENTS": 825079
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 43,
    "AGE 0-4": 3141,
    "AGE 25-49": "2254",
    "AGE 25-64": "X",
    "AGE 5-24": 4148,
    "AGE 50-64": "927",
    "AGE 65": 694,
    ILITOTAL: 11164,
    "TOTAL PATIENTS": 811165
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 44,
    "AGE 0-4": 3563,
    "AGE 25-49": "2450",
    "AGE 25-64": "X",
    "AGE 5-24": 4783,
    "AGE 50-64": "935",
    "AGE 65": 692,
    ILITOTAL: 12423,
    "TOTAL PATIENTS": 845875
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 45,
    "AGE 0-4": 3746,
    "AGE 25-49": "2517",
    "AGE 25-64": "X",
    "AGE 5-24": 4725,
    "AGE 50-64": "943",
    "AGE 65": 745,
    ILITOTAL: 12676,
    "TOTAL PATIENTS": 826877
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 46,
    "AGE 0-4": 3960,
    "AGE 25-49": "2656",
    "AGE 25-64": "X",
    "AGE 5-24": 5076,
    "AGE 50-64": "1026",
    "AGE 65": 766,
    ILITOTAL: 13484,
    "TOTAL PATIENTS": 838344
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 47,
    "AGE 0-4": 3974,
    "AGE 25-49": "2427",
    "AGE 25-64": "X",
    "AGE 5-24": 4073,
    "AGE 50-64": "981",
    "AGE 65": 703,
    ILITOTAL: 12158,
    "TOTAL PATIENTS": 639738
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 48,
    "AGE 0-4": 4469,
    "AGE 25-49": "3011",
    "AGE 25-64": "X",
    "AGE 5-24": 5076,
    "AGE 50-64": "1232",
    "AGE 65": 829,
    ILITOTAL: 14617,
    "TOTAL PATIENTS": 841777
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 49,
    "AGE 0-4": 4575,
    "AGE 25-49": "2902",
    "AGE 25-64": "X",
    "AGE 5-24": 5384,
    "AGE 50-64": "1252",
    "AGE 65": 873,
    ILITOTAL: 14986,
    "TOTAL PATIENTS": 823657
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 50,
    "AGE 0-4": 5135,
    "AGE 25-49": "2963",
    "AGE 25-64": "X",
    "AGE 5-24": 5105,
    "AGE 50-64": "1250",
    "AGE 65": 943,
    ILITOTAL: 15396,
    "TOTAL PATIENTS": 783227
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 51,
    "AGE 0-4": 5377,
    "AGE 25-49": "2876",
    "AGE 25-64": "X",
    "AGE 5-24": 4317,
    "AGE 50-64": "1256",
    "AGE 65": 1013,
    ILITOTAL: 14839,
    "TOTAL PATIENTS": 613128
  },
  {
    "REGION TYPE": "National",
    YEAR: 2015,
    WEEK: 52,
    "AGE 0-4": 5700,
    "AGE 25-49": "3264",
    "AGE 25-64": "X",
    "AGE 5-24": 4011,
    "AGE 50-64": "1524",
    "AGE 65": 1180,
    ILITOTAL: 15679,
    "TOTAL PATIENTS": 650356
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 1,
    "AGE 0-4": 4775,
    "AGE 25-49": "3597",
    "AGE 25-64": "X",
    "AGE 5-24": 4494,
    "AGE 50-64": "1631",
    "AGE 65": 1157,
    ILITOTAL: 15654,
    "TOTAL PATIENTS": 787192
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 2,
    "AGE 0-4": 4574,
    "AGE 25-49": "3180",
    "AGE 25-64": "X",
    "AGE 5-24": 5362,
    "AGE 50-64": "1380",
    "AGE 65": 1021,
    ILITOTAL: 15517,
    "TOTAL PATIENTS": 779809
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 3,
    "AGE 0-4": 4804,
    "AGE 25-49": "3226",
    "AGE 25-64": "X",
    "AGE 5-24": 5380,
    "AGE 50-64": "1297",
    "AGE 65": 954,
    ILITOTAL: 15661,
    "TOTAL PATIENTS": 743249
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 4,
    "AGE 0-4": 5088,
    "AGE 25-49": "3615",
    "AGE 25-64": "X",
    "AGE 5-24": 6882,
    "AGE 50-64": "1551",
    "AGE 65": 1007,
    ILITOTAL: 18143,
    "TOTAL PATIENTS": 827482
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 5,
    "AGE 0-4": 5135,
    "AGE 25-49": "3759",
    "AGE 25-64": "X",
    "AGE 5-24": 7353,
    "AGE 50-64": "1625",
    "AGE 65": 1072,
    ILITOTAL: 18944,
    "TOTAL PATIENTS": 823602
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 6,
    "AGE 0-4": 5645,
    "AGE 25-49": "4600",
    "AGE 25-64": "X",
    "AGE 5-24": 8434,
    "AGE 50-64": "1916",
    "AGE 65": 1179,
    ILITOTAL: 21774,
    "TOTAL PATIENTS": 813755
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 7,
    "AGE 0-4": 5997,
    "AGE 25-49": "5642",
    "AGE 25-64": "X",
    "AGE 5-24": 9325,
    "AGE 50-64": "2347",
    "AGE 65": 1370,
    ILITOTAL: 24681,
    "TOTAL PATIENTS": 816098
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 8,
    "AGE 0-4": 6299,
    "AGE 25-49": "6001",
    "AGE 25-64": "X",
    "AGE 5-24": 10127,
    "AGE 50-64": "2606",
    "AGE 65": 1390,
    ILITOTAL: 26423,
    "TOTAL PATIENTS": 848718
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 9,
    "AGE 0-4": 6619,
    "AGE 25-49": "6395",
    "AGE 25-64": "X",
    "AGE 5-24": 11415,
    "AGE 50-64": "2599",
    "AGE 65": 1440,
    ILITOTAL: 28468,
    "TOTAL PATIENTS": 855439
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 10,
    "AGE 0-4": 6660,
    "AGE 25-49": "7358",
    "AGE 25-64": "X",
    "AGE 5-24": 11856,
    "AGE 50-64": "2977",
    "AGE 65": 1630,
    ILITOTAL: 30481,
    "TOTAL PATIENTS": 848628
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 11,
    "AGE 0-4": 5574,
    "AGE 25-49": "6026",
    "AGE 25-64": "X",
    "AGE 5-24": 9334,
    "AGE 50-64": "2489",
    "AGE 65": 1471,
    ILITOTAL: 24894,
    "TOTAL PATIENTS": 804948
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 12,
    "AGE 0-4": 5187,
    "AGE 25-49": "4982",
    "AGE 25-64": "X",
    "AGE 5-24": 8489,
    "AGE 50-64": "2000",
    "AGE 65": 1282,
    ILITOTAL: 21940,
    "TOTAL PATIENTS": 786936
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 13,
    "AGE 0-4": 4581,
    "AGE 25-49": "4476",
    "AGE 25-64": "X",
    "AGE 5-24": 7392,
    "AGE 50-64": "1953",
    "AGE 65": 1201,
    ILITOTAL: 19603,
    "TOTAL PATIENTS": 776752
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 14,
    "AGE 0-4": 3707,
    "AGE 25-49": "3869",
    "AGE 25-64": "X",
    "AGE 5-24": 6403,
    "AGE 50-64": "1660",
    "AGE 65": 1130,
    ILITOTAL: 16769,
    "TOTAL PATIENTS": 787543
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 15,
    "AGE 0-4": 3572,
    "AGE 25-49": "3530",
    "AGE 25-64": "X",
    "AGE 5-24": 6595,
    "AGE 50-64": "1533",
    "AGE 65": 1031,
    ILITOTAL: 16261,
    "TOTAL PATIENTS": 792672
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 16,
    "AGE 0-4": 3515,
    "AGE 25-49": "3247",
    "AGE 25-64": "X",
    "AGE 5-24": 6357,
    "AGE 50-64": "1373",
    "AGE 65": 945,
    ILITOTAL: 15437,
    "TOTAL PATIENTS": 775895
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 17,
    "AGE 0-4": 3157,
    "AGE 25-49": "2986",
    "AGE 25-64": "X",
    "AGE 5-24": 5557,
    "AGE 50-64": "1235",
    "AGE 65": 901,
    ILITOTAL: 13836,
    "TOTAL PATIENTS": 774777
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 18,
    "AGE 0-4": 2772,
    "AGE 25-49": "2586",
    "AGE 25-64": "X",
    "AGE 5-24": 4729,
    "AGE 50-64": "1037",
    "AGE 65": 746,
    ILITOTAL: 11870,
    "TOTAL PATIENTS": 741210
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 19,
    "AGE 0-4": 2871,
    "AGE 25-49": "2276",
    "AGE 25-64": "X",
    "AGE 5-24": 4046,
    "AGE 50-64": "849",
    "AGE 65": 665,
    ILITOTAL: 10707,
    "TOTAL PATIENTS": 726244
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 20,
    "AGE 0-4": 2688,
    "AGE 25-49": "1998",
    "AGE 25-64": "X",
    "AGE 5-24": 3630,
    "AGE 50-64": "839",
    "AGE 65": 643,
    ILITOTAL: 9798,
    "TOTAL PATIENTS": 688612
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 21,
    "AGE 0-4": 2612,
    "AGE 25-49": "1714",
    "AGE 25-64": "X",
    "AGE 5-24": 3126,
    "AGE 50-64": "717",
    "AGE 65": 618,
    ILITOTAL: 8787,
    "TOTAL PATIENTS": 635835
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 22,
    "AGE 0-4": 2545,
    "AGE 25-49": "1637",
    "AGE 25-64": "X",
    "AGE 5-24": 2620,
    "AGE 50-64": "663",
    "AGE 65": 532,
    ILITOTAL: 7997,
    "TOTAL PATIENTS": 598077
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 23,
    "AGE 0-4": 2293,
    "AGE 25-49": "1460",
    "AGE 25-64": "X",
    "AGE 5-24": 2313,
    "AGE 50-64": "617",
    "AGE 65": 518,
    ILITOTAL: 7201,
    "TOTAL PATIENTS": 632252
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 24,
    "AGE 0-4": 2189,
    "AGE 25-49": "1354",
    "AGE 25-64": "X",
    "AGE 5-24": 2171,
    "AGE 50-64": "588",
    "AGE 65": 466,
    ILITOTAL: 6768,
    "TOTAL PATIENTS": 617287
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 25,
    "AGE 0-4": 2062,
    "AGE 25-49": "1178",
    "AGE 25-64": "X",
    "AGE 5-24": 1905,
    "AGE 50-64": "493",
    "AGE 65": 386,
    ILITOTAL: 6024,
    "TOTAL PATIENTS": 602666
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 26,
    "AGE 0-4": 1873,
    "AGE 25-49": "1146",
    "AGE 25-64": "X",
    "AGE 5-24": 1810,
    "AGE 50-64": "473",
    "AGE 65": 384,
    ILITOTAL: 5686,
    "TOTAL PATIENTS": 573793
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 27,
    "AGE 0-4": 1646,
    "AGE 25-49": "985",
    "AGE 25-64": "X",
    "AGE 5-24": 1641,
    "AGE 50-64": "463",
    "AGE 65": 383,
    ILITOTAL: 5118,
    "TOTAL PATIENTS": 549582
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 28,
    "AGE 0-4": 1610,
    "AGE 25-49": "1064",
    "AGE 25-64": "X",
    "AGE 5-24": 1599,
    "AGE 50-64": "422",
    "AGE 65": 383,
    ILITOTAL: 5078,
    "TOTAL PATIENTS": 602288
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 29,
    "AGE 0-4": 1670,
    "AGE 25-49": "994",
    "AGE 25-64": "X",
    "AGE 5-24": 1621,
    "AGE 50-64": "384",
    "AGE 65": 375,
    ILITOTAL: 5044,
    "TOTAL PATIENTS": 600272
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 30,
    "AGE 0-4": 1580,
    "AGE 25-49": "1036",
    "AGE 25-64": "X",
    "AGE 5-24": 1624,
    "AGE 50-64": "362",
    "AGE 65": 323,
    ILITOTAL: 4925,
    "TOTAL PATIENTS": 593327
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 31,
    "AGE 0-4": 1455,
    "AGE 25-49": "971",
    "AGE 25-64": "X",
    "AGE 5-24": 1496,
    "AGE 50-64": "359",
    "AGE 65": 315,
    ILITOTAL: 4596,
    "TOTAL PATIENTS": 581457
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 32,
    "AGE 0-4": 1512,
    "AGE 25-49": "1016",
    "AGE 25-64": "X",
    "AGE 5-24": 1639,
    "AGE 50-64": "382",
    "AGE 65": 319,
    ILITOTAL: 4868,
    "TOTAL PATIENTS": 585923
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 33,
    "AGE 0-4": 1644,
    "AGE 25-49": "1028",
    "AGE 25-64": "X",
    "AGE 5-24": 1914,
    "AGE 50-64": "373",
    "AGE 65": 306,
    ILITOTAL: 5265,
    "TOTAL PATIENTS": 614499
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 34,
    "AGE 0-4": 1848,
    "AGE 25-49": "1234",
    "AGE 25-64": "X",
    "AGE 5-24": 2364,
    "AGE 50-64": "465",
    "AGE 65": 349,
    ILITOTAL: 6260,
    "TOTAL PATIENTS": 621362
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 35,
    "AGE 0-4": 1815,
    "AGE 25-49": "1242",
    "AGE 25-64": "X",
    "AGE 5-24": 2651,
    "AGE 50-64": "455",
    "AGE 65": 341,
    ILITOTAL: 6504,
    "TOTAL PATIENTS": 614349
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 36,
    "AGE 0-4": 1883,
    "AGE 25-49": "1284",
    "AGE 25-64": "X",
    "AGE 5-24": 2604,
    "AGE 50-64": "471",
    "AGE 65": 381,
    ILITOTAL: 6623,
    "TOTAL PATIENTS": 601938
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 37,
    "AGE 0-4": 2026,
    "AGE 25-49": "1509",
    "AGE 25-64": "X",
    "AGE 5-24": 3073,
    "AGE 50-64": "579",
    "AGE 65": 452,
    ILITOTAL: 7639,
    "TOTAL PATIENTS": 666755
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 38,
    "AGE 0-4": 2341,
    "AGE 25-49": "1539",
    "AGE 25-64": "X",
    "AGE 5-24": 3298,
    "AGE 50-64": "613",
    "AGE 65": 438,
    ILITOTAL: 8229,
    "TOTAL PATIENTS": 675119
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 39,
    "AGE 0-4": 2413,
    "AGE 25-49": "1645",
    "AGE 25-64": "X",
    "AGE 5-24": 3334,
    "AGE 50-64": "630",
    "AGE 65": 483,
    ILITOTAL: 8505,
    "TOTAL PATIENTS": 648678
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 40,
    "AGE 0-4": 3110,
    "AGE 25-49": "2114",
    "AGE 25-64": "X",
    "AGE 5-24": 4169,
    "AGE 50-64": "828",
    "AGE 65": 643,
    ILITOTAL: 10864,
    "TOTAL PATIENTS": 852842
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 41,
    "AGE 0-4": 3207,
    "AGE 25-49": "2155",
    "AGE 25-64": "X",
    "AGE 5-24": 4078,
    "AGE 50-64": "879",
    "AGE 65": 678,
    ILITOTAL: 10997,
    "TOTAL PATIENTS": 850228
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 42,
    "AGE 0-4": 3564,
    "AGE 25-49": "2234",
    "AGE 25-64": "X",
    "AGE 5-24": 4452,
    "AGE 50-64": "981",
    "AGE 65": 695,
    ILITOTAL: 11926,
    "TOTAL PATIENTS": 896035
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 43,
    "AGE 0-4": 3786,
    "AGE 25-49": "2406",
    "AGE 25-64": "X",
    "AGE 5-24": 4769,
    "AGE 50-64": "987",
    "AGE 65": 700,
    ILITOTAL: 12648,
    "TOTAL PATIENTS": 886570
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 44,
    "AGE 0-4": 4314,
    "AGE 25-49": "2444",
    "AGE 25-64": "X",
    "AGE 5-24": 5287,
    "AGE 50-64": "1030",
    "AGE 65": 715,
    ILITOTAL: 13790,
    "TOTAL PATIENTS": 877947
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 45,
    "AGE 0-4": 4703,
    "AGE 25-49": "2549",
    "AGE 25-64": "X",
    "AGE 5-24": 5193,
    "AGE 50-64": "1055",
    "AGE 65": 758,
    ILITOTAL: 14258,
    "TOTAL PATIENTS": 863356
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 46,
    "AGE 0-4": 4979,
    "AGE 25-49": "2659",
    "AGE 25-64": "X",
    "AGE 5-24": 5610,
    "AGE 50-64": "1083",
    "AGE 65": 829,
    ILITOTAL: 15160,
    "TOTAL PATIENTS": 874739
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 47,
    "AGE 0-4": 5032,
    "AGE 25-49": "2634",
    "AGE 25-64": "X",
    "AGE 5-24": 4567,
    "AGE 50-64": "1108",
    "AGE 65": 867,
    ILITOTAL: 14208,
    "TOTAL PATIENTS": 698566
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 48,
    "AGE 0-4": 5209,
    "AGE 25-49": "3326",
    "AGE 25-64": "X",
    "AGE 5-24": 5655,
    "AGE 50-64": "1359",
    "AGE 65": 1056,
    ILITOTAL: 16605,
    "TOTAL PATIENTS": 881694
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 49,
    "AGE 0-4": 5501,
    "AGE 25-49": "3188",
    "AGE 25-64": "X",
    "AGE 5-24": 5812,
    "AGE 50-64": "1413",
    "AGE 65": 1047,
    ILITOTAL: 16961,
    "TOTAL PATIENTS": 846813
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 50,
    "AGE 0-4": 5744,
    "AGE 25-49": "3491",
    "AGE 25-64": "X",
    "AGE 5-24": 6724,
    "AGE 50-64": "1485",
    "AGE 65": 1019,
    ILITOTAL: 18463,
    "TOTAL PATIENTS": 810736
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 51,
    "AGE 0-4": 6653,
    "AGE 25-49": "4099",
    "AGE 25-64": "X",
    "AGE 5-24": 7469,
    "AGE 50-64": "1923",
    "AGE 65": 1421,
    ILITOTAL: 21565,
    "TOTAL PATIENTS": 739882
  },
  {
    "REGION TYPE": "National",
    YEAR: 2016,
    WEEK: 52,
    "AGE 0-4": 7712,
    "AGE 25-49": "5247",
    "AGE 25-64": "X",
    "AGE 5-24": 7144,
    "AGE 50-64": "2652",
    "AGE 65": 2145,
    ILITOTAL: 24900,
    "TOTAL PATIENTS": 701569
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 1,
    "AGE 0-4": 6716,
    "AGE 25-49": "5673",
    "AGE 25-64": "X",
    "AGE 5-24": 6786,
    "AGE 50-64": "2773",
    "AGE 65": 2230,
    ILITOTAL: 24178,
    "TOTAL PATIENTS": 784740
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 2,
    "AGE 0-4": 6020,
    "AGE 25-49": "5313",
    "AGE 25-64": "X",
    "AGE 5-24": 8843,
    "AGE 50-64": "2639",
    "AGE 65": 2082,
    ILITOTAL: 24897,
    "TOTAL PATIENTS": 824746
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 3,
    "AGE 0-4": 6399,
    "AGE 25-49": "5588",
    "AGE 25-64": "X",
    "AGE 5-24": 12147,
    "AGE 50-64": "2717",
    "AGE 65": 1930,
    ILITOTAL: 28781,
    "TOTAL PATIENTS": 845391
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 4,
    "AGE 0-4": 6958,
    "AGE 25-49": "5788",
    "AGE 25-64": "X",
    "AGE 5-24": 14073,
    "AGE 50-64": "2623",
    "AGE 65": 1823,
    ILITOTAL: 31265,
    "TOTAL PATIENTS": 886023
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 5,
    "AGE 0-4": 7452,
    "AGE 25-49": "6522",
    "AGE 25-64": "X",
    "AGE 5-24": 17482,
    "AGE 50-64": "2968",
    "AGE 65": 2093,
    ILITOTAL: 36517,
    "TOTAL PATIENTS": 889216
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 6,
    "AGE 0-4": 8110,
    "AGE 25-49": "8235",
    "AGE 25-64": "X",
    "AGE 5-24": 20150,
    "AGE 50-64": "3749",
    "AGE 65": 2646,
    ILITOTAL: 42890,
    "TOTAL PATIENTS": 901978
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 7,
    "AGE 0-4": 7726,
    "AGE 25-49": "8328",
    "AGE 25-64": "X",
    "AGE 5-24": 18692,
    "AGE 50-64": "3652",
    "AGE 65": 2637,
    ILITOTAL: 41035,
    "TOTAL PATIENTS": 882163
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 8,
    "AGE 0-4": 7649,
    "AGE 25-49": "8560",
    "AGE 25-64": "X",
    "AGE 5-24": 17300,
    "AGE 50-64": "3807",
    "AGE 65": 2808,
    ILITOTAL: 40124,
    "TOTAL PATIENTS": 877892
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 9,
    "AGE 0-4": 6129,
    "AGE 25-49": "6496",
    "AGE 25-64": "X",
    "AGE 5-24": 12394,
    "AGE 50-64": "2983",
    "AGE 65": 2181,
    ILITOTAL: 30183,
    "TOTAL PATIENTS": 873547
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 10,
    "AGE 0-4": 5854,
    "AGE 25-49": "5970",
    "AGE 25-64": "X",
    "AGE 5-24": 11552,
    "AGE 50-64": "2766",
    "AGE 65": 1918,
    ILITOTAL: 28060,
    "TOTAL PATIENTS": 851580
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 11,
    "AGE 0-4": 5503,
    "AGE 25-49": "5535",
    "AGE 25-64": "X",
    "AGE 5-24": 10084,
    "AGE 50-64": "2582",
    "AGE 65": 1780,
    ILITOTAL: 25484,
    "TOTAL PATIENTS": 805370
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 12,
    "AGE 0-4": 5514,
    "AGE 25-49": "5858",
    "AGE 25-64": "X",
    "AGE 5-24": 11503,
    "AGE 50-64": "2641",
    "AGE 65": 1838,
    ILITOTAL: 27354,
    "TOTAL PATIENTS": 869946
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 13,
    "AGE 0-4": 5145,
    "AGE 25-49": "5070",
    "AGE 25-64": "X",
    "AGE 5-24": 10149,
    "AGE 50-64": "2354",
    "AGE 65": 1624,
    ILITOTAL: 24342,
    "TOTAL PATIENTS": 845397
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 14,
    "AGE 0-4": 4488,
    "AGE 25-49": "3918",
    "AGE 25-64": "X",
    "AGE 5-24": 8178,
    "AGE 50-64": "1760",
    "AGE 65": 1333,
    ILITOTAL: 19677,
    "TOTAL PATIENTS": 830332
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 15,
    "AGE 0-4": 3909,
    "AGE 25-49": "3151",
    "AGE 25-64": "X",
    "AGE 5-24": 5847,
    "AGE 50-64": "1470",
    "AGE 65": 1171,
    ILITOTAL: 15548,
    "TOTAL PATIENTS": 802052
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 16,
    "AGE 0-4": 3306,
    "AGE 25-49": "2766",
    "AGE 25-64": "X",
    "AGE 5-24": 4683,
    "AGE 50-64": "1258",
    "AGE 65": 993,
    ILITOTAL: 13006,
    "TOTAL PATIENTS": 792740
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 17,
    "AGE 0-4": 2997,
    "AGE 25-49": "2391",
    "AGE 25-64": "X",
    "AGE 5-24": 4497,
    "AGE 50-64": "1111",
    "AGE 65": 928,
    ILITOTAL: 11924,
    "TOTAL PATIENTS": 808298
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 18,
    "AGE 0-4": 2890,
    "AGE 25-49": "2039",
    "AGE 25-64": "X",
    "AGE 5-24": 4105,
    "AGE 50-64": "1011",
    "AGE 65": 717,
    ILITOTAL: 10762,
    "TOTAL PATIENTS": 781240
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 19,
    "AGE 0-4": 2751,
    "AGE 25-49": "2037",
    "AGE 25-64": "X",
    "AGE 5-24": 3831,
    "AGE 50-64": "862",
    "AGE 65": 721,
    ILITOTAL: 10202,
    "TOTAL PATIENTS": 762648
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 20,
    "AGE 0-4": 2685,
    "AGE 25-49": "2011",
    "AGE 25-64": "X",
    "AGE 5-24": 3518,
    "AGE 50-64": "886",
    "AGE 65": 709,
    ILITOTAL: 9809,
    "TOTAL PATIENTS": 728288
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 21,
    "AGE 0-4": 2341,
    "AGE 25-49": "1745",
    "AGE 25-64": "X",
    "AGE 5-24": 3060,
    "AGE 50-64": "771",
    "AGE 65": 647,
    ILITOTAL: 8564,
    "TOTAL PATIENTS": 676574
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 22,
    "AGE 0-4": 2311,
    "AGE 25-49": "1577",
    "AGE 25-64": "X",
    "AGE 5-24": 2575,
    "AGE 50-64": "710",
    "AGE 65": 583,
    ILITOTAL: 7756,
    "TOTAL PATIENTS": 617021
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 23,
    "AGE 0-4": 2412,
    "AGE 25-49": "1459",
    "AGE 25-64": "X",
    "AGE 5-24": 2377,
    "AGE 50-64": "671",
    "AGE 65": 591,
    ILITOTAL: 7510,
    "TOTAL PATIENTS": 647145
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 24,
    "AGE 0-4": 2049,
    "AGE 25-49": "1346",
    "AGE 25-64": "X",
    "AGE 5-24": 2099,
    "AGE 50-64": "595",
    "AGE 65": 547,
    ILITOTAL: 6636,
    "TOTAL PATIENTS": 633003
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 25,
    "AGE 0-4": 1930,
    "AGE 25-49": "1282",
    "AGE 25-64": "X",
    "AGE 5-24": 1971,
    "AGE 50-64": "559",
    "AGE 65": 498,
    ILITOTAL: 6240,
    "TOTAL PATIENTS": 628582
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 26,
    "AGE 0-4": 1771,
    "AGE 25-49": "1121",
    "AGE 25-64": "X",
    "AGE 5-24": 1748,
    "AGE 50-64": "489",
    "AGE 65": 467,
    ILITOTAL: 5596,
    "TOTAL PATIENTS": 581945
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 27,
    "AGE 0-4": 1728,
    "AGE 25-49": "1111",
    "AGE 25-64": "X",
    "AGE 5-24": 1564,
    "AGE 50-64": "505",
    "AGE 65": 418,
    ILITOTAL: 5326,
    "TOTAL PATIENTS": 557219
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 28,
    "AGE 0-4": 1545,
    "AGE 25-49": "1004",
    "AGE 25-64": "X",
    "AGE 5-24": 1578,
    "AGE 50-64": "462",
    "AGE 65": 372,
    ILITOTAL: 4961,
    "TOTAL PATIENTS": 599446
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 29,
    "AGE 0-4": 1549,
    "AGE 25-49": "908",
    "AGE 25-64": "X",
    "AGE 5-24": 1421,
    "AGE 50-64": "450",
    "AGE 65": 419,
    ILITOTAL: 4747,
    "TOTAL PATIENTS": 584688
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 30,
    "AGE 0-4": 1576,
    "AGE 25-49": "953",
    "AGE 25-64": "X",
    "AGE 5-24": 1515,
    "AGE 50-64": "459",
    "AGE 65": 376,
    ILITOTAL: 4879,
    "TOTAL PATIENTS": 596071
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 31,
    "AGE 0-4": 1529,
    "AGE 25-49": "1037",
    "AGE 25-64": "X",
    "AGE 5-24": 1485,
    "AGE 50-64": "415",
    "AGE 65": 433,
    ILITOTAL: 4899,
    "TOTAL PATIENTS": 590413
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 32,
    "AGE 0-4": 1559,
    "AGE 25-49": "1044",
    "AGE 25-64": "X",
    "AGE 5-24": 1481,
    "AGE 50-64": "441",
    "AGE 65": 390,
    ILITOTAL: 4915,
    "TOTAL PATIENTS": 593239
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 33,
    "AGE 0-4": 1603,
    "AGE 25-49": "1097",
    "AGE 25-64": "X",
    "AGE 5-24": 1691,
    "AGE 50-64": "427",
    "AGE 65": 412,
    ILITOTAL: 5230,
    "TOTAL PATIENTS": 590363
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 34,
    "AGE 0-4": 1964,
    "AGE 25-49": "1256",
    "AGE 25-64": "X",
    "AGE 5-24": 2549,
    "AGE 50-64": "473",
    "AGE 65": 411,
    ILITOTAL: 6653,
    "TOTAL PATIENTS": 631507
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 35,
    "AGE 0-4": 2076,
    "AGE 25-49": "1302",
    "AGE 25-64": "X",
    "AGE 5-24": 2726,
    "AGE 50-64": "526",
    "AGE 65": 503,
    ILITOTAL: 7133,
    "TOTAL PATIENTS": 638196
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 36,
    "AGE 0-4": 2073,
    "AGE 25-49": "1369",
    "AGE 25-64": "X",
    "AGE 5-24": 2488,
    "AGE 50-64": "587",
    "AGE 65": 555,
    ILITOTAL: 7072,
    "TOTAL PATIENTS": 620201
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 37,
    "AGE 0-4": 2372,
    "AGE 25-49": "1656",
    "AGE 25-64": "X",
    "AGE 5-24": 2942,
    "AGE 50-64": "706",
    "AGE 65": 628,
    ILITOTAL: 8304,
    "TOTAL PATIENTS": 732755
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 38,
    "AGE 0-4": 2544,
    "AGE 25-49": "1625",
    "AGE 25-64": "X",
    "AGE 5-24": 3075,
    "AGE 50-64": "664",
    "AGE 65": 655,
    ILITOTAL: 8563,
    "TOTAL PATIENTS": 728214
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 39,
    "AGE 0-4": 2840,
    "AGE 25-49": "1652",
    "AGE 25-64": "X",
    "AGE 5-24": 3201,
    "AGE 50-64": "746",
    "AGE 65": 640,
    ILITOTAL: 9079,
    "TOTAL PATIENTS": 733077
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 40,
    "AGE 0-4": 3849,
    "AGE 25-49": "2488",
    "AGE 25-64": "X",
    "AGE 5-24": 4556,
    "AGE 50-64": "1071",
    "AGE 65": 875,
    ILITOTAL: 12839,
    "TOTAL PATIENTS": 1002892
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 41,
    "AGE 0-4": 4118,
    "AGE 25-49": "2676",
    "AGE 25-64": "X",
    "AGE 5-24": 4453,
    "AGE 50-64": "1073",
    "AGE 65": 947,
    ILITOTAL: 13267,
    "TOTAL PATIENTS": 996595
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 42,
    "AGE 0-4": 4408,
    "AGE 25-49": "2805",
    "AGE 25-64": "X",
    "AGE 5-24": 4993,
    "AGE 50-64": "1139",
    "AGE 65": 974,
    ILITOTAL: 14319,
    "TOTAL PATIENTS": 1017076
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 43,
    "AGE 0-4": 5006,
    "AGE 25-49": "2922",
    "AGE 25-64": "X",
    "AGE 5-24": 5531,
    "AGE 50-64": "1324",
    "AGE 65": 1049,
    ILITOTAL: 15832,
    "TOTAL PATIENTS": 1006998
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 44,
    "AGE 0-4": 5219,
    "AGE 25-49": "3289",
    "AGE 25-64": "X",
    "AGE 5-24": 6134,
    "AGE 50-64": "1365",
    "AGE 65": 1062,
    ILITOTAL: 17069,
    "TOTAL PATIENTS": 1002140
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 45,
    "AGE 0-4": 6126,
    "AGE 25-49": "3609",
    "AGE 25-64": "X",
    "AGE 5-24": 6671,
    "AGE 50-64": "1522",
    "AGE 65": 1129,
    ILITOTAL: 19057,
    "TOTAL PATIENTS": 1021079
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 46,
    "AGE 0-4": 6880,
    "AGE 25-49": "4243",
    "AGE 25-64": "X",
    "AGE 5-24": 7577,
    "AGE 50-64": "1805",
    "AGE 65": 1387,
    ILITOTAL: 21892,
    "TOTAL PATIENTS": 1054290
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 47,
    "AGE 0-4": 6945,
    "AGE 25-49": "3844",
    "AGE 25-64": "X",
    "AGE 5-24": 5875,
    "AGE 50-64": "1707",
    "AGE 65": 1445,
    ILITOTAL: 19816,
    "TOTAL PATIENTS": 848314
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 48,
    "AGE 0-4": 7008,
    "AGE 25-49": "5235",
    "AGE 25-64": "X",
    "AGE 5-24": 7474,
    "AGE 50-64": "2206",
    "AGE 65": 1829,
    ILITOTAL: 23752,
    "TOTAL PATIENTS": 1057350
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 49,
    "AGE 0-4": 7229,
    "AGE 25-49": "5046",
    "AGE 25-64": "X",
    "AGE 5-24": 8488,
    "AGE 50-64": "2335",
    "AGE 65": 1857,
    ILITOTAL: 24955,
    "TOTAL PATIENTS": 1000183
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 50,
    "AGE 0-4": 8285,
    "AGE 25-49": "6671",
    "AGE 25-64": "X",
    "AGE 5-24": 11259,
    "AGE 50-64": "2955",
    "AGE 65": 2332,
    ILITOTAL: 31502,
    "TOTAL PATIENTS": 984283
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 51,
    "AGE 0-4": 10447,
    "AGE 25-49": "9856",
    "AGE 25-64": "X",
    "AGE 5-24": 14166,
    "AGE 50-64": "4580",
    "AGE 65": 3733,
    ILITOTAL: 42782,
    "TOTAL PATIENTS": 963978
  },
  {
    "REGION TYPE": "National",
    YEAR: 2017,
    WEEK: 52,
    "AGE 0-4": 11335,
    "AGE 25-49": "11507",
    "AGE 25-64": "X",
    "AGE 5-24": 11540,
    "AGE 50-64": "5754",
    "AGE 65": 5119,
    ILITOTAL: 45255,
    "TOTAL PATIENTS": 828299
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 1,
    "AGE 0-4": 9410,
    "AGE 25-49": "13383",
    "AGE 25-64": "X",
    "AGE 5-24": 11717,
    "AGE 50-64": "6871",
    "AGE 65": 5888,
    ILITOTAL: 47269,
    "TOTAL PATIENTS": 882271
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 2,
    "AGE 0-4": 10053,
    "AGE 25-49": "15380",
    "AGE 25-64": "X",
    "AGE 5-24": 17357,
    "AGE 50-64": "7772",
    "AGE 65": 6199,
    ILITOTAL: 56761,
    "TOTAL PATIENTS": 1027466
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 3,
    "AGE 0-4": 11997,
    "AGE 25-49": "16012",
    "AGE 25-64": "X",
    "AGE 5-24": 21897,
    "AGE 50-64": "7569",
    "AGE 65": 5561,
    ILITOTAL: 63036,
    "TOTAL PATIENTS": 993431
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 4,
    "AGE 0-4": 13408,
    "AGE 25-49": "18317",
    "AGE 25-64": "X",
    "AGE 5-24": 30625,
    "AGE 50-64": "8911",
    "AGE 65": 6065,
    ILITOTAL: 77326,
    "TOTAL PATIENTS": 1101807
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 5,
    "AGE 0-4": 14844,
    "AGE 25-49": "19086",
    "AGE 25-64": "X",
    "AGE 5-24": 37200,
    "AGE 50-64": "8915",
    "AGE 65": 5940,
    ILITOTAL: 85985,
    "TOTAL PATIENTS": 1105078
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 6,
    "AGE 0-4": 15192,
    "AGE 25-49": "19527",
    "AGE 25-64": "X",
    "AGE 5-24": 38606,
    "AGE 50-64": "8626",
    "AGE 65": 5874,
    ILITOTAL: 87825,
    "TOTAL PATIENTS": 1130397
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 7,
    "AGE 0-4": 13365,
    "AGE 25-49": "17203",
    "AGE 25-64": "X",
    "AGE 5-24": 32124,
    "AGE 50-64": "8079",
    "AGE 65": 5439,
    ILITOTAL: 76210,
    "TOTAL PATIENTS": 1118800
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 8,
    "AGE 0-4": 10154,
    "AGE 25-49": "12437",
    "AGE 25-64": "X",
    "AGE 5-24": 20450,
    "AGE 50-64": "5805",
    "AGE 65": 4179,
    ILITOTAL: 53025,
    "TOTAL PATIENTS": 1028116
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 9,
    "AGE 0-4": 7208,
    "AGE 25-49": "8485",
    "AGE 25-64": "X",
    "AGE 5-24": 13392,
    "AGE 50-64": "4104",
    "AGE 65": 2875,
    ILITOTAL: 36064,
    "TOTAL PATIENTS": 1013191
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 10,
    "AGE 0-4": 6368,
    "AGE 25-49": "6485",
    "AGE 25-64": "X",
    "AGE 5-24": 10850,
    "AGE 50-64": "3138",
    "AGE 65": 2292,
    ILITOTAL: 29133,
    "TOTAL PATIENTS": 969427
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 11,
    "AGE 0-4": 5588,
    "AGE 25-49": "5928",
    "AGE 25-64": "X",
    "AGE 5-24": 9468,
    "AGE 50-64": "2822",
    "AGE 65": 2132,
    ILITOTAL: 25938,
    "TOTAL PATIENTS": 949978
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 12,
    "AGE 0-4": 5223,
    "AGE 25-49": "5408",
    "AGE 25-64": "X",
    "AGE 5-24": 8640,
    "AGE 50-64": "2563",
    "AGE 65": 1971,
    ILITOTAL: 23805,
    "TOTAL PATIENTS": 960779
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 13,
    "AGE 0-4": 4721,
    "AGE 25-49": "4720",
    "AGE 25-64": "X",
    "AGE 5-24": 7214,
    "AGE 50-64": "2295",
    "AGE 65": 1743,
    ILITOTAL: 20693,
    "TOTAL PATIENTS": 875658
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 14,
    "AGE 0-4": 4553,
    "AGE 25-49": "4459",
    "AGE 25-64": "X",
    "AGE 5-24": 6218,
    "AGE 50-64": "2153",
    "AGE 65": 1691,
    ILITOTAL: 19074,
    "TOTAL PATIENTS": 938963
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 15,
    "AGE 0-4": 4145,
    "AGE 25-49": "3749",
    "AGE 25-64": "X",
    "AGE 5-24": 5505,
    "AGE 50-64": "1818",
    "AGE 65": 1447,
    ILITOTAL: 16664,
    "TOTAL PATIENTS": 923848
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 16,
    "AGE 0-4": 3856,
    "AGE 25-49": "3214",
    "AGE 25-64": "X",
    "AGE 5-24": 5269,
    "AGE 50-64": "1427",
    "AGE 65": 1103,
    ILITOTAL: 14869,
    "TOTAL PATIENTS": 936950
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 17,
    "AGE 0-4": 3723,
    "AGE 25-49": "3026",
    "AGE 25-64": "X",
    "AGE 5-24": 5336,
    "AGE 50-64": "1371",
    "AGE 65": 1096,
    ILITOTAL: 14552,
    "TOTAL PATIENTS": 946160
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 18,
    "AGE 0-4": 3658,
    "AGE 25-49": "2604",
    "AGE 25-64": "X",
    "AGE 5-24": 4815,
    "AGE 50-64": "1217",
    "AGE 65": 997,
    ILITOTAL: 13291,
    "TOTAL PATIENTS": 916783
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 19,
    "AGE 0-4": 3444,
    "AGE 25-49": "2205",
    "AGE 25-64": "X",
    "AGE 5-24": 4133,
    "AGE 50-64": "935",
    "AGE 65": 902,
    ILITOTAL: 11619,
    "TOTAL PATIENTS": 909661
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 20,
    "AGE 0-4": 3359,
    "AGE 25-49": "2239",
    "AGE 25-64": "X",
    "AGE 5-24": 3764,
    "AGE 50-64": "905",
    "AGE 65": 799,
    ILITOTAL: 11066,
    "TOTAL PATIENTS": 906668
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 21,
    "AGE 0-4": 3385,
    "AGE 25-49": "2082",
    "AGE 25-64": "X",
    "AGE 5-24": 3429,
    "AGE 50-64": "884",
    "AGE 65": 866,
    ILITOTAL: 10646,
    "TOTAL PATIENTS": 863879
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 22,
    "AGE 0-4": 3220,
    "AGE 25-49": "1822",
    "AGE 25-64": "X",
    "AGE 5-24": 2987,
    "AGE 50-64": "846",
    "AGE 65": 733,
    ILITOTAL: 9608,
    "TOTAL PATIENTS": 785606
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 23,
    "AGE 0-4": 2847,
    "AGE 25-49": "1838",
    "AGE 25-64": "X",
    "AGE 5-24": 2552,
    "AGE 50-64": "802",
    "AGE 65": 654,
    ILITOTAL: 8693,
    "TOTAL PATIENTS": 830040
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 24,
    "AGE 0-4": 2375,
    "AGE 25-49": "1596",
    "AGE 25-64": "X",
    "AGE 5-24": 2245,
    "AGE 50-64": "699",
    "AGE 65": 658,
    ILITOTAL: 7573,
    "TOTAL PATIENTS": 774246
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 25,
    "AGE 0-4": 2312,
    "AGE 25-49": "1554",
    "AGE 25-64": "X",
    "AGE 5-24": 2162,
    "AGE 50-64": "729",
    "AGE 65": 616,
    ILITOTAL: 7373,
    "TOTAL PATIENTS": 778114
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 26,
    "AGE 0-4": 2206,
    "AGE 25-49": "1530",
    "AGE 25-64": "X",
    "AGE 5-24": 1916,
    "AGE 50-64": "669",
    "AGE 65": 626,
    ILITOTAL: 6947,
    "TOTAL PATIENTS": 800757
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 27,
    "AGE 0-4": 2009,
    "AGE 25-49": "1299",
    "AGE 25-64": "X",
    "AGE 5-24": 1862,
    "AGE 50-64": "539",
    "AGE 65": 549,
    ILITOTAL: 6258,
    "TOTAL PATIENTS": 760130
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 28,
    "AGE 0-4": 1943,
    "AGE 25-49": "1443",
    "AGE 25-64": "X",
    "AGE 5-24": 1901,
    "AGE 50-64": "627",
    "AGE 65": 587,
    ILITOTAL: 6501,
    "TOTAL PATIENTS": 842647
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 29,
    "AGE 0-4": 1741,
    "AGE 25-49": "1290",
    "AGE 25-64": "X",
    "AGE 5-24": 1720,
    "AGE 50-64": "566",
    "AGE 65": 469,
    ILITOTAL: 5786,
    "TOTAL PATIENTS": 818597
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 30,
    "AGE 0-4": 1665,
    "AGE 25-49": "1202",
    "AGE 25-64": "X",
    "AGE 5-24": 1643,
    "AGE 50-64": "524",
    "AGE 65": 463,
    ILITOTAL: 5497,
    "TOTAL PATIENTS": 802300
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 31,
    "AGE 0-4": 1618,
    "AGE 25-49": "1246",
    "AGE 25-64": "X",
    "AGE 5-24": 1769,
    "AGE 50-64": "525",
    "AGE 65": 454,
    ILITOTAL: 5612,
    "TOTAL PATIENTS": 816468
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 32,
    "AGE 0-4": 1726,
    "AGE 25-49": "1334",
    "AGE 25-64": "X",
    "AGE 5-24": 1784,
    "AGE 50-64": "541",
    "AGE 65": 476,
    ILITOTAL: 5861,
    "TOTAL PATIENTS": 796621
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 33,
    "AGE 0-4": 1986,
    "AGE 25-49": "1387",
    "AGE 25-64": "X",
    "AGE 5-24": 2170,
    "AGE 50-64": "516",
    "AGE 65": 478,
    ILITOTAL: 6537,
    "TOTAL PATIENTS": 810994
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 34,
    "AGE 0-4": 2239,
    "AGE 25-49": "1492",
    "AGE 25-64": "X",
    "AGE 5-24": 2468,
    "AGE 50-64": "609",
    "AGE 65": 515,
    ILITOTAL: 7323,
    "TOTAL PATIENTS": 775731
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 35,
    "AGE 0-4": 2445,
    "AGE 25-49": "1638",
    "AGE 25-64": "X",
    "AGE 5-24": 2830,
    "AGE 50-64": "656",
    "AGE 65": 542,
    ILITOTAL: 8111,
    "TOTAL PATIENTS": 844807
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 36,
    "AGE 0-4": 2814,
    "AGE 25-49": "1985",
    "AGE 25-64": "X",
    "AGE 5-24": 3343,
    "AGE 50-64": "767",
    "AGE 65": 621,
    ILITOTAL: 9530,
    "TOTAL PATIENTS": 835027
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 37,
    "AGE 0-4": 2773,
    "AGE 25-49": "2112",
    "AGE 25-64": "X",
    "AGE 5-24": 3660,
    "AGE 50-64": "829",
    "AGE 65": 691,
    ILITOTAL: 10065,
    "TOTAL PATIENTS": 876862
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 38,
    "AGE 0-4": 3242,
    "AGE 25-49": "2347",
    "AGE 25-64": "X",
    "AGE 5-24": 3949,
    "AGE 50-64": "922",
    "AGE 65": 729,
    ILITOTAL: 11189,
    "TOTAL PATIENTS": 853109
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 39,
    "AGE 0-4": 3481,
    "AGE 25-49": "2488",
    "AGE 25-64": "X",
    "AGE 5-24": 4198,
    "AGE 50-64": "931",
    "AGE 65": 669,
    ILITOTAL: 11767,
    "TOTAL PATIENTS": 933130
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 40,
    "AGE 0-4": 4887,
    "AGE 25-49": "3886",
    "AGE 25-64": "X",
    "AGE 5-24": 6341,
    "AGE 50-64": "1563",
    "AGE 65": 1298,
    ILITOTAL: 17975,
    "TOTAL PATIENTS": 1266076
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 41,
    "AGE 0-4": 5332,
    "AGE 25-49": "4048",
    "AGE 25-64": "X",
    "AGE 5-24": 6279,
    "AGE 50-64": "1667",
    "AGE 65": 1326,
    ILITOTAL: 18652,
    "TOTAL PATIENTS": 1266257
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 42,
    "AGE 0-4": 5589,
    "AGE 25-49": "4405",
    "AGE 25-64": "X",
    "AGE 5-24": 6802,
    "AGE 50-64": "1752",
    "AGE 65": 1400,
    ILITOTAL: 19948,
    "TOTAL PATIENTS": 1254844
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 43,
    "AGE 0-4": 6249,
    "AGE 25-49": "4619",
    "AGE 25-64": "X",
    "AGE 5-24": 7487,
    "AGE 50-64": "1835",
    "AGE 65": 1444,
    ILITOTAL: 21634,
    "TOTAL PATIENTS": 1256271
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 44,
    "AGE 0-4": 6869,
    "AGE 25-49": "4733",
    "AGE 25-64": "X",
    "AGE 5-24": 8291,
    "AGE 50-64": "1825",
    "AGE 65": 1451,
    ILITOTAL: 23169,
    "TOTAL PATIENTS": 1258405
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 45,
    "AGE 0-4": 7509,
    "AGE 25-49": "4834",
    "AGE 25-64": "X",
    "AGE 5-24": 8451,
    "AGE 50-64": "1840",
    "AGE 65": 1451,
    ILITOTAL: 24085,
    "TOTAL PATIENTS": 1249921
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 46,
    "AGE 0-4": 7821,
    "AGE 25-49": "5037",
    "AGE 25-64": "X",
    "AGE 5-24": 8076,
    "AGE 50-64": "1998",
    "AGE 65": 1487,
    ILITOTAL: 24419,
    "TOTAL PATIENTS": 1171062
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 47,
    "AGE 0-4": 8607,
    "AGE 25-49": "5017",
    "AGE 25-64": "X",
    "AGE 5-24": 7197,
    "AGE 50-64": "2112",
    "AGE 65": 1702,
    ILITOTAL: 24635,
    "TOTAL PATIENTS": 1026187
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 48,
    "AGE 0-4": 8890,
    "AGE 25-49": "6582",
    "AGE 25-64": "X",
    "AGE 5-24": 8788,
    "AGE 50-64": "2758",
    "AGE 65": 2078,
    ILITOTAL: 29096,
    "TOTAL PATIENTS": 1296156
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 49,
    "AGE 0-4": 8809,
    "AGE 25-49": "5974",
    "AGE 25-64": "X",
    "AGE 5-24": 9276,
    "AGE 50-64": "2456",
    "AGE 65": 1862,
    ILITOTAL: 28377,
    "TOTAL PATIENTS": 1233986
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 50,
    "AGE 0-4": 10156,
    "AGE 25-49": "6821",
    "AGE 25-64": "X",
    "AGE 5-24": 11376,
    "AGE 50-64": "2779",
    "AGE 65": 1981,
    ILITOTAL: 33113,
    "TOTAL PATIENTS": 1212127
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 51,
    "AGE 0-4": 11515,
    "AGE 25-49": "8127",
    "AGE 25-64": "X",
    "AGE 5-24": 12816,
    "AGE 50-64": "3322",
    "AGE 65": 2480,
    ILITOTAL: 38260,
    "TOTAL PATIENTS": 1180820
  },
  {
    "REGION TYPE": "National",
    YEAR: 2018,
    WEEK: 52,
    "AGE 0-4": 13615,
    "AGE 25-49": "10348",
    "AGE 25-64": "X",
    "AGE 5-24": 12044,
    "AGE 50-64": "4471",
    "AGE 65": 3534,
    ILITOTAL: 44012,
    "TOTAL PATIENTS": 1052725
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 1,
    "AGE 0-4": 11686,
    "AGE 25-49": "11413",
    "AGE 25-64": "X",
    "AGE 5-24": 9572,
    "AGE 50-64": "5204",
    "AGE 65": 4260,
    ILITOTAL: 42135,
    "TOTAL PATIENTS": 1160440
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 2,
    "AGE 0-4": 9369,
    "AGE 25-49": "10416",
    "AGE 25-64": "X",
    "AGE 5-24": 10758,
    "AGE 50-64": "4826",
    "AGE 65": 3446,
    ILITOTAL: 38815,
    "TOTAL PATIENTS": 1237552
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 3,
    "AGE 0-4": 9703,
    "AGE 25-49": "10045",
    "AGE 25-64": "X",
    "AGE 5-24": 14265,
    "AGE 50-64": "4235",
    "AGE 65": 2951,
    ILITOTAL: 41199,
    "TOTAL PATIENTS": 1225384
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 4,
    "AGE 0-4": 10765,
    "AGE 25-49": "11194",
    "AGE 25-64": "X",
    "AGE 5-24": 16965,
    "AGE 50-64": "4457",
    "AGE 65": 2860,
    ILITOTAL: 46241,
    "TOTAL PATIENTS": 1191426
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 5,
    "AGE 0-4": 11628,
    "AGE 25-49": "13048",
    "AGE 25-64": "X",
    "AGE 5-24": 22217,
    "AGE 50-64": "5116",
    "AGE 65": 3255,
    ILITOTAL: 55264,
    "TOTAL PATIENTS": 1222020
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 6,
    "AGE 0-4": 13899,
    "AGE 25-49": "15785",
    "AGE 25-64": "X",
    "AGE 5-24": 29772,
    "AGE 50-64": "6174",
    "AGE 65": 4102,
    ILITOTAL: 69732,
    "TOTAL PATIENTS": 1340765
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 7,
    "AGE 0-4": 14246,
    "AGE 25-49": "15945",
    "AGE 25-64": "X",
    "AGE 5-24": 29255,
    "AGE 50-64": "6333",
    "AGE 65": 4277,
    ILITOTAL: 70056,
    "TOTAL PATIENTS": 1292464
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 8,
    "AGE 0-4": 13634,
    "AGE 25-49": "15716",
    "AGE 25-64": "X",
    "AGE 5-24": 26502,
    "AGE 50-64": "6124",
    "AGE 65": 4485,
    ILITOTAL: 66461,
    "TOTAL PATIENTS": 1260932
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 9,
    "AGE 0-4": 11647,
    "AGE 25-49": "13847",
    "AGE 25-64": "X",
    "AGE 5-24": 23468,
    "AGE 50-64": "5706",
    "AGE 65": 4134,
    ILITOTAL: 58802,
    "TOTAL PATIENTS": 1281115
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 10,
    "AGE 0-4": 11168,
    "AGE 25-49": "13079",
    "AGE 25-64": "X",
    "AGE 5-24": 21760,
    "AGE 50-64": "5368",
    "AGE 65": 4056,
    ILITOTAL: 55431,
    "TOTAL PATIENTS": 1260615
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 11,
    "AGE 0-4": 10986,
    "AGE 25-49": "12580",
    "AGE 25-64": "X",
    "AGE 5-24": 20081,
    "AGE 50-64": "5353",
    "AGE 65": 4177,
    ILITOTAL: 53177,
    "TOTAL PATIENTS": 1288273
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 12,
    "AGE 0-4": 9721,
    "AGE 25-49": "10717",
    "AGE 25-64": "X",
    "AGE 5-24": 16800,
    "AGE 50-64": "4532",
    "AGE 65": 3898,
    ILITOTAL: 45668,
    "TOTAL PATIENTS": 1303765
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 13,
    "AGE 0-4": 8644,
    "AGE 25-49": "8656",
    "AGE 25-64": "X",
    "AGE 5-24": 13642,
    "AGE 50-64": "3811",
    "AGE 65": 3195,
    ILITOTAL: 37948,
    "TOTAL PATIENTS": 1244935
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 14,
    "AGE 0-4": 7606,
    "AGE 25-49": "7491",
    "AGE 25-64": "X",
    "AGE 5-24": 11768,
    "AGE 50-64": "3274",
    "AGE 65": 2802,
    ILITOTAL: 32941,
    "TOTAL PATIENTS": 1229217
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 15,
    "AGE 0-4": 6754,
    "AGE 25-49": "6208",
    "AGE 25-64": "X",
    "AGE 5-24": 10005,
    "AGE 50-64": "2568",
    "AGE 65": 2319,
    ILITOTAL: 27854,
    "TOTAL PATIENTS": 1229148
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 16,
    "AGE 0-4": 6325,
    "AGE 25-49": "4934",
    "AGE 25-64": "X",
    "AGE 5-24": 7904,
    "AGE 50-64": "2108",
    "AGE 65": 1876,
    ILITOTAL: 23147,
    "TOTAL PATIENTS": 1178058
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 17,
    "AGE 0-4": 5698,
    "AGE 25-49": "4553",
    "AGE 25-64": "X",
    "AGE 5-24": 6621,
    "AGE 50-64": "2000",
    "AGE 65": 1738,
    ILITOTAL: 20610,
    "TOTAL PATIENTS": 1196855
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 18,
    "AGE 0-4": 5369,
    "AGE 25-49": "4084",
    "AGE 25-64": "X",
    "AGE 5-24": 6207,
    "AGE 50-64": "1667",
    "AGE 65": 1537,
    ILITOTAL: 18864,
    "TOTAL PATIENTS": 1199386
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 19,
    "AGE 0-4": 4789,
    "AGE 25-49": "3574",
    "AGE 25-64": "X",
    "AGE 5-24": 5906,
    "AGE 50-64": "1480",
    "AGE 65": 1358,
    ILITOTAL: 17107,
    "TOTAL PATIENTS": 1173980
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 20,
    "AGE 0-4": 4649,
    "AGE 25-49": "3482",
    "AGE 25-64": "X",
    "AGE 5-24": 5530,
    "AGE 50-64": "1437",
    "AGE 65": 1361,
    ILITOTAL: 16459,
    "TOTAL PATIENTS": 1094840
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 21,
    "AGE 0-4": 4601,
    "AGE 25-49": "3214",
    "AGE 25-64": "X",
    "AGE 5-24": 5234,
    "AGE 50-64": "1347",
    "AGE 65": 1367,
    ILITOTAL: 15763,
    "TOTAL PATIENTS": 1123869
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 22,
    "AGE 0-4": 4442,
    "AGE 25-49": "3094",
    "AGE 25-64": "X",
    "AGE 5-24": 4660,
    "AGE 50-64": "1279",
    "AGE 65": 1301,
    ILITOTAL: 14776,
    "TOTAL PATIENTS": 1052737
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 23,
    "AGE 0-4": 3937,
    "AGE 25-49": "2952",
    "AGE 25-64": "X",
    "AGE 5-24": 4115,
    "AGE 50-64": "1242",
    "AGE 65": 1205,
    ILITOTAL: 13451,
    "TOTAL PATIENTS": 1086961
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 24,
    "AGE 0-4": 3506,
    "AGE 25-49": "2729",
    "AGE 25-64": "X",
    "AGE 5-24": 3741,
    "AGE 50-64": "1051",
    "AGE 65": 1079,
    ILITOTAL: 12106,
    "TOTAL PATIENTS": 1079343
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 25,
    "AGE 0-4": 3056,
    "AGE 25-49": "2425",
    "AGE 25-64": "X",
    "AGE 5-24": 3288,
    "AGE 50-64": "998",
    "AGE 65": 928,
    ILITOTAL: 10695,
    "TOTAL PATIENTS": 1056024
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 26,
    "AGE 0-4": 2955,
    "AGE 25-49": "2183",
    "AGE 25-64": "X",
    "AGE 5-24": 3117,
    "AGE 50-64": "910",
    "AGE 65": 862,
    ILITOTAL: 10027,
    "TOTAL PATIENTS": 1044732
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 27,
    "AGE 0-4": 2512,
    "AGE 25-49": "1911",
    "AGE 25-64": "X",
    "AGE 5-24": 2726,
    "AGE 50-64": "797",
    "AGE 65": 776,
    ILITOTAL: 8722,
    "TOTAL PATIENTS": 992358
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 28,
    "AGE 0-4": 2346,
    "AGE 25-49": "1882",
    "AGE 25-64": "X",
    "AGE 5-24": 2661,
    "AGE 50-64": "799",
    "AGE 65": 737,
    ILITOTAL: 8425,
    "TOTAL PATIENTS": 1060841
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 29,
    "AGE 0-4": 2222,
    "AGE 25-49": "1862",
    "AGE 25-64": "X",
    "AGE 5-24": 2571,
    "AGE 50-64": "757",
    "AGE 65": 704,
    ILITOTAL: 8116,
    "TOTAL PATIENTS": 1058986
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 30,
    "AGE 0-4": 2138,
    "AGE 25-49": "1805",
    "AGE 25-64": "X",
    "AGE 5-24": 2466,
    "AGE 50-64": "763",
    "AGE 65": 615,
    ILITOTAL: 7787,
    "TOTAL PATIENTS": 1040191
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 31,
    "AGE 0-4": 2354,
    "AGE 25-49": "1830",
    "AGE 25-64": "X",
    "AGE 5-24": 2438,
    "AGE 50-64": "658",
    "AGE 65": 604,
    ILITOTAL: 7884,
    "TOTAL PATIENTS": 1041320
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 32,
    "AGE 0-4": 2102,
    "AGE 25-49": "2042",
    "AGE 25-64": "X",
    "AGE 5-24": 2392,
    "AGE 50-64": "766",
    "AGE 65": 758,
    ILITOTAL: 8060,
    "TOTAL PATIENTS": 1046625
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 33,
    "AGE 0-4": 2634,
    "AGE 25-49": "2047",
    "AGE 25-64": "X",
    "AGE 5-24": 2831,
    "AGE 50-64": "788",
    "AGE 65": 694,
    ILITOTAL: 8994,
    "TOTAL PATIENTS": 1079056
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 34,
    "AGE 0-4": 2911,
    "AGE 25-49": "2211",
    "AGE 25-64": "X",
    "AGE 5-24": 3503,
    "AGE 50-64": "762",
    "AGE 65": 716,
    ILITOTAL: 10103,
    "TOTAL PATIENTS": 1074399
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 35,
    "AGE 0-4": 3428,
    "AGE 25-49": "2559",
    "AGE 25-64": "X",
    "AGE 5-24": 4244,
    "AGE 50-64": "896",
    "AGE 65": 777,
    ILITOTAL: 11904,
    "TOTAL PATIENTS": 1100212
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 36,
    "AGE 0-4": 3810,
    "AGE 25-49": "2927",
    "AGE 25-64": "X",
    "AGE 5-24": 4548,
    "AGE 50-64": "1033",
    "AGE 65": 870,
    ILITOTAL: 13188,
    "TOTAL PATIENTS": 1097022
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 37,
    "AGE 0-4": 3912,
    "AGE 25-49": "3297",
    "AGE 25-64": "X",
    "AGE 5-24": 5502,
    "AGE 50-64": "1173",
    "AGE 65": 959,
    ILITOTAL: 14843,
    "TOTAL PATIENTS": 1166071
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 38,
    "AGE 0-4": 4469,
    "AGE 25-49": "3577",
    "AGE 25-64": "X",
    "AGE 5-24": 5678,
    "AGE 50-64": "1251",
    "AGE 65": 1026,
    ILITOTAL: 16001,
    "TOTAL PATIENTS": 1152730
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 39,
    "AGE 0-4": 4981,
    "AGE 25-49": "3882",
    "AGE 25-64": "X",
    "AGE 5-24": 6121,
    "AGE 50-64": "1368",
    "AGE 65": 1101,
    ILITOTAL: 17453,
    "TOTAL PATIENTS": 1167311
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 40,
    "AGE 0-4": 6219,
    "AGE 25-49": "4827",
    "AGE 25-64": "X",
    "AGE 5-24": 7658,
    "AGE 50-64": "1764",
    "AGE 65": 1448,
    ILITOTAL: 21916,
    "TOTAL PATIENTS": 1458307
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 41,
    "AGE 0-4": 6550,
    "AGE 25-49": "5148",
    "AGE 25-64": "X",
    "AGE 5-24": 7638,
    "AGE 50-64": "2015",
    "AGE 65": 1603,
    ILITOTAL: 22954,
    "TOTAL PATIENTS": 1436748
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 42,
    "AGE 0-4": 7287,
    "AGE 25-49": "5548",
    "AGE 25-64": "X",
    "AGE 5-24": 8292,
    "AGE 50-64": "2110",
    "AGE 65": 1649,
    ILITOTAL: 24886,
    "TOTAL PATIENTS": 1430800
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 43,
    "AGE 0-4": 7892,
    "AGE 25-49": "6080",
    "AGE 25-64": "X",
    "AGE 5-24": 9349,
    "AGE 50-64": "2305",
    "AGE 65": 1793,
    ILITOTAL: 27419,
    "TOTAL PATIENTS": 1473831
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 44,
    "AGE 0-4": 8658,
    "AGE 25-49": "6143",
    "AGE 25-64": "X",
    "AGE 5-24": 10068,
    "AGE 50-64": "2279",
    "AGE 65": 1762,
    ILITOTAL: 28910,
    "TOTAL PATIENTS": 1435369
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 45,
    "AGE 0-4": 10557,
    "AGE 25-49": "7182",
    "AGE 25-64": "X",
    "AGE 5-24": 12551,
    "AGE 50-64": "2453",
    "AGE 65": 1843,
    ILITOTAL: 34586,
    "TOTAL PATIENTS": 1463253
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 46,
    "AGE 0-4": 11446,
    "AGE 25-49": "7905",
    "AGE 25-64": "X",
    "AGE 5-24": 13671,
    "AGE 50-64": "2741",
    "AGE 65": 1969,
    ILITOTAL: 37732,
    "TOTAL PATIENTS": 1426928
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 47,
    "AGE 0-4": 12716,
    "AGE 25-49": "9138",
    "AGE 25-64": "X",
    "AGE 5-24": 17058,
    "AGE 50-64": "3101",
    "AGE 65": 2148,
    ILITOTAL: 44161,
    "TOTAL PATIENTS": 1484969
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 48,
    "AGE 0-4": 14444,
    "AGE 25-49": "9209",
    "AGE 25-64": "X",
    "AGE 5-24": 14821,
    "AGE 50-64": "3199",
    "AGE 65": 2371,
    ILITOTAL: 44044,
    "TOTAL PATIENTS": 1275199
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 49,
    "AGE 0-4": 13852,
    "AGE 25-49": "11947",
    "AGE 25-64": "X",
    "AGE 5-24": 16397,
    "AGE 50-64": "3929",
    "AGE 65": 2779,
    ILITOTAL: 48904,
    "TOTAL PATIENTS": 1476208
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 50,
    "AGE 0-4": 14728,
    "AGE 25-49": "12822",
    "AGE 25-64": "X",
    "AGE 5-24": 21877,
    "AGE 50-64": "4114",
    "AGE 65": 2903,
    ILITOTAL: 56444,
    "TOTAL PATIENTS": 1458774
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 51,
    "AGE 0-4": 18001,
    "AGE 25-49": "16227",
    "AGE 25-64": "X",
    "AGE 5-24": 29182,
    "AGE 50-64": "4835",
    "AGE 65": 3349,
    ILITOTAL: 71594,
    "TOTAL PATIENTS": 1424436
  },
  {
    "REGION TYPE": "National",
    YEAR: 2019,
    WEEK: 52,
    "AGE 0-4": 24097,
    "AGE 25-49": "24617",
    "AGE 25-64": "X",
    "AGE 5-24": 34004,
    "AGE 50-64": "7638",
    "AGE 65": 5401,
    ILITOTAL: 95757,
    "TOTAL PATIENTS": 1338669
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 1,
    "AGE 0-4": 21594,
    "AGE 25-49": "27655",
    "AGE 25-64": "X",
    "AGE 5-24": 23392,
    "AGE 50-64": "9209",
    "AGE 65": 6881,
    ILITOTAL: 88731,
    "TOTAL PATIENTS": 1426691
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 2,
    "AGE 0-4": 15564,
    "AGE 25-49": "23634",
    "AGE 25-64": "X",
    "AGE 5-24": 22756,
    "AGE 50-64": "8196",
    "AGE 65": 5464,
    ILITOTAL: 75614,
    "TOTAL PATIENTS": 1492251
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 3,
    "AGE 0-4": 16587,
    "AGE 25-49": "21413",
    "AGE 25-64": "X",
    "AGE 5-24": 29668,
    "AGE 50-64": "7386",
    "AGE 65": 4729,
    ILITOTAL: 79783,
    "TOTAL PATIENTS": 1489132
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 4,
    "AGE 0-4": 18574,
    "AGE 25-49": "23658",
    "AGE 25-64": "X",
    "AGE 5-24": 35275,
    "AGE 50-64": "7973",
    "AGE 65": 4670,
    ILITOTAL: 90150,
    "TOTAL PATIENTS": 1496826
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 5,
    "AGE 0-4": 20299,
    "AGE 25-49": "28889",
    "AGE 25-64": "X",
    "AGE 5-24": 44117,
    "AGE 50-64": "9527",
    "AGE 65": 5475,
    ILITOTAL: 108307,
    "TOTAL PATIENTS": 1575900
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 6,
    "AGE 0-4": 20270,
    "AGE 25-49": "29823",
    "AGE 25-64": "X",
    "AGE 5-24": 45513,
    "AGE 50-64": "10049",
    "AGE 65": 5706,
    ILITOTAL: 111361,
    "TOTAL PATIENTS": 1571657
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 7,
    "AGE 0-4": 17393,
    "AGE 25-49": "26428",
    "AGE 25-64": "X",
    "AGE 5-24": 36909,
    "AGE 50-64": "9231",
    "AGE 65": 5457,
    ILITOTAL: 95418,
    "TOTAL PATIENTS": 1533883
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 8,
    "AGE 0-4": 15330,
    "AGE 25-49": "23189",
    "AGE 25-64": "X",
    "AGE 5-24": 28531,
    "AGE 50-64": "8320",
    "AGE 65": 5189,
    ILITOTAL: 80559,
    "TOTAL PATIENTS": 1433517
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 9,
    "AGE 0-4": 13820,
    "AGE 25-49": "22127",
    "AGE 25-64": "X",
    "AGE 5-24": 25490,
    "AGE 50-64": "8276",
    "AGE 65": 5110,
    ILITOTAL: 74823,
    "TOTAL PATIENTS": 1466346
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 10,
    "AGE 0-4": 13888,
    "AGE 25-49": "23906",
    "AGE 25-64": "X",
    "AGE 5-24": 26396,
    "AGE 50-64": "8891",
    "AGE 65": 5698,
    ILITOTAL: 78779,
    "TOTAL PATIENTS": 1489410
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 11,
    "AGE 0-4": 14154,
    "AGE 25-49": "29667",
    "AGE 25-64": "X",
    "AGE 5-24": 27756,
    "AGE 50-64": "11334",
    "AGE 65": 6696,
    ILITOTAL: 89607,
    "TOTAL PATIENTS": 1425172
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 12,
    "AGE 0-4": 10790,
    "AGE 25-49": "30818",
    "AGE 25-64": "X",
    "AGE 5-24": 17512,
    "AGE 50-64": "12478",
    "AGE 65": 6986,
    ILITOTAL: 78584,
    "TOTAL PATIENTS": 1068755
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 13,
    "AGE 0-4": 5129,
    "AGE 25-49": "22408",
    "AGE 25-64": "X",
    "AGE 5-24": 8322,
    "AGE 50-64": "10825",
    "AGE 65": 6458,
    ILITOTAL: 53142,
    "TOTAL PATIENTS": 853431
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 14,
    "AGE 0-4": 2359,
    "AGE 25-49": "14964",
    "AGE 25-64": "X",
    "AGE 5-24": 4852,
    "AGE 50-64": "8696",
    "AGE 65": 5380,
    ILITOTAL: 36251,
    "TOTAL PATIENTS": 750546
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 15,
    "AGE 0-4": 1496,
    "AGE 25-49": "9995",
    "AGE 25-64": "X",
    "AGE 5-24": 3426,
    "AGE 50-64": "6043",
    "AGE 65": 4014,
    ILITOTAL: 24974,
    "TOTAL PATIENTS": 718953
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 16,
    "AGE 0-4": 1068,
    "AGE 25-49": "7427",
    "AGE 25-64": "X",
    "AGE 5-24": 2667,
    "AGE 50-64": "4184",
    "AGE 65": 2928,
    ILITOTAL: 18274,
    "TOTAL PATIENTS": 709970
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 17,
    "AGE 0-4": 926,
    "AGE 25-49": "6339",
    "AGE 25-64": "X",
    "AGE 5-24": 2317,
    "AGE 50-64": "3289",
    "AGE 65": 2293,
    ILITOTAL: 15164,
    "TOTAL PATIENTS": 750576
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 18,
    "AGE 0-4": 864,
    "AGE 25-49": "5292",
    "AGE 25-64": "X",
    "AGE 5-24": 2098,
    "AGE 50-64": "2670",
    "AGE 65": 1897,
    ILITOTAL: 12821,
    "TOTAL PATIENTS": 790883
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 19,
    "AGE 0-4": 720,
    "AGE 25-49": "4588",
    "AGE 25-64": "X",
    "AGE 5-24": 1883,
    "AGE 50-64": "2243",
    "AGE 65": 1624,
    ILITOTAL: 11058,
    "TOTAL PATIENTS": 817791
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 20,
    "AGE 0-4": 788,
    "AGE 25-49": "4112",
    "AGE 25-64": "X",
    "AGE 5-24": 1960,
    "AGE 50-64": "2171",
    "AGE 65": 1449,
    ILITOTAL: 10480,
    "TOTAL PATIENTS": 846493
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 21,
    "AGE 0-4": 900,
    "AGE 25-49": "4463",
    "AGE 25-64": "X",
    "AGE 5-24": 2221,
    "AGE 50-64": "2208",
    "AGE 65": 1624,
    ILITOTAL: 11416,
    "TOTAL PATIENTS": 1059901
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 22,
    "AGE 0-4": 805,
    "AGE 25-49": "3568",
    "AGE 25-64": "X",
    "AGE 5-24": 1893,
    "AGE 50-64": "1878",
    "AGE 65": 1461,
    ILITOTAL: 9605,
    "TOTAL PATIENTS": 1082074
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 23,
    "AGE 0-4": 801,
    "AGE 25-49": "3437",
    "AGE 25-64": "X",
    "AGE 5-24": 1967,
    "AGE 50-64": "1704",
    "AGE 65": 1409,
    ILITOTAL: 9318,
    "TOTAL PATIENTS": 1134988
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 24,
    "AGE 0-4": 878,
    "AGE 25-49": "3452",
    "AGE 25-64": "X",
    "AGE 5-24": 2139,
    "AGE 50-64": "1725",
    "AGE 65": 1378,
    ILITOTAL: 9572,
    "TOTAL PATIENTS": 1174543
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 25,
    "AGE 0-4": 1005,
    "AGE 25-49": "4709",
    "AGE 25-64": "X",
    "AGE 5-24": 2679,
    "AGE 50-64": "2001",
    "AGE 65": 1472,
    ILITOTAL: 11866,
    "TOTAL PATIENTS": 1247096
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 26,
    "AGE 0-4": 1212,
    "AGE 25-49": "6240",
    "AGE 25-64": "X",
    "AGE 5-24": 3487,
    "AGE 50-64": "2649",
    "AGE 65": 1902,
    ILITOTAL: 15490,
    "TOTAL PATIENTS": 1287264
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 27,
    "AGE 0-4": 1394,
    "AGE 25-49": "7027",
    "AGE 25-64": "X",
    "AGE 5-24": 3965,
    "AGE 50-64": "3218",
    "AGE 65": 2222,
    ILITOTAL: 17826,
    "TOTAL PATIENTS": 1287401
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 28,
    "AGE 0-4": 1544,
    "AGE 25-49": "8011",
    "AGE 25-64": "X",
    "AGE 5-24": 4092,
    "AGE 50-64": "3764",
    "AGE 65": 2632,
    ILITOTAL: 20043,
    "TOTAL PATIENTS": 1360037
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 29,
    "AGE 0-4": 1657,
    "AGE 25-49": "7522",
    "AGE 25-64": "X",
    "AGE 5-24": 4070,
    "AGE 50-64": "3565",
    "AGE 65": 2436,
    ILITOTAL: 19250,
    "TOTAL PATIENTS": 1338613
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 30,
    "AGE 0-4": 1634,
    "AGE 25-49": "6101",
    "AGE 25-64": "X",
    "AGE 5-24": 3554,
    "AGE 50-64": "3089",
    "AGE 65": 2145,
    ILITOTAL: 16523,
    "TOTAL PATIENTS": 1355190
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 31,
    "AGE 0-4": 1608,
    "AGE 25-49": "5705",
    "AGE 25-64": "X",
    "AGE 5-24": 3493,
    "AGE 50-64": "2594",
    "AGE 65": 2114,
    ILITOTAL: 15514,
    "TOTAL PATIENTS": 1346820
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 32,
    "AGE 0-4": 1570,
    "AGE 25-49": "4974",
    "AGE 25-64": "X",
    "AGE 5-24": 3268,
    "AGE 50-64": "2360",
    "AGE 65": 1931,
    ILITOTAL: 14103,
    "TOTAL PATIENTS": 1333292
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 33,
    "AGE 0-4": 1587,
    "AGE 25-49": "4482",
    "AGE 25-64": "X",
    "AGE 5-24": 3141,
    "AGE 50-64": "2166",
    "AGE 65": 1755,
    ILITOTAL: 13131,
    "TOTAL PATIENTS": 1338686
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 34,
    "AGE 0-4": 1804,
    "AGE 25-49": "4285",
    "AGE 25-64": "X",
    "AGE 5-24": 3263,
    "AGE 50-64": "1888",
    "AGE 65": 1660,
    ILITOTAL: 12900,
    "TOTAL PATIENTS": 1344069
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 35,
    "AGE 0-4": 1864,
    "AGE 25-49": "4026",
    "AGE 25-64": "X",
    "AGE 5-24": 3942,
    "AGE 50-64": "1819",
    "AGE 65": 1487,
    ILITOTAL: 13138,
    "TOTAL PATIENTS": 1351058
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 36,
    "AGE 0-4": 1766,
    "AGE 25-49": "3738",
    "AGE 25-64": "X",
    "AGE 5-24": 3574,
    "AGE 50-64": "1686",
    "AGE 65": 1468,
    ILITOTAL: 12232,
    "TOTAL PATIENTS": 1336359
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 37,
    "AGE 0-4": 1995,
    "AGE 25-49": "3969",
    "AGE 25-64": "X",
    "AGE 5-24": 3806,
    "AGE 50-64": "1790",
    "AGE 65": 1441,
    ILITOTAL: 13001,
    "TOTAL PATIENTS": 1326890
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 38,
    "AGE 0-4": 2068,
    "AGE 25-49": "4057",
    "AGE 25-64": "X",
    "AGE 5-24": 3609,
    "AGE 50-64": "1788",
    "AGE 65": 1483,
    ILITOTAL: 13005,
    "TOTAL PATIENTS": 1359239
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 39,
    "AGE 0-4": 2273,
    "AGE 25-49": "4385",
    "AGE 25-64": "X",
    "AGE 5-24": 4311,
    "AGE 50-64": "1930",
    "AGE 65": 1558,
    ILITOTAL: 14457,
    "TOTAL PATIENTS": 1397083
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 40,
    "AGE 0-4": 2464,
    "AGE 25-49": "5112",
    "AGE 25-64": "X",
    "AGE 5-24": 4719,
    "AGE 50-64": "2375",
    "AGE 65": 1847,
    ILITOTAL: 16517,
    "TOTAL PATIENTS": 1540707
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 41,
    "AGE 0-4": 2556,
    "AGE 25-49": "6028",
    "AGE 25-64": "X",
    "AGE 5-24": 5258,
    "AGE 50-64": "3008",
    "AGE 65": 2325,
    ILITOTAL: 19175,
    "TOTAL PATIENTS": 1616445
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 42,
    "AGE 0-4": 2308,
    "AGE 25-49": "5672",
    "AGE 25-64": "X",
    "AGE 5-24": 4622,
    "AGE 50-64": "2551",
    "AGE 65": 2105,
    ILITOTAL: 17258,
    "TOTAL PATIENTS": 1583372
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 43,
    "AGE 0-4": 2447,
    "AGE 25-49": "5861",
    "AGE 25-64": "X",
    "AGE 5-24": 4845,
    "AGE 50-64": "2831",
    "AGE 65": 2179,
    ILITOTAL: 18163,
    "TOTAL PATIENTS": 1580601
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 44,
    "AGE 0-4": 2518,
    "AGE 25-49": "6104",
    "AGE 25-64": "X",
    "AGE 5-24": 4926,
    "AGE 50-64": "2774",
    "AGE 65": 2302,
    ILITOTAL: 18624,
    "TOTAL PATIENTS": 1564737
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 45,
    "AGE 0-4": 2727,
    "AGE 25-49": "7091",
    "AGE 25-64": "X",
    "AGE 5-24": 5832,
    "AGE 50-64": "3291",
    "AGE 65": 2461,
    ILITOTAL: 21402,
    "TOTAL PATIENTS": 1602464
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 46,
    "AGE 0-4": 2776,
    "AGE 25-49": "7686",
    "AGE 25-64": "X",
    "AGE 5-24": 5549,
    "AGE 50-64": "3736",
    "AGE 65": 2876,
    ILITOTAL: 22623,
    "TOTAL PATIENTS": 1641514
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 47,
    "AGE 0-4": 2693,
    "AGE 25-49": "7829",
    "AGE 25-64": "X",
    "AGE 5-24": 5340,
    "AGE 50-64": "3960",
    "AGE 65": 2898,
    ILITOTAL: 22720,
    "TOTAL PATIENTS": 1592244
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 48,
    "AGE 0-4": 2485,
    "AGE 25-49": "7094",
    "AGE 25-64": "X",
    "AGE 5-24": 4585,
    "AGE 50-64": "3962",
    "AGE 65": 3194,
    ILITOTAL: 21320,
    "TOTAL PATIENTS": 1425036
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 49,
    "AGE 0-4": 2604,
    "AGE 25-49": "7698",
    "AGE 25-64": "X",
    "AGE 5-24": 4875,
    "AGE 50-64": "3988",
    "AGE 65": 3140,
    ILITOTAL: 22305,
    "TOTAL PATIENTS": 1539414
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 50,
    "AGE 0-4": 2567,
    "AGE 25-49": "7530",
    "AGE 25-64": "X",
    "AGE 5-24": 4726,
    "AGE 50-64": "4073",
    "AGE 65": 3323,
    ILITOTAL: 22219,
    "TOTAL PATIENTS": 1553874
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 51,
    "AGE 0-4": 2482,
    "AGE 25-49": "7130",
    "AGE 25-64": "X",
    "AGE 5-24": 4282,
    "AGE 50-64": "3846",
    "AGE 65": 3145,
    ILITOTAL: 20885,
    "TOTAL PATIENTS": 1493567
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 52,
    "AGE 0-4": 2323,
    "AGE 25-49": "6632",
    "AGE 25-64": "X",
    "AGE 5-24": 3564,
    "AGE 50-64": "3925",
    "AGE 65": 3408,
    ILITOTAL: 19852,
    "TOTAL PATIENTS": 1362195
  },
  {
    "REGION TYPE": "National",
    YEAR: 2020,
    WEEK: 53,
    "AGE 0-4": 2585,
    "AGE 25-49": "7729",
    "AGE 25-64": "X",
    "AGE 5-24": 3934,
    "AGE 50-64": "4520",
    "AGE 65": 3668,
    ILITOTAL: 22436,
    "TOTAL PATIENTS": 1458471
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 1,
    "AGE 0-4": 2414,
    "AGE 25-49": "7979",
    "AGE 25-64": "X",
    "AGE 5-24": 4549,
    "AGE 50-64": "4363",
    "AGE 65": 3415,
    ILITOTAL: 22720,
    "TOTAL PATIENTS": 1583253
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 2,
    "AGE 0-4": 2380,
    "AGE 25-49": "6402",
    "AGE 25-64": "X",
    "AGE 5-24": 4056,
    "AGE 50-64": "3525",
    "AGE 65": 2831,
    ILITOTAL: 19194,
    "TOTAL PATIENTS": 1518732
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 3,
    "AGE 0-4": 2566,
    "AGE 25-49": "5878",
    "AGE 25-64": "X",
    "AGE 5-24": 4056,
    "AGE 50-64": "3311",
    "AGE 65": 2542,
    ILITOTAL: 18353,
    "TOTAL PATIENTS": 1515306
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 4,
    "AGE 0-4": 2560,
    "AGE 25-49": "5344",
    "AGE 25-64": "X",
    "AGE 5-24": 3953,
    "AGE 50-64": "2810",
    "AGE 65": 2240,
    ILITOTAL: 16907,
    "TOTAL PATIENTS": 1506074
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 5,
    "AGE 0-4": 2636,
    "AGE 25-49": "4996",
    "AGE 25-64": "X",
    "AGE 5-24": 4015,
    "AGE 50-64": "2527",
    "AGE 65": 1927,
    ILITOTAL: 16101,
    "TOTAL PATIENTS": 1487956
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 6,
    "AGE 0-4": 2557,
    "AGE 25-49": "4103",
    "AGE 25-64": "X",
    "AGE 5-24": 3736,
    "AGE 50-64": "2136",
    "AGE 65": 1576,
    ILITOTAL: 14108,
    "TOTAL PATIENTS": 1446976
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 7,
    "AGE 0-4": 2320,
    "AGE 25-49": "3710",
    "AGE 25-64": "X",
    "AGE 5-24": 3145,
    "AGE 50-64": "1922",
    "AGE 65": 1504,
    ILITOTAL: 12601,
    "TOTAL PATIENTS": 1388429
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 8,
    "AGE 0-4": 2543,
    "AGE 25-49": "3841",
    "AGE 25-64": "X",
    "AGE 5-24": 3541,
    "AGE 50-64": "1900",
    "AGE 65": 1521,
    ILITOTAL: 13346,
    "TOTAL PATIENTS": 1550250
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 9,
    "AGE 0-4": 2772,
    "AGE 25-49": "3532",
    "AGE 25-64": "X",
    "AGE 5-24": 3537,
    "AGE 50-64": "1811",
    "AGE 65": 1351,
    ILITOTAL: 13003,
    "TOTAL PATIENTS": 1543567
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 10,
    "AGE 0-4": 3218,
    "AGE 25-49": "3781",
    "AGE 25-64": "X",
    "AGE 5-24": 3806,
    "AGE 50-64": "1906",
    "AGE 65": 1375,
    ILITOTAL: 14086,
    "TOTAL PATIENTS": 1559326
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 11,
    "AGE 0-4": 3514,
    "AGE 25-49": "3936",
    "AGE 25-64": "X",
    "AGE 5-24": 3852,
    "AGE 50-64": "1909",
    "AGE 65": 1360,
    ILITOTAL: 14571,
    "TOTAL PATIENTS": 1550668
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 12,
    "AGE 0-4": 3816,
    "AGE 25-49": "4214",
    "AGE 25-64": "X",
    "AGE 5-24": 3913,
    "AGE 50-64": "2057",
    "AGE 65": 1354,
    ILITOTAL: 15354,
    "TOTAL PATIENTS": 1598430
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 13,
    "AGE 0-4": 4115,
    "AGE 25-49": "4392",
    "AGE 25-64": "X",
    "AGE 5-24": 4085,
    "AGE 50-64": "2128",
    "AGE 65": 1264,
    ILITOTAL: 15984,
    "TOTAL PATIENTS": 1601619
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 14,
    "AGE 0-4": 4739,
    "AGE 25-49": "5060",
    "AGE 25-64": "X",
    "AGE 5-24": 4689,
    "AGE 50-64": "2289",
    "AGE 65": 1362,
    ILITOTAL: 18139,
    "TOTAL PATIENTS": 1682213
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 15,
    "AGE 0-4": 5224,
    "AGE 25-49": "5291",
    "AGE 25-64": "X",
    "AGE 5-24": 4901,
    "AGE 50-64": "2362",
    "AGE 65": 1385,
    ILITOTAL: 19163,
    "TOTAL PATIENTS": 1727555
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 16,
    "AGE 0-4": 5763,
    "AGE 25-49": "4857",
    "AGE 25-64": "X",
    "AGE 5-24": 5092,
    "AGE 50-64": "2142",
    "AGE 65": 1451,
    ILITOTAL: 19305,
    "TOTAL PATIENTS": 1677877
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 17,
    "AGE 0-4": 6334,
    "AGE 25-49": "4817",
    "AGE 25-64": "X",
    "AGE 5-24": 5514,
    "AGE 50-64": "2045",
    "AGE 65": 1419,
    ILITOTAL: 20129,
    "TOTAL PATIENTS": 1701258
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 18,
    "AGE 0-4": 6822,
    "AGE 25-49": "4618",
    "AGE 25-64": "X",
    "AGE 5-24": 5399,
    "AGE 50-64": "1803",
    "AGE 65": 1289,
    ILITOTAL: 19931,
    "TOTAL PATIENTS": 1648412
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 19,
    "AGE 0-4": 7366,
    "AGE 25-49": "4360",
    "AGE 25-64": "X",
    "AGE 5-24": 5485,
    "AGE 50-64": "1845",
    "AGE 65": 1307,
    ILITOTAL: 20363,
    "TOTAL PATIENTS": 1622364
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 20,
    "AGE 0-4": 8348,
    "AGE 25-49": "4419",
    "AGE 25-64": "X",
    "AGE 5-24": 5408,
    "AGE 50-64": "1742",
    "AGE 65": 1328,
    ILITOTAL: 21245,
    "TOTAL PATIENTS": 1680471
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 21,
    "AGE 0-4": 7950,
    "AGE 25-49": "3984",
    "AGE 25-64": "X",
    "AGE 5-24": 4955,
    "AGE 50-64": "1592",
    "AGE 65": 1175,
    ILITOTAL: 19656,
    "TOTAL PATIENTS": 1649042
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 22,
    "AGE 0-4": 8488,
    "AGE 25-49": "3973",
    "AGE 25-64": "X",
    "AGE 5-24": 4849,
    "AGE 50-64": "1571",
    "AGE 65": 1240,
    ILITOTAL: 20121,
    "TOTAL PATIENTS": 1604048
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 23,
    "AGE 0-4": 8087,
    "AGE 25-49": "3687",
    "AGE 25-64": "X",
    "AGE 5-24": 4642,
    "AGE 50-64": "1526",
    "AGE 65": 1223,
    ILITOTAL: 19165,
    "TOTAL PATIENTS": 1667827
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 24,
    "AGE 0-4": 8519,
    "AGE 25-49": "3793",
    "AGE 25-64": "X",
    "AGE 5-24": 4603,
    "AGE 50-64": "1510",
    "AGE 65": 1191,
    ILITOTAL: 19616,
    "TOTAL PATIENTS": 1652463
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 25,
    "AGE 0-4": 8508,
    "AGE 25-49": "3814",
    "AGE 25-64": "X",
    "AGE 5-24": 4603,
    "AGE 50-64": "1649",
    "AGE 65": 1304,
    ILITOTAL: 19878,
    "TOTAL PATIENTS": 1636056
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 26,
    "AGE 0-4": 8356,
    "AGE 25-49": "4002",
    "AGE 25-64": "X",
    "AGE 5-24": 4750,
    "AGE 50-64": "1677",
    "AGE 65": 1289,
    ILITOTAL: 20074,
    "TOTAL PATIENTS": 1648076
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 27,
    "AGE 0-4": 8701,
    "AGE 25-49": "4850",
    "AGE 25-64": "X",
    "AGE 5-24": 5303,
    "AGE 50-64": "1969",
    "AGE 65": 1502,
    ILITOTAL: 22325,
    "TOTAL PATIENTS": 1672769
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 28,
    "AGE 0-4": 9180,
    "AGE 25-49": "6024",
    "AGE 25-64": "X",
    "AGE 5-24": 5915,
    "AGE 50-64": "2398",
    "AGE 65": 1708,
    ILITOTAL: 25225,
    "TOTAL PATIENTS": 1735932
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 29,
    "AGE 0-4": 10349,
    "AGE 25-49": "7955",
    "AGE 25-64": "X",
    "AGE 5-24": 7152,
    "AGE 50-64": "2898",
    "AGE 65": 2148,
    ILITOTAL: 30502,
    "TOTAL PATIENTS": 1770546
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 30,
    "AGE 0-4": 11076,
    "AGE 25-49": "9212",
    "AGE 25-64": "X",
    "AGE 5-24": 8509,
    "AGE 50-64": "3579",
    "AGE 65": 2605,
    ILITOTAL: 34981,
    "TOTAL PATIENTS": 1810730
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 31,
    "AGE 0-4": 10999,
    "AGE 25-49": "10459",
    "AGE 25-64": "X",
    "AGE 5-24": 8824,
    "AGE 50-64": "4284",
    "AGE 65": 2836,
    ILITOTAL: 37402,
    "TOTAL PATIENTS": 1805067
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 32,
    "AGE 0-4": 11122,
    "AGE 25-49": "11155",
    "AGE 25-64": "X",
    "AGE 5-24": 9961,
    "AGE 50-64": "4512",
    "AGE 65": 2881,
    ILITOTAL: 39631,
    "TOTAL PATIENTS": 1818497
  },
  {
    "REGION TYPE": "National",
    YEAR: 2021,
    WEEK: 33,
    "AGE 0-4": 11235,
    "AGE 25-49": "10688",
    "AGE 25-64": "X",
    "AGE 5-24": 11491,
    "AGE 50-64": "4585",
    "AGE 65": 2775,
    ILITOTAL: 40774,
    "TOTAL PATIENTS": 1754523
  }
];
const uscovidhospData = [
  [2021, 67424],
  [2020, 61636],
  [2020, 61535],
  [2020, 61304],
  [2020, 61686],
  [2020, 59519],
  [2020, 59336],
  [2020, 60909],
  [2020, 61121],
  [2020, 61341],
  [2020, 62198],
  [2020, 59765],
  [2020, 58713],
  [2020, 58361],
  [2020, 60541],
  [2020, 60450],
  [2020, 60119],
  [2020, 58802],
  [2020, 58479],
  [2020, 55216],
  [2020, 54613],
  [2020, 57141],
  [2020, 56357],
  [2020, 57387],
  [2020, 57539],
  [2020, 56947],
  [2020, 54587],
  [2020, 52925],
  [2020, 54714],
  [2020, 55374],
  [2020, 55684],
  [2020, 55727],
  [2020, 55975],
  [2020, 53719],
  [2020, 53579],
  [2020, 55945],
  [2020, 56812],
  [2020, 55821],
  [2020, 55074],
  [2020, 55199],
  [2020, 52450],
  [2020, 52059],
  [2020, 53867],
  [2020, 53973],
  [2020, 52010],
  [2020, 51829],
  [2020, 53426],
  [2020, 49741],
  [2020, 47993],
  [2020, 49417],
  [2020, 51239],
  [2020, 52387],
  [2020, 51186],
  [2020, 48245],
  [2020, 43507],
  [2020, 43411],
  [2020, 44807],
  [2020, 42470],
  [2020, 37428],
  [2020, 26106],
  [2020, 11959],
  [2020, 10727],
  [2020, 9388],
  [2020, 10869],
  [2020, 11830],
  [2020, 10376],
  [2020, 10183],
  [2020, 1572],
  [2020, 932],
  [2020, 816],
  [2020, 798],
  [2020, 1017],
  [2020, 229],
  [2020, 234],
  [2020, 231],
  [2020, 210],
  [2020, 242],
  [2020, 228],
  [2020, 226],
  [2020, 259],
  [2020, 238],
  [2020, 210],
  [2020, 210],
  [2020, 223],
  [2020, 229],
  [2020, 209],
  [2020, 199],
  [2020, 210],
  [2020, 207],
  [2020, 194],
  [2020, 204],
  [2020, 205],
  [2020, 204],
  [2020, 192],
  [2020, 206],
  [2020, 234],
  [2020, 204],
  [2020, 220],
  [2020, 245],
  [2020, 230],
  [2020, 220],
  [2020, 190],
  [2020, 191],
  [2020, 182],
  [2020, 195],
  [2020, 215],
  [2020, 184],
  [2020, 177],
  [2020, 184],
  [2020, 172],
  [2020, 166],
  [2020, 179],
  [2020, 184],
  [2020, 177],
  [2020, 174],
  [2020, 176],
  [2020, 161],
  [2020, 176],
  [2020, 177],
  [2020, 172],
  [2020, 42],
  [2020, 168],
  [2020, 165],
  [2020, 159],
  [2020, 167],
  [2020, 161],
  [2020, 169],
  [2020, 183],
  [2020, 167],
  [2020, 182],
  [2020, 188],
  [2020, 170],
  [2020, 168],
  [2020, 181],
  [2020, 184],
  [2020, 173],
  [2020, 41],
  [2020, 178],
  [2020, 169],
  [2020, 196],
  [2020, 199],
  [2020, 175],
  [2020, 184],
  [2020, 202],
  [2020, 198],
  [2020, 191],
  [2020, 184],
  [2020, 185],
  [2020, 217],
  [2020, 210],
  [2020, 25],
  [2020, 255],
  [2020, 205],
  [2020, 277],
  [2020, 287],
  [2020, 262],
  [2020, 245],
  [2020, 256],
  [2020, 907],
  [2020, 940],
  [2020, 972],
  [2020, 1008],
  [2020, 1002],
  [2020, 334],
  [2020, 302],
  [2020, 274],
  [2020, 214],
  [2020, 0],
  [2020, 41],
  [2020, 50],
  [2020, 50],
  [2020, 51],
  [2020, 51],
  [2020, 54],
  [2020, 52],
  [2020, 58],
  [2020, 45],
  [2020, 44],
  [2020, 47],
  [2020, 49],
  [2020, 25],
  [2020, 22],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2021, 76592],
  [2021, 76010],
  [2021, 73218],
  [2021, 68444],
  [2021, 74105],
  [2021, 73236],
  [2021, 73982],
  [2020, 76639],
  [2020, 75746],
  [2020, 72779],
  [2020, 70311],
  [2020, 74027],
  [2020, 71798],
  [2020, 72024],
  [2020, 75829],
  [2020, 76882],
  [2020, 73502],
  [2020, 69834],
  [2020, 72915],
  [2020, 74738],
  [2020, 76166],
  [2020, 76478],
  [2020, 77347],
  [2020, 73049],
  [2020, 70194],
  [2020, 73463],
  [2020, 75219],
  [2020, 75364],
  [2020, 77428],
  [2020, 77458],
  [2020, 73807],
  [2020, 70534],
  [2020, 73361],
  [2020, 74789],
  [2020, 76709],
  [2020, 77048],
  [2020, 77987],
  [2020, 73950],
  [2020, 70588],
  [2020, 73617],
  [2020, 75101],
  [2020, 72130],
  [2020, 74667],
  [2020, 76584],
  [2020, 73835],
  [2020, 70341],
  [2020, 74185],
  [2020, 75449],
  [2020, 76643],
  [2020, 75834],
  [2020, 76748],
  [2020, 73560],
  [2020, 70643],
  [2020, 72925],
  [2020, 74611],
  [2020, 76405],
  [2020, 76089],
  [2020, 75230],
  [2020, 72590],
  [2020, 69422],
  [2020, 71632],
  [2020, 73707],
  [2020, 74579],
  [2020, 74248],
  [2020, 74161],
  [2020, 69522],
  [2020, 67804],
  [2020, 68927],
  [2020, 70269],
  [2020, 71979],
  [2020, 71117],
  [2020, 71481],
  [2020, 68304],
  [2020, 65691],
  [2020, 67646],
  [2020, 69271],
  [2020, 70115],
  [2020, 70068],
  [2020, 69922],
  [2020, 69172],
  [2020, 66484],
  [2020, 66371],
  [2020, 69282],
  [2020, 69277],
  [2020, 68710],
  [2020, 68333],
  [2020, 68339],
  [2020, 65464],
  [2020, 65819],
  [2020, 67912],
  [2020, 67381],
  [2020, 67501],
  [2020, 67920],
  [2020, 68542],
  [2020, 64721],
  [2020, 62174],
  [2020, 63935],
  [2020, 64181],
  [2020, 64552],
  [2020, 64562],
  [2020, 65004],
  [2020, 62342],
  [2020, 61346],
  [2020, 63008],
  [2020, 63235],
  [2020, 63726],
  [2020, 63434],
  [2020, 63152],
  [2020, 59949],
  [2020, 59430],
  [2020, 60905],
  [2021, 69633],
  [2021, 69854],
  [2021, 70573],
  [2021, 70959],
  [2021, 71153],
  [2021, 65413],
  [2021, 64041],
  [2021, 69145],
  [2021, 70162],
  [2021, 70386],
  [2021, 70436],
  [2021, 70774],
  [2021, 65289],
  [2021, 63317],
  [2021, 68704],
  [2021, 70131],
  [2021, 70600],
  [2021, 70918],
  [2021, 70767],
  [2021, 64916],
  [2021, 63547],
  [2021, 68764],
  [2021, 69360],
  [2021, 69851],
  [2021, 70023],
  [2021, 69926],
  [2021, 64238],
  [2021, 62709],
  [2021, 68113],
  [2021, 68810],
  [2021, 69223],
  [2021, 68749],
  [2021, 69338],
  [2021, 63728],
  [2021, 61952],
  [2021, 67067],
  [2021, 68040],
  [2021, 68186],
  [2021, 68292],
  [2021, 68309],
  [2021, 61851],
  [2021, 60031],
  [2021, 66619],
  [2021, 67461],
  [2021, 67513],
  [2021, 67529],
  [2021, 68114],
  [2021, 61308],
  [2021, 59848],
  [2021, 66427],
  [2021, 67053],
  [2021, 67694],
  [2021, 67712],
  [2021, 68022],
  [2021, 60398],
  [2021, 59487],
  [2021, 66234],
  [2021, 66948],
  [2021, 67386],
  [2021, 67358],
  [2021, 67634],
  [2021, 61089],
  [2021, 60029],
  [2021, 65982],
  [2021, 67113],
  [2021, 67439],
  [2021, 67545],
  [2021, 67679],
  [2021, 62055],
  [2021, 60493],
  [2021, 65980],
  [2021, 66966],
  [2021, 67296],
  [2021, 67402],
  [2021, 62653],
  [2021, 61138],
  [2021, 66369],
  [2021, 67638],
  [2021, 67838],
  [2021, 68043],
  [2021, 68554],
  [2021, 63350],
  [2021, 61701],
  [2021, 66959],
  [2021, 68042],
  [2021, 68292],
  [2021, 68660],
  [2021, 69248],
  [2021, 62211],
  [2021, 61451],
  [2021, 66629],
  [2021, 67879],
  [2021, 67836],
  [2021, 68295],
  [2021, 68788],
  [2021, 63669],
  [2021, 62261],
  [2021, 67274],
  [2021, 68266],
  [2021, 69012],
  [2021, 69050],
  [2021, 69171],
  [2021, 64076],
  [2021, 62356],
  [2021, 67641],
  [2021, 68266],
  [2021, 68970],
  [2021, 69256],
  [2021, 69647],
  [2021, 64251],
  [2021, 62346],
  [2021, 67416],
  [2021, 68834],
  [2021, 69775],
  [2021, 69920],
  [2021, 70555],
  [2021, 65088],
  [2021, 63410],
  [2021, 68263],
  [2021, 68940],
  [2021, 69729],
  [2021, 70174],
  [2021, 70216],
  [2021, 65180],
  [2021, 64852],
  [2021, 68309],
  [2021, 69407],
  [2021, 71294],
  [2021, 71331],
  [2021, 71667],
  [2021, 66750],
  [2021, 65104],
  [2021, 68378],
  [2021, 69870],
  [2021, 72125],
  [2021, 72145],
  [2021, 72207],
  [2021, 67211],
  [2021, 65325],
  [2021, 68555],
  [2021, 69508],
  [2021, 70292],
  [2021, 71903],
  [2021, 70840],
  [2021, 67948],
  [2021, 63972],
  [2021, 68022],
  [2021, 69173],
  [2021, 71174],
  [2021, 71298],
  [2021, 70152],
  [2021, 66771],
  [2021, 64778],
  [2021, 68118],
  [2021, 69382],
  [2021, 71498],
  [2021, 71684],
  [2021, 71770],
  [2021, 65763],
  [2021, 63315],
  [2021, 68267],
  [2021, 69339],
  [2021, 72083],
  [2021, 71742],
  [2021, 70270],
  [2021, 66810],
  [2021, 63291],
  [2021, 68719],
  [2021, 70249],
  [2021, 72476],
  [2021, 70475],
  [2021, 71009],
  [2021, 67389],
  [2021, 65223],
  [2021, 68775],
  [2021, 69896],
  [2021, 72190],
  [2021, 70705],
  [2021, 71682],
  [2021, 65763],
  [2021, 65059],
  [2021, 69084],
  [2021, 70796],
  [2021, 72979],
  [2021, 73419],
  [2021, 73806],
  [2021, 68898],
  [2021, 66472],
  [2021, 70074],
  [2021, 71057],
  [2021, 72624],
  [2021, 72991],
  [2021, 73363],
  [2021, 66408],
  [2021, 64377],
  [2021, 69674],
  [2021, 71244],
  [2021, 73061],
  [2021, 73835],
  [2021, 74236],
  [2021, 69570],
  [2021, 66673],
  [2021, 70593],
  [2021, 72714],
  [2021, 75409],
  [2021, 74898],
  [2021, 75020],
  [2021, 68646],
  [2021, 66320],
  [2021, 71958],
  [2021, 73414],
  [2021, 73409],
  [2021, 73868],
  [2021, 73772],
  [2021, 69720],
  [2021, 66872],
  [2021, 71795],
  [2021, 74032],
  [2021, 76278],
  [2021, 75952],
  [2021, 76509],
  [2021, 71348],
  [2021, 69160],
  [2021, 72614],
  [2021, 74627],
  [2021, 76670],
  [2021, 76362],
  [2021, 76499],
  [2021, 70171],
  [2021, 67912],
  [2021, 72828],
  [2021, 74745],
  [2021, 76533],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 813],
  [2020, 813],
  [2020, 804],
  [2020, 804],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 0],
  [2020, 9],
  [2020, 9],
  [2020, 813]
];
const usvaxxed = [
  [1980, 12.4],
  [1981, 19.8],
  [1982, 17],
  [1983, 17.9],
  [1984, 14.2],
  [1985, 20.1],
  [1986, 19.3],
  [1987, 22.6],
  [1988, 19.9],
  [1989, 26.1],
  [1990, 28.3],
  [1991, 28.5],
  [1992, 38.3],
  [1993, 47.1],
  [1994, 52.1],
  [1995, 54.9],
  [1996, 58.2],
  [1997, 75.3],
  [1998, 62.6],
  [1999, 76.8],
  [2000, 70.4],
  [2001, 77.7],
  [2002, 83],
  [2003, 83.1],
  [2004, 57],
  [2005, 81.2],
  [2006, 103.4],
  [2007, 112.4],
  [2008, 110.9],
  [2009, 114],
  [2010, 155.1],
  [2011, 132],
  [2012, 134.9],
  [2013, 134.5],
  [2014, 147.8],
  [2015, 146.4],
  [2016, 145.9],
  [2017, 155.3],
  [2018, 169.1],
  [2019, 174.5],
  [2020, 193.8],
  [2021, 179.8]
];
const ushospninetyData = [
  //[1990, 1219153 /*25819*/],
  [1991, 68667],
  [1992, 50667],
  [1993, 70068],
  [1994, 56331],
  [1995, 47114],
  [1996, 47114],
  [1997, 47114]
];
class Vax extends React.Component {
  constructor(props) {
    super(props);

    let noData = [];
    let date = [];

    var ilikei = [];

    const ilikeiData = ushosp.map((x) => {
      date.push(x.YEAR);
      ilikei.push(x.ILITOTAL);
      return [x.YEAR, x.ILITOTAL];
    });

    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDischarges = Math.min(...ilikei);
    var highDischarges = Math.max(...ilikei);
    noData.sort((a, b) => a[0] - b[0]);
    ilikeiData.sort((a, b) => a[0] - b[0]);

    var state = {
      polio: true,
      ilikeiCohortData: [],
      patpropData: [],
      patientsData: [],
      vaxpropData: [],
      ilipropData: [],
      popuData: [],
      vaxxedData: [],
      highVaxxed: [],
      ilikeiData,
      noData,
      yAxis: highDischarges - lowDischarges,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDischarges,
      highDischarges
    };
    this.state = state;
    this.uscovidhospDatax = {};
  }
  fetchState = async (x, offset, i) => {
    const url = `https://healthdata.gov/resource/g62h-syeh.json?state=${x.abbreviation}&$offset=${offset}&$order=:id`;
    /*  i !== 1
      ? null
      : */ return await fetch(url)
      .then(async (res) => await res.json())
      .then(async (result) => {
        let p = 0;
        console.log(result);
        result.forEach((x) => {
          p++;
          /*const thisstate = statesWithCodes.find(
          (y) => y.abbreviation === x.state
        );
        if (thisstate) {
          // thisstate.abbreviation === "NJ" && console.log(foo);
          foo.jurisdiction_of_occurrence = thisstate.name;*/
          const d = Object.keys(x).filter(
            (r) =>
              r.startsWith("previous_day_admission_adult_covid_suspected") &&
              !r.includes("7_day")
          );
          var suspected = 0;
          d.forEach((f) =>
            Number(x[f]) > 0 ? (suspected = suspected + Number(x[f])) : null
          );
          const year = String(new Date(x.date).getFullYear());
          const weekk = String(
            (new Date(x.date).getTime() / new Date(year + "-12-31").getTime()) *
              168
          );
          const week = weekk.includes(".") ? weekk.split(".")[1] : weekk;
          if (!this.uscovidhospDatax[year + week])
            this.uscovidhospDatax[year + week] = 0;
          this.uscovidhospDatax[year + week] =
            this.uscovidhospDatax[year + week] + suspected;
          //}
        });
        if (p === result.length) {
          if (result.length === 1000 && offset < 6) {
            console.log(result);
            return await this.fetchState(x, offset + 1);
          } else return true;
        }
      })
      .catch((err) => console.log(err.message));
  };
  fetchAllStates = (uscovidData) => {
    Promise.all(
      this.props.statesWithCodes.map(async (x, i) => {
        return await this.fetchState(x, 0, i);
      })
    ).then(() => {
      var uscovidhospData = [];
      Object.keys(this.uscovidhospDatax).map((x, i) =>
        uscovidhospData.push([
          x.substring(0, 4),
          Object.values(this.uscovidhospDatax)[i]
        ])
      );
      console.log(String(uscovidhospData));
      this.fill(uscovidhospData);
    });
  };
  fill = (uschD) => {
    let noData = [];
    let date = [];

    var ilikei = [];
    var iliprop = [];
    var ilipropData = [];
    var ilikeiData = [];
    var ilikeiCohort = [];
    var ilikeiCohortData = [];

    const findPop = (x) => {
      let b4Idx = 0;
      var thisdecade = popdata
        .sort((a, b) => a - b)
        .find((p, i) => {
          b4Idx = i;
          return p.year - x < 20 && p.year - x > 9;
        });
      var b4pop = popdata[b4Idx - 1].pop;
      var b4year = popdata[b4Idx - 1].year;
      if (!thisdecade) console.log(x);
      var addi = (thisdecade.pop - b4pop) * ((x - b4year) / 10);
      return thisdecade.pop + addi;
    };
    const vaxnow = (v) => v[1] / findPop(v[0]);
    var patientsYear = {};
    ushospninetyData.forEach((x, i) => {
      if (!patientsYear[x[0]]) patientsYear[x[0]] = 0;
      patientsYear[x[0]] = x[1];
      const nowp = vaxnow([x[0], x[1]]);
      if (ushospninetyData[i - 1]) {
        const lastp = vaxnow([x[0], ushospninetyData[i - 1][1]]);
        iliprop.push((nowp - lastp) / lastp);
        ilipropData.push([x[0], (nowp - lastp) / lastp]);
        ilikei.push(x[0] / 52);
        ilikeiData.push([x[0], x[1] / 52]);
      }
    });
    var illYear = {};
    var objCohort = {};
    ushosp.forEach((x, i) => {
      date.push(x.YEAR);
      if (!illYear[x.YEAR]) illYear[x.YEAR] = 0;
      illYear[x.YEAR] = illYear[x.YEAR] + x.ILITOTAL;
      if (!patientsYear[x.YEAR]) patientsYear[x.YEAR] = 0;
      patientsYear[x.YEAR] = patientsYear[x.YEAR] + x["TOTAL PATIENTS"];
      ilikei.push(x.ILITOTAL);
      ilikeiData.push([x.YEAR, x.ILITOTAL]);
      const yearCenter = Number(
        String(x.YEAR).substring(0, 2) + (x.YEAR[0] === 1 ? "90" : "00")
      );
      if (!objCohort[yearCenter]) objCohort[yearCenter] = 0;
      objCohort[yearCenter] = objCohort[yearCenter] + Number(x.ILITOTAL);
    });
    Object.keys(objCohort).forEach((x, i) => {
      ilikeiCohort.push(Object.values(x)[i]);
      ilikeiCohortData.push([x, Object.values(x)[i]]);
    });
    // console.log(ilikeiData);
    Object.keys(illYear).forEach((x, i) => {
      const nowp = vaxnow([x, Object.values(illYear)[i]]);
      if (Object.keys(illYear)[i - 1]) {
        const lastp = vaxnow([x, Object.values(illYear)[i - 1]]);
        iliprop.push((nowp - lastp) / lastp);
        ilipropData.push([Number(x), (nowp - lastp) / lastp]);
      }
    });
    /*let patients = [];
    let patientsData = [];
    let patprop = [];
    let patpropData = [];
    Object.keys(patientsYear).forEach((x, i) => {
      if (Object.keys(patientsYear)[i - 1]) {
        const nowp = vaxnow([x, Object.values(patientsYear)[i]]);
        const lastp = vaxnow([x, Object.values(patientsYear)[i - 1]]);
        patients.push(Object.values(patientsYear)[i]);
        patientsData.push([Number(x), Object.values(patientsYear)[i]]);
        patprop.push((nowp - lastp) / lastp);
        patpropData.push([Number(x), (nowp - lastp) / lastp]);
      }
    });*/
    let vaxxed = [];

    let popu = [];
    let popuData = [];
    let vaxprop = [];
    let vaxpropData = [];

    const vaxxedData = usvaxxed.map((x, i) => {
      date.push(x[0]);

      popu.push(findPop(x[0]));
      popuData.push([x[0], findPop(x[0])]);
      const now = vaxnow([x[0], x[1] * 1000000]);
      if (usvaxxed[i - 1]) {
        const last = vaxnow([usvaxxed[i - 1][0], usvaxxed[i - 1][1] * 1000000]);
        vaxprop.push((now - last) / last);
        vaxpropData.push([x[0], (now - last) / last]);
      }
      vaxxed.push(x[1] * 1000000 /* / pop*/);
      return [x[0], x[1] * 1000000];
    });

    var covid = [];
    (uschD ? uschD : uscovidhospData).forEach((x) => {
      date.push(x[0]);
      covid.push(x[1]);
      ilikeiData.push(x);
    });
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDischarges = Math.min(...ilikei);
    var highDischarges = Math.max(...ilikei);
    var highiliprop = Math.max(...iliprop);
    var lowiliprop = Math.min(...iliprop);
    var highvaxprop = Math.max(...vaxprop);
    var lowvaxprop = Math.min(...vaxprop);
    //var highpatientsNom = Math.max(...patients);
    //var lowpatientsNom = Math.min(...patients);
    //var highpatients = Math.max(...patprop);
    //var lowpatients = Math.min(...patprop);
    var highCovid = Math.max(...covid);
    var highVaxxed = Math.max(...vaxxed);
    var highPop = Math.max(...popu);
    noData.sort((a, b) => a[0] - b[0]);
    ilikeiData.sort((a, b) => a[0] - b[0]);
    this.setState({
      //patpropData,
      //highpatientsNom,
      //lowpatientsNom,
      //patientsData,
      //highpatients,
      //lowpatients,
      ilikeiCohortData,
      vaxpropData,
      lowvaxprop,
      highvaxprop,
      lowiliprop,
      ilipropData,
      highiliprop,
      popuData,
      highPop,
      vaxxedData,
      highVaxxed,
      highCovid,
      ilikeiData,
      noData,
      yAxis: highDischarges - 0,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDischarges,
      highDischarges
    });
  };
  componentDidMount = () => {
    this.fill();
  };

  render() {
    const { derivative } = this.state;
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
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
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
    const coefficience = (this.props.lastWidth - 40) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - this.state.lowDischarges) / this.state.yAxis) * lineheight
    ]);
    const uscovidhospDat = uscovidhospData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.91,
      ((y - 0) / this.state.yAxis) * lineheight
    ]);
    const popuData = [[1980, 0], ...this.state.popuData].map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - 0) / this.state.highPop) * lineheight
    ]);
    const vaxxedData = [[1980, 0], ...this.state.vaxxedData].map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - 0) / this.state.highPop) * lineheight
    ]);
    const vaxxedDataVax = [
      [1980, 0],
      ...this.state.vaxxedData
    ].map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - 0) / this.state.highVaxxed) * lineheight
    ]);
    const vaxpropData = [[1980, 0], ...this.state.vaxpropData].map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - this.state.lowiliprop) / this.state.highiliprop) * lineheight
    ]);
    const ilikeiData = this.state.ilikeiData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - 0) / this.state.highDischarges) * lineheight
    ]);
    const ilikeiCohortData = [
      [1980, 0],
      ...this.state.ilikeiCohortData
    ].map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - 0) / this.state.highPop) * lineheight
    ]);
    const ilipropData = this.state.ilipropData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        coefficience,
      ((y - this.state.lowiliprop) / this.state.highiliprop) * lineheight
    ]);
    return !this.state.polio && !this.state.mortal && !this.state.worldwide ? (
      <div
        style={{
          marginTop: "30px",
          width: "100%",
          position: "relative",
          backgroundColor: "rgb(190,150,180)"
        }}
      >
        <div style={labelstyle}>
          <div
            onClick={() =>
              this.setState({ derivative: !this.state.derivative })
            }
            style={{ textAlign: "right", ...buttonStyle }}
          >
            {`${shortNumber(this.state.highCovid)} high wkly covid admission `}
            &bull;
            {" " + this.state.highiliprop &&
              String(this.state.highiliprop).substring(
                0,
                String(this.state.highiliprop).indexOf(".") + 3
              )}
            %
            <br />
            admissions (weekly)
            {shortNumber(this.state.highDischarges)}
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,.3)",
              padding: "4px 8px",
              position: "absolute",
              right: "0px"
            }}
          >
            {this.state.lowDate}
            &nbsp;-&nbsp;
            {this.state.highDate}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "50px",
            overflowX: "auto",
            overflowY: "hidden",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute"
            }}
          >
            {!derivative ? (
              <div style={{ width: "max-content" }}>
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "rgb(240,180,180)"
                    }}
                  />
                  influenza-like-illness&nbsp;
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "rgb(250,100,150)"
                    }}
                  />
                  covid&nbsp;
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "green"
                    }}
                  />
                  vaxxed
                </div>
              </div>
            ) : (
              <div style={{ width: "max-content", display: "flex" }}>
                <div style={{ width: "max-content" }}>
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "purple"
                    }}
                  />
                  vax/pop change-rate&nbsp;
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "darkgreen"
                    }}
                  />
                  iliHosp/pop change-rate
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            this.setState({ polio: true });
            //window.href = "https://humanharvest.info/polio";
          }}
          style={{ zIndex: "1", position: "absolute", margin: "10px" }}
        >
          polio
        </button>
        <br />
        <div style={{ position: "relative", height: lineheight }}>
          {derivative && (
            <div
              style={{
                right: "0px",
                width: "100%",
                borderTop: "1px solid",
                position: "absolute",
                bottom:
                  -(lineheight + 10) *
                  (this.state.lowiliprop /
                    (this.state.highiliprop - this.state.lowiliprop)),
                /*transform: `translate(0px,${
                (200 * this.state.highiliprop) /
                (this.state.highiliprop - this.state.lowiliprop)
            }%`,*/
                textAlign: "right"
              }}
            >
              0
            </div>
          )}
          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height="100%"
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
            {popuData.map(
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
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {uscovidhospDat.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="rgb(250,100,150)"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {ilikeiData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="rgb(240,180,180)"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {!derivative &&
              vaxxedData.map(
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
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
            {!derivative &&
              vaxxedDataVax.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="teal" //rgb(100,140,200)
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
            {derivative &&
              vaxpropData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="purple"
                      fill="transparent" //"rgb(190,150,180)"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
            {derivative &&
              ilipropData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="darkgreen"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
            {ilikeiCohortData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={"30%"}
                    height={2}
                    stroke="red"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
      </div>
    ) : this.state.worldwide ? (
      <Worldwide
        setVax={(s) => this.setState(s)}
        lastWidth={this.props.lastWidth}
      />
    ) : this.state.mortal ? (
      <Mortal
        setVax={(s) => this.setState(s)}
        lastWidth={this.props.lastWidth}
      />
    ) : (
      <Polio
        setVax={(s) => this.setState(s)}
        lastWidth={this.props.lastWidth}
      />
    );
  }
}

export default Vax;

class Polio extends React.Component {
  constructor(props) {
    super(props);
    let date = [];
    let noData = [];
    var polioSclerosis = [];
    var pop = [];
    var popData = [];
    const polioMS = [
      {
        year: 1952,
        scler: 39000,
        pop: 157600000,
        lifeexp: 68.4,
        lifeexpStart: 50.5
      },
      {
        year: 2019,
        scler: 2500000,
        pop: 328200000 //lifeexp: 78.8
      }
    ];
    const polioLEdelta = 9;
    const polioSclerosisData = polioMS.map((x) => {
      var effectiveLE = null;
      if (x.lifeexp)
        effectiveLE = (x.lifeexp + x.lifeexpStart) / 2 - polioLEdelta;
      const scler = effectiveLE ? x.scler * effectiveLE : x.scler;
      noData.push([x.year, 0]);
      date.push(x.year);
      polioSclerosis.push(scler / x.pop);
      pop.push(x.pop);
      popData.push([x.year, x.pop]);
      return [x.year, scler / x.pop];
    });
    var mort = 100;
    for (let i = 0; i < 67; i++) mort = mort * 0.993;
    const mortTrend = [
      [1952, 100],
      [2019, mort]
    ];
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var highpop = Math.max(...pop);
    var highacuteflaccidparalysis = Math.max(...polioSclerosis);
    var lowbrainvirus = Math.min(...polioSclerosis);
    noData.sort((a, b) => a[0] - b[0]);
    polioSclerosisData.sort((a, b) => a[0] - b[0]);
    var state = {
      mortTrend,
      highmort: 100,
      lowbrainvirus,
      highacuteflaccidparalysis,
      date,
      polioSclerosisData,
      noData,
      yAxis: highacuteflaccidparalysis - 0,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      highpop
    };
    this.state = state;
  }

  render() {
    const lineheight = this.props.lineheight ? this.props.lineheight : 50;
    const linecss = {
      left: "0px",
      top: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: lineheight + 10,
      transform: "translate(0%,0%) scale(1,-1)"
    };
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
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
    const width = this.props.lastWidth - 100;
    const idx = String(this.state.highacuteflaccidparalysis).indexOf(".");
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
    const num = shortNumber(
      String(this.state.highacuteflaccidparalysis * 100).substring(0, idx + 2),
      true
    );
    const idxx = String(this.state.lowbrainvirus).indexOf(".");
    const numm = shortNumber(
      String(this.state.lowbrainvirus * 100).substring(0, idxx + 2),
      true
    );
    const coefficience = (this.props.lastWidth - 40) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / width) * coefficience,
      "0"
    ]);
    const mortTrend = this.state.mortTrend.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) * width * coefficience,
      ((y - 0) / this.state.highmort) * lineheight
    ]);
    const polioSclerosisData = this.state.polioSclerosisData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) * width * coefficience,
      ((y - 0) / this.state.yAxis) * lineheight
    ]);

    return (
      <div
        style={{
          marginTop: "30px",
          width: "100%",
          position: "relative",
          backgroundColor: "rgb(190,150,180)"
        }}
      >
        <div style={labelstyle}>
          <div>
            <div style={{ width: 0, padding: 3, backgroundColor: "red" }} />
            &nbsp;
            <a
              style={{ color: "white" }}
              href="https://www.christopherreeve.org/living-with-paralysis/stats-about-paralysis"
            >
              brain-virion paralysis
            </a>
            {num}% -
            <br />
            <div style={{ width: 0, padding: 3, backgroundColor: "purple" }} />
            &nbsp; mortality (non-sewage): {numm}%
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,.3)",
              padding: "4px 8px",
              position: "absolute",
              right: "0px"
            }}
          >
            {this.state.lowDate}&nbsp;-&nbsp;
            {this.state.highDate}
          </div>
          {/*<div
            style={{
              top: "200px",
              height: "min-content",
              display: "flex",
              position: "absolute",
              right: "0px",
              flexDirection: "column"
            }}
          >
            {this.state.lowbrainvirus}
          </div>*/}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.setVax({ mortal: true, polio: false });
            //window.href = "https://humanharvest.info/polio";
          }}
          style={{ margin: "10px" /* position: "absolute", zindex: "1"*/ }}
        >
          mortality
        </button>
        <div
          style={{
            position: "relative",
            height: lineheight
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
                    width={0}
                    height={0}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {mortTrend.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={7}
                    height={7}
                    stroke="purple"
                    fill="purple"
                    strokeWidth="1"
                    key={i}
                  />
                )
            )}
            {/*<path
            // <path d="M150 0 L75 200 L225 200 Z" /> 
            d={`${polioSclerosisData
              .map((x, i) => `${i === 0 ? "M " : "l "}${x[0]} ${x[1]}`)
              .join(" ")}`}
          />*/}
            {polioSclerosisData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={7}
                    height={7}
                    stroke="red"
                    fill="transparent"
                    strokeWidth="1"
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
      </div>
    );
  }
}
const frequency = (chosen5yrs, a, print) => {
  var frequency = null;
  if (!chosen5yrs && print) {
    if (a === 0) {
      frequency = ["15-29"];
    } else if (a === 1) {
      frequency = ["30-34"];
    } else if (a === 2) {
      frequency = ["35-49"];
    } else if (a === 3) {
      frequency = ["50-64"];
    } else if (a === 4) {
      frequency = ["65-74"];
    } else if (a === 5) {
      frequency = ["75-84"];
    } else if (a === 6) {
      frequency = ["85-109"];
    }
  } else if (chosen5yrs || print) {
    //high
    if (a === 0) {
      frequency = ["75-79"];
    } else if (a === 1) {
      frequency = ["80-84"];
    } else if (a === 2) {
      frequency = ["85-89"];
    } else if (a === 3) {
      frequency = ["90-94"];
    } else if (a === 4) {
      frequency = ["95-99"];
    } else if (a === 5) {
      frequency = ["100-104"];
    } else if (a === 6) {
      frequency = ["105-109"];
    }
  } else {
    //programmatic range not 5 yrs
    //cohort
    if (a === 0) {
      frequency = [/*"0", "1-4", "5-9", "10-14", */ "15-19", "20-24", "25-29"];
    } else if (a === 1) {
      frequency = ["30-34", "35-39"];
    } else if (a === 2) {
      frequency = ["40-44", "45-49"];
    } else if (a === 3) {
      frequency = ["50-54", "55-59", "60-64"];
    } else if (a === 4) {
      frequency = ["65-69", "70-74"];
    } else if (a === 5) {
      frequency = ["75-79", "80-84"];
    } else if (a === 6) {
      frequency = ["85-89", "90-94", "95-99", "100-104", "105-109", "110"];
    }
  }
  return frequency;
};
class Mortal extends React.Component {
  constructor(props) {
    super(props);

    let dates = [];
    let noData = [];
    var averageLifetimeData = [];
    var averageLifetime = [];
    let mortalZeroNJData = [];
    var mortalZeroNJ = [];
    let mortalEightyFiveNJDataAge = [];
    let mortalEightyFiveNJAge = [];
    let mortalSixtyFiveNJDataAge = [];
    let mortalSixtyFiveNJAge = [];
    let mortalSeventyFiveNJDataAge = [];
    let mortalSeventyFiveNJAge = [];
    let mortalFiftyNJDataAge = [];
    let mortalFiftyNJAge = [];
    let mortalZeroNJDataAge = [];
    let mortalZeroNJAge = [];
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

    let yearlyZeroNJData = [];
    let yearlyZeroNJ = [];
    let yearlyFiftyNJData = [];
    let yearlyFiftyNJ = [];
    let yearlySeventyFiveNJData = [];
    let yearlySeventyFiveNJ = [];
    let yearlySixtyFiveNJData = [];
    let yearlySixtyFiveNJ = [];
    let yearlyEightyFiveNJData = [];
    let yearlyEightyFiveNJ = [];
    let yearlyNinetyFiveNJData = [];
    let yearlyNinetyFiveNJ = [];
    let yearlyOneTenNJData = [];
    let yearlyOneTenNJ = [];

    let yearlyZeroNJDataAge = [];
    let yearlyZeroNJAge = [];
    let yearlyFiftyNJDataAge = [];
    let yearlyFiftyNJAge = [];
    let yearlySeventyFiveNJDataAge = [];
    let yearlySeventyFiveNJAge = [];
    let yearlySixtyFiveNJDataAge = [];
    let yearlySixtyFiveNJAge = [];
    let yearlyEightyFiveNJDataAge = [];
    let yearlyEightyFiveNJAge = [];
    let yearlyNinetyFiveNJDataAge = [];
    let yearlyNinetyFiveNJAge = [];
    let yearlyOneTenNJDataAge = [];
    let yearlyOneTenNJAge = [];

    let mZeroNJData = [];
    let mEightyFiveNJDataAge = [];
    let mSixtyFiveNJDataAge = [];
    let mSeventyFiveNJDataAge = [];
    let mFiftyNJDataAge = [];

    let yZeroNJData = [];
    let yFiftyNJData = [];
    let ySixtyFiveNJData = [];
    let ySeventyFiveNJData = [];
    let yEightyFiveNJData = [];
    let yNinetyFiveNJData = [];
    let yOneTenNJData = [];

    let yZeroNJDataAge = [];
    let yFiftyNJDataAge = [];
    let ySixtyFiveNJDataAge = [];
    let ySeventyFiveNJDataAge = [];
    let yEightyFiveNJDataAge = [];
    let yNinetyFiveNJDataAge = [];
    let yOneTenNJDataAge = [];

    let mZeroNJDataAge = [];
    let mFiftyNJData = [];
    let mSixtyFiveNJData = [];
    let mSeventyFiveNJData = [];
    let mEightyFiveNJData = [];
    let mNinetyFiveNJData = [];
    let mOneTenNJData = [];
    let avgLifetime = {};
    let chosen5yrs = null;
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);

      const val = (d, p = 1000) => Math.round((d / 100000) * p * 1000);
      Object.values(usmortality)[i].forEach((x) => {
        if (!avgLifetime[x.age])
          avgLifetime[x.age] = { total: 0, length: 0, year };
        //console.log(x);
        const state = {
          year,
          length: avgLifetime[x.age].length + 1,
          total:
            (avgLifetime[x.age].total + val(x.dx, x.pop)) /
            avgLifetime[x.age].total
        };
        avgLifetime[x.age] = state;
      });
    });
    //console.log(avgLifetime);
    Object.keys(avgLifetime).forEach((y, i) => {
      const x = Object.values(avgLifetime)[i];
      averageLifetime.push(x.total / x.length);
      averageLifetimeData.push([x.year, x.total / x.length]);
    });
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      dates.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      const val = (d, p = 1000) => Math.round((d / 100000) * p * 1000);
      Object.values(usmortality)[i].forEach((x) => {
        if (frequency(chosen5yrs, 0).includes(x.age)) {
          mZeroNJData.push([year, val(x.dx, x.pop)]);
          mZeroNJDataAge.push([year, x.pop * 1000]);
        } else if (frequency(chosen5yrs, 1).includes(x.age)) {
          mFiftyNJData.push([year, val(x.dx, x.pop)]);
          mFiftyNJDataAge.push([year, x.pop * 1000]);
        } else if (frequency(chosen5yrs, 2).includes(x.age)) {
          mSixtyFiveNJData.push([year, val(x.dx, x.pop)]);
          mSixtyFiveNJDataAge.push([year, x.pop * 1000]);
        } else if (frequency(chosen5yrs, 3).includes(x.age)) {
          mSeventyFiveNJData.push([year, val(x.dx, x.pop)]);
          mSeventyFiveNJDataAge.push([year, x.pop * 1000]);
        } else if (frequency(chosen5yrs, 4).includes(x.age)) {
          mEightyFiveNJData.push([year, val(x.dx, x.pop)]);
          mEightyFiveNJDataAge.push([year, x.pop * 1000]);
        } else if (frequency(chosen5yrs, 5).includes(x.age)) {
          mNinetyFiveNJData.push([year, val(x.dx, x.pop)]);
        } else if (frequency(chosen5yrs, 6).includes(x.age)) {
          mOneTenNJData.push([year, val(x.dx, x.pop)]);
        }
      });
    });

    Object.keys(yearly).forEach((year, i) => {
      noData.push([year, 0]);
      dates.push(year);
      var yearSet = null;
      Object.keys(usmortality).forEach((y, i) => {
        if (y - year > -1 && y - year < 6) {
          yearSet = Object.values(usmortality)[i];
        }
      });
      if (!yearSet) return console.log(yearSet);
      let obj = {};
      const ageDec = Object.values(yearly)[i];
      Object.keys(ageDec).forEach((age, i) => {
        const pop = yearSet.find(
          (y) => y.age.split("-")[1] - age > -1 && y.age.split("-")[1] - age < 5
        );
        const deaths = Number(Object.values(ageDec)[i]);
        if (!pop) console.log(age);
        if (!obj[pop.age]) obj[pop.age] = 0;
        if (deaths) obj[pop.age] = obj[pop.age] + deaths; //Math.round(deathprob * (pop.pop / 5) * 1000);
      });
      Object.keys(obj).forEach((age, i) => {
        if (frequency(chosen5yrs, 0).includes(age)) {
          yZeroNJData.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 1).includes(age)) {
          yFiftyNJData.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 2).includes(age)) {
          ySixtyFiveNJData.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 3).includes(age)) {
          ySeventyFiveNJData.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 4).includes(age)) {
          yEightyFiveNJData.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 5).includes(age)) {
          yNinetyFiveNJData.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 6).includes(age)) {
          yOneTenNJData.push([year, Object.values(obj)[i]]);
        }
      });
      /**
    =[{
      age: "50-54",
      dx: 2357.65 ,
      pop: 20846
     },{}]
      */
    });
    const yearlypop = {};
    Object.keys(yearlypop).forEach((year, i) => {
      var yearSet = null;
      Object.keys(usmortality).forEach((y, i) => {
        if (y - year > -1 && y - year < 5) {
          yearSet = Object.values(usmortality)[i];
        }
      });
      if (!yearSet) return console.log(yearSet);
      let obj = {};
      const ageDec = Object.values(yearlypop)[i];
      Object.keys(ageDec).forEach((age, i) => {
        const pop = yearSet.find(
          (y) => y.age.split("-")[1] - age > -1 && y.age.split("-")[1] - age < 5
        );
        const population = Number(Object.values(ageDec)[i]);

        if (!obj[pop.age]) obj[pop.age] = 0;
        if (population) obj[pop.age] = obj[pop.age] + Math.round(population); //Math.round(deathprob * (pop.pop / 5) * 1000);
      });
      Object.keys(obj).forEach((age, i) => {
        if (frequency(chosen5yrs, 0).includes(age)) {
          yZeroNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 1).includes(age)) {
          yFiftyNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 2).includes(age)) {
          ySixtyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 3).includes(age)) {
          ySeventyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 4).includes(age)) {
          yEightyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 5).includes(age)) {
          yNinetyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (frequency(chosen5yrs, 6).includes(age)) {
          yOneTenNJDataAge.push([year, Object.values(obj)[i]]);
        }
      });
      /**
    =[{
      age: "50-54",
      dx: 2357.65 ,
      pop: 20846
     },{}]
      */
    });
    dates.forEach((x) => {
      let yOA = 0;
      yOneTenNJDataAge.forEach((obj) => {
        if (obj[0] === x) yOA = yOA + obj[1];
      });
      yearlyOneTenNJAge.push(yOA);
      yearlyOneTenNJDataAge.push([x, yOA]);
      let yNA = 0;
      yNinetyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) yNA = yNA + obj[1];
      });
      yearlyNinetyFiveNJAge.push(yNA);
      yearlyNinetyFiveNJDataAge.push([x, yNA]);
      let yAA = 0;
      yEightyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) yAA = yAA + obj[1];
      });
      yearlyEightyFiveNJAge.push(yAA);
      yearlyEightyFiveNJDataAge.push([x, yAA]);
      let yEA = 0;
      ySeventyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) yEA = yEA + obj[1];
      });
      yearlySeventyFiveNJAge.push(yEA);
      yearlySeventyFiveNJDataAge.push([x, yEA]);
      let ySA = 0;
      ySixtyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) ySA = ySA + obj[1];
      });
      yearlySixtyFiveNJAge.push(ySA);
      yearlySixtyFiveNJDataAge.push([x, ySA]);
      let yMA = 0;
      yFiftyNJDataAge.forEach((obj) => {
        if (obj[0] === x) yMA = yMA + obj[1];
      });
      yearlyFiftyNJAge.push(yMA);
      yearlyFiftyNJDataAge.push([x, yMA]);
      let yZA = 0;
      yZeroNJDataAge.forEach((obj) => {
        if (obj[0] === x) yZA = yZA + obj[1];
      });
      yearlyZeroNJAge.push(yZA);
      yearlyZeroNJDataAge.push([x, yZA]);

      let yO = 0;
      yOneTenNJData.forEach((obj) => {
        if (obj[0] === x) yO = yO + obj[1];
      });
      yearlyOneTenNJ.push(yO);
      yearlyOneTenNJData.push([x, yO]);
      let yN = 0;
      yNinetyFiveNJData.forEach((obj) => {
        if (obj[0] === x) yN = yN + obj[1];
      });
      yearlyNinetyFiveNJ.push(yN);
      yearlyNinetyFiveNJData.push([x, yN]);
      let yA = 0;
      yEightyFiveNJData.forEach((obj) => {
        if (obj[0] === x) yA = yA + obj[1];
      });
      yearlyEightyFiveNJ.push(yA);
      yearlyEightyFiveNJData.push([x, yA]);
      let yE = 0;
      ySeventyFiveNJData.forEach((obj) => {
        if (obj[0] === x) yE = yE + obj[1];
      });
      yearlySeventyFiveNJ.push(yE);
      yearlySeventyFiveNJData.push([x, yE]);
      let yS = 0;
      ySixtyFiveNJData.forEach((obj) => {
        if (obj[0] === x) yS = yS + obj[1];
      });
      yearlySixtyFiveNJ.push(yS);
      yearlySixtyFiveNJData.push([x, yS]);
      let yM = 0;
      yFiftyNJData.forEach((obj) => {
        if (obj[0] === x) yM = yM + obj[1];
      });
      yearlyFiftyNJ.push(yM);
      yearlyFiftyNJData.push([x, yM]);
      let yZ = 0;
      yZeroNJData.forEach((obj) => {
        if (obj[0] === x) yZ = yZ + obj[1];
      });
      yearlyZeroNJ.push(yZ);
      yearlyZeroNJData.push([x, yZ]);

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
      mortalZeroNJData.push([x, totmZ]);

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
      mortalZeroNJDataAge.push([x, totmZA]);
    });
    var date = [...new Set(dates)];
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...mortalZeroNJ);
    const all = [
      ...yearlyZeroNJ,
      ...yearlyFiftyNJ,
      ...yearlySixtyFiveNJ,
      ...yearlySeventyFiveNJ,
      ...yearlyEightyFiveNJ,
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
    var cappop = Math.max(
      ...yearlyZeroNJAge,
      ...yearlyFiftyNJAge,
      ...yearlySixtyFiveNJAge,
      ...yearlySeventyFiveNJAge,
      ...yearlyEightyFiveNJAge,
      ...mortalZeroNJAge,
      ...mortalFiftyNJAge,
      ...mortalSixtyFiveNJAge,
      ...mortalSeventyFiveNJAge,
      ...mortalEightyFiveNJAge
    );
    /*Object.keys(yearly).forEach((x) => {
      Object.keys(yearlypop).forEach((y, n) => {
        const yearSet = Object.values(yearly)[n];
        const yearSetPop = Object.values(yearlypop)[n];
        if (y === x) {
          /* var total = 0;
          for (let i = 0; i < 10; i++) {
            total = total + yearSetPop[75 + i];
            //console.log(yearSet[75 + i]);
          }*
          //console.log(y,x[1] / total, x[1], total);
          Object.values(yearSet).forEach((e, i) => {
            const pop = yearSetPop[i];
            if (
              [17, 18, 19, 20, 21, 22, 23, 24, 25, 26].includes(
                Object.values(yearSet).length - i
              )
            )
              ["2018", "2019", "2020"].includes(y) &&
                console.log(
                  y,
                  Object.keys(yearSet)[i],
                  y === "2020" ? e / (e + pop) : e / pop,
                  e,
                  y === "2020" ? e + pop : pop
                );
          });
        }
      });
    });*/
    noData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
    var state = {
      cappop,
      highlifetime,
      averageLifetimeData,
      date,
      mortalZeroNJDataAge,
      mortalFiftyNJDataAge,
      mortalSixtyFiveNJDataAge,
      mortalSeventyFiveNJDataAge,
      mortalEightyFiveNJDataAge,
      mortalZeroNJData,
      mortalFiftyNJData,
      mortalSixtyFiveNJData,
      mortalSeventyFiveNJData,
      mortalEightyFiveNJData,
      mortalNinetyFiveNJData,
      mortalOneTenNJData,
      yearlyZeroNJData,
      yearlyFiftyNJData,
      yearlySixtyFiveNJData,
      yearlySeventyFiveNJData,
      yearlyEightyFiveNJData,
      yearlyNinetyFiveNJData,
      yearlyOneTenNJData,
      yearlyZeroNJDataAge,
      yearlyFiftyNJDataAge,
      yearlySixtyFiveNJDataAge,
      yearlySeventyFiveNJDataAge,
      yearlyEightyFiveNJDataAge,
      yearlyNinetyFiveNJDataAge,
      yearlyOneTenNJDataAge,
      noData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDeaths,
      highDeaths,
      yaxis: true
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    const { chosenRate, chosen5yrs } = this.state;
    if (
      chosenRate !== this.state.lastChosenRate ||
      this.state.lastchosenfrequency !== chosen5yrs
    )
      this.setState(
        {
          lastchosenfrequency: chosen5yrs,
          lastChosenRate: chosenRate
        },
        () => {
          let dates = [];
          let noData = [];
          let mortalZeroNJData = [];
          var mortalZeroNJ = [];
          let mortalZeroNJDataAge = [];
          let mortalZeroNJAge = [];
          let mortalFiftyNJDataAge = [];
          let mortalFiftyNJAge = [];
          let mortalSixtyFiveNJDataAge = [];
          let mortalSixtyFiveNJAge = [];
          let mortalSeventyFiveNJDataAge = [];
          let mortalSeventyFiveNJAge = [];
          let mortalEightyFiveNJDataAge = [];
          let mortalEightyFiveNJAge = [];
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

          let yearlyZeroNJData = [];
          let yearlyZeroNJ = [];
          let yearlyFiftyNJData = [];
          let yearlyFiftyNJ = [];
          let yearlySeventyFiveNJData = [];
          let yearlySeventyFiveNJ = [];
          let yearlySixtyFiveNJData = [];
          let yearlySixtyFiveNJ = [];
          let yearlyEightyFiveNJData = [];
          let yearlyEightyFiveNJ = [];
          let yearlyNinetyFiveNJData = [];
          let yearlyNinetyFiveNJ = [];
          let yearlyOneTenNJData = [];
          let yearlyOneTenNJ = [];

          let yearlyZeroNJDataAge = [];
          let yearlyZeroNJAge = [];
          let yearlyFiftyNJDataAge = [];
          let yearlyFiftyNJAge = [];
          let yearlySeventyFiveNJDataAge = [];
          let yearlySeventyFiveNJAge = [];
          let yearlySixtyFiveNJDataAge = [];
          let yearlySixtyFiveNJAge = [];
          let yearlyEightyFiveNJDataAge = [];
          let yearlyEightyFiveNJAge = [];
          let yearlyNinetyFiveNJDataAge = [];
          let yearlyNinetyFiveNJAge = [];
          let yearlyOneTenNJDataAge = [];
          let yearlyOneTenNJAge = [];

          let mZeroNJData = [];
          let mZeroNJDataAge = [];
          let mFiftyNJDataAge = [];
          let mSixtyFiveNJDataAge = [];
          let mSeventyFiveNJDataAge = [];
          let mEightyFiveNJDataAge = [];
          let mFiftyNJData = [];
          let mSixtyFiveNJData = [];
          let mSeventyFiveNJData = [];
          let mEightyFiveNJData = [];
          let mNinetyFiveNJData = [];
          let mOneTenNJData = [];

          let yZeroNJData = [];
          let yFiftyNJData = [];
          let ySixtyFiveNJData = [];
          let ySeventyFiveNJData = [];
          let yEightyFiveNJData = [];
          let yNinetyFiveNJData = [];
          let yOneTenNJData = [];

          let yZeroNJDataAge = [];
          let yFiftyNJDataAge = [];
          let ySixtyFiveNJDataAge = [];
          let ySeventyFiveNJDataAge = [];
          let yEightyFiveNJDataAge = [];
          let yNinetyFiveNJDataAge = [];
          let yOneTenNJDataAge = [];
          const averageIt = chosenRate && !chosen5yrs;
          Object.keys(usmortality).forEach((yearSet, i) => {
            const year = yearSet; //Number(yearSet.split("-")[1]);
            noData.push([year, 0]);
            dates.push(year);
            /*const thisdecade = popdata.find(
          (x) => x.year - year < 5 && x.year - year > -5
        );*/
            const val = (d, p = 1000, rate = 1) =>
              Math.round(((d / 100000) * p * 1000) / rate);
            Object.values(usmortality)[i].forEach((x) => {
              if (frequency(chosen5yrs, 0).includes(x.age)) {
                mZeroNJDataAge.push([
                  year,
                  averageIt ? (x.pop * 1000) / 6 : x.pop * 1000
                ]);
              } else if (frequency(chosen5yrs, 1).includes(x.age)) {
                mFiftyNJDataAge.push([
                  year,
                  averageIt ? (x.pop * 1000) / 2 : x.pop * 1000
                ]);
              } else if (frequency(chosen5yrs, 2).includes(x.age)) {
                mSixtyFiveNJDataAge.push([
                  year,
                  averageIt ? (x.pop * 1000) / 2 : x.pop * 1000
                ]);
              } else if (frequency(chosen5yrs, 3).includes(x.age)) {
                mSeventyFiveNJDataAge.push([
                  year,
                  averageIt ? (x.pop * 1000) / 3 : x.pop * 1000
                ]);
              } else if (frequency(chosen5yrs, 4).includes(x.age)) {
                mEightyFiveNJDataAge.push([
                  year,
                  averageIt ? (x.pop * 1000) / 2 : x.pop * 1000
                ]);
              }
              if (frequency(chosen5yrs, 0).includes(x.age)) {
                mZeroNJData.push([
                  year,
                  averageIt ? val(x.dx, x.pop, 6) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosen5yrs, 1).includes(x.age)) {
                mFiftyNJData.push([
                  year,
                  averageIt ? val(x.dx, x.pop, 2) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosen5yrs, 2).includes(x.age)) {
                mSixtyFiveNJData.push([
                  year,
                  averageIt ? val(x.dx, x.pop, 2) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosen5yrs, 3).includes(x.age)) {
                mSeventyFiveNJData.push([
                  year,
                  averageIt ? val(x.dx, x.pop, 3) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosen5yrs, 4).includes(x.age)) {
                mEightyFiveNJData.push([
                  year,
                  averageIt ? val(x.dx, x.pop, 2) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosen5yrs, 5).includes(x.age)) {
                mNinetyFiveNJData.push([
                  year,
                  averageIt ? val(x.dx, x.pop, 2) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosen5yrs, 6).includes(x.age)) {
                mOneTenNJData.push([
                  year,
                  averageIt ? val(x.dx, x.pop, 6) : val(x.dx, x.pop)
                ]);
              }
            });
          });
          Object.keys(yearly).forEach((year, i) => {
            noData.push([year, 0]);
            dates.push(year);
            var yearSet = null;
            Object.keys(usmortality).forEach((y, i) => {
              if (y - year > -1 && y - year < 6) {
                yearSet = Object.values(usmortality)[i];
              }
            });
            if (!yearSet) return console.log(yearSet);
            let obj = {};
            const ageDec = Object.values(yearly)[i];
            Object.keys(ageDec).forEach((age, i) => {
              const pop = yearSet.find(
                (y) =>
                  y.age.split("-")[1] - age > -1 &&
                  y.age.split("-")[1] - age < 5
              );
              const deaths = Number(Object.values(ageDec)[i]);
              //console.log(deaths);
              if (!obj[pop.age]) obj[pop.age] = 0;
              if (deaths) obj[pop.age] = obj[pop.age] + deaths; //Math.round(deathprob * (pop.pop / 5) * 1000);
            });
            Object.keys(obj).forEach((age, i) => {
              if (frequency(chosen5yrs, 0).includes(age)) {
                yZeroNJData.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 6 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 1).includes(age)) {
                yFiftyNJData.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 2).includes(age)) {
                ySixtyFiveNJData.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 3).includes(age)) {
                ySeventyFiveNJData.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 3 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 4).includes(age)) {
                yEightyFiveNJData.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 5).includes(age)) {
                yNinetyFiveNJData.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 6).includes(age)) {
                yOneTenNJData.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 6 : Object.values(obj)[i]
                ]);
              }
            });
            /**
          =[{
            age: "50-54",
            dx: 2357.65 ,
            pop: 20846
           },{}]
            */
          });
          const yearlypop = {};
          Object.keys(yearlypop).forEach((year, i) => {
            var yearSet = null;
            Object.keys(usmortality).forEach((y, i) => {
              if (y - year > -1 && y - year < 5) {
                yearSet = Object.values(usmortality)[i];
              }
            });
            if (!yearSet) return console.log(yearSet);
            let obj = {};
            const ageDec = Object.values(yearlypop)[i];
            Object.keys(ageDec).forEach((age, i) => {
              const pop = yearSet.find(
                (y) =>
                  y.age.split("-")[1] - age > -1 &&
                  y.age.split("-")[1] - age < 5
              );
              const population = Number(Object.values(ageDec)[i]);

              if (!obj[pop.age]) obj[pop.age] = 0;
              if (population)
                obj[pop.age] = obj[pop.age] + Math.round(population); //Math.round(deathprob * (pop.pop / 5) * 1000);
            });
            Object.keys(obj).forEach((age, i) => {
              if (frequency(chosen5yrs, 0).includes(age)) {
                yZeroNJDataAge.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 6 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 1).includes(age)) {
                yFiftyNJDataAge.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 2).includes(age)) {
                ySixtyFiveNJDataAge.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 3).includes(age)) {
                ySeventyFiveNJDataAge.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 3 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 4).includes(age)) {
                yEightyFiveNJDataAge.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 5).includes(age)) {
                yNinetyFiveNJDataAge.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 2 : Object.values(obj)[i]
                ]);
              } else if (frequency(chosen5yrs, 6).includes(age)) {
                yOneTenNJDataAge.push([
                  year,
                  averageIt ? Object.values(obj)[i] / 6 : Object.values(obj)[i]
                ]);
              }
            });
            /**
    =[{
      age: "50-54",
      dx: 2357.65 ,
      pop: 20846
     },{}]
      */
          });

          dates.sort((a, b) => a - b);
          var date = [...new Set(dates)];
          date.forEach((x) => {
            let yOA = 0;
            yOneTenNJDataAge.forEach((obj) => {
              if (obj[0] === x) yOA = yOA + obj[1];
            });
            yearlyOneTenNJAge.push(yOA);
            yearlyOneTenNJDataAge.push([x, yOA]);
            let yNA = 0;
            yNinetyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) yNA = yNA + obj[1];
            });
            yearlyNinetyFiveNJAge.push(yNA);
            yearlyNinetyFiveNJDataAge.push([x, yNA]);
            let yAA = 0;
            yEightyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) yAA = yAA + obj[1];
            });
            yearlyEightyFiveNJAge.push(yAA);
            yearlyEightyFiveNJDataAge.push([x, yAA]);
            let yEA = 0;
            ySeventyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) yEA = yEA + obj[1];
            });
            yearlySeventyFiveNJAge.push(yEA);
            yearlySeventyFiveNJDataAge.push([x, yEA]);
            let ySA = 0;
            ySixtyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) ySA = ySA + obj[1];
            });
            yearlySixtyFiveNJAge.push(ySA);
            yearlySixtyFiveNJDataAge.push([x, ySA]);
            let yMA = 0;
            yFiftyNJDataAge.forEach((obj) => {
              if (obj[0] === x) yMA = yMA + obj[1];
            });
            yearlyFiftyNJAge.push(yMA);
            yearlyFiftyNJDataAge.push([x, yMA]);
            let yZA = 0;
            yZeroNJDataAge.forEach((obj) => {
              if (obj[0] === x) yZA = yZA + obj[1];
            });
            yearlyZeroNJAge.push(yZA);
            yearlyZeroNJDataAge.push([x, yZA]);

            let yO = 0;
            yOneTenNJData.forEach((obj) => {
              if (obj[0] === x) yO = yO + obj[1];
            });
            yearlyOneTenNJ.push(yO);
            yearlyOneTenNJData.push([x, yO]);
            let yN = 0;
            yNinetyFiveNJData.forEach((obj) => {
              if (obj[0] === x) yN = yN + obj[1];
            });
            yearlyNinetyFiveNJ.push(yN);
            yearlyNinetyFiveNJData.push([x, yN]);
            let yA = 0;
            yEightyFiveNJData.forEach((obj) => {
              if (obj[0] === x) yA = yA + obj[1];
            });
            yearlyEightyFiveNJ.push(yA);
            yearlyEightyFiveNJData.push([x, yA]);
            let yE = 0;
            ySeventyFiveNJData.forEach((obj) => {
              if (obj[0] === x) yE = yE + obj[1];
            });
            yearlySeventyFiveNJ.push(yE);
            yearlySeventyFiveNJData.push([x, yE]);
            let yS = 0;
            ySixtyFiveNJData.forEach((obj) => {
              if (obj[0] === x) yS = yS + obj[1];
            });
            yearlySixtyFiveNJ.push(yS);
            yearlySixtyFiveNJData.push([x, yS]);
            let yM = 0;
            yFiftyNJData.forEach((obj) => {
              if (obj[0] === x) yM = yM + obj[1];
            });
            yearlyFiftyNJ.push(yM);
            yearlyFiftyNJData.push([x, yM]);
            let yZ = 0;
            yZeroNJData.forEach((obj) => {
              if (obj[0] === x) yZ = yZ + obj[1];
            });
            yearlyZeroNJ.push(yZ);
            yearlyZeroNJData.push([x, yZ]);

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
            mortalZeroNJData.push([x, totmZ]);

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
            mortalZeroNJDataAge.push([x, totmZA]);
          });
          //console.log(yearlyFiftyNJAge, yearlyZeroNJAge);
          var lowDate = Math.min(...date);
          var highDate = Math.max(...date);
          var lowDeaths = 0; //Math.min(...mortalZeroNJ);
          const all = [
            ...yearlyZeroNJ,
            ...yearlyFiftyNJ,
            ...yearlySixtyFiveNJ,
            ...yearlySeventyFiveNJ,
            ...yearlyEightyFiveNJ,
            ...mortalZeroNJ,
            ...mortalFiftyNJ,
            ...mortalSixtyFiveNJ,
            ...mortalSeventyFiveNJ,
            ...mortalEightyFiveNJ,
            ...mortalNinetyFiveNJ,
            ...mortalOneTenNJ
          ];
          var highDeaths = Math.max(...all);
          var cappop = Math.max(
            ...yearlyZeroNJAge,
            ...yearlyFiftyNJAge,
            ...yearlySixtyFiveNJAge,
            ...yearlySeventyFiveNJAge,
            ...yearlyEightyFiveNJAge,
            ...(averageIt ? [] : mortalZeroNJAge),
            ...mortalFiftyNJAge,
            ...mortalSixtyFiveNJAge,
            ...mortalSeventyFiveNJAge,
            ...mortalEightyFiveNJAge
          );
          noData.sort((a, b) => a[0] - b[0]);
          mortalZeroNJData.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
          this.setState({
            date,
            cappop,
            mortalZeroNJData,
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
            yearlyZeroNJData,
            yearlyFiftyNJData,
            yearlySixtyFiveNJData,
            yearlySeventyFiveNJData,
            yearlyEightyFiveNJData,
            yearlyNinetyFiveNJData,
            yearlyOneTenNJData,
            yearlyZeroNJDataAge,
            yearlyFiftyNJDataAge,
            yearlySixtyFiveNJDataAge,
            yearlySeventyFiveNJDataAge,
            yearlyEightyFiveNJDataAge,
            yearlyNinetyFiveNJDataAge,
            yearlyOneTenNJDataAge,
            noData,
            yAxis: highDeaths, //- lowDeaths,
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
    const yaxis = this.state.yaxis ? this.state.yAxis : this.state.cappop;
    const { chosenRate, lowDate } = this.state;
    const coefficience = (this.props.lastWidth - 40) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      0
    ]);
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
    const mortalZeroNJDataAge = this.state.mortalZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
    ]);
    const mortalFiftyNJDataAge = this.state.mortalFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalSixtyFiveNJDataAge = this.state.mortalSixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalSeventyFiveNJDataAge = this.state.mortalSeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalEightyFiveNJDataAge = this.state.mortalEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
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

    const yearlyZeroNJData = this.state.yearlyZeroNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / yaxis) * lineheight
    ]);
    const yearlyFiftyNJData = this.state.yearlyFiftyNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / yaxis) * lineheight
    ]);
    const yearlySixtyFiveNJData = this.state.yearlySixtyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const yearlySeventyFiveNJData = this.state.yearlySeventyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const yearlyEightyFiveNJData = this.state.yearlyEightyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const yearlyNinetyFiveNJData = this.state.yearlyNinetyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / yaxis) * lineheight
      ]
    );
    const yearlyOneTenNJData = this.state.yearlyOneTenNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const yearlyZeroNJDataAge = this.state.yearlyZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
    ]);
    const yearlyFiftyNJDataAge = this.state.yearlyFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const yearlySixtyFiveNJDataAge = this.state.yearlySixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const yearlySeventyFiveNJDataAge = this.state.yearlySeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const yearlyEightyFiveNJDataAge = this.state.yearlyEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const yearlyNinetyFiveNJDataAge = this.state.yearlyNinetyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const yearlyOneTenNJDataAge = this.state.yearlyOneTenNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const ite = { border: "1px grey dashed", width: "max-content" };
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
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
    const averageIt = chosenRate && !this.state.chosen5yrs;
    return (
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          position: "relative",
          backgroundColor: "rgb(190,150,180)"
        }}
      >
        <div style={labelstyle}>
          <span
            style={{
              fontSize: "12px",
              wordWrap: "break-word"
            }}
          >
            <a
              style={{
                color: "white"
              }}
              href="https://wonder.cdc.gov/Bridged-Race-v2020.HTML"
            >
              B-R Pop (Est)
            </a>
            &nbsp;&bull;&nbsp;
            <a
              style={{
                color: "white"
              }}
              href="https://www.census.gov/programs-surveys/popest/technical-documentation/research/evaluation-estimates/2020-evaluation-estimates/2010s-national-detail.html"
            >
              5yr^2
            </a>
            <br />
            <a
              style={{
                color: "white"
              }}
              href="https://www.cdc.gov/nchs/data_access/vitalstatsonline.htm#Mortality_Multiple"
            >
              Mortality-Multiple
            </a>
            &nbsp;&bull;&nbsp;
            {shortNumber(Math.round(this.state.highDeaths /*/5 */))}
            &nbsp;&bull;&nbsp;
            <a
              style={{
                color: "white"
              }}
              href="https://www.cdc.gov/nchs/products/databriefs/db427.htm"
            >
              (+)
            </a>
          </span>
          <div
            style={buttonStyle}
            onClick={() =>
              this.setState(
                //{ chosen5yrs: !this.state.chosen5yrs }
                this.state.chosenRate && this.state.chosen5yrs
                  ? { chosenRate: false, chosen5yrs: false }
                  : !this.state.chosenRate
                  ? { chosenRate: true }
                  : { chosen5yrs: true }
              )
            }
          >
            {averageIt ? "cohort (5y)" : `mortality (yearly) `}
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,.3)",
              padding: "4px 8px",
              position: "absolute",
              right: "0px"
            }}
          >
            {lowDate}&nbsp;
            {this.state.highDate}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "50px",
            overflowX: "auto",
            overflowY: "hidden",
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute"
            }}
          >
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "white"
                }}
              />
              {frequency(this.state.chosen5yrs, 0, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "purple"
                }}
              />
              {frequency(this.state.chosen5yrs, 1, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "blue"
                }}
              />
              {frequency(this.state.chosen5yrs, 2, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "green"
                }}
              />
              {frequency(this.state.chosen5yrs, 3, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "orange"
                }}
              />
              {frequency(this.state.chosen5yrs, 4, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "red"
                }}
              />
              {frequency(this.state.chosen5yrs, 5, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "black"
                }}
              />
              {
                frequency(this.state.chosen5yrs, 6, true) //chosen5yrs, index, range defaults cohort
              }
              &nbsp;&nbsp;
            </div>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.setVax({ worldwide: true, mortal: false });
            //window.href = "https://humanharvest.info/polio";
          }}
          style={{
            zIndex: "1",
            marginLeft: "10px",
            position: "absolute"
          }}
        >
          worldwide
        </button>
        <br />
        <div
          style={{
            position: "relative",
            height: lineheight
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
            {/** */}
            {mortalZeroNJData.map(
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
            {mortalFiftyNJData.map(
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
            {/*<BasisCurve
              showPoints={false}
              strokeWidth={4}
              stroke="purple"
              data={mortalZeroNJData}
            />*/}
            {mortalZeroNJDataAge.map(
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
            )}
            {yearlyZeroNJDataAge.map(
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
            {yearlyFiftyNJDataAge.map(
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
            {yearlySixtyFiveNJDataAge.map(
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
            {yearlySeventyFiveNJDataAge.map(
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
            {yearlyEightyFiveNJDataAge.map(
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
            )}
            {yearlyNinetyFiveNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="red"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {yearlyOneTenNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="black"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {yearlySeventyFiveNJData.map(
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
            {yearlyEightyFiveNJData.map(
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
            {yearlyNinetyFiveNJData.map(
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
            {yearlyOneTenNJData.map(
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
            {yearlySixtyFiveNJData.map(
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
            {yearlyZeroNJData.map(
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
            {yearlyFiftyNJData.map(
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
          </svg>
        </div>
        {/*<div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,  minmax(10px, max-content))",
            width: "100%"
          }}
        >
          {this.state.date.map(
            (x) =>
              ["0", "5"].includes(x[3]) && (
                <div
                  key={x}
                  style={{
                    transform: "rotate(40deg)",
                    width: "max-content",
                    wordBreak: "none",
                    margin: "0px 10px"
                  }}
                >
                  {x}
                </div>
              )
          )}
        </div>*/}
      </div>
    );
  }
}
class Worldwide extends React.Component {
  constructor(props) {
    super(props);

    let date = [];
    let noData = [];
    var averageLifetimeData = [];
    var averageLifetime = [];
    let mortalZeroNJData = [];
    var mortalZeroNJ = [];
    let mortalNinetyFiveNJAge = [];
    let mortalNinetyFiveNJDataAge = [];
    let mortalOneTenNJAge = [];
    let mortalOneTenNJDataAge = [];
    let mortalEightyFiveNJDataAge = [];
    let mortalEightyFiveNJAge = [];
    let mortalSixtyFiveNJDataAge = [];
    let mortalSixtyFiveNJAge = [];
    let mortalSeventyFiveNJDataAge = [];
    let mortalSeventyFiveNJAge = [];
    let mortalFiftyNJDataAge = [];
    let mortalFiftyNJAge = [];
    let mortalZeroNJDataAge = [];
    let mortalZeroNJAge = [];
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
    let mOneTenNJDataAge = [];
    let mNinetyFiveNJDataAge = [];
    let mEightyFiveNJDataAge = [];
    let mSixtyFiveNJDataAge = [];
    let mSeventyFiveNJDataAge = [];
    let mFiftyNJDataAge = [];
    let mZeroNJDataAge = [];
    let mFiftyNJData = [];
    let mSixtyFiveNJData = [];
    let mSeventyFiveNJData = [];
    let mEightyFiveNJData = [];
    let mNinetyFiveNJData = [];
    let mOneTenNJData = [];
    let avgLifetime = {};
    const numer = (d) => Number(String(d).replaceAll(",", ""));
    const val = (d, p = 1000) => numer(d) * p;
    // Math.round((numer(d) / 100000) * numer(p) );
    Object.keys(worldwide).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);

      Object.values(worldwide)[i].forEach((x, i) => {
        if (!avgLifetime[x.age])
          avgLifetime[x.age] = { total: 0, length: 0, year };
        //console.log(x);
        const state = {
          year,
          length: avgLifetime[x.age].length + 1,
          total:
            avgLifetime[x.age].total +
            numer(x.deaths) /*numer(x.deaths, popp))*/ /
              avgLifetime[x.age].total
        };
        avgLifetime[x.age] = state;
      });
    });
    //console.log(avgLifetime);
    Object.keys(avgLifetime).forEach((y, i) => {
      const x = Object.values(avgLifetime)[i];
      averageLifetime.push(x.total / x.length);
      averageLifetimeData.push([x.year, x.total / x.length]);
    });
    Object.keys(worldwide).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = worldwidepopdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      Object.values(worldwide)[i].forEach((x) => {
        const pop = numer(
          worldwidepopdata[year].find((y) => y.age === x.age).pop
        );
        if (x.age === "0-4") {
          mZeroNJData.push([year, numer(x.deaths)]);
          mZeroNJDataAge.push([year, pop]);
        } else if (
          x.age === "5-9" ||
          x.age === "10-14" ||
          x.age === "15-19" ||
          x.age === "20-24" ||
          x.age === "25-29" ||
          x.age === "30-34" ||
          x.age === "35-39" ||
          x.age === "40-44" ||
          x.age === "45-49"
        ) {
          mFiftyNJData.push([year, numer(x.deaths)]);
          mFiftyNJDataAge.push([year, pop]);
        } else if (
          x.age === "50-54" ||
          x.age === "55-59" ||
          x.age === "60-64"
        ) {
          mSixtyFiveNJData.push([year, numer(x.deaths)]);
          mSixtyFiveNJDataAge.push([year, pop]);
        } else if (x.age === "65-69" || x.age === "70-74") {
          mSeventyFiveNJData.push([year, numer(x.deaths)]);
          mSeventyFiveNJDataAge.push([year, pop]);
        } else if (x.age === "75-79" || x.age === "80-84") {
          mEightyFiveNJData.push([year, numer(x.deaths)]);
          mEightyFiveNJDataAge.push([year, pop]);
        } else if (x.age === "85-89" || x.age === "90-94") {
          mNinetyFiveNJData.push([year, numer(x.deaths)]);
          mNinetyFiveNJDataAge.push([year, pop]);
        } else if (
          x.age === "95" ||
          x.age === "100-104" ||
          x.age === "105-109" ||
          x.age === "110"
        ) {
          mOneTenNJData.push([year, numer(x.deaths)]);
          mOneTenNJDataAge.push([year, pop]);
        }
      });
    });
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
      let totmOT = 0;
      mOneTenNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmOT = totmOT + obj[1];
      });
      mortalOneTenNJAge.push(totmOT);
      mortalOneTenNJDataAge.push([x, totmOT]);
      let totmNFA = 0;
      mNinetyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmNFA = totmNFA + obj[1];
      });
      mortalNinetyFiveNJAge.push(totmNFA);
      mortalNinetyFiveNJDataAge.push([x, totmNFA]);
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
      mortalZeroNJDataAge.push([x, totmZA]);
      let totmZ = 0;
      mZeroNJData.forEach((obj) => {
        if (obj[0] === x) totmZ = totmZ + obj[1];
      });
      mortalZeroNJ.push(totmZ);
      mortalZeroNJData.push([x, totmZ]);
    });
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
    var cappop = Math.max(
      ...mortalZeroNJAge,
      ...mortalFiftyNJAge,
      ...mortalSixtyFiveNJAge,
      ...mortalSeventyFiveNJAge,
      ...mortalEightyFiveNJAge
    );
    noData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
    var state = {
      cappop,
      highlifetime,
      averageLifetimeData,
      date,
      mortalZeroNJData,
      mortalZeroNJDataAge,
      mortalFiftyNJDataAge,
      mortalSixtyFiveNJDataAge,
      mortalSeventyFiveNJDataAge,
      mortalEightyFiveNJDataAge,
      mortalNinetyFiveNJDataAge,
      mortalOneTenNJDataAge,
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
      highDeaths,
      yaxis: true
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    const { chosenRate, chosenfrequency } = this.state;
    if (
      chosenRate !== this.state.lastChosenRate ||
      this.state.lastchosenfrequency !== chosenfrequency
    )
      this.setState(
        {
          lastchosenfrequency: chosenfrequency,
          lastChosenRate: chosenRate
        },
        () => {
          let date = [];
          let noData = [];
          let mortalZeroNJData = [];
          var mortalZeroNJ = [];
          let mortalZeroNJDataAge = [];
          let mortalZeroNJAge = [];
          let mortalFiftyNJDataAge = [];
          let mortalFiftyNJAge = [];
          let mortalSixtyFiveNJDataAge = [];
          let mortalSixtyFiveNJAge = [];
          let mortalSeventyFiveNJDataAge = [];
          let mortalSeventyFiveNJAge = [];
          let mortalEightyFiveNJDataAge = [];
          let mortalEightyFiveNJAge = [];
          let mortalNinetyFiveNJAge = [];
          let mortalNinetyFiveNJDataAge = [];
          let mortalOneTenNJAge = [];
          let mortalOneTenNJDataAge = [];
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
          let mZeroNJDataAge = [];
          let mFiftyNJDataAge = [];
          let mSixtyFiveNJDataAge = [];
          let mSeventyFiveNJDataAge = [];
          let mEightyFiveNJDataAge = [];
          let mNinetyFiveNJDataAge = [];
          let mOneTenNJDataAge = [];
          let mFiftyNJData = [];
          let mSixtyFiveNJData = [];
          let mSeventyFiveNJData = [];
          let mEightyFiveNJData = [];
          let mNinetyFiveNJData = [];
          let mOneTenNJData = [];
          const frequency = (chosenfrequency, a, range) => {
            var frequency = null;
            if (!chosenfrequency && range) {
              if (a === 0) {
                frequency = ["0-4"];
              } else if (a === 1) {
                frequency = ["5-49"];
              } else if (a === 2) {
                frequency = ["50-64"];
              } else if (a === 3) {
                frequency = ["65-74"];
              } else if (a === 4) {
                frequency = ["75-84"];
              } else if (a === 5) {
                frequency = ["85-94"];
              } else if (a === 6) {
                frequency = ["95"];
              }
            } else if (chosenfrequency || range) {
              //high
              if (a === 0) {
                frequency = ["65-69"];
              } else if (a === 1) {
                frequency = ["70-74"];
              } else if (a === 2) {
                frequency = ["75-79"];
              } else if (a === 3) {
                frequency = ["80-84"];
              } else if (a === 4) {
                frequency = ["85-89"];
              } else if (a === 5) {
                frequency = ["90-94"];
              } else if (a === 6) {
                frequency = ["95"];
              }
            } else {
              //cohort
              if (a === 0) {
                frequency = ["0-4"];
              } else if (a === 1) {
                frequency = [
                  "5-9",
                  "10-14",
                  "15-19",
                  "20-24",
                  "25-29",
                  "30-34",
                  "35-39",
                  "40-44",
                  "45-49"
                ];
              } else if (a === 2) {
                frequency = ["50-54", "55-59", "60-64"];
              } else if (a === 3) {
                frequency = ["65-69", "70-74"];
              } else if (a === 4) {
                frequency = ["75-79", "80-84"];
              } else if (a === 5) {
                frequency = ["85-89", "90-94"];
              } else if (a === 6) {
                frequency = ["95"];
              }
            }
            return frequency;
          };
          Object.keys(worldwide).forEach((yearSet, i) => {
            const year = yearSet; //Number(yearSet.split("-")[1]);
            noData.push([year, 0]);
            date.push(year);
            /*const thisdecade = worldwidepopdata.find(
          (x) => x.year - year < 5 && x.year - year > -5
        );*/
            const numer = (d) => Number(String(d).replaceAll(",", ""));
            const val = (d, p = 0, rate = 1) => (numer(d) * p) / rate;
            // Math.round((numer(d) / 100000) * numer(p) );
            Object.values(worldwide)[i].forEach((x) => {
              const popp = numer(
                worldwidepopdata[year].find((y) => y.age === x.age).pop
              );
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJDataAge.push([year, chosenRate ? popp : popp]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJDataAge.push([year, chosenRate ? popp / 9 : popp]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJDataAge.push([year, chosenRate ? popp / 3 : popp]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJDataAge.push([
                  year,
                  chosenRate ? popp / 2 : popp
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJDataAge.push([year, chosenRate ? popp / 2 : popp]);
              } else if (frequency(chosenfrequency, 5).includes(x.age)) {
                mNinetyFiveNJDataAge.push([year, chosenRate ? popp / 2 : popp]);
              } else if (frequency(chosenfrequency, 6).includes(x.age)) {
                mOneTenNJDataAge.push([year, chosenRate ? popp / 2 : popp]);
              }
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJData.push([
                  year,
                  chosenRate ? numer(x.deaths) : numer(x.deaths)
                ]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJData.push([
                  year,
                  chosenRate ? numer(x.deaths) / 10 : numer(x.deaths)
                ]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJData.push([
                  year,
                  chosenRate ? numer(x.deaths) / 3 : numer(x.deaths)
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJData.push([
                  year,
                  chosenRate ? numer(x.deaths) / 2 : numer(x.deaths)
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJData.push([
                  year,
                  chosenRate ? numer(x.deaths) / 2 : numer(x.deaths)
                ]);
              } else if (frequency(chosenfrequency, 5).includes(x.age)) {
                mNinetyFiveNJData.push([
                  year,
                  chosenRate ? numer(x.deaths) / 2 : numer(x.deaths)
                ]);
              } else if (frequency(chosenfrequency, 6).includes(x.age)) {
                mOneTenNJData.push([
                  year,
                  chosenRate ? numer(x.deaths) / 4 : numer(x.deaths)
                ]);
              }
            });
          });
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
            let totmOT = 0;
            mOneTenNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmOT = totmOT + obj[1];
            });
            mortalOneTenNJAge.push(totmOT);
            mortalOneTenNJDataAge.push([x, totmOT]);
            let totmNFA = 0;
            mNinetyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmNFA = totmNFA + obj[1];
            });
            mortalNinetyFiveNJAge.push(totmNFA);
            mortalNinetyFiveNJDataAge.push([x, totmNFA]);
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
            mortalZeroNJDataAge.push([x, totmZA]);
            let totmZ = 0;
            mZeroNJData.forEach((obj) => {
              if (obj[0] === x) totmZ = totmZ + obj[1];
            });
            mortalZeroNJ.push(totmZ);
            mortalZeroNJData.push([x, totmZ]);
          });

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
          var highDeaths = Math.max(...all);
          var cappop = Math.max(
            ...mortalZeroNJAge,
            ...mortalFiftyNJAge,
            ...mortalSixtyFiveNJAge,
            ...mortalSeventyFiveNJAge,
            ...mortalEightyFiveNJAge,
            ...mortalNinetyFiveNJAge,
            ...mortalOneTenNJAge
          );
          noData.sort((a, b) => a[0] - b[0]);
          mortalZeroNJData.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalNinetyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalOneTenNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
          this.setState({
            date,
            cappop,
            mortalZeroNJData,
            mortalZeroNJDataAge,
            mortalFiftyNJDataAge,
            mortalSixtyFiveNJDataAge,
            mortalSeventyFiveNJDataAge,
            mortalEightyFiveNJDataAge,
            mortalNinetyFiveNJDataAge,
            mortalOneTenNJDataAge,
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
  componentDidMount = () => {
    this.setState({
      chosenRate: true,
      chosenfrequency: true
    });
  };
  render() {
    const yaxis = this.state.yaxis ? this.state.yAxis : this.state.cappop;
    const { chosenRate, lowDate } = this.state;
    const coefficience = (this.props.lastWidth - 40) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      0
    ]);
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
    const mortalZeroNJDataAge = this.state.mortalZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
    ]);
    const mortalFiftyNJDataAge = this.state.mortalFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalSixtyFiveNJDataAge = this.state.mortalSixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalSeventyFiveNJDataAge = this.state.mortalSeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalEightyFiveNJDataAge = this.state.mortalEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalNinetyFiveNJDataAge = this.state.mortalNinetyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
    const mortalOneTenNJDataAge = this.state.mortalOneTenNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          coefficience,
        ((y - this.state.lowDeaths) / this.state.cappop) * lineheight
      ]
    );
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
    const ite = { border: "1px grey dashed", width: "max-content" };
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
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
    return (
      <div
        style={{
          fontSize:"12px",
          marginTop: "40px",
          width: "100%",
          position: "relative",
          backgroundColor: "rgb(190,150,180)"
        }}
      >
        <div style={labelstyle}>
          <span
            style={{
              color: "white"
            }}
          >
            <a
              style={{
                fontSize: "12px",
                color: "white",
                wordWrap: "break-word"
              }}
              href="https://population.un.org/wpp/DataQuery/"
            >
              UN Mort+Pop, age (5yr^2)
            </a>
            <br />
            {shortNumber(Math.round(this.state.highDeaths * 1000 /*/5 */))}
          </span>
          <div
            style={buttonStyle}
            onClick={() =>
              this.setState(
                this.state.chosenRate && this.state.chosenfrequency
                  ? { chosenRate: false, chosenfrequency: false }
                  : !this.state.chosenfrequency
                  ? { chosenfrequency: true }
                  : { chosenRate: true }
              )
            }
          >
            {chosenRate ? "cohort (5y)" : `mortality (yearly) `}
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,.3)",
              padding: "4px 8px",
              position: "absolute",
              right: "0px"
            }}
          >
            {lowDate}&nbsp;
            {this.state.highDate}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "50px",
            overflowX: "auto",
            overflowY: "hidden",
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute"
            }}
          >
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "white"
                }}
              />
              {frequency(this.state.chosenfrequency, 0, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "purple"
                }}
              />
              {frequency(this.state.chosenfrequency, 1, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "blue"
                }}
              />
              {frequency(this.state.chosenfrequency, 2, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "green"
                }}
              />
              {frequency(this.state.chosenfrequency, 3, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "orange"
                }}
              />
              {frequency(this.state.chosenfrequency, 4, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "red"
                }}
              />
              {frequency(this.state.chosenfrequency, 5, true)}&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.setVax({ worldwide: false });
            //window.href = "https://humanharvest.info/polio";
          }}
          style={{
            zIndex: "1",
            marginLeft: "10px",
            position: "absolute"
          }}
        >
          all-cause
        </button>
        <br />
        <div
          style={{
            position: "relative",
            height: lineheight
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
            {mortalZeroNJData.map(
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
            {mortalZeroNJDataAge.map(
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
            )}
            {mortalNinetyFiveNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="red"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {mortalOneTenNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="black"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {mortalFiftyNJData.map(
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
            display: "grid",
            width: "100%",
            gridTemplateColumns: "repeat(auto-fit,  minmax(10px, max-content))"
          }}
        >
          {this.state.date.map((x) => (
            <div
              key={x}
              style={{
                transform: "rotate(40deg)",
                width: "max-content",
                wordBreak: "none",
                margin: "0px 10px"
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

/*<button
  style={buttonStyle}
  onClick={() => {
    this.setState({
      yaxis: !this.state.yaxis
    });
  }}
>
  {!this.state.yaxis
    ? "pop"
    : this.state.chosenfrequency && !chosenRate
    ? "high"
    : "cohort"}
</button>*/
