
var debug = require('debug')('index')
var snykFilter = require('./lib/snyk-filter.js');
var os = require('os');
var path = require('path');
var template, source, output;
var options = {};

if (argv.i) { // input source
  source = argv.i; // grab the next item
  if (typeof source === 'boolean') {
    source = undefined;
  }
}
  if (typeof output === 'boolean') {
    output = undefined;
  }
if (argv.json) { // output destination
  options = {"json": true};
}
if (argv.f) { // output destination

  filters = argv.f;

  if (typeof output === 'boolean') {
    output = undefined;
  }
} else {
  filters = path.join(process.cwd(), "/.snyk-filter/snyk.yml");
}



snykFilter.run(source, onReportOutput, filters, options);

      if (err) {
        return console.log(err);
      }
      console.log('Vulnerability snapshot saved at ' + output);
    console.log(report);
