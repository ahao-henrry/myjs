const fs = require('fs');

const handle = {
    main: async ctx => {
      if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>';
      } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = { data: 'Hello World' };
      } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello World</p>';
      } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
      }
    },
    jsonRes: async ctx => {
      ctx.response.type = "json";
      ctx.response.body = {
        "name": "ahao",
        "age": 18
      };
    },
    htmlRes: async ctx => {
      ctx.response.type = "html";
      ctx.response.body = fs.createReadStream("./client.html");
    }
};

module.exports = handle;