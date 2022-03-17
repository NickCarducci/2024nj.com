import React from "react";
const bachelors = [
  {
    title: "Total, all occupations",
    employment: "153,533.8",
    none: 8,
    hs: 23.6,
    some: 20.2,
    ass: 9.6,
    uni: 23.7,
    master: 10.6,
    phd: 4.4
  },
  {
    title: "Retail salespersons",
    employment: "3,835.0",
    none: 6.3,
    hs: 29.6,
    some: 27.7,
    ass: 10.2,
    uni: 21.5,
    master: 3.8,
    phd: 0.7
  },
  {
    title: "Home health and personal care aides",
    employment: "3,470.7",
    none: 16.4,
    hs: 35.8,
    some: 25.6,
    ass: 9.1,
    uni: 10.1,
    master: 2.3,
    phd: 0.7
  },
  {
    title: "Fast food and counter workers",
    employment: "3,455.5",
    none: 14.9,
    hs: 38,
    some: 25.8,
    ass: 7.9,
    uni: 11.2,
    master: 1.9,
    phd: 0.4
  },
  {
    title: "Cashiers",
    employment: "3,379.1",
    none: 14.3,
    hs: 41.1,
    some: 24.6,
    ass: 7.7,
    uni: 10.3,
    master: 1.8,
    phd: 0.3
  },
  {
    title: "Registered nurses",
    employment: "3,080.1",
    none: 0.4,
    hs: 0.9,
    some: 3.8,
    ass: 29.9,
    uni: 52.4,
    master: 10.2,
    phd: 2.3
  },
  {
    title: "Office clerks, general",
    employment: "2,933.9",
    none: 3.1,
    hs: 29.3,
    some: 31.3,
    ass: 13.2,
    uni: 18.4,
    master: 3.9,
    phd: 0.8
  },
  {
    title: "Customer service representatives",
    employment: "2,923.4",
    none: 3.9,
    hs: 26.4,
    some: 30,
    ass: 12,
    uni: 22.9,
    master: 4.2,
    phd: 0.6
  },
  {
    title: "Laborers and freight, stock, and material movers, hand",
    employment: "2,821.7",
    none: 17.1,
    hs: 47.4,
    some: 21.4,
    ass: 6.5,
    uni: 6.4,
    master: 0.9,
    phd: 0.2
  },
  {
    title: "General and operations managers",
    employment: "2,411.9",
    none: 2.6,
    hs: 17,
    some: 24.8,
    ass: 9.8,
    uni: 33,
    master: 11.1,
    phd: 1.6
  },
  {
    title: "Stockers and order fillers",
    employment: "2,223.0",
    none: 12.7,
    hs: 43,
    some: 24.7,
    ass: 8.3,
    uni: 9.5,
    master: 1.5,
    phd: 0.4
  },
  {
    title: "Janitors and cleaners, except maids and housekeeping cleaners",
    employment: "2,217.0",
    none: 23.1,
    hs: 45,
    some: 18.7,
    ass: 6.5,
    uni: 5.5,
    master: 1.1,
    phd: 0.3
  },
  {
    title:
      "Secretaries and administrative assistants, except legal, medical, and executive",
    employment: "2,053.5",
    none: 2.5,
    hs: 26.5,
    some: 31.2,
    ass: 14.8,
    uni: 20.5,
    master: 3.9,
    phd: 0.6
  },
  {
    title: "Waiters and waitresses",
    employment: "2,023.2",
    none: 13.3,
    hs: 33.2,
    some: 28.4,
    ass: 9.1,
    uni: 13.7,
    master: 1.9,
    phd: 0.4
  },
  {
    title: "Heavy and tractor-trailer truck drivers",
    employment: "1,951.6",
    none: 15.6,
    hs: 47.4,
    some: 23.1,
    ass: 6.6,
    uni: 6.1,
    master: 1,
    phd: 0.2
  },
  {
    title:
      "Software developers and software quality assurance analysts and testers",
    employment: "1,847.9",
    none: 0.4,
    hs: 2,
    some: 7.4,
    ass: 4.2,
    uni: 51,
    master: 30.8,
    phd: 4.3
  },
  {
    title:
      "Project management specialists and business operations specialists, all other",
    employment: "1,777.3",
    none: 1,
    hs: 7.6,
    some: 14.6,
    ass: 7.5,
    uni: 44,
    master: 22.4,
    phd: 3
  },
  {
    title: "Bookkeeping, accounting, and auditing clerks",
    employment: "1,620.0",
    none: 3.7,
    hs: 26.3,
    some: 37.1,
    ass: 12.3,
    uni: 17.1,
    master: 3.1,
    phd: 0.5
  },
  {
    title:
      "First-line supervisors of office and administrative support workers",
    employment: "1,487.3",
    none: 2.5,
    hs: 20.7,
    some: 27.4,
    ass: 12.9,
    uni: 27.4,
    master: 7.8,
    phd: 1.3
  },
  {
    title: "Maintenance and repair workers, general",
    employment: "1,444.1",
    none: 11.6,
    hs: 41.2,
    some: 26.4,
    ass: 12.1,
    uni: 7.4,
    master: 1,
    phd: 0.2
  },
  {
    title: "Nursing assistants",
    employment: "1,396.7",
    none: 10,
    hs: 36.6,
    some: 32.9,
    ass: 11.4,
    uni: 7.3,
    master: 1.1,
    phd: 0.6
  },
  {
    title: "Accountants and auditors",
    employment: "1,392.2",
    none: 0,
    hs: 3,
    some: 5.5,
    ass: 8,
    uni: 57,
    master: 23.4,
    phd: 3
  },
  {
    title: "First-line supervisors of retail sales workers",
    employment: "1,390.6",
    none: 5.6,
    hs: 29.1,
    some: 28.4,
    ass: 10.2,
    uni: 21.6,
    master: 4.2,
    phd: 1
  },
  {
    title: "Elementary school teachers, except special education",
    employment: "1,371.1",
    none: 0,
    hs: 0,
    some: 3.1,
    ass: 2.3,
    uni: 43.6,
    master: 46.8,
    phd: 4.2
  },
  {
    title:
      "Sales representatives, wholesale and manufacturing, except technical and scientific products",
    employment: "1,327.5",
    none: 2.9,
    hs: 17,
    some: 22.5,
    ass: 8.8,
    uni: 40.6,
    master: 7.4,
    phd: 0.9
  },
  {
    title: "Teaching assistants, except postsecondary",
    employment: "1,306.3",
    none: 4.2,
    hs: 25.7,
    some: 24.4,
    ass: 14.4,
    uni: 22.8,
    master: 7.1,
    phd: 1.4
  },
  {
    title: "Construction laborers",
    employment: "1,285.2",
    none: 32,
    hs: 40.1,
    some: 16.3,
    ass: 4.9,
    uni: 5.4,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Miscellaneous assemblers and fabricators",
    employment: "1,262.8",
    none: 16.4,
    hs: 46.1,
    some: 23,
    ass: 7.6,
    uni: 5.9,
    master: 0.8,
    phd: 0.2
  },
  {
    title: "Maids and housekeeping cleaners",
    employment: "1,212.8",
    none: 35.1,
    hs: 40.8,
    some: 14.1,
    ass: 4.4,
    uni: 4.6,
    master: 0.7,
    phd: 0.3
  },
  {
    title: "Cooks, restaurant",
    employment: "1,153.2",
    none: 27.3,
    hs: 41.9,
    some: 18.5,
    ass: 6.1,
    uni: 5.4,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Landscaping and groundskeeping workers",
    employment: "1,117.8",
    none: 35.5,
    hs: 36,
    some: 15.6,
    ass: 4.8,
    uni: 6.6,
    master: 1.2,
    phd: 0.2
  },
  {
    title: "Security guards",
    employment: "1,059.0",
    none: 5.9,
    hs: 35.4,
    some: 30.4,
    ass: 10.9,
    uni: 13.9,
    master: 3.1,
    phd: 0.5
  },
  {
    title: "Light truck drivers",
    employment: "1,035.8",
    none: 15.6,
    hs: 47.4,
    some: 23.1,
    ass: 6.6,
    uni: 6.1,
    master: 1,
    phd: 0.2
  },
  {
    title: "Receptionists and information clerks",
    employment: "1,016.2",
    none: 3.5,
    hs: 33.1,
    some: 32.5,
    ass: 13.5,
    uni: 14.5,
    master: 2.4,
    phd: 0.5
  },
  {
    title:
      "Secondary school teachers, except special and career/technical education",
    employment: "998.8",
    none: 0,
    hs: 0,
    some: 2.2,
    ass: 1.5,
    uni: 40.2,
    master: 51,
    phd: 5
  },
  {
    title: "Childcare workers",
    employment: "992.4",
    none: 11.7,
    hs: 32,
    some: 25.4,
    ass: 11.3,
    uni: 15.9,
    master: 3.1,
    phd: 0.6
  },
  {
    title:
      "Sales representatives of services, except advertising, insurance, financial services, and travel",
    employment: "985.2",
    none: 2,
    hs: 13.6,
    some: 21.6,
    ass: 8,
    uni: 44.3,
    master: 9.4,
    phd: 1.1
  },
  {
    title: "Carpenters",
    employment: "942.9",
    none: 25.8,
    hs: 42,
    some: 19.1,
    ass: 5.6,
    uni: 6.3,
    master: 0.8,
    phd: 0.3
  },
  {
    title: "First-line supervisors of food preparation and serving workers",
    employment: "915.4",
    none: 11.3,
    hs: 36.3,
    some: 27.9,
    ass: 9.6,
    uni: 12.8,
    master: 1.7,
    phd: 0.4
  },
  {
    title: "Management analysts",
    employment: "907.6",
    none: 0.8,
    hs: 4.5,
    some: 11.1,
    ass: 4.9,
    uni: 43,
    master: 29.1,
    phd: 6.6
  },
  {
    title: "Farmers, ranchers, and other agricultural managers",
    employment: "888.3",
    none: 10.8,
    hs: 32.5,
    some: 19.6,
    ass: 11.3,
    uni: 21.3,
    master: 3.6,
    phd: 1
  },
  {
    title: "Food preparation workers",
    employment: "821.2",
    none: 24,
    hs: 40,
    some: 20.4,
    ass: 6.7,
    uni: 7.4,
    master: 1.2,
    phd: 0.3
  },
  {
    title: "Lawyers",
    employment: "804.2",
    none: 0.2,
    hs: 0.5,
    some: 0.7,
    ass: 0.4,
    uni: 5.5,
    master: 4,
    phd: 88.6
  },
  {
    title: "Market research analysts and marketing specialists",
    employment: "740.9",
    none: 0.6,
    hs: 5,
    some: 10.5,
    ass: 4.6,
    uni: 54.2,
    master: 22.3,
    phd: 2.9
  },
  {
    title: "Shipping, receiving, and inventory clerks",
    employment: "734.9",
    none: 11.9,
    hs: 43.6,
    some: 25.9,
    ass: 8,
    uni: 9,
    master: 1.4,
    phd: 0.3
  },
  {
    title: "Electricians",
    employment: "729.6",
    none: 7.7,
    hs: 37.3,
    some: 31.6,
    ass: 15.5,
    uni: 6.7,
    master: 1,
    phd: 0.2
  },
  {
    title: "Medical assistants",
    employment: "720.9",
    none: 2,
    hs: 20.3,
    some: 39.9,
    ass: 24.6,
    uni: 10.2,
    master: 1.9,
    phd: 1.2
  },
  {
    title:
      "Passenger vehicle drivers, except bus drivers, transit and intercity",
    employment: "707.4",
    none: 10.6,
    hs: 36.2,
    some: 26.8,
    ass: 8.7,
    uni: 13.5,
    master: 3.2,
    phd: 0.9
  },
  {
    title: "Automotive service technicians and mechanics",
    employment: "703.8",
    none: 16.4,
    hs: 43.5,
    some: 23.2,
    ass: 12.5,
    uni: 4,
    master: 0.4,
    phd: 0.2
  },
  {
    title:
      "First-line supervisors of construction trades and extraction workers",
    employment: "692.2",
    none: 15.5,
    hs: 42.8,
    some: 23.6,
    ass: 6.9,
    uni: 9.2,
    master: 1.6,
    phd: 0.3
  },
  {
    title: "Licensed practical and licensed vocational nurses",
    employment: "688.1",
    none: 1.4,
    hs: 22.2,
    some: 53.7,
    ass: 17.7,
    uni: 3.9,
    master: 0.7,
    phd: 0.5
  },
  {
    title: "Financial managers",
    employment: "681.7",
    none: 1,
    hs: 10.1,
    some: 17.5,
    ass: 7.3,
    uni: 42.1,
    master: 19.6,
    phd: 2.3
  },
  {
    title: "Human resources specialists",
    employment: "674.8",
    none: 1,
    hs: 8.6,
    some: 17.6,
    ass: 8.1,
    uni: 45.7,
    master: 17,
    phd: 2
  },
  {
    title: "Police and sheriff's patrol officers",
    employment: "671.2",
    none: 0.7,
    hs: 12.4,
    some: 30.3,
    ass: 17.1,
    uni: 32.1,
    master: 6.5,
    phd: 0.8
  },
  {
    title: "Computer user support specialists",
    employment: "654.8",
    none: 0.9,
    hs: 10.4,
    some: 24.5,
    ass: 15.5,
    uni: 37.1,
    master: 10.4,
    phd: 1.2
  },
  {
    title: "Industrial truck and tractor operators",
    employment: "631.6",
    none: 19.6,
    hs: 50.8,
    some: 20.5,
    ass: 5.4,
    uni: 3.1,
    master: 0.4,
    phd: 0.2
  },
  {
    title: "First-line supervisors of production and operating workers",
    employment: "616.8",
    none: 10,
    hs: 38.5,
    some: 25.6,
    ass: 9.1,
    uni: 13.2,
    master: 3.1,
    phd: 0.6
  },
  {
    title: "Medical secretaries and administrative assistants",
    employment: "611.2",
    none: 3.3,
    hs: 22.8,
    some: 35.9,
    ass: 17.5,
    uni: 17,
    master: 2.8,
    phd: 0.7
  },
  {
    title: "Computer systems analysts",
    employment: "607.8",
    none: 0.4,
    hs: 5.2,
    some: 12.7,
    ass: 8,
    uni: 47.5,
    master: 23.4,
    phd: 2.8
  },
  {
    title: "Packers and packagers, hand",
    employment: "599.7",
    none: 30.5,
    hs: 41,
    some: 16.6,
    ass: 5.5,
    uni: 5.3,
    master: 0.8,
    phd: 0.4
  },
  {
    title:
      "Middle school teachers, except special and career/technical education",
    employment: "598.5",
    none: 0,
    hs: 0,
    some: 3.1,
    ass: 2.3,
    uni: 43.6,
    master: 46.8,
    phd: 4.2
  },
  {
    title:
      "Personal service managers, all other; entertainment and recreation managers, except gambling; and managers, all other",
    employment: "573.0",
    none: 3,
    hs: 14.1,
    some: 17.5,
    ass: 7.5,
    uni: 36.1,
    master: 18.2,
    phd: 3.5
  },
  {
    title: "Hairdressers, hairstylists, and cosmetologists",
    employment: "569.6",
    none: 6.1,
    hs: 43.7,
    some: 31.7,
    ass: 11.4,
    uni: 5.8,
    master: 1,
    phd: 0.3
  },
  {
    title: "Inspectors, testers, sorters, samplers, and weighers",
    employment: "557.9",
    none: 9,
    hs: 36.3,
    some: 26,
    ass: 11.4,
    uni: 13.6,
    master: 3.1,
    phd: 0.7
  },
  {
    title: "Cooks, fast food",
    employment: "547.8",
    none: 27.3,
    hs: 41.9,
    some: 18.5,
    ass: 6.1,
    uni: 5.4,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Executive secretaries and executive administrative assistants",
    employment: "538.8",
    none: 0.9,
    hs: 15.9,
    some: 27.8,
    ass: 14.6,
    uni: 32.9,
    master: 7.1,
    phd: 0.8
  },
  {
    title: "Substitute teachers, short-term",
    employment: "536.9",
    none: 2,
    hs: 10.9,
    some: 17.7,
    ass: 8.6,
    uni: 36,
    master: 20.2,
    phd: 4.6
  },
  {
    title:
      "First-line supervisors of transportation and material-moving workers, except aircraft cargo handling supervisors",
    employment: "536.1",
    none: 7,
    hs: 35.6,
    some: 29.6,
    ass: 10.8,
    uni: 13.5,
    master: 2.9,
    phd: 0.5
  },
  {
    title: "Farmworkers and laborers, crop, nursery, and greenhouse",
    employment: "526.3",
    none: 49.9,
    hs: 28,
    some: 10.6,
    ass: 4,
    uni: 6.2,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Insurance sales agents",
    employment: "507.2",
    none: 1.1,
    hs: 15,
    some: 25.6,
    ass: 10.5,
    uni: 39.5,
    master: 7.1,
    phd: 1.3
  },
  {
    title: "Bartenders",
    employment: "492.3",
    none: 5.4,
    hs: 27.3,
    some: 34.1,
    ass: 10.8,
    uni: 19.7,
    master: 2.2,
    phd: 0.5
  },
  {
    title:
      "Financial and investment analysts, financial risk specialists, and financial specialists, all other",
    employment: "492.1",
    none: 0.6,
    hs: 4.1,
    some: 8.2,
    ass: 3.5,
    uni: 49.7,
    master: 30.3,
    phd: 3.6
  },
  {
    title: "First-line supervisors of mechanics, installers, and repairers",
    employment: "484.1",
    none: 6.8,
    hs: 37.5,
    some: 28,
    ass: 13,
    uni: 11.5,
    master: 3,
    phd: 0.3
  },
  {
    title: "Computer and information systems managers",
    employment: "482.0",
    none: 0.4,
    hs: 4.1,
    some: 13.1,
    ass: 7.7,
    uni: 45.8,
    master: 25.9,
    phd: 2.9
  },
  {
    title: "Plumbers, pipefitters, and steamfitters",
    employment: "469.9",
    none: 14.5,
    hs: 46.7,
    some: 25.4,
    ass: 7.8,
    uni: 4.5,
    master: 0.8,
    phd: 0.3
  },
  {
    title: "Preschool teachers, except special education",
    employment: "469.6",
    none: 1.5,
    hs: 12.5,
    some: 20.5,
    ass: 13.5,
    uni: 35.3,
    master: 15.4,
    phd: 1.2
  },
  {
    title: "Securities, commodities, and financial services sales agents",
    employment: "466.3",
    none: 0.9,
    hs: 7.6,
    some: 14.3,
    ass: 5.4,
    uni: 49.5,
    master: 18.8,
    phd: 3.5
  },
  {
    title: "Billing and posting clerks",
    employment: "458.5",
    none: 2.7,
    hs: 28.5,
    some: 32.3,
    ass: 15.3,
    uni: 17,
    master: 3.5,
    phd: 0.8
  },
  {
    title: "Driver/sales workers",
    employment: "458.2",
    none: 15.6,
    hs: 47.4,
    some: 23.1,
    ass: 6.6,
    uni: 6.1,
    master: 1,
    phd: 0.2
  },
  {
    title: "Construction managers",
    employment: "448.0",
    none: 6.6,
    hs: 26.6,
    some: 22.9,
    ass: 9.1,
    uni: 27.9,
    master: 5.9,
    phd: 1
  },
  {
    title: "Computer occupations, all other",
    employment: "442.2",
    none: 1,
    hs: 7.7,
    some: 16.7,
    ass: 9.9,
    uni: 43.1,
    master: 19.6,
    phd: 1.9
  },
  {
    title: "Buyers and purchasing agents",
    employment: "439.0",
    none: 2.8,
    hs: 19.9,
    some: 24.1,
    ass: 10.2,
    uni: 34.2,
    master: 8,
    phd: 0.8
  },
  {
    title: "Tellers",
    employment: "432.5",
    none: 1.3,
    hs: 32.8,
    some: 32.8,
    ass: 13.5,
    uni: 17.4,
    master: 1.9,
    phd: 0.3
  },
  {
    title: "Medical and health services managers",
    employment: "429.8",
    none: 1.3,
    hs: 8.4,
    some: 15.1,
    ass: 11.6,
    uni: 30.9,
    master: 25.3,
    phd: 7.4
  },
  {
    title: "Pharmacy technicians",
    employment: "419.3",
    none: 1.1,
    hs: 27.3,
    some: 35.5,
    ass: 16.9,
    uni: 15.8,
    master: 2.4,
    phd: 1
  },
  {
    title: "Correctional officers and jailers",
    employment: "418.5",
    none: 0.9,
    hs: 30.9,
    some: 34.6,
    ass: 14.5,
    uni: 16,
    master: 2.8,
    phd: 0.4
  },
  {
    title: "Welders, cutters, solderers, and brazers",
    employment: "418.2",
    none: 18.6,
    hs: 46.3,
    some: 23.4,
    ass: 8.7,
    uni: 2.5,
    master: 0.4,
    phd: 0.2
  },
  {
    title: "Social and human service assistants",
    employment: "417.6",
    none: 2.2,
    hs: 14.1,
    some: 21.5,
    ass: 12,
    uni: 34.6,
    master: 14,
    phd: 1.6
  },
  {
    title: "Physicians, all other; and ophthalmologists, except pediatric",
    employment: "412.1",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title: "Real estate sales agents",
    employment: "408.9",
    none: 1.3,
    hs: 12.2,
    some: 25.7,
    ass: 10.1,
    uni: 38.5,
    master: 10,
    phd: 2.1
  },
  {
    title: "Dishwashers",
    employment: "408.5",
    none: 36.7,
    hs: 42.3,
    some: 13.1,
    ass: 3.7,
    uni: 3.6,
    master: 0.4,
    phd: 0.2
  },
  {
    title: "Operating engineers and other construction equipment operators",
    employment: "408.5",
    none: 20.4,
    hs: 53,
    some: 18,
    ass: 5.7,
    uni: 2.5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Sales managers",
    employment: "397.9",
    none: 1.3,
    hs: 10.8,
    some: 19.6,
    ass: 9,
    uni: 46.2,
    master: 11.9,
    phd: 1.2
  },
  {
    title: "Cooks, institution and cafeteria",
    employment: "394.6",
    none: 27.3,
    hs: 41.9,
    some: 18.5,
    ass: 6.1,
    uni: 5.4,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Industrial machinery mechanics",
    employment: "391.8",
    none: 9.3,
    hs: 42.5,
    some: 26.8,
    ass: 14.5,
    uni: 5.9,
    master: 0.9,
    phd: 0.2
  },
  {
    title: "Dining room and cafeteria attendants and bartender helpers",
    employment: "389.0",
    none: 22.1,
    hs: 42.5,
    some: 19.4,
    ass: 7,
    uni: 7.8,
    master: 1,
    phd: 0.3
  },
  {
    title: "Tutors and teachers and instructors, all other",
    employment: "385.0",
    none: 1.9,
    hs: 9.9,
    some: 16.6,
    ass: 8.4,
    uni: 37.1,
    master: 21.5,
    phd: 4.7
  },
  {
    title:
      "Heating, air conditioning, and refrigeration mechanics and installers",
    employment: "380.4",
    none: 10.6,
    hs: 40.1,
    some: 29.1,
    ass: 14.4,
    uni: 4.8,
    master: 0.9,
    phd: 0.2
  },
  {
    title: "First-line supervisors of non-retail sales workers",
    employment: "376.4",
    none: 5.1,
    hs: 21,
    some: 22.5,
    ass: 9.1,
    uni: 31.7,
    master: 9.2,
    phd: 1.4
  },
  {
    title: "Counter and rental clerks",
    employment: "372.1",
    none: 7.3,
    hs: 35.1,
    some: 27.8,
    ass: 8.8,
    uni: 17.8,
    master: 2.8,
    phd: 0.5
  },
  {
    title: "Packaging and filling machine operators and tenders",
    employment: "371.8",
    none: 32.6,
    hs: 41,
    some: 15.5,
    ass: 4.8,
    uni: 5,
    master: 0.9,
    phd: 0.2
  },
  {
    title: "Cleaners of vehicles and equipment",
    employment: "367.2",
    none: 29.2,
    hs: 43.2,
    some: 16.7,
    ass: 5.1,
    uni: 4.8,
    master: 0.8,
    phd: 0.2
  },
  {
    title: "Production, planning, and expediting clerks",
    employment: "365.7",
    none: 2.4,
    hs: 23,
    some: 28,
    ass: 11.7,
    uni: 26.7,
    master: 7.3,
    phd: 0.8
  },
  {
    title: "Property, real estate, and community association managers",
    employment: "364.1",
    none: 3.9,
    hs: 19,
    some: 24,
    ass: 9.9,
    uni: 31.7,
    master: 9,
    phd: 2.4
  },
  {
    title: "Machinists",
    employment: "363.0",
    none: 9.7,
    hs: 44.6,
    some: 28.5,
    ass: 12.7,
    uni: 4.2,
    master: 0.3,
    phd: 0.2
  },
  {
    title: "Recreation workers",
    employment: "354.1",
    none: 3.9,
    hs: 24.7,
    some: 25.6,
    ass: 9.7,
    uni: 27.6,
    master: 7.3,
    phd: 1.2
  },
  {
    title: "Painters, construction and maintenance",
    employment: "350.8",
    none: 34.1,
    hs: 39.2,
    some: 15.6,
    ass: 4.5,
    uni: 5.3,
    master: 1.1,
    phd: 0.2
  },
  {
    title: "Network and computer systems administrators",
    employment: "350.3",
    none: 0.7,
    hs: 6.2,
    some: 22,
    ass: 16.5,
    uni: 41.2,
    master: 12.1,
    phd: 1.3
  },
  {
    title: "Compliance officers",
    employment: "348.7",
    none: 1.2,
    hs: 8.7,
    some: 16.4,
    ass: 8.9,
    uni: 40.5,
    master: 18.1,
    phd: 6.2
  },
  {
    title: "Paralegals and legal assistants",
    employment: "345.6",
    none: 0.7,
    hs: 10.6,
    some: 22.8,
    ass: 19.6,
    uni: 36,
    master: 7.2,
    phd: 3.1
  },
  {
    title: "Self-enrichment teachers",
    employment: "336.7",
    none: 2,
    hs: 10.9,
    some: 17.7,
    ass: 8.6,
    uni: 36,
    master: 20.2,
    phd: 4.6
  },
  {
    title: "Clinical laboratory technologists and technicians",
    employment: "335.5",
    none: 1.3,
    hs: 10.3,
    some: 21.7,
    ass: 18.6,
    uni: 38,
    master: 6.9,
    phd: 3.3
  },
  {
    title: "Child, family, and school social workers",
    employment: "335.3",
    none: 1.7,
    hs: 5.6,
    some: 9.8,
    ass: 6.3,
    uni: 38.3,
    master: 36.6,
    phd: 1.7
  },
  {
    title:
      "Medical dosimetrists, medical records specialists, and health technologists and technicians, all other",
    employment: "335.0",
    none: 1.4,
    hs: 14.8,
    some: 26,
    ass: 19.7,
    uni: 24.5,
    master: 11.1,
    phd: 2.4
  },
  {
    title: "Claims adjusters, examiners, and investigators",
    employment: "333.8",
    none: 1,
    hs: 13.9,
    some: 23.6,
    ass: 11.1,
    uni: 40.5,
    master: 7.9,
    phd: 2
  },
  {
    title: "Hosts and hostesses, restaurant, lounge, and coffee shop",
    employment: "333.6",
    none: 10.7,
    hs: 32.5,
    some: 27.2,
    ass: 11.1,
    uni: 15.3,
    master: 2.5,
    phd: 0.7
  },
  {
    title: "Dental assistants",
    employment: "330.2",
    none: 2.9,
    hs: 27,
    some: 37.3,
    ass: 19.8,
    uni: 10.2,
    master: 1.2,
    phd: 1.7
  },
  {
    title: "Training and development specialists",
    employment: "328.7",
    none: 1.8,
    hs: 13,
    some: 21.8,
    ass: 9.7,
    uni: 33.9,
    master: 17.3,
    phd: 2.5
  },
  {
    title: "Substance abuse, behavioral disorder, and mental health counselors",
    employment: "327.5",
    none: 0.9,
    hs: 3.7,
    some: 7.7,
    ass: 5.5,
    uni: 26.1,
    master: 51.8,
    phd: 4.3
  },
  {
    title: "Pharmacists",
    employment: "322.2",
    none: 0,
    hs: 0,
    some: 1.6,
    ass: 0.9,
    uni: 27.4,
    master: 5.9,
    phd: 64.1
  },
  {
    title: "Loan officers",
    employment: "322.1",
    none: 0.9,
    hs: 13.1,
    some: 21.7,
    ass: 10.4,
    uni: 42.3,
    master: 10.5,
    phd: 1
  },
  {
    title: "Administrative services and facilities managers",
    employment: "322.0",
    none: 2.4,
    hs: 18.1,
    some: 23.8,
    ass: 12,
    uni: 31.6,
    master: 10.6,
    phd: 1.5
  },
  {
    title: "Educational, guidance, and career counselors and advisors",
    employment: "322.0",
    none: 0.8,
    hs: 4.1,
    some: 5,
    ass: 2.3,
    uni: 22.1,
    master: 60.5,
    phd: 5.2
  },
  {
    title: "Postal service mail carriers",
    employment: "317.7",
    none: 2.2,
    hs: 34.9,
    some: 35.5,
    ass: 11.9,
    uni: 13.1,
    master: 2,
    phd: 0.4
  },
  {
    title: "Firefighters",
    employment: "317.2",
    none: 0.7,
    hs: 14.4,
    some: 37.3,
    ass: 22.6,
    uni: 21.8,
    master: 2.6,
    phd: 0.6
  },
  {
    title: "Food service managers",
    employment: "309.8",
    none: 9.2,
    hs: 28.5,
    some: 26.2,
    ass: 9.9,
    uni: 21.9,
    master: 3.5,
    phd: 0.7
  },
  {
    title: "Civil engineers",
    employment: "309.8",
    none: 0.5,
    hs: 2.6,
    some: 4.9,
    ass: 4.2,
    uni: 57.7,
    master: 25.6,
    phd: 4.4
  },
  {
    title: "Exercise trainers and group fitness instructors",
    employment: "309.8",
    none: 2.1,
    hs: 8.8,
    some: 19.4,
    ass: 9.7,
    uni: 44.8,
    master: 12.4,
    phd: 2.7
  },
  {
    title: "Mechanical engineers",
    employment: "299.2",
    none: 0.8,
    hs: 4,
    some: 6.8,
    ass: 8.9,
    uni: 54.3,
    master: 21.7,
    phd: 3.6
  },
  {
    title:
      "Sales representatives, wholesale and manufacturing, technical and scientific products",
    employment: "298.2",
    none: 2.9,
    hs: 17,
    some: 22.5,
    ass: 8.8,
    uni: 40.6,
    master: 7.4,
    phd: 0.9
  },
  {
    title: "Marketing managers",
    employment: "293.7",
    none: 0.7,
    hs: 3.8,
    some: 9.3,
    ass: 5,
    uni: 55.8,
    master: 23.5,
    phd: 2
  },
  {
    title: "Chief executives",
    employment: "292.5",
    none: 1.5,
    hs: 8.3,
    some: 14.2,
    ass: 5.1,
    uni: 40.5,
    master: 23.7,
    phd: 6.7
  },
  {
    title: "Industrial engineers",
    employment: "292.0",
    none: 0.9,
    hs: 6.4,
    some: 10.5,
    ass: 7.8,
    uni: 51.9,
    master: 19.7,
    phd: 2.8
  },
  {
    title:
      "Electrical, electronic, and electromechanical assemblers, except coil winders, tapers, and finishers",
    employment: "284.8",
    none: 17.7,
    hs: 45,
    some: 21,
    ass: 7.5,
    uni: 7.2,
    master: 1.1,
    phd: 0.5
  },
  {
    title: "Insurance claims and policy processing clerks",
    employment: "277.9",
    none: 2,
    hs: 23.2,
    some: 31.7,
    ass: 13.4,
    uni: 23.3,
    master: 5.3,
    phd: 1.2
  },
  {
    title: "Bus and truck mechanics and diesel engine specialists",
    employment: "275.4",
    none: 13.4,
    hs: 46.6,
    some: 23,
    ass: 13.6,
    uni: 3.1,
    master: 0.4,
    phd: 0.1
  },
  {
    title: "Personal financial advisors",
    employment: "275.2",
    none: 0.5,
    hs: 3.3,
    some: 9.4,
    ass: 4.2,
    uni: 53.5,
    master: 23.3,
    phd: 5.7
  },
  {
    title: "Animal caretakers",
    employment: "272.4",
    none: 6.9,
    hs: 30.5,
    some: 28.2,
    ass: 10,
    uni: 20.3,
    master: 3,
    phd: 1
  },
  {
    title: "Public relations specialists",
    employment: "272.3",
    none: 0.3,
    hs: 3.2,
    some: 8.4,
    ass: 4.7,
    uni: 56.5,
    master: 22.7,
    phd: 4.2
  },
  {
    title: "Education administrators, kindergarten through secondary",
    employment: "270.2",
    none: 0.7,
    hs: 4.9,
    some: 7.2,
    ass: 4.4,
    uni: 25.3,
    master: 43.3,
    phd: 14.3
  },
  {
    title: "Amusement and recreation attendants",
    employment: "264.4",
    none: 6,
    hs: 27.7,
    some: 26.8,
    ass: 8.7,
    uni: 24.3,
    master: 5.7,
    phd: 0.9
  },
  {
    title: "Emergency medical technicians and paramedics",
    employment: "261.3",
    none: 0.8,
    hs: 12,
    some: 42.7,
    ass: 23.4,
    uni: 16.7,
    master: 2.5,
    phd: 1.9
  },
  {
    title: "Clergy",
    employment: "260.6",
    none: 2.2,
    hs: 6.1,
    some: 10.6,
    ass: 4.9,
    uni: 25.6,
    master: 35.4,
    phd: 15.1
  },
  {
    title: "Parts salespersons",
    employment: "257.8",
    none: 8.1,
    hs: 47.8,
    some: 26.3,
    ass: 9.3,
    uni: 7.3,
    master: 1.1,
    phd: 0.1
  },
  {
    title: "Farmworkers, farm, ranch, and aquacultural animals",
    employment: "256.9",
    none: 49.9,
    hs: 28,
    some: 10.6,
    ass: 4,
    uni: 6.2,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Graphic designers",
    employment: "254.1",
    none: 1.3,
    hs: 5.4,
    some: 13.8,
    ass: 12.3,
    uni: 58.8,
    master: 7.1,
    phd: 1.3
  },
  {
    title: "Food servers, nonrestaurant",
    employment: "251.3",
    none: 14.9,
    hs: 41.9,
    some: 23.7,
    ass: 7.7,
    uni: 9.9,
    master: 1.7,
    phd: 0.1
  },
  {
    title: "Coaches and scouts",
    employment: "249.9",
    none: 1.4,
    hs: 9.8,
    some: 16.6,
    ass: 6.3,
    uni: 40.4,
    master: 22.9,
    phd: 2.6
  },
  {
    title: "Health specialties teachers, postsecondary",
    employment: "242.7",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Physical therapists",
    employment: "239.2",
    none: 0.4,
    hs: 1,
    some: 0.9,
    ass: 2.9,
    uni: 28.1,
    master: 23,
    phd: 43.8
  },
  {
    title: "Helpers--production workers",
    employment: "238.0",
    none: 24.4,
    hs: 46.7,
    some: 15.6,
    ass: 4.5,
    uni: 6.3,
    master: 1.8,
    phd: 0.7
  },
  {
    title: "Postsecondary teachers, all other",
    employment: "230.3",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "First-line supervisors of housekeeping and janitorial workers",
    employment: "225.5",
    none: 13.2,
    hs: 39.7,
    some: 24,
    ass: 8.3,
    uni: 12.3,
    master: 2,
    phd: 0.5
  },
  {
    title: "Bill and account collectors",
    employment: "223.1",
    none: 3.6,
    hs: 29.5,
    some: 33.6,
    ass: 14.2,
    uni: 16.6,
    master: 1.9,
    phd: 0.6
  },
  {
    title: "Hotel, motel, and resort desk clerks",
    employment: "221.0",
    none: 6.9,
    hs: 29.5,
    some: 32.3,
    ass: 12,
    uni: 15.8,
    master: 2.4,
    phd: 1
  },
  {
    title: "Nurse practitioners",
    employment: "220.3",
    none: 0.2,
    hs: 0.6,
    some: 0.6,
    ass: 0.7,
    uni: 6.8,
    master: 74.5,
    phd: 16.6
  },
  {
    title: "Radiologic technologists and technicians",
    employment: "212.1",
    none: 1.1,
    hs: 5,
    some: 16.1,
    ass: 51.8,
    uni: 22.3,
    master: 3,
    phd: 0.8
  },
  {
    title: "Loan interviewers and clerks",
    employment: "208.8",
    none: 1.6,
    hs: 24.6,
    some: 32.1,
    ass: 12.9,
    uni: 24.6,
    master: 3.7,
    phd: 0.5
  },
  {
    title: "Dental hygienists",
    employment: "206.1",
    none: 0.6,
    hs: 2.7,
    some: 8.3,
    ass: 50.5,
    uni: 32,
    master: 3,
    phd: 2.7
  },
  {
    title: "Production workers, all other",
    employment: "203.6",
    none: 17,
    hs: 45.2,
    some: 22.1,
    ass: 7.6,
    uni: 6.7,
    master: 1.1,
    phd: 0.3
  },
  {
    title: "Office and administrative support workers, all other",
    employment: "201.9",
    none: 2.1,
    hs: 18.7,
    some: 27.5,
    ass: 12.4,
    uni: 28.3,
    master: 9.7,
    phd: 1.3
  },
  {
    title:
      "First-line supervisors of personal service and entertainment and recreation workers, except gambling services",
    employment: "200.4",
    none: 6.5,
    hs: 34.2,
    some: 29.5,
    ass: 10.7,
    uni: 15.5,
    master: 3.1,
    phd: 0.6
  },
  {
    title: "Cost estimators",
    employment: "199.4",
    none: 3.1,
    hs: 21.2,
    some: 27.4,
    ass: 11.3,
    uni: 31.3,
    master: 5.3,
    phd: 0.4
  },
  {
    title: "Web developers and digital interface designers",
    employment: "199.4",
    none: 0.7,
    hs: 5,
    some: 14.9,
    ass: 9.7,
    uni: 54.3,
    master: 14.2,
    phd: 1.1
  },
  {
    title: "Architectural and engineering managers",
    employment: "197.8",
    none: 0.4,
    hs: 4.3,
    some: 7,
    ass: 4.8,
    uni: 47.1,
    master: 30.6,
    phd: 5.8
  },
  {
    title:
      "Telecommunications equipment installers and repairers, except line installers",
    employment: "195.8",
    none: 4.3,
    hs: 28.8,
    some: 33.8,
    ass: 18,
    uni: 12.6,
    master: 2.2,
    phd: 0.2
  },
  {
    title: "Cement masons and concrete finishers",
    employment: "194.1",
    none: 37.4,
    hs: 41.1,
    some: 15.8,
    ass: 2.3,
    uni: 3.3,
    master: 0.1,
    phd: 0
  },
  {
    title: "Bakers",
    employment: "193.4",
    none: 20.4,
    hs: 37.9,
    some: 20.3,
    ass: 8.6,
    uni: 10.8,
    master: 1.5,
    phd: 0.5
  },
  {
    title: "Dispatchers, except police, fire, and ambulance",
    employment: "192.1",
    none: 6,
    hs: 34,
    some: 32.8,
    ass: 11.1,
    uni: 13.9,
    master: 1.8,
    phd: 0.4
  },
  {
    title: "Logisticians",
    employment: "191.0",
    none: 2.3,
    hs: 17,
    some: 23.9,
    ass: 13.3,
    uni: 32.1,
    master: 10.4,
    phd: 1
  },
  {
    title: "Instructional coordinators",
    employment: "190.4",
    none: 0.7,
    hs: 4.1,
    some: 7.6,
    ass: 4.5,
    uni: 28,
    master: 45.6,
    phd: 9.4
  },
  {
    title: "Computer network support specialists",
    employment: "189.8",
    none: 0.9,
    hs: 10.4,
    some: 24.5,
    ass: 15.5,
    uni: 37.1,
    master: 10.4,
    phd: 1.2
  },
  {
    title: "Industrial production managers",
    employment: "189.3",
    none: 4.1,
    hs: 20.4,
    some: 20.3,
    ass: 8.9,
    uni: 32.5,
    master: 12.5,
    phd: 1.3
  },
  {
    title: "Special education teachers, kindergarten and elementary school",
    employment: "188.6",
    none: 0.3,
    hs: 3.9,
    some: 5.3,
    ass: 3.5,
    uni: 33.4,
    master: 50.1,
    phd: 3.5
  },
  {
    title: "Electrical engineers",
    employment: "188.0",
    none: 0.2,
    hs: 3.4,
    some: 6.6,
    ass: 6.7,
    uni: 50.4,
    master: 26.4,
    phd: 6.2
  },
  {
    title: "Computer programmers",
    employment: "185.7",
    none: 1,
    hs: 4.9,
    some: 12.2,
    ass: 8,
    uni: 50.2,
    master: 21.1,
    phd: 2.5
  },
  {
    title: "Healthcare social workers",
    employment: "184.9",
    none: 3.1,
    hs: 12.3,
    some: 16,
    ass: 8.8,
    uni: 27.2,
    master: 30.5,
    phd: 2.2
  },
  {
    title:
      "Cutting, punching, and press machine setters, operators, and tenders, metal and plastic",
    employment: "182.0",
    none: 17.3,
    hs: 52,
    some: 20.1,
    ass: 6.8,
    uni: 3.2,
    master: 0.4,
    phd: 0.3
  },
  {
    title:
      "First-line supervisors of landscaping, lawn service, and groundskeeping workers",
    employment: "181.3",
    none: 22.1,
    hs: 31.1,
    some: 21.1,
    ass: 9.3,
    uni: 14.7,
    master: 1.6,
    phd: 0.1
  },
  {
    title: "Interviewers, except eligibility and loan",
    employment: "180.2",
    none: 2.2,
    hs: 23.1,
    some: 31,
    ass: 12.9,
    uni: 22.7,
    master: 7,
    phd: 1.2
  },
  {
    title: "Education administrators, postsecondary",
    employment: "178.8",
    none: 0.7,
    hs: 4.9,
    some: 7.2,
    ass: 4.4,
    uni: 25.3,
    master: 43.3,
    phd: 14.3
  },
  {
    title: "Laundry and dry-cleaning workers",
    employment: "175.5",
    none: 35,
    hs: 43.4,
    some: 13.2,
    ass: 2.9,
    uni: 4.8,
    master: 0.5,
    phd: 0.1
  },
  {
    title: "Social and community service managers",
    employment: "174.2",
    none: 1,
    hs: 7.4,
    some: 13,
    ass: 5.7,
    uni: 38.9,
    master: 28.6,
    phd: 5.4
  },
  {
    title: "Installation, maintenance, and repair workers, all other",
    employment: "173.2",
    none: 13.1,
    hs: 39.6,
    some: 26.6,
    ass: 9.8,
    uni: 9.3,
    master: 1.3,
    phd: 0.2
  },
  {
    title: "Sales and related workers, all other",
    employment: "172.6",
    none: 3.9,
    hs: 18.8,
    some: 19.9,
    ass: 8,
    uni: 38.2,
    master: 9.8,
    phd: 1.5
  },
  {
    title: "Database administrators and architects",
    employment: "168.0",
    none: 0.5,
    hs: 5.9,
    some: 12,
    ass: 7.3,
    uni: 45.4,
    master: 26.3,
    phd: 2.6
  },
  {
    title: "Engineers, all other",
    employment: "167.1",
    none: 0.6,
    hs: 3,
    some: 7.1,
    ass: 6.9,
    uni: 49.4,
    master: 25.7,
    phd: 7.4
  },
  {
    title: "Teaching assistants, postsecondary",
    employment: "165.4",
    none: 4.2,
    hs: 25.7,
    some: 24.4,
    ass: 14.4,
    uni: 22.8,
    master: 7.1,
    phd: 1.4
  },
  {
    title: "Computer network architects",
    employment: "165.2",
    none: 0.8,
    hs: 6.5,
    some: 21.2,
    ass: 16.2,
    uni: 39.7,
    master: 14,
    phd: 1.5
  },
  {
    title: "Bus drivers, transit and intercity",
    employment: "165.2",
    none: 8.5,
    hs: 42.3,
    some: 28.8,
    ass: 9.2,
    uni: 9,
    master: 1.8,
    phd: 0.3
  },
  {
    title: "Court, municipal, and license clerks",
    employment: "162.1",
    none: 1.2,
    hs: 25.7,
    some: 31.8,
    ass: 13.3,
    uni: 22.4,
    master: 4.4,
    phd: 1.2
  },
  {
    title: "Human resources managers",
    employment: "161.7",
    none: 2.1,
    hs: 9.9,
    some: 16,
    ass: 7.6,
    uni: 40.7,
    master: 20.9,
    phd: 2.8
  },
  {
    title: "Printing press operators",
    employment: "160.9",
    none: 12,
    hs: 45.1,
    some: 23.8,
    ass: 9,
    uni: 8.7,
    master: 0.9,
    phd: 0.5
  },
  {
    title: "Legal secretaries and administrative assistants",
    employment: "160.4",
    none: 1.7,
    hs: 22.9,
    some: 33.9,
    ass: 18.5,
    uni: 19.2,
    master: 3.2,
    phd: 0.6
  },
  {
    title: "Information and record clerks, all other",
    employment: "159.9",
    none: 2.1,
    hs: 19,
    some: 26.7,
    ass: 14.2,
    uni: 28,
    master: 8.6,
    phd: 1.4
  },
  {
    title: "Food batchmakers",
    employment: "159.3",
    none: 19.5,
    hs: 40.8,
    some: 22.3,
    ass: 8,
    uni: 7,
    master: 1.7,
    phd: 0.7
  },
  {
    title: "Data entry keyers",
    employment: "158.4",
    none: 2.8,
    hs: 26.2,
    some: 31.6,
    ass: 14.4,
    uni: 20.8,
    master: 3.6,
    phd: 0.6
  },
  {
    title: "Computer numerically controlled tool operators",
    employment: "158.4",
    none: 9,
    hs: 38,
    some: 30.1,
    ass: 14.1,
    uni: 7.6,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Speech-language pathologists",
    employment: "158.1",
    none: 0.5,
    hs: 0.7,
    some: 0.8,
    ass: 1.4,
    uni: 9.8,
    master: 83.7,
    phd: 3.1
  },
  {
    title:
      "Molding, coremaking, and casting machine setters, operators, and tenders, metal and plastic",
    employment: "157.7",
    none: 14.6,
    hs: 46.2,
    some: 24,
    ass: 8.6,
    uni: 5.3,
    master: 1.2,
    phd: 0.1
  },
  {
    title: "Musicians and singers",
    employment: "157.3",
    none: 4.6,
    hs: 13.1,
    some: 22.2,
    ass: 5.7,
    uni: 30.3,
    master: 19.5,
    phd: 4.6
  },
  {
    title: "Educational instruction and library workers, all other",
    employment: "157.0",
    none: 0.7,
    hs: 4.1,
    some: 7.6,
    ass: 4.5,
    uni: 28,
    master: 45.6,
    phd: 9.4
  },
  {
    title: "Highway maintenance workers",
    employment: "153.8",
    none: 12.1,
    hs: 53.2,
    some: 23,
    ass: 7.5,
    uni: 3.5,
    master: 0.4,
    phd: 0.2
  },
  {
    title: "Roofers",
    employment: "153.7",
    none: 43.8,
    hs: 39.3,
    some: 11.6,
    ass: 2.2,
    uni: 2.8,
    master: 0.2,
    phd: 0.1
  },
  {
    title: "Automotive body and related repairers",
    employment: "153.7",
    none: 22.2,
    hs: 47.2,
    some: 18.7,
    ass: 8.7,
    uni: 2.7,
    master: 0.4,
    phd: 0.1
  },
  {
    title: "Meat, poultry, and fish cutters and trimmers",
    employment: "153.0",
    none: 29.5,
    hs: 43.7,
    some: 17.8,
    ass: 4.5,
    uni: 3.8,
    master: 0.6,
    phd: 0.1
  },
  {
    title: "Mobile heavy equipment mechanics, except engines",
    employment: "152.1",
    none: 12,
    hs: 47.3,
    some: 23.4,
    ass: 13.1,
    uni: 3.3,
    master: 0.6,
    phd: 0.2
  },
  {
    title: "Directors, religious activities and education",
    employment: "149.6",
    none: 1.5,
    hs: 7.7,
    some: 16.8,
    ass: 9,
    uni: 39.9,
    master: 21.2,
    phd: 3.9
  },
  {
    title: "Eligibility interviewers, government programs",
    employment: "145.4",
    none: 1.1,
    hs: 10.9,
    some: 25.7,
    ass: 14.6,
    uni: 37.4,
    master: 8.9,
    phd: 1.4
  },
  {
    title: "Butchers and meat cutters",
    employment: "145.0",
    none: 29.5,
    hs: 43.7,
    some: 17.8,
    ass: 4.5,
    uni: 3.8,
    master: 0.6,
    phd: 0.1
  },
  {
    title: "Massage therapists",
    employment: "144.6",
    none: 3,
    hs: 20.6,
    some: 33.2,
    ass: 18.5,
    uni: 19.3,
    master: 3.4,
    phd: 1.9
  },
  {
    title: "Librarians and media collections specialists",
    employment: "143.5",
    none: 0.2,
    hs: 2,
    some: 7.5,
    ass: 4.4,
    uni: 23,
    master: 57.7,
    phd: 5.2
  },
  {
    title:
      "Coating, painting, and spraying machine setters, operators, and tenders",
    employment: "143.4",
    none: 20.5,
    hs: 48,
    some: 20,
    ass: 6.7,
    uni: 3.9,
    master: 0.8,
    phd: 0.1
  },
  {
    title: "Writers and authors",
    employment: "143.2",
    none: 0.7,
    hs: 3.3,
    some: 8.5,
    ass: 3.2,
    uni: 49.8,
    master: 26.3,
    phd: 8.2
  },
  {
    title: "Couriers and messengers",
    employment: "142.2",
    none: 7.8,
    hs: 35,
    some: 31.7,
    ass: 10.1,
    uni: 13,
    master: 1.9,
    phd: 0.5
  },
  {
    title: "School bus monitors and protective service workers, all other",
    employment: "141.6",
    none: 9.5,
    hs: 33.1,
    some: 24.9,
    ass: 9.1,
    uni: 17.6,
    master: 5.1,
    phd: 0.6
  },
  {
    title: "Information security analysts",
    employment: "141.2",
    none: 0.8,
    hs: 4.2,
    some: 16.4,
    ass: 10.1,
    uni: 42.8,
    master: 23.7,
    phd: 2
  },
  {
    title: "Special education teachers, secondary school",
    employment: "140.9",
    none: 0.3,
    hs: 3.9,
    some: 5.3,
    ass: 3.5,
    uni: 33.4,
    master: 50.1,
    phd: 3.5
  },
  {
    title: "Refuse and recyclable material collectors",
    employment: "140.5",
    none: 23.3,
    hs: 46.9,
    some: 18,
    ass: 5,
    uni: 6.3,
    master: 0.3,
    phd: 0.1
  },
  {
    title:
      "Multiple machine tool setters, operators, and tenders, metal and plastic",
    employment: "138.4",
    none: 18.5,
    hs: 48.2,
    some: 21.1,
    ass: 6.6,
    uni: 4.8,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Transportation, storage, and distribution managers",
    employment: "137.6",
    none: 5.9,
    hs: 29.4,
    some: 25.6,
    ass: 9.9,
    uni: 22.1,
    master: 6.5,
    phd: 0.6
  },
  {
    title: "Payroll and timekeeping clerks",
    employment: "137.3",
    none: 2.4,
    hs: 24.4,
    some: 32.6,
    ass: 15.1,
    uni: 21.6,
    master: 3.4,
    phd: 0.6
  },
  {
    title: "Merchandise displayers and window trimmers",
    employment: "136.4",
    none: 3.8,
    hs: 31.4,
    some: 26.9,
    ass: 7.2,
    uni: 24.9,
    master: 5.2,
    phd: 0.6
  },
  {
    title: "Sheet metal workers",
    employment: "135.4",
    none: 13.8,
    hs: 46.6,
    some: 24.4,
    ass: 9.4,
    uni: 5.1,
    master: 0.5,
    phd: 0.1
  },
  {
    title: "Respiratory therapists",
    employment: "135.1",
    none: 0.8,
    hs: 2.7,
    some: 10.5,
    ass: 54.9,
    uni: 25.6,
    master: 4.4,
    phd: 1.2
  },
  {
    title: "Medical scientists, except epidemiologists",
    employment: "133.9",
    none: 0.8,
    hs: 0.4,
    some: 0.6,
    ass: 0.5,
    uni: 23.2,
    master: 25.3,
    phd: 49.2
  },
  {
    title: "Order clerks",
    employment: "133.9",
    none: 7,
    hs: 34.3,
    some: 26.7,
    ass: 10.5,
    uni: 18,
    master: 2.8,
    phd: 0.7
  },
  {
    title: "Sewing machine operators",
    employment: "133.5",
    none: 37.1,
    hs: 36.5,
    some: 13.1,
    ass: 5.2,
    uni: 6.4,
    master: 1.3,
    phd: 0.4
  },
  {
    title: "Occupational therapists",
    employment: "131.6",
    none: 0.4,
    hs: 0.6,
    some: 0.9,
    ass: 4.5,
    uni: 35,
    master: 52.9,
    phd: 5.7
  },
  {
    title: "Producers and directors",
    employment: "131.0",
    none: 0.5,
    hs: 5.3,
    some: 13.1,
    ass: 5.6,
    uni: 58.3,
    master: 15,
    phd: 2.1
  },
  {
    title: "Aircraft mechanics and service technicians",
    employment: "130.1",
    none: 3.2,
    hs: 25.9,
    some: 37,
    ass: 22.4,
    uni: 9.6,
    master: 1.5,
    phd: 0.5
  },
  {
    title: "Phlebotomists",
    employment: "129.6",
    none: 2,
    hs: 24.6,
    some: 42.8,
    ass: 18.1,
    uni: 10.8,
    master: 1.5,
    phd: 0.2
  },
  {
    title: "Physician assistants",
    employment: "129.4",
    none: 0.8,
    hs: 2.7,
    some: 2.7,
    ass: 3.1,
    uni: 17.1,
    master: 58.4,
    phd: 15.3
  },
  {
    title: "Construction and building inspectors",
    employment: "129.3",
    none: 1.6,
    hs: 26.4,
    some: 29.3,
    ass: 13.6,
    uni: 22.2,
    master: 6.2,
    phd: 0.7
  },
  {
    title: "Architects, except landscape and naval",
    employment: "126.7",
    none: 0.3,
    hs: 1.4,
    some: 4,
    ass: 2.8,
    uni: 45,
    master: 37.7,
    phd: 8.8
  },
  {
    title: "Meeting, convention, and event planners",
    employment: "125.9",
    none: 1.5,
    hs: 9.1,
    some: 14.5,
    ass: 8,
    uni: 54.3,
    master: 11.9,
    phd: 0.6
  },
  {
    title: "First-line supervisors of police and detectives",
    employment: "125.8",
    none: 0.4,
    hs: 11.8,
    some: 25.2,
    ass: 16.1,
    uni: 32.1,
    master: 12.9,
    phd: 1.5
  },
  {
    title: "Electronics engineers, except computer",
    employment: "125.2",
    none: 0.2,
    hs: 3.4,
    some: 6.6,
    ass: 6.7,
    uni: 50.4,
    master: 26.4,
    phd: 6.2
  },
  {
    title: "Cooks, short order",
    employment: "124.5",
    none: 27.3,
    hs: 41.9,
    some: 18.5,
    ass: 6.1,
    uni: 5.4,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Telecommunications line installers and repairers",
    employment: "124.4",
    none: 5.8,
    hs: 38.3,
    some: 31.8,
    ass: 12.8,
    uni: 9.6,
    master: 1.5,
    phd: 0.2
  },
  {
    title: "Mental health and substance abuse social workers",
    employment: "124.0",
    none: 0,
    hs: 1.9,
    some: 3.8,
    ass: 0.9,
    uni: 12.9,
    master: 75,
    phd: 5.5
  },
  {
    title: "Parking attendants",
    employment: "123.8",
    none: 14.2,
    hs: 42.2,
    some: 23.9,
    ass: 8.2,
    uni: 9.1,
    master: 1.5,
    phd: 0.8
  },
  {
    title: "Manicurists and pedicurists",
    employment: "123.0",
    none: 27.4,
    hs: 39.8,
    some: 17,
    ass: 6.9,
    uni: 7.5,
    master: 1.1,
    phd: 0.4
  },
  {
    title: "Water and wastewater treatment plant and system operators",
    employment: "122.1",
    none: 3,
    hs: 36.6,
    some: 31.1,
    ass: 13.3,
    uni: 13.4,
    master: 2.4,
    phd: 0.2
  },
  {
    title: "Kindergarten teachers, except special education",
    employment: "121.3",
    none: 1.5,
    hs: 12.5,
    some: 20.5,
    ass: 13.5,
    uni: 35.3,
    master: 15.4,
    phd: 1.2
  },
  {
    title: "Drywall and ceiling tile installers",
    employment: "121.2",
    none: 47.1,
    hs: 37.6,
    some: 11.5,
    ass: 2.2,
    uni: 1.5,
    master: 0.2,
    phd: 0.1
  },
  {
    title: "Dentists, general",
    employment: "120.3",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 2.5,
    phd: 97.5
  },
  {
    title: "Telemarketers",
    employment: "119.7",
    none: 6.3,
    hs: 33.5,
    some: 29.6,
    ass: 10.8,
    uni: 16.9,
    master: 2.7,
    phd: 0.3
  },
  {
    title: "Insurance underwriters",
    employment: "119.4",
    none: 1.1,
    hs: 9.7,
    some: 17.9,
    ass: 8.4,
    uni: 50.5,
    master: 10.2,
    phd: 2.2
  },
  {
    title: "Clinical, counseling, and school psychologists",
    employment: "118.8",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 8.9,
    master: 44.9,
    phd: 46.2
  },
  {
    title: "Mixing and blending machine setters, operators, and tenders",
    employment: "118.1",
    none: 18.7,
    hs: 46.1,
    some: 20.5,
    ass: 8.8,
    uni: 4.8,
    master: 0.8,
    phd: 0.2
  },
  {
    title:
      "Lifeguards, ski patrol, and other recreational protective service workers",
    employment: "117.5",
    none: 1.9,
    hs: 19,
    some: 26.2,
    ass: 9.9,
    uni: 32.4,
    master: 9.4,
    phd: 1.2
  },
  {
    title:
      "Electrical and electronic engineering technologists and technicians",
    employment: "117.0",
    none: 2.5,
    hs: 17.9,
    some: 33.1,
    ass: 29.9,
    uni: 14,
    master: 2.3,
    phd: 0.3
  },
  {
    title: "Electrical power-line installers and repairers",
    employment: "115.9",
    none: 5.3,
    hs: 38.8,
    some: 32.4,
    ass: 17,
    uni: 5.3,
    master: 0.8,
    phd: 0.3
  },
  {
    title: "Automotive and watercraft service attendants",
    employment: "115.7",
    none: 14.2,
    hs: 46.6,
    some: 24.8,
    ass: 8.6,
    uni: 4.8,
    master: 0.9,
    phd: 0
  },
  {
    title: "Advertising sales agents",
    employment: "115.1",
    none: 1.2,
    hs: 10.8,
    some: 19.6,
    ass: 6.9,
    uni: 52.1,
    master: 8.1,
    phd: 1.4
  },
  {
    title: "Veterinary technologists and technicians",
    employment: "114.4",
    none: 1.7,
    hs: 15.7,
    some: 23.5,
    ass: 32.8,
    uni: 22.6,
    master: 2.3,
    phd: 1.3
  },
  {
    title: "Career/technical education teachers, postsecondary",
    employment: "114.2",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Detectives and criminal investigators",
    employment: "112.5",
    none: 0.5,
    hs: 8.5,
    some: 20.9,
    ass: 11.2,
    uni: 41.5,
    master: 14.7,
    phd: 2.7
  },
  {
    title: "Human resources assistants, except payroll and timekeeping",
    employment: "112.0",
    none: 1.4,
    hs: 17.5,
    some: 28.7,
    ass: 11.4,
    uni: 31,
    master: 9.3,
    phd: 0.8
  },
  {
    title: "Chefs and head cooks",
    employment: "110.7",
    none: 16.2,
    hs: 30.3,
    some: 21.6,
    ass: 16.2,
    uni: 13.5,
    master: 1.7,
    phd: 0.6
  },
  {
    title: "Photographers",
    employment: "110.5",
    none: 1.9,
    hs: 11.5,
    some: 22,
    ass: 11.9,
    uni: 44,
    master: 7.7,
    phd: 1.1
  },
  {
    title: "Real estate brokers",
    employment: "109.9",
    none: 1.3,
    hs: 12.2,
    some: 25.7,
    ass: 10.1,
    uni: 38.5,
    master: 10,
    phd: 2.1
  },
  {
    title: "Surgical technologists",
    employment: "109.7",
    none: 1.2,
    hs: 12.2,
    some: 32.7,
    ass: 40.5,
    uni: 11.9,
    master: 1.1,
    phd: 0.5
  },
  {
    title: "Art, drama, and music teachers, postsecondary",
    employment: "109.3",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Editors",
    employment: "108.6",
    none: 1.1,
    hs: 3.4,
    some: 8.5,
    ass: 4,
    uni: 54.3,
    master: 23.2,
    phd: 5.5
  },
  {
    title: "Residential advisors",
    employment: "108.2",
    none: 3.9,
    hs: 14.7,
    some: 29.2,
    ass: 13.5,
    uni: 28.4,
    master: 9,
    phd: 1.3
  },
  {
    title: "Family medicine physicians",
    employment: "107.7",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title: "Veterinary assistants and laboratory animal caretakers",
    employment: "107.2",
    none: 4,
    hs: 23.9,
    some: 27.8,
    ass: 13,
    uni: 27.1,
    master: 3.2,
    phd: 1
  },
  {
    title: "Rehabilitation counselors",
    employment: "104.5",
    none: 1.4,
    hs: 8.6,
    some: 11.7,
    ass: 9.7,
    uni: 28.4,
    master: 36.6,
    phd: 3.6
  },
  {
    title: "Operations research analysts",
    employment: "104.1",
    none: 0.9,
    hs: 5.7,
    some: 13,
    ass: 6.7,
    uni: 40,
    master: 28.9,
    phd: 4.8
  },
  {
    title: "Cabinetmakers and bench carpenters",
    employment: "103.9",
    none: 17.7,
    hs: 47,
    some: 18.3,
    ass: 8.2,
    uni: 6.9,
    master: 1.2,
    phd: 0.7
  },
  {
    title: "Tire repairers and changers",
    employment: "102.7",
    none: 20.7,
    hs: 47,
    some: 19.9,
    ass: 5.7,
    uni: 5.6,
    master: 1,
    phd: 0.1
  },
  {
    title: "Flight attendants",
    employment: "102.5",
    none: 0.6,
    hs: 14.1,
    some: 31.9,
    ass: 11.1,
    uni: 36,
    master: 5,
    phd: 1.2
  },
  {
    title: "Computer, automated teller, and office machine repairers",
    employment: "102.4",
    none: 2.7,
    hs: 19.5,
    some: 32.4,
    ass: 20.3,
    uni: 21.1,
    master: 3.4,
    phd: 0.6
  },
  {
    title: "Paper goods machine setters, operators, and tenders",
    employment: "102.3",
    none: 16.2,
    hs: 46.8,
    some: 21.1,
    ass: 11,
    uni: 4.9,
    master: 0.2,
    phd: 0
  },
  {
    title: "Reservation and transportation ticket agents and travel clerks",
    employment: "101.6",
    none: 2.5,
    hs: 24.5,
    some: 29.9,
    ass: 13.9,
    uni: 24.8,
    master: 3.7,
    phd: 0.7
  },
  {
    title: "Fundraisers",
    employment: "101.3",
    none: 0.4,
    hs: 2.1,
    some: 6.1,
    ass: 2.2,
    uni: 51.5,
    master: 33.4,
    phd: 4.3
  },
  {
    title: "Healthcare support workers, all other",
    employment: "100.5",
    none: 6.6,
    hs: 30.1,
    some: 30.2,
    ass: 12.1,
    uni: 15.7,
    master: 3.9,
    phd: 1.4
  },
  {
    title:
      "Postal service mail sorters, processors, and processing machine operators",
    employment: "100.4",
    none: 4.7,
    hs: 30.6,
    some: 34.7,
    ass: 13.9,
    uni: 13,
    master: 2.8,
    phd: 0.4
  },
  {
    title: "Architectural and civil drafters",
    employment: "99.9",
    none: 1.7,
    hs: 11.1,
    some: 20.7,
    ass: 31.9,
    uni: 28.2,
    master: 5.6,
    phd: 0.7
  },
  {
    title: "File clerks",
    employment: "99.7",
    none: 4.4,
    hs: 26.2,
    some: 29.1,
    ass: 13.4,
    uni: 20.9,
    master: 5.1,
    phd: 1
  },
  {
    title: "Art directors",
    employment: "98.5",
    none: 2.7,
    hs: 11.6,
    some: 18.9,
    ass: 8.2,
    uni: 43.6,
    master: 13.4,
    phd: 1.6
  },
  {
    title: "Occupational health and safety specialists",
    employment: "98.0",
    none: 1.9,
    hs: 16.8,
    some: 19.8,
    ass: 9.6,
    uni: 35.6,
    master: 14.9,
    phd: 1.4
  },
  {
    title: "Business teachers, postsecondary",
    employment: "96.5",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Cargo and freight agents",
    employment: "95.6",
    none: 2.5,
    hs: 28.4,
    some: 30.6,
    ass: 12.4,
    uni: 23.1,
    master: 1.5,
    phd: 1.5
  },
  {
    title: "Community and social service specialists, all other",
    employment: "95.5",
    none: 2.1,
    hs: 11.3,
    some: 16.2,
    ass: 9.2,
    uni: 37.2,
    master: 20.2,
    phd: 3.7
  },
  {
    title: "Public safety telecommunicators",
    employment: "95.4",
    none: 0.9,
    hs: 22.4,
    some: 38.8,
    ass: 16.1,
    uni: 18.7,
    master: 2.8,
    phd: 0.3
  },
  {
    title:
      "Calibration technologists and technicians and engineering technologists and technicians, except drafters, all other",
    employment: "94.7",
    none: 4.1,
    hs: 24.3,
    some: 30.7,
    ass: 20.1,
    uni: 17.2,
    master: 2.9,
    phd: 0.8
  },
  {
    title: "Physical therapist assistants",
    employment: "93.8",
    none: 1.5,
    hs: 5.3,
    some: 10.4,
    ass: 50.5,
    uni: 28.1,
    master: 2.6,
    phd: 1.7
  },
  {
    title: "Chemical equipment operators and tenders",
    employment: "93.5",
    none: 5.1,
    hs: 32.4,
    some: 25.7,
    ass: 9.6,
    uni: 22.5,
    master: 4.2,
    phd: 0.5
  },
  {
    title: "Library technicians",
    employment: "93.1",
    none: 2,
    hs: 31.8,
    some: 18.5,
    ass: 8.1,
    uni: 27.5,
    master: 11,
    phd: 1
  },
  {
    title: "Helpers--installation, maintenance, and repair workers",
    employment: "92.9",
    none: 33.9,
    hs: 43.8,
    some: 14.8,
    ass: 3.7,
    uni: 2.7,
    master: 0.3,
    phd: 0.8
  },
  {
    title: "Probation officers and correctional treatment specialists",
    employment: "92.7",
    none: 1.1,
    hs: 2.6,
    some: 7.9,
    ass: 3.8,
    uni: 65.1,
    master: 17.6,
    phd: 1.8
  },
  {
    title: "Compensation, benefits, and job analysis specialists",
    employment: "91.9",
    none: 0.6,
    hs: 13.5,
    some: 20.1,
    ass: 12.1,
    uni: 41,
    master: 10.9,
    phd: 1.7
  },
  {
    title: "Psychiatric technicians",
    employment: "91.6",
    none: 0.9,
    hs: 14.8,
    some: 29.1,
    ass: 12.6,
    uni: 33,
    master: 8.8,
    phd: 0.8
  },
  {
    title: "Public relations and fundraising managers",
    employment: "89.0",
    none: 0.2,
    hs: 3,
    some: 5.2,
    ass: 4.3,
    uni: 54.6,
    master: 28.7,
    phd: 3.9
  },
  {
    title: "Library assistants, clerical",
    employment: "88.0",
    none: 1.5,
    hs: 15.2,
    some: 23.9,
    ass: 11.8,
    uni: 35.5,
    master: 10.8,
    phd: 1.2
  },
  {
    title: "Biological technicians",
    employment: "87.6",
    none: 4.1,
    hs: 18.1,
    some: 19.8,
    ass: 17.5,
    uni: 27.5,
    master: 8.6,
    phd: 4.4
  },
  {
    title: "Tax preparers",
    employment: "87.4",
    none: 2.5,
    hs: 10.7,
    some: 21.2,
    ass: 11.1,
    uni: 32.7,
    master: 15.9,
    phd: 5.9
  },
  {
    title: "Environmental scientists and specialists, including health",
    employment: "87.1",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 61.9,
    master: 30.8,
    phd: 7.3
  },
  {
    title: "Interior designers",
    employment: "87.0",
    none: 1.2,
    hs: 6.3,
    some: 14.4,
    ass: 12.2,
    uni: 54,
    master: 9.5,
    phd: 2.4
  },
  {
    title: "Veterinarians",
    employment: "86.8",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 2.5,
    phd: 97.5
  },
  {
    title: "Pest control workers",
    employment: "86.8",
    none: 8.8,
    hs: 45.1,
    some: 28.8,
    ass: 7,
    uni: 9.1,
    master: 0.7,
    phd: 0.6
  },
  {
    title: "Crossing guards and flaggers",
    employment: "85.5",
    none: 14.7,
    hs: 44.5,
    some: 24.5,
    ass: 6.5,
    uni: 7.9,
    master: 1.4,
    phd: 0.6
  },
  {
    title: "Chemists",
    employment: "85.4",
    none: 0.1,
    hs: 1.4,
    some: 2.3,
    ass: 1.9,
    uni: 51.2,
    master: 22.7,
    phd: 20.3
  },
  {
    title: "Postal service clerks",
    employment: "82.8",
    none: 2.2,
    hs: 33.3,
    some: 35.7,
    ass: 12.6,
    uni: 13.3,
    master: 2.4,
    phd: 0.6
  },
  {
    title: "Mail clerks and mail machine operators, except postal service",
    employment: "82.2",
    none: 8,
    hs: 44,
    some: 23.2,
    ass: 10.9,
    uni: 11.2,
    master: 2.2,
    phd: 0.4
  },
  {
    title: "Ushers, lobby attendants, and ticket takers",
    employment: "81.5",
    none: 6.9,
    hs: 30.7,
    some: 25.1,
    ass: 10.2,
    uni: 18.7,
    master: 7.7,
    phd: 0.7
  },
  {
    title: "Interpreters and translators",
    employment: "81.4",
    none: 2.3,
    hs: 9.3,
    some: 19.5,
    ass: 13.3,
    uni: 34.8,
    master: 16.8,
    phd: 4.1
  },
  {
    title:
      "Health information technologists, medical registrars, surgical assistants, and healthcare practitioners and technical workers, all other",
    employment: "81.4",
    none: 1,
    hs: 5.3,
    some: 12,
    ass: 8.4,
    uni: 34.2,
    master: 34.6,
    phd: 4.5
  },
  {
    title: "Miscellaneous first-line supervisors, protective service workers",
    employment: "81.4",
    none: 2.1,
    hs: 21.6,
    some: 28.8,
    ass: 11.9,
    uni: 24.7,
    master: 9.2,
    phd: 1.7
  },
  {
    title:
      "Crematory operators and personal care and service workers, all other",
    employment: "80.5",
    none: 9.8,
    hs: 27.5,
    some: 27.9,
    ass: 9.9,
    uni: 19.6,
    master: 4.3,
    phd: 1
  },
  {
    title: "Slaughterers and meat packers",
    employment: "79.7",
    none: 29.5,
    hs: 43.7,
    some: 17.8,
    ass: 4.5,
    uni: 3.8,
    master: 0.6,
    phd: 0.1
  },
  {
    title: "Natural sciences managers",
    employment: "79.0",
    none: 0.4,
    hs: 2.8,
    some: 3.7,
    ass: 3.9,
    uni: 33.8,
    master: 34.8,
    phd: 20.6
  },
  {
    title: "Property appraisers and assessors",
    employment: "78.7",
    none: 0.7,
    hs: 10.3,
    some: 24.2,
    ass: 9.2,
    uni: 43.9,
    master: 9.1,
    phd: 2.6
  },
  {
    title: "Special education teachers, middle school",
    employment: "78.5",
    none: 0.3,
    hs: 3.9,
    some: 5.3,
    ass: 3.5,
    uni: 33.4,
    master: 50.1,
    phd: 3.5
  },
  {
    title: "Demonstrators and product promoters",
    employment: "76.3",
    none: 8.1,
    hs: 29.3,
    some: 27.5,
    ass: 11.4,
    uni: 17.3,
    master: 5.5,
    phd: 0.9
  },
  {
    title: "Diagnostic medical sonographers",
    employment: "75.9",
    none: 1.2,
    hs: 4.3,
    some: 12.6,
    ass: 35.7,
    uni: 36.1,
    master: 7.1,
    phd: 3
  },
  {
    title: "Helpers--electricians",
    employment: "75.5",
    none: 34.3,
    hs: 38.8,
    some: 16.6,
    ass: 4.1,
    uni: 5,
    master: 1,
    phd: 0.1
  },
  {
    title: "English language and literature teachers, postsecondary",
    employment: "75.0",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Airline pilots, copilots, and flight engineers",
    employment: "74.7",
    none: 0.6,
    hs: 4.6,
    some: 13,
    ass: 7.2,
    uni: 57.2,
    master: 14.6,
    phd: 2.7
  },
  {
    title: "Woodworking machine setters, operators, and tenders, except sawing",
    employment: "74.6",
    none: 22.5,
    hs: 47.9,
    some: 21,
    ass: 5.2,
    uni: 3.3,
    master: 0.1,
    phd: 0
  },
  {
    title: "Purchasing managers",
    employment: "74.4",
    none: 1.3,
    hs: 11.4,
    some: 16.9,
    ass: 8.2,
    uni: 40.7,
    master: 18.7,
    phd: 2.7
  },
  {
    title: "Gambling dealers",
    employment: "74.1",
    none: 9.1,
    hs: 34.3,
    some: 28.3,
    ass: 9.8,
    uni: 15.8,
    master: 1.9,
    phd: 0.8
  },
  {
    title: "Audio and video technicians",
    employment: "73.9",
    none: 1.8,
    hs: 14.2,
    some: 24.4,
    ass: 13.6,
    uni: 39,
    master: 6.1,
    phd: 1
  },
  {
    title: "Labor relations specialists",
    employment: "73.5",
    none: 1,
    hs: 8.6,
    some: 17.6,
    ass: 8.1,
    uni: 45.7,
    master: 17,
    phd: 2
  },
  {
    title: "Security and fire alarm systems installers",
    employment: "73.4",
    none: 7.2,
    hs: 34.1,
    some: 35.6,
    ass: 13,
    uni: 9.2,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Marriage and family therapists",
    employment: "73.2",
    none: 0.6,
    hs: 4.1,
    some: 4.6,
    ass: 3.9,
    uni: 17,
    master: 61.8,
    phd: 7.9
  },
  {
    title: "Credit analysts",
    employment: "73.0",
    none: 0.8,
    hs: 10.7,
    some: 12.5,
    ass: 8.2,
    uni: 49.8,
    master: 16.1,
    phd: 1.8
  },
  {
    title: "Dietitians and nutritionists",
    employment: "73.0",
    none: 2.3,
    hs: 9.4,
    some: 6.4,
    ass: 3.7,
    uni: 41.6,
    master: 29.6,
    phd: 6.9
  },
  {
    title: "Nursing instructors and teachers, postsecondary",
    employment: "72.6",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Career/technical education teachers, secondary school",
    employment: "72.3",
    none: 0,
    hs: 0,
    some: 2.2,
    ass: 1.5,
    uni: 40.2,
    master: 51,
    phd: 5
  },
  {
    title: "Social workers, all other",
    employment: "71.4",
    none: 1,
    hs: 3.9,
    some: 7.4,
    ass: 5.8,
    uni: 41.5,
    master: 38.3,
    phd: 2.2
  },
  {
    title: "Food preparation and serving related workers, all other",
    employment: "71.2",
    none: 15.9,
    hs: 35.7,
    some: 33.2,
    ass: 3.9,
    uni: 10.2,
    master: 1.2,
    phd: 0
  },
  {
    title: "Structural iron and steel workers",
    employment: "71.0",
    none: 14.5,
    hs: 48.6,
    some: 28.4,
    ass: 5.2,
    uni: 3.2,
    master: 0.1,
    phd: 0
  },
  {
    title: "Financial examiners",
    employment: "70.8",
    none: 0.3,
    hs: 6.4,
    some: 6.4,
    ass: 5.9,
    uni: 52.2,
    master: 24.4,
    phd: 4.5
  },
  {
    title:
      "Extruding and drawing machine setters, operators, and tenders, metal and plastic",
    employment: "70.5",
    none: 12.9,
    hs: 50.3,
    some: 23.8,
    ass: 7.4,
    uni: 3.9,
    master: 1.7,
    phd: 0
  },
  {
    title: "First-line supervisors of firefighting and prevention workers",
    employment: "70.2",
    none: 0.7,
    hs: 12.3,
    some: 31.3,
    ass: 22,
    uni: 25.3,
    master: 7.7,
    phd: 0.7
  },
  {
    title: "Education teachers, postsecondary",
    employment: "70.0",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Structural metal fabricators and fitters",
    employment: "70.0",
    none: 13.3,
    hs: 47.3,
    some: 24.3,
    ass: 9.2,
    uni: 5.1,
    master: 0.7,
    phd: 0
  },
  {
    title: "Opticians, dispensing",
    employment: "69.8",
    none: 2.3,
    hs: 25.2,
    some: 32.1,
    ass: 17.5,
    uni: 19.5,
    master: 1.8,
    phd: 1.6
  },
  {
    title: "Life, physical, and social science technicians, all other",
    employment: "69.7",
    none: 2.8,
    hs: 15.2,
    some: 23.2,
    ass: 13.5,
    uni: 31.5,
    master: 10.5,
    phd: 3.2
  },
  {
    title: "Brickmasons and blockmasons",
    employment: "69.6",
    none: 33.1,
    hs: 43.3,
    some: 15.7,
    ass: 4,
    uni: 3.4,
    master: 0.5,
    phd: 0
  },
  {
    title:
      "Grinding, lapping, polishing, and buffing machine tool setters, operators, and tenders, metal and plastic",
    employment: "69.4",
    none: 22.6,
    hs: 50.6,
    some: 17.4,
    ass: 5.1,
    uni: 3.7,
    master: 0.4,
    phd: 0.2
  },
  {
    title: "Civil engineering technologists and technicians",
    employment: "68.8",
    none: 4.1,
    hs: 24.3,
    some: 30.7,
    ass: 20.1,
    uni: 17.2,
    master: 2.9,
    phd: 0.8
  },
  {
    title: "Skincare specialists",
    employment: "68.7",
    none: 2.9,
    hs: 23.1,
    some: 36.3,
    ass: 15.6,
    uni: 18.6,
    master: 2.9,
    phd: 0.5
  },
  {
    title: "Tree trimmers and pruners",
    employment: "66.4",
    none: 32.5,
    hs: 40.6,
    some: 12.3,
    ass: 5.1,
    uni: 7.8,
    master: 1.3,
    phd: 0.4
  },
  {
    title: "Religious workers, all other",
    employment: "66.3",
    none: 2,
    hs: 14.1,
    some: 19,
    ass: 9,
    uni: 32.5,
    master: 19.1,
    phd: 4.3
  },
  {
    title: "Computer hardware engineers",
    employment: "66.2",
    none: 0.1,
    hs: 4.8,
    some: 8.1,
    ass: 8.7,
    uni: 46.1,
    master: 26.3,
    phd: 5.9
  },
  {
    title: "Maintenance workers, machinery",
    employment: "65.6",
    none: 10.1,
    hs: 46.5,
    some: 24,
    ass: 10.5,
    uni: 7.6,
    master: 0.7,
    phd: 0.5
  },
  {
    title:
      "Extruding, forming, pressing, and compacting machine setters, operators, and tenders",
    employment: "65.6",
    none: 16.6,
    hs: 52.2,
    some: 17.8,
    ass: 6.4,
    uni: 4.5,
    master: 2,
    phd: 0.5
  },
  {
    title: "Chemical technicians",
    employment: "65.1",
    none: 2.8,
    hs: 24.1,
    some: 22.9,
    ass: 11.2,
    uni: 31.3,
    master: 5.4,
    phd: 2.3
  },
  {
    title: "Agricultural equipment operators",
    employment: "65.0",
    none: 49.9,
    hs: 28,
    some: 10.6,
    ass: 4,
    uni: 6.2,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Industrial engineering technologists and technicians",
    employment: "64.1",
    none: 4.1,
    hs: 24.3,
    some: 30.7,
    ass: 20.1,
    uni: 17.2,
    master: 2.9,
    phd: 0.8
  },
  {
    title: "Community health workers",
    employment: "64.1",
    none: 2.1,
    hs: 11.3,
    some: 16.2,
    ass: 9.2,
    uni: 37.2,
    master: 20.2,
    phd: 3.7
  },
  {
    title: "Sales engineers",
    employment: "63.8",
    none: 0.4,
    hs: 3.9,
    some: 11.8,
    ass: 6.8,
    uni: 57.8,
    master: 17.4,
    phd: 1.9
  },
  {
    title: "Data scientists and mathematical science occupations, all other",
    employment: "63.2",
    none: 0.4,
    hs: 2.8,
    some: 6.9,
    ass: 3.8,
    uni: 37.2,
    master: 35.4,
    phd: 13.5
  },
  {
    title: "Procurement clerks",
    employment: "63.0",
    none: 1.9,
    hs: 17.8,
    some: 26.1,
    ass: 12,
    uni: 31.5,
    master: 9.5,
    phd: 1.2
  },
  {
    title: "Machine feeders and offbearers",
    employment: "63.0",
    none: 17.6,
    hs: 49.5,
    some: 16.5,
    ass: 6.6,
    uni: 8.6,
    master: 1,
    phd: 0.3
  },
  {
    title: "Special effects artists and animators",
    employment: "62.4",
    none: 2.7,
    hs: 11.6,
    some: 18.9,
    ass: 8.2,
    uni: 43.6,
    master: 13.4,
    phd: 1.6
  },
  {
    title: "Tool and die makers",
    employment: "62.3",
    none: 5.5,
    hs: 40.3,
    some: 36,
    ass: 13.8,
    uni: 3.2,
    master: 0.7,
    phd: 0.5
  },
  {
    title: "Title examiners, abstractors, and searchers",
    employment: "62.2",
    none: 3.1,
    hs: 23.1,
    some: 26.8,
    ass: 12.1,
    uni: 25,
    master: 5.8,
    phd: 4.2
  },
  {
    title: "Aerospace engineers",
    employment: "61.4",
    none: 0.4,
    hs: 1.7,
    some: 5.2,
    ass: 3.7,
    uni: 49.7,
    master: 32.6,
    phd: 6.7
  },
  {
    title: "Health education specialists",
    employment: "61.1",
    none: 2.1,
    hs: 11.3,
    some: 16.2,
    ass: 9.2,
    uni: 37.2,
    master: 20.2,
    phd: 3.7
  },
  {
    title: "Ophthalmic medical technicians",
    employment: "60.9",
    none: 8.8,
    hs: 38.7,
    some: 26.7,
    ass: 13.8,
    uni: 10.4,
    master: 1.1,
    phd: 0.5
  },
  {
    title: "Education and childcare administrators, preschool and daycare",
    employment: "60.8",
    none: 0.7,
    hs: 4.9,
    some: 7.2,
    ass: 4.4,
    uni: 25.3,
    master: 43.3,
    phd: 14.3
  },
  {
    title: "Biological science teachers, postsecondary",
    employment: "60.5",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Travel agents",
    employment: "60.5",
    none: 3.1,
    hs: 19.4,
    some: 27.3,
    ass: 11.6,
    uni: 31.3,
    master: 5.9,
    phd: 1.4
  },
  {
    title: "Animal trainers",
    employment: "60.2",
    none: 7.5,
    hs: 25.2,
    some: 23.4,
    ass: 8.3,
    uni: 29.6,
    master: 4.8,
    phd: 1.2
  },
  {
    title: "Switchboard operators, including answering service",
    employment: "59.9",
    none: 3.2,
    hs: 30.8,
    some: 33.3,
    ass: 12.9,
    uni: 17.3,
    master: 2.5,
    phd: 0
  },
  {
    title: "Motor vehicle operators, all other",
    employment: "59.6",
    none: 11.6,
    hs: 37.9,
    some: 27.1,
    ass: 9.1,
    uni: 11.2,
    master: 2.5,
    phd: 0.5
  },
  {
    title: "Weighers, measurers, checkers, and samplers, recordkeeping",
    employment: "59.1",
    none: 11.8,
    hs: 36.8,
    some: 26.9,
    ass: 9.9,
    uni: 12.1,
    master: 2.2,
    phd: 0.3
  },
  {
    title: "Medical equipment preparers",
    employment: "58.7",
    none: 6.6,
    hs: 30.1,
    some: 30.2,
    ass: 12.1,
    uni: 15.7,
    master: 3.9,
    phd: 1.4
  },
  {
    title: "Cardiovascular technologists and technicians",
    employment: "58.2",
    none: 2,
    hs: 15.6,
    some: 25.2,
    ass: 16.5,
    uni: 28.2,
    master: 11,
    phd: 1.5
  },
  {
    title: "Tax examiners and collectors, and revenue agents",
    employment: "56.9",
    none: 1.3,
    hs: 17,
    some: 21.8,
    ass: 10.2,
    uni: 36.3,
    master: 10.8,
    phd: 2.6
  },
  {
    title:
      "Electrical and electronics repairers, commercial and industrial equipment",
    employment: "56.4",
    none: 8.3,
    hs: 30.1,
    some: 30.8,
    ass: 16.9,
    uni: 13,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Helpers--pipelayers, plumbers, pipefitters, and steamfitters",
    employment: "56.2",
    none: 34.3,
    hs: 38.8,
    some: 16.6,
    ass: 4.1,
    uni: 5,
    master: 1,
    phd: 0.1
  },
  {
    title: "Mathematical science teachers, postsecondary",
    employment: "56.1",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title:
      "Acupuncturists and healthcare diagnosing or treating practitioners, all other",
    employment: "55.7",
    none: 1.3,
    hs: 2,
    some: 8.6,
    ass: 2.8,
    uni: 18.1,
    master: 39.7,
    phd: 27.6
  },
  {
    title: "General internal medicine physicians",
    employment: "55.5",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title: "First-line supervisors of correctional officers",
    employment: "55.3",
    none: 1.5,
    hs: 25.1,
    some: 31.1,
    ass: 12.7,
    uni: 22.7,
    master: 6.6,
    phd: 0.4
  },
  {
    title: "Psychologists, all other",
    employment: "55.2",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 8.5,
    master: 39.7,
    phd: 51.9
  },
  {
    title: "Medical equipment repairers",
    employment: "54.9",
    none: 3.5,
    hs: 25.1,
    some: 27.4,
    ass: 20.4,
    uni: 19.4,
    master: 3.7,
    phd: 0.6
  },
  {
    title: "Surveying and mapping technicians",
    employment: "54.8",
    none: 4.6,
    hs: 29.8,
    some: 33.4,
    ass: 22.4,
    uni: 8.1,
    master: 1.2,
    phd: 0.5
  },
  {
    title: "Counselors, all other",
    employment: "54.3",
    none: 1.1,
    hs: 7,
    some: 10.9,
    ass: 5.9,
    uni: 26.9,
    master: 41.9,
    phd: 6.4
  },
  {
    title: "Psychiatric aides",
    employment: "54.1",
    none: 5.4,
    hs: 30.6,
    some: 34,
    ass: 13,
    uni: 13.4,
    master: 3.2,
    phd: 0.6
  },
  {
    title: "Tile and stone setters",
    employment: "54.1",
    none: 31.7,
    hs: 43.7,
    some: 15.6,
    ass: 3.5,
    uni: 4.9,
    master: 0.7,
    phd: 0.1
  },
  {
    title:
      "Door-to-door sales workers, news and street vendors, and related workers",
    employment: "54.0",
    none: 12.5,
    hs: 29.8,
    some: 23.6,
    ass: 8.1,
    uni: 19.8,
    master: 5.3,
    phd: 1
  },
  {
    title: "Mechanical drafters",
    employment: "53.6",
    none: 1.5,
    hs: 10.7,
    some: 23.6,
    ass: 33,
    uni: 24.1,
    master: 5.5,
    phd: 1.7
  },
  {
    title: "Glaziers",
    employment: "53.6",
    none: 16.2,
    hs: 50,
    some: 22.9,
    ass: 6,
    uni: 4.6,
    master: 0.3,
    phd: 0
  },
  {
    title: "Cutting and slicing machine setters, operators, and tenders",
    employment: "53.6",
    none: 31.2,
    hs: 44.3,
    some: 16.8,
    ass: 3.9,
    uni: 3,
    master: 0.8,
    phd: 0.1
  },
  {
    title: "First-line supervisors of farming, fishing, and forestry workers",
    employment: "53.2",
    none: 35.3,
    hs: 28.9,
    some: 15.6,
    ass: 5.1,
    uni: 11.2,
    master: 3.1,
    phd: 0.7
  },
  {
    title: "Barbers",
    employment: "53.0",
    none: 10.4,
    hs: 48,
    some: 26.8,
    ass: 8.4,
    uni: 5.5,
    master: 0.8,
    phd: 0.1
  },
  {
    title: "Budget analysts",
    employment: "52.5",
    none: 0.4,
    hs: 5.7,
    some: 9.7,
    ass: 6,
    uni: 43.7,
    master: 31.9,
    phd: 2.6
  },
  {
    title: "Medical transcriptionists",
    employment: "52.4",
    none: 1.2,
    hs: 16.4,
    some: 32.3,
    ass: 17.1,
    uni: 24.3,
    master: 5.2,
    phd: 3.5
  },
  {
    title: "Environmental engineers",
    employment: "52.3",
    none: 0.7,
    hs: 3.4,
    some: 2.6,
    ass: 2.1,
    uni: 48.9,
    master: 36.6,
    phd: 5.7
  },
  {
    title: "Technical writers",
    employment: "52.3",
    none: 0.5,
    hs: 4.8,
    some: 9.9,
    ass: 7.1,
    uni: 46.6,
    master: 22.8,
    phd: 8.2
  },
  {
    title: "Legislators",
    employment: "52.2",
    none: 1.5,
    hs: 8.3,
    some: 14.2,
    ass: 5.1,
    uni: 40.5,
    master: 23.7,
    phd: 6.7
  },
  {
    title: "Transportation security screeners",
    employment: "51.8",
    none: 1.8,
    hs: 20.5,
    some: 32.4,
    ass: 12.7,
    uni: 25.4,
    master: 6.4,
    phd: 0.8
  },
  {
    title: "Actors",
    employment: "51.6",
    none: 2.1,
    hs: 14,
    some: 16.5,
    ass: 5.4,
    uni: 47.9,
    master: 13.2,
    phd: 0.9
  },
  {
    title: "Chiropractors",
    employment: "51.4",
    none: 0.2,
    hs: 1.4,
    some: 1.3,
    ass: 0.6,
    uni: 4.9,
    master: 2.4,
    phd: 89.2
  },
  {
    title: "Control and valve installers and repairers, except mechanical door",
    employment: "50.8",
    none: 4,
    hs: 40.9,
    some: 31.9,
    ass: 16.9,
    uni: 5.8,
    master: 0.5,
    phd: 0.1
  },
  {
    title: "Education administrators, all other",
    employment: "50.5",
    none: 0.7,
    hs: 4.9,
    some: 7.2,
    ass: 4.4,
    uni: 25.3,
    master: 43.3,
    phd: 14.3
  },
  {
    title: "Sawing machine setters, operators, and tenders, wood",
    employment: "50.5",
    none: 34.4,
    hs: 44.7,
    some: 11.8,
    ass: 4.4,
    uni: 2.4,
    master: 2.1,
    phd: 0.1
  },
  {
    title: "Legal support workers, all other",
    employment: "49.6",
    none: 2.1,
    hs: 11.1,
    some: 17.2,
    ass: 7.9,
    uni: 42.8,
    master: 11.7,
    phd: 7.2
  },
  {
    title:
      "Separating, filtering, clarifying, precipitating, and still machine setters, operators, and tenders",
    employment: "49.6",
    none: 5.1,
    hs: 32.4,
    some: 25.7,
    ass: 9.6,
    uni: 22.5,
    master: 4.2,
    phd: 0.5
  },
  {
    title:
      "Adult basic education, adult secondary education, and English as a Second Language instructors",
    employment: "48.3",
    none: 2,
    hs: 10.9,
    some: 17.7,
    ass: 8.6,
    uni: 36,
    master: 20.2,
    phd: 4.6
  },
  {
    title: "Lodging managers",
    employment: "48.1",
    none: 4.8,
    hs: 16.7,
    some: 23,
    ass: 10,
    uni: 36.1,
    master: 8,
    phd: 1.4
  },
  {
    title: "Music directors and composers",
    employment: "48.1",
    none: 1.4,
    hs: 7.9,
    some: 15.3,
    ass: 4.3,
    uni: 41.4,
    master: 24.8,
    phd: 4.9
  },
  {
    title: "Farm equipment mechanics and service technicians",
    employment: "47.6",
    none: 12,
    hs: 47.3,
    some: 23.4,
    ass: 13.1,
    uni: 3.3,
    master: 0.6,
    phd: 0.2
  },
  {
    title: "News analysts, reporters, and journalists",
    employment: "46.7",
    none: 0.8,
    hs: 2.6,
    some: 7.9,
    ass: 3.9,
    uni: 60,
    master: 21.3,
    phd: 3.5
  },
  {
    title: "Physical therapist aides",
    employment: "46.7",
    none: 1.5,
    hs: 5.3,
    some: 10.4,
    ass: 50.5,
    uni: 28.1,
    master: 2.6,
    phd: 1.7
  },
  {
    title: "Engineering teachers, postsecondary",
    employment: "46.3",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Molders, shapers, and casters, except metal and plastic",
    employment: "46.3",
    none: 22.5,
    hs: 30.3,
    some: 19.7,
    ass: 7.3,
    uni: 15.5,
    master: 3.4,
    phd: 1.3
  },
  {
    title: "Biological scientists, all other",
    employment: "46.2",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 46.4,
    master: 30.8,
    phd: 22.8
  },
  {
    title: "New accounts clerks",
    employment: "46.1",
    none: 1.6,
    hs: 18.5,
    some: 34.5,
    ass: 13.6,
    uni: 25.8,
    master: 5.2,
    phd: 0.9
  },
  {
    title: "Surveyors",
    employment: "46.0",
    none: 0.1,
    hs: 3.4,
    some: 11,
    ass: 12.4,
    uni: 60,
    master: 9.9,
    phd: 3.2
  },
  {
    title: "Brokerage clerks",
    employment: "45.5",
    none: 2.1,
    hs: 19,
    some: 26.7,
    ass: 14.2,
    uni: 28,
    master: 8.6,
    phd: 1.4
  },
  {
    title: "Word processors and typists",
    employment: "45.2",
    none: 3.3,
    hs: 27,
    some: 29.5,
    ass: 13.7,
    uni: 20.9,
    master: 4.5,
    phd: 1.2
  },
  {
    title: "Food processing workers, all other",
    employment: "45.0",
    none: 25.4,
    hs: 43.5,
    some: 20.6,
    ass: 5,
    uni: 4.8,
    master: 0.5,
    phd: 0.2
  },
  {
    title: "Paving, surfacing, and tamping equipment operators",
    employment: "44.8",
    none: 20.4,
    hs: 53,
    some: 18,
    ass: 5.7,
    uni: 2.5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Crane and tower operators",
    employment: "44.8",
    none: 10.6,
    hs: 55.9,
    some: 22.6,
    ass: 6.2,
    uni: 3.9,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Hazardous materials removal workers",
    employment: "44.5",
    none: 13.1,
    hs: 47.8,
    some: 23.1,
    ass: 6,
    uni: 7.8,
    master: 2.2,
    phd: 0
  },
  {
    title: "Nurse anesthetists",
    employment: "44.2",
    none: 0.8,
    hs: 0.1,
    some: 0.4,
    ass: 1.3,
    uni: 10.2,
    master: 72.1,
    phd: 15.1
  },
  {
    title: "Millwrights",
    employment: "44.2",
    none: 7,
    hs: 45.5,
    some: 27.9,
    ass: 13.1,
    uni: 5.2,
    master: 1.1,
    phd: 0.2
  },
  {
    title: "Psychology teachers, postsecondary",
    employment: "44.1",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Orderlies",
    employment: "44.0",
    none: 5.4,
    hs: 30.6,
    some: 34,
    ass: 13,
    uni: 13.4,
    master: 3.2,
    phd: 0.6
  },
  {
    title: "Tour and travel guides",
    employment: "44.0",
    none: 2.6,
    hs: 20.7,
    some: 21.6,
    ass: 7.3,
    uni: 36.1,
    master: 10.5,
    phd: 1.2
  },
  {
    title: "Engine and other machine assemblers",
    employment: "43.7",
    none: 13,
    hs: 46.4,
    some: 31.2,
    ass: 5.2,
    uni: 4.2,
    master: 0,
    phd: 0
  },
  {
    title: "Roustabouts, oil and gas",
    employment: "43.5",
    none: 17.6,
    hs: 47.3,
    some: 25.3,
    ass: 3.7,
    uni: 5.7,
    master: 0.4,
    phd: 0.1
  },
  {
    title: "Optometrists",
    employment: "43.3",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 3.7,
    phd: 96.3
  },
  {
    title: "Occupational therapy assistants",
    employment: "43.3",
    none: 2.2,
    hs: 12.3,
    some: 16,
    ass: 48.6,
    uni: 16.3,
    master: 4,
    phd: 0.5
  },
  {
    title: "Service unit operators, oil and gas",
    employment: "43.1",
    none: 17.6,
    hs: 47.3,
    some: 25.3,
    ass: 3.7,
    uni: 5.7,
    master: 0.4,
    phd: 0.1
  },
  {
    title: "Floral designers",
    employment: "42.3",
    none: 10.2,
    hs: 36.1,
    some: 22.3,
    ass: 10.1,
    uni: 17.6,
    master: 3,
    phd: 0.7
  },
  {
    title: "Funeral attendants",
    employment: "42.3",
    none: 6.3,
    hs: 25.3,
    some: 26.8,
    ass: 16.8,
    uni: 19.7,
    master: 3.8,
    phd: 1.4
  },
  {
    title: "Training and development managers",
    employment: "42.1",
    none: 1,
    hs: 7.2,
    some: 15.3,
    ass: 7.2,
    uni: 39.8,
    master: 25.3,
    phd: 4.3
  },
  {
    title: "Statisticians",
    employment: "42.0",
    none: 0.4,
    hs: 2.8,
    some: 6.9,
    ass: 3.8,
    uni: 37.2,
    master: 35.4,
    phd: 13.5
  },
  {
    title: "Magnetic resonance imaging technologists",
    employment: "42.0",
    none: 1.4,
    hs: 6.9,
    some: 11.5,
    ass: 36.9,
    uni: 33.3,
    master: 8.4,
    phd: 1.7
  },
  {
    title: "Tailors, dressmakers, and custom sewers",
    employment: "42.0",
    none: 24.7,
    hs: 32.1,
    some: 17.5,
    ass: 7,
    uni: 15.7,
    master: 2.5,
    phd: 0.4
  },
  {
    title: "Office machine operators, except computer",
    employment: "41.7",
    none: 7.7,
    hs: 35.2,
    some: 30.3,
    ass: 12.4,
    uni: 11.8,
    master: 2.3,
    phd: 0.2
  },
  {
    title: "Print binding and finishing workers",
    employment: "41.6",
    none: 15.7,
    hs: 43,
    some: 23,
    ass: 10.5,
    uni: 7.6,
    master: 0.2,
    phd: 0
  },
  {
    title: "Surgeons, except ophthalmologists",
    employment: "41.5",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title:
      "Excavating and loading machine and dragline operators, surface mining",
    employment: "41.3",
    none: 19.8,
    hs: 49.4,
    some: 19,
    ass: 5.9,
    uni: 5.2,
    master: 0.6,
    phd: 0.1
  },
  {
    title: "Cooks, private household",
    employment: "40.9",
    none: 27.3,
    hs: 41.9,
    some: 18.5,
    ass: 6.1,
    uni: 5.4,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Petroleum pump system operators, refinery operators, and gaugers",
    employment: "40.6",
    none: 9.2,
    hs: 33.9,
    some: 33.7,
    ass: 11.2,
    uni: 11.1,
    master: 0.6,
    phd: 0.3
  },
  {
    title: "Mechanical engineering technologists and technicians",
    employment: "40.4",
    none: 4.1,
    hs: 24.3,
    some: 30.7,
    ass: 20.1,
    uni: 17.2,
    master: 2.9,
    phd: 0.8
  },
  {
    title: "Social science research assistants",
    employment: "40.4",
    none: 2.9,
    hs: 14.5,
    some: 23.5,
    ass: 13.7,
    uni: 31.1,
    master: 10.9,
    phd: 3.5
  },
  {
    title: "Social scientists and related workers, all other",
    employment: "39.9",
    none: 0.7,
    hs: 1.5,
    some: 6,
    ass: 4,
    uni: 32.8,
    master: 38.8,
    phd: 16.1
  },
  {
    title: "Plating machine setters, operators, and tenders, metal and plastic",
    employment: "39.3",
    none: 18.5,
    hs: 48.2,
    some: 21.1,
    ass: 6.6,
    uni: 4.8,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Commercial pilots",
    employment: "39.2",
    none: 0.6,
    hs: 4.6,
    some: 13,
    ass: 7.2,
    uni: 57.2,
    master: 14.6,
    phd: 2.7
  },
  {
    title: "Urban and regional planners",
    employment: "39.1",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 43.1,
    master: 52.7,
    phd: 4.2
  },
  {
    title: "Pharmacy aides",
    employment: "38.9",
    none: 3.8,
    hs: 27.5,
    some: 24.8,
    ass: 15.4,
    uni: 18.9,
    master: 2.3,
    phd: 7.1
  },
  {
    title: "Computer science teachers, postsecondary",
    employment: "37.8",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Aircraft structure, surfaces, rigging, and systems assemblers",
    employment: "37.8",
    none: 16.4,
    hs: 46.1,
    some: 23,
    ass: 7.6,
    uni: 5.9,
    master: 0.8,
    phd: 0.2
  },
  {
    title: "Concierges",
    employment: "37.1",
    none: 8.9,
    hs: 32.9,
    some: 29.1,
    ass: 9.6,
    uni: 16.3,
    master: 2.4,
    phd: 0.8
  },
  {
    title: "Pipelayers",
    employment: "35.1",
    none: 26.4,
    hs: 42.1,
    some: 21.2,
    ass: 5.5,
    uni: 3.9,
    master: 0.6,
    phd: 0.3
  },
  {
    title:
      "Welding, soldering, and brazing machine setters, operators, and tenders",
    employment: "35.1",
    none: 18.6,
    hs: 46.3,
    some: 23.4,
    ass: 8.7,
    uni: 2.5,
    master: 0.4,
    phd: 0.2
  },
  {
    title: "Biochemists and biophysicists",
    employment: "34.8",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 46.4,
    master: 30.8,
    phd: 22.8
  },
  {
    title: "Rolling machine setters, operators, and tenders, metal and plastic",
    employment: "34.5",
    none: 12.9,
    hs: 50.3,
    some: 23.8,
    ass: 7.4,
    uni: 3.9,
    master: 1.7,
    phd: 0
  },
  {
    title: "Special education teachers, all other",
    employment: "34.3",
    none: 0.3,
    hs: 3.9,
    some: 5.3,
    ass: 3.5,
    uni: 33.4,
    master: 50.1,
    phd: 3.5
  },
  {
    title: "Environmental science and protection technicians, including health",
    employment: "34.2",
    none: 2.3,
    hs: 20.6,
    some: 21.4,
    ass: 12.5,
    uni: 34,
    master: 7.8,
    phd: 1.5
  },
  {
    title: "Credit counselors",
    employment: "33.8",
    none: 0.9,
    hs: 13.1,
    some: 21.7,
    ass: 10.4,
    uni: 42.3,
    master: 10.5,
    phd: 1
  },
  {
    title:
      "Miscellaneous entertainers and performers, sports and related workers",
    employment: "33.7",
    none: 3.6,
    hs: 21.3,
    some: 26.6,
    ass: 6.8,
    uni: 32.7,
    master: 6.3,
    phd: 2.8
  },
  {
    title: "Private detectives and investigators",
    employment: "33.7",
    none: 0.6,
    hs: 11.8,
    some: 20.1,
    ass: 11.4,
    uni: 38.2,
    master: 14.1,
    phd: 3.8
  },
  {
    title: "Communications teachers, postsecondary",
    employment: "33.6",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Power plant operators",
    employment: "33.6",
    none: 1.9,
    hs: 30.3,
    some: 30.3,
    ass: 18.2,
    uni: 16.3,
    master: 2.5,
    phd: 0.5
  },
  {
    title: "Insulation workers, floor, ceiling, and wall",
    employment: "33.3",
    none: 29.4,
    hs: 45.8,
    some: 16.4,
    ass: 3.6,
    uni: 4.1,
    master: 0.8,
    phd: 0
  },
  {
    title: "Outdoor power equipment and other small engine mechanics",
    employment: "33.3",
    none: 13.6,
    hs: 44.2,
    some: 27,
    ass: 9.7,
    uni: 3.9,
    master: 0.6,
    phd: 1
  },
  {
    title: "Semiconductor processing technicians",
    employment: "33.2",
    none: 17.8,
    hs: 45.8,
    some: 21.4,
    ass: 7,
    uni: 6.6,
    master: 1.2,
    phd: 0.3
  },
  {
    title: "Dental laboratory technicians",
    employment: "33.1",
    none: 4.9,
    hs: 26,
    some: 34.7,
    ass: 16.9,
    uni: 14.4,
    master: 2.2,
    phd: 0.8
  },
  {
    title: "Computer and information research scientists",
    employment: "33.0",
    none: 0,
    hs: 0.7,
    some: 5,
    ass: 2.2,
    uni: 34.8,
    master: 36.6,
    phd: 20.8
  },
  {
    title: "Forest and conservation technicians",
    employment: "33.0",
    none: 2.9,
    hs: 14.5,
    some: 23.5,
    ass: 13.7,
    uni: 31.1,
    master: 10.9,
    phd: 3.5
  },
  {
    title: "Film and video editors",
    employment: "33.0",
    none: 1.3,
    hs: 8.4,
    some: 18,
    ass: 8.1,
    uni: 54,
    master: 9.4,
    phd: 0.8
  },
  {
    title: "Miscellaneous construction and related workers",
    employment: "32.9",
    none: 22,
    hs: 47.3,
    some: 18.5,
    ass: 5.7,
    uni: 6,
    master: 0.3,
    phd: 0.2
  },
  {
    title: "Railroad conductors and yardmasters",
    employment: "32.9",
    none: 2.2,
    hs: 39.4,
    some: 34.6,
    ass: 10.6,
    uni: 12,
    master: 1.2,
    phd: 0
  },
  {
    title: "Carpet installers",
    employment: "32.6",
    none: 31.7,
    hs: 43.7,
    some: 15.6,
    ass: 3.5,
    uni: 4.9,
    master: 0.7,
    phd: 0.1
  },
  {
    title:
      "Crushing, grinding, and polishing machine setters, operators, and tenders",
    employment: "32.6",
    none: 18.7,
    hs: 46.1,
    some: 20.5,
    ass: 8.8,
    uni: 4.8,
    master: 0.8,
    phd: 0.2
  },
  {
    title: "Graders and sorters, agricultural products",
    employment: "32.5",
    none: 52.4,
    hs: 29.5,
    some: 9.6,
    ass: 2.6,
    uni: 4.6,
    master: 0.5,
    phd: 0.8
  },
  {
    title: "Jewelers and precious stone and metal workers",
    employment: "32.4",
    none: 12.5,
    hs: 25.9,
    some: 24,
    ass: 7.7,
    uni: 22,
    master: 5.2,
    phd: 2.7
  },
  {
    title: "Fishing and hunting workers",
    employment: "32.3",
    none: 21.4,
    hs: 41.3,
    some: 20.3,
    ass: 5.2,
    uni: 9.9,
    master: 1.7,
    phd: 0.3
  },
  {
    title: "Upholsterers",
    employment: "32.1",
    none: 33.5,
    hs: 38.8,
    some: 15.9,
    ass: 6.9,
    uni: 3.8,
    master: 1.1,
    phd: 0.1
  },
  {
    title: "Aircraft service attendants and transportation workers, all other",
    employment: "32.1",
    none: 11.1,
    hs: 44.4,
    some: 24.9,
    ass: 10,
    uni: 8.1,
    master: 1.5,
    phd: 0.1
  },
  {
    title: "Financial clerks, all other",
    employment: "31.9",
    none: 1.2,
    hs: 13.6,
    some: 22.4,
    ass: 8,
    uni: 36.8,
    master: 16.5,
    phd: 1.4
  },
  {
    title: "Designers, all other",
    employment: "31.6",
    none: 1.8,
    hs: 7.6,
    some: 16.1,
    ass: 13.1,
    uni: 45.6,
    master: 13.4,
    phd: 2.5
  },
  {
    title: "Home appliance repairers",
    employment: "31.6",
    none: 13.7,
    hs: 38.6,
    some: 29,
    ass: 10.6,
    uni: 6.8,
    master: 0.6,
    phd: 0.7
  },
  {
    title: "Commercial and industrial designers",
    employment: "31.5",
    none: 2,
    hs: 5.2,
    some: 14.9,
    ass: 5.5,
    uni: 58.7,
    master: 12.5,
    phd: 1.2
  },
  {
    title: "Anesthesiologists",
    employment: "31.3",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title: "Helpers--carpenters",
    employment: "31.0",
    none: 34.3,
    hs: 38.8,
    some: 16.6,
    ass: 4.1,
    uni: 5,
    master: 1,
    phd: 0.1
  },
  {
    title: "Logging equipment operators",
    employment: "30.9",
    none: 29.9,
    hs: 46.7,
    some: 13.6,
    ass: 5.6,
    uni: 3.7,
    master: 0.5,
    phd: 0
  },
  {
    title: "Broadcast announcers and radio disc jockeys",
    employment: "30.7",
    none: 2.2,
    hs: 12.9,
    some: 21.7,
    ass: 10.6,
    uni: 42.3,
    master: 9.1,
    phd: 1.3
  },
  {
    title: "Stationary engineers and boiler operators",
    employment: "30.7",
    none: 6.7,
    hs: 34.7,
    some: 26,
    ass: 10.6,
    uni: 15.2,
    master: 5.6,
    phd: 1.1
  },
  {
    title: "Septic tank servicers and sewer pipe cleaners",
    employment: "30.4",
    none: 22,
    hs: 47.3,
    some: 18.5,
    ass: 5.7,
    uni: 6,
    master: 0.3,
    phd: 0.2
  },
  {
    title: "Camera operators, television, video, and film",
    employment: "30.3",
    none: 1.3,
    hs: 8.4,
    some: 18,
    ass: 8.1,
    uni: 54,
    master: 9.4,
    phd: 0.8
  },
  {
    title: "Pressers, textile, garment, and related materials",
    employment: "30.3",
    none: 42.1,
    hs: 38.6,
    some: 12.6,
    ass: 3.9,
    uni: 1.7,
    master: 1.1,
    phd: 0
  },
  {
    title: "Pediatricians, general",
    employment: "30.2",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title: "Athletic trainers",
    employment: "30.0",
    none: 1,
    hs: 5.3,
    some: 12,
    ass: 8.4,
    uni: 34.2,
    master: 34.6,
    phd: 4.5
  },
  {
    title: "Audiovisual equipment installers and repairers",
    employment: "29.9",
    none: 5.2,
    hs: 35.7,
    some: 29.9,
    ass: 15.3,
    uni: 11.7,
    master: 2.2,
    phd: 0
  },
  {
    title: "Captains, mates, and pilots of water vessels",
    employment: "29.9",
    none: 10.1,
    hs: 32.8,
    some: 29,
    ass: 6.5,
    uni: 15.9,
    master: 4.6,
    phd: 1.1
  },
  {
    title: "Set and exhibit designers",
    employment: "29.7",
    none: 1.8,
    hs: 7.6,
    some: 16.1,
    ass: 13.1,
    uni: 45.6,
    master: 13.4,
    phd: 2.5
  },
  {
    title: "Chemical plant and system operators",
    employment: "29.5",
    none: 9.2,
    hs: 33.9,
    some: 33.7,
    ass: 11.2,
    uni: 11.1,
    master: 0.6,
    phd: 0.3
  },
  {
    title: "Judges, magistrate judges, and magistrates",
    employment: "29.4",
    none: 0.2,
    hs: 0.5,
    some: 0.7,
    ass: 0.4,
    uni: 5.5,
    master: 4,
    phd: 88.6
  },
  {
    title: "Geoscientists, except hydrologists and geographers",
    employment: "29.0",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 45.2,
    master: 41,
    phd: 13.9
  },
  {
    title: "Philosophy and religion teachers, postsecondary",
    employment: "29.0",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Transportation inspectors",
    employment: "29.0",
    none: 5.8,
    hs: 27.9,
    some: 30.6,
    ass: 14.1,
    uni: 17.9,
    master: 3,
    phd: 0.7
  },
  {
    title: "Baggage porters and bellhops",
    employment: "28.6",
    none: 8.9,
    hs: 32.9,
    some: 29.1,
    ass: 9.6,
    uni: 16.3,
    master: 2.4,
    phd: 0.8
  },
  {
    title: "Petroleum engineers",
    employment: "28.5",
    none: 1.1,
    hs: 4.2,
    some: 5.8,
    ass: 3.7,
    uni: 57.2,
    master: 18.4,
    phd: 9.7
  },
  {
    title: "Broadcast technicians",
    employment: "28.4",
    none: 1.8,
    hs: 14.2,
    some: 24.4,
    ass: 13.6,
    uni: 39,
    master: 6.1,
    phd: 1
  },
  {
    title: "Insulation workers, mechanical",
    employment: "28.2",
    none: 29.4,
    hs: 45.8,
    some: 16.4,
    ass: 3.6,
    uni: 4.1,
    master: 0.8,
    phd: 0
  },
  {
    title: "Prepress technicians and workers",
    employment: "28.2",
    none: 4.9,
    hs: 38.1,
    some: 23.7,
    ass: 14.8,
    uni: 15.8,
    master: 2.1,
    phd: 0.6
  },
  {
    title: "Therapists, all other",
    employment: "28.1",
    none: 0.4,
    hs: 2.9,
    some: 3.6,
    ass: 5.6,
    uni: 24.4,
    master: 56,
    phd: 7.1
  },
  {
    title: "Psychiatrists",
    employment: "28.1",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title: "Fence erectors",
    employment: "28.0",
    none: 28.6,
    hs: 44.6,
    some: 18.3,
    ass: 3.5,
    uni: 4.4,
    master: 0.6,
    phd: 0
  },
  {
    title: "Fashion designers",
    employment: "27.8",
    none: 2.9,
    hs: 7,
    some: 12.5,
    ass: 13.8,
    uni: 54.8,
    master: 7.7,
    phd: 1.4
  },
  {
    title: "Helpers, construction trades, all other",
    employment: "27.8",
    none: 34.3,
    hs: 38.8,
    some: 16.6,
    ass: 4.1,
    uni: 5,
    master: 1,
    phd: 0.1
  },
  {
    title: "Actuaries",
    employment: "27.7",
    none: 0,
    hs: 0,
    some: 2,
    ass: 0.4,
    uni: 62.2,
    master: 23.8,
    phd: 11.7
  },
  {
    title: "Ophthalmic laboratory technicians",
    employment: "27.5",
    none: 4.9,
    hs: 26,
    some: 34.7,
    ass: 16.9,
    uni: 14.4,
    master: 2.2,
    phd: 0.8
  },
  {
    title: "Pesticide handlers, sprayers, and applicators, vegetation",
    employment: "27.3",
    none: 23.7,
    hs: 33.7,
    some: 17.6,
    ass: 8.9,
    uni: 15,
    master: 0.8,
    phd: 0.3
  },
  {
    title: "Conveyor operators and tenders",
    employment: "27.3",
    none: 16.4,
    hs: 57.7,
    some: 20.1,
    ass: 2.9,
    uni: 2.2,
    master: 0.7,
    phd: 0
  },
  {
    title: "Coin, vending, and amusement machine servicers and repairers",
    employment: "27.2",
    none: 9.1,
    hs: 41.9,
    some: 30,
    ass: 10,
    uni: 7.3,
    master: 1.1,
    phd: 0.7
  },
  {
    title: "Foreign language and literature teachers, postsecondary",
    employment: "27.1",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Computer numerically controlled tool programmers",
    employment: "27.1",
    none: 9,
    hs: 38,
    some: 30.1,
    ass: 14.1,
    uni: 7.6,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Material moving workers, all other",
    employment: "27.1",
    none: 19.8,
    hs: 48.2,
    some: 19.1,
    ass: 6.2,
    uni: 5.7,
    master: 0.8,
    phd: 0.1
  },
  {
    title: "Meter readers, utilities",
    employment: "27.0",
    none: 2.9,
    hs: 46.9,
    some: 30.4,
    ass: 14.5,
    uni: 4.2,
    master: 1.1,
    phd: 0
  },
  {
    title: "Dietetic technicians",
    employment: "26.8",
    none: 8.8,
    hs: 38.7,
    some: 26.7,
    ass: 13.8,
    uni: 10.4,
    master: 1.1,
    phd: 0.5
  },
  {
    title: "Food cooking machine operators and tenders",
    employment: "26.8",
    none: 23.5,
    hs: 43.4,
    some: 20.6,
    ass: 5.5,
    uni: 6.1,
    master: 0.8,
    phd: 0
  },
  {
    title: "Agricultural and food science technicians",
    employment: "26.6",
    none: 9.7,
    hs: 24.9,
    some: 21.4,
    ass: 15,
    uni: 22.9,
    master: 4.5,
    phd: 1.6
  },
  {
    title: "Locomotive engineers",
    employment: "26.5",
    none: 1.6,
    hs: 37.6,
    some: 36.5,
    ass: 10.3,
    uni: 11.8,
    master: 1.8,
    phd: 0.3
  },
  {
    title:
      "Textile winding, twisting, and drawing out machine setters, operators, and tenders",
    employment: "26.4",
    none: 27.2,
    hs: 45,
    some: 15.4,
    ass: 5.6,
    uni: 3.4,
    master: 3.4,
    phd: 0
  },
  {
    title: "Sailors and marine oilers",
    employment: "26.4",
    none: 7.2,
    hs: 43.7,
    some: 24.7,
    ass: 6.1,
    uni: 14.4,
    master: 3.7,
    phd: 0.3
  },
  {
    title: "Chemical engineers",
    employment: "26.3",
    none: 0.9,
    hs: 3,
    some: 5,
    ass: 3.8,
    uni: 58.4,
    master: 21.7,
    phd: 7.1
  },
  {
    title: "Plasterers and stucco masons",
    employment: "26.1",
    none: 51.8,
    hs: 31.2,
    some: 10.4,
    ass: 3.6,
    uni: 2.4,
    master: 0.5,
    phd: 0
  },
  {
    title: "Fine artists, including painters, sculptors, and illustrators",
    employment: "25.9",
    none: 2.7,
    hs: 11.6,
    some: 18.9,
    ass: 8.2,
    uni: 43.6,
    master: 13.4,
    phd: 1.6
  },
  {
    title: "Chemistry teachers, postsecondary",
    employment: "25.6",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Conservation scientists",
    employment: "25.3",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 76.2,
    master: 18.7,
    phd: 5.1
  },
  {
    title: "Credit authorizers, checkers, and clerks",
    employment: "25.3",
    none: 0.9,
    hs: 23.3,
    some: 30.1,
    ass: 10.3,
    uni: 27.8,
    master: 5.7,
    phd: 1.9
  },
  {
    title: "Materials engineers",
    employment: "25.1",
    none: 0.6,
    hs: 4.4,
    some: 9.9,
    ass: 9.2,
    uni: 50.6,
    master: 19,
    phd: 6.4
  },
  {
    title: "Morticians, undertakers, and funeral arrangers",
    employment: "25.0",
    none: 3,
    hs: 8.7,
    some: 17.2,
    ass: 37.1,
    uni: 25.8,
    master: 4.4,
    phd: 3.8
  },
  {
    title: "Elevator and escalator installers and repairers",
    employment: "24.8",
    none: 3.5,
    hs: 41.7,
    some: 32.3,
    ass: 9.9,
    uni: 10.8,
    master: 1.7,
    phd: 0.2
  },
  {
    title: "Air traffic controllers",
    employment: "24.5",
    none: 0.3,
    hs: 12.6,
    some: 31.1,
    ass: 14.1,
    uni: 34.7,
    master: 6.6,
    phd: 0.6
  },
  {
    title: "History teachers, postsecondary",
    employment: "24.4",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title:
      "Health and safety engineers, except mining safety engineers and inspectors",
    employment: "24.1",
    none: 0.9,
    hs: 6.4,
    some: 10.5,
    ass: 7.8,
    uni: 51.9,
    master: 19.7,
    phd: 2.8
  },
  {
    title: "Electrical and electronics drafters",
    employment: "24.0",
    none: 1.5,
    hs: 10.7,
    some: 23.6,
    ass: 33,
    uni: 24.1,
    master: 5.5,
    phd: 1.7
  },
  {
    title: "Physical scientists, all other",
    employment: "23.9",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 26.2,
    master: 22.9,
    phd: 50.9
  },
  {
    title: "Landscape architects",
    employment: "23.7",
    none: 1.4,
    hs: 4.6,
    some: 6.8,
    ass: 5.1,
    uni: 56.4,
    master: 22.2,
    phd: 3.4
  },
  {
    title: "Floor layers, except carpet, wood, and hard tiles",
    employment: "23.7",
    none: 31.7,
    hs: 43.7,
    some: 15.6,
    ass: 3.5,
    uni: 4.9,
    master: 0.7,
    phd: 0.1
  },
  {
    title:
      "Lathe and turning machine tool setters, operators, and tenders, metal and plastic",
    employment: "23.7",
    none: 19.2,
    hs: 52,
    some: 22.2,
    ass: 3.6,
    uni: 0.8,
    master: 2.2,
    phd: 0
  },
  {
    title: "Grinding and polishing workers, hand",
    employment: "23.7",
    none: 18.7,
    hs: 46.1,
    some: 20.5,
    ass: 8.8,
    uni: 4.8,
    master: 0.8,
    phd: 0.2
  },
  {
    title:
      "Lighting technicians and media and communication equipment workers, all other",
    employment: "23.3",
    none: 1.8,
    hs: 14.2,
    some: 24.4,
    ass: 13.6,
    uni: 39,
    master: 6.1,
    phd: 1
  },
  {
    title: "Advertising and promotions managers",
    employment: "23.2",
    none: 0.8,
    hs: 3.9,
    some: 10.8,
    ass: 6,
    uni: 63.6,
    master: 12.8,
    phd: 2.1
  },
  {
    title:
      "Earth drillers, except oil and gas; and explosives workers, ordnance handling experts, and blasters",
    employment: "23.2",
    none: 17,
    hs: 49.8,
    some: 20.6,
    ass: 5.6,
    uni: 5.9,
    master: 0.9,
    phd: 0.2
  },
  {
    title: "Passenger attendants",
    employment: "23.2",
    none: 12.4,
    hs: 42.9,
    some: 24.9,
    ass: 9.2,
    uni: 7.7,
    master: 2.7,
    phd: 0.2
  },
  {
    title:
      "Electrical and electronics repairers, powerhouse, substation, and relay",
    employment: "23.1",
    none: 8.3,
    hs: 30.1,
    some: 30.8,
    ass: 16.9,
    uni: 13,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Mechanical door repairers",
    employment: "22.8",
    none: 4,
    hs: 40.9,
    some: 31.9,
    ass: 16.9,
    uni: 5.8,
    master: 0.5,
    phd: 0.1
  },
  {
    title: "Reinforcing iron and rebar workers",
    employment: "22.1",
    none: 33.1,
    hs: 43.3,
    some: 15.7,
    ass: 4,
    uni: 3.4,
    master: 0.5,
    phd: 0
  },
  {
    title: "First-line supervisors of gambling services workers",
    employment: "22.0",
    none: 5.3,
    hs: 30.8,
    some: 29.1,
    ass: 10.3,
    uni: 19.9,
    master: 3.6,
    phd: 0.9
  },
  {
    title: "Motorboat mechanics and service technicians",
    employment: "21.7",
    none: 13.6,
    hs: 44.2,
    some: 27,
    ass: 9.7,
    uni: 3.9,
    master: 0.6,
    phd: 1
  },
  {
    title: "Media and communication workers, all other",
    employment: "21.5",
    none: 1,
    hs: 7,
    some: 18.5,
    ass: 7.9,
    uni: 46.3,
    master: 17.7,
    phd: 1.5
  },
  {
    title: "Microbiologists",
    employment: "21.4",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 46.4,
    master: 30.8,
    phd: 22.8
  },
  {
    title: "Metal workers and plastic workers, all other",
    employment: "21.4",
    none: 18.5,
    hs: 48.2,
    some: 21.1,
    ass: 6.6,
    uni: 4.8,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Occupational health and safety technicians",
    employment: "21.3",
    none: 1.9,
    hs: 16.8,
    some: 19.8,
    ass: 9.6,
    uni: 35.6,
    master: 14.9,
    phd: 1.4
  },
  {
    title: "Court reporters and simultaneous captioners",
    employment: "21.3",
    none: 1.2,
    hs: 14.1,
    some: 32.7,
    ass: 37.3,
    uni: 11.8,
    master: 1.8,
    phd: 1.2
  },
  {
    title: "Riggers",
    employment: "21.3",
    none: 6.8,
    hs: 45.2,
    some: 25.9,
    ass: 9.6,
    uni: 12.1,
    master: 0.5,
    phd: 0
  },
  {
    title: "Avionics technicians",
    employment: "21.2",
    none: 1.6,
    hs: 22.5,
    some: 41.3,
    ass: 22.7,
    uni: 10.2,
    master: 1.7,
    phd: 0
  },
  {
    title: "Rail car repairers",
    employment: "21.1",
    none: 12,
    hs: 47.3,
    some: 23.4,
    ass: 13.1,
    uni: 3.3,
    master: 0.6,
    phd: 0.2
  },
  {
    title:
      "Helpers--brickmasons, blockmasons, stonemasons, and tile and marble setters",
    employment: "20.9",
    none: 34.3,
    hs: 38.8,
    some: 16.6,
    ass: 4.1,
    uni: 5,
    master: 1,
    phd: 0.1
  },
  {
    title: "Special education teachers, preschool",
    employment: "20.8",
    none: 0.3,
    hs: 3.9,
    some: 5.3,
    ass: 3.5,
    uni: 33.4,
    master: 50.1,
    phd: 3.5
  },
  {
    title: "Recreational therapists",
    employment: "20.8",
    none: 2.2,
    hs: 15.5,
    some: 9.7,
    ass: 4.8,
    uni: 53.2,
    master: 12.9,
    phd: 1.8
  },
  {
    title: "Obstetricians and gynecologists",
    employment: "20.7",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 0,
    phd: 100
  },
  {
    title: "Tire builders",
    employment: "20.6",
    none: 5.3,
    hs: 51.4,
    some: 31.7,
    ass: 6.7,
    uni: 4.4,
    master: 0.5,
    phd: 0
  },
  {
    title: "Cooks, all other",
    employment: "20.5",
    none: 27.3,
    hs: 41.9,
    some: 18.5,
    ass: 6.1,
    uni: 5.4,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Umpires, referees, and other sports officials",
    employment: "20.2",
    none: 4.3,
    hs: 13.8,
    some: 24.6,
    ass: 8.1,
    uni: 27.3,
    master: 17.9,
    phd: 4
  },
  {
    title: "Tapers",
    employment: "19.8",
    none: 47.1,
    hs: 37.6,
    some: 11.5,
    ass: 2.2,
    uni: 1.5,
    master: 0.2,
    phd: 0.1
  },
  {
    title: "Automotive glass installers and repairers",
    employment: "19.7",
    none: 16.4,
    hs: 50.7,
    some: 26.8,
    ass: 3.4,
    uni: 2.3,
    master: 0.1,
    phd: 0.3
  },
  {
    title:
      "Textile knitting and weaving machine setters, operators, and tenders",
    employment: "19.6",
    none: 27.2,
    hs: 45,
    some: 15.4,
    ass: 5.6,
    uni: 3.4,
    master: 3.4,
    phd: 0
  },
  {
    title: "Social sciences teachers, postsecondary, all other",
    employment: "19.5",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Bioengineers and biomedical engineers",
    employment: "19.3",
    none: 0.3,
    hs: 7,
    some: 4.2,
    ass: 8.1,
    uni: 42.3,
    master: 26.6,
    phd: 11.6
  },
  {
    title: "Locksmiths and safe repairers",
    employment: "19.2",
    none: 5.5,
    hs: 43.1,
    some: 29.2,
    ass: 9.2,
    uni: 11.7,
    master: 1.1,
    phd: 0.2
  },
  {
    title: "Fiberglass laminators and fabricators",
    employment: "19.2",
    none: 16.4,
    hs: 46.1,
    some: 23,
    ass: 7.6,
    uni: 5.9,
    master: 0.8,
    phd: 0.2
  },
  {
    title:
      "Food and tobacco roasting, baking, and drying machine operators and tenders",
    employment: "19.0",
    none: 14.1,
    hs: 45.8,
    some: 19.7,
    ass: 4.2,
    uni: 13.8,
    master: 1.9,
    phd: 0.5
  },
  {
    title: "Law teachers, postsecondary",
    employment: "18.9",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Soil and plant scientists",
    employment: "18.8",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 60.4,
    master: 26.8,
    phd: 12.8
  },
  {
    title: "Compensation and benefits managers",
    employment: "18.7",
    none: 0.6,
    hs: 8.5,
    some: 15,
    ass: 5.6,
    uni: 49.3,
    master: 18.8,
    phd: 2.3
  },
  {
    title: "Agents and business managers of artists, performers, and athletes",
    employment: "18.7",
    none: 2.7,
    hs: 9.3,
    some: 19.7,
    ass: 5.8,
    uni: 46.1,
    master: 11.8,
    phd: 4.7
  },
  {
    title: "Economists",
    employment: "18.6",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 26.1,
    master: 37.7,
    phd: 36.3
  },
  {
    title: "Zoologists and wildlife biologists",
    employment: "18.5",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 46.4,
    master: 30.8,
    phd: 22.8
  },
  {
    title: "Bailiffs",
    employment: "18.5",
    none: 0.7,
    hs: 20,
    some: 27,
    ass: 14,
    uni: 29.1,
    master: 7,
    phd: 2.3
  },
  {
    title: "Political science teachers, postsecondary",
    employment: "18.4",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Building cleaning workers, all other",
    employment: "18.4",
    none: 23.1,
    hs: 45,
    some: 18.7,
    ass: 6.5,
    uni: 5.5,
    master: 1.1,
    phd: 0.3
  },
  {
    title: "Nuclear medicine technologists",
    employment: "18.3",
    none: 2.6,
    hs: 2.4,
    some: 6.8,
    ass: 19.8,
    uni: 52.2,
    master: 13.4,
    phd: 2.8
  },
  {
    title: "Furniture finishers",
    employment: "18.1",
    none: 28.9,
    hs: 36,
    some: 21.7,
    ass: 6.1,
    uni: 4.5,
    master: 2.3,
    phd: 0.6
  },
  {
    title: "Exercise physiologists",
    employment: "18.0",
    none: 0.4,
    hs: 2.9,
    some: 3.6,
    ass: 5.6,
    uni: 24.4,
    master: 56,
    phd: 7.1
  },
  {
    title: "Electric motor, power tool, and related repairers",
    employment: "17.8",
    none: 6.7,
    hs: 44.3,
    some: 28.4,
    ass: 11.6,
    uni: 8.3,
    master: 0.7,
    phd: 0
  },
  {
    title: "Furnace, kiln, oven, drier, and kettle operators and tenders",
    employment: "17.8",
    none: 7.5,
    hs: 45.5,
    some: 29.1,
    ass: 8.3,
    uni: 9.4,
    master: 0.2,
    phd: 0
  },
  {
    title: "Radiation therapists",
    employment: "17.7",
    none: 0.2,
    hs: 0.8,
    some: 8.3,
    ass: 34.7,
    uni: 45,
    master: 7.7,
    phd: 3.3
  },
  {
    title: "Physicists",
    employment: "17.4",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 19.8,
    master: 19.5,
    phd: 60.8
  },
  {
    title: "Environmental engineering technologists and technicians",
    employment: "17.3",
    none: 4.1,
    hs: 24.3,
    some: 30.7,
    ass: 20.1,
    uni: 17.2,
    master: 2.9,
    phd: 0.8
  },
  {
    title: "Nuclear engineers",
    employment: "17.2",
    none: 0.6,
    hs: 3,
    some: 7.1,
    ass: 6.9,
    uni: 49.4,
    master: 25.7,
    phd: 7.4
  },
  {
    title: "Forensic science technicians",
    employment: "17.2",
    none: 2.9,
    hs: 14.5,
    some: 23.5,
    ass: 13.7,
    uni: 31.1,
    master: 10.9,
    phd: 3.5
  },
  {
    title: "Recreation and fitness studies teachers, postsecondary",
    employment: "17.0",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title:
      "Heat treating equipment setters, operators, and tenders, metal and plastic",
    employment: "16.9",
    none: 18.5,
    hs: 48.2,
    some: 21.1,
    ass: 6.6,
    uni: 4.8,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Geological and hydrologic technicians",
    employment: "16.8",
    none: 2.3,
    hs: 20.6,
    some: 21.4,
    ass: 12.5,
    uni: 34,
    master: 7.8,
    phd: 1.5
  },
  {
    title: "Athletes and sports competitors",
    employment: "16.7",
    none: 2.3,
    hs: 13.7,
    some: 20.6,
    ass: 9.7,
    uni: 47.8,
    master: 4.7,
    phd: 1.2
  },
  {
    title: "Textile, apparel, and furnishings workers, all other",
    employment: "16.7",
    none: 24.2,
    hs: 35.3,
    some: 19.5,
    ass: 8.5,
    uni: 10,
    master: 2.3,
    phd: 0.2
  },
  {
    title: "Social work teachers, postsecondary",
    employment: "16.6",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Agricultural inspectors",
    employment: "16.6",
    none: 5.9,
    hs: 25.9,
    some: 24.6,
    ass: 8.8,
    uni: 30,
    master: 3.2,
    phd: 1.6
  },
  {
    title: "Physics teachers, postsecondary",
    employment: "16.5",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title:
      "Extruding and forming machine setters, operators, and tenders, synthetic and glass fibers",
    employment: "16.2",
    none: 24.2,
    hs: 35.3,
    some: 19.5,
    ass: 8.5,
    uni: 10,
    master: 2.3,
    phd: 0.2
  },
  {
    title: "Criminal justice and law enforcement teachers, postsecondary",
    employment: "16.1",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Economics teachers, postsecondary",
    employment: "16.0",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Sociology teachers, postsecondary",
    employment: "15.9",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Foundry mold and coremakers",
    employment: "15.8",
    none: 14.6,
    hs: 46.2,
    some: 24,
    ass: 8.6,
    uni: 5.3,
    master: 1.2,
    phd: 0.1
  },
  {
    title: "Rail-track laying and maintenance equipment operators",
    employment: "15.7",
    none: 9.6,
    hs: 54.5,
    some: 27.6,
    ass: 5.4,
    uni: 2.9,
    master: 0,
    phd: 0
  },
  {
    title:
      "Milling and planing machine setters, operators, and tenders, metal and plastic",
    employment: "15.7",
    none: 19.2,
    hs: 52,
    some: 22.2,
    ass: 3.6,
    uni: 0.8,
    master: 2.2,
    phd: 0
  },
  {
    title: "Insurance appraisers, auto damage",
    employment: "15.6",
    none: 1,
    hs: 13.9,
    some: 23.6,
    ass: 11.1,
    uni: 40.5,
    master: 7.9,
    phd: 2
  },
  {
    title: "Administrative law judges, adjudicators, and hearing officers",
    employment: "15.5",
    none: 0.2,
    hs: 0.5,
    some: 0.7,
    ass: 0.4,
    uni: 5.5,
    master: 4,
    phd: 88.6
  },
  {
    title: "Recreational vehicle service technicians",
    employment: "15.4",
    none: 20.7,
    hs: 47,
    some: 19.9,
    ass: 5.7,
    uni: 5.6,
    master: 1,
    phd: 0.1
  },
  {
    title: "Grounds maintenance workers, all other",
    employment: "15.3",
    none: 23.7,
    hs: 33.7,
    some: 17.6,
    ass: 8.9,
    uni: 15,
    master: 0.8,
    phd: 0.3
  },
  {
    title: "Rotary drill operators, oil and gas",
    employment: "15.2",
    none: 17.6,
    hs: 47.3,
    some: 25.3,
    ass: 3.7,
    uni: 5.7,
    master: 0.4,
    phd: 0.1
  },
  {
    title: "Continuous mining machine operators",
    employment: "15.2",
    none: 11.3,
    hs: 53.8,
    some: 23.2,
    ass: 6.3,
    uni: 5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Judicial law clerks",
    employment: "15.1",
    none: 0,
    hs: 2.8,
    some: 8.5,
    ass: 6.2,
    uni: 13.8,
    master: 6.1,
    phd: 62.6
  },
  {
    title: "Metal-refining furnace operators and tenders",
    employment: "15.1",
    none: 12.9,
    hs: 45.6,
    some: 27.6,
    ass: 6.1,
    uni: 7.5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Gas plant operators",
    employment: "15.1",
    none: 9.2,
    hs: 33.9,
    some: 33.7,
    ass: 11.2,
    uni: 11.1,
    master: 0.6,
    phd: 0.3
  },
  {
    title: "Food scientists and technologists",
    employment: "15.0",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 60.4,
    master: 26.8,
    phd: 12.8
  },
  {
    title: "Boilermakers",
    employment: "14.9",
    none: 11.3,
    hs: 53.8,
    some: 27.2,
    ass: 4.9,
    uni: 2.8,
    master: 0,
    phd: 0
  },
  {
    title: "Plant and system operators, all other",
    employment: "14.9",
    none: 9.2,
    hs: 33.9,
    some: 33.7,
    ass: 11.2,
    uni: 11.1,
    master: 0.6,
    phd: 0.3
  },
  {
    title: "Fire inspectors and investigators",
    employment: "14.7",
    none: 4,
    hs: 20.7,
    some: 30.1,
    ass: 16.7,
    uni: 22.2,
    master: 5,
    phd: 1.3
  },
  {
    title: "Gambling change persons and booth cashiers",
    employment: "14.7",
    none: 14.3,
    hs: 41.1,
    some: 24.6,
    ass: 7.7,
    uni: 10.3,
    master: 1.8,
    phd: 0.3
  },
  {
    title:
      "Cleaning, washing, and metal pickling equipment operators and tenders",
    employment: "14.7",
    none: 17.8,
    hs: 45.8,
    some: 21.4,
    ass: 7,
    uni: 6.6,
    master: 1.2,
    phd: 0.3
  },
  {
    title: "Medical appliance technicians",
    employment: "14.6",
    none: 4.9,
    hs: 26,
    some: 34.7,
    ass: 16.9,
    uni: 14.4,
    master: 2.2,
    phd: 0.8
  },
  {
    title: "Drafters, all other",
    employment: "14.4",
    none: 1.5,
    hs: 10.7,
    some: 23.6,
    ass: 33,
    uni: 24.1,
    master: 5.5,
    phd: 1.7
  },
  {
    title:
      "Ambulance drivers and attendants, except emergency medical technicians",
    employment: "14.2",
    none: 3.4,
    hs: 50.2,
    some: 26.9,
    ass: 9,
    uni: 9,
    master: 1.4,
    phd: 0
  },
  {
    title: "Motorcycle mechanics",
    employment: "14.0",
    none: 13.6,
    hs: 44.2,
    some: 27,
    ass: 9.7,
    uni: 3.9,
    master: 0.6,
    phd: 1
  },
  {
    title: "Stonemasons",
    employment: "13.9",
    none: 33.1,
    hs: 43.3,
    some: 15.7,
    ass: 4,
    uni: 3.4,
    master: 0.5,
    phd: 0
  },
  {
    title: "Foresters",
    employment: "13.7",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 76.2,
    master: 18.7,
    phd: 5.1
  },
  {
    title: "Audiologists",
    employment: "13.7",
    none: 0,
    hs: 1.2,
    some: 3,
    ass: 1.2,
    uni: 9.3,
    master: 17.6,
    phd: 67.7
  },
  {
    title: "Forging machine setters, operators, and tenders, metal and plastic",
    employment: "13.7",
    none: 12.9,
    hs: 50.3,
    some: 23.8,
    ass: 7.4,
    uni: 3.9,
    master: 1.7,
    phd: 0
  },
  {
    title:
      "Atmospheric, earth, marine, and space sciences teachers, postsecondary",
    employment: "13.6",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Wellhead pumpers",
    employment: "13.6",
    none: 14,
    hs: 43.8,
    some: 22.3,
    ass: 7.7,
    uni: 10,
    master: 2.2,
    phd: 0
  },
  {
    title: "Museum technicians and conservators",
    employment: "13.5",
    none: 1.6,
    hs: 6.1,
    some: 9.1,
    ass: 4,
    uni: 36.1,
    master: 36.3,
    phd: 6.8
  },
  {
    title: "Radio, cellular, and tower equipment installers and repairers",
    employment: "13.5",
    none: 4.3,
    hs: 28.8,
    some: 33.8,
    ass: 18,
    uni: 12.6,
    master: 2.2,
    phd: 0.2
  },
  {
    title: "Electro-mechanical and mechatronics technologists and technicians",
    employment: "13.4",
    none: 4.1,
    hs: 24.3,
    some: 30.7,
    ass: 20.1,
    uni: 17.2,
    master: 2.9,
    phd: 0.8
  },
  {
    title: "Curators",
    employment: "13.4",
    none: 1.6,
    hs: 6.1,
    some: 9.1,
    ass: 4,
    uni: 36.1,
    master: 36.3,
    phd: 6.8
  },
  {
    title: "Postmasters and mail superintendents",
    employment: "13.2",
    none: 3.3,
    hs: 15.3,
    some: 18.2,
    ass: 7.7,
    uni: 34.5,
    master: 17.3,
    phd: 3.7
  },
  {
    title: "Cartographers and photogrammetrists",
    employment: "13.2",
    none: 0.1,
    hs: 3.4,
    some: 11,
    ass: 12.4,
    uni: 60,
    master: 9.9,
    phd: 3.2
  },
  {
    title: "Sound engineering technicians",
    employment: "13.1",
    none: 1.8,
    hs: 14.2,
    some: 24.4,
    ass: 13.6,
    uni: 39,
    master: 6.1,
    phd: 1
  },
  {
    title: "Tank car, truck, and ship loaders",
    employment: "13.0",
    none: 19.8,
    hs: 48.2,
    some: 19.1,
    ass: 6.2,
    uni: 5.7,
    master: 0.8,
    phd: 0.1
  },
  {
    title: "Textile cutting machine setters, operators, and tenders",
    employment: "12.9",
    none: 27.2,
    hs: 45,
    some: 15.4,
    ass: 5.6,
    uni: 3.4,
    master: 3.4,
    phd: 0
  },
  {
    title: "Survey researchers",
    employment: "12.7",
    none: 0.7,
    hs: 1.5,
    some: 6,
    ass: 4,
    uni: 32.8,
    master: 38.8,
    phd: 16.1
  },
  {
    title: "Artists and related workers, all other",
    employment: "12.6",
    none: 2.7,
    hs: 11.6,
    some: 18.9,
    ass: 8.2,
    uni: 43.6,
    master: 13.4,
    phd: 1.6
  },
  {
    title: "Forest and conservation workers",
    employment: "12.6",
    none: 26,
    hs: 27.6,
    some: 15.8,
    ass: 8,
    uni: 19,
    master: 2.8,
    phd: 0.9
  },
  {
    title: "Helpers--extraction workers",
    employment: "12.6",
    none: 16.4,
    hs: 48.3,
    some: 22,
    ass: 5.2,
    uni: 7.3,
    master: 0.7,
    phd: 0.1
  },
  {
    title:
      "Underground mining machine operators and extraction workers, all other",
    employment: "12.6",
    none: 14.3,
    hs: 50.6,
    some: 22.5,
    ass: 5.6,
    uni: 6.4,
    master: 0.6,
    phd: 0
  },
  {
    title: "Funeral home managers",
    employment: "12.5",
    none: 3.3,
    hs: 15.3,
    some: 18.2,
    ass: 7.7,
    uni: 34.5,
    master: 17.3,
    phd: 3.7
  },
  {
    title: "Adhesive bonding machine operators and tenders",
    employment: "12.5",
    none: 18.7,
    hs: 43.3,
    some: 21.8,
    ass: 12.8,
    uni: 1.5,
    master: 1.9,
    phd: 0
  },
  {
    title: "Coil winders, tapers, and finishers",
    employment: "12.4",
    none: 17.7,
    hs: 45,
    some: 21,
    ass: 7.5,
    uni: 7.2,
    master: 1.1,
    phd: 0.5
  },
  {
    title: "Painting, coating, and decorating workers",
    employment: "12.4",
    none: 20.5,
    hs: 48,
    some: 20,
    ass: 6.7,
    uni: 3.9,
    master: 0.8,
    phd: 0.1
  },
  {
    title: "Agricultural workers, all other",
    employment: "12.3",
    none: 49.9,
    hs: 28,
    some: 10.6,
    ass: 4,
    uni: 6.2,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Area, ethnic, and cultural studies teachers, postsecondary",
    employment: "12.1",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Podiatrists",
    employment: "12.1",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 2.3,
    phd: 97.7
  },
  {
    title: "Bicycle repairers",
    employment: "12.1",
    none: 20.7,
    hs: 47,
    some: 19.9,
    ass: 5.7,
    uni: 5.6,
    master: 1,
    phd: 0.1
  },
  {
    title: "Locker room, coatroom, and dressing room attendants",
    employment: "12.0",
    none: 6,
    hs: 27.7,
    some: 26.8,
    ass: 8.7,
    uni: 24.3,
    master: 5.7,
    phd: 0.9
  },
  {
    title: "Aerospace engineering and operations technologists and technicians",
    employment: "11.9",
    none: 4.1,
    hs: 24.3,
    some: 30.7,
    ass: 20.1,
    uni: 17.2,
    master: 2.9,
    phd: 0.8
  },
  {
    title: "Animal control workers",
    employment: "11.8",
    none: 2.2,
    hs: 30.1,
    some: 33.3,
    ass: 10.7,
    uni: 21.6,
    master: 1.8,
    phd: 0.3
  },
  {
    title: "Solar photovoltaic installers",
    employment: "11.8",
    none: 9.6,
    hs: 26.2,
    some: 33.5,
    ass: 18.4,
    uni: 8.2,
    master: 3.2,
    phd: 0.9
  },
  {
    title: "Career/technical education teachers, middle school",
    employment: "11.5",
    none: 0,
    hs: 0,
    some: 3.1,
    ass: 2.3,
    uni: 43.6,
    master: 46.8,
    phd: 4.2
  },
  {
    title: "Precision instrument and equipment repairers, all other",
    employment: "11.4",
    none: 3.5,
    hs: 25.1,
    some: 27.4,
    ass: 20.4,
    uni: 19.4,
    master: 3.7,
    phd: 0.6
  },
  {
    title: "Gambling cage workers",
    employment: "11.3",
    none: 1.2,
    hs: 13.6,
    some: 22.4,
    ass: 8,
    uni: 36.8,
    master: 16.5,
    phd: 1.4
  },
  {
    title: "Pump operators, except wellhead pumpers",
    employment: "11.1",
    none: 14,
    hs: 43.8,
    some: 22.3,
    ass: 7.7,
    uni: 10,
    master: 2.2,
    phd: 0
  },
  {
    title: "Aircraft cargo handling supervisors",
    employment: "11.0",
    none: 7,
    hs: 35.6,
    some: 29.6,
    ass: 10.8,
    uni: 13.5,
    master: 2.9,
    phd: 0.5
  },
  {
    title: "Railroad brake, signal, and switch operators and locomotive firers",
    employment: "11.0",
    none: 3.1,
    hs: 37.7,
    some: 33,
    ass: 11,
    uni: 12.5,
    master: 2.7,
    phd: 0.1
  },
  {
    title: "Subway and streetcar operators",
    employment: "11.0",
    none: 3.1,
    hs: 37.7,
    some: 33,
    ass: 11,
    uni: 12.5,
    master: 2.7,
    phd: 0.1
  },
  {
    title: "Shampooers",
    employment: "10.8",
    none: 3.7,
    hs: 30.3,
    some: 33.9,
    ass: 11,
    uni: 18,
    master: 2.9,
    phd: 0.2
  },
  {
    title: "Atmospheric and space scientists",
    employment: "10.7",
    none: 0,
    hs: 0.3,
    some: 4.2,
    ass: 3.9,
    uni: 58.4,
    master: 23.3,
    phd: 10.1
  },
  {
    title: "Emergency management directors",
    employment: "10.5",
    none: 0.1,
    hs: 8,
    some: 14.9,
    ass: 9.4,
    uni: 38.2,
    master: 27.4,
    phd: 2.1
  },
  {
    title: "Statistical assistants",
    employment: "10.4",
    none: 2,
    hs: 14.3,
    some: 26,
    ass: 9.2,
    uni: 32.7,
    master: 14.5,
    phd: 1.3
  },
  {
    title: "Airfield operations specialists",
    employment: "10.4",
    none: 0.3,
    hs: 12.6,
    some: 31.1,
    ass: 14.1,
    uni: 34.7,
    master: 6.6,
    phd: 0.6
  },
  {
    title: "Electronic equipment installers and repairers, motor vehicles",
    employment: "10.2",
    none: 8.3,
    hs: 30.1,
    some: 30.8,
    ass: 16.9,
    uni: 13,
    master: 0.7,
    phd: 0.2
  },
  {
    title: "Orthotists and prosthetists",
    employment: "10.1",
    none: 2.2,
    hs: 17.9,
    some: 30.5,
    ass: 17.9,
    uni: 22.2,
    master: 6.1,
    phd: 3.1
  },
  {
    title: "Power distributors and dispatchers",
    employment: "10.0",
    none: 1.9,
    hs: 30.3,
    some: 30.3,
    ass: 18.2,
    uni: 16.3,
    master: 2.5,
    phd: 0.5
  },
  {
    title: "Agricultural sciences teachers, postsecondary",
    employment: "9.9",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Etchers and engravers",
    employment: "9.9",
    none: 13.3,
    hs: 28.1,
    some: 24.1,
    ass: 8.6,
    uni: 23.8,
    master: 2.1,
    phd: 0
  },
  {
    title: "Marine engineers and naval architects",
    employment: "9.8",
    none: 2.9,
    hs: 10.1,
    some: 9.7,
    ass: 3.8,
    uni: 53.7,
    master: 18.8,
    phd: 0.9
  },
  {
    title: "Craft artists",
    employment: "9.6",
    none: 2.7,
    hs: 11.6,
    some: 18.9,
    ass: 8.2,
    uni: 43.6,
    master: 13.4,
    phd: 1.6
  },
  {
    title: "Woodworkers, all other",
    employment: "9.5",
    none: 16,
    hs: 35.8,
    some: 21.7,
    ass: 8.3,
    uni: 14,
    master: 3.7,
    phd: 0.5
  },
  {
    title: "Helpers--painters, paperhangers, plasterers, and stucco masons",
    employment: "9.4",
    none: 34.3,
    hs: 38.8,
    some: 16.6,
    ass: 4.1,
    uni: 5,
    master: 1,
    phd: 0.1
  },
  {
    title: "Farm and home management educators",
    employment: "9.3",
    none: 0.7,
    hs: 4.1,
    some: 7.6,
    ass: 4.5,
    uni: 28,
    master: 45.6,
    phd: 9.4
  },
  {
    title: "Photographic process workers and processing machine operators",
    employment: "9.3",
    none: 4,
    hs: 18.1,
    some: 20.2,
    ass: 8.6,
    uni: 39.8,
    master: 8.3,
    phd: 1
  },
  {
    title: "Gambling service workers, all other",
    employment: "9.2",
    none: 9.1,
    hs: 34.3,
    some: 28.3,
    ass: 9.8,
    uni: 15.8,
    master: 1.9,
    phd: 0.8
  },
  {
    title:
      "Electrical and electronics installers and repairers, transportation equipment",
    employment: "9.1",
    none: 8.3,
    hs: 30.1,
    some: 30.8,
    ass: 16.9,
    uni: 13,
    master: 0.7,
    phd: 0.2
  },
  {
    title:
      "Drilling and boring machine tool setters, operators, and tenders, metal and plastic",
    employment: "9.1",
    none: 19.2,
    hs: 52,
    some: 22.2,
    ass: 3.6,
    uni: 0.8,
    master: 2.2,
    phd: 0
  },
  {
    title: "Dancers",
    employment: "9.0",
    none: 4.4,
    hs: 36.9,
    some: 21.6,
    ass: 7.7,
    uni: 24.1,
    master: 4.9,
    phd: 0.5
  },
  {
    title: "Derrick operators, oil and gas",
    employment: "9.0",
    none: 17.6,
    hs: 47.3,
    some: 25.3,
    ass: 3.7,
    uni: 5.7,
    master: 0.4,
    phd: 0.1
  },
  {
    title: "Gambling surveillance officers and gambling investigators",
    employment: "8.7",
    none: 5.9,
    hs: 35.4,
    some: 30.4,
    ass: 10.9,
    uni: 13.9,
    master: 3.1,
    phd: 0.5
  },
  {
    title: "Shoe and leather workers and repairers",
    employment: "8.7",
    none: 30.2,
    hs: 36.7,
    some: 17.7,
    ass: 6.7,
    uni: 7.3,
    master: 1.1,
    phd: 0.2
  },
  {
    title: "Anthropologists and archeologists",
    employment: "8.5",
    none: 0.7,
    hs: 1.5,
    some: 6,
    ass: 4,
    uni: 32.8,
    master: 38.8,
    phd: 16.1
  },
  {
    title: "Architecture teachers, postsecondary",
    employment: "8.5",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Animal breeders",
    employment: "8.4",
    none: 49.9,
    hs: 28,
    some: 10.6,
    ass: 4,
    uni: 6.2,
    master: 0.9,
    phd: 0.3
  },
  {
    title: "Cooling and freezing equipment operators and tenders",
    employment: "8.4",
    none: 17.8,
    hs: 45.8,
    some: 21.4,
    ass: 7,
    uni: 6.6,
    master: 1.2,
    phd: 0.3
  },
  {
    title: "Desktop publishers",
    employment: "8.2",
    none: 2.1,
    hs: 18.7,
    some: 27.5,
    ass: 12.4,
    uni: 28.3,
    master: 9.7,
    phd: 1.3
  },
  {
    title: "Helpers--roofers",
    employment: "8.2",
    none: 34.3,
    hs: 38.8,
    some: 16.6,
    ass: 4.1,
    uni: 5,
    master: 1,
    phd: 0.1
  },
  {
    title: "Archivists",
    employment: "8.1",
    none: 1.6,
    hs: 6.1,
    some: 9.1,
    ass: 4,
    uni: 36.1,
    master: 36.3,
    phd: 6.8
  },
  {
    title: "Cutters and trimmers, hand",
    employment: "8.1",
    none: 31.2,
    hs: 44.3,
    some: 16.8,
    ass: 3.9,
    uni: 3,
    master: 0.8,
    phd: 0.1
  },
  {
    title: "Hearing aid specialists",
    employment: "8.0",
    none: 2.2,
    hs: 17.9,
    some: 30.5,
    ass: 17.9,
    uni: 22.2,
    master: 6.1,
    phd: 3.1
  },
  {
    title: "Gambling and sports book writers and runners",
    employment: "8.0",
    none: 9.1,
    hs: 34.3,
    some: 28.3,
    ass: 9.8,
    uni: 15.8,
    master: 1.9,
    phd: 0.8
  },
  {
    title: "Parking enforcement workers",
    employment: "7.9",
    none: 1.1,
    hs: 19.5,
    some: 27.3,
    ass: 17.1,
    uni: 30.6,
    master: 3.9,
    phd: 0.6
  },
  {
    title: "Proofreaders and copy markers",
    employment: "7.9",
    none: 0.7,
    hs: 17.8,
    some: 13.3,
    ass: 5.8,
    uni: 43.9,
    master: 17,
    phd: 1.5
  },
  {
    title: "Layout workers, metal and plastic",
    employment: "7.9",
    none: 18.5,
    hs: 48.2,
    some: 21.1,
    ass: 6.6,
    uni: 4.8,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Epidemiologists",
    employment: "7.8",
    none: 0.8,
    hs: 0.4,
    some: 0.6,
    ass: 0.5,
    uni: 23.2,
    master: 25.3,
    phd: 49.2
  },
  {
    title: "Musical instrument repairers and tuners",
    employment: "7.8",
    none: 3.5,
    hs: 25.1,
    some: 27.4,
    ass: 20.4,
    uni: 19.4,
    master: 3.7,
    phd: 0.6
  },
  {
    title: "Ship engineers",
    employment: "7.8",
    none: 7.2,
    hs: 43.7,
    some: 24.7,
    ass: 6.1,
    uni: 14.4,
    master: 3.7,
    phd: 0.3
  },
  {
    title: "Traffic technicians",
    employment: "7.6",
    none: 3.9,
    hs: 39.1,
    some: 25.2,
    ass: 13.2,
    uni: 15.5,
    master: 2.8,
    phd: 0.3
  },
  {
    title: "Fish and game wardens",
    employment: "7.5",
    none: 1.1,
    hs: 19.5,
    some: 27.3,
    ass: 17.1,
    uni: 30.6,
    master: 3.9,
    phd: 0.6
  },
  {
    title: "Textile bleaching and dyeing machine operators and tenders",
    employment: "7.5",
    none: 27.2,
    hs: 45,
    some: 15.4,
    ass: 5.6,
    uni: 3.4,
    master: 3.4,
    phd: 0
  },
  {
    title: "Nurse midwives",
    employment: "7.3",
    none: 0.2,
    hs: 0.6,
    some: 0.6,
    ass: 0.7,
    uni: 6.8,
    master: 74.5,
    phd: 16.6
  },
  {
    title: "Floor sanders and finishers",
    employment: "7.2",
    none: 31.7,
    hs: 43.7,
    some: 15.6,
    ass: 3.5,
    uni: 4.9,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Materials scientists",
    employment: "7.1",
    none: 0.1,
    hs: 1.4,
    some: 2.3,
    ass: 1.9,
    uni: 51.2,
    master: 22.7,
    phd: 20.3
  },
  {
    title: "Environmental science teachers, postsecondary",
    employment: "7.1",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Pourers and casters, metal",
    employment: "7.1",
    none: 12.9,
    hs: 45.6,
    some: 27.6,
    ass: 6.1,
    uni: 7.5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Life scientists, all other",
    employment: "7.0",
    none: 0.8,
    hs: 0.4,
    some: 0.6,
    ass: 0.5,
    uni: 23.2,
    master: 25.3,
    phd: 49.2
  },
  {
    title: "Political scientists",
    employment: "7.0",
    none: 0.7,
    hs: 1.5,
    some: 6,
    ass: 4,
    uni: 32.8,
    master: 38.8,
    phd: 16.1
  },
  {
    title: "Correspondence clerks",
    employment: "7.0",
    none: 7,
    hs: 34.3,
    some: 26.7,
    ass: 10.5,
    uni: 18,
    master: 2.8,
    phd: 0.7
  },
  {
    title: "Arbitrators, mediators, and conciliators",
    employment: "6.9",
    none: 0.2,
    hs: 0.5,
    some: 0.7,
    ass: 0.4,
    uni: 5.5,
    master: 4,
    phd: 88.6
  },
  {
    title: "Wind turbine service technicians",
    employment: "6.9",
    none: 13.1,
    hs: 39.6,
    some: 26.6,
    ass: 9.8,
    uni: 9.3,
    master: 1.3,
    phd: 0.2
  },
  {
    title: "Sewers, hand",
    employment: "6.9",
    none: 24.7,
    hs: 32.1,
    some: 17.5,
    ass: 7,
    uni: 15.7,
    master: 2.5,
    phd: 0.4
  },
  {
    title: "Dentists, all other specialists",
    employment: "6.8",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 2.5,
    phd: 97.5
  },
  {
    title: "Anthropology and archeology teachers, postsecondary",
    employment: "6.7",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Nuclear technicians",
    employment: "6.6",
    none: 2.3,
    hs: 20.6,
    some: 21.4,
    ass: 12.5,
    uni: 34,
    master: 7.8,
    phd: 1.5
  },
  {
    title: "Signal and track switch repairers",
    employment: "6.6",
    none: 13.1,
    hs: 39.6,
    some: 26.6,
    ass: 9.8,
    uni: 9.3,
    master: 1.3,
    phd: 0.2
  },
  {
    title: "Hydrologists",
    employment: "6.5",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 45.2,
    master: 41,
    phd: 13.9
  },
  {
    title: "Orthodontists",
    employment: "6.4",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 2.5,
    phd: 97.5
  },
  {
    title: "Mining and geological engineers, including mining safety engineers",
    employment: "6.3",
    none: 1.1,
    hs: 4.2,
    some: 5.8,
    ass: 3.7,
    uni: 57.2,
    master: 18.4,
    phd: 9.7
  },
  {
    title: "Tool grinders, filers, and sharpeners",
    employment: "6.2",
    none: 18.5,
    hs: 48.2,
    some: 21.1,
    ass: 6.6,
    uni: 4.8,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Occupational therapy aides",
    employment: "5.8",
    none: 2.2,
    hs: 12.3,
    some: 16,
    ass: 48.6,
    uni: 16.3,
    master: 4,
    phd: 0.5
  },
  {
    title: "Fallers",
    employment: "5.6",
    none: 29.9,
    hs: 46.7,
    some: 13.6,
    ass: 5.6,
    uni: 3.7,
    master: 0.5,
    phd: 0
  },
  {
    title: "Costume attendants",
    employment: "5.4",
    none: 6,
    hs: 27.7,
    some: 26.8,
    ass: 8.7,
    uni: 24.3,
    master: 5.7,
    phd: 0.9
  },
  {
    title: "Nuclear power reactor operators",
    employment: "5.3",
    none: 1.9,
    hs: 30.3,
    some: 30.3,
    ass: 18.2,
    uni: 16.3,
    master: 2.5,
    phd: 0.5
  },
  {
    title: "Oral and maxillofacial surgeons",
    employment: "5.2",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 2.5,
    phd: 97.5
  },
  {
    title: "Library science teachers, postsecondary",
    employment: "5.0",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Embalmers",
    employment: "5.0",
    none: 6.3,
    hs: 25.3,
    some: 26.8,
    ass: 16.8,
    uni: 19.7,
    master: 3.8,
    phd: 1.4
  },
  {
    title: "Logging workers, all other",
    employment: "5.0",
    none: 29.9,
    hs: 46.7,
    some: 13.6,
    ass: 5.6,
    uni: 3.7,
    master: 0.5,
    phd: 0
  },
  {
    title: "Shoe machine operators and tenders",
    employment: "5.0",
    none: 30.2,
    hs: 36.7,
    some: 17.7,
    ass: 6.7,
    uni: 7.3,
    master: 1.1,
    phd: 0.2
  },
  {
    title: "Hoist and winch operators",
    employment: "5.0",
    none: 16.4,
    hs: 57.7,
    some: 20.1,
    ass: 2.9,
    uni: 2.2,
    master: 0.7,
    phd: 0
  },
  {
    title: "Industrial-organizational psychologists",
    employment: "4.9",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 8.5,
    master: 39.7,
    phd: 51.9
  },
  {
    title: "Telephone operators",
    employment: "4.8",
    none: 3.2,
    hs: 33.2,
    some: 34.6,
    ass: 9.7,
    uni: 15,
    master: 3.8,
    phd: 0.5
  },
  {
    title: "Fabric and apparel patternmakers",
    employment: "4.7",
    none: 24.2,
    hs: 35.3,
    some: 19.5,
    ass: 8.5,
    uni: 10,
    master: 2.3,
    phd: 0.2
  },
  {
    title: "Choreographers",
    employment: "4.6",
    none: 4.4,
    hs: 36.9,
    some: 21.6,
    ass: 7.7,
    uni: 24.1,
    master: 4.9,
    phd: 0.5
  },
  {
    title: "Paperhangers",
    employment: "4.6",
    none: 34.1,
    hs: 39.2,
    some: 15.6,
    ass: 4.5,
    uni: 5.3,
    master: 1.1,
    phd: 0.2
  },
  {
    title: "Rock splitters, quarry",
    employment: "4.6",
    none: 16.4,
    hs: 48.3,
    some: 22,
    ass: 5.2,
    uni: 7.3,
    master: 0.7,
    phd: 0.1
  },
  {
    title: "Geography teachers, postsecondary",
    employment: "4.4",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Communications equipment operators, all other",
    employment: "4.4",
    none: 2.1,
    hs: 18.6,
    some: 26.9,
    ass: 9.9,
    uni: 33.5,
    master: 8.5,
    phd: 0.5
  },
  {
    title: "Rail yard engineers, dinkey operators, and hostlers",
    employment: "4.2",
    none: 1.6,
    hs: 37.6,
    some: 36.5,
    ass: 10.3,
    uni: 11.8,
    master: 1.8,
    phd: 0.3
  },
  {
    title: "Gas compressor and gas pumping station operators",
    employment: "4.1",
    none: 14,
    hs: 43.8,
    some: 22.3,
    ass: 7.7,
    uni: 10,
    master: 2.2,
    phd: 0
  },
  {
    title: "Log graders and scalers",
    employment: "4.0",
    none: 29.9,
    hs: 46.7,
    some: 13.6,
    ass: 5.6,
    uni: 3.7,
    master: 0.5,
    phd: 0
  },
  {
    title: "Commercial divers",
    employment: "4.0",
    none: 13.1,
    hs: 39.6,
    some: 26.6,
    ass: 9.8,
    uni: 9.3,
    master: 1.3,
    phd: 0.2
  },
  {
    title: "Gambling managers",
    employment: "3.9",
    none: 2.8,
    hs: 17.8,
    some: 27.3,
    ass: 11,
    uni: 28.8,
    master: 11.5,
    phd: 0.9
  },
  {
    title: "Entertainment attendants and related workers, all other",
    employment: "3.9",
    none: 6,
    hs: 27.7,
    some: 26.8,
    ass: 8.7,
    uni: 24.3,
    master: 5.7,
    phd: 0.9
  },
  {
    title: "Pile driver operators",
    employment: "3.9",
    none: 20.4,
    hs: 53,
    some: 18,
    ass: 5.7,
    uni: 2.5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Transit and railroad police",
    employment: "3.8",
    none: 0.7,
    hs: 12.4,
    some: 30.3,
    ass: 17.1,
    uni: 32.1,
    master: 6.5,
    phd: 0.8
  },
  {
    title: "Camera and photographic equipment repairers",
    employment: "3.7",
    none: 3.5,
    hs: 25.1,
    some: 27.4,
    ass: 20.4,
    uni: 19.4,
    master: 3.7,
    phd: 0.6
  },
  {
    title: "Animal scientists",
    employment: "3.5",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 60.4,
    master: 26.8,
    phd: 12.8
  },
  {
    title: "Loading and moving machine operators, underground mining",
    employment: "3.5",
    none: 11.3,
    hs: 53.8,
    some: 23.2,
    ass: 6.3,
    uni: 5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Manufactured building and mobile home installers",
    employment: "3.4",
    none: 13.1,
    hs: 39.6,
    some: 26.6,
    ass: 9.8,
    uni: 9.3,
    master: 1.3,
    phd: 0.2
  },
  {
    title: "Model makers, metal and plastic",
    employment: "3.4",
    none: 14.6,
    hs: 46.2,
    some: 24,
    ass: 8.6,
    uni: 5.3,
    master: 1.2,
    phd: 0.1
  },
  {
    title: "Bridge and lock tenders",
    employment: "3.2",
    none: 3.9,
    hs: 39.1,
    some: 25.2,
    ass: 13.2,
    uni: 15.5,
    master: 2.8,
    phd: 0.3
  },
  {
    title: "Historians",
    employment: "3.1",
    none: 0.7,
    hs: 1.5,
    some: 6,
    ass: 4,
    uni: 32.8,
    master: 38.8,
    phd: 16.1
  },
  {
    title: "Makeup artists, theatrical and performance",
    employment: "3.1",
    none: 3.7,
    hs: 30.3,
    some: 33.9,
    ass: 11,
    uni: 18,
    master: 2.9,
    phd: 0.2
  },
  {
    title: "Sociologists",
    employment: "3.0",
    none: 0.7,
    hs: 1.5,
    some: 6,
    ass: 4,
    uni: 32.8,
    master: 38.8,
    phd: 16.1
  },
  {
    title: "Forest fire inspectors and prevention specialists",
    employment: "3.0",
    none: 4,
    hs: 20.7,
    some: 30.1,
    ass: 16.7,
    uni: 22.2,
    master: 5,
    phd: 1.3
  },
  {
    title: "Terrazzo workers and finishers",
    employment: "3.0",
    none: 37.4,
    hs: 41.1,
    some: 15.8,
    ass: 2.3,
    uni: 3.3,
    master: 0.1,
    phd: 0
  },
  {
    title: "Watch and clock repairers",
    employment: "2.8",
    none: 3.5,
    hs: 25.1,
    some: 27.4,
    ass: 20.4,
    uni: 19.4,
    master: 3.7,
    phd: 0.6
  },
  {
    title: "Mathematicians",
    employment: "2.7",
    none: 0.4,
    hs: 2.8,
    some: 6.9,
    ass: 3.8,
    uni: 37.2,
    master: 35.4,
    phd: 13.5
  },
  {
    title: "Models",
    employment: "2.7",
    none: 8.1,
    hs: 29.3,
    some: 27.5,
    ass: 11.4,
    uni: 17.3,
    master: 5.5,
    phd: 0.9
  },
  {
    title: "Family and consumer sciences teachers, postsecondary",
    employment: "2.6",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Motorboat operators",
    employment: "2.6",
    none: 10.1,
    hs: 32.8,
    some: 29,
    ass: 6.5,
    uni: 15.9,
    master: 4.6,
    phd: 1.1
  },
  {
    title: "Genetic counselors",
    employment: "2.4",
    none: 1,
    hs: 5.3,
    some: 12,
    ass: 8.4,
    uni: 34.2,
    master: 34.6,
    phd: 4.5
  },
  {
    title: "Patternmakers, metal and plastic",
    employment: "2.4",
    none: 14.6,
    hs: 46.2,
    some: 24,
    ass: 8.6,
    uni: 5.3,
    master: 1.2,
    phd: 0.1
  },
  {
    title: "Astronomers",
    employment: "2.1",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 19.8,
    master: 19.5,
    phd: 60.8
  },
  {
    title: "Roof bolters, mining",
    employment: "2.1",
    none: 11.3,
    hs: 53.8,
    some: 23.2,
    ass: 6.3,
    uni: 5,
    master: 0.4,
    phd: 0
  },
  {
    title: "Dredge operators",
    employment: "2.0",
    none: 16.4,
    hs: 57.7,
    some: 20.1,
    ass: 2.9,
    uni: 2.2,
    master: 0.7,
    phd: 0
  },
  {
    title: "Forestry and conservation science teachers, postsecondary",
    employment: "1.7",
    none: 0.6,
    hs: 1.4,
    some: 2,
    ass: 1.8,
    uni: 14.6,
    master: 32.1,
    phd: 47.4
  },
  {
    title: "Motion picture projectionists",
    employment: "1.7",
    none: 6,
    hs: 27.7,
    some: 26.8,
    ass: 8.7,
    uni: 24.3,
    master: 5.7,
    phd: 0.9
  },
  {
    title: "Rail transportation workers, all other",
    employment: "1.7",
    none: 3.1,
    hs: 37.7,
    some: 33,
    ass: 11,
    uni: 12.5,
    master: 2.7,
    phd: 0.1
  },
  {
    title: "Geographers",
    employment: "1.6",
    none: 0.7,
    hs: 1.5,
    some: 6,
    ass: 4,
    uni: 32.8,
    master: 38.8,
    phd: 16.1
  },
  {
    title: "Agricultural engineers",
    employment: "1.5",
    none: 0.3,
    hs: 7,
    some: 4.2,
    ass: 8.1,
    uni: 42.3,
    master: 26.6,
    phd: 11.6
  },
  {
    title: "Timing device assemblers and adjusters",
    employment: "1.0",
    none: 16.4,
    hs: 46.1,
    some: 23,
    ass: 7.6,
    uni: 5.9,
    master: 0.8,
    phd: 0.2
  },
  {
    title: "Model makers, wood",
    employment: "1.0",
    none: 16,
    hs: 35.8,
    some: 21.7,
    ass: 8.3,
    uni: 14,
    master: 3.7,
    phd: 0.5
  },
  {
    title: "Refractory materials repairers, except brickmasons",
    employment: "0.8",
    none: 9.3,
    hs: 42.5,
    some: 26.8,
    ass: 14.5,
    uni: 5.9,
    master: 0.9,
    phd: 0.2
  },
  {
    title: "Prosthodontists",
    employment: "0.7",
    none: 0,
    hs: 0,
    some: 0,
    ass: 0,
    uni: 0,
    master: 2.5,
    phd: 97.5
  },
  {
    title: "Farm labor contractors",
    employment: "0.2",
    none: 1,
    hs: 8.6,
    some: 17.6,
    ass: 8.1,
    uni: 45.7,
    master: 17,
    phd: 2
  },
  {
    title: "Patternmakers, wood",
    employment: "0.2",
    none: 16,
    hs: 35.8,
    some: 21.7,
    ass: 8.3,
    uni: 14,
    master: 3.7,
    phd: 0.5
  }
];

const numcheck = (level) => {
  /*
  none: 19.8,
  hs: 48.2,
  some: 19.1,
  ass: 6.2,
  uni: 5.7,
  master: 0.8,
  phd: 0.1*/
  var x = null;
  if (level === "none") {
    x = 1;
  } else if (level === "hs") {
    x = 2;
  } else if (level === "some") {
    x = 3;
  } else if (level === "ass") {
    x = 4;
  } else if (level === "uni") {
    x = 5;
  } else if (level === "master") {
    x = 6;
  } else if (level === "phd") {
    x = 7;
  }
  return x;
};
class Bachelors extends React.Component {
  constructor(props) {
    super(props);

    //let testing = [];
    let noData = [];
    let date = [];
    let currentData = [];
    let currentDataData = [];
    let occupations = [];
    var all = null;
    bachelors.forEach((x, i) => {
      const industry = x.title;
      occupations.push(industry);
      if ("Total, all occupations" === industry) {
        Object.keys(x)
          .filter((f) => !["title", "employment"].includes(f))
          .forEach((el, i) => {
            const edulevel = numcheck(el);
            const num =
              (x[el] / 100) * Number(x.employment.replace(",", "")) * 1000;
            if (!isNaN(num) && isFinite(num)) {
              all = num;
              date.push(edulevel);
              noData.push([edulevel, 0]);
              currentData.push(num);
              currentDataData.push([edulevel, num]);
            }
          });
      }
    });
    var lowPPCS = Math.min(...currentData);
    var lowDate = Math.min(...date);
    var highPPCS = Math.max(...currentData /*, all*/);
    var highDate = Math.max(...date);
    var state = {
      all,
      occupations,
      highPPCS,
      currentDataData,
      noData,
      yAxisPPCS: highPPCS - 0,
      xAxisPPCS: highDate - lowDate,
      lowPPCS,
      highDate,
      lowDate
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.suggestBachelor !== prevProps.suggestBachelor) {
      this.update(this.props.suggestBachelor);
    }
    if (this.state.industry !== this.state.laststate) {
      this.setState({ laststate: this.state.industry }, () =>
        this.update(this.state.industry)
      );
    }
  };
  update = (statedindustry) => {
    let currentData = [];
    let currentDataData = [];
    bachelors.forEach((x, i) => {
      const industry = x.title;
      if (statedindustry === industry) {
        Object.keys(x)
          .filter((f) => !["title", "employment"].includes(f))
          .forEach((el, i) => {
            const edulevel = numcheck(el);
            const num =
              (x[el] / 100) * Number(x.employment.replace(",", "")) * 1000;
            if (!isNaN(num) && isFinite(num)) {
              currentData.push(num);
              currentDataData.push([edulevel, num]);
            }
          });
      }
    });
    var lowPPCS = Math.min(...currentData);
    var highPPCS = Math.max(...currentData /*, this.state.all*/);
    var state = {
      highPPCS,
      currentDataData,
      lowPPCS
    };
    this.setState(state);
  };
  render() {
    const { occupations } = this.state;
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

    const currentDataData = this.state.currentDataData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxisPPCS) *
        0.9 *
        this.props.lastWidth,
      ((y - 0) / this.state.yAxisPPCS) * 150
    ]);
    return (
      <div
        style={{
          width: "100%",
          minHeight: "240px",
          position: "relative",
          backgroundColor: "rgb(0,40,0)"
        }}
      >
        <div
          style={{
            width: "100%",
            top: "0px",
            position: "absolute",
            left: "0px",
            zIndex: "1"
          }}
        >
          <div
            style={{
              color: "white",
              backgroundColor: "rgba(255,255,255,.3)",
              padding: "4px 8px"
            }}
          >
            <select
              style={{
                width: "100%",
                maxWidth: "580px"
              }}
              state={this.state.industry}
              onChange={(name) => {
                this.setState({ industry: name.target.value });
              }}
            >
              {occupations.map((name) => (
                <option key={name} style={{ maxWidth: "100%" }}>
                  {name}
                </option>
              ))}
            </select>
            <a href="https://www.bls.gov/emp/data/occupational-data.htm">
              Employed
            </a>
            -
            <a href="https://www.bls.gov/emp/tables/educational-attainment.htm">
              product
            </a>
            :&nbsp;
            {shortNumber(this.state.lowPPCS)}
            &nbsp;-&nbsp;
            {shortNumber(this.state.highPPCS)}, none-phd
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
            {currentDataData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="white"
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

export default Bachelors;
