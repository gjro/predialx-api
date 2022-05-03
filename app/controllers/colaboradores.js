import Colaborador from "../models/colaborador";

class colaboradoresControllers {
	//Listagem
	async index(req, res) {
		const data = await Colaborador.findAll({
			limit: 1000,
		});

		res.json(data);
	}

	//Recuperação
	async show(req, res) {
		try {
			const id = parseInt(req.params.id);
			const colaborador = await Colaborador.findByPk(id);
			const status = colaborador ? 200 : 404;

			return res.status(status).json(colaborador);
		} catch (e) {
			console.log("Error: " + e);
		}
	}

	//Criação
	async create(req, res) {
		try {
			const { name, email, password } = req.body;
			const novoColaborador = await Colaborador.create({
				name,
				email,
				password,
			});

			return res.status(201).json(novoColaborador);
		} catch (e) {
			console.log("Error ao inserir: " + e);
		}
	}

	//Atualização
	async update(req, res) {
		try {
			const id = parseInt(req.params.id);
			const { name, email, password } = req.body;

			const retornoStatus = id >= 0 ? 200 : 400;

			const colaborador = await Colaborador.findByPk(id);
			const novoColaborador = await colaborador.update({
				name,
				email,
				password,
			});

			return res.status(retornoStatus).json(novoColaborador);
		} catch (e) {
			console.log("Error: " + e);
		}
	}

	//Exclusão
	async destroy(req, res) {
		try {
			const id = parseInt(req.params.id);
			const colaborador = await Colaborador.findByPk(id);
			const status = id >= 0 ? 200 : 404;

			colaborador.destroy();
			return res.status(status) + "destruido com sucesso";
		} catch (e) {
			console.log("Error: " + e);
		}
	}
}

export default new colaboradoresControllers();
