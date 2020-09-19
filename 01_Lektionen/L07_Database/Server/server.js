"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_CocktailBar = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_CocktailBar;
(function (L07_CocktailBar) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongo 'mongodb+srv://eia2.bg79w.mongodb.net/<dbname>' --username Nutzer1";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Cocktailbar").collection("Orders");
        console.log("Database connection", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("whats up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.write("this is my response");
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_CocktailBar = exports.L07_CocktailBar || (exports.L07_CocktailBar = {}));
// mongo "mongodb+srv://eia2.bg79w.mongodb.net/<dbname>" --username Nutzer1
//# sourceMappingURL=server.js.map