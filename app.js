import express, { json } from "express";

import clientesRouter from "./app/routes/clientes";
import colaboradoresRouter from "./app/routes/colaboradores";
import ordensDeServicoRouter from "./app/routes/ordensDeServico";

import "./app/models/index";

var app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, DELETE, PUT");
	next();
});

app.use(express.json());

app.use("/clientes", clientesRouter);
app.use("/colaboradores", colaboradoresRouter);
app.use("/ordensdeservico", ordensDeServicoRouter);

export default app;
