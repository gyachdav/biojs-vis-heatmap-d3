// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-heatmap-d3");
var xhr = require("xhr");
xhr("./data/dummy.json", function(err,resp,data){
  var jsonData = JSON.parse(data);
  console.log(jsonData);
  var instance = new app({
    jsonData: jsonData, 
    user_defined_config: {
      colorLow: 'green',
      colorMed: 'white',
      colorHigh: 'red'
    },
    target: yourDiv.id
  });
});
