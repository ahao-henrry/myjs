let http = require("http");
let https = require("https");
let cheerio = require("cheerio");

https.get('https://fstoppers.com/community', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
        dealData(rawData);
        /*let $chee = cheerio.load(rawData);
        $chee("#quicktabs-community_members .name a").each(function(i, elm) {
            console.log($chee(this).text(), $chee(this).attr("href"));
        });*/
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

function dealData(data) {
    let $chee = cheerio.load(data);
    let name = new Set();
    let mainpage = new Set();
    let map = new Map();
    $chee("#quicktabs-community_members .name a").each(function(i, elm) {
        let name1 = $chee(this).text();
        let page1  = $chee(this).attr("href");
        map.set(name1, page1);
    });
    console.log(map2obj(map));
}

//map to object
function map2obj(map) {
    let obj = Object.create(null);
    for(let [key, value] of map.entries()) {
        obj[key] = value;
    }
    return obj;
}