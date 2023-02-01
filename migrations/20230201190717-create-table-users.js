'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profession: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            role: {
                type: Sequelize.ENUM,
                values: ['admin', 'student'],
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            schema: process.env.NODE_ENV
        });
        await queryInterface.addConstraint(`"${process.env.NODE_ENV}".users`, {
            fields: ['email'],
            type: 'unique',
            name: 'UNIQUE_EMAIL_USERS',
        })
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable({
            tableName: 'users',
            schema: process.env.NODE_ENV
        });
    }
};
