'use strict';

let fs = require('fs');
let path = require('path');

let fileLocation = path.join('/Users/StevoChi/Development/ws/angular/src/data/dc', 'dc-crime-2016.json');
let newFileLocation = path.join('/Users/StevoChi/Development/ws/angular/src/data/dc', 'dc-crime-2016-2.json');

fs.readFile(fileLocation, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  let formattedData = JSON.parse(data).map(crime => {
    return {
      id: crime.OBJECTID,
      ccn: crime.CCN,
      date: crime.REPORT_DAT,
      method: crime.METHOD,
      offense: crime.OFFENSE,
      shift: crime.SHIFT,
      location: [crime.X, crime.Y],
    };
  });

  console.log(formattedData.length);
  fs.writeFile(newFileLocation, JSON.stringify(formattedData), err => {
    if (err) {
      return console.log(err);
    }
  });
});
