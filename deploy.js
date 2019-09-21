var shell = require("shelljs");
var ghpages = require("gh-pages");

shell.exec("env-cmd -f ./.env.remote npm run build");
process.argv.forEach(function(val, index, array) {
  if (val === "prod") {
    ghpages.publish("build", {
      add: true,
      branch: "master",
      repo: "git@github.com:payoutsnetwork/payoutsnetwork.github.io.git"
    });
    shell.echo("Published Prod");
  }
});
