#!/usr/bin/env node

// const escapes = require('./escapes-code')
const { readFileSync } = require('fs');
const repl = require("repl");
const chalk = require("chalk");
const sanctuary = require("sanctuary");
const sanctuaryDef = require("sanctuary-def");
const jsdom = require("jsdom");
const puppeteer = require('puppeteer');
const qtApi = require('questrade-ts')
const jquery = require("jquery");
const ramda = require("ramda");
const lodash = require("lodash/fp");
const { JSDOM } = jsdom;
const path = require('path')
const log = console.log
const util =  require('util')
const os =  require('os')
const HOME =  os.homedir()
// replServer.setupHistory(historyPath, callback)

util.inspect.defaultOptions =
{
  showHidden: true,
  depth: 4,
  colors: true,
  customInspect: true,
  showProxy: true,
  maxArrayLength: 25,
  breakLength: 80,
  compact: 3,
  sorted: true,
  getters: true
}
/**
 * myPup()
 * @param {string} myUrl
 */
const puppetUrl = async (myUrl='https://www.google.com') => {
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();
   await page.goto(myUrl);
   const content = await page.content();
   myRepl.context.domRaw = new JSDOM(content)
   myRepl.context.document = myRepl.context.domRaw.window.document
   console.dir(myRepl.context.document)
   // await page.screenshot({ path: 'example.png' });
   // await browser.close();
};

const myRepl = repl.start({
   terminal: true,
   useColors: true,
   ignoreUndefined: false,
   useGlobal: true,
   prompt: "\u001b[0m\u001b[45m\u001b[30m \ue74e \u001b[0m\u001b[35m\u001b[0m  ",
});

function initializeContext() {
   myRepl.prompt();

   myRepl.context.C = chalk
   myRepl.context.D = JSDOM
   myRepl.context.L = lodash
   myRepl.context.P = puppeteer
   myRepl.context.Q = jquery
   myRepl.context.R = ramda
   myRepl.context.S = sanctuary
   myRepl.context.$ = sanctuaryDef
   myRepl.context.dirLog = console.dir
   myRepl.context.document = ""
   myRepl.context.domRaw = ""
   myRepl.context.errLog = console.error
   myRepl.context.$HOME = HOME
   myRepl.context.info = console.info
   myRepl.context.log = console.log;
   myRepl.context.myPup = puppetUrl
   myRepl.context.qtApi = qtApi
   myRepl.context.qtToken = () => readFileSync(`${process.env.HOME}/tokQT.env`, 'utf8')
   // myRepl.context.startQtApi = () => {
   //    return qtApi.redeemToken(myRepl.context.qtToken)
   // }

   /**
    * @param {number} yourNumber
    */
   myRepl.context.toHex = (yourNumber) => log(chalk.cyan.bold(`0x${Math.round(yourNumber).toString(16).toUpperCase()}`))
   /**
    * @param {string} hexString
    */
   myRepl.context.fromHex = (hexString) => parseInt(hexString, 16)

   // // @ts-ignore
   console.log(chalk.yellow.bold(`Node ${process.version}`));
   myRepl.prompt();
   console.log(chalk.green(`Node ${path.resolve()}`));
   myRepl.prompt();
}

historyPath = `${HOME}/.node_repl_history`;

myRepl.setupHistory(historyPath, (err,nodeRepl)=>{
   if (err) console.error('err:',err);

   nodeRepl.on('reset', initializeContext);
   initializeContext()
})
// myRepl



exports = { myRepl };

/*
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
*/
