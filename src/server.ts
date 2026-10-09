import express from "express";
import { engine } from "express-handlebars";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "./config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.engine("hbs", engine({ extname: ".hbs", defaultLayout: false }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.set('port', config.port);

app.get("/", (_req, res) => {
    res.render("index", { message: "Hello World" });
});


app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${config.port}`);
});
