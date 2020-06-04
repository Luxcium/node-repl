
   // escapes.

   // const tap = (fn) => (dataThrough) => {
   //    fn(dataThrough)
   //    return dataThrough
   // }


   /**
    * @param {string | Buffer | ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array} html
    */

   // function setJSDOM(myURL) {
   //    log(0, myURL);
   //    let newURL = ''
   //    let myDomElements = {
   //       window: null,
   //       document: null,
   //       body: null
   //    }
   //    try {
   //       if (myURL.toUpperCase().indexOf('HTTP') === -1) {
   //          try {
   //             newURL = "https://" + myURL
   //             setDomFromURL(newURL, myDomElements);
   //          } catch (error) {

   //             newURL = "http://" + myURL
   //             setDomFromURL(newURL, myDomElements);

   //          }
   //       } else {
   //          setDomFromURL(myURL, myDomElements);
   //       }
   //    } catch (error) {
   //       log(4, myURL);
   //       log(error.message)

   //    }
   // };

   // myRepl.context.JSDOM = JSDOM
   // myRepl.context.setJSDOM = setJSDOM






// function setDomFromURL(myURL) {
//    // log(myURL);
//    puppetUrl(myURL).then(res => {
//       myRepl.context.dom = new JSDOM(res.data.toString());
//       myRepl.context.domRaw = res.data;
//       myRepl.context.body = myRepl.context.dom.window.document.body || null;
//       myRepl.context.document = myRepl.context.dom.window.document || null;
//       myRepl.context.window = myRepl.context.dom.window || null;
//       log(myRepl.context.dom.window.document.location.toString());
//    }).catch(e => { throw e; });
// }
// setJSDOM('google.com')
// setJSDOM('https://www.barchart.com/stocks/most-active/daily-volume-leaders?viewName=main&screener=price_gt_10&orderBy=percentChange&orderDir=desc')
// let mySymbList = []
// sym = window.document.querySelectorAll('.symbol div span a')
// symb = sym.forEach(itWill=>mySymbList.push(itWill.innerText))

