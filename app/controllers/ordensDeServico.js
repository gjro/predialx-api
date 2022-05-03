import OrdemDeServico from "../models/ordemDeServico";

class OrdensDeServicoControllers {
	//Listagem
	async index(req, res) {
		const data = await OrdemDeServico.findAll({
			limit: 1000,
		});

		res.json(data);
	}

	//Recuperação
	async show(req, res) {
		try {
			const id = parseInt(req.params.id);
			const ordemDeServico = await OrdemDeServico.findByPk(id);
			const status = ordemDeServico ? 200 : 404;

			return res.status(status).json(ordemDeServico);
		} catch (e) {
			console.log("Error: " + e);
		}
	}

	//Criação
	async create(req, res) {
		try {
			const { id_cliente, id_colaborador, problem, date } = req.body;
			const novaOrdemDeServico = await OrdemDeServico.create({
				id_cliente,
				id_colaborador,
				problem,
				date,
			});

			return res.status(201).json(novaOrdemDeServico);
		} catch (e) {
			console.log("Error ao inserir: " + e);
		}
	}

	//Atualização
	async update(req, res) {
		try {
			const id = parseInt(req.params.id);
			const { id_cliente, id_colaborador, problem, date } = req.body;

			const retornoStatus = id >= 0 ? 200 : 400;

			const ordemDeServico = await OrdemDeServico.findByPk(id);
			const novaOrdemDeServico = await ordemDeServico.update({
				id_cliente,
				id_colaborador,
				problem,
				date,
			});

			return res.status(retornoStatus).json(novaOrdemDeServico);
		} catch (e) {
			console.log("Error: " + e);
		}
	}

	//Exclusão
	async destroy(req, res) {
		try {
			const id = parseInt(req.params.id);
			const ordemDeServico = await OrdemDeServico.findByPk(id);
			const status = id >= 0 ? 200 : 404;

			ordemDeServico.destroy();
			return res.status(status) + "destruido com sucesso";
		} catch (e) {
			console.log("Error: " + e);
		}
	}
}

export default new OrdensDeServicoControllers();
