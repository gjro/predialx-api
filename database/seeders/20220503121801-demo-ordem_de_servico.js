"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("ordens_de_servico", [
			{
				id_cliente: 1,
				id_colaborador: 1,
				problem: "Problema 1",
				date: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_cliente: 2,
				id_colaborador: 2,
				problem: "Problema 2",
				date: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_cliente: 3,
				id_colaborador: 3,
				problem: "Problema 3",
				date: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_cliente: 1,
				id_colaborador: 2,
				problem: "Problema 4",
				date: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_cliente: 1,
				id_colaborador: 3,
				problem: "Problema 5",
				date: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("ordens_de_servico", null, {});
	},
};
