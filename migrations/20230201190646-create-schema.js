'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createSchema(process.env.NODE_ENV, { ifNotExists: true });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropSchema(process.env.NODE_ENV);
    }
};
