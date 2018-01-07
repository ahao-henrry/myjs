const Koa = require('../../../environment/node-v8.9.3/node_modules/koa');
const route = require('../../../environment/node-v8.9.3/node_modules/koa/node_modules/koa-route');
const serverhandle = require("./serverhandle.js");
const app = new Koa();

app.use(route.get("/", serverhandle.main));
app.use(route.get("/json", serverhandle.jsonRes));
app.use(route.get("/html", serverhandle.htmlRes));
app.listen(3000);