import sequelize from "sequelize";
import config from "../../config/db_config.json";

import Cliente from "./cliente";
import Colaborador from "./colaborador";
import OrdemDeServico from "./ordemDeServico";

const models = [Cliente, Colaborador, OrdemDeServico];

class Database {
	constructor() {
		this.connection = new sequelize(config);
		this.init();
		this.associate();
	}

	init() {
		models.forEach((model) => model.init(this.connection));
	}

	associate() {
		models.forEach((model) => {
			if (model.associate) {
				model.associate(this.connection.models);
			}
		});
	}
}

export default new Database();
