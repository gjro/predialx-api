import Sequelize, { Model } from "sequelize";

class OrdemDeServico extends Model {
	static init(sequelize) {
		super.init(
			{
				problem: Sequelize.STRING,
				date: Sequelize.DATE,
			},
			{
				sequelize,
				modelName: "ordemDeServico",
				tableName: "ordens_de_servico",
			}
		);
	}
	static associate(models) {
		this.belongsTo(models.cliente, { foreignKey: "id_cliente" });
		this.belongsTo(models.colaborador, {
			foreignKey: "id_colaborador",
		});
	}
}

export default OrdemDeServico;
