import Sequelize, { Model } from "sequelize";

class Cliente extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
			},
			{
				sequelize,
				modelName: "cliente",
			}
		);
	}
	static associate(models) {
		this.hasMany(models.ordemDeServico, {
			foreignKey: "id_cliente",
		});
	}
}

export default Cliente;
