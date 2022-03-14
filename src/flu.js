import React from "react";

/*const mortalagenj = {
  "1960-1969": [
    {
      age: "0",
      dx: 2260
    },
    {
      age: "1-4",
      dx: 321
    },
    {
      age: "5-9",
      dx: 198
    },
    {
      age: "10-14",
      dx: 172
    },
    {
      age: "15-19",
      dx: 376
    },
    {
      age: "20-24",
      dx: 518
    },
    {
      age: "25-29",
      dx: 555
    },
    {
      age: "30-34",
      dx: 693
    },
    {
      age: "35-39",
      dx: 1037
    },
    {
      age: "40-44",
      dx: 1609
    },
    {
      age: "45-49",
      dx: 2571
    },
    {
      age: "50-54",
      dx: 4056
    },
    {
      age: "55-59",
      dx: 5868
    },
    {
      age: "60-64",
      dx: 8259
    },
    {
      age: "65-69",
      dx: 10924
    },
    {
      age: "70-74",
      dx: 13510
    },
    {
      age: "75-79",
      dx: 14832
    },
    {
      age: "80-84",
      dx: 14149
    },
    {
      age: "85-89",
      dx: 10651
    },
    {
      age: "90-94",
      dx: 5435
    },
    {
      age: "95-99",
      dx: 1692
    },
    {
      age: "100-104",
      dx: 289
    },
    {
      age: "105-109",
      dx: 25
    },
    {
      age: "110",
      dx: 1
    }
  ],
  "1970-1979": [
    {
      age: "0",
      dx: 1581
    },
    {
      age: "1-4",
      dx: 255
    },
    {
      age: "5-9",
      dx: 163
    },
    {
      age: "10-14",
      dx: 150
    },
    {
      age: "15-19",
      dx: 404
    },
    {
      age: "20-24",
      dx: 591
    },
    {
      age: "25-29",
      dx: 549
    },
    {
      age: "30-34",
      dx: 644
    },
    {
      age: "35-39",
      dx: 901
    },
    {
      age: "40-44",
      dx: 1413
    },
    {
      age: "45-49",
      dx: 2265
    },
    {
      age: "50-54",
      dx: 3409
    },
    {
      age: "55-59",
      dx: 5056
    },
    {
      age: "60-64",
      dx: 7279
    },
    {
      age: "65-69",
      dx: 9754
    },
    {
      age: "70-74",
      dx: 12478
    },
    {
      age: "75-79",
      dx: 14802
    },
    {
      age: "80-84",
      dx: 15102
    },
    {
      age: "85-89",
      dx: 12459
    },
    {
      age: "90-94",
      dx: 7346
    },
    {
      age: "95-99",
      dx: 2760
    },
    {
      age: "100-104",
      dx: 574
    },
    {
      age: "105-109",
      dx: 61
    },
    {
      age: "110",
      dx: 3
    }
  ],
  "1980-1989": [
    {
      age: "0",
      dx: 1074
    },
    {
      age: "1-4",
      dx: 196
    },
    {
      age: "5-9",
      dx: 123
    },
    {
      age: "10-14",
      dx: 119
    },
    {
      age: "15-19",
      dx: 326
    },
    {
      age: "20-24",
      dx: 470
    },
    {
      age: "25-29",
      dx: 577
    },
    {
      age: "30-34",
      dx: 740
    },
    {
      age: "35-39",
      dx: 898
    },
    {
      age: "40-44",
      dx: 1180
    },
    {
      age: "45-49",
      dx: 1847
    },
    {
      age: "50-54",
      dx: 2893
    },
    {
      age: "55-59",
      dx: 4406
    },
    {
      age: "60-64",
      dx: 6471
    },
    {
      age: "65-69",
      dx: 8849
    },
    {
      age: "70-74",
      dx: 11846
    },
    {
      age: "75-79",
      dx: 13961
    },
    {
      age: "80-84",
      dx: 15834
    },
    {
      age: "85-89",
      dx: 14161
    },
    {
      age: "90-94",
      dx: 9304
    },
    {
      age: "95-99",
      dx: 3784
    },
    {
      age: "100-104",
      dx: 843
    },
    {
      age: "105-109",
      dx: 92
    },
    {
      age: "110",
      dx: 5
    }
  ],
  "1990-1999": [
    {
      age: "0",
      dx: 810
    },
    {
      age: "1-4",
      dx: 142
    },
    {
      age: "5-9",
      dx: 85
    },
    {
      age: "10-14",
      dx: 91
    },
    {
      age: "15-19",
      dx: 270
    },
    {
      age: "20-24",
      dx: 410
    },
    {
      age: "25-29",
      dx: 509
    },
    {
      age: "30-34",
      dx: 732
    },
    {
      age: "35-39",
      dx: 1004
    },
    {
      age: "40-44",
      dx: 1296
    },
    {
      age: "45-49",
      dx: 1684
    },
    {
      age: "50-54",
      dx: 2406
    },
    {
      age: "55-59",
      dx: 3659
    },
    {
      age: "60-64",
      dx: 5479
    },
    {
      age: "65-69",
      dx: 7896
    },
    {
      age: "70-74",
      dx: 10672
    },
    {
      age: "75-79",
      dx: 13367
    },
    {
      age: "80-84",
      dx: 16097
    },
    {
      age: "85-89",
      dx: 15615
    },
    {
      age: "90-94",
      dx: 11382
    },
    {
      age: "95-99",
      dx: 5057
    },
    {
      age: "100-104",
      dx: 1198
    },
    {
      age: "105-109",
      dx: 132
    },
    {
      age: "110",
      dx: 7
    }
  ],
  "2000-2009": [
    {
      age: "0",
      dx: 584
    },
    {
      age: "1-4",
      dx: 82
    },
    {
      age: "5-9",
      dx: 50
    },
    {
      age: "10-14",
      dx: 67
    },
    {
      age: "15-19",
      dx: 230
    },
    {
      age: "20-24",
      dx: 434
    },
    {
      age: "25-29",
      dx: 436
    },
    {
      age: "30-34",
      dx: 485
    },
    {
      age: "35-39",
      dx: 651
    },
    {
      age: "40-44",
      dx: 983
    },
    {
      age: "45-49",
      dx: 1453
    },
    {
      age: "50-54",
      dx: 2112
    },
    {
      age: "55-59",
      dx: 3017
    },
    {
      age: "60-64",
      dx: 4456
    },
    {
      age: "65-69",
      dx: 6472
    },
    {
      age: "70-74",
      dx: 9317
    },
    {
      age: "75-79",
      dx: 12825
    },
    {
      age: "80-84",
      dx: 16653
    },
    {
      age: "85-89",
      dx: 18103
    },
    {
      age: "90-94",
      dx: 13818
    },
    {
      age: "95-99",
      dx: 6249
    },
    {
      age: "100-104",
      dx: 1388
    },
    {
      age: "105-109",
      dx: 132
    },
    {
      age: "110",
      dx: 5
    }
  ],
  "2010-2018": [
    {
      age: "0",
      dx: 446
    },
    {
      age: "1-4",
      dx: 72
    },
    {
      age: "5-9",
      dx: 46
    },
    {
      age: "10-14",
      dx: 53
    },
    {
      age: "15-19",
      dx: 170
    },
    {
      age: "20-24",
      dx: 426
    },
    {
      age: "25-29",
      dx: 523
    },
    {
      age: "30-34",
      dx: 561
    },
    {
      age: "35-39",
      dx: 627
    },
    {
      age: "40-44",
      dx: 810
    },
    {
      age: "45-49",
      dx: 1245
    },
    {
      age: "50-54",
      dx: 1896
    },
    {
      age: "55-59",
      dx: 2752
    },
    {
      age: "60-64",
      dx: 3891
    },
    {
      age: "65-69",
      dx: 5482
    },
    {
      age: "70-74",
      dx: 7953
    },
    {
      age: "75-79",
      dx: 11284
    },
    {
      age: "80-84",
      dx: 15415
    },
    {
      age: "85-89",
      dx: 18582
    },
    {
      age: "90-94",
      dx: 16492
    },
    {
      age: "95-99",
      dx: 8723
    },
    {
      age: "100-104",
      dx: 2288
    },
    {
      age: "105-109",
      dx: 252
    },
    {
      age: "110",
      dx: 11
    }
  ]
};*/

const usmortality = {
  "1880": [
    {
      age: "0-4",
      deaths: 302624,
      dx: 394, //https://www2.census.gov/library/publications/decennial/1880/vol-11-12-mortality/1880v11-02.pdf#page=6
      pop: 6914516 //https://www2.census.gov/prod2/decennial/documents/36894832v1ch05.pdf#page=34
    },
    {
      age: "5-9",
      deaths: 43093,
      dx: 221,
      pop: 6479660
    },
    {
      age: "10-14",
      deaths: 22915,
      dx: 205,
      pop: 5715186
    },
    {
      age: "15-19",
      deaths: 29368,
      dx: 440,
      pop: 5011415
    },
    {
      age: "20-24",
      deaths: 39355,
      dx: 593,
      pop: 5087772
    },
    {
      age: "25-29",
      deaths: 33132,
      dx: 621,
      pop: 4080621
    },
    {
      age: "30-34",
      deaths: 28669,
      dx: 769,
      pop: 3368943
    },
    {
      age: "35-39",
      deaths: 28630,
      dx: 1110,
      pop: 3000419
    },
    {
      age: "40-44",
      deaths: 24954,
      dx: 1687,
      pop: 2468811
    },
    {
      age: "45-49",
      deaths: 23996,
      dx: 2625,
      pop: 2089445
    },
    {
      age: "50-54",
      deaths: 24539,
      dx: 4027,
      pop: 1839883
    },
    {
      age: "55-59",
      deaths: 22352,
      dx: 5670,
      pop: 1271434
    },
    {
      age: "60-64",
      deaths: 26183,
      dx: 7826,
      pop: 1104219
    },
    {
      age: "65-69",
      deaths: 25685,
      dx: 10338,
      pop: 725876
    },
    {
      age: "70-74",
      deaths: 25780,
      dx: 12787,
      pop: 495442
    },
    {
      age: "75-79",
      deaths: 22352,
      dx: 14321,
      pop: 281065
    },
    {
      age: "80-84",
      deaths: 16641,
      dx: 14658,
      pop: 146362
    },
    {
      age: "85-89",
      deaths: 8149,
      dx: 11292,
      pop: 49835
    }, //1040
    {
      age: "90-94",
      deaths: 3283,
      dx: 5758,
      pop: 16100
    },
    {
      age: "95-99",
      deaths: 1500, //95+ 2009
      dx: 1808,
      pop: 4768
    },
    {
      age: "100",
      deaths: 509, //95+ 2009
      dx: 304,
      pop: 4016
    }
    /*{
      age: "unknown",
      dx: 25,
      pop: 0
    }*/
  ],
  "1890": [
    {
      age: "0-4",
      dx: 14936 + 3008 + 1296 + 823 + 631, //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2885717/
      pop: 7634693
    },
    {
      age: "5-9",
      dx: 1786,
      pop: 7573998
    },
    {
      age: "10-14",
      dx: 1228,
      pop: 7033509
    },
    {
      age: "15-19",
      dx: 1911,
      pop: 6557563
    },
    {
      age: "20-24",
      dx: 2657,
      pop: 6196676
    },
    {
      age: "25-29",
      dx: 2756,
      pop: 5227777
    },
    {
      age: "30-34",
      dx: 2831,
      pop: 4578630
    },
    {
      age: "35-39",
      dx: 3050,
      pop: 3866161
    },
    {
      age: "40-44",
      dx: 3321,
      pop: 3185518
    },
    {
      age: "45-49",
      dx: 3800,
      pop: 2731640
    },
    {
      age: "50-54",
      dx: 4429,
      pop: 2326262
    },
    {
      age: "55-59",
      dx: 5658,
      pop: 1672336
    },
    {
      age: "60-64",
      dx: 6933,
      pop: 1458034
    },
    {
      age: "65-69",
      dx: 8476,
      pop: 1010110
    },
    {
      age: "70-74",
      dx: 9193,
      pop: 701751
    },
    {
      age: "75-79",
      dx: 9023,
      pop: 393062
    },
    {
      age: "80-84",
      dx: 12253, //80+ 12253
      pop: 203851
    },
    {
      age: "85-89",
      dx: 12253,
      pop: 75240
    }, //1307
    {
      age: "90-94",
      dx: 12253,
      pop: 23645
    },
    {
      age: "95-99",
      dx: 12253,
      pop: 5648
    },
    {
      age: "100",
      dx: 12253,
      pop: 3981
    }
    /*{
      age: "unknown",
      dx: 31,
      pop: 162165
    },*/
  ],
  "1900": [
    {
      age: "0-4",
      dx: 13052 + 2750 + 1199 + 764 + 584,
      pop: 9170628
    },
    {
      age: "5-9",
      dx: 1649,
      pop: 8874123
    },
    {
      age: "10-14",
      dx: 1109,
      pop: 8080234
    },
    {
      age: "15-19",
      dx: 1731,
      pop: 7556089
    },
    {
      age: "20-24",
      dx: 2454,
      pop: 7335016
    },
    {
      age: "25-29",
      dx: 2590,
      pop: 6529441
    },
    {
      age: "30-34",
      dx: 2725,
      pop: 5556039
    },
    {
      age: "35-39",
      dx: 2975,
      pop: 4964781
    },
    {
      age: "40-44",
      dx: 3266,
      pop: 4247166
    },
    {
      age: "45-49",
      dx: 3768,
      pop: 3454612
    },
    {
      age: "50-54",
      dx: 4439,
      pop: 2942829
    },
    {
      age: "55-59",
      dx: 5729,
      pop: 2211172
    },
    {
      age: "60-64",
      dx: 7092,
      pop: 1791363
    },
    {
      age: "65-69",
      dx: 8801,
      pop: 1302926
    },
    {
      age: "70-74",
      dx: 9758,
      pop: 883841
    },
    {
      age: "75-79",
      dx: 9831,
      pop: 519857
    },
    {
      age: "80-84",
      dx: 13733, //80+ 13733
      pop: 251512
    },
    {
      age: "85-89",
      dx: 13733,
      pop: 88600
    }, //1706
    {
      age: "90-94",
      dx: 13733,
      pop: 23992
    },
    {
      age: "95-99",
      dx: 13733,
      pop: 6266
    },
    {
      age: "100",
      dx: 13733,
      pop: 3504
    }
    /*{
      age: "unknown",
      dx: 50,
      pop: 200584
    },*/
  ],
  "1910": [
    {
      age: "0-4",
      dx: 11462 + 2446 + 1062 + 666 + 477,
      pop: 10631364
    },
    {
      age: "5-9",
      dx: 390 + 327 + 274 + 234 + 204,
      pop: 9760632
    },
    {
      age: "10-14",
      dx: 187 + 180 + 182 + 193 + 210,
      pop: 9107140
    },
    {
      age: "15-19",
      dx: 232 + 256 + 285 + 315 + 344,
      pop: 9063603
    },
    {
      age: "20-24",
      dx: 375 + 398 + 412 + 418 + 425,
      pop: 9056984
    },
    {
      age: "25-29",
      dx: 432 + 440 + 451 + 465 + 479,
      pop: 8180003
    },
    {
      age: "30-34",
      dx: 493 + 511 + 530 + 550 + 568,
      pop: 6972185
    },
    {
      age: "35-39",
      dx: 588 + 605 + 617 + 631 + 644,
      pop: 6396100
    },
    {
      age: "40-44",
      dx: 658 + 674 + 693 + 716 + 740,
      pop: 5261587
    },
    {
      age: "45-49",
      dx: 766 + 795 + 821 + 846 + 873,
      pop: 4469197
    },
    {
      age: "50-54",
      dx: 897 + 929 + 970 + 1025 + 1084,
      pop: 3900791
    },
    {
      age: "55-59",
      dx: 1153 + 1225 + 1289 + 1346 + 1404,
      pop: 2786951
    },
    {
      age: "60-64",
      dx: 1462 + 1521 + 1587 + 1656 + 1718,
      pop: 2267150
    },
    {
      age: "65-69",
      dx: 1773 + 1826 + 1877 + 1928 + 1974,
      pop: 1679503
    },
    {
      age: "70-74",
      dx: 2013 + 2044 + 2065 + 2072 + 2070,
      pop: 1113728
    },
    {
      age: "75-79",
      dx: 2057 + 2028 + 1981 + 1920 + 1854,
      pop: 667302
    },
    {
      age: "80-84",
      dx: 1786 + 1696 + 1565 + 1409 + 1255,
      pop: 321754
    },
    {
      age: "85-89",
      dx: 1103 + 954 + 816 + 689 + 571,
      pop: 122818
    }, //2197
    {
      age: "90-94",
      dx: 466 + 371 + 289 + 219 + 162,
      pop: 33473
    },
    {
      age: "95-99",
      dx: 117 + 83 + 57 + 39 + 25,
      pop: 7391
    },
    {
      age: "100",
      dx: 16 + 10 + 6 + 4 + 2 + 1 + 1,
      pop: 3555
    }
    /*{
      age: "unknown",
      dx: 99,
      pop: 169055
    },*/
  ],
  "1911": [
    {
      age: "0-4",
      dx: 29954,
      pop: 10631364
    },
    {
      age: "5-9",
      dx: 2614,
      pop: 9760632
    },
    {
      age: "10-14",
      dx: 1657,
      pop: 9107140
    },
    {
      age: "15-19",
      dx: 2495,
      pop: 9063603
    },
    {
      age: "20-24",
      dx: 2856,
      pop: 9056984
    },
    {
      age: "25-29",
      dx: 2735,
      pop: 8180003
    },
    {
      age: "30-34",
      dx: 2461,
      pop: 6972185
    },
    {
      age: "35-39",
      dx: 2606,
      pop: 6396100
    },
    {
      age: "40-44",
      dx: 3170,
      pop: 5261587
    },
    {
      age: "45-49",
      dx: 4349,
      pop: 4469197
    },
    {
      age: "50-54",
      dx: 6528,
      pop: 3900791
    },
    {
      age: "55-59",
      dx: 9035,
      pop: 2786951
    },
    {
      age: "60-64",
      dx: 11899,
      pop: 2267150
    },
    {
      age: "65-69",
      dx: 14016,
      pop: 1679503
    },
    {
      age: "70-74",
      dx: 17103,
      pop: 1113728
    },
    {
      age: "75-79",
      dx: 20086,
      pop: 667302
    },
    {
      age: "80-84",
      dx: 21363,
      pop: 321754
    },
    {
      age: "85-89",
      dx: 21169,
      pop: 122818
    }, //2197
    {
      age: "90-94",
      dx: 15786,
      pop: 33473
    },
    {
      age: "95-99",
      dx: 6690,
      pop: 7391
    },
    {
      age: "100",
      dx: 1310 + 118 + 3,
      pop: 3555
    }
    /*{
      age: "unknown",
      dx: 99,
      pop: 169055
    },*/
  ],
  "1920": [
    {
      age: "0-4",
      dx: 21012, //8594+1406+677+504+345+6773+1322+597+476+318,
      pop: 3910042 + 3805194 //754699+734897+786844+763509+791693+770428+797257+780328+779549+756032
    },
    {
      age: "5-9",
      dx: 1885,
      pop: 3757878 + 3682128
    },
    {
      age: "10-14",
      dx: 1247,
      pop: 3483084 + 3417409
    },
    {
      age: "15-19",
      dx: 1821,
      pop: 3078576 + 3107135
    },
    {
      age: "20-24",
      dx: 2124,
      pop: 3050889 + 3190808
    },
    {
      age: "25-29",
      dx: 1706,
      pop: 3176040 + 3155085
    },
    {
      age: "30-34",
      dx: 1571,
      pop: 2958375 + 2800117
    },
    {
      age: "35-39",
      dx: 1961,
      pop: 2867053 + 2602938
    },
    {
      age: "40-44",
      dx: 3019,
      pop: 2353629 + 2204847
    },
    {
      age: "45-49",
      dx: 4735,
      pop: 2189634 + 1938197
    },
    {
      age: "50-54",
      dx: 6583,
      pop: 1829925 + 1656189
    },
    {
      age: "55-59",
      dx: 8335,
      pop: 1392008 + 1284533
    },
    {
      age: "60-64",
      dx: 11061,
      pop: 1154021 + 1067924
    },
    {
      age: "65-69",
      dx: 14417,
      pop: 786254 + 754292
    },
    {
      age: "70-74",
      dx: 17764,
      pop: 519714 + 527329
    },
    {
      age: "75-79",
      dx: 21646,
      pop: 314763 + 338659
    },
    {
      age: "80-84",
      dx: 25294, //80+ 13733
      pop: 139199 + 167437
    },
    {
      age: "85-89",
      dx: 25757,
      pop: 51254 + 66883
    }, //1706
    {
      age: "90-94",
      dx: 18660,
      pop: 11249 + 16651
    },
    {
      age: "95-99",
      dx: 7654,
      pop: 2126 + 3297
    },
    {
      age: "100",
      dx: 1580 + 169 + 6,
      pop: 314 + 502
    } //https://www.cdc.gov/nchs/data/lifetables/life19-20.pdf#page=60
    /*{
      age: "unknown",
      dx: 50,
      pop: 200584
    },*/
  ],
  "1930": [
    {
      age: "0-4",
      dx: 15408, //8594+1406+677+504+345+6773+1322+597+476+318,
      Lx: 934552,
      pop: 11444390 //https://www2.census.gov/library/publications/decennial/1930/population-volume-2/16440598v2ch11.pdf#page=14
    },
    {
      age: "5-9",
      dx: 1331,
      Lx: 919076,
      pop: 12607609
    },
    {
      age: "10-14",
      dx: 828,
      Lx: 914325,
      pop: 12004877
    },
    {
      age: "15-19",
      dx: 1151,
      Lx: 909342,
      pop: 11552118
    },
    {
      age: "20-24",
      dx: 1301,
      Lx: 903174,
      pop: 10870378
    },
    {
      age: "25-29",
      dx: 1195,
      Lx: 896913,
      pop: 9833608
    },
    {
      age: "30-34",
      dx: 1449,
      Lx: 890510,
      pop: 9120421
    },
    {
      age: "35-39",
      dx: 2179,
      Lx: 881633,
      pop: 9208645
    },
    {
      age: "40-44",
      dx: 3123,
      Lx: 868360,
      pop: 7990195
    },
    {
      age: "45-49",
      dx: 4095,
      Lx: 850395,
      pop: 7042279
    },
    {
      age: "50-54",
      dx: 5594,
      Lx: 826399,
      pop: 5975804
    },
    {
      age: "55-59",
      dx: 7790,
      Lx: 793265,
      pop: 4645677
    },
    {
      age: "60-64",
      dx: 10551,
      Lx: 747638,
      pop: 3751221
    },
    {
      age: "65-69",
      dx: 13993,
      Lx: 686485,
      pop: 2770605
    },
    {
      age: "70-74",
      dx: 18006,
      Lx: 606856,
      pop: 1950004
    },
    {
      age: "75-79",
      dx: 22755,
      Lx: 505188,
      pop: 1106390
    },
    {
      age: "80-84",
      dx: 27548, //80+ 13733
      Lx: 378924,
      pop: 534676
    },
    {
      age: "85-89",
      dx: 28608,
      Lx: 235931,
      pop: 205469
    }, //1706
    {
      age: "90-94",
      dx: 21323,
      Lx: 107604,
      pop: 51664
    },
    {
      age: "95-99",
      dx: 9332,
      Lx: 31131,
      pop: 11033
    },
    {
      age: "100",
      dx: 2150 + 272 + 14,
      Lx: 5346 + 506 + 20,
      pop: 3964
    } //https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7.html
    /*{
      age: "unknown",
      dx: 50,
      pop: 94022,
    },*/
  ],
  "1940": [
    {
      age: "0-4",
      dx: 11481, //https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7_1940.html
      pop: 10541524 //https://www2.census.gov/library/publications/decennial/1940/population-volume-4/33973538v4p1ch1.pdf#page=3
    },
    {
      age: "5-9",
      dx: 746,
      pop: 10684622
    },
    {
      age: "10-14",
      dx: 509,
      pop: 11745935
    },
    {
      age: "15-19",
      dx: 897,
      pop: 12333523
    },
    {
      age: "20-24",
      dx: 1153,
      pop: 11587835
    },
    {
      age: "25-29",
      dx: 1280,
      pop: 11096638
    },
    {
      age: "30-34",
      dx: 519,
      pop: 10242388
    },
    {
      age: "35-39",
      dx: 1774,
      pop: 9545377
    },
    {
      age: "40-44",
      dx: 2343,
      pop: 8787843
    },
    {
      age: "45-49",
      dx: 11481,
      pop: 8255225
    },
    {
      age: "50-54",
      dx: 4916,
      pop: 7256846
    },
    {
      age: "55-59",
      dx: 6892,
      pop: 5843865
    },
    {
      age: "60-64",
      dx: 9583,
      pop: 4728340
    },
    {
      age: "65-69",
      dx: 13480,
      pop: 3806657
    },
    {
      age: "70-74",
      dx: 18143,
      pop: 2569532
    },
    {
      age: "75-79",
      dx: 23122,
      pop: 1503982
    },
    {
      age: "80-84",
      dx: 28502,
      pop: 774391
    },
    {
      age: "85-89",
      dx: 27721,
      pop: 277012
    }, //1706
    {
      age: "90-94",
      dx: 24277,
      pop: 69598
    },
    {
      age: "95-99",
      dx: 11427,
      pop: 14463
    },
    {
      age: "100",
      dx: 2938 + 434 + 30,
      pop: 3679
    } //https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7.html
    /*{
      age: "unknown",
      dx: 50,
      pop: 94022,
    },*/
  ]
};
const yearlypop = {
  /*"1910": {
    "0": 2217342,
    "1": 1976472,
    "2": 2166492,
    "3": 2156141,
    "4": 2114917,
    "5": 2035398,
    "6": 2033834,
    "7": 1954226,
    "8": 1919357,
    "9": 1817817,
    "10": 1868583,
    "11": 1705081,
    "12": 1912061,
    "13": 1773343,
    "14": 1848122,
    "15": 1721225,
    "16": 1864711,
    "17": 1786240,
    "18": 1928306,
    "19": 1763061,
    "20": 1854622,
    "21": 1789404,
    "22": 1835060,
    "23": 1791996,
    "24": 1785902,
    "25": 1812275,
    "27": 1555451,
    "28": 1729763,
    "29": 1394120,
    "30": 1854608,
    "31": 1139000,
    "32": 1431468,
    "33": 1204247,
    "34": 1282862,
    "35": 1528717,
    "37": 1137317,
    "38": 1361874,
    "39": 1112588,
    "40": 1520085,
    "41": 833642,
    "42": 1116965,
    "43": 921500,
    "44": 868705,
    "45": 1108820,
    "46": 792288,
    "47": 786450,
    "48": 945829,
    "49": 837810,
    "50": 1142071,
    "51": 632213,
    "52": 804735,
    "53": 656024,
    "54": 665748,
    "55": 688971,
    "56": 601720,
    "57": 498348,
    "58": 632529,
    "59": 467383,
    "60": 683216,
    "61": 361503,
    "62": 436767,
    "63": 407117,
    "64": 378547,
    "67": 301476,
    "68": 305239,
    "69": 268563,
    "70": 338500,
    "71": 182424,
    "72": 223293,
    "73": 192900,
    "74": 176611
    /*"75": 196051,
    "76": 150075,
    "77": 117892,
    "78": 112200,
    "79": 91084,
    "80": 106718,
    "81": 58419,
    "82": 61317,
    "83": 50190,
    "84": 45110,
    "85": 39536,
    "86": 28159,
    "87": 23396,
    "88": 17724,
    "89": 14003,
    "90": 14949,
    "91": 6408,
    "92": 5422,
    "93": 3900,
    "94": 2794,
    "95": 3274,
    "96": 1409,
    "97": 970,
    "98": 1130,
    "99": 608,
    "100": 3555,
    unknown: 169055*
},*/
  "1915": {
    "0": 2317000,
    "1": 2295000,
    "2": 2270000,
    "3": 2246000,
    "4": 2219000,
    "5": 2191000,
    "6": 2163000,
    "7": 2135000,
    "8": 2106000,
    "9": 2079000,
    "10": 2051000,
    "11": 2024000,
    "12": 1998000,
    "13": 1970000,
    "14": 1943000,
    "15": 1916000,
    "16": 1889000,
    "17": 1871000,
    "18": 1871000,
    "19": 1881000,
    "20": 1887000,
    "21": 1895000,
    "22": 1893000,
    "23": 1881000,
    "24": 1860000,
    "25": 1839000,
    "26": 1820000,
    "27": 1788000,
    "28": 1741000,
    "29": 1685000,
    "30": 1626000,
    "31": 1563000,
    "32": 1518000,
    "33": 1499000,
    "34": 1501000,
    "35": 1496000,
    "36": 1495000,
    "37": 1475000,
    "38": 1423000,
    "39": 1352000,
    "40": 1283000,
    "41": 1213000,
    "42": 1157000,
    "43": 1126000,
    "44": 1110000,
    "45": 1089000,
    "46": 1069000,
    "47": 1046000,
    "48": 1018000,
    "49": 987000,
    "50": 956000,
    "51": 930000,
    "52": 894000,
    "53": 844000,
    "54": 785000,
    "55": 729000,
    "56": 669000,
    "57": 624000,
    "58": 598000,
    "59": 586000,
    "60": 572000,
    "61": 560000,
    "62": 541000,
    "63": 512000,
    "64": 475000,
    "65": 443000,
    "66": 411000,
    "67": 379000,
    "68": 348000,
    "69": 320000,
    "70": 294000,
    "71": 270000,
    "72": 249000,
    "73": 233000,
    "74": 220000
    //"75+": 1334000
  },
  "1916": {
    "0": 2325000,
    "1": 2308000,
    "2": 2291000,
    "3": 2270000,
    "4": 2248000,
    "5": 2223000,
    "6": 2199000,
    "7": 2172000,
    "8": 2146000,
    "9": 2118000,
    "10": 2088000,
    "11": 2063000,
    "12": 2034000,
    "13": 2000000,
    "14": 1965000,
    "15": 1932000,
    "16": 1896000,
    "17": 1872000,
    "18": 1869000,
    "19": 1880000,
    "20": 1886000,
    "21": 1893000,
    "22": 1894000,
    "23": 1884000,
    "24": 1866000,
    "25": 1851000,
    "26": 1835000,
    "27": 1807000,
    "28": 1762000,
    "29": 1704000,
    "30": 1647000,
    "31": 1583000,
    "32": 1539000,
    "33": 1523000,
    "34": 1525000,
    "35": 1523000,
    "36": 1524000,
    "37": 1505000,
    "38": 1452000,
    "39": 1379000,
    "40": 1308000,
    "41": 1236000,
    "42": 1179000,
    "43": 1148000,
    "44": 1134000,
    "45": 1116000,
    "46": 1099000,
    "47": 1077000,
    "48": 1046000,
    "49": 1012000,
    "50": 978000,
    "51": 948000,
    "52": 910000,
    "53": 859000,
    "54": 801000,
    "55": 745000,
    "56": 686000,
    "57": 640000,
    "58": 615000,
    "59": 602000,
    "60": 589000,
    "61": 576000,
    "62": 558000,
    "63": 527000,
    "64": 488000,
    "65": 453000,
    "66": 419000,
    "67": 388000,
    "68": 356000,
    "69": 325000,
    "70": 298000,
    "71": 275000,
    "72": 254000,
    "73": 238000,
    "74": 229000
    //"75+": 1368000
  },
  "1917": {
    "0": 2329000,
    "1": 2320000,
    "2": 2308000,
    "3": 2294000,
    "4": 2276000,
    "5": 2257000,
    "6": 2235000,
    "7": 2210000,
    "8": 2185000,
    "9": 2158000,
    "10": 2129000,
    "11": 2103000,
    "12": 2071000,
    "13": 2032000,
    "14": 1989000,
    "15": 1947000,
    "16": 1904000,
    "17": 1875000,
    "18": 1868000,
    "19": 1872000,
    "20": 1876000,
    "21": 1880000,
    "22": 1880000,
    "23": 1872000,
    "24": 1862000,
    "25": 1848000,
    "26": 1840000,
    "27": 1817000,
    "28": 1774000,
    "29": 1718000,
    "30": 1663000,
    "31": 1601000,
    "32": 1557000,
    "33": 1545000,
    "34": 1550000,
    "35": 1549000,
    "36": 1554000,
    "37": 1536000,
    "38": 1481000,
    "39": 1406000,
    "40": 1334000,
    "41": 1258000,
    "42": 1200000,
    "43": 1170000,
    "44": 1159000,
    "45": 1144000,
    "46": 1127000,
    "47": 1108000,
    "48": 1073000,
    "49": 1036000,
    "50": 999000,
    "51": 966000,
    "52": 925000,
    "53": 873000,
    "54": 817000,
    "55": 762000,
    "56": 704000,
    "57": 658000,
    "58": 632000,
    "59": 621000,
    "60": 606000,
    "61": 593000,
    "62": 575000,
    "63": 542000,
    "64": 501000,
    "65": 464000,
    "66": 430000,
    "67": 396000,
    "68": 361000,
    "69": 332000,
    "70": 305000,
    "71": 281000,
    "72": 261000,
    "73": 246000,
    "74": 237000
    //"75+": 1401000
  },
  "1918": {
    "0": 2332000,
    "1": 2330000,
    "2": 2324000,
    "3": 2316000,
    "4": 2304000,
    "5": 2288000,
    "6": 2270000,
    "7": 2250000,
    "8": 2226000,
    "9": 2199000,
    "10": 2171000,
    "11": 2141000,
    "12": 2107000,
    "13": 2064000,
    "14": 2016000,
    "15": 1971000,
    "16": 1925000,
    "17": 1882000,
    "18": 1843000,
    "19": 1808000,
    "20": 1771000,
    "21": 1734000,
    "22": 1711000,
    "23": 1709000,
    "24": 1717000,
    "25": 1725000,
    "26": 1738000,
    "27": 1735000,
    "28": 1708000,
    "29": 1667000,
    "30": 1626000,
    "31": 1582000,
    "32": 1553000,
    "33": 1549000,
    "34": 1562000,
    "35": 1567000,
    "36": 1578000,
    "37": 1563000,
    "38": 1509000,
    "39": 1431000,
    "40": 1358000,
    "41": 1279000,
    "42": 1219000,
    "43": 1191000,
    "44": 1184000,
    "45": 1170000,
    "46": 1158000,
    "47": 1137000,
    "48": 1103000,
    "49": 1060000,
    "50": 1020000,
    "51": 983000,
    "52": 940000,
    "53": 889000,
    "54": 833000,
    "55": 777000,
    "56": 720000,
    "57": 674000,
    "58": 650000,
    "59": 637000,
    "60": 623000,
    "61": 611000,
    "62": 591000,
    "63": 558000,
    "64": 515000,
    "65": 476000,
    "66": 440000,
    "67": 404000,
    "68": 370000,
    "69": 337000,
    "70": 311000,
    "71": 286000,
    "72": 267000,
    "73": 253000,
    "74": 247000
    //"75+": 1435000
  },
  "1919": {
    "0": 2299000,
    "1": 2308000,
    "2": 2312000,
    "3": 2312000,
    "4": 2305000,
    "5": 2297000,
    "6": 2282000,
    "7": 2263000,
    "8": 2242000,
    "9": 2214000,
    "10": 2186000,
    "11": 2158000,
    "12": 2121000,
    "13": 2071000,
    "14": 2015000,
    "15": 1959000,
    "16": 1903000,
    "17": 1860000,
    "18": 1839000,
    "19": 1833000,
    "20": 1824000,
    "21": 1816000,
    "22": 1811000,
    "23": 1810000,
    "24": 1810000,
    "25": 1811000,
    "26": 1815000,
    "27": 1805000,
    "28": 1770000,
    "29": 1717000,
    "30": 1667000,
    "31": 1611000,
    "32": 1574000,
    "33": 1566000,
    "34": 1576000,
    "35": 1582000,
    "36": 1592000,
    "37": 1577000,
    "38": 1521000,
    "39": 1443000,
    "40": 1369000,
    "41": 1291000,
    "42": 1231000,
    "43": 1204000,
    "44": 1198000,
    "45": 1187000,
    "46": 1174000,
    "47": 1153000,
    "48": 1118000,
    "49": 1072000,
    "50": 1030000,
    "51": 990000,
    "52": 945000,
    "53": 893000,
    "54": 840000,
    "55": 785000,
    "56": 730000,
    "57": 685000,
    "58": 661000,
    "59": 649000,
    "60": 634000,
    "61": 621000,
    "62": 602000,
    "63": 567000,
    "64": 522000,
    "65": 483000,
    "66": 444000,
    "67": 408000,
    "68": 372000,
    "69": 341000,
    "70": 313000,
    "71": 289000,
    "72": 271000,
    "73": 257000,
    "74": 254000
    //"75+": 1454000
  }
};

const frequency = (chosenfrequency, a, range) => {
  var frequency = null;
  if (!chosenfrequency && range) {
    if (a === 0) {
      frequency = ["5-14"];
    } else if (a === 1) {
      frequency = ["15-24"];
    } else if (a === 2) {
      frequency = ["25-39"];
    } else if (a === 3) {
      frequency = ["40-54"];
    } else if (a === 4) {
      frequency = ["55-69"];
    } else if (a === 5) {
      frequency = ["70-79"];
    } else if (a === 6) {
      frequency = ["80-100"];
    }
  } else if (chosenfrequency || range) {
    //high
    if (a === 0) {
      frequency = ["20-24"];
    } else if (a === 1) {
      frequency = ["25-29"];
    } else if (a === 2) {
      frequency = ["30-34"];
    } else if (a === 3) {
      frequency = ["35-39"];
    } else if (a === 4) {
      frequency = ["40-44"];
    } else if (a === 5) {
      frequency = ["45-49"];
    } else if (a === 6) {
      frequency = ["55-59"];
    }
  } else {
    //cohort
    if (a === 0) {
      frequency = ["5-9", "10-14"];
    } else if (a === 1) {
      frequency = ["15-19", "20-24"];
    } else if (a === 2) {
      frequency = ["25-29", "30-34", "35-39"];
    } else if (a === 3) {
      frequency = ["40-44", "45-49", "50-54"];
    } else if (a === 4) {
      frequency = ["55-59", "60-64", "65-69"];
    } else if (a === 5) {
      frequency = ["70-74", "75-79"];
    } else if (a === 6) {
      frequency = ["80-84", "85-89", "90-94", "95-99", "100"];
    }
  }
  return frequency;
};
class Spanish extends React.Component {
  constructor(props) {
    super(props);

    let date = [];
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
    let mZeroNJData = [];
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

    let yZeroNJDataAge = [];
    let yFiftyNJDataAge = [];
    let ySixtyFiveNJDataAge = [];
    let ySeventyFiveNJDataAge = [];
    let yEightyFiveNJDataAge = [];
    let yNinetyFiveNJDataAge = [];
    let yOneTenNJDataAge = [];

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
    const val = (d, p = 0 /*1000*/) => Math.round((d / 100000) * p); // *1000);
    const calculate = (x) => (x.deaths ? x.deaths : val(x.dx, x.pop));
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      //console.log(year);
      Object.values(usmortality)[i].forEach((x) => {
        if (!avgLifetime[x.age])
          avgLifetime[x.age] = { total: 0, length: 0, year };
        const state = {
          year,
          length: avgLifetime[x.age].length + 1,
          total:
            (avgLifetime[x.age].total + calculate(x)) / avgLifetime[x.age].total
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
    //console.log(usmortality);
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      Object.values(usmortality)[i].forEach((x) => {
        if (x.age === "5-9" || x.age === "10-14") {
          mZeroNJData.push([year, calculate(x)]);
        } else if (x.age === "15-19" || x.age === "20-24") {
          mFiftyNJData.push([year, calculate(x)]);
        } else if (
          x.age === "25-29" ||
          x.age === "30-34" ||
          x.age === "35-39"
        ) {
          mSixtyFiveNJData.push([year, calculate(x)]);
        } else if (
          x.age === "40-44" ||
          x.age === "45-49" ||
          x.age === "50-54"
        ) {
          mSeventyFiveNJData.push([year, calculate(x)]);
        } else if (x.age === "55-59" || x.age === "60-64") {
          mEightyFiveNJData.push([year, calculate(x)]);
        } else if (
          x.age === "65-69" ||
          x.age === "70-74" ||
          x.age === "75-79"
        ) {
          mNinetyFiveNJData.push([year, calculate(x)]);
        } else if (
          x.age === "80-84" ||
          x.age === "85-89" ||
          x.age === "90-94" ||
          x.age === "95-99" ||
          x.age === "100"
        ) {
          mOneTenNJData.push([year, calculate(x)]);
        }
      });
    });
    Object.keys(yearlypop).forEach((year, i) => {
      noData.push([year, 0]);
      date.push(year);
      var yearSet = null;
      Object.keys(usmortality).forEach((y, i) => {
        if (y - year > -1 && y - year < 5) {
          yearSet = Object.values(usmortality)[i];
        }
      });
      if (!yearSet) return; // console.log(yearSet);

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
        if (age === "0") {
          yZeroNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (
          age === "1-4" ||
          age === "5-9" ||
          age === "10-14" ||
          age === "15-19" ||
          age === "20-24" ||
          age === "25-29" ||
          age === "30-34" ||
          age === "35-39" ||
          age === "40-44" ||
          age === "45-49"
        ) {
          yFiftyNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (age === "50-54" || age === "55-59" || age === "60-64") {
          ySixtyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (age === "65-69" || age === "70-74") {
          ySeventyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (age === "75-79" || age === "80-84") {
          yEightyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (age === "85-89" || age === "90-94") {
          yNinetyFiveNJDataAge.push([year, Object.values(obj)[i]]);
        } else if (
          age === "95-99" ||
          age === "100-104" ||
          age === "105-109" ||
          age === "110"
        ) {
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
    date.sort((a, b) => a - b);
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
      highlifetime,
      averageLifetimeData,
      date,
      cappop,
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
      chosenRate: true,
      chosenfrequency: true
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
          let mFiftyNJData = [];
          let mSixtyFiveNJData = [];
          let mSeventyFiveNJData = [];
          let mEightyFiveNJData = [];
          let mNinetyFiveNJData = [];
          let mOneTenNJData = [];

          let yZeroNJDataAge = [];
          let yFiftyNJDataAge = [];
          let ySixtyFiveNJDataAge = [];
          let ySeventyFiveNJDataAge = [];
          let yEightyFiveNJDataAge = [];
          let yNinetyFiveNJDataAge = [];
          let yOneTenNJDataAge = [];

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
          Object.keys(usmortality).forEach((yearSet, i) => {
            const year = yearSet; //Number(yearSet.split("-")[1]);
            noData.push([year, 0]);
            date.push(year);
            /*const thisdecade = popdata.find(
          (x) => x.year - year < 5 && x.year - year > -5
        );*/
            const val = (d, p = 0 /*1000*/, rate = 1) =>
              Math.round(((d / 100000) * p) / rate); // *1000);
            Object.values(usmortality)[i].forEach((x) => {
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJDataAge.push([year, chosenRate ? x.pop : x.pop]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJDataAge.push([year, chosenRate ? x.pop / 10 : x.pop]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJDataAge.push([
                  year,
                  chosenRate ? x.pop / 3 : x.pop
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJDataAge.push([
                  year,
                  chosenRate ? x.pop / 2 : x.pop
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJDataAge.push([
                  year,
                  chosenRate ? x.pop / 2 : x.pop
                ]);
              }
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJData.push([year, chosenRate ? x.pop : val(x.dx, x.pop)]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJData.push([
                  year,
                  chosenRate ? val(x.dx, x.pop, 10) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJData.push([
                  year,
                  chosenRate ? val(x.dx, x.pop, 3) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJData.push([
                  year,
                  chosenRate ? val(x.dx, x.pop, 2) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJData.push([
                  year,
                  chosenRate ? val(x.dx, x.pop, 2) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 5).includes(x.age)) {
                mNinetyFiveNJData.push([
                  year,
                  chosenRate ? val(x.dx, x.pop, 2) : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 6).includes(x.age)) {
                mOneTenNJData.push([
                  year,
                  chosenRate ? val(x.dx, x.pop, 4) : val(x.dx, x.pop)
                ]);
              }
            });
          });
          Object.keys(yearlypop).forEach((year, i) => {
            noData.push([year, 0]);
            date.push(year);
            var yearSet = null;
            Object.keys(usmortality).forEach((y, i) => {
              if (y - year > -1 && y - year < 5) {
                yearSet = Object.values(usmortality)[i];
              }
            });
            if (!yearSet) return; // console.log(yearSet);

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
              if (frequency(chosenfrequency, 0).includes(age)) {
                yZeroNJDataAge.push([year, Object.values(obj)[i]]);
              } else if (frequency(chosenfrequency, 1).includes(age)) {
                yFiftyNJDataAge.push([year, Object.values(obj)[i]]);
              } else if (frequency(chosenfrequency, 2).includes(age)) {
                ySixtyFiveNJDataAge.push([year, Object.values(obj)[i]]);
              } else if (frequency(chosenfrequency, 3).includes(age)) {
                ySeventyFiveNJDataAge.push([year, Object.values(obj)[i]]);
              } else if (frequency(chosenfrequency, 4).includes(age)) {
                yEightyFiveNJDataAge.push([year, Object.values(obj)[i]]);
              } else if (frequency(chosenfrequency, 5).includes(age)) {
                yNinetyFiveNJDataAge.push([year, Object.values(obj)[i]]);
              } else if (frequency(chosenfrequency, 6).includes(age)) {
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
            ...mortalEightyFiveNJAge
          );
          date.sort((a, b) => a - b);
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
            highDeaths
          });
        }
      );
  };
  render() {
    const yaxis = this.state.yAxis; //this.state.yaxis ? this.state.yAxis : this.state.cappop;
    const { chosenRate, lowDate } = this.state;
    const coefficience = (this.props.lastWidth - 80) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * coefficience,
      0
    ]);
    const lineheight = this.props.lineheight ? this.props.lineheight : 150;
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
      top: "20px",
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
    return (
      <div
        style={{
          width: "100%",
          height: lineheight + 80,
          position: "relative",
          backgroundColor: "rgb(190,150,180)"
        }}
      >
        <div style={labelstyle}>
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
            {chosenRate
              ? "population per 5yr "
              : `highest accu yearly mortality `}
          </div>
          <div>
            {shortNumber(Math.round(this.state.highDeaths /* / 5*/))}
            <br />
            scale{" "}
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
            position: "absolute"
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
        <div
          style={{
            marginTop: "30px",
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
      </div>
    );
  }
}

export default Spanish;
