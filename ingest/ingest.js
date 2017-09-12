'use strict';

let fs = require('fs');
let path = require('path');
let rp = require('request-promise');
let Bluebird = require('bluebird');

let fileLocation = path.join('/Users/StevoChi/Development/ws/angular/src/data/dc', 'dc-crime-2016.json');

fs.readFile(fileLocation, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  let crimeArray = JSON.parse(data);
  let totalCrimes = crimeArray.length;

  let prev = 0;
  let curr = 200;
  let limit = 200;

  let interval = setInterval(() => {
    let requests = crimeArray
      .filter((c, i) => {
        return prev <= i && i < curr;
      })
      .map((crime) => rp({
        uri: `http://localhost:9200/crime/dc/${crime.id}`,
        method: 'PUT',
        body: crime,
        json: true
      }));

      Bluebird.all(requests)
        .spread(() => {
          console.log(`indexed ${prev}-${curr}`);
          prev = curr;
          curr = curr + limit;
          if (curr >= totalCrimes) {
            console.log('stopped');
            clearInterval(interval);
          }
        })
        .catch(err => console.log(err));
    }, 10000);
});
