import chalk from "chalk";
import request from "request";
import cheerio from "cheerio";

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
    if (error) {
        console.error("Error:", error);
    } else {
        handleItem(html);
    }
}
function handleItem(html) {
    let setTool = cheerio.load(html);
    let contentArr = setTool("#maincounter-wrap span");

    let total = setTool(contentArr[0]).text();
    let death = setTool(contentArr[1]).text();
    let recovered = setTool(contentArr[2]).text();

    console.log(chalk.yellow("Total cases:" + total));
    console.log(chalk.red("Total Death:" + death));
    console.log(chalk.green("Total cases:" + recovered));
}
