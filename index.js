#!/usr/bin/env node

var fs = require('fs');
var snykFilter = require('./lib/snyk-filter.js');
var argv = require('minimist')(process.argv.slice(2));
var isRelative = require('is-relative');
var path = require('path');
var template, source, output;

if (argv.i) { // input source
  source = argv.i; // grab the next item
  if (typeof source === 'boolean') {
    source = undefined;
  }
}
if (argv.o) { // output destination
  output = argv.o; // grab the next item
  if (typeof output === 'boolean') {
    output = undefined;
  }
}
if (argv.f) { // output destination
  if(isRelative(argv.f)){
    filters = path.join(__dirname, argv.f);
  } else {
    filters = argv.f;
  }

  if (typeof output === 'boolean') {
    output = undefined;
  }

}


snykFilter.run(source, onReportOutput, filters);

function onReportOutput(report) {
  if (output) {
    fs.writeFile(output, report, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Vulnerability snapshot saved at ' + output);
    });
  } else {
    console.log(report);
  }
}
