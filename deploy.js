const fetch = require('node-fetch')
const version = require("./package.json").version
var sys = require('sys')
var exec = require('child_process').exec;
fetch("https://sentry.io/api/hooks/release/builtin/5211792/492184c5362ae1da95f3fd26e5d0d9067c881c1d8390bd7f0f395e351427c077/", {
  method: "post",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({version: `My-Hyphen-Hacks@${version}`})
}).then(res => res.json()).then(res => {
  console.log(res)
})
dir = exec("npm run build && firebase deploy", function(err, stdout, stderr) {
  if (err) {
    // should have err.code here?
  }
  console.log(stdout);
});