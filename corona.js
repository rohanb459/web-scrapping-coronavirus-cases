const request = require("request");
const cheerio = require("cheerio");
// let chalk = require("chalk");
console.log("Before");

request('https://www.worldometers.info/coronavirus', cb);
function cb(error, response, html) {
    if(error){
    console.error('error:', error); 
    // Print the error if one occurred
    }
    else{
    // console.log('html:', html); 
    // Print the HTML for the Google homepage.
    handlehtml(html);
    }
  }

  function handlehtml(html)
  {
      let selTool = cheerio.load(html);
      let contentArr = selTool("#maincounter-wrap span");
    //   console.log(h1s);
    //   console.log(h1s.length);
    // for(let i=0; i<contentArr.length; i++)
    // {
    //     let data = selTool(contentArr[i]).text();
    //     console.log(data);
    // }
    // console.log(chalk.gray(selTool(contentArr[0]).text()));
    let total = selTool(contentArr[0]).text();
    let deaths = selTool(contentArr[1]).text();
    let recovered = selTool(contentArr[2]).text();

    console.log(("Total Cases: "+ total));
    console.log(("Deaths: "+ deaths));
    console.log(("Recovered: "+ recovered));
  }