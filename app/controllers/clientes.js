import Cliente from "../models/cliente";

class clientesControllers {
	//Listagem
	async index(req, res) {
		const data = await Cliente.findAll({
			limit: 1000,
		});
		res.json(data);
	}

	//Recuperação
	async show(req, res) {
		try {
			const id = parseInt(req.params.id);
			const cliente = await Cliente.findByPk(id);
			const status = cliente ? 200 : 404;

			return res.status(status).json(cliente);
		} catch (e) {
			console.log("Error: " + e);
		}
	}

	//Criação
	async create(req, res) {
		try {
			const { name } = req.body;
			console.log(req.body, name);
			const novoCliente = await Cliente.create({
				name,
			});

			return res.status(201).json(novoCliente);
		} catch (e) {
			console.log("Error ao inserir: " + e);
		}
	}

	//Atualização
	async update(req, res) {
		try {
			const id = parseInt(req.params.id);
			console.log(id);
			const { name } = req.body;

			const retornoStatus = id >= 0 ? 200 : 400;

			const cliente = await Cliente.findByPk(id);
			const novoCliente = await cliente.update({
				name,
			});

			return res.status(retornoStatus).json(novoCliente);
		} catch (e) {
			console.log("Error: " + e);
		}
	}

	//Exclusão
	async destroy(req, res) {
		try {
			const id = parseInt(req.params.id);
			const cliente = await Cliente.findByPk(id);
			const status = id >= 0 ? 200 : 404;

			cliente.destroy();
			return res.status(status) + "destruido com sucesso";
		} catch (e) {
			console.log("Error: " + e);
		}
	}
}

export default new clientesControllers();
