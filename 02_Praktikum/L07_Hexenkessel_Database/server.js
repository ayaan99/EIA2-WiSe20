"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_PotionMaker = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_PotionMaker;
(function (L07_PotionMaker) {
    let recipes;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    // let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://Nutzer1:nutzer1@eia2.bg79w.mongodb.net/<dbname>?retryWrites=true&w=majority";
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
        recipes = mongoClient.db("PotionMaker").collection("Recipes");
        console.log("Database connected", recipes != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                if (url.query[key] != "") {
                    _response.write(key + ": " + url.query[key] + ", ");
                }
            }
            // let jsonString: string = JSON.stringify(url.query);
            // _response.write(jsonString);
            storeRecipe(url.query);
        }
        _response.end();
    }
    function storeRecipe(_recipe) {
        recipes.insert(_recipe);
    }
})(L07_PotionMaker = exports.L07_PotionMaker || (exports.L07_PotionMaker = {}));
//# sourceMappingURL=server.js.map