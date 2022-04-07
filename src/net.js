import React from "react";
import { financialbalance } from "./netdata2";
import {
  creditsofdebtoutstanding,
  householdbalance,
  levelRatio,
  loansofdebtoutstanding,
  newdebt
} from "./netdata";
import { accounts, balance, checking, currency } from "./balance";
const gdps = {
  "1952-03-01": {
    corporateOrSelf: 443100,
    households: 85700,
    corporate: 105429,
    government: 226303,
    municipalities: 25668,
    gdp: 359820
  },
  "1952-06-01": {
    corporateOrSelf: 452623,
    households: 89022,
    corporate: 107712,
    government: 227523,
    municipalities: 28366,
    gdp: 361030
  },
  "1952-09-01": {
    corporateOrSelf: 460694,
    households: 91882,
    corporate: 110118,
    government: 229137,
    municipalities: 29557,
    gdp: 367701
  },
  "1952-12-01": {
    corporateOrSelf: 468756,
    households: 95595,
    corporate: 112537,
    government: 229829,
    municipalities: 30795,
    gdp: 380812
  },
  "1953-03-01": {
    corporateOrSelf: 476996,
    households: 99754,
    corporate: 114297,
    government: 230931,
    municipalities: 32014,
    gdp: 387980
  },
  "1953-06-01": {
    corporateOrSelf: 484932,
    households: 103184,
    corporate: 116105,
    government: 232382,
    municipalities: 33261,
    gdp: 391749
  },
  "1953-09-01": {
    corporateOrSelf: 494955,
    households: 105582,
    corporate: 117753,
    government: 237102,
    municipalities: 34518,
    gdp: 391171
  },
  "1953-12-01": {
    corporateOrSelf: 498932,
    households: 108158,
    corporate: 117609,
    government: 237379,
    municipalities: 35786,
    gdp: 385970
  },
  "1954-03-01": {
    corporateOrSelf: 503551,
    households: 109969,
    corporate: 119137,
    government: 237381,
    municipalities: 37064,
    gdp: 385345
  },
  "1954-06-01": {
    corporateOrSelf: 509442,
    households: 112672,
    corporate: 120313,
    government: 238068,
    municipalities: 38389,
    gdp: 386121
  },
  "1954-09-01": {
    corporateOrSelf: 516098,
    households: 115975,
    corporate: 122482,
    government: 237933,
    municipalities: 39708,
    gdp: 390996
  },
  "1954-12-01": {
    corporateOrSelf: 525508,
    households: 120453,
    corporate: 123758,
    government: 240195,
    municipalities: 41102,
    gdp: 399734
  },
  "1955-03-01": {
    corporateOrSelf: 533301,
    households: 125737,
    corporate: 125485,
    government: 239601,
    municipalities: 42478,
    gdp: 413073
  },
  "1955-06-01": {
    corporateOrSelf: 543884,
    households: 131664,
    corporate: 128878,
    government: 239587,
    municipalities: 43755,
    gdp: 421532
  },
  "1955-09-01": {
    corporateOrSelf: 553187,
    households: 136861,
    corporate: 131806,
    government: 239535,
    municipalities: 44985,
    gdp: 430221
  },
  "1955-12-01": {
    corporateOrSelf: 563842,
    households: 141563,
    corporate: 136054,
    government: 240077,
    municipalities: 46148,
    gdp: 437092
  },
  "1956-03-01": {
    corporateOrSelf: 571134,
    households: 145633,
    corporate: 139223,
    government: 239012,
    municipalities: 47266,
    gdp: 439746
  },
  "1956-06-01": {
    corporateOrSelf: 576192,
    households: 149514,
    corporate: 143001,
    government: 235303,
    municipalities: 48373,
    gdp: 446010
  },
  "1956-09-01": {
    corporateOrSelf: 582823,
    households: 152607,
    corporate: 146132,
    government: 234687,
    municipalities: 49397,
    gdp: 451191
  },
  "1956-12-01": {
    corporateOrSelf: 590711,
    households: 156401,
    corporate: 148890,
    government: 235039,
    municipalities: 50381,
    gdp: 460463
  },
  "1957-03-01": {
    corporateOrSelf: 599622,
    households: 159999,
    corporate: 151976,
    government: 236274,
    municipalities: 51373,
    gdp: 469779
  },
  "1957-06-01": {
    corporateOrSelf: 603916,
    households: 163622,
    corporate: 155694,
    government: 232121,
    municipalities: 52480,
    gdp: 472025
  },
  "1957-09-01": {
    corporateOrSelf: 612909,
    households: 166412,
    corporate: 158445,
    government: 234373,
    municipalities: 53679,
    gdp: 479490
  },
  "1957-12-01": {
    corporateOrSelf: 617864,
    households: 168575,
    corporate: 161010,
    government: 233240,
    municipalities: 55039,
    gdp: 474864
  },
  "1958-03-01": {
    corporateOrSelf: 625194,
    households: 170189,
    corporate: 163417,
    government: 235182,
    municipalities: 56406,
    gdp: 467540
  },
  "1958-06-01": {
    corporateOrSelf: 635110,
    households: 172310,
    corporate: 165493,
    government: 239506,
    municipalities: 57800,
    gdp: 471978
  },
  "1958-09-01": {
    corporateOrSelf: 641445,
    households: 175488,
    corporate: 168230,
    government: 238587,
    municipalities: 59140,
    gdp: 485841
  },
  "1958-12-01": {
    corporateOrSelf: 656559,
    households: 180371,
    corporate: 172145,
    government: 243374,
    municipalities: 60669,
    gdp: 499555
  },
  "1959-03-01": {
    corporateOrSelf: 667735,
    households: 185161,
    corporate: 174820,
    government: 245641,
    municipalities: 62113,
    gdp: 510330
  },
  "1959-06-01": {
    corporateOrSelf: 682180,
    households: 190688,
    corporate: 179937,
    government: 247894,
    municipalities: 63661,
    gdp: 522653
  },
  "1959-09-01": {
    corporateOrSelf: 695695,
    households: 196497,
    corporate: 183278,
    government: 250546,
    municipalities: 65374,
    gdp: 525034
  },
  "1959-12-01": {
    corporateOrSelf: 707085,
    households: 202315,
    corporate: 186894,
    government: 251180,
    municipalities: 66696,
    gdp: 528600
  },
  "1960-03-01": {
    corporateOrSelf: 714738,
    households: 205948,
    corporate: 190620,
    government: 249998,
    municipalities: 68172,
    gdp: 542648
  },
  "1960-06-01": {
    corporateOrSelf: 724973,
    households: 211109,
    corporate: 194599,
    government: 249677,
    municipalities: 69588,
    gdp: 541080
  },
  "1960-09-01": {
    corporateOrSelf: 733297,
    households: 215388,
    corporate: 197125,
    government: 249804,
    municipalities: 70980,
    gdp: 545604
  },
  "1960-12-01": {
    corporateOrSelf: 742760,
    households: 219861,
    corporate: 200616,
    government: 250072,
    municipalities: 72211,
    gdp: 540197
  },
  "1961-03-01": {
    corporateOrSelf: 750351,
    households: 223428,
    corporate: 203006,
    government: 250311,
    municipalities: 73606,
    gdp: 545018
  },
  "1961-06-01": {
    corporateOrSelf: 761226,
    households: 227806,
    corporate: 206357,
    government: 252356,
    municipalities: 74707,
    gdp: 555545
  },
  "1961-09-01": {
    corporateOrSelf: 774513,
    households: 231798,
    corporate: 209874,
    government: 256548,
    municipalities: 76293,
    gdp: 567664
  },
  "1961-12-01": {
    corporateOrSelf: 788596,
    households: 237901,
    corporate: 214704,
    government: 258176,
    municipalities: 77815,
    gdp: 580612
  },
  "1962-03-01": {
    corporateOrSelf: 800217,
    households: 241983,
    corporate: 217937,
    government: 260736,
    municipalities: 79561,
    gdp: 594013
  },
  "1962-06-01": {
    corporateOrSelf: 813930,
    households: 247272,
    corporate: 223073,
    government: 262629,
    municipalities: 80955,
    gdp: 600366
  },
  "1962-09-01": {
    corporateOrSelf: 825118,
    households: 253282,
    corporate: 227384,
    government: 262285,
    municipalities: 82167,
    gdp: 609027
  },
  "1962-12-01": {
    corporateOrSelf: 842334,
    households: 259752,
    corporate: 232768,
    government: 266044,
    municipalities: 83770,
    gdp: 612280
  },
  "1963-03-01": {
    corporateOrSelf: 855287,
    households: 265533,
    corporate: 236659,
    government: 268037,
    municipalities: 85058,
    gdp: 621672
  },
  "1963-06-01": {
    corporateOrSelf: 871504,
    households: 273048,
    corporate: 241366,
    government: 270284,
    municipalities: 86806,
    gdp: 629752
  },
  "1963-09-01": {
    corporateOrSelf: 883320,
    households: 280359,
    corporate: 245710,
    government: 269330,
    municipalities: 87921,
    gdp: 644444
  },
  "1963-12-01": {
    corporateOrSelf: 900618,
    households: 288211,
    corporate: 252156,
    government: 271008,
    municipalities: 89243,
    gdp: 653938
  },
  "1964-03-01": {
    corporateOrSelf: 914262,
    households: 295162,
    corporate: 256242,
    government: 272343,
    municipalities: 90515,
    gdp: 669822
  },
  "1964-06-01": {
    corporateOrSelf: 930822,
    households: 302632,
    corporate: 262031,
    government: 273916,
    municipalities: 92243,
    gdp: 678674
  },
  "1964-09-01": {
    corporateOrSelf: 947190,
    households: 309331,
    corporate: 267787,
    government: 276082,
    municipalities: 93990,
    gdp: 692031
  },
  "1964-12-01": {
    corporateOrSelf: 965255,
    households: 317130,
    corporate: 274192,
    government: 278309,
    municipalities: 95624,
    gdp: 697319
  },
  "1965-03-01": {
    corporateOrSelf: 981834,
    households: 323887,
    corporate: 281383,
    government: 279189,
    municipalities: 97375,
    gdp: 717790
  },
  "1965-06-01": {
    corporateOrSelf: 998872,
    households: 331138,
    corporate: 288848,
    government: 279373,
    municipalities: 99513,
    gdp: 730191
  },
  "1965-09-01": {
    corporateOrSelf: 1013004,
    households: 337893,
    corporate: 296181,
    government: 277467,
    municipalities: 101463,
    gdp: 749323
  },
  "1965-12-01": {
    corporateOrSelf: 1034076,
    households: 345863,
    corporate: 303787,
    government: 281252,
    municipalities: 103174,
    gdp: 771857
  },
  "1966-03-01": {
    corporateOrSelf: 1053481,
    households: 352486,
    corporate: 313349,
    government: 282763,
    municipalities: 104883,
    gdp: 795734
  },
  "1966-06-01": {
    corporateOrSelf: 1073034,
    households: 359682,
    corporate: 323869,
    government: 282469,
    municipalities: 107014,
    gdp: 804981
  },
  "1966-09-01": {
    corporateOrSelf: 1086123,
    households: 363413,
    corporate: 331871,
    government: 282300,
    municipalities: 108539,
    gdp: 819638
  },
  "1966-12-01": {
    corporateOrSelf: 1102733,
    households: 368393,
    corporate: 338202,
    government: 286101,
    municipalities: 110037,
    gdp: 833302
  },
  "1967-03-01": {
    corporateOrSelf: 1119242,
    households: 371781,
    corporate: 346563,
    government: 289406,
    municipalities: 111492,
    gdp: 844170
  },
  "1967-06-01": {
    corporateOrSelf: 1131870,
    households: 376524,
    corporate: 355873,
    government: 285886,
    municipalities: 113588,
    gdp: 848983
  },
  "1967-09-01": {
    corporateOrSelf: 1154358,
    households: 382310,
    corporate: 364078,
    government: 292284,
    municipalities: 115686,
    gdp: 865233
  },
  "1967-12-01": {
    corporateOrSelf: 1190912,
    households: 402322,
    corporate: 370856,
    government: 300362,
    municipalities: 117372,
    gdp: 881439
  },
  "1968-03-01": {
    corporateOrSelf: 1204602,
    households: 397674,
    corporate: 380822,
    government: 306990,
    municipalities: 119116,
    gdp: 909387
  },
  "1968-06-01": {
    corporateOrSelf: 1227913,
    households: 407896,
    corporate: 390904,
    government: 308055,
    municipalities: 121058,
    gdp: 934344
  },
  "1968-09-01": {
    corporateOrSelf: 1252814,
    households: 415114,
    corporate: 401071,
    government: 313637,
    municipalities: 122992,
    gdp: 950825
  },
  "1968-12-01": {
    corporateOrSelf: 1279692,
    households: 426692,
    corporate: 412656,
    government: 314219,
    municipalities: 126125,
    gdp: 968030
  },
  "1969-03-01": {
    corporateOrSelf: 1298682,
    households: 429581,
    corporate: 423624,
    government: 315342,
    municipalities: 130135,
    gdp: 993337
  },
  "1969-06-01": {
    corporateOrSelf: 1316883,
    households: 438271,
    corporate: 437807,
    government: 307375,
    municipalities: 133430,
    gdp: 1009020
  },
  "1969-09-01": {
    corporateOrSelf: 1339965,
    households: 443623,
    corporate: 450239,
    government: 309983,
    municipalities: 136120,
    gdp: 1029956
  },
  "1969-12-01": {
    corporateOrSelf: 1364896,
    households: 453272,
    corporate: 460784,
    government: 312583,
    municipalities: 138257,
    gdp: 1038147
  },
  "1970-03-01": {
    corporateOrSelf: 1379872,
    households: 451262,
    corporate: 473750,
    government: 314500,
    municipalities: 140360,
    gdp: 1051200
  },
  "1970-06-01": {
    corporateOrSelf: 1403340,
    households: 453908,
    corporate: 488703,
    government: 317154,
    municipalities: 143574,
    gdp: 1067375
  },
  "1970-09-01": {
    corporateOrSelf: 1430022,
    households: 459355,
    corporate: 501097,
    government: 323589,
    municipalities: 145981,
    gdp: 1086059
  },
  "1970-12-01": {
    corporateOrSelf: 1456448,
    households: 467163,
    corporate: 511941,
    government: 327027,
    municipalities: 150317,
    gdp: 1088608
  },
  "1971-03-01": {
    corporateOrSelf: 1482283,
    households: 475671,
    corporate: 522999,
    government: 328923,
    municipalities: 154690,
    gdp: 1135156
  },
  "1971-06-01": {
    corporateOrSelf: 1521216,
    households: 485236,
    corporate: 537847,
    government: 339263,
    municipalities: 158870,
    gdp: 1156271
  },
  "1971-09-01": {
    corporateOrSelf: 1558007,
    households: 496024,
    corporate: 551889,
    government: 347468,
    municipalities: 162626,
    gdp: 1177675
  },
  "1971-12-01": {
    corporateOrSelf: 1596200,
    households: 511310,
    corporate: 563398,
    government: 354745,
    municipalities: 166747,
    gdp: 1190297
  },
  "1972-03-01": {
    corporateOrSelf: 1631392,
    households: 524678,
    corporate: 579276,
    government: 356270,
    municipalities: 171169,
    gdp: 1230609
  },
  "1972-06-01": {
    corporateOrSelf: 1669363,
    households: 540105,
    corporate: 596705,
    government: 358194,
    municipalities: 174359,
    gdp: 1266369
  },
  "1972-09-01": {
    corporateOrSelf: 1708016,
    households: 553150,
    corporate: 613216,
    government: 364207,
    municipalities: 177442,
    gdp: 1290566
  },
  "1972-12-01": {
    corporateOrSelf: 1759092,
    households: 571267,
    corporate: 634365,
    government: 372750,
    municipalities: 180710,
    gdp: 1328904
  },
  "1973-03-01": {
    corporateOrSelf: 1812384,
    households: 590524,
    corporate: 659441,
    government: 378186,
    municipalities: 184233,
    gdp: 1377490
  },
  "1973-06-01": {
    corporateOrSelf: 1856626,
    households: 604561,
    corporate: 685410,
    government: 379668,
    municipalities: 186987,
    gdp: 1413887
  },
  "1973-09-01": {
    corporateOrSelf: 1900558,
    households: 620766,
    corporate: 710306,
    government: 379074,
    municipalities: 190412,
    gdp: 1433838
  },
  "1973-12-01": {
    corporateOrSelf: 1940863,
    households: 636677,
    corporate: 727578,
    government: 381829,
    municipalities: 194779,
    gdp: 1476289
  },
  "1974-03-01": {
    corporateOrSelf: 1981511,
    households: 649082,
    corporate: 751318,
    government: 381929,
    municipalities: 199182,
    gdp: 1491209
  },
  "1974-06-01": {
    corporateOrSelf: 2031941,
    households: 664222,
    corporate: 779452,
    government: 385635,
    municipalities: 202632,
    gdp: 1530056
  },
  "1974-09-01": {
    corporateOrSelf: 2077460,
    households: 678869,
    corporate: 802156,
    government: 390234,
    municipalities: 206201,
    gdp: 1560026
  },
  "1974-12-01": {
    corporateOrSelf: 2116457,
    households: 691472,
    corporate: 820315,
    government: 396457,
    municipalities: 208213,
    gdp: 1599679
  },
  "1975-03-01": {
    corporateOrSelf: 2155295,
    households: 700265,
    corporate: 831801,
    government: 412756,
    municipalities: 210473,
    gdp: 1616116
  },
  "1975-06-01": {
    corporateOrSelf: 2203208,
    households: 708396,
    corporate: 841543,
    government: 440620,
    municipalities: 212649,
    gdp: 1651853
  },
  "1975-09-01": {
    corporateOrSelf: 2254303,
    households: 724107,
    corporate: 851525,
    government: 464591,
    municipalities: 214080,
    gdp: 1709820
  },
  "1975-12-01": {
    corporateOrSelf: 2313028,
    households: 747477,
    corporate: 860266,
    government: 485926,
    municipalities: 219359,
    gdp: 1761831
  },
  "1976-03-01": {
    corporateOrSelf: 2372520,
    households: 767648,
    corporate: 873896,
    government: 505967,
    municipalities: 225009,
    gdp: 1820487
  },
  "1976-06-01": {
    corporateOrSelf: 2439187,
    households: 788211,
    corporate: 891335,
    government: 528227,
    municipalities: 231414,
    gdp: 1852332
  },
  "1976-09-01": {
    corporateOrSelf: 2501060,
    households: 808296,
    corporate: 910679,
    government: 546903,
    municipalities: 235181,
    gdp: 1886558
  },
  "1976-12-01": {
    corporateOrSelf: 2565231,
    households: 836261,
    corporate: 931428,
    government: 559712,
    municipalities: 237830,
    gdp: 1934273
  },
  "1977-03-01": {
    corporateOrSelf: 2637942,
    households: 864819,
    corporate: 960388,
    government: 572404,
    municipalities: 240331,
    gdp: 1988648
  },
  "1977-06-01": {
    corporateOrSelf: 2713028,
    households: 897932,
    corporate: 988022,
    government: 580529,
    municipalities: 246545,
    gdp: 2055909
  },
  "1977-09-01": {
    corporateOrSelf: 2805904,
    households: 931229,
    corporate: 1015394,
    government: 607628,
    municipalities: 251653,
    gdp: 2118473
  },
  "1977-12-01": {
    corporateOrSelf: 2895413,
    households: 966509,
    corporate: 1050133,
    government: 622606,
    municipalities: 256165,
    gdp: 2164270
  },
  "1978-03-01": {
    corporateOrSelf: 2987237,
    households: 1002813,
    corporate: 1081920,
    government: 637105,
    municipalities: 265399,
    gdp: 2202760
  },
  "1978-06-01": {
    corporateOrSelf: 3090140,
    households: 1046982,
    corporate: 1117332,
    government: 650943,
    municipalities: 274882,
    gdp: 2331633
  },
  "1978-09-01": {
    corporateOrSelf: 3194161,
    households: 1088868,
    corporate: 1148272,
    government: 672723,
    municipalities: 284298,
    gdp: 2395053
  },
  "1978-12-01": {
    corporateOrSelf: 3290005,
    households: 1128024,
    corporate: 1184262,
    government: 682118,
    municipalities: 295601,
    gdp: 2476949
  },
  "1979-03-01": {
    corporateOrSelf: 3379772,
    households: 1170230,
    corporate: 1221343,
    government: 685071,
    municipalities: 303128,
    gdp: 2526610
  },
  "1979-06-01": {
    corporateOrSelf: 3481272,
    households: 1211382,
    corporate: 1266458,
    government: 693719,
    municipalities: 309714,
    gdp: 2591247
  },
  "1979-09-01": {
    corporateOrSelf: 3595875,
    households: 1255582,
    corporate: 1308984,
    government: 714755,
    municipalities: 316554,
    gdp: 2667565
  },
  "1979-12-01": {
    corporateOrSelf: 3688823,
    households: 1296909,
    corporate: 1343789,
    government: 725909,
    municipalities: 322216,
    gdp: 2723883
  },
  "1980-03-01": {
    corporateOrSelf: 3789548,
    households: 1338621,
    corporate: 1383614,
    government: 739509,
    municipalities: 327804,
    gdp: 2789842
  },
  "1980-06-01": {
    corporateOrSelf: 3856662,
    households: 1352044,
    corporate: 1404259,
    government: 767360,
    municipalities: 333000,
    gdp: 2797352
  },
  "1980-09-01": {
    corporateOrSelf: 3942863,
    households: 1381267,
    corporate: 1431479,
    government: 791355,
    municipalities: 338762,
    gdp: 2856483
  },
  "1980-12-01": {
    corporateOrSelf: 4051493,
    households: 1420202,
    corporate: 1474673,
    government: 812184,
    municipalities: 344434,
    gdp: 2985557
  },
  "1981-03-01": {
    corporateOrSelf: 4145038,
    households: 1442353,
    corporate: 1509028,
    government: 842366,
    municipalities: 351291,
    gdp: 3124206
  },
  "1981-06-01": {
    corporateOrSelf: 4257776,
    households: 1474888,
    corporate: 1566302,
    government: 860707,
    municipalities: 355880,
    gdp: 3162532
  },
  "1981-09-01": {
    corporateOrSelf: 4357388,
    households: 1498895,
    corporate: 1617642,
    government: 876789,
    municipalities: 364062,
    gdp: 3260609
  },
  "1981-12-01": {
    corporateOrSelf: 4464736,
    households: 1526567,
    corporate: 1658457,
    government: 907658,
    municipalities: 372054,
    gdp: 3280818
  },
  "1982-03-01": {
    corporateOrSelf: 4569836,
    households: 1545023,
    corporate: 1700124,
    government: 941829,
    municipalities: 382860,
    gdp: 3274302
  },
  "1982-06-01": {
    corporateOrSelf: 4671500,
    households: 1564484,
    corporate: 1746192,
    government: 967057,
    municipalities: 393767,
    gdp: 3331972
  },
  "1982-09-01": {
    corporateOrSelf: 4784762,
    households: 1567309,
    corporate: 1789873,
    government: 1024123,
    municipalities: 403457,
    gdp: 3366322
  },
  "1982-12-01": {
    corporateOrSelf: 4900299,
    households: 1597908,
    corporate: 1807588,
    government: 1081029,
    municipalities: 413774,
    gdp: 3402561
  },
  "1983-03-01": {
    corporateOrSelf: 5036932,
    households: 1608060,
    corporate: 1858041,
    government: 1146269,
    municipalities: 424562,
    gdp: 3473413
  },
  "1983-06-01": {
    corporateOrSelf: 5196415,
    households: 1652404,
    corporate: 1896473,
    government: 1207253,
    municipalities: 440285,
    gdp: 3578848
  },
  "1983-09-01": {
    corporateOrSelf: 5355199,
    households: 1700875,
    corporate: 1945750,
    government: 1258653,
    municipalities: 449921,
    gdp: 3689179
  },
  "1983-12-01": {
    corporateOrSelf: 5497720,
    households: 1759608,
    corporate: 1996223,
    government: 1280780,
    municipalities: 461109,
    gdp: 3794706
  },
  "1984-03-01": {
    corporateOrSelf: 5701538,
    households: 1813182,
    corporate: 2071525,
    government: 1344109,
    municipalities: 472722,
    gdp: 3908054
  },
  "1984-06-01": {
    corporateOrSelf: 5905233,
    households: 1870264,
    corporate: 2158678,
    government: 1389644,
    municipalities: 486647,
    gdp: 4009601
  },
  "1984-09-01": {
    corporateOrSelf: 6106461,
    households: 1915487,
    corporate: 2235208,
    government: 1450932,
    municipalities: 504834,
    gdp: 4084250
  },
  "1984-12-01": {
    corporateOrSelf: 6308385,
    households: 1977678,
    corporate: 2320616,
    government: 1496457,
    municipalities: 513634,
    gdp: 4148551
  },
  "1985-03-01": {
    corporateOrSelf: 6563269,
    households: 2078614,
    corporate: 2377928,
    government: 1567286,
    municipalities: 539440,
    gdp: 4230168
  },
  "1985-06-01": {
    corporateOrSelf: 6782724,
    households: 2142819,
    corporate: 2443881,
    government: 1628224,
    municipalities: 567800,
    gdp: 4294887
  },
  "1985-09-01": {
    corporateOrSelf: 7002345,
    households: 2223628,
    corporate: 2500359,
    government: 1688195,
    municipalities: 590163,
    gdp: 4386773
  },
  "1985-12-01": {
    corporateOrSelf: 7341719,
    households: 2329784,
    corporate: 2571990,
    government: 1762014,
    municipalities: 677931,
    gdp: 4444094
  },
  "1986-03-01": {
    corporateOrSelf: 7513073,
    households: 2383881,
    corporate: 2636246,
    government: 1811367,
    municipalities: 681579,
    gdp: 4507894
  },
  "1986-06-01": {
    corporateOrSelf: 7747006,
    households: 2436340,
    corporate: 2709107,
    government: 1885675,
    municipalities: 715883,
    gdp: 4545340
  },
  "1986-09-01": {
    corporateOrSelf: 7977303,
    households: 2514174,
    corporate: 2785018,
    government: 1949671,
    municipalities: 728439,
    gdp: 4607669
  },
  "1986-12-01": {
    corporateOrSelf: 8216651,
    households: 2592292,
    corporate: 2864682,
    government: 2007547,
    municipalities: 752130,
    gdp: 4657627
  },
  "1987-03-01": {
    corporateOrSelf: 8383255,
    households: 2626617,
    corporate: 2927660,
    government: 2044222,
    municipalities: 784756,
    gdp: 4722156
  },
  "1987-06-01": {
    corporateOrSelf: 8588939,
    households: 2706834,
    corporate: 2979089,
    government: 2101468,
    municipalities: 801548,
    gdp: 4806160
  },
  "1987-09-01": {
    corporateOrSelf: 8772700,
    households: 2774558,
    corporate: 3044101,
    government: 2132373,
    municipalities: 821668,
    gdp: 4884555
  },
  "1987-12-01": {
    corporateOrSelf: 8958187,
    households: 2817489,
    corporate: 3116408,
    government: 2181714,
    municipalities: 842576,
    gdp: 5007994
  },
  "1988-03-01": {
    corporateOrSelf: 9164363,
    households: 2893489,
    corporate: 3186650,
    government: 2231681,
    municipalities: 852543,
    gdp: 5073372
  },
  "1988-06-01": {
    corporateOrSelf: 9372886,
    households: 2966415,
    corporate: 3264239,
    government: 2277616,
    municipalities: 864616,
    gdp: 5190036
  },
  "1988-09-01": {
    corporateOrSelf: 9567891,
    households: 3036771,
    corporate: 3329846,
    government: 2324952,
    municipalities: 876322,
    gdp: 5282835
  },
  "1988-12-01": {
    corporateOrSelf: 9777621,
    households: 3100556,
    corporate: 3414461,
    government: 2369615,
    municipalities: 892989,
    gdp: 5399509
  },
  "1989-03-01": {
    corporateOrSelf: 9964652,
    households: 3165488,
    corporate: 3481178,
    government: 2417116,
    municipalities: 900870,
    gdp: 5511253
  },
  "1989-06-01": {
    corporateOrSelf: 10156836,
    households: 3240216,
    corporate: 3552814,
    government: 2454316,
    municipalities: 909489,
    gdp: 5612463
  },
  "1989-09-01": {
    corporateOrSelf: 10326348,
    households: 3312156,
    corporate: 3592703,
    government: 2500028,
    municipalities: 921461,
    gdp: 5695365
  },
  "1989-12-01": {
    corporateOrSelf: 10527938,
    households: 3383950,
    corporate: 3653103,
    government: 2550522,
    municipalities: 940363,
    gdp: 5747237
  },
  "1990-03-01": {
    corporateOrSelf: 10761855,
    households: 3477808,
    corporate: 3706622,
    government: 2618661,
    municipalities: 958764,
    gdp: 5872701
  },
  "1990-06-01": {
    corporateOrSelf: 10931507,
    households: 3539839,
    corporate: 3740825,
    government: 2681731,
    municipalities: 969112,
    gdp: 5960028
  },
  "1990-09-01": {
    corporateOrSelf: 11088068,
    households: 3591879,
    corporate: 3767235,
    government: 2753929,
    municipalities: 975024,
    gdp: 6015116
  },
  "1990-12-01": {
    corporateOrSelf: 11245930,
    households: 3644394,
    corporate: 3783346,
    government: 2830770,
    municipalities: 987420,
    gdp: 6004733
  },
  "1991-03-01": {
    corporateOrSelf: 11349381,
    households: 3700153,
    corporate: 3760384,
    government: 2889145,
    municipalities: 999699,
    gdp: 6035178
  },
  "1991-06-01": {
    corporateOrSelf: 11493138,
    households: 3756206,
    corporate: 3760350,
    government: 2961398,
    municipalities: 1015185,
    gdp: 6126862
  },
  "1991-09-01": {
    corporateOrSelf: 11619530,
    households: 3787008,
    corporate: 3729349,
    government: 3062723,
    municipalities: 1040450,
    gdp: 6205937
  },
  "1991-12-01": {
    corporateOrSelf: 11775541,
    households: 3853200,
    corporate: 3696383,
    government: 3147363,
    municipalities: 1078595,
    gdp: 6264540
  },
  "1992-03-01": {
    corporateOrSelf: 11919490,
    households: 3904945,
    corporate: 3698223,
    government: 3238034,
    municipalities: 1078287,
    gdp: 6363102
  },
  "1992-06-01": {
    corporateOrSelf: 12046320,
    households: 3942175,
    corporate: 3691575,
    government: 3328872,
    municipalities: 1083699,
    gdp: 6470763
  },
  "1992-09-01": {
    corporateOrSelf: 12209435,
    households: 3994613,
    corporate: 3693344,
    government: 3423745,
    municipalities: 1097733,
    gdp: 6566641
  },
  "1992-12-01": {
    corporateOrSelf: 12328512,
    households: 4053865,
    corporate: 3688421,
    government: 3491131,
    municipalities: 1095095,
    gdp: 6680803
  },
  "1993-03-01": {
    corporateOrSelf: 12462931,
    households: 4096043,
    corporate: 3705517,
    government: 3550017,
    municipalities: 1111355,
    gdp: 6729459
  },
  "1993-06-01": {
    corporateOrSelf: 12669176,
    households: 4156988,
    corporate: 3739815,
    government: 3641160,
    municipalities: 1131213,
    gdp: 6808939
  },
  "1993-09-01": {
    corporateOrSelf: 12864922,
    households: 4228101,
    corporate: 3775831,
    government: 3709639,
    municipalities: 1151351,
    gdp: 6882098
  },
  "1993-12-01": {
    corporateOrSelf: 13054799,
    households: 4303289,
    corporate: 3814137,
    government: 3784333,
    municipalities: 1153040,
    gdp: 7013738
  },
  "1994-03-01": {
    corporateOrSelf: 13208692,
    households: 4375585,
    corporate: 3875197,
    government: 3809948,
    municipalities: 1147963,
    gdp: 7115652
  },
  "1994-06-01": {
    corporateOrSelf: 13384974,
    households: 4453886,
    corporate: 3921847,
    government: 3879588,
    municipalities: 1129654,
    gdp: 7246931
  },
  "1994-09-01": {
    corporateOrSelf: 13557621,
    households: 4525560,
    corporate: 3973172,
    government: 3930823,
    municipalities: 1128066,
    gdp: 7331075
  },
  "1994-12-01": {
    corporateOrSelf: 13739431,
    households: 4627257,
    corporate: 4026852,
    government: 3977825,
    municipalities: 1107497,
    gdp: 7455288
  },
  "1995-03-01": {
    corporateOrSelf: 13904268,
    households: 4700954,
    corporate: 4096552,
    government: 4014760,
    municipalities: 1092002,
    gdp: 7522289
  },
  "1995-06-01": {
    corporateOrSelf: 14148582,
    households: 4783231,
    corporate: 4170197,
    government: 4117882,
    municipalities: 1077272,
    gdp: 7580997
  },
  "1995-09-01": {
    corporateOrSelf: 14307241,
    households: 4876898,
    corporate: 4217528,
    government: 4149242,
    municipalities: 1063573,
    gdp: 7683125
  },
  "1995-12-01": {
    corporateOrSelf: 14428136,
    households: 4950231,
    corporate: 4279180,
    government: 4151993,
    municipalities: 1046732,
    gdp: 7772586
  },
  "1996-03-01": {
    corporateOrSelf: 14654261,
    households: 5072380,
    corporate: 4325239,
    government: 4215265,
    municipalities: 1041378,
    gdp: 7868468
  },
  "1996-06-01": {
    corporateOrSelf: 14880524,
    households: 5162906,
    corporate: 4399851,
    government: 4279858,
    municipalities: 1037909,
    gdp: 8032840
  },
  "1996-09-01": {
    corporateOrSelf: 15052837,
    households: 5233450,
    corporate: 4462724,
    government: 4327646,
    municipalities: 1029017,
    gdp: 8131408
  },
  "1996-12-01": {
    corporateOrSelf: 15185346,
    households: 5313287,
    corporate: 4502787,
    government: 4343083,
    municipalities: 1026189,
    gdp: 8259771
  },
  "1997-03-01": {
    corporateOrSelf: 15379699,
    households: 5400903,
    corporate: 4577571,
    government: 4369736,
    municipalities: 1031489,
    gdp: 8362655
  },
  "1997-06-01": {
    corporateOrSelf: 15586768,
    households: 5483368,
    corporate: 4668499,
    government: 4395842,
    municipalities: 1039059,
    gdp: 8518825
  },
  "1997-09-01": {
    corporateOrSelf: 15845232,
    households: 5581267,
    corporate: 4790742,
    government: 4415850,
    municipalities: 1057373,
    gdp: 8662823
  },
  "1997-12-01": {
    corporateOrSelf: 16029496,
    households: 5661212,
    corporate: 4884846,
    government: 4406492,
    municipalities: 1076946,
    gdp: 8765907
  },
  "1998-03-01": {
    corporateOrSelf: 16299332,
    households: 5770512,
    corporate: 5028583,
    government: 4407670,
    municipalities: 1092568,
    gdp: 8866480
  },
  "1998-06-01": {
    corporateOrSelf: 16632509,
    households: 5894117,
    corporate: 5192660,
    government: 4435299,
    municipalities: 1110433,
    gdp: 8969699
  },
  "1998-09-01": {
    corporateOrSelf: 16838118,
    households: 5984597,
    corporate: 5321785,
    government: 4405501,
    municipalities: 1126235,
    gdp: 9121097
  },
  "1998-12-01": {
    corporateOrSelf: 17110682,
    households: 6116429,
    corporate: 5455414,
    government: 4395086,
    municipalities: 1143753,
    gdp: 9293991
  },
  "1999-03-01": {
    corporateOrSelf: 17416104,
    households: 6258072,
    corporate: 5618537,
    government: 4380185,
    municipalities: 1159310,
    gdp: 9411682
  },
  "1999-06-01": {
    corporateOrSelf: 17671502,
    households: 6400510,
    corporate: 5727562,
    government: 4378872,
    municipalities: 1164558,
    gdp: 9526210
  },
  "1999-09-01": {
    corporateOrSelf: 18005503,
    households: 6538201,
    corporate: 5932011,
    government: 4356927,
    municipalities: 1178363,
    gdp: 9686626
  },
  "1999-12-01": {
    corporateOrSelf: 18288519,
    households: 6687927,
    corporate: 6054583,
    government: 4365000,
    municipalities: 1181009,
    gdp: 9900169
  },
  "2000-03-01": {
    corporateOrSelf: 18594703,
    households: 6874792,
    corporate: 6219426,
    government: 4314730,
    municipalities: 1185755,
    gdp: 10002179
  },
  "2000-06-01": {
    corporateOrSelf: 18788189,
    households: 7007215,
    corporate: 6387138,
    government: 4214690,
    municipalities: 1179146,
    gdp: 10247720
  },
  "2000-09-01": {
    corporateOrSelf: 18993005,
    households: 7171557,
    corporate: 6487627,
    government: 4143885,
    municipalities: 1189936,
    gdp: 10318165
  },
  "2000-12-01": {
    corporateOrSelf: 19172302,
    households: 7287820,
    corporate: 6596565,
    government: 4090025,
    municipalities: 1197892,
    gdp: 10435744
  },
  "2001-03-01": {
    corporateOrSelf: 19392855,
    households: 7400562,
    corporate: 6639831,
    government: 4122911,
    municipalities: 1229551,
    gdp: 10470231
  },
  "2001-06-01": {
    corporateOrSelf: 19622326,
    households: 7577136,
    corporate: 6766553,
    government: 4030300,
    municipalities: 1248336,
    gdp: 10599000
  },
  "2001-09-01": {
    corporateOrSelf: 20027801,
    households: 7821042,
    corporate: 6839027,
    government: 4096886,
    municipalities: 1270846,
    gdp: 10598020
  },
  "2001-12-01": {
    corporateOrSelf: 20261333,
    households: 7916373,
    corporate: 6896372,
    government: 4145237,
    municipalities: 1303350,
    gdp: 10660465
  },
  "2002-03-01": {
    corporateOrSelf: 20543008,
    households: 8108679,
    corporate: 6948521,
    government: 4156460,
    municipalities: 1329349,
    gdp: 10783500
  },
  "2002-06-01": {
    corporateOrSelf: 20862556,
    households: 8260757,
    corporate: 6976983,
    government: 4260360,
    municipalities: 1364455,
    gdp: 10887460
  },
  "2002-09-01": {
    corporateOrSelf: 21224196,
    households: 8458668,
    corporate: 7006361,
    government: 4357679,
    municipalities: 1401488,
    gdp: 10984040
  },
  "2002-12-01": {
    corporateOrSelf: 21618346,
    households: 8693842,
    corporate: 7049276,
    government: 4427328,
    municipalities: 1447900,
    gdp: 11061433
  },
  "2003-03-01": {
    corporateOrSelf: 21936728,
    households: 8921063,
    corporate: 7067655,
    government: 4473103,
    municipalities: 1474906,
    gdp: 11174129
  },
  "2003-06-01": {
    corporateOrSelf: 22521673,
    households: 9280481,
    corporate: 7083644,
    government: 4638594,
    municipalities: 1518954,
    gdp: 11312766
  },
  "2003-09-01": {
    corporateOrSelf: 22955433,
    households: 9523761,
    corporate: 7136314,
    government: 4752624,
    municipalities: 1542735,
    gdp: 11566669
  },
  "2003-12-01": {
    corporateOrSelf: 23343538,
    households: 9782786,
    corporate: 7144282,
    government: 4848035,
    municipalities: 1568435,
    gdp: 11772234
  },
  "2004-03-01": {
    corporateOrSelf: 24572248,
    households: 10033183,
    corporate: 7277946,
    government: 4912016,
    municipalities: 2349103,
    gdp: 11923447
  },
  "2004-06-01": {
    corporateOrSelf: 25154451,
    households: 10327115,
    corporate: 7340067,
    government: 5081330,
    municipalities: 2405939,
    gdp: 12112815
  },
  "2004-09-01": {
    corporateOrSelf: 25674803,
    households: 10583858,
    corporate: 7462562,
    government: 5173475,
    municipalities: 2454909,
    gdp: 12305307
  },
  "2004-12-01": {
    corporateOrSelf: 26257832,
    households: 10940559,
    corporate: 7575139,
    government: 5250883,
    municipalities: 2491251,
    gdp: 12527214
  },
  "2005-03-01": {
    corporateOrSelf: 26794064,
    households: 11184827,
    corporate: 7713438,
    government: 5352908,
    municipalities: 2542890,
    gdp: 12767286
  },
  "2005-06-01": {
    corporateOrSelf: 27406504,
    households: 11509101,
    corporate: 7862955,
    government: 5446929,
    municipalities: 2587519,
    gdp: 12922656
  },
  "2005-09-01": {
    corporateOrSelf: 27947080,
    households: 11823986,
    corporate: 7991381,
    government: 5502074,
    municipalities: 2629639,
    gdp: 13142642
  },
  "2005-12-01": {
    corporateOrSelf: 28538700,
    households: 12116452,
    corporate: 8180601,
    government: 5584775,
    municipalities: 2656872,
    gdp: 13324204
  },
  "2006-03-01": {
    corporateOrSelf: 29249977,
    households: 12510941,
    corporate: 8390176,
    government: 5690834,
    municipalities: 2658025,
    gdp: 13599160
  },
  "2006-06-01": {
    corporateOrSelf: 29922292,
    households: 12858168,
    corporate: 8599453,
    government: 5769608,
    municipalities: 2695063,
    gdp: 13753424
  },
  "2006-09-01": {
    corporateOrSelf: 30405388,
    households: 13154632,
    corporate: 8744287,
    government: 5773590,
    municipalities: 2732878,
    gdp: 13870188
  },
  "2006-12-01": {
    corporateOrSelf: 30999693,
    households: 13421686,
    corporate: 9000791,
    government: 5803923,
    municipalities: 2773293,
    gdp: 14039560
  },
  "2007-03-01": {
    corporateOrSelf: 31624705,
    households: 13618057,
    corporate: 9250024,
    government: 5925487,
    municipalities: 2831136,
    gdp: 14215651
  },
  "2007-06-01": {
    corporateOrSelf: 32311105,
    households: 13930952,
    corporate: 9553194,
    government: 5939237,
    municipalities: 2887722,
    gdp: 14402082
  },
  "2007-09-01": {
    corporateOrSelf: 32937477,
    households: 14148644,
    corporate: 9873464,
    government: 5994294,
    municipalities: 2921075,
    gdp: 14564117
  },
  "2007-12-01": {
    corporateOrSelf: 33510369,
    households: 14351562,
    corporate: 10136181,
    government: 6074315,
    municipalities: 2948311,
    gdp: 14715058
  },
  "2008-03-01": {
    corporateOrSelf: 34062572,
    households: 14508718,
    corporate: 10338327,
    government: 6243059,
    municipalities: 2972467,
    gdp: 14706538
  },
  "2008-06-01": {
    corporateOrSelf: 34304241,
    households: 14441180,
    corporate: 10543616,
    government: 6327804,
    municipalities: 2991641,
    gdp: 14865701
  },
  "2008-09-01": {
    corporateOrSelf: 35058083,
    households: 14557982,
    corporate: 10681220,
    government: 6821396,
    municipalities: 2997485,
    gdp: 14898999
  },
  "2008-12-01": {
    corporateOrSelf: 35295847,
    households: 14219665,
    corporate: 10709736,
    government: 7376817,
    municipalities: 2989629,
    gdp: 14608208
  },
  "2009-03-01": {
    corporateOrSelf: 35588061,
    households: 14151930,
    corporate: 10623576,
    government: 7787502,
    municipalities: 3025053,
    gdp: 14430901
  },
  "2009-06-01": {
    corporateOrSelf: 35984156,
    households: 14130296,
    corporate: 10534142,
    government: 8252399,
    municipalities: 3067320,
    gdp: 14381236
  },
  "2009-09-01": {
    corporateOrSelf: 36220637,
    households: 14089593,
    corporate: 10400577,
    government: 8638185,
    municipalities: 3092282,
    gdp: 14448882
  },
  "2009-12-01": {
    corporateOrSelf: 36264804,
    households: 14057682,
    corporate: 10192136,
    government: 8882645,
    municipalities: 3132341,
    gdp: 14651248
  },
  "2010-03-01": {
    corporateOrSelf: 36641726,
    households: 14004663,
    corporate: 10167067,
    government: 9307196,
    municipalities: 3162800,
    gdp: 14764611
  },
  "2010-06-01": {
    corporateOrSelf: 37049103,
    households: 13947619,
    corporate: 10098916,
    government: 9833644,
    municipalities: 3168923,
    gdp: 14980193
  },
  "2010-09-01": {
    corporateOrSelf: 37439539,
    households: 13858761,
    corporate: 10136657,
    government: 10262633,
    municipalities: 3181489,
    gdp: 15141605
  },
  "2010-12-01": {
    corporateOrSelf: 37682500,
    households: 13866178,
    corporate: 10060105,
    government: 10528562,
    municipalities: 3227655,
    gdp: 15309471
  },
  "2011-03-01": {
    corporateOrSelf: 37886517,
    households: 13890159,
    corporate: 10053718,
    government: 10736707,
    municipalities: 3205933,
    gdp: 15351444
  },
  "2011-06-01": {
    corporateOrSelf: 38189411,
    households: 13840918,
    corporate: 10128939,
    government: 11035097,
    municipalities: 3184456,
    gdp: 15557535
  },
  "2011-09-01": {
    corporateOrSelf: 38589958,
    households: 13750490,
    corporate: 10200295,
    government: 11451071,
    municipalities: 3188103,
    gdp: 15647681
  },
  "2011-12-01": {
    corporateOrSelf: 38895250,
    households: 13735594,
    corporate: 10296039,
    government: 11667250,
    municipalities: 3196367,
    gdp: 15842267
  },
  "2012-03-01": {
    corporateOrSelf: 39328869,
    households: 13741139,
    corporate: 10375804,
    government: 12014344,
    municipalities: 3197582,
    gdp: 16068824
  },
  "2012-06-01": {
    corporateOrSelf: 39815565,
    households: 13691667,
    corporate: 10484055,
    government: 12421579,
    municipalities: 3218265,
    gdp: 16207130
  },
  "2012-09-01": {
    corporateOrSelf: 40252177,
    households: 13680871,
    corporate: 10652941,
    government: 12699232,
    municipalities: 3219134,
    gdp: 16319540
  },
  "2012-12-01": {
    corporateOrSelf: 40547891,
    households: 13667988,
    corporate: 10839114,
    government: 12847828,
    municipalities: 3192961,
    gdp: 16420386
  },
  "2013-03-01": {
    corporateOrSelf: 40965511,
    households: 13688851,
    corporate: 10908854,
    government: 13173288,
    municipalities: 3194518,
    gdp: 16629050
  },
  "2013-06-01": {
    corporateOrSelf: 41218781,
    households: 13694627,
    corporate: 11044903,
    government: 13301727,
    municipalities: 3177524,
    gdp: 16699551
  },
  "2013-09-01": {
    corporateOrSelf: 41608313,
    households: 13728690,
    corporate: 11240728,
    government: 13477615,
    municipalities: 3161280,
    gdp: 16911068
  },
  "2013-12-01": {
    corporateOrSelf: 42144869,
    households: 13900277,
    corporate: 11352127,
    government: 13705127,
    municipalities: 3187338,
    gdp: 17133114
  },
  "2014-03-01": {
    corporateOrSelf: 42616267,
    households: 13943955,
    corporate: 11532777,
    government: 13955573,
    municipalities: 3183962,
    gdp: 17144281
  },
  "2014-06-01": {
    corporateOrSelf: 43035680,
    households: 14022888,
    corporate: 11698863,
    government: 14145734,
    municipalities: 3168195,
    gdp: 17462703
  },
  "2014-09-01": {
    corporateOrSelf: 43348433,
    households: 13971027,
    corporate: 11883331,
    government: 14386859,
    municipalities: 3107215,
    gdp: 17743227
  },
  "2014-12-01": {
    corporateOrSelf: 43695387,
    households: 14018843,
    corporate: 12121188,
    government: 14441054,
    municipalities: 3114302,
    gdp: 17852540
  },
  "2015-03-01": {
    corporateOrSelf: 44069739,
    households: 14054975,
    corporate: 12330254,
    government: 14553921,
    municipalities: 3130589,
    gdp: 17991348
  },
  "2015-06-01": {
    corporateOrSelf: 44677862,
    households: 14168014,
    corporate: 12592703,
    government: 14783027,
    municipalities: 3134118,
    gdp: 18193707
  },
  "2015-09-01": {
    corporateOrSelf: 44944817,
    households: 14181385,
    corporate: 12762514,
    government: 14862239,
    municipalities: 3138678,
    gdp: 18306960
  },
  "2015-12-01": {
    corporateOrSelf: 45416538,
    households: 14191329,
    corporate: 12931056,
    government: 15165626,
    municipalities: 3128527,
    gdp: 18332079
  },
  "2016-03-01": {
    corporateOrSelf: 46077156,
    households: 14261824,
    corporate: 13204452,
    government: 15471787,
    municipalities: 3139093,
    gdp: 18425306
  },
  "2016-06-01": {
    corporateOrSelf: 46612165,
    households: 14377544,
    corporate: 13346522,
    government: 15730920,
    municipalities: 3157179,
    gdp: 18611617
  },
  "2016-09-01": {
    corporateOrSelf: 47147010,
    households: 14513127,
    corporate: 13536621,
    government: 15933864,
    municipalities: 3163397,
    gdp: 18775459
  },
  "2016-12-01": {
    corporateOrSelf: 47357369,
    households: 14601841,
    corporate: 13587867,
    government: 16008291,
    municipalities: 3159370,
    gdp: 18968041
  },
  "2017-03-01": {
    corporateOrSelf: 47830186,
    households: 14727004,
    corporate: 13849175,
    government: 16111734,
    municipalities: 3142272,
    gdp: 19153912
  },
  "2017-06-01": {
    corporateOrSelf: 48409833,
    households: 14864971,
    corporate: 14087292,
    government: 16319034,
    municipalities: 3138536,
    gdp: 19322920
  },
  "2017-09-01": {
    corporateOrSelf: 48899970,
    households: 14958134,
    corporate: 14282747,
    government: 16524372,
    municipalities: 3134717,
    gdp: 19558693
  },
  "2017-12-01": {
    corporateOrSelf: 49460142,
    households: 15146992,
    corporate: 14547213,
    government: 16606939,
    municipalities: 3158998,
    gdp: 19882965
  },
  "2018-03-01": {
    corporateOrSelf: 50321144,
    households: 15266071,
    corporate: 14714237,
    government: 17203280,
    municipalities: 3137556,
    gdp: 20143716
  },
  "2018-06-01": {
    corporateOrSelf: 51173697,
    households: 15381909,
    corporate: 15163651,
    government: 17489509,
    municipalities: 3138628,
    gdp: 20492492
  },
  "2018-09-01": {
    corporateOrSelf: 51682003,
    households: 15504408,
    corporate: 15353194,
    government: 17683747,
    municipalities: 3140654,
    gdp: 20659102
  },
  "2018-12-01": {
    corporateOrSelf: 52116927,
    households: 15602081,
    corporate: 15529538,
    government: 17865026,
    municipalities: 3120282,
    gdp: 20813325
  },
  "2019-03-01": {
    corporateOrSelf: 52866599,
    households: 15679252,
    corporate: 15792592,
    government: 18291866,
    municipalities: 3102889,
    gdp: 21001591
  },
  "2019-06-01": {
    corporateOrSelf: 53324413,
    households: 15839937,
    corporate: 15959346,
    government: 18435695,
    municipalities: 3089435,
    gdp: 21289268
  },
  "2019-09-01": {
    corporateOrSelf: 54094936,
    households: 15962688,
    corporate: 16192561,
    government: 18844202,
    municipalities: 3095486,
    gdp: 21505012
  },
  "2019-12-01": {
    corporateOrSelf: 54541523,
    households: 16099100,
    corporate: 16283500,
    government: 19039898,
    municipalities: 3119025,
    gdp: 21694458
  },
  "2020-03-01": {
    corporateOrSelf: 56133875,
    households: 16244734,
    corporate: 17052034,
    government: 19710539,
    municipalities: 3126568,
    gdp: 21481367
  },
  "2020-06-01": {
    corporateOrSelf: 59884022,
    households: 16238723,
    corporate: 17700740,
    government: 22790415,
    municipalities: 3154145,
    gdp: 19477444
  },
  "2020-09-01": {
    corporateOrSelf: 60500486,
    households: 16461934,
    corporate: 17706382,
    government: 23134099,
    municipalities: 3198072,
    gdp: 21138574
  },
  "2020-12-01": {
    corporateOrSelf: 61270383,
    households: 16710657,
    corporate: 17728293,
    government: 23621060,
    municipalities: 3210373,
    gdp: 21477597
  },
  "2021-03-01": {
    corporateOrSelf: 62310708,
    households: 16989871,
    corporate: 17931420,
    government: 24151638,
    municipalities: 3237779,
    gdp: 22038226
  },
  "2021-06-01": {
    corporateOrSelf: 63324886,
    households: 17317446,
    corporate: 18013562,
    government: 24730352,
    municipalities: 3263527,
    gdp: 22740959
  },
  "2021-09-01": {
    corporateOrSelf: 63747647,
    households: 17583334,
    corporate: 18237084,
    government: 24648566,
    municipalities: 3278662,
    gdp: 23202344
  },
  "2021-12-01": {
    corporateOrSelf: 65059542,
    households: 17932849,
    corporate: 18541004,
    government: 25314346,
    municipalities: 3271343,
    gdp: 24008472
  }
};
class NetToGDP extends React.Component {
  constructor(props) {
    super(props);

    //let testing = [];
    let noData = [];
    let date = [];
    let households = [];
    let householdsData = [];
    let corporates = [];
    let corporatesData = [];
    let mortgages = [];
    let mortgagesData = [];
    let selfs = [];
    let selfsData = [];
    let notes = [];
    let notesData = [];
    let bond = [];
    let bondData = [];
    let curren = [];
    let currenData = [];
    let account = [];
    let accounttypes = [];
    let accountData = {};
    Object.keys(accounts).forEach((yr, i) => {
      const year = new Date(yr).getTime();
      if (i === 0) {
        Object.keys(accounts[yr]).forEach((x) => {
          accounttypes.push(x);
          return (accountData[x] = []);
        });
      }

      Object.keys(accounts[yr]).forEach((name) => {
        account.push(accounts[yr][name]);
        accountData[name].push([year, accounts[yr][name]]);
      });
    });
    const chartType = "federal reserve";
    if (chartType === "federal reserve") {
      currency.forEach((set) => {
        const yr = set[0];
        const checkingData = checking[yr];
        const balanceData = balance[yr];
        const year = new Date(yr).getTime();
        curren.push(set[1]);
        currenData.push([year, set[1]]);
        date.push(year);
        noData.push([year, 0]);
        if (checkingData) {
          households.push(checkingData.household);
          householdsData.push([year, checkingData.household]);

          notes.push(checkingData.government);
          notesData.push([year, checkingData.government]);

          corporates.push(checkingData.corporate);
          corporatesData.push([year, checkingData.corporate]);

          selfs.push(checkingData.bottomhalf);
          selfsData.push([year, checkingData.bottomhalf]);
        }
        if (balanceData) {
          mortgages.push(balanceData.mortgage);
          mortgagesData.push([year, balanceData.mortgage]);

          bond.push(balanceData.assets - balanceData.mortgage);
          bondData.push([year, balanceData.assets - balanceData.mortgage]);
        }
      });
      // console.log(bondData);
    } else
      Object.keys(levelRatio).map((yr, i) => {
        const year = new Date(yr).getTime();
        const data = Object.values(levelRatio)[i];
        date.push(year);
        households.push(data.households);
        householdsData.push([year, data.households]);
        corporates.push(data.corporate);
        corporatesData.push([year, data.corporate]);
        selfs.push(data.selfemployed);
        selfsData.push([year, data.selfemployed]);
        mortgages.push(data.financialMortages);
        mortgagesData.push([year, data.financialMortages]);
        bond.push(data.corporateBonds);
        bondData.push([year, data.corporateBonds]);
        notes.push(data.government);
        notesData.push([year, data.government]);

        return noData.push([year, 0]);
      });
    const all = [
      ...households,
      ...corporates,
      ...mortgages,
      ...selfs,
      ...bond,
      ...notes
    ];
    var lowAccount = Math.min(...bond);
    var highAccount = Math.max(...account);
    var lowNetRatio = Math.min(...all);
    var lowDate = Math.min(...date);
    var highNetRatio = Math.max(...all);
    var highDate = Math.max(...date);
    //console.log(dataData);
    var state = {
      accounttypes,
      ...accountData,
      chartType,
      //laststate: chartType,
      date,
      highNetRatio,
      notesData,
      bondData,
      selfsData,
      corporatesData,
      mortgagesData,
      householdsData,
      noData,
      yAxisAccount: highAccount - lowAccount,
      yAxis: highNetRatio - lowNetRatio,
      xAxis: highDate - lowDate,
      lowNetRatio,
      highDate,
      lowDate,
      currenData,
      highAccount,
      lowAccount
    };
    this.state = state;
  }
  componentDidUpdate = () => {
    if (this.state.chartType !== this.state.laststate) {
      this.setState({ laststate: this.state.chartType }, () => {
        let noData = [];
        let date = [];
        let households = [];
        let householdsData = [];
        let corporates = [];
        let corporatesData = [];
        let mortgages = [];
        let mortgagesData = [];
        let selfs = [];
        let selfsData = [];
        let notes = [];
        let notesData = [];
        let bond = [];
        let bondData = [];
        let curren = [];
        let currenData = [];
        if (this.state.chartType === "federal reserve") {
          currency.forEach((set) => {
            const yr = set[0];
            const checkingData = checking[yr];
            const balanceData = balance[yr];
            const year = new Date(yr).getTime();
            curren.push(set[1]);
            currenData.push([year, set[1]]);
            date.push(year);
            noData.push([year, 0]);
            if (checkingData) {
              households.push(checkingData.household);
              householdsData.push([year, checkingData.household]);

              notes.push(checkingData.government);
              notesData.push([year, checkingData.government]);

              corporates.push(checkingData.corporate);
              corporatesData.push([year, checkingData.corporate]);

              selfs.push(checkingData.bottomhalf);
              selfsData.push([year, checkingData.bottomhalf]);
            }
            if (balanceData) {
              mortgages.push(balanceData.mortgage);
              mortgagesData.push([year, balanceData.mortgage]);

              bond.push(balanceData.assets - balanceData.mortgage);
              bondData.push([year, balanceData.assets - balanceData.mortgage]);
            }
          });
          // console.log(bondData);
        } else
          Object.keys(levelRatio).forEach((yr, i) => {
            const year = new Date(yr).getTime();
            const data = Object.values(levelRatio)[i];
            const gdpdata = gdps[yr],
              gdp = gdpdata.gdp;

            const newdebtData = newdebt[yr];
            const loansData = loansofdebtoutstanding[yr];
            const creditData = creditsofdebtoutstanding[yr];
            const householdData = householdbalance[yr];
            const financialData = financialbalance[yr];

            const selection =
              this.state.chartType === "financial accounts"
                ? financialData
                : this.state.chartType === "household accounts"
                ? householdData
                : this.state.chartType === "lendings of monetary-debits"
                ? creditData
                : this.state.chartType === "borrowings of monetary-debits"
                ? loansData
                : this.state.chartType === "new debt"
                ? newdebtData
                : this.state.chartType === "spending (m2)"
                ? gdpdata
                : data;
            date.push(year);
            /**
           * 
    nonprofitassets: 0,
    nonprofitmiscellaneousassets: 0,
    nonprofitmiscellaneous: 0,
    nonprofitnotes: 0,
    nonprofitliabilities: 0,
    householdassets: 0,
    householdnet: 0,
    householdcheckable: 0,
    householddeposits: 0,
    householdfunds: 0,
    householdmortgages: 0,
    householddebt: 0,
    householdliabilitiesother: 0,
    householdlending: 0,
    householdliabilities: 0,
    householdborrowing: 0,
    householdfinance: 0,
    householdself: 0,
    hngoods: 0,
    householdgoods: 0,
    householdnotes: 0,
    householdbonds: 0,
    householdequities: 0,
    householdcredits: 0,
    hnpension: 0,
    householdestate: 0,
    hncredit: 0,
    life: 0,
    hnmortgate: 0,
    hnlifeinsurance: 0,
    hnmiscellaneous: 0,
    hncash: 0,
    hnassets: 0,
    hnliabilities: 0,
    hnnet: 0
           */
            const household =
              this.state.chartType === "financial accounts"
                ? financialData.deposits + financialData.pensions
                : this.state.chartType === "household accounts"
                ? householdData.householdestate +
                  householdData.householdcheckable
                : //+householdData.householdgoods
                this.state.chartType === "borrowings of monetary-debits"
                ? data.financialMortages * 1.3 * gdp
                : selection.households;
            households.push(household);
            householdsData.push([year, household]);
            const government =
              this.state.chartType === "financial accounts"
                ? financialData.notes + financialData.bondnotes
                : this.state.chartType === "household accounts"
                ? householdData.householdnotes +
                  householdData.householddeposits +
                  householdData.householdfinance +
                  householdData.householdcredits //+ householdData.householdborrowing
                : this.state.chartType === "borrowings of monetary-debits"
                ? data.government * gdp + data.municipalities * gdp
                : selection.government + selection.municipalities;
            notes.push(government);
            notesData.push([year, government]);

            const lowdata = ["spending (m2)", "new debt"].includes(
              this.state.chartType
            );
            const corporateExmortgage =
              creditData.corporateCorporate +
              creditData.corporateDepositaryLoansExMortgage +
              creditData.corporateCommercialPaper +
              creditData.CorporateOther;
            const corporate =
              this.state.chartType === "financial accounts"
                ? //financialData.bonds +
                  financialData.equities +
                  financialData.shares +
                  financialData.funds
                : this.state.chartType === "household accounts"
                ? householdData.householdequities //+householdData.householdborrowing +householdData.householdcredits
                : this.state.chartType === "lendings of monetary-debits"
                ? corporateExmortgage
                : selection.corporate;
            corporates.push(corporate);
            corporatesData.push([year, corporate]);
            const selfExmortgage =
              creditData.selfemployedNotes + creditData.selfemployedOther;
            const self =
              this.state.chartType === "financial accounts"
                ? financialData.self + financialData.insurance
                : this.state.chartType === "household accounts"
                ? householdData.householdself //+ householdData.householdcredits
                : this.state.chartType === "lendings of monetary-debits"
                ? selfExmortgage
                : lowdata
                ? selection.corporateOrSelf - selection.corporate
                : selection.selfemployed;
            selfs.push(self);
            selfsData.push([year, self]);
            const mortgage =
              this.state.chartType === "financial accounts"
                ? financialData.mortgages +
                  financialData.homeloan +
                  financialData.estates
                : this.state.chartType === "household accounts"
                ? householdData.householdmortgages
                : this.state.chartType === "lendings of monetary-debits"
                ? creditData.corporateMortgages +
                  creditData.selfemployedMortgages
                : ["borrowings of monetary-debits", "spending (m2)"].includes(
                    this.state.chartType
                  )
                ? loansData.corporateMortgages + loansData.selfemployedMortgages
                : data.financialMortages;
            const bonds =
              this.state.chartType === "financial accounts"
                ? financialData.bonds +
                  financialData.monetarypaper +
                  financialData.paper +
                  financialData.moneyfunds +
                  financialData.treasury +
                  financialData.repurchases
                : this.state.chartType === "household accounts"
                ? householdData.householdbonds + householdData.householdlending
                : this.state.chartType === "lendings of monetary-debits"
                ? corporateExmortgage + selfExmortgage
                : ["borrowings of monetary-debits", "spending (m2)"].includes(
                    this.state.chartType
                  )
                ? loansData.corporate -
                  loansData.corporateMortgages +
                  loansData.selfemployed -
                  loansData.selfemployedMortgages
                : data.corporateBonds;
            const forPercentage = this.state.chartType === "new debt" ? 100 : 1;
            mortgages.push(forPercentage * mortgage);
            mortgagesData.push([year, forPercentage * mortgage]);
            bond.push(forPercentage * bonds);
            bondData.push([year, forPercentage * bonds]);

            return noData.push([year, 0]);
          });
        const all = [
          ...households,
          ...corporates,
          ...mortgages,
          ...selfs,
          ...bond,
          ...notes,
          ...curren
        ];
        var lowNetRatio = Math.min(...all);
        var lowDate = Math.min(...date);
        var highNetRatio = Math.max(...all);
        var highDate = Math.max(...date);
        //console.log(dataData);
        var state = {
          date,
          noData,
          highNetRatio,
          notesData,
          bondData,
          selfsData,
          corporatesData,
          mortgagesData,
          householdsData,
          yAxis: highNetRatio - lowNetRatio,
          xAxis: highDate - lowDate,
          lowNetRatio,
          highDate,
          lowDate,
          currenData
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
    const coeff = (this.props.lastWidth - 60) / this.props.lastWidth;
    //console.log(this.state.oilprice);
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coeff *
        this.props.lastWidth,
      0
    ]);
    //console.log(this.state.oilprice);
    const heightfix = 150;
    const selfsData = this.state.selfsData
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          coeff *
          this.props.lastWidth,
        ((y - this.state.lowNetRatio) / this.state.yAxis) * heightfix
      ]);
    const mortgagesData = this.state.mortgagesData
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          coeff *
          this.props.lastWidth,
        ((y - this.state.lowNetRatio) / this.state.yAxis) * heightfix
      ]);
    const householdsData = this.state.householdsData
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          coeff *
          this.props.lastWidth,
        ((y - this.state.lowNetRatio) / this.state.yAxis) * heightfix
      ]);
    const corporatesData = this.state.corporatesData
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          coeff *
          this.props.lastWidth,
        ((y - this.state.lowNetRatio) / this.state.yAxis) * heightfix
      ]);
    const bondData = this.state.bondData
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          coeff *
          this.props.lastWidth,
        ((y - this.state.lowNetRatio) / this.state.yAxis) * heightfix
      ]);
    const notesData = this.state.notesData
      .filter((x) => x[1] !== 0 && x[1] > 10000)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          coeff *
          this.props.lastWidth,
        ((y - this.state.lowNetRatio) / this.state.yAxis) * heightfix
      ]);
    const currenData = this.state.currenData
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          coeff *
          this.props.lastWidth,
        ((y - this.state.lowNetRatio) / this.state.yAxis) * heightfix
      ]);
    var accountData = {};
    this.state.accounttypes.forEach((x) => {
      accountData[x] = this.state[x]
        .filter((x) => x[1] !== 0)
        .map(([x, y]) => [
          ((x - this.state.lowDate) / this.state.xAxis) *
            coeff *
            this.props.lastWidth,
          ((y - this.state.lowAccount) / this.state.yAxisAccount) * heightfix
        ]);
    });
    const bizandcheck =
      this.state.biz && this.state.chartType === "federal reserve";
    const labelitem = {
      transition: ".3s ease-out",
      color: bizandcheck ? "grey" : "white",
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
            href={
              this.state.chartType === "financial accounts"
                ? "https://fredaccount.stlouisfed.org/datalists/276763"
                : this.state.chartType === "household accounts"
                ? "https://fredaccount.stlouisfed.org/datalists/276757"
                : "https://www.federalreserve.gov/releases/z1/dataviz/z1/balance_sheet/chart/"
            }
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
          >
            {"federal reserve" === this.state.chartType ? (
              <a
                href={
                  bizandcheck
                    ? "https://fred.stlouisfed.org/release/tables?rid=52&eid=808834"
                    : "https://fred.stlouisfed.org/graph/?g=NAXa"
                }
                style={{ color: "white" }}
              >
                checking
              </a>
            ) : (
              `${
                (["new debt"].includes(this.state.chartType) ? "annum/" : "") +
                (["lendings of monetary-debits"].includes(this.state.chartType)
                  ? "share"
                  : ["borrowings of monetary-debits"].includes(
                      this.state.chartType
                    )
                  ? "total"
                  : "quarterly")
              }`
            )}
            &nbsp;
            <select
              style={{
                width: "min-content"
              }}
              state={this.state.chartType}
              onChange={(name) => {
                this.setState({ chartType: name.target.value });
              }}
            >
              {[
                "federal reserve",
                "liabilities/GDP, m2*velocity",
                "spending (m2)",
                "borrowings of monetary-debits",
                "lendings of monetary-debits", //financial-debt certificates
                "household accounts",
                "financial accounts",
                "new debt"
              ].map((name) => (
                <option key={name} style={{ maxWidth: "100%" }}>
                  {name}
                </option>
              ))}
            </select>
            &nbsp;
            {bizandcheck
              ? `$${shortNumber(this.state.lowAccount * 1000000)}-${shortNumber(
                  this.state.highAccount * 1000000
                )}`
              : [
                  "federal reserve",
                  "spending (m2)",
                  "borrowings of monetary-debits",
                  "household accounts",
                  "financial accounts"
                ].includes(this.state.chartType)
              ? `$${shortNumber(
                  this.state.lowNetRatio * 1000000
                )}-${shortNumber(this.state.highNetRatio * 1000000)}`
              : `${StringDecimal(
                  this.state.lowNetRatio *
                    (this.state.chartType === "new debt" ? 1 : 100)
                )}-${StringDecimal(
                  this.state.highNetRatio *
                    (this.state.chartType === "new debt" ? 1 : 100)
                )}%`}
          </span>
          <div
            style={{
              color: "white",
              marginTop: "6px",
              zIndex: "1",
              display: "flex",
              width: "max-content",
              maxWidth: "100%",
              position: "absolute"
            }}
          >
            {!bizandcheck ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={labelitem}>
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "deepskyblue"
                    }}
                  />
                  households
                </div>
                <div style={labelitem}>
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "plum"
                    }}
                  />
                  corp
                </div>
                <div style={labelitem}>
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "green"
                    }}
                  />
                  mort
                </div>
                <div style={labelitem}>
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "purple"
                    }}
                  />
                  self
                </div>
                <div style={labelitem}>
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "red"
                    }}
                  />
                  bond
                </div>
                <div style={labelitem}>
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "pink"
                    }}
                  />
                  notes
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {this.state.accounttypes.map((x, i) => (
                  <div style={labelitem}>
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        backgroundColor: `rgb(${
                          (i / this.state.accounttypes.length) * 220 + 30
                        },${
                          ((this.state.accounttypes.length / 2 - i) /
                            this.state.accounttypes.length) *
                            150 +
                          90
                        },${
                          ((this.state.accounttypes.length - i) /
                            this.state.accounttypes.length) *
                            220 +
                          30
                        })`
                      }}
                    />
                    {x.substring(0, 5)}
                  </div>
                ))}
              </div>
            )}
            <input
              type="checkbox"
              //checked={this.state.biz}
              onChange={() => this.setState({ biz: !this.state.biz })}
            />
            "biz"
          </div>
        </div>
        <div style={{ transform: "translate(0px,230px)" }}>
          {!bizandcheck && (
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
              {this.state.chartType === "federal reserve" &&
                currenData.map(
                  ([x, y], i) =>
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        x={x}
                        y={y}
                        width={2}
                        height={1}
                        stroke="yellow"
                        fill="blue"
                        strokeWidth={1}
                        key={i}
                      />
                    )
                )}
              {householdsData.map(
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
              {corporatesData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="plum"
                      fill="blue"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortgagesData.map(
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
              {selfsData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="purple"
                      fill="blue"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {bondData.map(
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
              {notesData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="pink"
                      fill="blue"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
            </svg>
          )}
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {bizandcheck &&
              Object.keys(accountData).map((name, o) => {
                return accountData[name].map(([x, y], i) => {
                  return (
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        x={x}
                        y={y}
                        width={2}
                        height={2}
                        stroke={`rgb(${
                          (o / this.state.accounttypes.length) * 220 + 30
                        },${
                          ((this.state.accounttypes.length / 2 - o) /
                            this.state.accounttypes.length) *
                            150 +
                          90
                        },${
                          ((this.state.accounttypes.length - o) /
                            this.state.accounttypes.length) *
                            220 +
                          30
                        })`}
                        fill="blue"
                        strokeWidth={1}
                        key={i}
                      />
                    )
                  );
                });
              })}
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

export default NetToGDP;
