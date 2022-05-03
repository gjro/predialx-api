"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("colaboradores", [
			{
				name: "Colaborador 1",
				email: "colaborador@example.com",
				password: "1234",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Colaborador 2",
				email: "colaborador@example.com",
				password: "1234",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Colaborador 3",
				email: "colaborador@example.com",
				password: "1234",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Colaborador 4",
				email: "colaborador@example.com",
				password: "1234",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Colaborador 5",
				email: "colaborador@example.com",
				password: "1234",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("colaboradores", null, {});
	},
};
