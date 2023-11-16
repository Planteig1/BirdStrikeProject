let dataPerMonth = '[\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 1,\n' +
    '\t\t"amount" : 8928\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 2,\n' +
    '\t\t"amount" : 8598\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 3,\n' +
    '\t\t"amount" : 13234\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 4,\n' +
    '\t\t"amount" : 19166\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 5,\n' +
    '\t\t"amount" : 26518\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 6,\n' +
    '\t\t"amount" : 22704\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 7,\n' +
    '\t\t"amount" : 34950\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 8,\n' +
    '\t\t"amount" : 37395\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 9,\n' +
    '\t\t"amount" : 34890\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 10,\n' +
    '\t\t"amount" : 32876\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 11,\n' +
    '\t\t"amount" : 18141\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_MONTH" : 12,\n' +
    '\t\t"amount" : 10469\n' +
    '\t}\n' +
    ']\n'

dataPerMonth = JSON.parse(dataPerMonth);

let yearData = '[\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1990,\n' +
    '\t\t"amount" : 2105\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1991,\n' +
    '\t\t"amount" : 2510\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1992,\n' +
    '\t\t"amount" : 2650\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1993,\n' +
    '\t\t"amount" : 2624\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1994,\n' +
    '\t\t"amount" : 2706\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1995,\n' +
    '\t\t"amount" : 2821\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1996,\n' +
    '\t\t"amount" : 3025\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1997,\n' +
    '\t\t"amount" : 3554\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1998,\n' +
    '\t\t"amount" : 3802\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 1999,\n' +
    '\t\t"amount" : 5113\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2000,\n' +
    '\t\t"amount" : 6002\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2001,\n' +
    '\t\t"amount" : 5822\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2002,\n' +
    '\t\t"amount" : 6216\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2003,\n' +
    '\t\t"amount" : 5990\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2004,\n' +
    '\t\t"amount" : 6559\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2005,\n' +
    '\t\t"amount" : 7235\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2006,\n' +
    '\t\t"amount" : 7248\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2007,\n' +
    '\t\t"amount" : 7735\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2008,\n' +
    '\t\t"amount" : 7624\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2009,\n' +
    '\t\t"amount" : 9495\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2010,\n' +
    '\t\t"amount" : 9899\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2011,\n' +
    '\t\t"amount" : 10109\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2012,\n' +
    '\t\t"amount" : 10909\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2013,\n' +
    '\t\t"amount" : 11408\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2014,\n' +
    '\t\t"amount" : 13688\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2015,\n' +
    '\t\t"amount" : 13778\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2016,\n' +
    '\t\t"amount" : 13333\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2017,\n' +
    '\t\t"amount" : 14783\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2018,\n' +
    '\t\t"amount" : 16205\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2019,\n' +
    '\t\t"amount" : 17344\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2020,\n' +
    '\t\t"amount" : 11622\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2021,\n' +
    '\t\t"amount" : 15593\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"INCIDENT_YEAR" : 2022,\n' +
    '\t\t"amount" : 8362\n' +
    '\t}\n' +
    ']\n'

yearData = JSON.parse(yearData);

let randomAnimalData = '[\n' +
    '\t{\n' +
    '\t\t"species" : "Coyote",\n' +
    '\t\t"amount" : 800\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Domestic dog",\n' +
    '\t\t"amount" : 54\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Virginia opossum",\n' +
    '\t\t"amount" : 420\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Moose",\n' +
    '\t\t"amount" : 6\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Deer",\n' +
    '\t\t"amount" : 16\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Black-tailed jackrabbit",\n' +
    '\t\t"amount" : 546\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Black-tailed prairie dog",\n' +
    '\t\t"amount" : 87\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Gunnison\'s prairie dog",\n' +
    '\t\t"amount" : 18\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "White-tailed jackrabbit",\n' +
    '\t\t"amount" : 134\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Lagomorphs (rabbits, hares)",\n' +
    '\t\t"amount" : 13\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "White-tailed prairie dog",\n' +
    '\t\t"amount" : 5\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Antelope jackrabbit",\n' +
    '\t\t"amount" : 2\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "American black bear",\n' +
    '\t\t"amount" : 3\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Bearded seal",\n' +
    '\t\t"amount" : 1\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Snowshoe hare",\n' +
    '\t\t"amount" : 1\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Brown bear",\n' +
    '\t\t"amount" : 1\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"species" : "Black Tailed Jack Rabbit",\n' +
    '\t\t"amount" : 1\n' +
    '\t}\n' +
    ']\n'

randomAnimalData = JSON.parse(randomAnimalData);





