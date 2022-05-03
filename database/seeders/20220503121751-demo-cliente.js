"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("clientes", [
			{
				name: "Cliente 1",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Cliente 2",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Cliente 3",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Cliente 4",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Cliente 5",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("clientes", null, {});
	},
};
