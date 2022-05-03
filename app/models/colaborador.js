import Sequelize, { Model } from "sequelize";

class Colaborador extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
			},
			{
				sequelize,
				modelName: "colaborador",
				tableName: "colaboradores",
			}
		);
	}
	static associate(models) {
		this.hasMany(models.ordemDeServico, {
			foreignKey: "id_colaborador",
		});
	}
}

export default Colaborador;
