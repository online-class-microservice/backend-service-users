'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert({ tableName: 'users', schema: process.env.NODE_ENV }, [
            {
                name: "Afandi",
                profession: "Admin",
                role: "admin",
                email: "admin@example.com",
                password: await bcrypt.hash('123', 10),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Aziz",
                profession: "Front End Developer",
                role: "student",
                email: "user@example.com",
                password: await bcrypt.hash('123', 10),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete({ tableName: 'users', schema: process.env.NODE_ENV }, null, {});
    }
};
