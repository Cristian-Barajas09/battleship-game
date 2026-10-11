import express from "express";
import { engine } from "express-handlebars";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "./config.js";
import gameRouter from "./routes/game.routes.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.engine("hbs", engine({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a + b,
        eq: (valueA, valueB) => valueA === valueB,
        and: (valueA, valueB) => valueA && valueB,
    },
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.set('port', config.port);

app.get('/', (_req, res) => {
    res.render('index', {});
});

app.use("/game", gameRouter);


app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${config.port}`);
});
